import React, {useState,useEffect} from 'react';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import LoginButton from './Components/LoginButton';
import * as storage from './utils/storage';
import UserLogued from './Components/UserLogued';
import Post from './Components/Post/';

function App() {
const [user, setUser] = useState(null);

const onLogin = (user) => {
//almacenar  los datos en el localStorage
storage.setUser(user);
setUser(user);
};

const onLogout = () => {
storage.clear();
 setUser(null);
};


useEffect(()   =>{
    const checkSession = () => {
   const user = storage.getUser(); //Leer user del storage
     if(user){
         setUser(user);
     }
  };
  checkSession();
}, []);


  return (
    <div className="container-fuild">
      <Header>
       {user && <UserLogued user={user} onLogout={onLogout}/> }   
      </Header>
      <div className="row" style={{ padding:'24px  16px'}}>
         {!user && <LoginButton  onLogin={onLogin}/>}
         {user && <Post />}
      </div>
      <img src="/" alt="Bocaditos" />
      <Footer />
    </div>
  );
}

export default App;
