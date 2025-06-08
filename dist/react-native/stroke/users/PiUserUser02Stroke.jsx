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
 * Piuseruser02stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuseruser02stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user user02 icon",
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
      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7.27466 21H16.7253C18.5339 21 20 19.5339 20 17.7253C20 15.4389 17.7163 13.8564 15.5755 14.6592L13.6502 15.3812C12.5862 15.7802 11.4138 15.7802 10.3498 15.3812L8.42447 14.6592C6.28366 13.8564 4 15.4389 4 17.7253C4 19.5339 5.46612 21 7.27466 21Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuseruser02stroke;
