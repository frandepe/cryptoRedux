import Router from "./Router/Router";
import "./App.css";
import i18n from "./language";

function App() {
  i18n.options.interpolation.defaultVariables = {
    companyName: "cryptoApp",
  };

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
