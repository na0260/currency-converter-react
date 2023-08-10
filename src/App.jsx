import Converter from "./components/Converter.jsx";
import {useEffect, useState} from "react";
import currencies from "./utils/APICalls.js";
import PreLoader from "./components/PreLoader.jsx";

function App() {
    const [loader, setLoader] = useState(false);
    const [currency, setCurrency] = useState([]);
    const [currencyCode, setCurrencyCode] = useState([]);

    useEffect(() => {
        setLoader(true);
        (async () => {
            const data = await currencies();
            setCurrency(Object.values(data));
            setCurrencyCode(Object.keys(data));
        })()
        setLoader(false);
    }, [currency])
    return (
        <>
            {
                loader === true ?
                    <PreLoader/> : ""
            }
            <Converter currency={currency} currencyCode={currencyCode}/>
        </>
    )
}

export default App
