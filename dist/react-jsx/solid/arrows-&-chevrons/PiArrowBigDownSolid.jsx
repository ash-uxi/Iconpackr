import React from 'react';

/**
 * PiArrowBigDownSolid icon from the solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowBigDownSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-big-down icon',
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
      <path d="M19.804 14.79C19.92 14.6332 19.9876 14.4459 19.9985 14.2511C20.0094 14.0564 19.9632 13.8627 19.8654 13.6939C19.7676 13.5251 19.6226 13.3887 19.4482 13.3012C19.2739 13.2138 19.0777 13.1793 18.884 13.202C17.924 13.313 16.964 13.402 16 13.466V4.56998C16 4.31698 16 4.07098 15.983 3.86298C15.9677 3.59552 15.8994 3.33378 15.782 3.09298C15.5903 2.71667 15.2843 2.41072 14.908 2.21898C14.6671 2.10198 14.4054 2.03399 14.138 2.01898C13.93 2.00098 13.684 2.00098 13.432 2.00098H10.568C10.316 2.00098 10.07 2.00098 9.862 2.01798C9.59456 2.03331 9.33282 2.10163 9.092 2.21898C8.7157 2.41072 8.40975 2.71667 8.218 3.09298C8.10066 3.33379 8.03234 3.59553 8.017 3.86298C8 4.07198 8 4.31798 8 4.57098V13.466C7.03635 13.4013 6.0744 13.3133 5.115 13.202C4.92135 13.1796 4.72537 13.2142 4.55117 13.3017C4.37696 13.3892 4.23213 13.5257 4.13449 13.6945C4.03684 13.8632 3.99064 14.0568 4.00157 14.2514C4.0125 14.446 4.08008 14.6332 4.196 14.79C6.05773 17.3086 8.23787 19.5755 10.682 21.534C11.0559 21.8337 11.5208 21.9971 12 21.9971C12.4792 21.9971 12.9441 21.8337 13.318 21.534C15.7622 19.5755 17.9423 17.3086 19.804 14.79Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
