//Importando componentes
import React, {Fragment}from 'react';
import ShareButton from '../Share/shareButton';

const Footer = () => (
 
 <Fragment>
<hr />
  <div className="row pl-sm-3">
   Aplicación Web con Uso del SDK de Facebook
    <ShareButton url="https://adolfoTlatenchi.com.mx/post-title" title="Mi app con login Facebook"/>
    </div>
     </Fragment>
);

export default Footer;