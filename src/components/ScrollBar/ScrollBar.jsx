'use client';

import React, { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

const ScrollBar = () => {
    const [currentWidth, setCurrentWidth] = useState(0);
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => setCurrentWidth(v * 100));
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div className="scrollbar">
            <div
                className="scrollbar-progressBar"
                style={{
                    width: `${currentWidth}%`,
                }}
            ></div>
        </div>
    );
};

export default ScrollBar;
