import React from 'react';

/**
 * PiTelegramDuoSolid icon from the duo-solid style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTelegramDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'telegram icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} d="M15.937 8.75c-.069.113-3.042 2.761-4.755 4.309-.799.721-1.543 1.722-1.045 2.675.187.357.466.605.73.8.25.186.573.384.933.604l2.658 1.63c.576.354 1.065.654 1.479.86.424.21.889.385 1.404.371a2.81 2.81 0 0 0 1.945-.849c.363-.374.542-.838.664-1.29.118-.44.214-.996.326-1.647l1.573-9.168c.062-.364.12-.703.142-.982.021-.283.023-.679-.177-1.06a1.9 1.9 0 0 0-1.214-.955c-.406-.102-.785-.021-1.061.059-.273.078-.598.205-.952.342L4.618 9.876c-.56.218-1.037.403-1.39.575-.308.15-.796.408-1.038.9a1.85 1.85 0 0 0 .094 1.8c.29.462.8.67 1.123.789.37.136.864.273 1.443.434l.584.162c.567.157 1.008.28 1.462.294.4.013.8-.038 1.183-.151a3.5 3.5 0 0 0 .463-.19c.594-.282 1.084-.724 1.595-1.138z" opacity=".28" /> <path d="m5.605 13.546-.445-.124c-1.231-.342-1.847-.513-2.03-.803a.85.85 0 0 1-.043-.827c.151-.307.746-.538 1.935-1m9.92 7.1c1.219.748 1.828 1.122 2.373 1.108a1.81 1.81 0 0 0 1.254-.546c.373-.385.492-1.075.729-2.456" />
    </svg>
  );
}
