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
 * Piacdefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piacdefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac default icon",
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
    <path d="M18 12h-2m6 4v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6z" />
    <path
      fill={color}
      d="M20 8H4a2 2 0 0 0-2 2v6h20v-6a2 2 0 0 0-2-2"
      opacity={0.28}
    />
  </Svg>
);

export default Piacdefaultcontrast;
