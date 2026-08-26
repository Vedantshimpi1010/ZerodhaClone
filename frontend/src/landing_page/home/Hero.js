import React from 'react'

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center mb-5">
                <img src="media\images\homeHero.png" alt="Hero image" className="mb-5" />
                <h1 className = "mt-5" style={{fontSize: "40px"}}>Invest in everything</h1>
                <p className="mt-3" style={{fontSize: "20px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-3 fs-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}
export default Hero;