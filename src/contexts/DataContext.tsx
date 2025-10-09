'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useData } from '../talons/useData';

// Types for our data
interface AwardData {
    title: string;
    url: string;
    image?: string;
}

interface SkillData {
    title: string;
}

interface TimelineData {
    title: string;
    description: string;
    companyName: string;
    timeStart: string;
    timeEnd: string;
    image: string;
    order: number;
}

interface ProjectData {
    category: string;
    dataFilter: string;
    name: string;
    url: string;
    image: string;
}

interface DataContextType {
    // Data
    awards: AwardData[];
    skills: SkillData[];
    timeline: TimelineData[];
    projects: ProjectData[];

    // Loading states
    loading: {
        awards: boolean;
        skills: boolean;
        timeline: boolean;
        projects: boolean;
    };

    // Initial loading state
    isInitialLoading: boolean;

    // Error states
    errors: {
        awards: string | null;
        skills: string | null;
        timeline: string | null;
        projects: string | null;
    };

    // Actions
    refreshData: (dataType?: string) => Promise<void>;
    clearCache: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    // State for all data
    const [awards, setAwards] = useState<AwardData[]>([]);
    const [skills, setSkills] = useState<SkillData[]>([]);
    const [timeline, setTimeline] = useState<TimelineData[]>([]);
    const [projects, setProjects] = useState<ProjectData[]>([]);

    // Loading states
    const [loading, setLoading] = useState({
        awards: false,
        skills: false,
        timeline: false,
        projects: false,
    });

    // Initial loading state for app startup
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    // Error states
    const [errors, setErrors] = useState({
        awards: null as string | null,
        skills: null as string | null,
        timeline: null as string | null,
        projects: null as string | null,
    });

    // Data fetching hooks
    const { fetchData: fetchAwards, clearCache: clearAwardsCache } = useData({
        endpoint: 'awards.json',
        cacheTime: 10 * 60 * 1000, // 10 minutes
    });

    const { fetchData: fetchSkills, clearCache: clearSkillsCache } = useData({
        endpoint: 'skills.json',
        cacheTime: 10 * 60 * 1000, // 10 minutes
    });

    const { fetchData: fetchTimeline, clearCache: clearTimelineCache } = useData({
        endpoint: 'timeline.json',
        cacheTime: 10 * 60 * 1000, // 10 minutes
    });

    const { fetchData: fetchProjects, clearCache: clearProjectsCache } = useData({
        endpoint: 'myprojects.json',
        cacheTime: 10 * 60 * 1000, // 10 minutes
    });

    // Fetch specific data type
    const fetchDataByType = async (dataType: string) => {
        const setLoadingState = (isLoading: boolean) => {
            setLoading(prev => ({ ...prev, [dataType]: isLoading }));
        };

        const setErrorState = (error: string | null) => {
            setErrors(prev => ({ ...prev, [dataType]: error }));
        };

        try {
            setLoadingState(true);
            setErrorState(null);

            let data: any[] = [];

            switch (dataType) {
                case 'awards':
                    data = await fetchAwards();
                    setAwards(data);
                    break;
                case 'skills':
                    data = await fetchSkills();
                    setSkills(data);
                    break;
                case 'timeline':
                    data = await fetchTimeline();
                    // Sort timeline data by order
                    const sortedData = data.sort((a: TimelineData, b: TimelineData) => a.order - b.order);
                    setTimeline(sortedData);
                    break;
                case 'projects':
                    data = await fetchProjects();
                    setProjects(data);
                    break;
                default:
                    console.warn(`Unknown data type: ${dataType}`);
            }
        } catch (error) {
            console.error(`Failed to fetch ${dataType}:`, error);
            setErrorState(`Failed to load ${dataType}`);
        } finally {
            setLoadingState(false);
        }
    };

    // Fetch all data on mount
    useEffect(() => {
        const fetchAllData = async () => {
            console.log('🚀 Fetching all data on app initialization...');

            try {
                // Fetch all data in parallel for better performance
                await Promise.allSettled([
                    fetchDataByType('awards'),
                    fetchDataByType('skills'),
                    fetchDataByType('timeline'),
                    fetchDataByType('projects'),
                ]);
            } finally {
                // Hide initial loading screen after all data is fetched
                setTimeout(() => {
                    setIsInitialLoading(false);
                }, 500); // Small delay for better UX
            }
        };

        fetchAllData();
    }, []);

    // Refresh specific data or all data
    const refreshData = async (dataType?: string) => {
        if (dataType) {
            await fetchDataByType(dataType);
        } else {
            // Refresh all data
            await Promise.allSettled([
                fetchDataByType('awards'),
                fetchDataByType('skills'),
                fetchDataByType('timeline'),
                fetchDataByType('projects'),
            ]);
        }
    };

    // Clear all caches
    const clearCache = () => {
        clearAwardsCache();
        clearSkillsCache();
        clearTimelineCache();
        clearProjectsCache();

        // Reset data states
        setAwards([]);
        setSkills([]);
        setTimeline([]);
        setProjects([]);

        // Reset error states
        setErrors({
            awards: null,
            skills: null,
            timeline: null,
            projects: null,
        });
    };

    const contextValue: DataContextType = {
        // Data
        awards,
        skills,
        timeline,
        projects,

        // Loading states
        loading,
        isInitialLoading,

        // Error states
        errors,

        // Actions
        refreshData,
        clearCache,
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to use the data context
export const useDataContext = (): DataContextType => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};

// Export types for use in components
export type { AwardData, SkillData, TimelineData, ProjectData };
