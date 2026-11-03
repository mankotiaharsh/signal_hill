const CDN = 'https://images.squarespace-cdn.com/content/v1/5f7256b942babc77ee768dff';
const SITE = 'https://www.signalhill.co.nz';

export const business = {
  name: 'Signal Hill',
  tagline: 'Bar & Restaurant',
  address: '24 Victoria Road, Devonport',
  addressFull: '24 Victoria Road, Devonport, Auckland 0624',
  hours: '11.30am – late everyday',
  phone: '(09) 445 0193',
  phoneHref: 'tel:+6494450193',
  email: 'info@signalhill.co.nz',
  directions: 'https://goo.gl/maps/4iHp6YB48uEMvfZJ7',
  instagram: 'https://www.instagram.com/signalhilldevonport/',
  facebook: 'https://www.facebook.com/signalhilldevonport',
  orderOnline: 'https://signalhill.yourorder.io',
};

export interface NavLink {
  label: string;
  to: string;
}

export const mainNav: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Contact', to: '/contact' },
];

export const footerNav: NavLink[] = [...mainNav, { label: 'Press', to: '/press' }];

export const images = {
  logo: `${CDN}/1602556524049-F95UU9EXCWA8162U3FTH/SignalHill-rev-logo.png?format=750w`,
  hero: `${CDN}/1622170521765-R2LMXJZK9FOWC40RDAY7/P2188123.jpg?format=2500w`,
  heroSecondary: `${CDN}/1622170759375-FB2JMFU78QCDGUXYD0LT/P2188544b.jpg?format=1500w`,
  bar: `${CDN}/1622171292699-JNA7P2L244XPT582XJGM/SignalHill-bar.jpg?format=1500w`,
  gallery1: `${CDN}/1622171378052-SLZC6HW48R5HCRXEGLEU/P2188308.jpg?format=1500w`,
  gallery2: `${CDN}/1622171629775-LO1J3SY1A1UZJP9I62ON/P2188838.jpg?format=1500w`,
  illustrationSm: `${CDN}/1602027406742-GUQUAU9VGC1005SV511J/Signal-Hill-Illustration-1844-sm-bw.jpg?format=1500w`,
  illustration: `${CDN}/1601335662827-OO2E3XEB8ZOC4WXX7UNM/Signal-Hill-Illustration-1844-bw.jpg?format=2500w`,
  historic: `${CDN}/1601335763770-HCK9W6HMUG33UNXBM9LD/Signal-hill-devonport.jpeg?format=1500w`,
  bowWindow: `${CDN}/1601336043854-NYW7K0CJ9VB1CRXYREEP/bow-window-signalhill.jpg?format=1500w`,
  entrance: `${CDN}/1622174453630-ADVBL7DFAOO36R3I655T/SignalHill-Entrance.jpg?format=1500w`,
  family: `${CDN}/1608235876929-U73BFS1J2FH6BV2M6W2F/SignalHill-Family.jpg?format=1500w`,
  pressClip: `${CDN}/1608236237973-8YWE9SZ3Z1N2OYZ2ZPP3/SignalHill-Press.png?format=1500w`,
};

export interface MenuDoc {
  title: string;
  pdf: string;
  pages: string[];
}

export interface MenuPrice {
  label: string;
  price: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  /** Multiple price points, e.g. each / half dozen / dozen. */
  prices?: MenuPrice[];
  addOn?: { name: string; description?: string; price: string };
}

export interface MenuSection {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
}

export const foodMenu: MenuSection[] = [
  {
    id: 'small-plates',
    title: 'Small Plates & Sharing',
    items: [
      { name: 'Tomato & Herb Ciabatta', price: '16' },
      {
        name: 'Oysters',
        description: 'Fresh daily selection, natural with Signal House mignonette',
        prices: [
          { label: 'each', price: '7' },
          { label: '½ doz', price: '40' },
          { label: 'doz', price: '79' },
        ],
      },
      {
        name: 'Kilpatrick Oysters',
        description: 'Savoury sauce and bacon strips',
        prices: [
          { label: 'each', price: '8.50' },
          { label: '½ doz', price: '48' },
          { label: 'doz', price: '95' },
        ],
      },
      { name: 'Mussels', description: 'Creamy white wine sauce or Spanish romesco', prices: [{ label: 'dozen', price: '26' }] },
      { name: 'Market Fish Crudo', description: 'Coconut cream, tomatoes, red onion, cucumber, chilli and coriander', price: '26' },
      { name: 'Charcuterie', description: 'House-cured meats, gooseberry, walnuts and toast', price: '22' },
      { name: 'Glazed Chicken Thigh', description: 'Sesame seeds; choice of Korean or honey-soy glaze', price: '24' },
      {
        name: 'Signal Hill Platter',
        description: 'Harissa prawns, pulled lamb, calamari, grilled chicken, agria potatoes, warm toast and salad',
        price: '79',
      },
      { name: 'Crispy Calamari', description: 'Lemon, cracked pepper and tartare sauce', price: '24' },
      { name: 'Sautéed Harissa Prawns', description: 'Garlic, fresh herbs and toasted bread', price: '24' },
      { name: 'Grilled Halloumi', description: 'Orchard fruits, glazed with manuka honey', price: '24' },
      { name: 'Cheese Plate', description: 'Two curated cheeses, quince jelly and Falwasser crackers', price: '20' },
    ],
  },
  {
    id: 'mains',
    title: 'Mains',
    items: [
      { name: 'Beer-Battered Market Fish', description: 'Golden fries, salad and tartare sauce', price: '34' },
      { name: 'Chicken & Mushroom Fettuccine', description: 'Creamy truffle white wine sauce, bacon', price: '36' },
      { name: 'Roasted Pumpkin & Leek Tortellini', description: 'Kumara purée, whipped feta and seeds', price: '36' },
      {
        name: 'Waikato Angus Scotch Fillet',
        description: 'Agria potatoes, seasonal vegetables; choice of mushroom, peppercorn or red wine jus',
        price: '52',
      },
      { name: 'Chicken Escalope', description: 'Pan-roasted, creamed leeks, agria potatoes and mustard jus', price: '40' },
      {
        name: 'Pan-Seared Salmon',
        description: 'Golden cauliflower purée, broccolini, cherry tomatoes, baby potatoes, garlic-lemon butter sauce',
        price: '46',
      },
      { name: 'Lamb Rack', description: 'Potato gratin, broccolini, baby carrots, salsa verde, rosemary and thyme jus', price: '50' },
      { name: 'Slow-Cooked BBQ Pork Ribs', description: "Jack Daniel's BBQ, salad and golden fries", price: '42' },
    ],
  },
  {
    id: 'tacos',
    title: 'Tacos',
    items: [
      {
        name: 'Chicken / Lamb / Halloumi',
        description: 'Soft-shell tacos, crisp lettuce, tomato salsa, green harissa and cheese',
        price: '22',
      },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    items: [
      {
        name: 'Fattoush Salad — Chicken or Lamb',
        description: 'Lettuce, tomato, cucumber, croutons and pomegranate molasses dressing',
        price: '30',
      },
      { name: 'Salmon & Beetroot Salad', description: 'Mixed leaves, smoked salmon, feta, citrus and extra-virgin olive oil', price: '32' },
      { name: 'Greek Salad', description: 'Tomatoes, cucumber, red onion, bell pepper, Kalamata olives and feta', price: '28' },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    note: 'All burgers served with fries on a brioche bun',
    items: [
      { name: 'Chicken Burger', description: 'Grilled chicken, lettuce, cheddar, tomato and house burger sauce', price: '32' },
      {
        name: 'Wagyu & Harissa Burger',
        description: 'Beef patty, cheddar, lettuce, pickles, red onion, tomato, burger sauce and harissa',
        price: '30',
      },
      { name: 'Veggie Burger', description: 'Vegetable patty, cheddar, lettuce, tomato, onion and garlic aioli', price: '28' },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      { name: 'Triple-Cooked Agria Potato Bites', description: 'Velvety truffle cream and shaved parmesan', price: '18' },
      { name: 'Greens', description: 'Garlic and chilli oil', price: '15' },
      { name: 'Truffle Parmesan Fries', description: 'Crispy golden fries and aioli', price: '15' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      {
        name: 'Affogato',
        description: 'Vanilla ice cream and espresso',
        price: '12',
        addOn: { name: 'Add a liqueur', description: 'Kahlúa, Baileys or Frangelico', price: '10' },
      },
      { name: 'Tiramisu', description: 'Mascarpone, espresso, coffee liqueur and bittersweet cocoa', price: '22' },
      { name: 'Trio of Ice Creams', description: 'Cookie crumble', price: '16' },
      {
        name: 'Crumble',
        description: 'Stewed blueberries and apples, vanilla ice cream, custard and white chocolate crumble',
        price: '20',
      },
      { name: 'Crème Brûlée', description: 'French vanilla custard, caramelised sugar and pistachio', price: '18' },
    ],
  },
];

export const kidsMenu: MenuItem[] = [
  { name: 'Fish & Chips', description: 'Ketchup and lemon', price: '20' },
  { name: 'Chicken Strips & Fries', description: 'Ketchup', price: '20' },
  { name: 'Creamy Mac & Cheese', price: '20' },
  { name: 'Kids Burger', description: 'With fries', price: '20' },
  { name: 'Ice Cream Scoop', price: '6' },
];

export const drinksMenu: MenuDoc = {
  title: 'Drinks List',
  pdf: `${SITE}/s/SH10010-Signal-Hill-Drinks-List-Dec25.pdf`,
  pages: [
    '38afb2dd-4d94-4206-820c-2b2df22da4ce/SH10010+Signal+Hill+Drinks+List+Dec25.png',
    '838563aa-f3f5-4c05-b41d-f54b9c8b88fa/SH10010+Signal+Hill+Drinks+List+Dec252.png',
    '40bb351b-e0e9-46d7-a263-9d15d8ce810d/SH10010+Signal+Hill+Drinks+List+Dec253.png',
    '343b6bc8-686d-4aa4-b78c-4258702e522e/SH10010+Signal+Hill+Drinks+List+Dec254.png',
    'ec38d3ad-d70d-4c2b-96cd-17a888721ec4/SH10010+Signal+Hill+Drinks+List+Dec255.png',
    'ca7c3175-3adb-498a-878b-c3a592ed2378/SH10010+Signal+Hill+Drinks+List+Dec256.png',
    '25803e00-842b-410b-8183-834c9a847072/SH10010+Signal+Hill+Drinks+List+Dec257.png',
    '1af3e396-2c6f-4c1f-9ecb-802eaa87b818/SH10010+Signal+Hill+Drinks+List+Dec258.png',
    '794a5e8c-4e14-4599-817e-f0bfcf4fd4c4/SH10010+Signal+Hill+Drinks+List+Dec259.png',
  ].map((p) => `${CDN}/${p}`),
};

export interface JournalPost {
  image: string;
  caption: string;
}

const post = (id: string) => `${CDN}/${id}/image-asset.jpeg?format=750w`;

export const journal: JournalPost[] = [
  { image: post('1624432170815-O2CMWDA5NKL0I6SEPF1C'), caption: 'Orange chocolate fondant with pistachio ice cream.' },
  { image: post('1623990754564-BX2Y3ZLKIP1HTKVFOX3C'), caption: 'Charred cauliflower, hazelnut hummus and spiced nuts — lovely with a glass of Te Whare Ra Riesling.' },
  { image: post('1623712076616-GFGH1O15N0FC22873QZH'), caption: 'Rainy day? The William Oliver room seats 8–10 and can be booked privately at no charge.' },
  { image: post('1623368109646-4T2D8FRDMKUSQQ9ICOIO'), caption: 'Puhoi ricotta gnocchi, roasted mushroom, almond and parmesan.' },
  { image: post('1622531693413-STV9S2DQ8CLQFFSTT1X0'), caption: "Open normal hours this Queen's Birthday — no surcharge." },
  { image: post('1622181594181-SCA1VWIEFG6C3D5CYS5C'), caption: 'Warm up with our winter menu.' },
  { image: post('1621798276709-A30T1S22VO00UFFM4NC7'), caption: 'Our coffee comes from Chiasso Coffee Roasters, right here in Devonport.' },
  { image: post('1621561997159-3OD2YDNMVGX2VIJ0MZ7I'), caption: 'Friday means cocktails.' },
  { image: post('1620965845631-S2GA5877QV3YI1GYIDCT'), caption: 'New dishes have landed for the cooler months.' },
  { image: post('1620107754490-XSQK6GW4LTX9PL53WTRZ'), caption: "Mother's Day: champagne and a dozen oysters for $100. Bookings essential." },
  { image: post('1617146017409-1FOGHCJV2CV0YXHUVY60'), caption: 'Easter hours: closed Good Friday and Easter Sunday; reduced hours Saturday and Monday, with no surcharges.' },
  { image: post('1619836302712-J11VWP471HGFYKMQ48F9'), caption: "We're officially open in our refurbished home." },
];
