import React from 'react';
import  shareIcon from '../icons/share-square-solid.svg';
import './estyles.css';

const ShareFeed = ({url, title}) => {
    const  onClick =() => {

        if(!window.FB) return;
      
        window.FB.ui ({
          method: 'feed',
          link: url
      
        });
      
      };
      return(
      <span  onClick={onClick} 
      title="Compartir en Feed de Facebook"
      className="share-btn">
          <img src={shareIcon} alt={title} / >
      </span>
        );    
};

export default ShareFeed;