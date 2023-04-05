import React from 'react';

const Link = ({route}) => {
    const {name, path} = route;
    return (
       <li className="font-semibold hover:outline-1 hover:pb-2 list-none hover:bg-purple-500 hover:rounded hover:text-rose-200 px-2 py-1 text-2xl" >
                <a href={path} >{name}</a>
        </li>
        
    );
};

export default Link;