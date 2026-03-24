import React from 'react';

/**
 * High-quality App Store Badge SVG
 * This approach uses an external IMG tag path for the Apple logo 
 * OR a much larger viewBox to avoid internal coordinate clipping issues.
 */
export const AppStoreBadge = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    className={className} 
    style={{ height: '40px', width: 'auto', display: 'block', padding: '1px', border: 'none', background: 'transparent', cursor: 'pointer', ...style }} 
    viewBox="0 0 135 40" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="135" height="40" rx="8" fill="black"/>
    
    {/* Industry Standard Apple Logo Vector - Scaled in its own coordinate space */}
    <g transform="translate(10, 8) scale(0.04)">
      <path 
        fill="white" 
        d="M495.2 278.4c-1.4 83 67.5 122.9 70.3 124.5-0.6 1.9-10.9 37.3-35.8 73.7-21.5 31.5-43.8 62.9-79.3 63.6-34.8 0.6-46-20.7-85.8-20.7-39.8 0-52.2 20-85.2 21.4-34.2 1.4-59.5-34.4-81.2-65.5-44.3-63.6-78.1-179.9-32.5-259.3 22.6-39.4 63.2-64.4 107.5-65 33.6-0.6 65.3 22.7 85.8 22.7 20.4 0 58.7-27.4 99.4-23.2 17 0.7 64.9 6.9 95.8 52.1-2.5 1.5-57.2 33.3-56.7 99.7-0.5 80.5 70.4 108.9 72.9 109.9-0.5 1.4-11.4 39-38.2 78.1zM425.8 88.5c18.1-21.9 30.4-52.2 27.1-82.6-26.1 1.1-57.7 17.5-76.4 39.4-16.8 19.3-31.5 50.4-27.6 79.9 29.1 2.3 58.8-14.8 76.9-36.7z"
      />
    </g>
    
    <g transform="translate(42, 13)" fill="white">
       <text x="0" y="0" style={{ fontSize: '7px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: 500 }}>Download on the</text>
       <text x="0" y="14" style={{ fontSize: '15px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: 600 }}>App Store</text>
    </g>
  </svg>
);

/**
 * High-quality Google Play Badge SVG
 */
export const PlayStoreBadge = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    className={className} 
    style={{ height: '40px', width: 'auto', display: 'block', ...style }} 
    viewBox="0 0 135 40" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="135" height="40" rx="8" fill="black"/>
    
    <g transform="translate(10, 8) scale(0.8)">
      <path d="M1.3.6C.5 1.4.1 2.7.1 4.3v24.6c0 1.6.4 2.9 1.1 3.7l.1.1 13.7-13.7v-.3L1.4.5l-.1.1z" fill="#00a0ff"/>
      <path d="M19.1 19.4L15 15.3v-.6l4.1-4.1.1.1 4.8 2.7c1.4.8 1.4 2.1 0 2.9l-4.8 2.7-.1.4z" fill="#ffe000"/>
      <path d="M15.1 15.1L1.3 32.7c.4.4 1.1.5 2 .1l15.9-9-4.1-8.7z" fill="#ff3a44"/>
      <path d="M15.1 17.1l4-8.6L3.3.4C2.4 0 1.7.1 1.3.5l13.8 16.6z" fill="#32a071"/>
    </g>

    <g transform="translate(42, 13)" fill="white">
       <text x="0" y="0" style={{ fontSize: '6px', fontFamily: 'Roboto, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>GET IT ON</text>
       <text x="0" y="14" style={{ fontSize: '15px', fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Google Play</text>
    </g>
  </svg>
);
