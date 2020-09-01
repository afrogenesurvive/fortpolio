import React from 'react';
import './overlay.css';
import logo from '../../logo.svg';
import agLogoAnim from '../../assets/afrogeneanim.gif';

const Overlay = (props) => {

  return (
    <div className="overlayTop">
      {props.data === 'loading' && (
        <React.Fragment>
        <img src={agLogoAnim} className="overlayLogo" alt="logo" />
        <p className="x">...sequencing...</p>
        </React.Fragment>
      )}

    </div>
  )
}

export default Overlay;
