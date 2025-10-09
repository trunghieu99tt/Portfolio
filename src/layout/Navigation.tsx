'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { menuData } from "./navigation.data";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const logoVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
            }
        }
    };

    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
            }
        }
    };

    const menuItemVariants = {
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

    const menu = menuData.map((item: any, idx: number) => {
        const { name, url } = item;
        return (
            <motion.li
                className="menu-item"
                key={`menu-item-link-${idx}`}
                // variants={menuItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <a href={url} className="menu-item__link">
                    <p>{name}</p>
                </a>
            </motion.li>
        );
    });

    return (
        <motion.section
            className={`navigation ${scrolled ? 'scrolled' : ''}`}
            // variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container">
                <div className="row align-items-center">
                    <div
                        className="logo-wrapper"
                    >
                        <img
                            src="/images/logo.jpg"
                            alt="Logo"
                            className="logo"
                        />
                    </div>

                    <motion.ul
                        className="menu"
                    // variants={menuVariants}
                    >
                        {menu}
                    </motion.ul>
                </div>
            </div>
        </motion.section>
    );
};

export default Navigation;
