import React from 'react';

/**
 * PiBumbleContrast icon from the contrast style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBumbleContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bumble icon',
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
      <path fill="currentColor" d="M15.432 3H8.734c-.673 0-1.01 0-1.31.098a2 2 0 0 0-.72.416c-.236.212-.404.503-.741 1.086l-3.349 5.8c-.336.583-.504.874-.57 1.184a2 2 0 0 0 0 .832c.066.31.234.601.57 1.184l3.349 5.8c.337.583.505.874.74 1.086a2 2 0 0 0 .72.416c.302.098.638.098 1.311.098h6.698c.673 0 1.01 0 1.31-.098a2 2 0 0 0 .72-.416c.236-.212.404-.503.74-1.086l3.35-5.8c.336-.583.504-.874.57-1.184a2 2 0 0 0 0-.832c-.066-.31-.234-.601-.57-1.184l-3.35-5.8c-.336-.583-.504-.874-.74-1.086a2 2 0 0 0-.72-.416C16.442 3 16.105 3 15.432 3" opacity=".28"/>
  <path d="M7.083 12h10m-7 4.045h4M9.083 8h6M2.614 13.6l3.349 5.8c.337.583.505.874.74 1.086a2 2 0 0 0 .72.416c.302.098.638.098 1.311.098h6.698c.673 0 1.01 0 1.31-.098a2 2 0 0 0 .72-.416c.236-.212.404-.503.74-1.086l3.35-5.8c.336-.583.504-.874.57-1.184a2 2 0 0 0 0-.832c-.066-.31-.234-.601-.57-1.184l-3.35-5.8c-.336-.583-.504-.874-.74-1.086a2 2 0 0 0-.72-.416C16.442 3 16.105 3 15.432 3H8.734c-.673 0-1.01 0-1.31.098a2 2 0 0 0-.72.416c-.236.212-.404.503-.741 1.086l-3.349 5.8c-.336.583-.504.874-.57 1.184a2 2 0 0 0 0 .832c.066.31.234.601.57 1.184"/>
    </svg>
  );
}
