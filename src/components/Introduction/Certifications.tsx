'use client';

import React, { memo } from "react";
import { useDataContext } from "../../contexts/DataContext";
import { CertificationsLoading } from "../Loading";
import CertificationCard from "../Cards/CertificationCard";

const Certifications = memo(() => {
    const { certifications, loading, errors } = useDataContext();

    if (loading.certifications) {
        return (
            <div className="certifications introduction-item introduction-item--active grid grid--2">
                <CertificationsLoading />
            </div>
        );
    }

    if (errors.certifications) {
        return (
            <div className="certifications introduction-item introduction-item--active grid grid--2">
                <div className="error-message">{errors.certifications}</div>
            </div>
        );
    }

    if (!certifications || certifications.length === 0) {
        return (
            <div className="certifications introduction-item introduction-item--active grid grid--2">
                <div className="empty-message">No certifications to display</div>
            </div>
        );
    }

    return (
        <div className="certifications introduction-item introduction-item--active grid grid--2">
            {certifications.map((certification, idx) => (
                <CertificationCard
                    key={certification.id || `certification-${idx}`}
                    certification={certification}
                    index={idx}
                />
            ))}
        </div>
    );
});

Certifications.displayName = 'Certifications';

export default Certifications;
