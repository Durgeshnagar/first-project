import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';






const Card = () => {
  const [fake, setFake] = useState([]);
  useEffect(() => {
    fakeapi();
  }, [])

  const fakeapi = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const jsonData = await response.json();
    setFake(jsonData);
  }
  return (
    <>
      <div className="container">
        {fake.map((values) => {
          return (
            <>
            <>
   <div className="card col-md-5 display flex flexWrap wrap" >
  <img className="col-md-5 " src={values.image} alt=""/>
  <div className="card-body">
    <h4>{values.title}</h4>
    <h4>{values.price}</h4>
    
   
    {/* <p>{values.description}</p> */}
   
  </div>

</div></>
             
            </>
          )
        })}
      </div>
    </>
  )
}
export default Card;





