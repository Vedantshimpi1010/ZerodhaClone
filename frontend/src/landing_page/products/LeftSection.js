import React from 'react'
function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container p-3 mb-5 ">
            <div className="row p-3 mb-5">
                <div className="col-5 p-3 mb-5">
                    <img src={imageUrl} alt={productName} className="mb-5" style={{ width: "90%" }} />
                </div>

                <div className="col-2 p-3 mb-5"></div>

                <div className="col-5 p-3 mb-5">
                    <div className="">
                        <h1 className=" text-muted fs-2">{productName}</h1>
                        <p className="text-left mb-3" style={{ fontSize: "20px" }}>{productDescription}</p>

                        <div>
                            <a href={tryDemo} className="mx-3 fs-5" style={{ textDecoration: "none" }}>Try demo <i class="fa-solid fa-arrow-right-long"></i> </a>
                            <a href={learnMore} className="mx-3 fs-5" style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right-long"></i> </a>
                        </div>

                        <div> 
                            <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play Badge" className="mt-3" style={{ width: "150px" }} /></a>
                            <a href={appStore}><img src="media/images/appStoreBadge.svg" alt="App Store Badge" className="mt-3 mx-3" style={{ width: "150px" }} /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;