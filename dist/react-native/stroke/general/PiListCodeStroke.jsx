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
 * Pilistcodestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistcodestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list code icon",
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
      d="M4 12H10M4 18H10M4 6H20M18.7143 17.2719C19.5496 16.665 20.2979 15.9535 20.9395 15.1564C21.0202 15.0562 21.0202 14.9161 20.9395 14.8159C20.2979 14.0188 19.5496 13.3073 18.7143 12.7004M15.2857 12.7004C14.4504 13.3073 13.7021 14.0188 13.0605 14.8159C12.9798 14.9161 12.9798 15.0562 13.0605 15.1564C13.7021 15.9535 14.4504 16.665 15.2857 17.2719"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistcodestroke;
