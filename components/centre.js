import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img
          className="d-block "
          src="https://c0.wallpaperflare.com/preview/447/552/983/ecommerce-online-shop-euro.jpg"
          alt="Second slide"
        />
   
     
        <Carousel.Caption>
          <h3>WelCome</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block "
          src="https://media.istockphoto.com/id/1305615921/photo/young-man-shopping-online.jpg?s=1024x1024&w=is&k=20&c=7ZZgcdyZvMav2ctfj0Yk9X8DyaPTkFcLmll76bxvPPs="
          alt="Third slide"
        />
      
        <Carousel.Caption>
          <h3>Have a good day</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block  "
          src="https://img.freepik.com/premium-photo/sale-offer-black-friday-shopping-discount-closeup-woman-hand-holding-purchase-bags-isolated-orange-empty-space-background_279525-17960.jpg?w=2000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Thank You</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;