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
 * Piarrowbigturnrightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigturnrightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big turn right icon",
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
      d="M20.7589 11.3066C18.8592 8.93491 16.6551 6.81482 14.2012 5C14.3554 6.33024 14.4656 7.6643 14.5316 9C6.99658 9 2.99658 12 2.99658 19C5.99658 15 9.99658 15 14.5316 15C14.4656 16.3357 14.3554 17.6698 14.2012 19C16.6551 17.1852 18.8592 15.0651 20.7589 12.6934C20.9218 12.4899 21.0033 12.245 21.0033 12C21.0033 11.755 20.9218 11.5101 20.7589 11.3066Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowbigturnrightstroke;
