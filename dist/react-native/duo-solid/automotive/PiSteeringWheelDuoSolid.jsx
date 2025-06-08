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
 * Pisteeringwheelduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisteeringwheelduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "steering wheel icon",
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
      fillRule="evenodd"
      d="M19.886 9.936A16.9 16.9 0 0 0 12 8c-2.846 0-5.53.7-7.887 1.936a8.2 8.2 0 0 0-.2 3.09Q4.204 13 4.5 13a6.5 6.5 0 0 1 6.474 7.086 8.2 8.2 0 0 0 2.052 0 6.5 6.5 0 0 1 7.06-7.06 8.2 8.2 0 0 0-.2-3.09M12 10.9a1.1 1.1 0 0 1 1.1 1.1v.01a1.1 1.1 0 0 1-2.2 0V12a1.1 1.1 0 0 1 1.1-1.1"
      clipRule="evenodd"
    />{" "}
    <path
      d="M21.15 12a9.15 9.15 0 1 0-18.3 0 9.15 9.15 0 0 0 18.3 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pisteeringwheelduosolid;
