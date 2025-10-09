'use client';

import React, { memo } from 'react';
import Loading from './Loading';

// Fullscreen loading for initial app load
export const FullscreenLoading = memo(() => (
    <Loading
        variant="fullscreen"
        size="large"
        message="Loading portfolio data..."
    />
));

// Inline loading for component sections
export const InlineLoading = memo(({ message }: { message?: string }) => (
    <Loading
        variant="inline"
        size="medium"
        message={message || "Loading..."}
    />
));

// Dots loading for small areas
export const DotsLoading = memo(({ message }: { message?: string }) => (
    <Loading
        variant="dots"
        size="small"
        message={message}
    />
));

// Spinner loading for buttons/actions
export const SpinnerLoading = memo(() => (
    <Loading
        variant="spinner"
        size="small"
    />
));

// Skeleton loading for content areas
export const SkeletonLoading = memo(({ message }: { message?: string }) => (
    <Loading
        variant="skeleton"
        size="small"
        message={message}
    />
));

// Data-specific loading components
export const AwardsLoading = memo(() => (
    <InlineLoading message="Loading awards..." />
));

export const SkillsLoading = memo(() => (
    <InlineLoading message="Loading skills..." />
));

export const TimelineLoading = memo(() => (
    <InlineLoading message="Loading timeline..." />
));

export const ProjectsLoading = memo(() => (
    <InlineLoading message="Loading projects..." />
));

// Set display names for debugging
FullscreenLoading.displayName = 'FullscreenLoading';
InlineLoading.displayName = 'InlineLoading';
DotsLoading.displayName = 'DotsLoading';
SpinnerLoading.displayName = 'SpinnerLoading';
SkeletonLoading.displayName = 'SkeletonLoading';
AwardsLoading.displayName = 'AwardsLoading';
SkillsLoading.displayName = 'SkillsLoading';
TimelineLoading.displayName = 'TimelineLoading';
ProjectsLoading.displayName = 'ProjectsLoading';
