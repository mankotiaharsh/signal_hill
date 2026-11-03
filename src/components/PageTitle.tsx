import { useEffect } from 'react';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} — Signal Hill - Devonport Bar & Restaurant`
      : 'Signal Hill - Devonport Bar & Restaurant';
  }, [title]);
}
