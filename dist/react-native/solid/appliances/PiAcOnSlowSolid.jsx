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
 * Piaconslowsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piaconslowsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac on slow icon",
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
      d="M13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V16Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M18 16C18 15.4477 17.5523 15 17 15C16.4477 15 16 15.4477 16 16V18.8C16 19.3523 16.4477 19.8 17 19.8C17.5523 19.8 18 19.3523 18 18.8V16Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M4 3C2.34315 3 1 4.34315 1 6V12C1 12.5523 1.44772 13 2 13H22C22.5523 13 23 12.5523 23 12V6C23 4.34315 21.6569 3 20 3H4ZM15 8C15 7.44772 15.4477 7 16 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H16C15.4477 9 15 8.55228 15 8Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M8 16C8 15.4477 7.55228 15 7 15C6.44772 15 6 15.4477 6 16V18.8C6 19.3523 6.44772 19.8 7 19.8C7.55228 19.8 8 19.3523 8 18.8V16Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piaconslowsolid;
