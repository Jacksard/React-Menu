import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../PageMain/PageMain.css';
import Swiper from 'react-id-swiper';
import '../../../node_modules/swiper/dist/css/swiper.min.css'

class PageMain extends Component {

    render(){
        const params = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            },
            pagination: {
              el: '.swiper-pagination'
            },
            salads : [
                { name: "Salad-1", img: '../images/salad1.jpg', price: 12 },
                { name: "Salad-2", img: '../images/salad2.jpg', price: 14 },
                { name: "Salad-3", img: '../images/salad3.jpg', price: 8 },
                { name: "Salad-4", img: '../images/salad4.jpg', price: 16 },
                { name: "Salad-5", img: '../images/salad5.jpg', price: 9 }
            ]
          }

    return(
        <div className="container main h-100">
            <header>
                <h4 id="welcomeTitle">Welcome</h4>
            </header>

            <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="6000">
                <div className="carousel-inner">
                    <div className="carousel-item active border border-dark rounded">
                        <img className="d-block imgSlide w-100" src={require('../images/1.jpg')} alt="First slide" />
                    </div>
                    <div className="carousel-item border border-dark rounded">
                        <img className="d-block imgSlide w-100" src={require('../images/2.jpg')} alt="Second slide" />
                    </div>
                    <div className="carousel-item border border-dark rounded">
                        <img className="d-block imgSlide w-100" src={require('../images/3.jpg')} alt="Third slide" />
                    </div>

                     <ol className="carousel-indicators position-absolute">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                     </ol>

                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div>
                <h4 id="saladsTitle">Salads</h4>
            </div>
            <div className="boxSlider">
            <Swiper {...params}>

                    <div id="box"><img className="salad" src={require('../images/Salad/Salad1.jpg')} alt='salad1'/><div className="saladTitle">{params.salads[0].name} - ${params.salads[0].price}</div></div>
                    <div id="box"><img className="salad" src={require('../images/Salad/Salad2.jpg')} alt='salad2'/><div className="saladTitle">{params.salads[1].name} - ${params.salads[1].price}</div></div>
                    <div id="box"><img className="salad" src={require('../images/Salad/Salad3.jpg')} alt='salad3'/><div className="saladTitle">{params.salads[2].name} - ${params.salads[2].price}</div></div>
                    <div id="box"><img className="salad" src={require('../images/Salad/Salad4.jpg')} alt='salad4'/><div className="saladTitle">{params.salads[3].name} - ${params.salads[3].price}</div></div>
                    <div id="box"><img className="salad" src={require('../images/Salad/Salad5.jpg')} alt='salad5'/><div className="saladTitle">{params.salads[4].name} - ${params.salads[4].price}</div></div>
            </Swiper>
            </div>
        </div>
    );
    }}

    export default PageMain;
