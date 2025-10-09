'use client';

import React from 'react';
import cn from 'classnames';

interface LoadingProps {
    variant?: 'fullscreen' | 'inline' | 'skeleton' | 'dots' | 'spinner' | 'pulse';
    size?: 'small' | 'medium' | 'large';
    message?: string;
    className?: string;
}

const Loading: React.FC<LoadingProps> = ({
    variant = 'fullscreen',
    size = 'medium',
    message = 'Loading...',
    className
}) => {
    const renderLoader = () => {
        switch (variant) {
            case 'dots':
                return (
                    <div className="loading__dots">
                        <div className="loading__dots--dot"></div>
                        <div className="loading__dots--dot"></div>
                        <div className="loading__dots--dot"></div>
                    </div>
                );

            case 'spinner':
                return <div className="loading__spinner"></div>;

            case 'pulse':
                return <div className="loading__pulse"></div>;

            case 'skeleton':
                return (
                    <div className="loading__dots">
                        <div className="loading__dots--dot"></div>
                        <div className="loading__dots--dot"></div>
                        <div className="loading__dots--dot"></div>
                    </div>
                );

            default:
                return (
                    <div className={cn('loading__loader', {
                        'loading__loader--small': size === 'small',
                        'loading__loader--large': size === 'large'
                    })}>
                        <span className="loading__span"></span>
                        <span className="loading__span"></span>
                        <span className="loading__span"></span>
                        <span className="loading__span"></span>
                        <span className="loading__span"></span>
                        <span className="loading__span"></span>
                        <span className="loading__span"></span>
                    </div>
                );
        }
    };

    return (
        <div className={cn('loading', `loading--${variant}`, className)}>
            {renderLoader()}

            {message && (
                <div className="loading__message">
                    {message}
                </div>
            )}

            {/* SVG filter for gooey effect */}
            <svg className="loading__svg">
                <filter id='gooey'>
                    <feGaussianBlur
                        in='SourceGraphic'
                        stdDeviation='10'
                    ></feGaussianBlur>
                    <feColorMatrix
                        values='
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 20 -10
                '
                    ></feColorMatrix>
                </filter>
            </svg>
        </div>
    );
};

export default Loading;
