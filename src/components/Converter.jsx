import {useState} from "react";

const Converter = (props) => {
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState("");
    return (
        <div>
            <div className="md:container md:mx-auto md:py-28 py-10">
                <div className="grid grid-cols-1 pb-4 mb-5">
                    <p className="text-center font-mono text-2xl font-extrabold uppercase mb-8">Currency Converter</p>
                    <p className="text-center font-serif text-xl font-bold">1 USD = 111.00 BDT</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4">
                    <div className="flex md:justify-end justify-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">From</span>
                            </label>
                            <select className="select select-bordered" value={fromCurrency}
                                    onChange={(e) => setFromCurrency(e.target.value)}>
                                <option disabled selected>Select one</option>
                                {
                                    props.currencyCode.map((item, index) => {
                                            return (<option key={index} value={item}>{props.currency[index]}</option>);
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
                                <option disabled selected>Select one</option>
                                {
                                    props.currencyCode.map((item, index) => {
                                            return (<option key={index} value={item}>{props.currency[index]}</option>);
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