import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Card } from "./Components";

function App() {
  return (
    <div className="App">
      <div className="CardContainer">
        <Card
          header={"Item 1"}
          body={"This is the first item."}
          footer={
            <div>
              <button type="button">Ok</button>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default App;
