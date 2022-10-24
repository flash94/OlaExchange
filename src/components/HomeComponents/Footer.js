import React from 'react';
import Logo from '../../assets/images/logo-white.png'
// import {Link} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

const Footer = () => {
    return ( 
        <>
            <div className="footer">
                <div className="row">

                    <div className="col-lg-6">
                        {/* logo */}
                        <div>
                            <img src={Logo} className="img-fluid" alt="logo" />
                        </div>
                        <p className="mt-3 mb-0" style={{fontSize: 14}}>
                        OlaExchange is the no 1 trading platform where you can exchange <br/> your cryptos for cash at maximum rates.
                        </p>
                        {/* brands */}
                        <div className="mt-3" style={{display: 'flex'}}>
                            <div className="ml-3">
                                <a target="_blank" rel="noopener noreferrer" href="#" style={{color: 'white'}}><i className="fab fa-facebook"></i></a>
                            </div>
                            <div className="ml-3">
                                <a target="_blank" rel="noopener noreferrer" href="#" style={{color: 'white'}}><i className="fab fa-twitter"></i></a>
                            </div>
                            <div className="ml-3">
                                <a target="_blank" rel="noopener noreferrer" href="#" style={{color: 'white'}}><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 mt-lg-0 mt-3">
                        <h6>OlaExchange Links</h6>
                        <ul className="mt-4 footer-links">
                            <li className="mt-3"><Link to="/">Home</Link></li>
                            <li className="mt-2"><Link to="/faq" >Support</Link></li>
                            <li className="mt-2"><Link to="/contact" >Contact Us</Link></li>
                            <li className="mt-2"><Link to="/#rate-calculator">Rate Calculator</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 mt-lg-0 mt-3">
                        <h6>Legal</h6>
                        <ul className="mt-4 footer-links">
                            <li className="mt-3"><Link to="/terms">Terms and Conditions</Link></li>
                            <li className="mt-2"><Link to="/privacypolicy" >Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 mt-lg-0 mt-3">
                        <h6>Contact Us</h6>
                        <div className="mt-4">
                            <a href="https://api.whatsapp.com/send?phone=+234816&text=Hello OlaExchange, I want to trade with you"  style={{textDecoration: 'none', color: '#fff', fontSize: 14}}>+2348168516315</a>
                        </div>
                        <div className="mt-2">
                            <a href="mailto:support@OlaExchange.com"  style={{fontSize: 14, color: '#fff', textDecoration: 'none'}}>support@OlaExchange.com</a>
                        </div>
                        <div className="mt-2">
                            <p className="mb-0" style={{fontSize: 14}}>Tinubu Square, Victoria Island, Lagos Nigeria</p>
                        </div>
                    </div>

                    

                </div>

                <div className="text-center mt-5">
                    <p className="text-white"  style={{fontSize: 14, opacity: '0.4'}}>&copy; Copyright { new Date().getFullYear()} OlaExchange.com. All Rights Reserved.</p>
                </div>
            </div>
        </>
     );
}
 
export default Footer;
