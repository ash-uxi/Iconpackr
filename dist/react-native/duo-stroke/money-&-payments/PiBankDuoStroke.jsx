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
 * Pibankduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibankduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bank icon",
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
      d="M2 21H22M22 10H2V9L10.08 2.94C10.7685 2.42361 11.1128 2.16542 11.4909 2.06589C11.8246 1.97804 12.1754 1.97804 12.5091 2.06589C12.8872 2.16542 13.2315 2.42361 13.92 2.94L22 9V10Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 13V18M9 13L9 18M15 13L15 18M20 13V18"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pibankduostroke;
