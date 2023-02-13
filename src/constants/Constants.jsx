export const ROUTE = {
  HOME: "/",
  NOT_FOUND: "*",
  ACCOUNT: "/home/account",
  PRODUCT: "/home/product",
  PRODUCT_DETAIL: "/home/product/:productId",
  LOGIN: "/home/account/login",
  REGISTER: "/home/account/register",
  WISHLIST: "/home/wishlist",
  ///////////////////
  PAGES: "/home/pages",
  SERVICES: "/home/services",
  BLOGS: "/home/blogs",
};

// export const MAX_SEARCH_RESULT_ITEM = 10;

export const NAVBAR_DATA = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Pages",
    path: ROUTE.PAGES,
    dropdownData: [
      {
        id: 1,
        name: "Fresh food",
        data: ["About us", "Our Team", "FAQs", "Booking"],
      },
    ],
  },
  {
    id: 3,
    name: "Services",
    path: ROUTE.SERVICES,
    dropdownData: [
      {
        id: 1,
        name: "Services",
        data: ["Service", "Service details"],
      },
    ],
  },
  {
    id: 4,
    name: "Blogs",
    path: ROUTE.BLOGS,
    dropdownData: [
      {
        id: 1,
        name: "blogs",
        data: ["blogs", "blogs details"],
      },
    ],
  },
  {
    id: 5,
    name: "Contact us",
    path: "/contactus",
  },

  // {
  //   id: 7,
  //   name: "Login",
  //   path: ROUTE.LOGIN,
  // },
];
