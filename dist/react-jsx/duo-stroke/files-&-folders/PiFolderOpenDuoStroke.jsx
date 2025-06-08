import React from 'react';

/**
 * PiFolderOpenDuoStroke icon from the duo-stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFolderOpenDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'folder-open icon',
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
      <path d="M20.9614 9.99711C20.9135 9.21421 20.8058 8.65847 20.564 8.18404C20.1805 7.43139 19.5686 6.81947 18.816 6.43597C17.9603 6 16.8402 6 14.6 6H13.2844C12.8148 6 12.58 6 12.3669 5.93527C12.1782 5.87797 12.0027 5.78403 11.8503 5.65882C11.6783 5.51739 11.548 5.32202 11.2875 4.93128L10.7125 4.06872C10.452 3.67798 10.3217 3.48262 10.1497 3.34118C9.99732 3.21597 9.82179 3.12203 9.6331 3.06473C9.41997 3 9.18517 3 8.71556 3H8.4C6.15979 3 5.03968 3 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43597 5.18404C2 6.03968 2 7.15979 2 9.4V14.6C2 16.8402 2 17.9603 2.43597 18.816C2.81947 19.5686 3.43139 20.1805 4.18404 20.564C4.33332 20.6401 4.49065 20.7029 4.66058 20.7547" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5.35721 12.3399C5.58724 11.495 5.70225 11.0725 5.94455 10.7585C6.15839 10.4814 6.44119 10.2653 6.7647 10.1318C7.13127 9.98047 7.56913 9.98047 8.44485 9.98047H19.8588C20.3138 9.98047 20.6719 9.98047 20.961 9.99764C21.3503 10.0208 21.6145 10.0751 21.8219 10.2024C22.1384 10.3969 22.3715 10.702 22.476 11.0585C22.5953 11.4654 22.455 11.9805 22.1746 13.0109L21.2842 16.2816C20.8241 17.9716 20.5941 18.8165 20.1095 19.4444C19.6818 19.9986 19.1162 20.4308 18.4692 20.6979C17.736 21.0005 16.8603 21.0005 15.1089 21.0005H7.18712C5.84975 21.0005 5.14047 21.0005 4.6601 20.7552C4.62906 20.7394 4.59898 20.7225 4.56974 20.7046C4.1477 20.4452 3.83691 20.0385 3.69756 19.5632C3.5385 19.0207 3.7255 18.3338 4.09949 16.96L5.35721 12.3399Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
