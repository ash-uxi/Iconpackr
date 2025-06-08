import React from 'react';

/**
 * PiAppleWatchStroke icon from the stroke style in devices category.
 */
interface PiAppleWatchStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAppleWatchStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'apple-watch icon',
  ...props
}: PiAppleWatchStrokeProps): JSX.Element {
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
      <path d="M18 11V13C18 14.8638 18 15.7956 17.6955 16.5307C17.3567 17.3486 16.7584 18.0263 16 18.4641M18 11C18 9.13623 18 8.20435 17.6955 7.46927C17.3567 6.65135 16.7584 5.9737 16 5.53588M18 11H19V10H18M16 5.53588L15.494 3.74686C15.317 3.12081 15.2285 2.80779 15.0465 2.57539C14.886 2.37027 14.6747 2.2105 14.4337 2.11181C14.1605 2 13.8352 2 13.1846 2H10.8154C10.1648 2 9.83947 2 9.56634 2.11181C9.32526 2.2105 9.11404 2.37027 8.95347 2.57539C8.77154 2.80779 8.68302 3.12081 8.50596 3.74686L8 5.53588M16 5.53588C15.8496 5.44906 15.6929 5.37167 15.5307 5.30448C14.7956 5 13.8638 5 12 5C10.1362 5 9.20435 5 8.46927 5.30448C8.30707 5.37167 8.15039 5.44906 8 5.53588M8 5.53588C7.24163 5.9737 6.64327 6.65135 6.30448 7.46927C6 8.20435 6 9.13623 6 11V13C6 14.8638 6 15.7956 6.30448 16.5307C6.64327 17.3486 7.24163 18.0263 8 18.4641M8 18.4641L8.50596 20.2531C8.68302 20.8792 8.77154 21.1922 8.95347 21.4246C9.11404 21.6297 9.32526 21.7895 9.56634 21.8882C9.83947 22 10.1648 22 10.8154 22H13.1846C13.8352 22 14.1605 22 14.4337 21.8882C14.6747 21.7895 14.886 21.6297 15.0465 21.4246C15.2285 21.1922 15.317 20.8792 15.494 20.2531L16 18.4641M8 18.4641C8.15039 18.5509 8.30707 18.6283 8.46927 18.6955C9.20435 19 10.1362 19 12 19C13.8638 19 14.7956 19 15.5307 18.6955C15.6929 18.6283 15.8496 18.5509 16 18.4641" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
