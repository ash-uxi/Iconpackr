import React from 'react';

/**
 * PiRocketShipDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiRocketShipDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'rocket-ship icon',
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
      <path d="M11.3588 6.14844H6.98108C6.65411 6.14844 6.43827 6.20822 6.15789 6.37645L4.34401 7.46478C3.91088 7.72466 3.69431 7.8546 3.63225 8.01389C3.57823 8.15256 3.58878 8.30808 3.66105 8.43818C3.74406 8.58762 3.9762 8.68711 4.44047 8.88609L7.9144 10.3749M13.6251 16.0857L15.114 19.5596C15.3129 20.0239 15.4124 20.256 15.5619 20.339C15.692 20.4113 15.8475 20.4218 15.9862 20.3678C16.1455 20.3057 16.2754 20.0892 16.5353 19.656L17.6236 17.8422C17.7918 17.5618 17.8516 17.3459 17.8516 17.019L17.8516 12.6413M7.95219 20.2905L7.24508 20.9976M3.70955 16.0479L3.00244 16.755" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5.8307 18.1688L3.00244 20.9974M20.6799 3.31952C20.3716 3.01115 19.5533 2.95664 18.5546 3.03254C17.3931 3.12082 16.8124 3.16496 15.5065 3.60511C14.6118 3.9067 13.0455 4.74471 12.2981 5.32172C11.2073 6.1638 10.5347 7.02309 9.18956 8.74166L8.32549 9.84559C7.73378 10.6016 7.43793 10.9796 7.27982 11.3688C6.93804 12.2101 6.99578 13.161 7.43684 13.9549C7.64088 14.3221 7.98029 14.6615 8.65912 15.3403C9.33795 16.0192 9.67737 16.3586 10.0446 16.5626C10.8384 17.0037 11.7893 17.0614 12.6307 16.7196C13.0199 16.5615 13.3979 16.2657 14.1539 15.674L15.2578 14.8099C16.9764 13.4648 17.8357 12.7922 18.6777 11.7014C19.2548 10.954 20.0928 9.38769 20.3944 8.49293C20.8345 7.18711 20.8786 6.60636 20.9669 5.44487C21.0428 4.4462 20.9883 3.6279 20.6799 3.31952Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
