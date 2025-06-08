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
 * Pimousescrolldownduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousescrolldownduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse scroll down icon",
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
      fill={color || "#000"}
      d="M12 2a8 8 0 0 0-8 8v4a8 8 0 1 0 16 0v-4a8 8 0 0 0-8-8"
      opacity={0.28}
    />{" "}
    <path d="M14 9.5a10 10 0 0 1-1.704 1.77.47.47 0 0 1-.592 0A10 10 0 0 1 10 9.5" />
  </Svg>
);

export default Pimousescrolldownduosolid;
