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
 * Piwineglassbrokencontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwineglassbrokencontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "wine glass broken icon",
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
    <path d="M12 13c3.6 0 6-2.736 6-6.111A10 10 0 0 0 16.698 2h-6.205M12 13c-3.6 0-6-2.736-6-6.111C6 5.154 6.487 3.42 7.302 2h3.191M12 13v9m0 0h4m-4 0H8m3.13-13.994c-.63-.615-.997-1.406-1.138-2.268l1.714-1.155A6.2 6.2 0 0 0 10.493 2" />
    <path
      fill={color}
      d="M12 13c3.6 0 6-2.736 6-6.111A10 10 0 0 0 16.698 2H7.302A10 10 0 0 0 6 6.889C6 10.264 8.4 13 12 13"
      opacity={0.28}
    />
  </Svg>
);

export default Piwineglassbrokencontrast;
