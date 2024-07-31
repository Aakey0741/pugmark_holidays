import React, { useEffect, useState } from 'react';

import about_bg from "./assets/images/about-bg-image.png"
import axios from 'axios';

const AboutUs = () => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const [sectionTitle, setSectionTitle] = useState('');
    const [headingOne, setHeadingOne] = useState('');
    const [para, setPara] = useState('');
    const [aboutUsPoints, setAboutUsPoints] = useState([]);
    const [aboutUsImages, setAboutUsImage] = useState([]);

    const getAboutUsData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/about-us`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { name, h1, para, aboutPoints, aboutImages } = data;
                    setSectionTitle(name);
                    setHeadingOne(h1);
                    setPara(para);
                    setAboutUsPoints(aboutPoints);
                    setAboutUsImage(aboutImages);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }

    useEffect(() => {
        getAboutUsData();
    }, []);

    return (
        <>
            <section id='aboutUs' className="about-section pt-80 pb-100">
                <div className="pattern-layer" style={{ backgroundImage: `url(${about_bg})` }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box mr-60">
                                    <div className="sec-title mb-30">
                                        <span className="sub-title">{sectionTitle}</span>
                                        <h2>{headingOne}</h2>
                                    </div>
                                    <div className="text-box mb-35">
                                        <p>{para}</p>
                                    </div>
                                    <div className="inner-box">
                                        {aboutUsPoints.map((item, index) => {
                                            return (
                                                <div key={index} className="single-item">
                                                    <div className="icon-box">
                                                        <i className={item?.icon}></i>
                                                    </div>
                                                    <h3>{item?.title}</h3>
                                                    <p>{item?.caption}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                                <div className="image-box">
                                    {
                                        aboutUsImages.map((item, index) => {
                                            return (
                                                <figure key={index} className={`image ${item?.class}`}>
                                                    <img src={baseUrl + item?.url} alt={item?.name} />
                                                </figure>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs