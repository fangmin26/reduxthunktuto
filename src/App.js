
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Get from "./pages/Get"
import Target from "./pages/Target"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/get" component={Get} />
        <Route path="/target" component={Target}/>
</BrowserRouter>
    </div>
  );
}

export default App;
