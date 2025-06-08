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
 * Piwifiexclamationmarkduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwifiexclamationmarkduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "wifi exclamation mark icon",
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
      d="M12 19.5H12.01M12 4V16"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M15 4.7808C17.976 5.34536 20.6603 6.73415 22.8064 8.70075M1.19336 8.70075C3.33951 6.7341 6.02387 5.34529 9 4.78076M4.73193 12.243C5.94653 11.173 7.39908 10.3668 9 9.91405M15 9.91406C16.6009 10.3669 18.0534 11.173 19.268 12.243M15 15.3028C15.2442 15.444 15.4775 15.602 15.6983 15.7751M8.25537 15.8116C8.48985 15.6241 8.73869 15.4538 9 15.3026"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piwifiexclamationmarkduostroke;
