const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

const storagewished = (wishlist) => {
  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist.length > 0 ? wishlist : [])
  );
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) =>   cartItems.length,
    0
  );


  let CountItem = cartItems.reduce(
    (total, product) => product.quantity,
    0
  );

  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total,CountItem };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          Note:'Aziz',
        });
      }


      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "ADD_WISHLIST":
      if (!state.wishlist.find((item) => item.id === action.payload.id)) {
        state.wishlist.push({
          ...action.payload,
        });
        storagewished(state.wishlist);
      }
      return {
        ...state,

        wishlist: [...state.wishlist],
      };

    case "REMOVE_WISHLIST":
      return {
        ...state,
      
        wishlist: [
          ...state.wishlist.filter((item) => item.id !== action.payload.id),
        ],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };
      
      case "ADDNOTE":
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.payload.id)
        ].Note=action.nott;
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "CHECKOUT":
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};
