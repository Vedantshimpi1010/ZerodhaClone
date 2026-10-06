import React from 'react'
function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">

                <h1 className="fs-4 text-start">To create a ticket, please contact our support team at  <a href="mailto:support@zerodha.com">support@zerodha.com</a>
                </h1>

                <div className="col-4 p-5 mt-5 mb-3">
                    <h4 className="fs-5 mb-3"><i class="fa-solid fa-square-plus"></i> Account Opening</h4>
                    
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Online Account Opening</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Offline Account Opening</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Account Update</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Account Closure</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Document Verification</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Address Update</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>General Queries</a>
                </div>

                <div className="col-4 p-5 mt-5 mb-3">
                    <h4 className="fs-5 mb-3"><i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Login Credentials</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Account Modification</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Segment Addition</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>DP ID and bank details</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Your Profile</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Transfer and conversions of shares</a><br/>
                </div>

                <div className="col-4 p-5 mt-5 mb-3">
                    <h4 className="fs-5 mb-3"><i class="fa-solid fa-question-circle"></i> General Queries</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Margin/Leverage</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Kite Web and Mobile</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Trading FAQs</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Corporate Actions</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Sentinel</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Kite API</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>GTT</a>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;