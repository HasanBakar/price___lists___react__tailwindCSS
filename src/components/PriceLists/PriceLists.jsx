import React from 'react';
import { useState,useEffect } from "react";
import PriceCard from './../PriceCard/PriceCard';

const PriceLists = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=>{
        fetch("prices.json")
        .then(res => res.json())
        .then(data => setPrices(data))

    },[])
    return (
        <div>
            <h2 className="text-center text-4xl bg-purple-300 pb-2 font-extralight rounded-sm my-5" >Awesome Affordable Prices</h2>
            <div className="grid md:grid-cols-3 gap-5" >
                {
                    prices.map(p => <PriceCard
                    key = {p.id}
                    p = {p}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceLists;