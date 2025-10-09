'use client';

import React, { useState } from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";

// components
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Awards from "./Awards";

const Introduction = () => {
    const [activeIdx, setActiveIdx] = useState<number>(0);

    const headers = [
        {
            name: "About me",
        },
        {
            name: "Awards",
        },
    ];

    const activeComponent = [
        <AboutMe />,
        // <Skills key={Math.random()} />,
        <Awards />,
    ][activeIdx];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const headerVariants = {
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

    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            y: -30,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.section
            className="introduction"
            id="about"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container">
                <motion.div
                    className="introduction__heading"
                    variants={headerVariants}
                >
                    {headers &&
                        headers.length > 0 &&
                        headers.map((item: any, idx: number) => {
                            const { name } = item;
                            return (
                                <motion.div
                                    className={cn(
                                        "text-wrapper introduction__heading-item",
                                        {
                                            "introduction-item-active":
                                                idx === activeIdx,
                                        }
                                    )}
                                    onClick={() => setActiveIdx(idx)}
                                    key={`introduction-item-${idx}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    variants={headerVariants}
                                >
                                    <p className="introduction__heading-item__title">
                                        {name}
                                    </p>
                                </motion.div>
                            );
                        })}
                </motion.div>

                <div className="introduction__content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIdx}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {activeComponent}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default Introduction;
