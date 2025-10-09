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

interface BlogData {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    image: string;
    tags: string[];
    readTime: string;
    url: string;
}

interface DataContextType {
    // Data
    awards: AwardData[];
    skills: SkillData[];
    timeline: TimelineData[];
    projects: ProjectData[];
    blogs: BlogData[];

    // Loading states
    loading: {
        awards: boolean;
        skills: boolean;
        timeline: boolean;
        projects: boolean;
        blogs: boolean;
    };

    // Initial loading state
    isInitialLoading: boolean;

    // Error states
    errors: {
        awards: string | null;
        skills: string | null;
        timeline: string | null;
        projects: string | null;
        blogs: string | null;
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
    const [blogs, setBlogs] = useState<BlogData[]>([]);

    // Loading states
    const [loading, setLoading] = useState({
        awards: false,
        skills: false,
        timeline: false,
        projects: false,
        blogs: false,
    });

    // Initial loading state for app startup
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    // Error states
    const [errors, setErrors] = useState({
        awards: null as string | null,
        skills: null as string | null,
        timeline: null as string | null,
        projects: null as string | null,
        blogs: null as string | null,
    });

    // Data fetching hooks
    const { fetchData: fetchAwards } = useData({
        endpoint: 'awards.json',
    });

    const { fetchData: fetchSkills } = useData({
        endpoint: 'skills.json',
    });

    const { fetchData: fetchTimeline } = useData({
        endpoint: 'timeline.json',
    });

    const { fetchData: fetchProjects } = useData({
        endpoint: 'myprojects.json',
    });

    const { fetchData: fetchBlogs } = useData({
        endpoint: 'blogs.json',
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
                case 'blogs':
                    data = await fetchBlogs();
                    // Sort blogs by date (newest first)
                    const sortedBlogs = data.sort((a: BlogData, b: BlogData) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    );
                    setBlogs(sortedBlogs);
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
                    fetchDataByType('blogs'),
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
                fetchDataByType('blogs'),
            ]);
        }
    };

    // Clear all data
    const clearCache = () => {
        // Reset data states
        setAwards([]);
        setSkills([]);
        setTimeline([]);
        setProjects([]);
        setBlogs([]);

        // Reset error states
        setErrors({
            awards: null,
            skills: null,
            timeline: null,
            projects: null,
            blogs: null,
        });
    };

    const contextValue: DataContextType = {
        // Data
        awards,
        skills,
        timeline,
        projects,
        blogs,

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
export type { AwardData, SkillData, TimelineData, ProjectData, BlogData };
