import React from 'react';

/**
 * PiNotionDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiNotionDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'notion icon',
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
      <path d="M10.885 17.4V10.6055C10.885 10.4809 10.885 10.4187 10.9084 10.3929C10.9287 10.3706 10.9587 10.3599 10.9885 10.3645C11.0229 10.3697 11.0622 10.418 11.1408 10.5147L16.4792 17.0852C16.5578 17.1819 16.5971 17.2302 16.6315 17.2354C16.6613 17.24 16.6913 17.2293 16.7116 17.207C16.735 17.1813 16.735 17.119 16.735 16.9944V10.2" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20.2611 8.01498C19.9355 7.58874 19.5171 7.23835 19.0344 6.99238C18.2643 6.6 17.2562 6.6 15.24 6.6H12.36C10.3438 6.6 9.33572 6.6 8.56563 6.99238C7.88825 7.33752 7.33752 7.88825 6.99238 8.56563C6.6 9.33572 6.6 10.3438 6.6 12.36V15.24C6.6 17.2562 6.6 18.2643 6.99238 19.0344C7.1995 19.4409 7.48067 19.8018 7.81882 20.1M20.2611 8.01498C20.2723 8.02973 20.2835 8.04457 20.2945 8.0595M20.2611 8.01498L17.6829 4.58444C17.3429 4.08131 16.8797 3.67023 16.3344 3.39238C15.5643 3 14.5562 3 12.54 3H8.76C6.74381 3 5.73572 3 4.96563 3.39238C4.28825 3.73752 3.73752 4.28825 3.39238 4.96563C3 5.73572 3 6.74381 3 8.76V12.54C3 14.5562 3 15.5643 3.39238 16.3344C3.65464 16.8491 4.0356 17.2907 4.50063 17.6245L7.81882 20.1M20.2611 8.01498L20.2945 8.0595M20.2945 8.0595C20.4121 8.21852 20.517 8.38771 20.6076 8.56563C21 9.33572 21 10.3438 21 12.36V15.24C21 17.2562 21 18.2643 20.6076 19.0344C20.2625 19.7117 19.7117 20.2625 19.0344 20.6076C18.2643 21 17.2562 21 15.24 21H12.36C10.3438 21 9.33572 21 8.56563 20.6076C8.29476 20.4696 8.04414 20.2987 7.81882 20.1" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
