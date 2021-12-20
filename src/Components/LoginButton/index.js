//Importando
import React from 'react';
import './styles.css';

const LoginButton =({ onLogin }) => {

    const facebookLogin= ()=>{
        if(!window.FB)return;

        //Realizar Login
        window.FB.getLoginStatus(response => {
       if(response.status === "connected"){
           
        //Leer los datos del usuario
        facebookLoginHandler(response);
       }else{
           //Intentar iniciar la sesión
           window.FB.login(facebookLoginHandler,{scope:'public_profile,email'});

       }

        });
    };

    const facebookLoginHandler = (response) =>{
        console.log(response);
         if(response.status = "connected"){
             // Vamos a leer los datos del usuario
              window.FB.api('/me?fields=id,name,email,picture',userData =>{
                console.log(userData);

     //Almacenar la sesión del usuario en nuestra App
      const user = {
          ...userData,
          accessToken:response.authResponse.accessToken
      };

      onLogin(user); //Llamar a la función del componente padre
              });

         }
    };

return(
<div className="loginWrapper">
    <a onClick={facebookLogin} className="login">
     <span>Conéctame con Facebook</span>
    </a>
</div>

);
};
export default LoginButton;