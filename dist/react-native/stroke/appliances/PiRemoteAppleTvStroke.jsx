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
 * Piremoteappletvstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piremoteappletvstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "remote apple tv icon",
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
      d="M14 15V18M14 12V12.01M10 12V12.01M10 15V15.01M10 18V18.01"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M15 2H9C7.34315 2 6 3.34315 6 5V19C6 20.6569 7.34315 22 9 22H15C16.6569 22 18 20.6569 18 19V5C18 3.34315 16.6569 2 15 2Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piremoteappletvstroke;
