import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
  return  initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*steps for authentication
----------------------------
Step 1: initail setup
------------------
1.firebase : create project
2.create web app
3.get authentication
4.initialize firebase
5.enable auth method
-------------------------
Step 2: setup components
------------------
1.Create Login Components
2.Create Register Components
3.Route For Login and Register

Step 3: set auth system
------------------
1.set up sign in method
2.set up sign out metod
3.user state
4.Special observer
5.return nessary methods and states from useFirebase
----------------------------------

step -4 create auth context (use auth)
-------------------------------------
1. create a auth context
2. create context provider
3.set context Provider context value
4.use auth provider
5.create useAuth hook
-------------
Step-5: create private route
---------------
1.create private Route
2.set Private Route
---------------------------
Step: 6- Redirect After Login
---------------
1. after login redirect user to their desired destination



*/