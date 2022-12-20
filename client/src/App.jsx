import {
  Welcome,
  Footer,
  Loader,
  NavBar,
  Services,
  Transactions,
} from "./components";
import "./index.css";
import { TransactionContext } from "./context/TransactionContext";
import { useContext } from "react";

function App() {
  const { value } = useContext(TransactionContext);
  console.log(value);
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
