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
 * Pireminderclockwiseduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pireminderclockwiseduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "reminder clockwise icon",
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
      d="M14 15L12.2929 13.2929C12.1054 13.1054 12 12.851 12 12.5858V9"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18.9297 3.39575C19.2577 4.64987 19.4216 5.9407 19.4177 7.23595C19.4167 7.57418 19.1337 7.68355 18.8581 7.74456L18.8559 7.74504M15.1968 8.09315C16.4269 8.12758 17.6558 8.01049 18.8559 7.74504M18.8559 7.74504C17.6562 5.84153 15.6649 4.4526 13.2648 4.09506C8.89475 3.44405 4.82437 6.45893 4.17336 10.829C3.52235 15.199 6.53722 19.2694 10.9073 19.9204C15.1201 20.548 19.0544 17.7688 19.9153 13.6529"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pireminderclockwiseduostroke;
