import "./projects.css";
import logo8 from '../../assets/images/logo-8.png';
import logo9 from '../../assets/images/logo-9.png';
import logo10 from '../../assets/images/logo-10.png';


import { ImGithub } from "react-icons/im";
const projects = () => {
    return (
        <>
            <h1>
                Projects
            </h1>

            <div className="projects-all">
                <div className="no-of-cards">
                <div className="card">
                    <div class="image">
                        <img src={logo8} alt="image" />
                    </div>

                   
                    <div class="title-w">
                        <h2>
                            Women Welfare Schemes</h2>
                    </div>
                    <div class="des">
                        <p className="women-p"> This is the my first SSIP hackathon 1st prize winner project.</p>
                        
                        <a href='https://github.com/makwanaom/Women-Schemes-Website.git' >
                        <button className="git--btn">
                          <div className="gts"> GitHub</div>
                          </button>
                        </a>
                        
                    </div>


                    
                </div>

               

                    
                
                <div className="card">
                    <div class="image">
                        <img src={logo9} alt="image" />
                    </div>

                   
                    <div class="title-w">
                        <h2>
                            Working</h2>
                    </div>
                    <div class="des">
                        <p className="women-p"> In future.</p>
                        
                     
                        <button className="git--btn">
                          <div className="gts">GitHub</div>
                          </button>
                          </div>
                        
                    </div>



                    <div className="card">
                    <div class="image">
                        <img src={logo10} alt="image" />
                    </div>

                   
                    <div class="title-w">
                        <h2>
                            Working</h2>
                    </div>
                    <div class="des">
                        <p className="women-p"> In future.</p>
                        
                     
                        <button className="git--btn">
                          <div className="gts">GitHub</div>
                          </button>
                          </div>
                        
                    </div>



                    </div>
            </div>


        </>
    )
}


export default projects