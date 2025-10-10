'use client';

import React, { memo } from "react";
import { useDataContext } from "@/contexts/DataContext";
import BlogCard from "../Cards/BlogCard";
import { BlogsLoading } from "../Loading";

const Blog = memo(() => {
    const { blogs, loading, errors } = useDataContext();


    return (
        <section className="blog" id="blog">
            <div className="container">
                <div className="section-heading-container">
                    <div className="text-wrapper">
                        <h3 className="section-subheading">My Blog</h3>
                    </div>
                    <div className="text-wrapper">
                        <h2 className="section-heading">
                            Latest Articles & Insights
                        </h2>
                    </div>
                </div>

                {loading.blogs ? (
                    <div className="blog__loading">
                        <BlogsLoading />
                    </div>
                ) : errors.blogs ? (
                    <div className="blog__error">
                        <div className="error-message">{errors.blogs}</div>
                    </div>
                ) : !blogs || blogs.length === 0 ? (
                    <div className="blog__empty">
                        <div className="empty-message">No blog posts available</div>
                    </div>
                ) : (
                    <>
                        <div className="blog__grid">
                            {blogs.map((blog, index) => (
                                <BlogCard
                                    key={blog.id}
                                    blog={blog}
                                    index={index}
                                />
                            ))}
                        </div>
                        <div className="blog__cta">
                            <a
                                href="https://blog.hieunt.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog__read-more-btn"
                            >
                                View All Articles
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
});

Blog.displayName = 'Blog';

export default Blog;

