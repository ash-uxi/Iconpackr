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
 * Pithreedotsmenuverticalcircleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pithreedotsmenuverticalcircleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "three dots menu vertical circle icon",
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
    <path d="M12.005 7.994v.01m0 3.99v.01m0 3.99v.01" />{" "}
    <path
      fill={color || "#000"}
      d="M22.15 12.002c0 5.605-4.544 10.15-10.15 10.15S1.85 17.607 1.85 12.002 6.394 1.852 12 1.852s10.15 4.544 10.15 10.15"
      opacity={0.28}
    />
  </Svg>
);

export default Pithreedotsmenuverticalcircleduosolid;
