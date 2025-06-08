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
 * Piidcardhorizontalduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piidcardhorizontalduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "id card horizontal icon",
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
      d="M13 10H18M15 14H18M9.667 14H7.333C6.597 14 6 14.597 6 15.333C6 15.701 6.298 16 6.667 16H10.333C10.5099 16 10.6796 15.9297 10.8046 15.8046C10.9297 15.6796 11 15.5099 11 15.333C11 14.597 10.403 14 9.667 14ZM9.5 10C9.5 10.2652 9.39464 10.5196 9.20711 10.7071C9.01957 10.8946 8.76522 11 8.5 11C8.23478 11 7.98043 10.8946 7.79289 10.7071C7.60536 10.5196 7.5 10.2652 7.5 10C7.5 9.73478 7.60536 9.48043 7.79289 9.29289C7.98043 9.10536 8.23478 9 8.5 9C8.76522 9 9.01957 9.10536 9.20711 9.29289C9.39464 9.48043 9.5 9.73478 9.5 10Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21 17V7C21 5.34315 19.6569 4 18 4L6 4C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piidcardhorizontalduostroke;
