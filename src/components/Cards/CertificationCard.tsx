'use client';

import React from "react";
import { motion } from "framer-motion";
import type { CertificationData } from "@/contexts/DataContext";

type Props = {
    certification: CertificationData;
    index: number;
};

const CertificationCard = ({ certification, index }: Props) => {
    const { title, issuer, date, credentialId, credentialUrl, image, skills } = certification;

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
            month: 'long'
        });
    };

    return (
        <motion.div
            className="certification-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="certification-card__content">
                <div className="certification-card__meta">
                    <span className="certification-card__issuer">{issuer}</span>
                    <span className="certification-card__date">{formatDate(date)}</span>
                </div>

                <h3 className="certification-card__title">{title}</h3>

                {credentialId && (
                    <div className="certification-card__credential">
                        <span className="certification-card__credential-label">Credential ID:</span>
                        <span className="certification-card__credential-id">{credentialId}</span>
                    </div>
                )}

                {skills && skills.length > 0 && (
                    <div className="certification-card__skills">
                        {skills.map((skill, idx) => (
                            <span key={idx} className="certification-card__skill">
                                {skill}
                            </span>
                        ))}
                    </div>
                )}

                {credentialUrl && (
                    <div className="certification-card__footer">
                        <a
                            href={credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certification-card__verify"
                        >
                            Verify Certificate
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default CertificationCard;
