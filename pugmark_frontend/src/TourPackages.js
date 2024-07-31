import React, { useEffect, useState } from 'react'
import tour_package_bg from "./assets/images/tour_package_bg.png";
import axios from 'axios';

const TourPackages = () => {

    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [sectionTitle, setSectionTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [ratingIcon, setRatingIcon] = useState('');
    const [packagesData, setPackagesData] = useState([]);

    const getPackagesData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/packages`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { name, rating_icon, packages, subTitle } = data;
                    setSectionTitle(name);
                    setRatingIcon(rating_icon)
                    setPackagesData(packages);
                    setSubTitle(subTitle);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }

    useEffect(() => {
        getPackagesData();
    }, []);

    return (
        <>
            <section id='tourSection' className="tours-section pt-80 pb-70">
                <div className="pattern-layer" style={{ backgroundImage: `url(${tour_package_bg})` }}></div>
                <div className="auto-container">
                    <div className="tabs-box">
                        <div className="upper-box mb-60 text-center">
                            <div className="sec-title flex-fill">
                                <span className="sub-title">{subTitle}</span>
                                <h2>{sectionTitle}</h2>
                            </div>
                        </div>
                        <div className="tabs-content">
                            <div className="tab active-tab">
                                <div className="row clearfix">
                                    {packagesData.map((item, index) => (
                                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 tours-block">
                                            <div className="tours-block-one">
                                                <div className="inner-box">
                                                    <div className="image-box">
                                                        <figure className="image mb-0" style={{ height: '8rem' }}><img src={baseUrl + item?.image} alt="" /></figure>
                                                        <span className="rating"><img src={baseUrl + ratingIcon} alt="" /> {item?.rating}</span>
                                                    </div>
                                                    <div className="lower-content py-3 px-4">
                                                        <h4 className='mb-0'>
                                                            <a href="tour-details.html">{item?.name}</a>
                                                        </h4>
                                                        <h6 className='mb-0'>{item?.caption}</h6>
                                                        <h5 className='mb-1 d-flex align-items-center' style={{ fontSize: '1rem' }}>
                                                            From -
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2z" />
                                                            </svg>
                                                            {item?.price}
                                                        </h5>
                                                        <span className="day-time d-flex mb-0">
                                                            <small className='d-inline-flex' style={{ marginTop: '-1.5px' }}>
                                                                <i className="icon-1"></i>{item?.duration}
                                                            </small>
                                                        </span>
                                                        <div className="link d-none">
                                                            <a href="tour-details.html">Explore more<i className="fas fa-long-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TourPackages