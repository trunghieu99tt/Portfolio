'use client';

import React, { memo } from "react";
import { useDataContext } from "../../contexts/DataContext";
import { SkillsLoading } from "../Loading";

const Skills = memo(() => {
    const { skills, loading, errors } = useDataContext();

    if (loading.skills) {
        return (
            <div className="skills introduction-item introduction-item--active grid grid--3">
                <SkillsLoading />
            </div>
        );
    }

    if (errors.skills) {
        return (
            <div className="skills introduction-item introduction-item--active grid grid--3">
                <div className="error-message">{errors.skills}</div>
            </div>
        );
    }

    if (!skills || skills.length === 0) {
        return (
            <div className="skills introduction-item introduction-item--active grid grid--3">
                <div className="empty-message">No skills to display</div>
            </div>
        );
    }

    return (
        <div className="skills introduction-item introduction-item--active grid grid--3">
            {skills.map((item, idx) => (
                <div
                    className="skill-item"
                    style={{ fontSize: "1.5rem" }}
                    key={item.title || `skill-${idx}`}
                >
                    + {item.title}
                </div>
            ))}
        </div>
    );
});

Skills.displayName = 'Skills';

export default Skills;
