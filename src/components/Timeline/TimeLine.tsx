'use client';

import React, { memo } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// context
import { useDataContext } from "../../contexts/DataContext";

// components
import { TimelineLoading } from "../Loading";
import TimeLineCard1 from "../Cards/TimeLineCard1";
import TimelineCard2 from "../Cards/TimelineCard2";

const SliderCustom: any = Slider; // Alias to bypass TypeScript error

const TimeLine = memo(() => {
    const { timeline, loading, errors } = useDataContext();

    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };


    return (
        <section className="timeline" id="timeline">
            <div className="container">
                <motion.div
                    className="timeline__heading"
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="text-wrapper">
                        <h3 className="section-subheading">My experience</h3>
                    </div>
                    <div className="text-wrapper">
                        <h2 className="section-heading">
                            My Education, Experiences And Events
                        </h2>
                    </div>
                </motion.div>
                {loading.timeline ? (
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <TimelineLoading />
                        </div>
                    </div>
                ) : errors.timeline ? (
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="error-message">{errors.timeline}</div>
                        </div>
                    </div>
                ) : !timeline || timeline.length === 0 ? (
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="empty-message">No timeline data available</div>
                        </div>
                    </div>
                ) : (
                    <section className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="timeline-cards">
                                {timeline.map((item, idx) => (
                                    <TimeLineCard1
                                        data={item}
                                        key={`timeline-card1-${idx}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {timeline.map((item, idx) => (
                                <TimelineCard2
                                    data={item}
                                    key={`timeline-card2-${idx}`}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </section>
    );
});

TimeLine.displayName = 'TimeLine';

export default TimeLine;
