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
 * Piacdefaultsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piacdefaultsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac default icon",
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
      d="M1 10C1 8.34315 2.34315 7 4 7H20C21.6569 7 23 8.34315 23 10V16C23 16.5523 22.5523 17 22 17H2C1.44772 17 1 16.5523 1 16V10ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H16Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piacdefaultsolid;
