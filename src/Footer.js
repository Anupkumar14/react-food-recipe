import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faCreditCard} from '@fortawesome/free-solid-svg-icons';
import {faCcVisa,faCcPaypal,faCcMastercard,faInstagram,faTwitter,faFacebook,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return (<>
          <div className="bg-dark" style={{padding:"15px 10px 5px 25px"}}>
            <div className="row text-white">
                <div className="col-5"><h2>About Us</h2></div>
                <div className="col-3"><h2>Upcoming Dishes</h2></div>
                <div className="col-2"><h2>Quick Links</h2></div>
                <div className="col-2"><h2>Support</h2></div>
            </div>
            <div className="row text-white">
               <div className="col-5" style={{paddingTop:"10px"}}>We are making our sincere efforts to bring the food recipe to you. Now in the middle of pandemic , </div>
               <div className="col-3">
                   <div className="row" style={{paddingTop:"10px"}}><span><a href="#" style={{color:"white",textDecoration:"none"}}>Murgh Makhani</a></span></div>
                   <div className="row" style={{paddingTop:"10px"}}><span><a href="#" style={{color:"white",textDecoration:"none"}}>Tandoori Chicken</a></span></div>
                   <div className="row" style={{paddingTop:"10px"}}><span><a href="#" style={{color:"white",textDecoration:"none"}}>Malai Kofta</a></span></div>
                   <div className="row" style={{paddingTop:"10px"}}><span><a href="#" style={{color:"white",textDecoration:"none"}}>Palak Paneer</a></span></div>
               </div>
               <div className="col-2">
                   <div className="row" style={{paddingTop:"10px"}}><span><a href="#" style={{color:"white",textDecoration:"none"}}>Login</a></span></div>
                   <div className="row" style={{paddingTop:"10px"}}><span><a href="#" style={{color:"white",textDecoration:"none"}}>Contact Us</a></span></div>
                   <div className="row" style={{paddingTop:"10px"}}><span>Terms & Conditions</span></div>
                   <div className="row" style={{paddingTop:"10px"}}><span>Privacy policy</span></div>
               </div>
               <div className="col-2">
                   <div className="row" style={{paddingTop:"10px"}}><span><FontAwesomeIcon icon={faEnvelope}/>&nbsp;FoodRecipe@gmail.com</span></div>
                   <div className="row" style={{paddingTop:"10px"}}><span><FontAwesomeIcon icon={faPhone}/>&nbsp;91+ 9426357115</span></div>
                   <div className="row" style={{paddingTop:"10px"}}><span><FontAwesomeIcon icon={faInstagram}/>&nbsp;&nbsp;
                   <FontAwesomeIcon icon={faFacebook}/>&nbsp;&nbsp;
                   <FontAwesomeIcon icon={faYoutube}/>&nbsp;&nbsp;
                   <FontAwesomeIcon icon={faTwitter}/>&nbsp;&nbsp;
                   <FontAwesomeIcon icon={faLinkedin}/>
                   </span></div>
                   <div className="row" style={{paddingTop:"10px"}}><span><FontAwesomeIcon icon={faCreditCard}/>&nbsp;&nbsp;
                   <FontAwesomeIcon icon={faCcVisa}/>&nbsp;&nbsp;
                   <FontAwesomeIcon icon={faCcMastercard}/>&nbsp;&nbsp;
                   <FontAwesomeIcon icon={faCcPaypal}/></span></div>
               </div>
            </div>
            <div className="row text-white">
                <div className="col" style={{paddingTop:"10px"}}><center><p>Copyright © 20020-2030 , All Right Reserved</p></center></div>
            </div>
          </div>
    </>);
}

export default Footer;