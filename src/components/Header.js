import React from 'react';
import './Header.css';

function Header ({resumeData,handleClick}) {
    return (
      <React.Fragment>
        <header id="home">
         <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home" onClick={handleClick}>Home</a></li>
               <li><a className="smoothscroll" href="#about" onClick={handleClick}>About</a></li>
             <li><a className="smoothscroll" href="#resume" onClick={handleClick}>Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio" onClick={handleClick}>Works</a></li>
               <li><a className="smoothscroll" href="#contact" onClick={handleClick}>Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role} {resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} rel="noreferrer" target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="fa fa-chevron-down"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }

export default Header;