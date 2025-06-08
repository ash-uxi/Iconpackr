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
 * Pimagneticcompasscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimagneticcompasscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "magnetic compass icon",
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
      d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"
      opacity={0.28}
    />
    <path d="M9.587 15.498a6.33 6.33 0 0 0 5.91-5.91 1.02 1.02 0 0 0-1.085-1.086 6.33 6.33 0 0 0-5.91 5.91c-.04.616.47 1.125 1.085 1.086" />
  </Svg>
);

export default Pimagneticcompasscontrast;
