import React from 'react'

function Education() {
    return ( 
        <div className="container">
            <div className="row mb-5">
                <div className="col-6 p-5">
                    <img src="media\images\education.svg" alt="education image" className="mb-5" style={{width:"90%"}}/>
                </div>

                <div className="col-6 p-5 ">
                    <h1 className="mb-5" style={{fontSize: "35px"}}>Free and open market education</h1>
                    <p className="mb-3" style={{fontSize: "20px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className="fs-5 mb-5" style={{textDecoration: "none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i> </a>

                    
                    <p className="mb-3 mt-5" style={{fontSize: "20px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className="fs-5 mb-3" style={{textDecoration: "none"}}>TradingQ&A  <i class="fa-solid fa-arrow-right-long"></i> </a>

                    
                </div>
            </div>
        </div>
     );
}

export default Education;