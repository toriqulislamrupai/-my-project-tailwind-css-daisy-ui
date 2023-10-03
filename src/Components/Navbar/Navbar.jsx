import { useState } from "react";
import Link from "../Link/Link";
import { BiMenu,BiMessageX } from 'react-icons/bi';



const Navbar = () => {
    const[open,setOpen]=useState(false);
    const routes = [
        { id: 1, path: '/home', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
      ];
      
    return (
        <nav className="bg-lime-600 p-6" >
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <BiMessageX></BiMessageX>
                    : <BiMenu ></BiMenu>
                }
            
            </div>
            <ul className={`md:flex absolute duration-1000 
            {
                ${open?'top-16':'hidden'}
            }
            bg-lime-600`}>
                
            {
                routes.map(route=><Link key={route.id}route={route}></Link>)
            }
            
        </ul>
        </nav>
    );
};

export default Navbar;