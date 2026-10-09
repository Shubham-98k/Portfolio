import React, { useMemo, useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

function PortfolioContributions() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDarkClass = window.document.documentElement.classList.contains('dark');
      setIsDark(isDarkClass);
    });

    observer.observe(window.document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const portfolioThemes = useMemo(() => ({
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
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
    <div style={{ width: '100%' }} className="transition-all duration-300">
      <style>{`
        .react-activity-calendar,
        [class*="react-github-calendar"] {
          width: 100% !important;
          max-width: 850px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          display: block !important;
        }

        .react-activity-calendar__chart,
        svg {
          width: 100% !important;
          height: auto !important;
          margin: 0 auto !important;
        }

        .react-activity-calendar text,
        [class*="react-github-calendar"] text {
          fill: ${isDark ? '#71717a' : '#4b5563'} !important;
          font-weight: 500;
        }
      `}</style>

      <GitHubCalendar 
        username="Shubham-98K" 
        fontSize={14} 
        theme={portfolioThemes} 
        colorScheme={isDark ? 'dark' : 'light'} 
        transformData={filterFromDecember} 
        responsive={true} 
      />
    </div>
  );
}

export default PortfolioContributions;
