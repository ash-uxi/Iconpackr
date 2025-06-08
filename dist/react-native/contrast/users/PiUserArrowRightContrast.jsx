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
 * Piuserarrowrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserarrowrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user arrow right icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4 19a4 4 0 0 1 4-4h4.912v.846A3 3 0 0 0 12 18c0 .845.35 1.608.912 2.154V21H6a2 2 0 0 1-2-2" />
    </g>
    <path d="M12.4 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4.4m6.789 6a15 15 0 0 0 2.654-2.556A.7.7 0 0 0 22 18m-2.811-3c.986.74 1.878 1.599 2.654 2.556.105.13.157.287.157.444m0 0h-7m1-11a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </Svg>
);

export default Piuserarrowrightcontrast;
