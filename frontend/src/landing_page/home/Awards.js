import React from 'react'
function Awards() {
    return ( 
        <div className="container">
            <div className="row mb-5">
                <div className="col-6 p-5">
                    <img src="media\images\largestBroker.svg" alt="largestBroker image" className="mb-5" />
                </div>
                <div className="col-6 p-5 ">
                    <h1 className="mb-3" style={{fontSize: "40px"}}>Largest stock broker in india</h1>
                    <p className="mb-5" style={{fontSize: "20px"}}>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className="row mb-5">
                        <div className="col-6 ">
                            <ul style ={{listStyleType: "disc", fontSize: "18px"}}>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul style ={{listStyleType: "disc", fontSize: "18px"}}>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media\images\pressLogos.png" alt="pressLogos image" className="mb-5" style={{width: "90%"}} />
                </div>
            </div>
        </div>
     );
}

export default Awards;