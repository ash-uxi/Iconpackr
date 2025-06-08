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
 * Pipowercircleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipowercircleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "power circle icon",
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
    <path d="M12 7v5m4-3A5 5 0 1 1 8 9" />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15S22.15 17.605 22.15 12 17.606 1.85 12 1.85"
      clipRule="evenodd"
      opacity={0.28}
    />
  </Svg>
);

export default Pipowercircleduosolid;
