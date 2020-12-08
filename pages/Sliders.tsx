import Head from 'next/head';
import * as React from 'react'

import Slider from "react-slick";
import Layout from '../components/Layout';

function SampleNextArrow(props :any) {
  const { className, style, onClick } = props;
  return (
    <><style jsx>
      {`
            img{
              width:30px;
              height:30px;
            }
            `}
    </style>
      <img
        className={className}
        src={"https://cdn.onlinewebfonts.com/svg/img_387044.png"}
        onClick={onClick} /></>

    
  );
}

function SamplePrevArrow(props :any) {
  const { className, style, onClick } = props;
  return (
    <><style jsx>
      {`
            img{
              width:30px;
              height:30px;
            }
            `}
    </style>
      <img
        className={className}
        src={"https://img.icons8.com/ios/452/circled-left-2.png"}
        onClick={onClick} /></>
  );
}

class Sliders extends React.Component{
    render (){
        const settings = {
            
            infinite: true,
            dots: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrow:true,
            nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
          };
        return(
        <div className="slider mb-10 ">
         
            <Slider className=" Slider m-10  ml-10" {...settings}>
               
              <div className="m-5 px-3 -ml-2 " >
                <img className="object-fit m-5   " src={"https://www.groundzeroweb.com/wp-content/uploads/2016/08/Best-Hollywood-Action-Movies-Avengers.jpg"}/>
                <p className="text-center text-xl ">Avengers</p>
              </div>
              <div className="m-5 px-3 -ml-2">
                <img  className="object-fit m-5 " src={"https://i.ytimg.com/vi/8pR0o2fGyHg/maxresdefault.jpg"}/>
                <p className="text-center text-xl ">Spiderman</p>
              </div>
              
              <div className="m-5 px-3 -ml-2">
                <img  className="object-fit m-5 " src={"https://www.groundzeroweb.com/wp-content/uploads/2016/08/Best-Hollywood-Action-Movies-Avengers.jpg"}/>
                <p className="text-center text-xl ">Avengers</p>
              </div>
              <div className="m-5 px-3 -ml-2">
                <img  className="object-fit m-5 " src={"https://i.ytimg.com/vi/8pR0o2fGyHg/maxresdefault.jpg"}/>
                <p className="text-center text-xl ">Spiderman</p>
              </div>
              <div className="m-5 px-3 -ml-2">
                <img  className="object-fit m-5 " src={"https://www.groundzeroweb.com/wp-content/uploads/2016/08/Best-Hollywood-Action-Movies-Avengers.jpg"}/>
                <p className="text-center text-xl ">Avengers</p>
              </div>
              <div className="m-5 px-3 -ml-2">
                <img  className="object-fit m-5 " src={"https://i.ytimg.com/vi/8pR0o2fGyHg/maxresdefault.jpg"}/>
                <p className="text-center text-xl ">Spiderman</p>
              </div>
              
              <div className="m-5 px-3 -ml-2">
                <img  className="object-fit m-5 " src={"https://www.groundzeroweb.com/wp-content/uploads/2016/08/Best-Hollywood-Action-Movies-Avengers.jpg"}/>
                <p className="text-center text-xl ">Avengers</p>
              </div>
              <div className="m-5 px-3 -ml-2">
                <img  className="object-fit m-5 " src={"https://i.ytimg.com/vi/8pR0o2fGyHg/maxresdefault.jpg"}/>
                <p className="text-center text-xl ">Spiderman</p>
              </div>
              
              
            </Slider>
            

            <style jsx>
              {
                `.Slider{
                 width:80% !important;
                }
                img{
                  width:95%;
                }`
              }
            </style>
            </div>
        
        );
    }
}

export default Sliders;