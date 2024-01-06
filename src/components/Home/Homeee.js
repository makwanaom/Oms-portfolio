import logo from '../../assets/images/logo-1.png';
import './Homeee.css'  
// import './Sbar.css';
import { Link, NavLink, useLocation} from 'react-router-dom';
import { ImHome, ImUser, ImPhone, ImLaptop ,ImLinkedin,ImInstagram,ImGithub } from "react-icons/im";
import { HiViewList } from "react-icons/hi";

import { AiOutlineClose } from "react-icons/ai"


const Homeee =({open, onClose}) =>{
    let location =useLocation();
    let currentPage = location.pathname;
    console.log(currentPage);

  if(!open) return null;
  
  return (
    <>
    <div className='nav-bar'>

    <AiOutlineClose className='side-in' onClick = {onClose}/>
            <Link  className='logo' to="/">
                <img className='dok' src={logo} alt='LOGO' />
                
            </Link>
            <nav>
                <NavLink  exact="true" activeclassname="active" className='home-link' to="/">
                   
                    {/* <span id='bin' className='nav-name'>Home</span> */}

                    <div style={currentPage === '/' ? {backgroundColor: '#B0E0E6'} : {backgroundColor:''}} className='icons24' color='#4d4d4e'>

                        <span className='icons'><ImHome /></span>
                    </div>
                    
                </NavLink>
                <NavLink  exact="true" activeclassname="active" className="about-link" to="/about">
                    {/* <span className='nav-name'>About</span> */}
                    <div style={currentPage === '/about' ? {backgroundColor: '#B0E0E6'} : {backgroundColor:''}} className='icons' color='#4d4d4e'>

                        <ImUser />
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    {/* <span className='nav-name'>Contact</span> */}
                    <div style={currentPage === '/contact' ? {backgroundColor: '#B0E0E6'} : {backgroundColor:''} } className='icons' color='#4d4d4e'>

                        <ImPhone />
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skill-link" to="/skill">
                    {/* <span className='nav-name'>Skill</span> */}
                    <div style={currentPage === '/skill' ? {backgroundColor: '#B0E0E6'} : {backgroundColor:''} } className='icons' color='#4d4d4e'>

                        <ImLaptop />
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                    {/* <span className='nav-name'>Projects</span> */}
                    <div style={currentPage === '/projects' ? {backgroundColor: '#B0E0E6'} : {backgroundColor:''} } className='icons' color='#4d4d4e'>

                        <HiViewList />
                    </div>
                </NavLink>

            </nav>
            <ul className='din'>
                <li >
                    <a  target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/om-makwana-a61063242' >
                        <div>
                            <ImLinkedin/>
                        </div>
                    </a>
                </li>
                <li className='insta'>
                    <a target="_blank" rel='noreferrer' href='https://instagram.com/om_makwana786?igshid=ZDdkNTZiNTM=' >
                        <div>
                            <ImInstagram/>
                        </div>
                    </a>
                </li>
                <li className='git'>
                    <a target="_blank" rel='noreferrer' href='https://github.com/makwanaom' >
                        <div>
                            <ImGithub/>
                        </div>
                    </a>
                </li>
            </ul>

        </div>
        </>
  );
  
};

export default Homeee