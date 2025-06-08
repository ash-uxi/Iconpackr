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
 * Piluggagetrolleyduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piluggagetrolleyduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "luggage trolley icon",
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
      d="M21 12.3V8.7C21 7.57991 21 7.01984 20.782 6.59202C20.5903 6.21569 20.2843 5.90973 19.908 5.71799C19.4802 5.5 18.9201 5.5 17.8 5.5H12.2C11.0799 5.5 10.5198 5.5 10.092 5.71799C9.71569 5.90973 9.40973 6.21569 9.21799 6.59202C9 7.01984 9 7.57989 9 8.7V12.3C9 13.4201 9 13.9802 9.21799 14.408C9.40973 14.7843 9.71569 15.0903 10.092 15.282C10.5198 15.5 11.0799 15.5 12.2 15.5H17.8C18.9201 15.5 19.4802 15.5 19.908 15.282C20.2843 15.0903 20.5903 14.7843 20.782 14.408C21 13.9802 21 13.4201 21 12.3Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M21 19H8M3 3C4.10457 3 5 3.89543 5 5V16M5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22C6.65685 22 8 20.6569 8 19M5 16C6.65685 16 8 17.3431 8 19M15 9V5.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piluggagetrolleyduostroke;
