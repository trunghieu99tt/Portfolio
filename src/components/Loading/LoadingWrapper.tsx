'use client';

import React, { memo } from 'react';
import { useDataContext } from '../../contexts/DataContext';
import { FullscreenLoading } from './LoadingVariants';

interface LoadingWrapperProps {
    children: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = memo(({ children }) => {
    const { isInitialLoading } = useDataContext();

    if (isInitialLoading) {
        return <FullscreenLoading />;
    }

    return <>{children}</>;
});

LoadingWrapper.displayName = 'LoadingWrapper';

export default LoadingWrapper;
