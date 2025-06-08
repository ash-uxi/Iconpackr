import React from 'react';

/**
 * PiUserSearchDuoSolid icon from the duo-solid style in users category.
 */
interface PiUserSearchDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserSearchDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-search icon',
  ...props
}: PiUserSearchDuoSolidProps): JSX.Element {
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
      <path d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z" fill={color || "currentColor"} /> <path d="M17 13C14.7909 13 13 14.7909 13 17C13 19.2091 14.7909 21 17 21C17.7414 21 18.4364 20.7977 19.0318 20.446L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L20.446 19.0318C20.7977 18.4364 21 17.7414 21 17C21 14.7909 19.2091 13 17 13ZM15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17C19 17.5526 18.7772 18.0512 18.4142 18.4142C18.0512 18.7772 17.5526 19 17 19C15.8954 19 15 18.1046 15 17Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" /> <path d="M8 14C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H13.6822C12.0655 20.9251 11 19.087 11 17C11 15.9071 11.2922 14.8825 11.8027 14H8Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
