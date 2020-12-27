import React from 'react';
import './Header.css';

function Header ({resumeData,navbarClasses,headerRef,visibleSection}) {
 
  return (
       <div >
        <header id="home" >
         <nav id="nav-wrap" className={navbarClasses.join(" ")} ref={headerRef}>
            <ul id="nav" className="nav">
               <li className="current"><a className={`smoothscroll ${visibleSection === "home" ? "selected" : ""}`}  href="#home" >Home</a></li>
               <li><a className={`smoothscroll ${visibleSection === "about" ? "selected" : ""}`}  href="#about" >About</a></li>
             <li><a className={`smoothscroll ${visibleSection === "resume" ? "selected" : ""}`}  href="#resume" >Resume</a></li>
               <li><a className={`smoothscroll ${visibleSection === "portfolio" ? "selected" : ""}`}  href="#portfolio" >Works</a></li>
               <li><a className={`smoothscroll ${visibleSection === "contact" ? "selected" : ""}`}  href="#contact" >Contact</a></li>
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
      </div>
     
    );
  }

export default Header;