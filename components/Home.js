

import { Link,Outlet } from 'react-router-dom';
import IndividualIntervalsExample from './centre';
import Footer from "./Footer";
// import Modal from './Modal';
function Home() {
    return (
        <div>
            
            <IndividualIntervalsExample />
            <Link  className='abcd'  style={{color:"black",  }} to="Information">Information</Link>

          {/* <Modal /> */}
            <Footer />
            <Outlet/>
        </div>




    );

}
export default Home;