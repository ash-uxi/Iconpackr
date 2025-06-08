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
 * Piexchange02stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexchange02stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "exchange02 icon",
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
      d="M16.0309 5C14.5767 6.03704 13.2706 7.24852 12.1449 8.60379C12.0483 8.72005 12 8.86002 12 9M16.0309 13C14.5767 11.963 13.2706 10.7515 12.1449 9.39621C12.0483 9.27995 12 9.13998 12 9M12 9L20 9M7.96911 11C9.42331 12.037 10.7294 13.2485 11.8551 14.6038C11.9517 14.72 12 14.86 12 15M7.96911 19C9.42331 17.963 10.7294 16.7515 11.8551 15.3962C11.9517 15.28 12 15.14 12 15M12 15H4"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piexchange02stroke;
