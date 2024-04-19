import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { FiImage } from 'react-icons/fi';
import { createGoldRateAsync, createSilverRateAsync, getGoldData, getGoldRateAsync, getSilverData, getSilverRateAsync } from "@/redux/slice/metalRate/metalRateSlice";
import { Result } from "postcss";

const setPriceOfMetalForm = ({ priceOfMetal, setPriceOfMetal, setSuccess, isOpen }) => {
    const dispatch = useDispatch();

    const [goldPrice, setGoldPrice] = useState("");
    const [silverPrice, setSilverPrice] = useState("");
    const [goldPriceAt23K, setGoldPriceAt23K] = useState("");
    const [goldPriceAt22K, setGoldPriceAt22K] = useState("");
    const [goldPriceAt18K, setGoldPriceAt18K] = useState("");

    const lastGoldPrice = useSelector(getGoldData);
    const lastSilverPrice = useSelector(getSilverData);
    useEffect(() => {
        if (lastGoldPrice && lastGoldPrice.data) {
            setGoldPrice(lastGoldPrice.data.price_24_kt);
            setGoldPriceAt23K(lastGoldPrice.data.price_23_kt);
            setGoldPriceAt22K(lastGoldPrice.data.price_22_kt);
            setGoldPriceAt18K(lastGoldPrice.data.price_18_kt);
            setSilverPrice(lastSilverPrice.data.price_per_kg);
        }
    }, [lastGoldPrice, lastSilverPrice]);

    const modalClasses = isOpen ? 'block' : 'hidden';

    const calculateGoldRate = () => {
        const calculateGoldPriceAt23K = goldPrice * 0.95;
        const calculateGoldPriceAt22K = goldPrice * 0.90;
        const calculateGoldPriceAt18K = goldPrice * 0.85;
        setGoldPriceAt23K(calculateGoldPriceAt23K.toFixed(0));
        setGoldPriceAt22K(calculateGoldPriceAt22K.toFixed(0));
        setGoldPriceAt18K(calculateGoldPriceAt18K.toFixed(0));
    }



    useEffect(() => {
        calculateGoldRate();
    }, [goldPrice]);

    const handleCancel = () => {
        setPriceOfMetal(!priceOfMetal);
    }

    const handleSubmitRate = () => {
        Promise.all([
            dispatch(createGoldRateAsync({ price_24_kt: goldPrice, price_23_kt: goldPriceAt23K, price_22_kt: goldPriceAt22K, price_18_kt: goldPriceAt18K })),
            dispatch(createSilverRateAsync({ price_per_kg: silverPrice }))]).then(() => {
                setPriceOfMetal(!priceOfMetal);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 3000)
            })
    }

    return (
        <>
            <div>
                <div className={`fixed inset-0 z-40 bg-black opacity-10 backdrop-blur-md transition-opacity ${modalClasses}`}></div>
                <div className="flex justify-center items-center fixed bottom-2 top-2 right-5 left-5 z-50">

                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmitRate();
                        }
                        }
                        className="p-8 rounded shadow-md flex flex-col justify-start overflow-y-scroll no-scrollbar h-full w-auto bg-white border border-blue-500"
                    >
                        <div className="mb-4 space-y-1">
                            <h2 className=" flex items-center m-4 text-2xl font-bold">
                                Set price of metal
                            </h2>
                        </div>

                        <div id="sectionsOfGoldAndSilver" className="flex justify-center md:flex-nowrap flex-wrap">
                            <div className="md:w-1/2 mx-2 flex flex-col items-center">
                                <h3 className="font-bold text-center mb-1">
                                    Gold price
                                </h3>

                                <div id="firstField" className="flex my-3 px-2">
                                    <div className="md:text-sm text-xs font-semibold w-full mr-1">24 karat</div>
                                    <div className="h-7 w-5/6">
                                        <input
                                            type="number"
                                            className="py-2 px-2 h-7 flex flex-row text-xs font-semibold items-center justify-center border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                            value={goldPrice}
                                            onChange={(e) => setGoldPrice(e.target.value)}
                                            placeholder="Price"
                                        />
                                    </div>
                                    <div className="md:text-sm text-xs font-semibold w-full md:mt-0 mt-1 ml-1">per gm</div>
                                </div>

                                <div id="secondField" className="flex my-3 px-2">
                                    <div className="md:text-sm text-xs font-semibold w-full mr-1">23 karat</div>
                                    <div className="h-7 w-5/6">
                                        <input
                                            type="number"
                                            className="py-2 px-2 h-7 flex flex-row text-xs font-semibold items-center justify-center border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                            value={goldPriceAt23K}
                                            onChange={(e) => setGoldPriceAt23K(e.target.value)}
                                            placeholder="Price"
                                        />
                                    </div>
                                    <div className="md:text-sm text-xs w-full font-semibold md:mt-0 mt-1 ml-1">per gm</div>
                                </div>

                                <div id="thirdField" className="flex my-3 px-2">
                                    <div className="md:text-sm text-xs font-semibold w-full mr-1">22 karat</div>
                                    <div className="h-7 w-5/6">
                                        <input
                                            type="number"
                                            className="py-2 px-2 h-7 flex flex-row text-xs font-semibold items-center justify-center border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                            value={goldPriceAt22K}
                                            onChange={(e) => setGoldPriceAt22K(e.target.value)}
                                            placeholder="Price"
                                        />
                                    </div>
                                    <div className="md:text-sm text-xs font-semibold w-full md:mt-0 mt-1 ml-1">per gm</div>
                                </div>

                                <div id="fourthField" className="flex my-3 px-2">
                                    <div className="md:text-sm text-xs font-semibold w-full mr-1">18 karat</div>
                                    <div className="h-7 w-5/6">
                                        <input
                                            type="number"
                                            className="py-2 px-2 h-7 flex flex-row text-xs font-semibold items-center justify-center border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                            value={goldPriceAt18K}
                                            onChange={(e) => setGoldPriceAt18K(e.target.value)}
                                            placeholder="Price"
                                        />
                                    </div>
                                    <div className="md:text-sm text-xs font-semibold w-full md:mt-0 mt-1 ml-1">per gm</div>
                                </div>

                            </div>
                            <div className="md:w-1/2 mx-2 flex flex-col items-center">
                                <h3 className="font-bold">
                                    Silver price
                                </h3>

                                <div id="firstField" className="flex my-3 px-2">
                                    {/* <div className="text-sm font-semibold w-full mr-1 pt-1">Price</div> */}
                                    <div className="h-7 w-5/6">
                                        <input
                                            type="number"
                                            className="py-2 px-2 h-7 flex flex-row text-xs font-semibold items-center justify-center border rounded-xl outline-none border-[#9C9C9C] text-[#111010]"
                                            value={silverPrice}
                                            onChange={(e) => setSilverPrice(e.target.value)}
                                            placeholder="Price"
                                        />
                                    </div>
                                    <div className="md:text-sm text-xs font-semibold w-full md:mt-0 mt-1 ml-1">per kg</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row justify-center space-x-6 m-2">
                            <button
                                type="submit"
                                className="w-16.3125 mt-2 rounded-xl bg-[#BB1140] text-white py-2 transition duration-300"
                            >
                                Submit
                            </button>
                            <button
                                onClick={handleCancel}
                                className="w-16.3125 mt-2 rounded-xl bg-[#BB1140] text-white py-2 transition duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default setPriceOfMetalForm;
