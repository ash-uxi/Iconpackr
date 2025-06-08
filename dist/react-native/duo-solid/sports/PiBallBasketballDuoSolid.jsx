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
 * Piballbasketballduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piballbasketballduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ball basketball icon",
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
      d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15c5.605 0 10.15-4.544 10.15-10.15S17.605 1.85 12 1.85"
      opacity={0.28}
    />{" "}
    <path d="M5.518 5.542A9.12 9.12 0 0 1 8.188 12m0 0a9.12 9.12 0 0 1-2.67 6.458M8.188 12H2.85m5.337 0H12m6.48-6.458A9.15 9.15 0 0 0 15.813 12m0 0a9.15 9.15 0 0 0 2.669 6.458M15.812 12H12m3.813 0h5.337M12 12V2.85M12 12v9.15" />
  </Svg>
);

export default Piballbasketballduosolid;
