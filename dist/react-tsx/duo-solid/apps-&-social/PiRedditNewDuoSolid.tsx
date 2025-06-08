import React from 'react';

/**
 * PiRedditNewDuoSolid icon from the duo-solid style in apps-&-social category.
 */
interface PiRedditNewDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRedditNewDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'reddit-new icon',
  ...props
}: PiRedditNewDuoSolidProps): JSX.Element {
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
      <path d="M14.427 17.006c-1.44 1.438-3.554 1.438-4.853 0zM16.384 12.441c.524 0 .975.522 1.007 1.201.031.68-.428.956-.954.956-.525 0-.917-.247-.948-.926-.031-.68.37-1.23.895-1.23" /> <path fill={color || "currentColor"} d="M17.533 1c-.913 0-1.703.52-2.092 1.281-2.556.127-4.456 2.29-4.523 4.682-2.01.162-3.86.768-5.348 1.705a3.427 3.427 0 1 0-3.538 5.803c.031 2.153 1.255 4.012 3.041 5.3 1.812 1.306 4.264 2.083 6.927 2.083s5.115-.777 6.927-2.083c1.786-1.288 3.01-3.147 3.041-5.299a3.426 3.426 0 1 0-3.538-5.804c-1.529-.962-3.438-1.576-5.511-1.717.066-1.319 1.097-2.498 2.465-2.656A2.349 2.349 0 1 0 17.534 1" opacity=".28" /> <path d="M7.617 12.441c-.525 0-.976.522-1.008 1.201-.03.68.429.956.954.956s.917-.247.948-.926c.032-.68-.37-1.23-.894-1.23" />
    </svg>
  );
}
