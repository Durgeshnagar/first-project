import React, { useState } from 'react';



function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = (e) => {

    e.preventDefault();
    // console.log(email, password);
    const userData = {
      email,
      password,
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedin(true);

    setEmail('');
    setPassword('');

    
  };

  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  };


  return (

    <>
      <div class="bg-img">
        <div className='container9'>
        
            {!isLoggedin ? (
              <>
                <form >

                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                  />
                  <button type="submit" onClick={login}>
                    Login
                  </button>
                </form>
              </>
            ) : (
              <>
                <h1>User is logged in</h1>
                <button onClickCapture={logout}>logout user</button>
              </>
            )}
          </div></div>
    </>
  );
}
export default Login;