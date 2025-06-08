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
 * Piballbasketballcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piballbasketballcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ball basketball icon",
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
    <path d="M21.15 12A9.15 9.15 0 0 1 12 21.15M21.15 12A9.15 9.15 0 0 0 12 2.85M21.15 12H2.85M12 21.15A9.15 9.15 0 0 1 2.85 12M12 21.15V2.85M2.85 12A9.15 9.15 0 0 1 12 2.85M5.518 5.542A9.12 9.12 0 0 1 8.188 12a9.12 9.12 0 0 1-2.67 6.458M18.481 5.542a9.15 9.15 0 0 0 0 12.916" />
  </Svg>
);

export default Piballbasketballcontrast;
