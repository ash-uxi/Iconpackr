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
 * Pifacesmileupsidedowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacesmileupsidedowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face smile upside down icon",
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
    <path d="M15 14.496v-1m-6 1v-1m6.57-3.5a4.99 4.99 0 0 0-3.57-1.5 4.99 4.99 0 0 0-3.57 1.5M12 21.346a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3" />
    <path
      fill={color}
      d="M2.85 12.196a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pifacesmileupsidedowncontrast;
