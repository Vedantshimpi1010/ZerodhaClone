import React from 'react'
function Hero() {
    return (

        <div className="container">
            <div className="row p-5 mt-5 mb-5  border-bottom text-center">
                <h1 className="fs-3">Charges</h1>
                <h3 className="text-muted mt-3 fs-3" style={{ fontWeight: "400" }}>List of all charges and taxes</h3>
            </div>
            <div className="row p-5 mt-5 mb-5">
                <div className="col-4 p-5">
                    <img src="media/images/pricing0.svg" alt="pricing0" style={{ width: "60%" }} />
                    <h1  className="fs-4 ">Free equity delivery</h1>
                    <p className="text-muted mt-3 fs-5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/other-trades.svg" alt="pricing1" style={{ width: "60%" }} />
                    <h1 className="fs-4 ">Intraday and F&O trades</h1>
                    <p className="text-muted mt-3 fs-5">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricingMF.svg" alt="pricing2" style={{ width: "60%" }} />
                    <h1 className="fs-4 ">Free direct MF</h1>
                    <p className="text-muted mt-3 fs-5">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>

    );
}

export default Hero;