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
 * Piuturndownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturndownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn down icon",
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
      d="M3.91675 15.9688C4.9754 17.423 6.21211 18.729 7.59561 19.8548C7.7143 19.9514 7.85719 19.9996 8.00008 19.9996C8.14297 19.9996 8.28587 19.9514 8.40455 19.8548C9.78805 18.729 11.0248 17.423 12.0834 15.9688"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 20V9C8 6.23858 10.2386 4 13 4C15.7614 4 18 6.23858 18 9V12"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piuturndownduostroke;
