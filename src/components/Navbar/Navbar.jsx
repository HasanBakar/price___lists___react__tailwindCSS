import React from 'react';
import { useState } from "react";
import Link from './../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Contact', path: '/contact' },
  { id: 5, name: 'Blog', path: '/blog' },
  { id: 6, name: 'FAQ', path: '/faq' },
  { id: 7, name: 'Login', path: '/login' }
];


    return (
        <nav className="bg-purple-50" >
                <div onClick={() => setOpen(!open)} className="md:hidden" >

                    <span>
                        {open === true ? 
                        <XMarkIcon className="h-8 w-8 text-blue-500" /> 
                        : <Bars3Icon className="h-8 w-8 text-blue-500" /> 
                        }
                        </span>
                    
                    
                </div>
                
                    <ul className={`md:flex md:space-x-28 mb-3 pb-2 shadow-lg absolute md:static duration-500 bg-purple-300
                    ${open==true ?
                         'top-8'
                         : '-top-80'} `} >
                        {                           
                        routes.map(route => <Link
                        key={route.id}
                        route ={route}
                        ></Link>)
                        }                                               
                    </ul>
                
        </nav>
    );
};

export default Navbar;