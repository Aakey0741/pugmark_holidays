import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Navigation = () => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const [navigationData, setNavigationData] = useState([]);
    const [brandLogo, setBrandLogo] = useState('');

    const getNavigationData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/navigation-bar`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { navigation, brandLogo } = data;
                    setNavigationData(navigation);
                    setBrandLogo(brandLogo);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }

    useEffect(() => {
        getNavigationData();
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg" aria-label="Offcanvas navbar large">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img style={{ maxHeight: '5rem' }} src={baseUrl + brandLogo} alt='Brand Logo' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Lorem ipsum dolor</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1">
                                {
                                    navigationData.map((item, index) => {
                                        return (
                                            <li key={index} className="nav-item">
                                                <a className="nav-link" href={item?.sectionId}>{item?.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation