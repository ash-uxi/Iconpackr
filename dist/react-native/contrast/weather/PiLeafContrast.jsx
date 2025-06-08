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
 * Pileafcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pileafcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "leaf icon",
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
    <path d="M13 10.5s-8 3.5-8 10" />
    <path
      fill={color}
      d="M5.34 18.212C.34 2.712 15.5 7 19 3c3.082 11.5-1.16 19.712-13.66 15.212"
      opacity={0.28}
    />
    <path d="M5.34 18.212C.34 2.712 15.5 7 19 3c3.082 11.5-1.16 19.712-13.66 15.212" />
  </Svg>
);

export default Pileafcontrast;
