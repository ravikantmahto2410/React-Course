import {useEffect, useState} from "react"


function useCurrencyInfo(currency){// here currency is a variable and we can give any name to this variable  // Ye useCurrencyHook return karega kuch Data
    const [data,setData] = useState({})
    useEffect(()=> { //aapka koi bhi component mount hota hai uska life cycle trigger hota hai , there we have a hook called useEffect , iss method se automatically mera fetch call ho jaayega , humein ek aur function nhi bananna padwega ki achaa function call ho gya hai ab mera API call kar do 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) // api call 
        .then((res) => res.json()) // jo response mein aaya hai usko convert kar lo json format mein 
        .then((res) => setData(res[currency]))//data convert karne ke baad kahin na kahin hold karna padega
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;
// yahan tak 22:17 tak Custom hooks ban gya hai