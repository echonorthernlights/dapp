import {
  Welcome,
  Footer,
  Loader,
  NavBar,
  Services,
  Transactions,
} from "./components";
import "./index.css";

function App() {
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
