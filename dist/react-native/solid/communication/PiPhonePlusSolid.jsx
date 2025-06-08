import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Piphoneplussolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piphoneplussolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "phone plus icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <path
      d="M17.9999 4C17.9999 3.44772 17.5522 3 16.9999 3C16.4476 3 15.9999 3.44772 15.9999 4V6H13.9999C13.4476 6 12.9999 6.44772 12.9999 7C12.9999 7.55228 13.4476 8 13.9999 8H15.9999L15.9999 10C15.9999 10.5523 16.4476 11 16.9999 11C17.5522 11 17.9999 10.5523 17.9999 10L17.9999 8H19.9999C20.5522 8 20.9999 7.55228 20.9999 7C20.9999 6.44772 20.5522 6 19.9999 6H17.9999V4Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M6.74569 13.2229C7.17822 12.9016 7.64066 12.5488 8.04598 12.1732C9.77685 10.5692 10.4902 8.14596 9.90462 5.85989C9.70772 5.09122 9.40106 4.20911 8.85271 3.4823C8.27918 2.7221 7.44187 2.13777 6.27746 2.03275C5.83702 1.99302 5.2517 1.97614 4.73589 2.06049C2.841 2.37036 1.85124 4.21145 2.04177 5.82633C2.37804 8.67659 3.23236 11.2561 4.54604 13.4822C5.94468 15.8523 7.85573 17.8073 10.1872 19.2543C12.486 20.681 15.1788 21.605 18.1701 21.9581C19.7857 22.1488 21.6259 21.158 21.9355 19.2635C22.0255 18.7127 22.0115 18.1168 21.9525 17.6186C21.8063 16.3839 21.121 15.537 20.2918 14.9792C19.4954 14.4435 18.5453 14.1561 17.7479 13.9733C15.6954 13.5026 13.5426 14.067 11.9849 15.4841C11.4541 15.9669 10.9612 16.5509 10.522 17.0794C9.03299 16.0333 7.76364 14.7374 6.74569 13.2229Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piphoneplussolid;
