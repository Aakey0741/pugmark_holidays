import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShortHeader = () => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const [followUs, setFollowUs] = useState([]);
    const [followUsText, setFollowUsText] = useState("");
    const [contactUsText, setContactUsText] = useState("");
    const [contactNumber, setContactNumber] = useState(0);

    const getShortHeaderData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/short-header`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { followUs, followUsTitle, contactUsTitle, contactUsNumber } = data;
                    setFollowUs(followUs);
                    setFollowUsText(followUsTitle);
                    setContactUsText(contactUsTitle);
                    setContactNumber(contactUsNumber);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }

    useEffect(() => {
        getShortHeaderData();
    }, []);

    return (
        <>
            <section className="top-bar dhomev">
                <div className="container">
                    <div className='row gap-1 gap-md-1'>
                        <div className='col-sm-12 col-md'>
                            <div className="left-infos contact-infos">
                                <ul className="d-flex align-items-center justify-content-center justify-content-md-start">
                                    <li style={{ color: "#ffffff" }}><span className='text-uppercase'>{followUsText}</span></li>
                                    <li className='d-flex align-items-center'>
                                        {
                                            followUs.map((item, index) => {
                                                return (
                                                    <a key={index} rel="noreferrer" target='_blank' href={item.link ? item.link : "/"}>
                                                        <i className={`fa-brands fa-${item.icon ? item.icon : ""}`}></i>
                                                    </a>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md'>
                            <div className="right-infos link-list ">
                                <ul className="d-flex align-items-center justify-content-center justify-content-md-end text-upper">
                                    <li style={{ color: "#ffffff" }}><span className='text-uppercase'>{contactUsText}</span></li>
                                    <li>
                                        <a href={`tel:${contactNumber}`}>
                                            <span className='me-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                                    <path fill="#fd7e14" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317" />
                                                </svg>
                                            </span>
                                            {contactNumber}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShortHeader