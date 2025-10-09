'use client';

import React, { memo } from "react";
import { motion } from "framer-motion";
import { useDataContext } from "@/contexts/DataContext";
import BlogCard from "../Cards/BlogCard";
import { BlogsLoading } from "../Loading";

const Blog = memo(() => {
    const { blogs, loading, errors } = useDataContext();

    const headingVariants = {
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

    return (
        <section className="blog" id="blog">
            <div className="container">
                <motion.div
                    className="blog__heading"
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="text-wrapper">
                        <h3 className="section-subheading">My Blog</h3>
                    </div>
                    <div className="text-wrapper">
                        <h2 className="section-heading">
                            Latest Articles & Insights
                        </h2>
                    </div>
                </motion.div>

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

