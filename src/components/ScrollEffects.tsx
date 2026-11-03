import { useEffect, useRef, type CSSProperties } from 'react';

/**
 * Site-wide scroll motion:
 *  - [data-reveal="variant"]       element animates in once it enters the viewport
 *  - [data-reveal-stagger="style"] children animate in one after another
 *  - [data-parallax="speed"]       element drifts relative to its parent while scrolling
 *  - a thin progress bar across the top of the page
 * Animation styles live in global.css and only apply when <html> has the `motion` class
 * (set in index.html unless the visitor prefers reduced motion).
 */
export default function ScrollEffects() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('motion')) return;

    const seen = new WeakSet<Element>();
    let parallax: HTMLElement[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add('is-visible');
          io.unobserve(el);
          // Once a cascade has played, hand the children back their own hover transitions.
          if (el.hasAttribute('data-reveal-stagger')) {
            const count = Math.min(el.children.length, 11);
            setTimeout(() => el.removeAttribute('data-reveal-stagger'), 1300 + count * 90);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const max = root.scrollHeight - vh;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;

      for (const el of parallax) {
        // Measure the parent so the element's own offset doesn't feed back into the calculation.
        const box = (el.parentElement ?? el).getBoundingClientRect();
        if (box.bottom < -200 || box.top > vh + 200) continue;
        const offset = (box.top + box.height / 2 - vh / 2) * parseFloat(el.dataset.parallax || '0');
        el.style.setProperty('translate', `0 ${offset.toFixed(1)}px`);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-stagger]').forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (el.hasAttribute('data-reveal-stagger')) {
          Array.from(el.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)));
        }
        io.observe(el);
      });
      parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
      update();
    };

    // Re-scan when routes or tabs swap content in.
    let pending = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(pending);
      pending = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    scan();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(pending);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}

/** Splits a heading into words that rise out of a mask one after another. */
export function SplitWords({ text }: { text: string }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="word" style={{ '--i': i } as CSSProperties}>
            <span>{word}</span>
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </>
  );
}
