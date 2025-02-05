const InitialStateCustomer = {
  FullName: "",
  NationalID: "",
  CreatedAt: "",
};

export default function CustomerReducer(state = InitialStateCustomer, action) {
  switch (action.type) {
    case "customer/CreateCustomer":
      return {
        FullName: action.payload.FullName,
        NationalID: action.payload.NationalID,
        CreatedAt: action.payload.CreatedAt,
      };
    case "customer/UpdateName":
      return {
        FullName: action.payload,
      };

    default:
      return state;
  }
}

export function CreateCustomer(FullName, NationalID) {
  return {
    type: "customer/CreateCustomer",
    payload: { FullName, NationalID, CreatedAt: new Date().toISOString() },
  };
}

export function UpdateName(FullName) {
  return {
    type: "account/UpdateName",
    payload: FullName,
  };
}
