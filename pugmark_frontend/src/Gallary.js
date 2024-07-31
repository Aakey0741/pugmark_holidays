import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

const Gallary = (args) => {

    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [modal, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContentType, setModalContentType] = useState('');
    const [modalContent, setModalContent] = useState('');

    const toggle = () => setModal(!modal);
    const [sectionTitle, setSectionTitle] = useState('');
    const [gallaryData, setGallaryData] = useState([]);

    const getGallaryData = () => {
        let config = {
            method: 'get',
            url: `${baseUrl}/pugmark/v1/app/gallary`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.request(config)
            .then((response) => {
                const { status, data } = response.data;
                if (status) {
                    const { name, gallary } = data;
                    setSectionTitle(name);
                    setGallaryData(gallary);
                }
            })
            .catch((error) => {
                console.log(error?.message);
            });
    }
    const showGallary = (props) => {
        toggle()
        setModalTitle(props?.title);
        setModalContent(props?.url);
        setModalContentType(props?.type);
    }
    useEffect(() => {
        getGallaryData();
    }, [sectionTitle]);

    return (
        <section id='gallarySection' className="category-section pt-80 pb-90 text-center">
            <div className="auto-container">
                <div className="sec-title mb-50">
                    <span className="sub-title">Gallary</span>
                    <h2>{sectionTitle}</h2>
                </div>
                <div className='row justify-content-center'>
                    {gallaryData.map((item, index) => (
                        <div key={index} className='col-2' onClick={() => showGallary(item)}>
                            <div className="place-block-one" style={{ cursor: 'pointer' }}>
                                <div className="inner-box mb-0">
                                    <figure className="image-box">
                                        {item?.type === 'v' ? <div className='d-flex align-items-end justify-content-center position-relative' style={{ maxHeight: '10rem', minHeight: '10rem' }}>
                                            <p className='position-absolute top-0 start-0 px-2 pt-2 text-start' style={{ lineHeight: '1' }}><small style={{ fontSize: "12px", fontWeight: "500" }}>Your ultimate destination for unforgettable travel experiences!</small></p>
                                            <svg className='mb-5' xmlns="http://www.w3.org/2000/svg" width="2.25em" height="2.25em" viewBox="0 0 24 24">
                                                <path fill="#fd7e14" d="M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z" />
                                                <path fill="#fd7e14" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5" />
                                            </svg>
                                        </div> : <img style={{ maxHeight: '10rem', minHeight: '10rem' }} src={baseUrl + item?.url} alt="" />}
                                    </figure>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} {...args} size='lg'>
                <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
                <ModalBody>
                    {modalContentType === "v" ? <>
                        <video width={'100%'} autoPlay='true' controls>
                            <source src={baseUrl + modalContent} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </> : <>
                        <img className='img-fluid w-100' src={baseUrl + modalContent} />
                    </>}
                    <p>{ }</p>
                </ModalBody>
            </Modal>
        </section>
    )
}

export default Gallary