/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Background.css';

const Background = (props) => {
  console.log(props);
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${props.backgroundImage})`,
    height: '500px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div style={backgroundStyle}>
      <h1 className="text-center hero-text">{props.heading && props.heading}</h1>
      <div className="individual-team-image">
        {props.image && <img src={props.image} className="img-fluid"/>}
      </div>
    </div>
  );
};

export default Background;