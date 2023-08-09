import Converter from "./components/Converter.jsx";
import {useEffect, useState} from "react";
import currencies from "./utils/APICalls.js";

function App() {
    const [currency,setCurrency] = useState([]);
    const [currencyCode,setCurrencyCode] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const data = await currencies();
            setCurrency(Object.values(data));
            setCurrencyCode(Object.keys(data));
        })()
    },[])
  return (
    <>
      <Converter currency={currency} currencyCode={currencyCode}/>
    </>
  )
}

export default App
