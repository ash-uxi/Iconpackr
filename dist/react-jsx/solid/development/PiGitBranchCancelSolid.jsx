import React from 'react';

/**
 * PiGitBranchCancelSolid icon from the solid style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGitBranchCancelSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'git-branch-cancel icon',
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
      <path d="M16.7071 15.7929C16.3166 15.4024 15.6834 15.4024 15.2929 15.7929C14.9024 16.1834 14.9024 16.8166 15.2929 17.2071L16.9858 18.9L15.2929 20.5929C14.9024 20.9834 14.9024 21.6166 15.2929 22.0071C15.6834 22.3976 16.3166 22.3976 16.7071 22.0071L18.4 20.3142L20.0929 22.0071C20.4834 22.3976 21.1166 22.3976 21.5071 22.0071C21.8976 21.6166 21.8976 20.9834 21.5071 20.5929L19.8142 18.9L21.5071 17.2071C21.8976 16.8166 21.8976 16.1834 21.5071 15.7929C21.1166 15.4024 20.4834 15.4024 20.0929 15.7929L18.4 17.4858L16.7071 15.7929Z" fill="currentColor" stroke="none"/>
  <path d="M18 1.5C16.1223 1.5 14.5468 2.79378 14.1163 4.53851C11.209 4.79307 8.65837 6.29174 7 8.49903V3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3V14.626C3.27477 15.0701 2 16.6362 2 18.5C2 20.7091 3.79086 22.5 6 22.5C8.20914 22.5 10 20.7091 10 18.5C10 16.6362 8.72523 15.0701 7 14.626V14.5C7 10.3729 10.1252 6.97575 14.1381 6.54589C14.5979 8.24778 16.1527 9.5 18 9.5C20.2091 9.5 22 7.70914 22 5.5C22 3.29086 20.2091 1.5 18 1.5Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
