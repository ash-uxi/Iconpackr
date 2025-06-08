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
 * Pibanleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibanleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ban left icon",
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
      d="M12 1.85c5.606 0 10.15 4.544 10.15 10.15 0 5.605-4.544 10.15-10.15 10.15-5.605 0-10.15-4.544-10.15-10.15C1.85 6.395 6.396 1.85 12 1.85"
      opacity={0.28}
    />{" "}
    <path d="M18.47 18.47 5.53 5.53" />
  </Svg>
);

export default Pibanleftduosolid;
