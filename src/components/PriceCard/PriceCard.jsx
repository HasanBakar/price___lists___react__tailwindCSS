import React from 'react';

const PriceCard = ({p}) => {
    const {name,description,price} = p;

    return (
        <div className="bg-purple-200 p-7 rounded-lg hover:bg-purple-400" >
            <h5 className="text-center font-bold text-2xl my-5" >${price}/mon</h5>
            <h3 className="text-center font-semibold text-5xl my-2" >{name}</h3>
             <p className="text-center font-semibold text-xl my-2" >{description}</p>
             <p  className="text-center my-4"><button className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-300 text-purple-50 hover:text-purple-900" >Enjoy Now</button></p>
        </div>
    );
};

export default PriceCard;