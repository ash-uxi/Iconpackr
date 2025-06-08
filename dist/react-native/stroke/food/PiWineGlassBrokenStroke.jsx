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
 * Piwineglassbrokenstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwineglassbrokenstroke = ({
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
      d="M12 13C15.6 13 18 10.264 18 6.88889C18 5.15448 17.5131 3.42007 16.6983 2H10.493M12 13C8.4 13 6 10.264 6 6.88889C6 5.15448 6.48685 3.42007 7.30171 2H10.493M12 13V22M12 22H16M12 22L8 22M11.1301 8.00643C10.4993 7.39077 10.1335 6.59986 9.99209 5.73768L11.7062 4.58252C11.491 3.56657 11.0629 2.72834 10.493 2"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piwineglassbrokenstroke;
