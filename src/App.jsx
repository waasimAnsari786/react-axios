import React, { useEffect, useState } from "react";
import { getData } from "./services/GetService";
import Card from "./components/Card";
import "./index.css";

export default function App() {
  const [API_Data, setAPI_Data] = useState([]);

  const printData = async () => {
    const res = await getData();
    setAPI_Data(res.data);
  };

  useEffect(() => {
    printData();
  }, []);

  return (
    <>
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-2 ">
        {API_Data.map((curElem) => {
          return <Card data={curElem} />;
        })}
      </section>
    </>
  );
}
