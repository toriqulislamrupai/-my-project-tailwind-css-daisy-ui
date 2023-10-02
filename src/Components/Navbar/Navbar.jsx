import Link from "../Link/Link";



const Navbar = () => {
    const routes = [
        { id: 1, path: '/home', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
      ];
      
    return (
        <nav>
            <ul className="flex">
            {
                routes.map(route=><Link key={route.id}route={route}></Link>)
            }
            
        </ul>
        </nav>
    );
};

export default Navbar;