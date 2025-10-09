'use client';

import React from "react";

export default function AboutMe() {
    return (
        <div
            className="aboutme introduction-item introduction-item--active"
            data="about"
        >
            <div className="row justify-content-between">
                <div className="col-md-5 aboutme__image-container">
                    <div className="aboutme__image">
                        <img
                            src="/images/img2.jpg"
                            alt="aboutme"
                        />
                    </div>
                </div>
                <div className="col-md-6 aboutme__main">
                    <div className="text-wrapper">
                        <h1 className="aboutme__title">
                            Why hire me for your next project?
                        </h1>
                    </div>
                    <div className="text-wrapper">
                        <p className="aboutme__description">
                            I am a hard working, honest individual and a
                            good timekeeper that always willing to learn new
                            skills. Besides, I am friendly, helpful and
                            polite. I am able to work independently in busy
                            environments and also within a team setting.
                            With young spirit, I'm ready for facing problems
                            which challenge myself.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
