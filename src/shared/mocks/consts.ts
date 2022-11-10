export const isReviewShown = true;

export const itemsIdProductsMock = [
  "6258661f0bf68a57c06813f5",
  "6258661f0bf68a57c06814b4",
  "6258661f0bf68a57c0681481",
  "6258661f0bf68a57c0681438",
];

export const randomNumberIdsMock = (arrayLength: number) => {
  const randArray = [];
  const itemsAmount = 1965;
  do {
    const rand = Math.floor(Math.random() * itemsAmount);
    if (!randArray.includes(rand)) {
      randArray.push(rand);
    }
  } while (randArray.length < arrayLength);
  return randArray;
};

export const itemsIdLibraryMock = [1, 2, 3, 4];

export const PRODUCTS_PAGE_LIMIT = 52;
export const FilterSkinTypes = [
  {
    key: "all",
    title: "All",
    dbTag: "all",
  },
  {
    key: "dry",
    title: "Dry",
    dbTag: "dry skin (positive)",
  },
  {
    key: "oily",
    title: "Oily",
    dbTag: "oily skin (positive)",
  },
  {
    key: "normal",
    title: "Normal",
    dbTag: "normal skin (positive)",
  },
  {
    key: "combination",
    title: "Combination",
    dbTag: "combination skin (positive)",
  },
  {
    key: "sensitive",
    title: "Sensitive",
    dbTag: "sensitive (positive)",
  },
];

export const FilterAcneProneTypes = [
  {
    key: "no",
    title: "No",
    dbTag: "",
  },
  {
    key: "yes",
    title: "Yes",
    dbTag: "acne skin (positive)",
  },
];

export const FilterLabelBenefitsTitles = {
  "dry skin (positive)": "dry skin",
  "oily skin (positive)": "oily skin",
  "normal skin (positive)": "normal skin",
  "combination skin (positive)": "combination skin",
  "sensitive (positive)": "sensitive skin",
  "acne prone (positive)": "acne prone",

  "hydrating/moisturising": "hydrated skin",
  "shine/bright/glow/lumi/rad": "brightened skin",
  "dewy (positive)": "dewier skin",
  "less dullness": "less skin dullness",
  "reduced wrinkles": "reduced wrinkles",
  "helped pimples/breakouts": "completely clearing facial acne",
  "cleared pimples/breakouts": "a reduction in the size of acne",
  "reduced pimples/breakouts": "some general improvement around acne",
  "as/ds/pig/disc (positive)":
    "faded pigmentation, discoloration, and dark spots",
  "covered/reduced redness": "less skin redness",
  "helped irritation": "less skin irritation",
  "Reduced puffiness": "less skin puffiness",
  "covered/reduced eye circles": "reduced dark eye circles or bags",
  "smoothed skin": "smoothed skin",
  "softened skin": "softened skin",
  "silky skin": "silky skin",
  "less pimples/breakouts": "less occurrence of pimples and breakouts",
  "refined pores": "refined pores",
  "healed scarring": "faded scars",
  "evened tone": "evened tone",
  plumping: "plumped skin",
  supple: "supple skin",
  "firming/tightening": "firmer and tighter skin",
  "acne skin (positive)": "acne skin",
};

export const FilterConcernTypes = [
  {
    key: "all",
    title: "All",
    dbTag: "",
  },
  {
    key: "dryness",
    title: "Dryness",
    benefits: [{ label: "hydrating/moisturising", title: "hydrated skin" }],
  },
  {
    key: "dullness",
    title: "Dullness",

    benefits: [
      { label: "shine/bright/glow/lumi/rad", title: "brightened skin" },
      { label: "dewy (positive)", title: "dewier skin" },
      { label: "less dullness", title: "less skin dullness" },
    ],
  },
  {
    key: "fine lines and wrinkles",
    title: "Fine lines and wrinkles",
    benefits: [{ label: "reduced wrinkles", title: "reduced wrinkles" }],
  },
  {
    key: "pimples and acne",
    title: "Treating acne and pimples",
    benefits: [
      {
        label: "helped pimples/breakouts",
        title: "completely clearing facial acne",
      },
      {
        label: "cleared pimples/breakouts",
        title: "a reduction in the size of acne",
      },
      {
        label: "reduced pimples/breakouts",
        title: "some general improvement around acne",
      },
    ],
  },
  {
    key: "sun damage and pigmentation",
    title: "Sun damage and pigmentation",
    benefits: [
      {
        label: "as/ds/pig/disc (positive)",
        title: "faded pigmentation, discoloration, and dark spots",
      },
    ],
  },

  {
    key: "skin redness and irritation",
    title: "Redness and irritation",
    benefits: [
      { label: "covered/reduced redness", title: "less skin redness" },
      { label: "helped irritation", title: "less skin irritation" },
    ],
  },
  {
    key: "puffiness",
    title: "Puffiness",
    benefits: [{ label: "Reduced puffiness", title: "less skin puffiness" }],
  },
  {
    key: "dark circles",
    title: "Dark circles",
    benefits: [
      {
        label: "covered/reduced eye circles",
        title: "reduced dark eye circles or bags",
      },
    ],
  },
  {
    key: "rough or uneven skin texture",
    title: "Skin texture",
    benefits: [
      { label: "smoothed skin", title: "smoothed skin" },
      { label: "softened skin", title: "softened skin" },
      { label: "silky skin", title: "silky skin" },
    ],
  },
  {
    key: "constant breakouts",
    title: "Constant breakouts",
    benefits: [
      {
        label: "less pimples/breakouts",
        title: "less occurrence of pimples and breakouts",
      },
    ],
  },
  {
    key: "large pores",
    title: "Large pores",
    benefits: [{ label: "refined pores", title: "refined pores" }],
  },
  {
    key: "scars",
    title: "Scars",
    benefits: [{ label: "healed scarring", title: "faded scars" }],
  },
  {
    key: "uneven skin tone",
    title: "Uneven skin tone",
    benefits: [{ label: "evened tone", title: "evened tone" }],
  },
  {
    key: "saggy, lifeless and tired skin",
    title: "Saggy, lifeless and tired skin",
    benefits: [
      { label: "plumping", title: "plumped skin" },
      { label: "supple", title: "supple skin" },
      { label: "firming/tightening", title: "firmer and tighter skin" },
    ],
  },
];

export const FilterProductCategory = [
  {
    selection: "Cleanse",
    mainCategory: "Cleansers",
    mainCategoryTag: "Cleansers",
    subCategory: [
      {
        label: "All",
        tag: null,
      },
      { label: "cleansers", tag: "Face Cleanser" },
      { label: "makeup removers", tag: "Makeup Remover" },
    ],
  },
  {
    selection: "Exfoliate",
    mainCategory: "Exfoliater",
    mainCategoryTag: "Exfoliater",
    subCategory: [
      {
        label: "All",
        tag: null,
      },
      { label: "exfoliators", tag: "Exfoliator" },
      { label: "peels exfoliators", tag: "Peels (Exfoliator)" },
    ],
  },
  {
    selection: "Tone",
    mainCategory: "Toner",
    mainCategoryTag: "Toner",
    subCategory: [{ label: "Toner", tag: "toner" }],
  },

  {
    selection: "Treat",
    mainCategory: "Treatments and Serums",
    mainCategoryTag: "Treatments & Serums",
    subCategory: [
      {
        label: "All",
        tag: null,
      },
      { label: "facial treatments", tag: "Facial Treatment" },
      { label: "serums,oils", tag: "Serum" },
    ],
  },
  {
    selection: "Hydrate",
    mainCategory: "Moisturizers",
    mainCategoryTag: "Moisturizers",
    subCategory: [
      {
        label: "All",
        tag: null,
      },
      { label: "moisturisers", tag: "General Moisturizer" },
      { label: "day moisturisers", tag: "Day Moisturizer" },
      { label: "night moisturisers", tag: "Night Moisturizer" },
    ],
  },

  {
    selection: "Protect",
    mainCategory: "Sunscreens",
    mainCategoryTag: "Sunscreens",
    subCategory: [{ label: "sunscreens", tag: "Sunscreens" }],
  },

  {
    selection: "Masks",
    mainCategory: "Masks",
    mainCategoryTag: "Masks",
    subCategory: [
      {
        label: "All",
        tag: null,
      },
      { label: "sheet masks", tag: "Sheet Mask" },
      { label: "wet masks", tag: "Wet Mask" },
      { label: "overnight masks", tag: "Overnight Mask" },
    ],
  },
  {
    selection: "Eye Care",
    mainCategory: "Eye Care",
    mainCategoryTag: "Eye Care",
    subCategory: [
      {
        label: "All",
        tag: null,
      },
      { label: "eye masks", tag: "Eye Mask" },
      { label: "eye moisturisers", tag: "Eye Moisturizer" },
    ],
  },
  {
    selection: "Lip Care",
    mainCategory: "Lip Care",
    mainCategoryTag: "Lip Care",
    subCategory: [{ label: "lip moisturisers", tag: "Lip Moisturizer" }],
  },
  {
    selection: "Neck Care",
    mainCategory: "Neck care",
    mainCategoryTag: "Neck care",
    subCategory: [{ label: "neck moisturisers", tag: "Neck" }],
  },
];
