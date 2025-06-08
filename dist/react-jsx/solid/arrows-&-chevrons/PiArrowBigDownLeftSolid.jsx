import React from 'react';

/**
 * PiArrowBigDownLeftSolid icon from the solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowBigDownLeftSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-big-down-left icon',
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
      <path d="M14.9572 20.0798C15.15 20.0508 15.3301 19.9661 15.4754 19.8361C15.6206 19.7061 15.7248 19.5365 15.7749 19.3481C15.8251 19.1598 15.8191 18.9608 15.7576 18.7758C15.6962 18.5908 15.582 18.4278 15.4292 18.3068C14.6722 17.7068 13.9292 17.0888 13.2032 16.4538L19.4932 10.1638C19.662 9.99976 19.8245 9.8293 19.9802 9.65278C20.1587 9.45275 20.2957 9.21922 20.3832 8.96578C20.5137 8.56412 20.5137 8.13145 20.3832 7.72978C20.2882 7.43978 20.1292 7.21878 19.9802 7.04378C19.8452 6.88378 19.6712 6.71078 19.4932 6.53178L19.4702 6.50978L17.4902 4.52978L17.4682 4.50678C17.2902 4.32878 17.1162 4.15478 16.9572 4.01978C16.7822 3.87078 16.5602 3.71178 16.2702 3.61778C15.8682 3.48678 15.4362 3.48678 15.0342 3.61778C14.7442 3.71178 14.5222 3.87078 14.3482 4.01978C14.1713 4.17549 14.0005 4.33794 13.8362 4.50678L13.8142 4.52978L7.54619 10.7968C6.91062 10.0699 6.29277 9.32765 5.69319 8.57078C5.57214 8.41791 5.40903 8.30376 5.22394 8.24239C5.03885 8.18101 4.83985 8.1751 4.65144 8.22536C4.46303 8.27562 4.29343 8.37988 4.16351 8.52529C4.03358 8.6707 3.94901 8.85092 3.92019 9.04378C3.45539 12.1408 3.39421 15.285 3.73819 18.3978C3.79037 18.8743 4.0035 19.3188 4.34239 19.6579C4.68129 19.997 5.12567 20.2103 5.60219 20.2628C8.71534 20.606 11.8598 20.5444 14.9572 20.0798Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
