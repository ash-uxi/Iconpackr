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
 * Piuserarrowupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserarrowupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user arrow up icon",
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
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M13.314 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h11v-1.188a3 3 0 0 1-2.686-4.337z" />
    </g>
    <path d="M22 16.812a15 15 0 0 0-2.556-2.655A.7.7 0 0 0 19 14m-3 2.811a15 15 0 0 1 2.556-2.654A.7.7 0 0 1 19 14m0 0v7m-4 0H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4.43M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </Svg>
);

export default Piuserarrowupcontrast;
