
import React from 'react'
function RightSection({ imageUrl, productName, productDescription, learnMore }) {
    return (
        <div className="container p-3 mb-5 ">
            <div className="row p-3 mb-5">


                <div className="col-5 p-3 mb-5">
                    <div>
                        <h1 className=" text-muted fs-2">{productName}</h1>
                        <p className="text-left mb-3" style={{ fontSize: "20px" }}>{productDescription}</p>

                        <div>
                            <a href={learnMore} className="mx-3 fs-5" style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right-long"></i> </a>
                        </div>

                    </div>
                </div>

                <div className="col-2 p-3 mb-5"></div>

                <div className="col-5 p-3 mb-5">
                    <img src={imageUrl} alt={productName} className="mb-5" style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;