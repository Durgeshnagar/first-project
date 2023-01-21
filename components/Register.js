import React, { useState } from 'react'
import Footer from './Footer';
import {  Link } from 'react-router-dom';
import IndividualIntervalsExample from './centre';
// import { Alert } from 'react-bootstrap'
// import Login from '../Log';
function Register() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [pwd, setPwd] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');





  const handle = () => {




    localStorage.setItem('Firstname', firstname);
    localStorage.setItem('Lastname', lastname);
    localStorage.setItem('Contact', contact);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pwd);
  
  }

// const navigate = useNavigate();{
//   navigate("/login")
// }

  return (
    <>
    
      <div class="bg-img">
        <div className="container8">
          <form>
            <div class="form-row">
              <div class="col-md-6 mb-2">
                <label for="validationDefault01">First name</label><br />
                <input type="text" class="form-control" id="validationDefault01" required value={firstname}
                  onChange={(e) => setFirstName
                    (e.target.value)} /></div><br />

              <div class="col-md-6 mb-2">
                <label for="validationDefault02">Last name</label>
                <input type="text" class="form-control" id="validationDefault02"  required
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)} /></div>


              <div class="col-12">
                <label for="validationDefault04">Email</label>
                <input type="text" class="form-control4" id="validationDefault04" required value={email}
                  onChange={(e) => setEmail(e.target.value)} /></div>

              <div class="col-md-6 mb-2">
                <label for="validationDefault03">Contact</label>
                <input type="text" class="form-control" id="validationDefault03" required value={contact}
                  onChange={(e) => setContact(e.target.value)} /></div>

              <div class="col-md-6 mb-2">
                <label for="validationDefault04">Password</label>
                <input type="text" class="form-control" id="validationDefault04" required value={pwd}
                  onChange={(e) => setPwd(e.target.value)} /></div>
              <button className='abc' onClick={handle}>Done</button> <Link style={{textDecoration:"none",color:"black"}} to="/login">Alread Registered?</Link >
             {/* <button className='abc'> <Link  style={{textDecoration:"none"}}to="/login">Login</Link></button>  */}
              {/* <Link to="/login">Login</Link>
        <Outlet/> */}
            </div>
          </form>
        </div>
      </div>
      <Footer />
 </>
  );
}
export default Register;