import axios from "axios";

const baseURL = "https://api.frankfurter.app/";
export default async function conversion(amount,fromCur,toCur){
    const res = await axios.get(baseURL+`latest?amount=${amount}&from=${fromCur}&to=${toCur}`);
    if (res.status === 200){
        return res;
    }else{
        return [];
    }
}