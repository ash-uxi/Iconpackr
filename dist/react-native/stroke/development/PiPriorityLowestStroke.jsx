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
 * Pipriorityloweststroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipriorityloweststroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "priority lowest icon",
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
      d="M5.19971 12.625C5.32615 12.8857 5.51125 13.1232 5.75084 13.3202C7.39132 14.6687 9.25488 15.8914 11.3068 16.9653C11.5102 17.0718 11.7552 17.125 12.0001 17.125C12.2451 17.125 12.4901 17.0718 12.6935 16.9653C14.7454 15.8914 16.609 14.6687 18.2495 13.3202C18.4891 13.1232 18.6741 12.8857 18.8006 12.625M5.19971 6.875C5.32615 7.13571 5.51125 7.37325 5.75084 7.5702C7.39132 8.91872 9.25488 10.1414 11.3068 11.2153C11.5102 11.3218 11.7552 11.375 12.0001 11.375C12.2451 11.375 12.4901 11.3218 12.6935 11.2153C14.7454 10.1414 16.609 8.91872 18.2495 7.5702C18.4891 7.37325 18.6741 7.13571 18.8006 6.875"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipriorityloweststroke;
