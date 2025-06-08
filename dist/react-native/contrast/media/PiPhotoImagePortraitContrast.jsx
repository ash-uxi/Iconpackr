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
 * Piphotoimageportraitcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piphotoimageportraitcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "photo image portrait icon",
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
    <path d="M20 10.04c-1.31.049-2.258.159-3.1.406A11 11 0 0 0 9.447 17.9c-.304 1.032-.4 2.224-.431 4.052M20 10.039V10c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 2 14.8 2 12 2s-4.2 0-5.27.545A5 5 0 0 0 4.545 4.73C4 5.8 4 7.2 4 10v4c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.597.304 1.296.439 2.285.498M20 10.039V14c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 22 14.8 22 12 22c-1.238 0-2.202 0-2.985-.047M9.5 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
    <path
      fill={color}
      d="M4 10v4c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C7.8 22 9.2 22 12 22s4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 18.2 20 16.8 20 14v-4c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 2 14.8 2 12 2s-4.2 0-5.27.545A5 5 0 0 0 4.545 4.73C4 5.8 4 7.2 4 10"
      opacity={0.28}
    />
  </Svg>
);

export default Piphotoimageportraitcontrast;
