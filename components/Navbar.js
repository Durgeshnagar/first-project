
import { Link } from 'react-router-dom';
import Modal from './Modal';


const Navbar = () => {

  return (
    <div>
      <ul className="nav fixed-top nav-fill">
        <li className="nav-item">

          <h5 style={{color:'White'}}>Onilne Shop</h5>

        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/"><h6>Home</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/products"><h6>Products</h6></Link>
        </li>
        
        <Modal />

        <li className="nav-item">
          <Link className="nav-link active" to="/register"><h6>Register</h6></Link>

        </li>
        
      </ul>


    </div>

  );

}
export default Navbar;