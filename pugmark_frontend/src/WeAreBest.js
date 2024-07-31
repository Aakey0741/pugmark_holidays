import axios from 'axios';
import React, { useEffect, useState } from 'react'

const WeAreBest = () => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [sectionTitle, setSectionTitle] = useState('');
    const [whyChoosePointsData, setWhyChoosePointsData] = useState([]);

    const getAboutUsData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/why-choose`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { name, whyChoosePoints } = data;
                    setSectionTitle(name);
                    setWhyChoosePointsData(whyChoosePoints);
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
            <section id='weAreBest' className="chooseus-section pt-100 pb-65 text-center">
                <div className="auto-container">
                    <div className="sec-title mb-50">
                        <span className="sub-title">We are best</span>
                        <h2>{sectionTitle}</h2>
                    </div>
                    <div className="row clearfix">
                        {whyChoosePointsData.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <i className={item?.icon}></i>
                                            </div>
                                            <h3><a>{item?.title}</a></h3>
                                            <p>{item?.caption}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default WeAreBest