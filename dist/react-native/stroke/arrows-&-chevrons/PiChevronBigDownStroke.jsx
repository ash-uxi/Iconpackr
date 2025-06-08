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
 * Pichevronbigdownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronbigdownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron big down icon",
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
      d="M6 9C7.57701 11.1808 9.42293 13.1364 11.4899 14.8172C11.7897 15.0609 12.2103 15.0609 12.5101 14.8172C14.5771 13.1364 16.423 11.1808 18 9"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pichevronbigdownstroke;
