import React from 'react';

/**
 * PiShieldAiContrast icon from the contrast style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiShieldAiContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'shield-ai icon',
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
      <path fill="currentColor" d="m5.496 4.314 5.388-1.946a3 3 0 0 1 2.038 0l5.465 1.974a3 3 0 0 1 1.972 2.591l.227 2.95A11 11 0 0 1 14.858 20.4l-1.49.806a3 3 0 0 1-2.914-.032l-1.52-.867A11 11 0 0 1 3.39 10.33l.127-3.31a3 3 0 0 1 1.98-2.705" opacity=".28"/>
  <path d="M8.5 15h.01m2.374-12.632L5.496 4.314A3 3 0 0 0 3.517 7.02l-.127 3.309a11 11 0 0 0 5.543 9.978l1.52.867a3 3 0 0 0 2.916.032l1.488-.806a11 11 0 0 0 5.729-10.516l-.227-2.95a3 3 0 0 0-1.973-2.592l-5.465-1.974a3 3 0 0 0-2.037 0M12.5 8c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.384 3 3 .637-1.616 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3"/>
    </svg>
  );
}
