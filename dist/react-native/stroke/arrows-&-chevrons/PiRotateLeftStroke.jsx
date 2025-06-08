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
 * Pirotateleftstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pirotateleftstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "rotate left icon",
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
      d="M6.21458 2.66992C5.70537 3.86202 5.35304 5.11461 5.16601 6.39629C5.11717 6.73098 5.38094 6.88085 5.64457 6.9818C5.67589 6.9938 5.70724 7.00568 5.73864 7.01746M5.73864 7.01746C7.20439 5.17853 9.46355 4 11.998 4C16.4162 4 19.998 7.58172 19.998 12C19.998 16.4183 16.4162 20 11.998 20C8.27029 20 5.13809 17.4505 4.25 14M5.73864 7.01746C6.85852 7.43772 8.02543 7.72281 9.21458 7.86607"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pirotateleftstroke;
