import React from 'react'
function Hero() {
    return (
        <section className="container-fluid p-3" id="supportHero">
            <div className=" p-3" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>

            <div className="row p-3 m-5">
                <div className="col-6 p-3" >
                    <h2 className="mb-3 fs-3">Search for an answer or browse help topics to create a ticket</h2> 
                    <input type="text" placeholder="Eg: how do i activate F&O ..." className="mb-3"/><br/>

                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday Margin</a>
                    <a href="">Kite user manual</a>
                </div>

                <div className="col-6 p-3">
                    <h2 className="mb-3 fs-3">Featured</h2>
                    <ol>
                        <li><a href="">Current Takeovers and Dalising - January 2024</a></li>
                        <li><a href="">Latest Intraday Leverages - MIS & CO</a></li>
                    </ol>
                </div>



            </div>
        </section>
    );
}

export default Hero;