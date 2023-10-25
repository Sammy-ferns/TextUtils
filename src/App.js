import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
// import TextForm from "./Components/TextForm";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        {/* <TextForm heading="Please enter the text" /> */}
        <About />
      </div>
    </div>
  );
}

export default App;
