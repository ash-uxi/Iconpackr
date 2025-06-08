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
 * Pifacewink02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacewink02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face wink02 icon",
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
      d="M2.85 12a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0"
      opacity={0.28}
    />
    <path d="M9 10v1m6.5-.5h-1m-6.07 4A4.99 4.99 0 0 0 12 16a4.99 4.99 0 0 0 3.57-1.5M12 21.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3" />
  </Svg>
);

export default Pifacewink02contrast;
