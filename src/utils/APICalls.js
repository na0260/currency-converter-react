import axios from "axios";

const baseURL = "https://api.frankfurter.app/";

export default async function currencies(){
    const res = await axios.get(baseURL+"currencies");
    if (res.status === 200){
        return res.data;
    }else{
        return [];
    }
}