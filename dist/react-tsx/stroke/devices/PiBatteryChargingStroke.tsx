import React from 'react';

/**
 * PiBatteryChargingStroke icon from the stroke style in devices category.
 */
interface PiBatteryChargingStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBatteryChargingStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'battery-charging icon',
  ...props
}: PiBatteryChargingStrokeProps): JSX.Element {
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
      <path d="M20 14C20.465 14 20.6975 14 20.8882 13.9489C21.4059 13.8102 21.8102 13.4059 21.9489 12.8882C22 12.6975 22 12.465 22 12C22 11.535 22 11.3025 21.9489 11.1118C21.8102 10.5941 21.4059 10.1898 20.8882 10.0511C20.6975 10 20.465 10 20 10M16 6.02687C16.6545 6.06035 17.1229 6.13556 17.5307 6.30448C18.5108 6.71046 19.2895 7.48915 19.6955 8.46927C20 9.20435 20 10.1362 20 12C20 13.8638 20 14.7957 19.6955 15.5307C19.2895 16.5108 18.5108 17.2895 17.5307 17.6955C16.9407 17.9399 16.2238 17.9881 15 17.9977M7 6.00234C5.77617 6.01185 5.05932 6.06008 4.46927 6.30448C3.48915 6.71046 2.71046 7.48915 2.30448 8.46927C2 9.20435 2 10.1362 2 12C2 13.8638 2 14.7957 2.30448 15.5307C2.71046 16.5108 3.48915 17.2895 4.46927 17.6955C4.87709 17.8644 5.34549 17.9397 6 17.9731M12 6L8.16873 10.9807C7.80175 11.4577 7.61827 11.6963 7.62738 11.88C7.63529 12.0395 7.7189 12.1856 7.85238 12.2732C8.0062 12.3742 8.30482 12.3369 8.90206 12.2622L13.0979 11.7378C13.6952 11.6631 13.9938 11.6258 14.1476 11.7268C14.2811 11.8144 14.3647 11.9605 14.3726 12.12C14.3817 12.3037 14.1982 12.5423 13.8313 13.0193L10 18" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
