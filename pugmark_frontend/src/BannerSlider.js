import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import Typewriter from 'typewriter-effect';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css'
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

import axios from 'axios';

const BannerSlider = () => {
    const options = {
        loop: true,
        nav: true,
        dots: false,
        autoplayTimeout: 6000,
        smartSpeed: 2000,
        items: 1,
        autoplay: true,
    };

    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [sectionTitle, setSectionTitle] = useState('');
    const [sliderData, setSliderData] = useState([]);

    const getSlideData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/banner`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { slides, name } = data;
                    setSectionTitle(name);
                    setSliderData(slides);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }

    useEffect(() => {
        getSlideData();
    }, [sectionTitle]);

    return (
        <>
            <section id='homeSection' className='banner-section text-center'>
                <OwlCarousel className="jaani-owl-carousel owl-theme text-center" {...options}>
                    {sliderData.map((item, index) => (
                        <div key={index} className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: `url(${baseUrl + item?.image})` }}></div>
                            <span className="big-text animation_text_word">
                                <Typewriter
                                    options={{
                                        strings: ['PUGMARK HOLIDAYS', 'PUGMARK HOLIDAYS'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 150,
                                        cursor: ""
                                    }}
                                /></span>
                            <span className="typed-cursor"></span>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="special-text">{item?.title}</span>
                                    <h2>{item?.heading}</h2>
                                    <p>{item?.caption}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
                {/* <BookingForm /> */}
            </section>
        </>
    )
}

export default BannerSlider