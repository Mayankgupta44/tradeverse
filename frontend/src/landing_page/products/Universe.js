import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/signup');  // navigate to signup route in the frontend React app
  };

  return ( 
    <div className='container ms-5 text-center p-5 mt-4'>
      <div className='row'>
        <h1 className='text-muted mt-3'>The TradeVerse Universe</h1>
        <p className='text-muted mt-3 fs-5'>
          Extend your trading and investment experience even further with our partner platforms
        </p>
        <div className='col-4 mt-5'>
          <img width={"50%"} src='media/images/Tradeversefundhouse.png' alt='fundhouse'/>
          <p className='text-muted mt-3'>Our asset management venture</p>
          <br/>
          <img width={"40%"} src='media/images/streakLogo.png' alt='streak'/>
          <p className='text-muted mt-3'>Systematic trading platform</p>
        </div>
        <div className='col-4 mt-5'>
          <img width={"70%"} src='media/images/sensibullLogo.svg' alt='sensibull'/>
          <p className='text-muted mt-3'>Options trading platform</p>
          <br/>
          <img width={"60%"} src='media/images/smallcaseLogo.png' alt='smallcase'/>
          <p className='text-muted mt-3'>Thematic investing platform</p>
        </div>
        <div className='col-4 mt-5'>
          <img width={"40%"} src='media/images/goldenpiLogo.png' alt='goldenpi'/>
          <p className='text-muted mt-3'>Investment research platform</p>
          <br/>
          <img width={"30%"} src='media/images/dittoLogo.png' alt='ditto'/>
          <p className='text-muted mt-4'>Personalized advice on life</p>
        </div>
      </div>
      <button 
        style={{width: "20%", margin: "0 auto"}} 
        type="button" 
        className="btn btn-primary btn-sm fs-5 mb-5 mt-5"
        onClick={goToSignup}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
