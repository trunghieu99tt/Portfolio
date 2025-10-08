'use client';

import React from "react";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="row align-items-center banner-content">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <div className="banner-text">
                                <h3 className="banner-title--1 draw -wave -do">
                                    Hello, I'm{" "}
                                </h3>
                                <h1 className="banner-title--2 draw -wave -do">
                                    Trung Hieu (Elliot) Nguyen
                                </h1>
                                <p className="banner-title--3 draw -wave -do">
                                    I'm a Software Engineer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="/images/img1.jpg"
                            alt="Me 1"
                            className="banner-image--1"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
