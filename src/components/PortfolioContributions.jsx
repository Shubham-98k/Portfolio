import React, { useMemo } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

function PortfolioContributions() {
  const githubDarkTheme = useMemo(() => ({
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  }), []);

  const filterFromDecember = useMemo(() => {
    return (data) => {
      if (!data || data.length === 0) return [];
      const currentYear = new Date().getFullYear();
      const targetYear = currentYear - 1;

      return data.filter((day) => {
        const date = new Date(day.date);
        const year = date.getFullYear();
        const month = date.getMonth();
        return (year === targetYear && month === 11) || year === currentYear;
      });
    };
  }, []);

  return (
    <div style={{ width: '100%' }}>
      {/* 🚀 Pin-point target selectors to force absolute center positioning */}
      <style>{`
        /* Target the root container element injected by the library */
        .react-activity-calendar,
        [class*="react-github-calendar"] {
          width: 100% !important;
          max-width: 850px !important; /* Locks growth bounds to prevent distorted blocks */
          margin-left: auto !important;
          margin-right: auto !important;
          display: block !important;
        }

        /* Targets the underlying generated graphic layout map */
        .react-activity-calendar__chart,
        svg {
          width: 100% !important;
          height: auto !important;
          margin: 0 auto !important;
        }
      `}</style>

      <GitHubCalendar 
        username="Shubham-98K" 
        fontSize={14} 
        theme={githubDarkTheme} 
        colorScheme="dark" 
        transformData={filterFromDecember} 
        responsive={true} 
      />
    </div>
  );
}

export default PortfolioContributions;
