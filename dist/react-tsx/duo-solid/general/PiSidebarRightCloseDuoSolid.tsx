import React from 'react';

/**
 * PiSidebarRightCloseDuoSolid icon from the duo-solid style in general category.
 */
interface PiSidebarRightCloseDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarRightCloseDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-right-close icon',
  ...props
}: PiSidebarRightCloseDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M13.3 2.298a1 1 0 0 0-.3.714V20.99a1 1 0 0 0 1.02 1c1.535-.03 2.7-.132 3.704-.643a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.322v-2.087c0-1.363 0-2.447-.071-3.322-.073-.895-.227-1.659-.583-2.358a6 6 0 0 0-2.622-2.622c-1.004-.512-2.17-.614-3.705-.643a1 1 0 0 0-.72.286" /> <path d="M14 20.989C13.423 21 12.764 21 12 21h-2c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 17.2 2 15.8 2 13v-2c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 3.545C5.8 3 7.2 3 10 3h2c.764 0 1.423 0 2 .011" opacity=".28" /> <path fill={color || "currentColor"} d="M7.088 8.191a1 1 0 1 0-1.176 1.618c.882.64 1.685 1.376 2.392 2.191-.707.815-1.51 1.55-2.392 2.191a1 1 0 1 0 1.176 1.618A16.3 16.3 0 0 0 10.2 12.85c.4-.497.4-1.203 0-1.7A16.3 16.3 0 0 0 7.088 8.19" />
    </svg>
  );
}
