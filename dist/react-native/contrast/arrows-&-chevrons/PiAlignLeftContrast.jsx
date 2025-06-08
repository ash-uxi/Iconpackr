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
 * Pialignleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align left icon",
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
    <path d="M11.866 12H20m-8.134 0q0 2.044.165 4.083a20.8 20.8 0 0 1-3.886-3.678.64.64 0 0 1 0-.81 20.8 20.8 0 0 1 3.886-3.678A51 51 0 0 0 11.866 12M4 19V5" />
    <path
      fill={color}
      d="M8.145 12.404a20.8 20.8 0 0 0 3.886 3.68 50.6 50.6 0 0 1 0-8.167 20.8 20.8 0 0 0-3.886 3.678.64.64 0 0 0 0 .81"
      opacity={0.28}
    />
  </Svg>
);

export default Pialignleftcontrast;
