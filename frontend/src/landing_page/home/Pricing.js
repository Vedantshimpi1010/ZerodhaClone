import React from 'react'
function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-4 mb-5">
                    <h1 className="mb-3" style={{fontSize: "35px"}}>Unbeatable pricing</h1>
                    <p className="mb-3" style={{fontSize: "20px"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="mx-3 fs-5" style={{textDecoration: "none"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i> </a>

                </div>
                <div className="col-2 mb-5"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col border p-3">
                            <h1 className="mb-3" style={{fontSize: "35px"}}><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p className="mb-3" style={{fontSize: "20px"}}>Free equity delivery and<br/>direct mutual funds</p>
                        </div>
                        <div className="col border p-3">
                            <h1 className="mb-3" style={{fontSize: "35px"}}><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p className="mb-3" style={{fontSize: "20px"}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;