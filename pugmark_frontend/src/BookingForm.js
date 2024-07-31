import React from 'react'

const BookingForm = () => {
    return (
        <>
            <div className="booking-form">
                <div className="auto-container">
                    <div className="booking-inner">
                        <form method="post" action="index.html" className="clearfix">
                            <div className="form-group">
                                <div className="icon">
                                    <i className="icon-8"></i>
                                </div>
                                <div className="select-box">
                                    <select className="wide">
                                        <option data-display="Your Destination">Your Destination</option>
                                        <option value="1">USA</option>
                                        <option value="2">Italy</option>
                                        <option value="3">China</option>
                                        <option value="4">Thailand</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="icon">
                                    <i className="icon-9"></i>
                                </div>
                                <div className="select-box">
                                    <select className="wide">
                                        <option data-display="Travel Category">Travel Category</option>
                                        <option value="1">Adventure travel</option>
                                        <option value="2">Air travel</option>
                                        <option value="3">Backpacking</option>
                                        <option value="4">Bleisure travel</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="icon">
                                    <i className="icon-10"></i>
                                </div>
                                <input type="date" name="date" id="datepicker" placeholder="When to Start" className="hasDatepicker" />
                            </div>
                            <div className="form-group">
                                <div className="icon">
                                    <i className="icon-11"></i>
                                </div>
                                <div className="select-box">
                                    <select className="wide">
                                        <option data-display="How many Guest">How many Guest</option>
                                        <option value="1">1 Child 2 Adult</option>
                                        <option value="2">2 Child 2 Adult</option>
                                        <option value="3">1 Child 3 Adult</option>
                                        <option value="4">2 Child 3 Adult</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btn-box">
                                <button type="submit">Find Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingForm