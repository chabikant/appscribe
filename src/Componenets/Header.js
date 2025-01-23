import logo from '../resource/Logo.png';
import Shop from './Shop';
import Skills from './Skills';
import Stories from './Stories';
import About from './About';
import Contact from './Contact';
import './Header.css';
import { CiSearch, CiHeart, CiBag1, CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <header className='header-container'>
        <img src={logo} alt="Logo" className='logo'/>
        
        <div className='options'>
          <div className='icons'>
            <CiSearch size={22} />
            <CiHeart size={22} />
            <CiBag1 size={22} />
            <CiUser size={22} />
          </div>
          
          <div className='Lang'>
            <select id='lang-option'>
              <option id="first">ENG</option>
              <option id="second">HINDI</option>
              <option id="third">MARATHI</option>
            </select>
          </div>
        </div>

        <div className='Company-name'>
          <h5>LOGO</h5>
        </div>

        <div className='Other-tabs'>
          <Shop />
          <Skills />
          <Stories />
          <About />
          <Contact />
        </div>
        <hr className='Other-tabs-hr'/>
        <div className='Content'>
            <h6>DISCOVER OUR PRODUCTS </h6>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br/> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
      </header>
    </>
  );
}

export default Header;
