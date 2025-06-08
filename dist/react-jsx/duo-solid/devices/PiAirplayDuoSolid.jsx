import React from 'react';

/**
 * PiAirplayDuoSolid icon from the duo-solid style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAirplayDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'airplay icon',
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M13.182 14.017a3 3 0 0 0-2.364 0c-.528.226-.913.635-1.244 1.07-.324.427-.682 1-1.11 1.685l-.026.04-.756 1.21-.023.037c-.23.368-.438.701-.58.984-.144.284-.304.671-.268 1.118a2 2 0 0 0 .8 1.445c.36.268.774.337 1.091.366.315.03.708.03 1.142.03h4.312c.434 0 .827 0 1.142-.03.317-.03.73-.098 1.09-.366a2 2 0 0 0 .801-1.445c.036-.447-.124-.834-.268-1.118-.142-.283-.35-.616-.58-.984l-.023-.036-.756-1.21-.026-.04c-.428-.686-.786-1.259-1.11-1.686-.331-.435-.716-.844-1.244-1.07" clipRule="evenodd" /> <path d="M8 14a5 5 0 1 1 8 0m2.233 3.493a9 9 0 1 0-12.466 0M12 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2" opacity=".28" />
    </svg>
  );
}
