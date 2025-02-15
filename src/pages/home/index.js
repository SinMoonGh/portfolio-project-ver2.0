import './style.css';

const Navbar = () => {
    return (
        <nav className="navbar-position">            
            <div className="">
                <ul className="flex space-x-8">
                    <li className="mx-4"><a className="font-mono text-3xl text-gray-800 hover:text-gray-600 transition-colors duration-200 no-underline" href="/">home</a></li>
                    <li className="mx-4"><a className="font-mono text-3xl text-gray-800 hover:text-gray-600 transition-colors duration-200 no-underline" href="/about">about</a></li>
                    <li className="mx-4"><a className="font-mono text-3xl text-gray-800 hover:text-gray-600 transition-colors duration-200 no-underline" href="/projects">projects</a></li>
                </ul>
            </div>
        </nav>        
    )
}

const Home = () => {
    return (
        <div className="container">
            <Navbar />            
        </div>
    )
}

export default Home;
