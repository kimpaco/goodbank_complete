import {UserContext, AccountContext} from "./index"
import {useContext, useState, useEffect} from "react";


const Sign = () => {
   const acc = useContext(AccountContext);
   const ctx = useContext(UserContext);

   function test(){
      ctx.users[0].name = '';
      ctx.users[0].email = '';
      ctx.users[0].password = '';
      ctx.users[0].balance = '';
      acc.account = '';
      console.log(acc);
      console.log(ctx);
   }

   return (<div id="sign">
    <h5>Welcome {acc.account}</h5>
    <a type="button" className="btn btn-primary" onClick={test} href="#/">Logout</a>
   </div>
   );
};

export default Sign;