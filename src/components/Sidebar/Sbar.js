// import logo from '../../assets/images/logo-1.png';
import logo2 from '../../assets/images/logo-2.png';
import './Sbar.css';
// import { Link, NavLink } from 'react-router-dom';
// import { ImHome, ImUser, ImPhone, ImLaptop ,ImLinkedin,ImInstagram,ImGithub } from "react-icons/im";
// import { HiViewList } from "react-icons/hi";
// import fileDownload from 'js-file-download';
import file from '../../assets/Pdfs/file_pdf.pdf';
// import myFile from '../../assets/Pdfs/file.pdf';




const PDF_FILE_URL = 'file_pdf.pdf';
// const downloadFileURL = (fileURL) => {
//     window.open(fileURL);
//   };
const Sidebar = () => {
    
    return (
        <>
        {/* <div className='nav-bar'>
            <Link className='logo' to="/">
                <img className='dok' src={logo} alt='LOGO' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" className='home-link' to="/">
                   
                    <span id='bin' className='nav-name'>Home</span>

                    <div className='icons24' color='#4d4d4e'>

                        <span className='icons'><ImHome /></span>
                    </div>
                    
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <span className='nav-name'>About</span>
                    <div className='icons' color='#4d4d4e'>

                        <ImUser />
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <span className='nav-name'>Contact</span>
                    <div className='icons' color='#4d4d4e'>

                        <ImPhone />
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skill-link" to="/skill">
                    <span className='nav-name'>Skill</span>
                    <div className='icons' color='#4d4d4e'>

                        <ImLaptop />
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                    <span className='nav-name'>Projects</span>
                    <div className='icons' color='#4d4d4e'>

                        <HiViewList />
                    </div>
                </NavLink>

            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/om-makwana-a61063242' >
                        <div>
                            <ImLinkedin/>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://instagram.com/om_makwana786?igshid=ZDdkNTZiNTM=' >
                        <div>
                            <ImInstagram/>
                        </div>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/makwanaom' >
                        <div>
                            <ImGithub/>
                        </div>
                    </a>
                </li>
            </ul>

        </div> */}

        <div className='text-zone'>
        
        <h1 className='font-for-home'>Hi, <br/><br/> My Name is <i className='name-design'>Om Makwana.</i>  </h1> <br/>
        <br/> <br/> <br/> <br/> <br/> <br/><br/>
        <h2 className='font-for-home'> I'm a Web developer.</h2> 
        <br/> <br/> <br/> <br/> <br/> 
        <h2 className='font-for-home'> I'm also interested in Artificial intelligence, Machine learning , Internet of things(IOT)</h2>
        <br/> <br/> <br/>
        
            <img className='imog' src={logo2} alt="developer" />
             
        </div>
     <div >
      <a href={file} download="Om_Resume.pdf">
   <button  className="download-resume-button">Resume</button>
</a> 
       
    {/* <button className='download-resume-button'  onClick={()=>downloadFile(PDF_FILE_URL)} >Resume</button> */}
    
  {/* <a href='omresume.pdf' download={file.pdf}>Resume</a>  */}
        </div>        
        </>
    )
}

export default Sidebar;

