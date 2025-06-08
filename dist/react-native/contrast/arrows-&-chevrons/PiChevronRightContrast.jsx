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
 * Pichevronrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron right icon",
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
    <path d="M13.894 11.702A20.4 20.4 0 0 0 10 8a53 53 0 0 1 0 8 20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596" />
    <path
      fill={color}
      d="M13.894 11.702A20.4 20.4 0 0 0 10 8l.304 4L10 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596"
      opacity={0.28}
    />
  </Svg>
);

export default Pichevronrightcontrast;
