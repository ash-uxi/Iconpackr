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
 * Pimappinareacontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimappinareacontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "map pin area icon",
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
      d="M12 18c1.685 0 6.737-3.556 6.737-8.889S14.527 2 12.001 2C9.474 2 5.264 3.778 5.264 9.111S10.316 18 12 18"
      opacity={0.28}
    />
    <path d="M3.518 17C2.556 17.502 2 18.096 2 18.732 2 20.537 6.477 22 12 22s10-1.463 10-3.268c0-.636-.556-1.23-1.518-1.732m-5.956-8.263a2.526 2.526 0 1 1-5.052 0 2.526 2.526 0 0 1 5.052 0m4.21.374C18.737 14.444 13.685 18 12 18s-6.737-3.556-6.737-8.889S9.473 2 12 2c2.526 0 6.737 1.778 6.737 7.111" />
  </Svg>
);

export default Pimappinareacontrast;
