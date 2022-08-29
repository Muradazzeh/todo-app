import React from 'react';
import { When } from 'react-if';
import { LoginContext } from '../context/loginContext';

export default class Login extends React.Component {
    static contextType = LoginContext;
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    changeHandler = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.context.loginFunction(this.state.username, this.state.password);
    }
    render() {
        return (
            <>
            <When condition={!this.context.login}>
            <form onSubmit={this.submitHandler} >
               
            <input
              placeholder="UserName"
              name="username"
              onChange={this.changeHandler}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.changeHandler}
            />
            <button>Login</button>
          </form>
          </When>
             <When condition={this.context.login}>
             <div>
                 {this.context.user.username}
             </div>
             <button onClick={this.context.logoutFunction}>Logout</button>
         </When>
         </>
            )
        }
    }



//     import React, { useContext, useState } from "react";

//     import { LoginContext } from '../context/loginContext';
// import { When } from "react-if";

// export default function Login(props) {
//   const loginContext = useContext(LoginContext);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState();
//   /////////submit/////////////////
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(loginContext);
//     // console.log("name  ",e.uname.value)
//     loginContext.login(username, password);
//   };
//   const usernameHandler = (e) => {
//     e.preventDefault();
//     setUsername(e.target.value);
//   };
//   const passwordHandler = (e) => {
//     e.preventDefault();
//     setPassword(e.target.value);
//   };  
//   return (
//     <>
//       <When condition={!loginContext.login}>
//         <div className="f">
//           <form>
//             <div className="input-container">
//               <label>Username </label>
//               <input
//                 type="text"
//                 name="uname"
//                 required
//                 onChange={usernameHandler}
//               />
//               {/* {renderErrorMessage("uname")} */}
//             </div>
//             <div className="input-container">
//               <label>Password </label>
//               <input
//                 type="password"
//                 name="pass"
//                 required
//                 onChange={passwordHandler}
//               />
//               {/* {renderErrorMessage("pass")} */}
//             </div>
//             <div className="button-container">
//               <input type="submit" onClick={handleSubmit} />
//             </div>
//           </form>
//         </div>
//       </When>
//       {/* <When condition={loginContext.loggedIn}>
//                     <div>
//                         {loginContext.user.username}
//                     </div>
//                     <button onClick={loginContext.logout}>Logout</button>
//                 </When> */}
//     </>
//   );
// }