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
 * Piwineglassbrokenduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwineglassbrokenduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "wine glass broken icon",
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
      d="M12 13C15.6 13 18 10.264 18 6.88889C18 5.15448 17.5131 3.42007 16.6983 2H7.30171C6.48685 3.42007 6 5.15448 6 6.88889C6 10.264 8.4 13 12 13Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 13V22M12 22H16M12 22L8 22M11.1301 8.00643C10.4993 7.39077 10.1335 6.59986 9.99209 5.73768L11.7062 4.58252C11.491 3.56657 11.0629 2.72834 10.493 2"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piwineglassbrokenduostroke;
