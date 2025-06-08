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
 * Piglobecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piglobecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "globe icon",
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
      d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3"
      opacity={0.28}
    />
    <path d="M2.85 12h18.3m-18.3 0A9.15 9.15 0 0 0 12 21.15M2.85 12A9.15 9.15 0 0 1 12 2.85M21.15 12A9.15 9.15 0 0 1 12 21.15M21.15 12A9.15 9.15 0 0 0 12 2.85m0 0A14 14 0 0 1 15.66 12 14 14 0 0 1 12 21.15m0-18.3A14 14 0 0 0 8.34 12 14 14 0 0 0 12 21.15" />
  </Svg>
);

export default Piglobecontrast;
