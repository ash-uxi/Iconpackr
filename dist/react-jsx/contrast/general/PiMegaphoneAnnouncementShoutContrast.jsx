import React from 'react';

/**
 * PiMegaphoneAnnouncementShoutContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMegaphoneAnnouncementShoutContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'megaphone-announcement-shout icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M11.162 15.312 13.295 22H8.92l-2.116-6.044m4.358-.644c-1.458.166-2.907.423-4.358.644m4.358-.644a27.4 27.4 0 0 1 8.16.296m-12.518.348-1.632.248a5.126 5.126 0 0 1-1.699-6.34l4.67-1.824a27.4 27.4 0 0 0 7.882-4.733m3.296 12.301q.236.137.436.086c.876-.235.825-3.263-.114-6.765-.938-3.5-2.408-6.15-3.283-5.915q-.2.056-.335.293m3.296 12.301c-.873-.504-2.052-2.86-2.847-5.83-.796-2.969-.953-5.598-.449-6.471"/>
  <path fill="currentColor" d="m8.143 8.04-4.67 1.825a5.126 5.126 0 0 0 1.7 6.34l1.631-.25c1.45-.22 2.9-.477 4.358-.643a27.4 27.4 0 0 1 8.16.296c-.874-.504-2.053-2.86-2.848-5.83-.796-2.969-.953-5.598-.449-6.471A27.4 27.4 0 0 1 8.143 8.04" opacity=".28"/>
    </svg>
  );
}
