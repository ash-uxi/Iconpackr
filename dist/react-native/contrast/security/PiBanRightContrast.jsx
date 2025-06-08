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
 * Pibanrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibanrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ban right icon",
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
    <path d="M18.47 5.53A9.15 9.15 0 0 0 5.53 18.47M18.47 5.53A9.15 9.15 0 1 1 5.53 18.47M18.47 5.53 5.53 18.47" />
    <path
      fill={color}
      d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pibanrightcontrast;
