'use client';

import React, { memo } from "react";
import { useDataContext } from "../../contexts/DataContext";
import { AwardsLoading } from "../loading";
import AwardCard from "../Cards/AwardCard";

const Awards = memo(() => {
    const { awards, loading, errors } = useDataContext();

    if (loading.awards) {
        return (
            <div className="awards introduction-item introduction-item--active grid grid--2">
                <AwardsLoading />
            </div>
        );
    }

    if (errors.awards) {
        return (
            <div className="awards introduction-item introduction-item--active grid grid--2">
                <div className="error-message">{errors.awards}</div>
            </div>
        );
    }

    if (!awards || awards.length === 0) {
        return (
            <div className="awards introduction-item introduction-item--active grid grid--2">
                <div className="empty-message">No awards to display</div>
            </div>
        );
    }

    return (
        <div className="awards introduction-item introduction-item--active grid grid--2">
            {awards.map((item, idx) => (
                <AwardCard {...item} key={item.title || `award-card-${idx}`} />
            ))}
        </div>
    );
});

Awards.displayName = 'Awards';

export default Awards;
