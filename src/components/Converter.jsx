import {useEffect, useState} from "react";
import conversion from "../utils/APIConversion.js";


const Converter = (props) => {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState("");
    useEffect(()=>{
        (async ()=>{
            const res = await conversion(amount,fromCurrency,toCurrency);
            const data = await res.data;
            setConvertedAmount(data.rates[toCurrency]);
        })()
    },[fromCurrency,toCurrency,amount])
    return (
        <div>
            <div className="md:container md:mx-auto md:py-28 py-10">
                <div className="grid grid-cols-1 pb-4 mb-5">
                    <p className="text-center font-mono text-2xl font-extrabold uppercase mb-8">Currency Converter</p>
                    <p className="text-center font-serif text-xl font-bold">{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4">
                    <div className="flex md:justify-end justify-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">From</span>
                            </label>
                            <select className="select select-bordered" value={fromCurrency}
                                    onChange={(e) => setFromCurrency(e.target.value)}>
                                {
                                    props.currencyCode.map((item, index) => {
                                            return (
                                                item !== toCurrency?
                                                <option key={index} value={item}>{props.currency[index]}</option>:
                                                <option disabled key={index} value={item}>{props.currency[index]}</option>
                                            );
                                        }
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex md:justify-start justify-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="text" placeholder="Type here" value={amount} onChange={
                                (e)=>setAmount(e.target.value)
                            }
                                   className="input input-bordered w-full max-w-xs"/>
                        </div>
                    </div>
                    <div className="flex md:justify-end justify-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">To</span>
                            </label>
                            <select className="select select-bordered" value={toCurrency}
                                    onChange={(e) => setToCurrency(e.target.value)}>
                                {
                                    props.currencyCode.map((item, index) => {
                                            return (
                                                item !== fromCurrency?
                                                    <option key={index} value={item}>{props.currency[index]}</option>:
                                                    <option disabled key={index} value={item}>{props.currency[index]}</option>
                                            );
                                        }
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex md:justify-start justify-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Converted Amount</span>
                            </label>
                            <input type="text" disabled value={convertedAmount}
                                   className="input input-bordered w-full max-w-xs"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Converter;