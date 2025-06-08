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
 * Piuturndownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturndownstroke = ({
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
      d="M3.91675 15.9691C4.9754 17.4233 6.21211 18.7294 7.59561 19.8551C7.7143 19.9517 7.85719 20 8.00008 20M12.0834 15.9691C11.0248 17.4233 9.78805 18.7294 8.40455 19.8551C8.28587 19.9517 8.14297 20 8.00008 20M8.00008 20L8.00008 9C8.00008 6.23858 10.2387 4 13.0001 4C15.7615 4 18.0001 6.23858 18.0001 9V12"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuturndownstroke;
