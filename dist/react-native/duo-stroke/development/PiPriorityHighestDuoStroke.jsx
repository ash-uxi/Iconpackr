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
 * Pipriorityhighestduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipriorityhighestduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "priority highest icon",
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
      d="M5.19971 11.375C5.32615 11.1143 5.51125 10.8768 5.75084 10.6798C7.39132 9.33128 9.25488 8.10858 11.3068 7.03472C11.5102 6.92824 11.7552 6.875 12.0001 6.875C12.2451 6.875 12.4901 6.92824 12.6935 7.03472C14.7454 8.10858 16.609 9.33128 18.2495 10.6798C18.4891 10.8768 18.6741 11.1143 18.8006 11.375"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5.19971 17.125C5.32615 16.8643 5.51125 16.6268 5.75084 16.4298C7.39132 15.0813 9.25488 13.8586 11.3068 12.7847C11.5102 12.6782 11.7552 12.625 12.0001 12.625C12.2451 12.625 12.4901 12.6782 12.6935 12.7847C14.7454 13.8586 16.609 15.0813 18.2495 16.4298C18.4891 16.6268 18.6741 16.8643 18.8006 17.125"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pipriorityhighestduostroke;
