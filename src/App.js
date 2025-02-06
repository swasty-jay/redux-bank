import CreateCustomer from "./Features/Customers/CreateCustomer";
import Customer from "./Features/Customers/Customer";
import AccountOperations from "./Features/Accounts/AccountOperations";
import BalanceDisplay from "./Features/Accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((store) => store.Customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
