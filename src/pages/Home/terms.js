import React, {useEffect} from 'react';
import Navbar from '../../components/HomeComponents/Navbar';
import './faq.css'
import FaqImage from '../../assets/images/FaqPiqNew.svg'
import Footer from '../../components/HomeComponents/Footer';

const TermsPage = () => {

    useEffect(() =>{
        document.body.classList.add('faqBg');
        document.body.classList.remove('body-hidden');
     }, [])

    return ( 
        <>
        <Navbar />
        <div className="container" style={{marginTop: '120px'}}>

            <div className="faqDiv">

                {/* faq image */}
                <div className="faqImg">
                    <div>
                        <h3>Terms</h3>
                    </div>
                </div>

                <div className="text-center mt-2">
                    <h4 style={{fontWeight: 'bold'}}>Terms and Conditions</h4>
                   
                </div>

                {/* terms and conditions write up */}
        

                {/* terms content writeup */}
              

              

            </div>

        </div>

        <div style={{marginTop: '150px'}}>
                <Footer />
            </div>
        </>
     );
}
 
export default TermsPage;