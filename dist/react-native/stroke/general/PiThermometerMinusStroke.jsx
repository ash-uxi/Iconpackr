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
 * Pithermometerminusstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pithermometerminusstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "thermometer minus icon",
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
      d="M15 17C14.4477 17 14 17.4477 14 18C14 18.5523 14.4477 19 15 19C15.5523 19 16 18.5523 16 18C16 17.4477 15.5523 17 15 17ZM15 17V10"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5V15.3542C11.3776 16.0593 11 16.9856 11 18C11 20.2091 12.7909 22 15 22C17.2091 22 19 20.2091 19 18C19 16.9856 18.6224 16.0593 18 15.3542V5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path d="M2 7H7.99999" stroke={color} strokeWidth="2" fill="none" />
  </Svg>
);

export default Pithermometerminusstroke;
