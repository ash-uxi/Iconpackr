import React from 'react';

/**
 * PiPhotoImagePlusContrast icon from the contrast style in media category.
 */
interface PiPhotoImagePlusContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhotoImagePlusContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'photo-image-plus icon',
  ...props
}: PiPhotoImagePlusContrastProps): JSX.Element {
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
      <path d="M19 22v-3m0 0v-3m0 3h-3m3 0h3m0-5.648V11l-.001-1m-9.464 11H10c-.756 0-1.41 0-1.983-.01M22 10H21c-1.393 0-2.09 0-2.676.06A11.5 11.5 0 0 0 8.06 20.324c-.02.2-.034.415-.043.665M22 10c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534M7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
  <path fill="currentColor" d="M2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534C8.59 21 9.244 21 10 21h3.388v-.523a3 3 0 0 1 7.865-6.457H22L22 13v-2l-.001-1c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73" opacity=".28"/>
    </svg>
  );
}
