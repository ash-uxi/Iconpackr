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
 * Piuserarrowleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserarrowleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user arrow left icon",
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
      <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 15a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7.395q-.292-.327-.568-.668a3.7 3.7 0 0 1 0-4.664q.276-.341.568-.668z" />
    </g>
    <path d="M12.4 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4.4m5.01 5.573a12.9 12.9 0 0 1-2.275-2.191.6.6 0 0 1-.135-.38m2.41-2.572c-.846.634-1.61 1.37-2.275 2.191a.6.6 0 0 0-.135.38m0 0h6M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </Svg>
);

export default Piuserarrowleftcontrast;
