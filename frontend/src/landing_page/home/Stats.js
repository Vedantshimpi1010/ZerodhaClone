import React from 'react'
function Stats() {
    return ( 
        <div className="container p-3 mb-5">
            <div className="row p-3 mb-5">
                <div className="col-6 p-3 mb-5">
                    <h1 className="mb-5" style={{fontSize: "35px"}}>Trust with confidence</h1>

                    <h2 className="mb-3" style={{fontSize: "25px"}}>Customer-first always</h2>
                    <p className="mb-3" style={{fontSize: "20px"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h2 className="mb-3" style={{fontSize: "25px"}}>No spam or gimmicks</h2>
                    <p className="mb-3" style={{fontSize: "20px"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span className="text-primary ">Our philosophies.</span></p>

                    <h2 className="mb-3" style={{fontSize: "25px"}}>The Zerodha universe</h2>
                    <p className="mb-3" style={{fontSize: "20px"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className="mb-3" style={{fontSize: "25px"}}>Do better with money</h2>
                    <p className="mb-3" style={{fontSize: "20px"}}>With initiatives like <span className="text-primary ">Nudge</span> and <span className="text-primary ">Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>

                    

                </div>
                <div className="col-6 p-3 mb-5">
                    <img src="media\images\ecosystem.png" alt="ecosystem image" className="mb-5" style={{width: "90%"}} />
                    <div className="text-center">
                       <a href="" className="mx-3 fs-5" style={{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i> </a> 
                       <a href="" className="mx-3 fs-5" style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;