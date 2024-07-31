import React, { useEffect, useState } from "react";
import footer_bg from "./assets/images/footer-bg.png";
import axios from "axios";

const Footer = () => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [logo, setLogo] = useState('');
    const [email, setEmail] = useState('');
    const [footerAddress, setFooterAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [footerNavOne, setFooterNavOne] = useState([]);
    const [footerNavOneTitle, setFooterNavOneTitle] = useState();
    const [footerNavTwo, setFooterNavTwo] = useState([]);
    const [footerNavTwoTitle, setFooterNavTwoTitle] = useState();
    const [footerNavThree, setFooterNavThree] = useState([]);
    const [footerNavThreeTitle, setFooterNavThreeTitle] = useState();
    const [followUs, setFollowUs] = useState([]);
    const [copyRightLine, setCopyRightLine] = useState("");

    const getFooterData = () => {
        let config = {
            method: "get",
            url: `${baseUrl}/pugmark/v1/app/footer`,
            headers: {
                "Content-Type": "application/json",
            },
        };
        axios
            .request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const {
                        email,
                        footer_address,
                        footer_logo,
                        footer_nav_one,
                        footer_nav_one_title,
                        footer_nav_two,
                        footer_nav_two_title,
                        footer_nav_three,
                        footer_nav_three_title,
                        phone_number,
                    } = data;
                    setEmail(email);
                    setLogo(footer_logo);
                    setFooterAddress(footer_address);
                    setPhoneNumber(phone_number);
                    setFooterNavOne(footer_nav_one);
                    setFooterNavOneTitle(footer_nav_one_title);
                    setFooterNavTwo(footer_nav_two);
                    setFooterNavTwoTitle(footer_nav_two_title);
                    setFooterNavThree(footer_nav_three);
                    setFooterNavThreeTitle(footer_nav_three_title);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    };

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
                    const { followUs, copyRightLine } = data;
                    setFollowUs(followUs);
                    setCopyRightLine(copyRightLine);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }

    useEffect(() => {
        getFooterData();
        getShortHeaderData();
    }, []);

    return (
        <>
            <footer id="footer" className="main-footer pt-60">
                <div
                    className="pattern-layer"
                    style={{ backgroundImage: `url(${footer_bg})` }}
                ></div>
                <div className="widget-section p_relative pt-100 pb-85">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo">
                                        <a href="/">
                                            <img
                                                style={{ maxHeight: "5em" }}
                                                src={baseUrl + logo}
                                                alt=""
                                            />
                                        </a>
                                    </figure>
                                    <div className="text-box">
                                        <p dangerouslySetInnerHTML={{ __html: footerAddress }}></p>
                                        <ul className="info-list clearfix">
                                            <li>
                                                <a href={`mailto:${email}`} dangerouslySetInnerHTML={{ __html: email }}></a>
                                            </li>
                                            <li>
                                                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>{footerNavOneTitle}</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            {footerNavOne.map((item, index) => (
                                                <li key={index}>
                                                    {item.target ? <a href={item?.link} target="_blank">{item?.label}</a> : <a href={item?.link}>{item?.label}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>{footerNavTwoTitle}</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            {footerNavTwo.map((item, index) => (
                                                <li key={index}>
                                                    {item.target ? <a href={item?.link} target="_blank">{item?.label}</a> : <a href={item?.link}>{item?.label}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>{footerNavThreeTitle}</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            {footerNavThree.map((item, index) => (
                                                <li key={index}>
                                                    {item.target ? <a href={item?.link} target="_blank">{item?.label}</a> : <a href={item?.link}>{item?.label}</a>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner">
                            <div className="copyright">
                                <p dangerouslySetInnerHTML={{ __html: copyRightLine }}></p>
                            </div>
                            <ul className="social-links">
                                {
                                    followUs.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    href={item.link ? item.link : "/"}
                                                >
                                                    <i className={`fa-brands fa-${item.icon ? item.icon : ""}`}></i>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
