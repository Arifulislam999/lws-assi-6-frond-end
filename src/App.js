import "../src/main.css";
import Main from "./components/frontPage/Main";
import Navbar from "./components/frontPage/Navbar";
import Section from "./components/postPage/Section";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/post/:id" element={<Section />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
