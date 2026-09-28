import React from "react";
function Brokerage() {
    return (
        <div className="container">

            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-5">
                    <a href="" className="mx-3 fs-3" style={{ textDecoration: 'none' }}>
                        <h2 className="fs-2">Brokerage calculator</h2>
                    </a>
                    <ul className="text-start text-muted mt-3 fs-5" style={{ lineHeight: "2.5rem"}}>
                        <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged at ₹20 per contract.</li>
                        <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                        <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>

                    </ul>
                </div>
                <div className="col-4 p-5">
                    <a href="" className="mx-3 fs-4" style={{ textDecoration: 'none' }}>
                        <h2 className="fs-2">List of charges</h2>




                    </a>
                </div>

            </div>
        </div>
    );
}


export default Brokerage;
