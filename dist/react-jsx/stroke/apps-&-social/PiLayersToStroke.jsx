import React from 'react';

/**
 * PiLayersToStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLayersToStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'layers-to icon',
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
      <path d="M14.903 4.77452L7.86685 6.16875C6.55622 6.42875 5.60622 7.59187 5.5981 8.94812L5.54952 16.2346M14.903 4.77452L15.1087 4.73375C16.8487 4.38875 18.4637 5.75 18.4518 7.5525L18.4504 7.76527M14.903 4.77452L14.9044 4.55993C14.9157 2.75806 13.3007 1.39619 11.5607 1.74119L4.31881 3.17681C3.00819 3.43618 2.05881 4.59993 2.05006 5.95743L2.00007 13.4562C1.98819 15.2587 3.60319 16.6205 5.34318 16.2755L5.54952 16.2346M5.54952 16.2346L5.5481 16.4494C5.53623 18.2512 7.15122 19.6125 8.89122 19.2681L9.09702 19.2273M9.09702 19.2273L9.09558 19.4403C9.08452 21.242 10.6994 22.6037 12.4393 22.2587L19.6812 20.8231C20.9918 20.5637 21.9412 19.4006 21.9499 18.0431L21.9999 10.5431C22.0118 8.74122 20.3968 7.37935 18.6568 7.72435L18.4504 7.76527M9.09702 19.2273L9.14621 11.94C9.15496 10.5825 10.1043 9.41997 11.415 9.15997L18.4504 7.76527" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
