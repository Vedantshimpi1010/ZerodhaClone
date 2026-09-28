import React from 'react'
function Hero() {
    return (
        <div className="container border-bottom mb-5">
            <div className="text-center p-3 mt-5">
                <h1 className=" text-muted fs-2">Zerodha Products</h1>
                <h3 className="text-muted mt-3 fs-4">Sleek, modern and intuitive trading platforms</h3>
                <p className="mt-3 mb-5 fs-5">Check out our{" "} <a href="#" style={{ textDecoration: "none" }}>investement offerings{" "} <i class="fa-solid fa-arrow-right-long"></i> </a></p>
            </div>
        </div>
    );
}

export default Hero;