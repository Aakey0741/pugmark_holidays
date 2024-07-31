import React, { useEffect, useState } from 'react'
import axios from 'axios';

const TopPlaces = () => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [sectionTitle, setSectionTitle] = useState('');
    const [topPlacesData, setTopPlacesData] = useState([]);

    const getTopPlacesData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/top-places`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { name, topPlaces } = data;
                    setSectionTitle(name);
                    setTopPlacesData(topPlaces);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }

    useEffect(() => {
        getTopPlacesData();
    }, []);

    return (
        <>
            <section id='destinationSection' className="place-section centred pt-80 pb-70">
                <div className="auto-container">
                    <div className="sec-title mb-50 text-center">
                        <span className="sub-title">Destinations</span>
                        <h2>{sectionTitle}</h2>
                    </div>
                    <div className="row clearfix">

                        {topPlacesData.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12 place-block">
                                    <div className="place-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src={baseUrl + item?.url} alt="" /></figure>
                                            <span className="text">{item?.title}</span>
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

export default TopPlaces