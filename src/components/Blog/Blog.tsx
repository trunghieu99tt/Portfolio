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
                    <div className="blog__grid">
                        {blogs.map((blog, index) => (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
});

Blog.displayName = 'Blog';

export default Blog;

