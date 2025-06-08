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
 * Piloginleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piloginleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "log in left icon",
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
    <path d="M11 4.528A6 6 0 0 1 21 9v6a6 6 0 0 1-10 4.472M13.45 12H3m10.45 0c0-1-.162-2.006-.261-3a15 15 0 0 1 2.654 2.556.704.704 0 0 1 0 .888A15 15 0 0 1 13.188 15c.1-.994.262-2 .262-3" />
    <path
      fill={color}
      d="M15.843 11.556A15 15 0 0 0 13.188 9c.1.994.262 2 .262 3s-.162 2.006-.261 3a15 15 0 0 0 2.654-2.556.704.704 0 0 0 0-.888"
      opacity={0.28}
    />
  </Svg>
);

export default Piloginleftcontrast;
