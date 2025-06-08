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
 * Pimedicinepillcapsulecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicinepillcapsulecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medicine pill capsule icon",
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
      d="M4.222 19.778a5.25 5.25 0 0 1 0-7.427l8.129-8.13a5.252 5.252 0 0 1 7.427 7.428l-8.129 8.13a5.25 5.25 0 0 1-7.427 0"
      opacity={0.28}
    />
    <path d="M8.286 8.287 4.222 12.35a5.252 5.252 0 0 0 7.427 7.427l4.065-4.064M8.286 8.287l4.065-4.065a5.252 5.252 0 0 1 7.427 7.427l-4.064 4.065M8.286 8.287l7.428 7.427M13.408 8.47l1.768-1.767a1.5 1.5 0 0 1 1.707-.294" />
  </Svg>
);

export default Pimedicinepillcapsulecontrast;
