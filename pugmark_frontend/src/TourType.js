import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel'
import axios from 'axios';

const TourType = () => {
    const options = {
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 500,
        autoplay: 1000,
        navText: ['<span className="fal fa-angle-left"></span>', '<span className="fal fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
            1200: {
                items: 6
            }

        }
    };

    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [sectionTitle, setSectionTitle] = useState('');
    const [hotelsData, setHotelsData] = useState([]);

    const getHotelsData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/hotels`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { name, hotels } = data;
                    setSectionTitle(name);
                    setHotelsData(hotels);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }

    useEffect(() => {
        getHotelsData();
    }, [sectionTitle]);

    return (
        <section id='hotelSection' className="category-section pt-80 pb-90 text-center">
            <div className="auto-container">
                <div className="sec-title mb-50">
                    <span className="sub-title">Hotels</span>
                    <h2>{sectionTitle}</h2>
                </div>
                <OwlCarousel className="jaani-owl-carousel owl-theme text-center" {...options}>
                    {hotelsData.map((item, index) => (
                        <div key={index} className="category-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img style={{ maxHeight: '6.5rem' }} src={baseUrl + item?.url} alt="" />
                                </figure>
                                {item?.title ? <h4>{item?.link ? <a href={item?.link}>{item?.title}</a> : item?.title}</h4> : ''}
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default TourType