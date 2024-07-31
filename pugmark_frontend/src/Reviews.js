import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel'
import rating_gray_icon from "./assets/images/rating-gray-icon.png"
import rating_yellow_icon from "./assets/images/rating-yellow-icon.png"
import axios from 'axios'

const Reviews = () => {

    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [sectionTitle, setSectionTitle] = useState('');
    const [ratingYellowIcon, setRatingYellowIcon] = useState('');
    const [ratingGrayIcon, setRatingGrayIcon] = useState('');
    const [reviewData, setReviewData] = useState([]);

    const getReviewData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/reviews`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { name, rating_icon, rating_gray_icon, reviews } = data;
                    setSectionTitle(name);
                    setRatingYellowIcon(rating_icon);
                    setRatingGrayIcon(rating_gray_icon);
                    setReviewData(reviews);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }

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
            800: {
                items: 1
            },
            1200: {
                items: 2
            }

        }
    };

    useEffect(() => {
        getReviewData();
    }, [sectionTitle]);

    return (
        <section id='reviewsSection' className="testimonial-section testimonial-page-one pt-80 pb-110">
            <div className='w-100 overflow-hidden'>
                <div className="auto-container">
                    <div className="sec-title text-center mb-50">
                        <span className="sub-title">Reviews</span>
                        <h2>{sectionTitle}</h2>
                    </div>
                    <OwlCarousel className="owl-theme dots-style-one text-center" {...options}>
                        {reviewData.map((item, index) => (
                            <div key={index} className="testimonial-block-one">
                                <div className="inner-box">
                                    <ul className="rating">
                                        <li>
                                            <img src={item?.rating >= 1 ? baseUrl + ratingYellowIcon : baseUrl + ratingGrayIcon} alt="" />
                                        </li>
                                        <li>
                                            <img src={item.rating >= 2 ? baseUrl + ratingYellowIcon : baseUrl + ratingGrayIcon} alt="" />
                                        </li>
                                        <li>
                                            <img src={item.rating >= 3 ? baseUrl + ratingYellowIcon : baseUrl + ratingGrayIcon} alt="" />
                                        </li>
                                        <li>
                                            <img src={item.rating >= 4 ? baseUrl + ratingYellowIcon : baseUrl + ratingGrayIcon} alt="" />
                                        </li>
                                        <li>
                                            <img src={item.rating >= 5 ? baseUrl + ratingYellowIcon : baseUrl + ratingGrayIcon} alt="" />
                                        </li>
                                    </ul>
                                    <div className="author-box">
                                        <figure className="author-thumb">
                                            <img src={baseUrl + item?.profile_image} alt="" />
                                        </figure>
                                        <h3>{item?.name}</h3>
                                        <span className="designation">
                                            <span className='me-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                                    <g fill="none" stroke="#20c997" stroke-linejoin="round" stroke-width="4">
                                                        <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
                                                        <path stroke-linecap="round" d="m16 24l6 6l12-12" />
                                                    </g>
                                                </svg>
                                            </span>
                                            {item.caption}
                                        </span>
                                    </div>
                                    <p>“{item.content}”</p>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Reviews