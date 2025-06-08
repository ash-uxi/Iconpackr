import React from 'react';

/**
 * PiAppleIntelligenceContrast icon from the contrast style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAppleIntelligenceContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'apple-intelligence icon',
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
      <path d="M12.004 19.546c.817-.468 1.624-.966 2.46-1.4q.254-.13.514-.246c.86-.385 1.753-.705 2.628-1.052m-5.602 2.698s-2.141 3.05-4.393 1.964-1.21-4.662-1.21-4.662m5.603 2.698c-.901-.516-1.784-1.078-2.72-1.528-.933-.45-1.92-.789-2.883-1.17m5.603 2.698s2.124 3.049 4.38 1.97c2.255-1.077 1.222-4.668 1.222-4.668m-11.205 0c-.143-.931-.257-1.872-.44-2.797q-.056-.279-.127-.555c-.236-.912-.542-1.81-.816-2.71M6.4 16.847s-3.719.226-4.274-2.217 2.89-3.846 2.89-3.846m0 0S2.53 8.013 4.085 6.064s4.81-.14 4.81-.14m-3.876 4.861c.702-.762 1.445-1.497 2.092-2.308.646-.81 1.198-1.699 1.785-2.553m0 0s.609-3.671 3.109-3.671 3.109 3.67 3.109 3.67m-6.218 0c1.034.074 2.072.197 3.109.197s2.075-.123 3.109-.196m0 0c.586.853 1.137 1.74 1.782 2.549.647.812 1.391 1.548 2.095 2.312m-3.877-4.861s3.244-1.817 4.803.135c1.56 1.953-.926 4.726-.926 4.726m0 0s3.44 1.413 2.883 3.85c-.558 2.437-4.267 2.213-4.267 2.213m1.384-6.063c-.302.992-.653 1.977-.883 2.988-.231 1.01-.342 2.05-.5 3.075"/>
  <path fill="currentColor" d="M12.004 2.253c-2.5 0-3.11 3.67-3.11 3.67s-3.256-1.808-4.81.14c-1.555 1.95.934 4.722.934 4.722s-3.447 1.403-2.891 3.846c.555 2.443 4.274 2.217 4.274 2.217s-1.042 3.577 1.21 4.662 4.393-1.964 4.393-1.964 2.124 3.049 4.38 1.97c2.255-1.077 1.222-4.668 1.222-4.668s3.709.224 4.267-2.213-2.883-3.85-2.883-3.85 2.486-2.773.926-4.726c-1.559-1.952-4.803-.135-4.803-.135s-.609-3.671-3.109-3.671" opacity=".28"/>
    </svg>
  );
}
