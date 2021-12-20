//Importando
import React from 'react';
import ShareButton from '../Share/shareButton';
import ShareSend from '../Share/shareSend';
import ShareFeed from '../Share/shareFeed';

const Post = () => (
<div  className="blog-post">
   <h2 className="blog-post-title"> Sample Post</h2>
     <p className="blog-post-meta"> 08  oct 2021</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis euismod tortor. Quisque non erat mollis, sollicitudin est a, finibus lectus. Maecenas maximus, quam id porta ultricies, sem est tincidunt purus, in tincidunt orci enim ut augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tempus, turpis a convallis.
      </p>
      <div>
        <span>Compartir Post: </span>
          <div className="social">
             <ShareButton url= "https://adolfoTlatenchi.com.mx/post-title" 
             title="Sample blog post" />
             <ShareSend url= "https://adolfoTlatenchi.com.mx/post-title" 
             title="Sample blog post" />
              <ShareFeed url= "https://adolfoTlatenchi.com.mx/post-title" 
             title="Sample blog post" />
          </div>
      </div>
</div>
);

export default Post;