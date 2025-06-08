import React from 'react';

/**
 * PiGaugeRightDownDuoSolid icon from the duo-solid style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGaugeRightDownDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'gauge-right-down icon',
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
      <path d="M12.0001 1.8501C6.3941 1.8501 1.8501 6.3941 1.8501 12.0001C1.8501 17.6051 6.3941 22.1501 12.0001 22.1501C17.6061 22.1501 22.1501 17.6051 22.1501 12.0001C22.1501 6.3941 17.6061 1.8501 12.0001 1.8501Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M16.075 17.0013C15.8349 17.0184 15.5967 16.9483 15.4041 16.8038L10.7811 13.3348C10.5711 13.1783 10.3974 12.9784 10.2715 12.7487C10.1457 12.519 10.0708 12.2649 10.0519 12.0037C10.033 11.7425 10.0705 11.4803 10.1619 11.2349C10.2533 10.9895 10.3965 10.7666 10.5817 10.5814C10.7668 10.3962 10.9897 10.2531 11.2351 10.1617C11.4805 10.0702 11.7428 10.0327 12.004 10.0516C12.2652 10.0706 12.5192 10.1455 12.7489 10.2713C12.9786 10.3971 13.1785 10.5709 13.3351 10.7808L16.8041 15.4038C16.9485 15.5964 17.0186 15.8346 17.0016 16.0747C16.9845 16.3148 16.8814 16.5407 16.7112 16.7109C16.541 16.8812 16.3151 16.9843 16.075 17.0013Z" fill={color || "currentColor"} />
    </svg>
  );
}
