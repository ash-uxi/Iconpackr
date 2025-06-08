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
 * Piprioritylowstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piprioritylowstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "priority low icon",
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
      d="M5.19971 9.75C5.32615 10.0107 5.51125 10.2482 5.75084 10.4452C7.39132 11.7937 9.25488 13.0164 11.3068 14.0903C11.5102 14.1968 11.7552 14.25 12.0001 14.25C12.2451 14.25 12.4901 14.1968 12.6935 14.0903C14.7454 13.0164 16.609 11.7937 18.2495 10.4452C18.4891 10.2482 18.6741 10.0107 18.8006 9.75"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piprioritylowstroke;
