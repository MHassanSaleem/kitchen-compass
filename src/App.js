import Pages from "./pages/Pages";
import Header from "./components/Header";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
            <Search/>
            <Category/>
            <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;