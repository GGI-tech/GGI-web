import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const productData = [
  {
    id: 1,
    imageurl:
      "/ylps1.png"
  },
  {
    id: 2,
    imageurl:
      "/ylps2.png"
  },
  {
    id: 3,
    imageurl:
      "/ylps3.jpg"
  },
  {
    id: 4,
    imageurl:
      "/ylps4.jpg"
  },
  {
    id: 5,
    imageurl:
      "/ylps5.jpg"
  },
  {
    id: 6,
    imageurl:
      "/ylps6.jpg"
  },
  {
    id: 7,
    imageurl:
      "/ylps7.jpg"
  }
 
];
function Product(props) {
  return (
    <div className="card">
      <img className="w-100 h-[500px]" src={props.url} alt="ylp testimonials" /> 
    </div>
  );
}

export default function Carousal() {
  const product = productData.map((item,index) => (
    <Product key={index} url={item.imageurl}  />
  ));

  return (
    <div className="lg:w-3/4 mx-auto">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}