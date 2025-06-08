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
 * Pichevronleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron left icon",
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
    <path d="M10.106 11.702A20.4 20.4 0 0 1 14 8a53 53 0 0 0 0 8 20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596" />
    <path
      fill={color}
      d="M10.106 11.702A20.4 20.4 0 0 1 14 8l-.304 4L14 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596"
      opacity={0.28}
    />
  </Svg>
);

export default Pichevronleftcontrast;
