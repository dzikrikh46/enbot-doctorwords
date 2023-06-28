import { createContext } from "react";
import Header from "./Header";
import { useState } from "react";
import Result from "./Result";

export const InputContext = createContext();

function App() {

  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const value = {
    inputValue, setInputValue
  }
  return (
    <InputContext.Provider value={value}>

    <div className="App">
    <Header  />
    <Result />
    </div>

    </InputContext.Provider>
  );
}

export default App;
