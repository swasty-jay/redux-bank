const InitialStateCustomer = {
  fullName: "",
  nationalId: "",
  CreatedAt: "",
};

export default function CustomerReducer(state = InitialStateCustomer, action) {
  switch (action.type) {
    case "customer/CreateCustomer":
      return {
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        CreatedAt: action.payload.CreatedAt,
      };
    case "customer/UpdateName":
      return {
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function CreateCustomer(fullName, nationalId) {
  return {
    type: "customer/CreateCustomer",
    payload: { fullName, nationalId, CreatedAt: new Date().toISOString() },
  };
}

export function UpdateName(fullName) {
  return {
    type: "account/UpdateName",
    payload: fullName,
  };
}
