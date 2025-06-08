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
 * Piarrowleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left icon",
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
    <path
      fill={color}
      d="M4.21 12.594A30.2 30.2 0 0 0 9.83 18l-.3-6 .3-6a30.2 30.2 0 0 0-5.62 5.406.95.95 0 0 0 0 1.188"
      opacity={0.28}
    />
    <path d="m9.53 12 .3 6a30.2 30.2 0 0 1-5.62-5.406.95.95 0 0 1 0-1.188A30.2 30.2 0 0 1 9.83 6zm0 0H20" />
  </Svg>
);

export default Piarrowleftcontrast;
