import React from 'react';

/**
 * PiMusicQuaverNoteAiSolid icon from the solid style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMusicQuaverNoteAiSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'music-quaver-note-ai icon',
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
      <path d="M15 3.64315C15 3.16578 15.5014 2.85721 15.9261 3.0697C17.8098 4.01207 19 5.93865 19 8.04648C19 9.27617 18.652 10.4567 17.9892 11.4417C17.6809 11.8999 17.8024 12.5213 18.2606 12.8297C18.7188 13.138 19.3402 13.0165 19.6485 12.5583C20.545 11.226 21 9.65268 21 8.04648C21 5.18172 19.3824 2.56249 16.821 1.28105C15.0647 0.40242 13 1.68071 13 3.64315V15.5319C12.4117 15.1914 11.7287 14.9966 11 14.9966C8.79032 14.9966 7 16.7887 7 18.9983C7 21.2078 8.79032 23 11 23C13.2097 23 15 21.2078 15 18.9983V3.64315Z" fill="currentColor" stroke="none"/>
  <path d="M2 11.0001C2 10.4478 2.44772 10.0001 3 10.0001H3.001C3.55329 10.0001 4.001 10.4478 4.001 11.0001C4.001 11.5524 3.55329 12.0001 3.001 12.0001H3C2.44772 12.0001 2 11.5524 2 11.0001Z" fill="currentColor" stroke="none"/>
  <path d="M7 3.00012C7.41067 3.00012 7.77959 3.2512 7.93026 3.63323C8.22316 4.37589 8.49616 4.82397 8.82591 5.15611C9.15515 5.48775 9.607 5.77016 10.3669 6.06986C10.7489 6.22053 11 6.58945 11 7.00012C11 7.41079 10.7489 7.77971 10.3669 7.93039C9.607 8.23009 9.15515 8.5125 8.82591 8.84413C8.49617 9.17627 8.22317 9.62436 7.93026 10.367C7.77959 10.749 7.41067 11.0001 7 11.0001C6.58933 11.0001 6.22041 10.749 6.06974 10.367C5.77683 9.62436 5.50383 9.17627 5.17409 8.84413C4.84485 8.5125 4.393 8.23008 3.63311 7.93039C3.25108 7.77971 3 7.41079 3 7.00012C3 6.58945 3.25108 6.22053 3.63311 6.06986C4.393 5.77016 4.84485 5.48775 5.17409 5.15611C5.50384 4.82397 5.77684 4.37589 6.06974 3.63323C6.22041 3.2512 6.58933 3.00012 7 3.00012Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
