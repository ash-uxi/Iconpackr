import React from 'react';

/**
 * PiRedditOldContrast icon from the contrast style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiRedditOldContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'reddit-old icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M21.438 3.752a1.399 1.399 0 1 1-2.797 0 1.399 1.399 0 0 1 2.797 0M20.999 14.645c0 3.866-4.03 7-9 7s-9-3.134-9-7c0-.758.155-1.487.44-2.17q-.051.003-.104.002a2.166 2.166 0 1 1 2.116-2.634c1.64-1.353 3.967-2.198 6.548-2.198s4.91.845 6.55 2.2a2.167 2.167 0 1 1 2.009 2.63c.286.683.44 1.412.44 2.17"/>
  </g>
  <path d="m11.999 7.645 1.529-3.901a1.5 1.5 0 0 1 1.647-.885l3.49.634M12 7.645c-2.58 0-4.907.845-6.549 2.198M12 7.645c2.582 0 4.91.845 6.55 2.2m-2.96 7.198c-.717.682-2.058 1.14-3.593 1.14s-2.875-.458-3.592-1.14m7.095-3.898h.01m-7.01 0h.01m10.156-9.652q-.023.126-.024.26a1.399 1.399 0 1 0 .024-.26M5.451 9.843a2.167 2.167 0 1 0-2.011 2.632m2.01-2.632c-.9.743-1.594 1.638-2.01 2.632m0 0a5.6 5.6 0 0 0-.441 2.17c0 3.866 4.03 7 9 7s9-3.134 9-7c0-.758-.155-1.487-.441-2.17m-2.009-2.63a2.167 2.167 0 1 1 2.009 2.63m-2.009-2.63c.9.742 1.593 1.637 2.009 2.63m-11.559.67a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
    </svg>
  );
}
