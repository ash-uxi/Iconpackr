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
 * Pimusicquavernoteremovecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicquavernoteremovecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music quaver note remove icon",
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
    <path d="M4 7h6m4 11.998V3.643a1.64 1.64 0 0 1 2.374-1.468A6.56 6.56 0 0 1 20 8.046 7.07 7.07 0 0 1 18.819 12M14 18.998a3 3 0 1 1-3-3.002 3 3 0 0 1 3 3.002" />
    <path
      fill={color}
      d="M8 18.998a3 3 0 1 1 6.002-.001A3 3 0 0 1 8 18.998"
      opacity={0.28}
    />
  </Svg>
);

export default Pimusicquavernoteremovecontrast;
