import React from 'react';
import  shareIcon from '../icons/share-solid.svg';
import './estyles.css';

const ShareButton = ({url, title}) => {

const  onClick =() => {

  if(!window.FB) return;

  window.FB.ui ({
    method: 'share',
    href: url

  });

};
return(
<span  onClick={onClick} 
title="Compartir en Facebook"
className="share-btn">
    <img src={shareIcon} alt={title} / >
</span>
  );
};

export default ShareButton;