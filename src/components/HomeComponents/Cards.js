import React from 'react';
import Bitcoin from '../../assets/images/Bitcoin1.svg'
import Ripple from '../../assets/images/Ripple.png'
import Bnb from '../../assets/images/Binance.png'
import Eth from '../../assets/images/Ethereum.png'
import Usdt from '../../assets/images/Usdt.png'
import Trade from '../../assets/images/trade.png'

const GiftCards = () => {
    return ( 
        <>  
         <div className="cards">
              <div className="text-center">
                    <h3 className="steps-head">Trade your Cryptos with us</h3>
                </div>

                {/* first cards */}
                <div className="row mt-5">
                    <div className="col-lg-2 col-6 mb-4">
                        <div>
                            <img src={Bitcoin} className="img-fluid" alt="cryptos" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={Ripple} className="img-fluid" alt="cryptos" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 mb-4">
                        <div>
                            <img src={Bnb} className="img-fluid" alt="cryptos" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={Eth} className="img-fluid" alt="cryptos" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={Usdt} className="img-fluid" alt="cryptos" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={Trade} className="img-fluid" alt="cryptos" />
                        </div>
                    </div>
                </div>


        </div>

        </>
     );
}
 
export default GiftCards;