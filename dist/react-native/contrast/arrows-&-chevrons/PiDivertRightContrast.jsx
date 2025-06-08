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
 * Pidivertrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidivertrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "divert right icon",
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
    <path d="m2 9 6.879 6.879a3 3 0 0 0 4.242 0l4.947-4.947m0 0A24 24 0 0 0 16.1 9.169L15 8.29a20.8 20.8 0 0 1 5.347-.202.625.625 0 0 1 .566.566A20.8 20.8 0 0 1 20.71 14l-.88-1.1a24 24 0 0 0-1.763-1.968" />
    <path
      fill={color}
      d="M20.347 8.087A20.8 20.8 0 0 0 15 8.29l1.1.88a24 24 0 0 1 3.73 3.731l.881 1.1c.298-1.779.366-3.576.202-5.347a.624.624 0 0 0-.566-.566"
      opacity={0.28}
    />
  </Svg>
);

export default Pidivertrightcontrast;
