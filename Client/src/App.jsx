import "./App.css";
import { Navbar, Footer, Welcome, Trasactions, Services } from "./components";
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Trasactions />
      <Footer />
    </div>
  );
};

export default App;
