import React from 'react';
import './Footer.css'
export default function Footer ({resumeData}) {
    return (
      <footer>
      <div className="row">
        
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
       
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="fa fa-chevron-up" /></a></div>
      </div>
    </footer>
    );
  }