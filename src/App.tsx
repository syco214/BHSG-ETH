import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Sol from "./pages/sol";
import Eth from "./pages/eth";
import Land from "./pages/land";
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <ParallaxProvider>
    <Router>
      <Route path="/home" exact component={Land} />
      <Route path="/sol" exact component={Sol} />
      <Route path="/" exact component={Eth} />
    </Router>
    </ParallaxProvider>
  );
};

export default App;
