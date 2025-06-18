import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5' >
            <div className='row text-center'>
                <h1 className='mt-5 mb-4'>Open a TradeVerse  account</h1>
                <p className='text-muted fs-5 mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button style={{width: "20%", height:"20%", margin: "0 auto"}} type="button" class="btn btn-primary btn-sm fs-5 mb-5 mt-2">
                    Sign up for free
                </button>
            </div>
        </div>
     );
}

export default OpenAccount;