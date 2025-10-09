'use client';

import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";

// talons
import { useData } from "../../talons/useData";

// components
import TimeLineCard1 from "../Cards/TimeLineCard1";
import TimelineCard2 from "../Cards/TimelineCard2";

const SliderCustom: any = Slider;

const TimeLine = () => {
    const [data, setData] = useState<any>(null);

    const { fetchData } = useData({
        endpoint: "timeline.json",
    });

    const getTimeline = useCallback(async () => {
        const response = await fetchData();
        setData(response);
    }, [fetchData]);

    useEffect(() => {
        getTimeline();
    }, [getTimeline]);

    const sortedData = data?.sort((a: any, b: any) => a.order - b.order);

    const settings = {
        vertical: true,
        verticalSwiping: true,
        draggable: true,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: true,
    };


    return (
        <section className="timeline" id="timeline">
            <div className="container">
                <div className="timeline__heading">
                    <div className="text-wrapper">
                        <h3 className="section-subheading">My experience</h3>
                    </div>
                    <div className="text-wrapper">
                        <h2 className="section-heading">
                            My Education, Experiences And Events
                        </h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="timeline-cards">
                            {sortedData &&
                                sortedData.length > 0 &&
                                sortedData.map((item: any, idx: number) => (
                                    <TimeLineCard1
                                        data={item}
                                        key={`timeline-card1-${idx}`}
                                    />
                                ))}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <SliderCustom {...settings}
                        >
                            {sortedData &&
                                sortedData.length > 0 &&
                                sortedData.map((item: any, idx: number) => (
                                    <TimelineCard2
                                        data={item}
                                        key={`timeline-card2-${idx}`}
                                    />
                                ))}
                        </SliderCustom>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeLine;
