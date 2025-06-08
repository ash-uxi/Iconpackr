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
 * Pimousebuttonrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousebuttonrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse button right icon",
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
    <path d="M12 3a7 7 0 0 0-7 7v4a7 7 0 1 0 14 0v-4a7 7 0 0 0-7-7m0 0v4.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 11 14.08 11 15.2 11H19" />
    <path
      fill={color}
      d="M19 10a7 7 0 1 0-14 0v4a7 7 0 1 0 14 0z"
      opacity={0.28}
    />
  </Svg>
);

export default Pimousebuttonrightcontrast;
