import { useEffect, useState } from "react";
import "./App.scss";
import DataFetchSuspense from "./DataSuspense/DataFetchSuspense";

function App() {
  return (
    <div className="App">
      <DataFetchSuspense />
    </div>
  );
}

function DataList() {
  const [dataList, setDataList] = useState<string[]>([]);
  useEffect(() => {
    let current = true;
    fetch("url")
      .then((res) => res.json())
      .then((data) => {
        if (current)
        setDataList(data)
      });
    return ()=>{
      current = false;
    }
  }, []);
  return (
    <ul className="DataList">
      {dataList.map((data, index) => (
        <li key={index}>{data}</li>
      ))}
    </ul>
  );
}

export default App;
