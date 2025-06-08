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
 * Piclockoffduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclockoffduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "clock off icon",
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
      d="M11.9995 8.00012V12.0001M18.4696 5.53003C16.8138 3.87423 14.5263 2.8501 11.9996 2.8501C6.9462 2.8501 2.84961 6.94669 2.84961 12.0001C2.84961 14.5268 3.87374 16.8143 5.52955 18.4701M9.00472 20.6487C9.94308 20.9736 10.9507 21.1501 11.9996 21.1501C17.053 21.1501 21.1496 17.0535 21.1496 12.0001C21.1496 10.9512 20.9731 9.94357 20.6482 9.00521M14.788 14.8655L14.9995 15.0001"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path d="M22 2L2 22" stroke={color || "#000"} strokeWidth="2" fill="none" />
  </Svg>
);

export default Piclockoffduostroke;
