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
 * Pitagstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitagstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "tag icon",
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
      d="M8.5105 8.51245H8.5305M15.7725 5.87298L18.194 8.29448C19.5101 9.6106 20.1682 10.2687 20.5277 10.9743C21.2543 12.4003 21.2543 14.0881 20.5277 15.5142C20.1682 16.2198 19.5101 16.8779 18.194 18.194C16.8779 19.5101 16.2198 20.1682 15.5142 20.5277C14.0881 21.2543 12.4003 21.2543 10.9743 20.5277C10.2687 20.1682 9.6106 19.5101 8.29448 18.194L5.87297 15.7725C4.75976 14.6593 4.20315 14.1026 3.81725 13.45C3.47524 12.8716 3.23281 12.2399 3.1001 11.5811C2.95035 10.8379 2.99172 10.0518 3.07447 8.47968L3.11768 7.65876C3.19793 6.13396 3.23805 5.37156 3.55489 4.78079C3.83397 4.26041 4.26041 3.83397 4.78079 3.55489C5.37156 3.23805 6.13396 3.19793 7.65876 3.11768L8.47968 3.07447C10.0518 2.99172 10.8379 2.95035 11.5811 3.1001C12.2399 3.23281 12.8716 3.47524 13.45 3.81725C14.1026 4.20315 14.6593 4.75976 15.7725 5.87298ZM9.4895 8.48779C9.4895 9.04008 9.04179 9.48779 8.4895 9.48779C7.93722 9.48779 7.4895 9.04008 7.4895 8.48779C7.4895 7.93551 7.93722 7.48779 8.4895 7.48779C9.04179 7.48779 9.4895 7.93551 9.4895 8.48779Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitagstroke;
