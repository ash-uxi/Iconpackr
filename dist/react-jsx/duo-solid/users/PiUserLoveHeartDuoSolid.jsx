import React from 'react';

/**
 * PiUserLoveHeartDuoSolid icon from the duo-solid style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserLoveHeartDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-love-heart icon',
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
      <path d="M10.7112 14H8C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H12.5817C11.4473 20.9364 10 19.1129 10 16.6528C10 15.6475 10.2662 14.7544 10.7112 14Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M16.9969 13.7421C17.5098 13.4262 18.0855 13.3122 18.6141 13.3197C20.2605 13.3428 22 14.6498 22 16.6528C22 18.4545 20.8261 19.8743 19.8063 20.7614C19.2765 21.2223 18.7341 21.5876 18.2896 21.8414C18.0677 21.9681 17.8595 22.0731 17.68 22.1499C17.591 22.1879 17.4975 22.224 17.4055 22.2524C17.3379 22.2733 17.1816 22.3193 17 22.3193C16.8184 22.3193 16.6621 22.2733 16.5945 22.2524C16.5025 22.224 16.409 22.1879 16.32 22.1499C16.1405 22.0731 15.9323 21.9681 15.7104 21.8414C15.2659 21.5876 14.7235 21.2223 14.1937 20.7614C13.1739 19.8743 12 18.4545 12 16.6528C12 14.6608 13.7298 13.3196 15.4 13.3196C15.9068 13.3196 16.4808 13.4284 16.9969 13.7421Z" fill={color || "currentColor"} /> <path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill={color || "currentColor"} />
    </svg>
  );
}
