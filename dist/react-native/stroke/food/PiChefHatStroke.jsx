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
 * Pichefhatstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichefhatstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chef hat icon",
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
      d="M10 17H14M10 17V14M10 17H7M14 17V12M14 17H17M17 17V18.6C17 19.4401 17 19.8601 16.8365 20.181C16.6927 20.4633 16.4632 20.6927 16.181 20.8365C15.8601 21 15.4401 21 14.6 21H9.4C8.55992 21 8.13988 21 7.81901 20.8365C7.53677 20.6927 7.3073 20.4633 7.16349 20.181C7 19.8601 7 19.4401 7 18.6V17M17 17V14.9726C19.25 14.7238 21 12.8163 21 10.5C21 8.01474 18.9853 6.00002 16.5 6.00002C16.2912 6.00002 16.0857 6.01424 15.8845 6.04177C15.4551 4.29539 13.8788 3 12 3C10.1212 3 8.54485 4.29539 8.11551 6.04177C7.91427 6.01424 7.7088 6.00002 7.5 6.00002C5.01472 6.00002 3 8.01474 3 10.5C3 12.8163 4.75002 14.7238 7 14.9726V17"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pichefhatstroke;
