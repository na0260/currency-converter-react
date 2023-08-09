const Converter = (props) => {
    return (
        <div>
            <div className="md:container md:mx-auto md:py-28 ">
                <div className="grid grid-cols-1 pb-4 mb-5">
                    <p className="text-center font-mono text-2xl font-extrabold uppercase mb-8">Currency Converter</p>
                    <p className="text-center font-serif text-xl font-bold">1 USD = 111.00 BDT</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4">
                    <div className="flex md:justify-end">
                        <div className="form-control w-full max-w-xs">
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                {
                                    props.currencyCode.map((item,index)=>{
                                        return (<option key={index} value={item}>{props.currency[index]}</option>);
                                    }
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex md:justify-start">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex md:justify-end">
                        <div className="form-control w-full max-w-xs">
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                {
                                    props.currencyCode.map((item,index)=>{
                                            return (<option key={index} value={item}>{props.currency[index]}</option>);
                                        }
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex md:justify-start">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>
        </div>
)
    ;
};

export default Converter;