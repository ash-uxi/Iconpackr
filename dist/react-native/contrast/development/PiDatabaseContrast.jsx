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
 * Pidatabasecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidatabasecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "database icon",
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
      fill={color}
      d="M20 5.7c0 1.491-3.582 2.7-8 2.7S4 7.191 4 5.7V18.13C4 19.716 7.582 21 12 21s8-1.284 8-2.869z"
      opacity={0.28}
    />
    <path d="M20 5.7V12m0-6.3c0 1.491-3.582 2.7-8 2.7S4 7.191 4 5.7m16 0C20 4.209 16.418 3 12 3S4 4.209 4 5.7M20 12v6.131C20 19.716 16.418 21 12 21s-8-1.284-8-2.869V12m16 0c0 1.491-3.582 2.7-8 2.7S4 13.491 4 12m0 0V5.7M16 11h.01M16 17h.01" />
  </Svg>
);

export default Pidatabasecontrast;
