import { Navbar, Footer, Welcome, Trasactions, Services } from "./components";
const App = () => (
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

export default App;
