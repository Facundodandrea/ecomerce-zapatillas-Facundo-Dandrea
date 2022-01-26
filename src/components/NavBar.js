import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    
    return (
        <nav className="nav bd-grid">
<div className="nav__toggle" id="nav-toggle">
    <i className="bx bxs-grid"></i>
</div>

<Link to="" className="nav__logo">Sneaker Chill</Link>

<div className="nav__menu" id="nav-menu">
    <ul className="nav__list">
        <li classname="nav__item"><Link to="/" classname="nav__link">Home</Link></li>
        <li classname="nav__item"><Link to="/categoria/mens" classname="nav__link">Mens</Link></li>
        <li classname="nav__item"><Link to="/categoria/womens" classname="nav__link">Womens</Link></li>
        <li classname="nav__item"><Link to="/" classname="nav__link">New</Link></li>
    </ul>
</div>

<div classname="nav__shop">
<Link to={'/cart'}><CartWidget/></Link>
</div>
</nav>
    )
}

export default Navbar


