'use client';

import React, { memo } from 'react';
import { useDataContext } from '../../contexts/DataContext';

const DataStatus = memo(() => {
    const { loading, errors, refreshData, clearCache } = useDataContext();

    const isLoading = Object.values(loading).some(Boolean);
    const hasErrors = Object.values(errors).some(Boolean);

    if (!isLoading && !hasErrors) {
        return null; // Don't show anything if everything is loaded successfully
    }

    return (
        <div className="data-status" style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '12px',
            zIndex: 9999,
            minWidth: '200px'
        }}>
            {isLoading && (
                <div style={{ marginBottom: '5px' }}>
                    🔄 Loading data...
                </div>
            )}

            {hasErrors && (
                <div style={{ marginBottom: '5px', color: '#ff6b6b' }}>
                    ⚠️ Some data failed to load
                </div>
            )}

            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <button
                    onClick={() => refreshData()}
                    style={{
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        cursor: 'pointer'
                    }}
                >
                    Refresh
                </button>
                <button
                    onClick={() => clearCache()}
                    style={{
                        background: '#ff6b6b',
                        color: 'white',
                        border: 'none',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        cursor: 'pointer'
                    }}
                >
                    Clear Cache
                </button>
            </div>
        </div>
    );
});

DataStatus.displayName = 'DataStatus';

export default DataStatus;
