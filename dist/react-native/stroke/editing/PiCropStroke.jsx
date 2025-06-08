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
 * Picropstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picropstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crop icon",
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
      d="M6 18H14.8C15.9201 18 16.4802 18 16.908 17.782C17.2843 17.5903 17.5903 17.2843 17.782 16.908C18 16.4802 18 15.9201 18 14.8V6M6 18H2M6 18V22M6 18V9.2C6 8.0799 6 7.51984 6.21799 7.09202C6.40973 6.71569 6.71569 6.40973 7.09202 6.21799C7.51984 6 8.0799 6 9.2 6H18M18 2V6M18 6H22"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picropstroke;
