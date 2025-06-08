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
 * Pimusicbeamnotecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicbeamnotecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music beam note icon",
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
    <g fill={color} opacity={0.28}>
      <path d="m9.269 6.002 10.683-4.197A1.5 1.5 0 0 1 22 3.2V6.5L8 12V7.863a2 2 0 0 1 1.269-1.861M19 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </g>
    <path d="M8 12V7.863a2 2 0 0 1 1.269-1.861l10.683-4.197A1.5 1.5 0 0 1 22 3.2V6.5M8 12v7m0-7 14-5.5M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0M22 6.5V16m0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </Svg>
);

export default Pimusicbeamnotecontrast;
