'use client';

import React from "react";

interface TimelineData {
    image?: string;
    companyName: string;
    timeStart: string;
    timeEnd: string;
    title: string;
}

type Props = {
    data: TimelineData;
};

const TimeLineCard1 = ({ data }: Props) => {
    const { image, companyName, timeStart, timeEnd, title } = data;

    // Only render if image exists
    if (!image) {
        return null;
    }

    return (
        <div className="timeline-card1">
            <div className="timeline-card1__image-container">
                <img
                    src={image}
                    alt={companyName}
                    className="timeline-card1__image"
                    loading="lazy"
                />
            </div>

            <div className="timeline-card1__content">
                <div className="text-wrapper">
                    <h2 className="timeline-card1__companyName">
                        {companyName}
                    </h2>
                </div>
                <div className="text-wrapper">
                    <p className="timeline-card1__timeRange">
                        {timeStart} - {timeEnd !== "" ? timeEnd : "Now"}
                    </p>
                    <h4 className="timeline-card1__title">{title}</h4>
                </div>
            </div>
        </div>
    );
};

export default TimeLineCard1;
