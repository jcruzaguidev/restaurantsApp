import React, { useEffect, useState } from "react";
import { auth } from '../../utils/firebase';
import { Loading } from "../../components";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export const Account = () => {
   const [login, setLogin] = useState<boolean | null>(null);
   
   useEffect(() => {
      auth.onAuthStateChanged(function(user){
         !user ? setLogin(false) : setLogin(true);
      });
   }, []);

   if(login === null) return <Loading isVisible={ true } text="Cargando..." />

   return login ? <UserLogged /> : <UserGuest />
};
