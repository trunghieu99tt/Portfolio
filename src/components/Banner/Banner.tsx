'use client';

import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.5
            }
        }
    };

    const floatingVariants = {
        hidden: { y: 0 },
        visible: {
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.section
            className="banner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container">
                <div className="row align-items-center banner-content">
                    <motion.div
                        className="col-lg-6"
                        variants={textVariants}
                    >
                        <div className="banner-content">
                            <div className="banner-text">
                                <motion.h3
                                    className="banner-title--1 draw -wave -do"
                                    variants={textVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Hello, I'm{" "}
                                </motion.h3>
                                <motion.h1
                                    className="banner-title--2 draw -wave -do"
                                    variants={textVariants}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    Trung Hieu (Elliot) Nguyen
                                </motion.h1>
                                <motion.p
                                    className="banner-title--3 draw -wave -do"
                                    variants={textVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    I'm a Software Engineer
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-6"
                        variants={imageVariants}
                    >
                        <motion.div
                            variants={floatingVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <img
                                src="/images/img1.jpg"
                                alt="Me 1"
                                className="banner-image--1"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Banner;
