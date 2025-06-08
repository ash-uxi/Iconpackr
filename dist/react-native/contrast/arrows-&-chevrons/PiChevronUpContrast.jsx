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
 * Pichevronupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron up icon",
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
    <path d="M11.702 10.106A20.4 20.4 0 0 0 8 14a53 53 0 0 1 8 0 20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0" />
    <path
      fill={color}
      d="M11.702 10.106A20.4 20.4 0 0 0 8 14l4-.304L16 14a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pichevronupcontrast;
