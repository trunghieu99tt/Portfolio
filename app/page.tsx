'use client';

import React from 'react';
import Banner from '@/components/Banner/Banner';
// import ChangeCursor from '@/components/ChangeCursor/ChangeCursor';
import Contact from '@/components/Contact/Contact';
import Introduction from '@/components/Introduction';
import MyProject from '@/components/MyProject';
import ScrollBar from '@/components/ScrollBar/ScrollBar';
import Timeline from '@/components/Timeline';
import Footer from '@/layout/Footer';
import Navigation from '@/layout/Navigation';
import NavigationSmall from '@/layout/NavigationSmall';
import { useWindowSize } from '@/hooks/useWindowsize';

export default function Home() {
    const size = useWindowSize();
    const width = size.width || 1920;
    const isDesktop = width >= 1200;

    return (
        <React.Fragment>
            <ScrollBar />
            {/* <ChangeCursor /> */}
            {(isDesktop && <Navigation />) || <NavigationSmall />}
            <Banner />
            <Introduction />
            <Timeline />
            <MyProject />
            <Contact />
            <Footer />
        </React.Fragment>
    );
}

