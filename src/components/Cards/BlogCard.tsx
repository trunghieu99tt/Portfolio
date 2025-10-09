'use client';

import React from "react";
import { motion } from "framer-motion";
import type { BlogData } from "@/contexts/DataContext";

type Props = {
    blog: BlogData;
    index: number;
};

const BlogCard = ({ blog, index }: Props) => {
    const { title, excerpt, author, date, image, tags, readTime, url } = blog;

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
            }
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <motion.article
            className="blog-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="blog-card__content">
                <div className="blog-card__meta">
                    <span className="blog-card__date">{formatDate(date)}</span>
                    <span className="blog-card__separator">•</span>
                    <span className="blog-card__read-time">{readTime}</span>
                </div>

                <h3 className="blog-card__title">{title}</h3>
                <p className="blog-card__excerpt">{excerpt}</p>

                {tags && tags.length > 0 && (
                    <div className="blog-card__tags">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="blog-card__tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="blog-card__footer">
                    <span className="blog-card__author">By {author}</span>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-card__read-more"
                    >
                        Read More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;

