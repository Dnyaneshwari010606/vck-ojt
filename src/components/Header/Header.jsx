import {Link} from 'react-router-dom' 
import './Header.css'
const Header =() =>
{
    return (
        <div>
            <header className='Header1' >
                <nav> 
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/admission">Admission</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to ="/courses">courses</Link>
                    <Link to ="/notfound">Notfound</Link>
                </nav>
            </header>

        
        </div>
    )
}


export default Header;