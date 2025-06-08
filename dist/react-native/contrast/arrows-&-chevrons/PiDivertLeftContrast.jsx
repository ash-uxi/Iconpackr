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
 * Pidivertleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidivertleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "divert left icon",
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
    <path d="m22 9-6.879 6.879a3 3 0 0 1-4.242 0l-4.947-4.947m0 0A24 24 0 0 1 7.9 9.169L9 8.29a20.8 20.8 0 0 0-5.347-.202.625.625 0 0 0-.566.566A20.8 20.8 0 0 0 3.29 14l.88-1.1a24 24 0 0 1 1.763-1.968" />
    <path
      fill={color}
      d="M3.653 8.087A20.8 20.8 0 0 1 9 8.29l-1.1.88A24 24 0 0 0 4.17 12.9L3.288 14a20.8 20.8 0 0 1-.202-5.347.625.625 0 0 1 .566-.566"
      opacity={0.28}
    />
  </Svg>
);

export default Pidivertleftcontrast;
