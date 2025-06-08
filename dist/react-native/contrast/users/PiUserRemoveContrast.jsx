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
 * Piuserremovecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserremovecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user remove icon",
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
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4 19a4 4 0 0 1 4-4h4a3 3 0 0 0 3 3h4.874q.125.481.126 1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" />
    </g>
    <path d="M20 19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h3m4 0h6m-5-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </Svg>
);

export default Piuserremovecontrast;
