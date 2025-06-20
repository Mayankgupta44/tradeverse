import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img style={{width:"80%"}} src='media/images/education.svg' alt='education'/>
                </div>
                <div className='col-6 pd-3'>
                    <h1 className='fs-2 mb-4'>Free and open market education</h1>
                    <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' style={{textDecoration:"none"}} className='mb-5'>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mb-3 mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;