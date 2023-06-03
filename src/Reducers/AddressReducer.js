export const initialState = {
    address: [
      {
        id: "1",
        name: "Aman Padgelwar",
        street: "XYZ;",
        city: "MUMBAI",
        state: "MAHARASHTRA",
        country: "India",
        postalCode: "123456",
        MobileNum: "91000301130",
      },
    ],
    updatedId: null,
  };
  
  export const AddressReducer = (state, action) => {
    switch (action.type) {
      case "ADD_NEW_ADDRESS":
        return {
          ...state,
          address: [...state.address, action.payload],
          updatedId: null,
        };
      case "REMOVE_ADDRESS":
        return {
          ...state,
          address: state.address.filter(({ id }, i) => action.payload !== id),
        };
      case "EDIT_ADDRESS":
        return {
          ...state,
          updatedId: action.payload,
        };
      case "UPDATE_ADDRESS":
        return {
          ...state,
          address: action.payload,
          updatedId: null,
        };
      default:
        return state;
    }
  };