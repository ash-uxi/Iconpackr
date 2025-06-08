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
 * Pipindefaultduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipindefaultduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pin default icon",
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
      d="M12 15.6924V20.9997"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7.05793 4.93181C6.82958 3.9846 7.49421 3.0551 8.46436 2.96485C10.83 2.74479 13.17 2.74479 15.5356 2.96485C16.5058 3.0551 17.1704 3.9846 16.9421 4.93181L15.9555 9.02442C15.7725 9.78342 16.176 10.4309 16.8064 10.8115C18.1679 11.6335 19 13.108 19 14.6984C19 14.9495 18.8154 15.1623 18.5669 15.1978C16.3892 15.5089 14.201 15.6926 12 15.6926C9.79899 15.6926 7.61078 15.5089 5.43315 15.1978C5.18461 15.1623 5 14.9495 5 14.6984C5 13.108 5.83214 11.6335 7.19363 10.8115C7.82399 10.4309 8.22751 9.78342 8.04454 9.02442L7.05793 4.93181Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipindefaultduostroke;
