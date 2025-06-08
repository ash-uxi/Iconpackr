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
 * Pimousebuttonleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousebuttonleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse button left icon",
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
    <path d="M12 3a7 7 0 0 1 7 7v4a7 7 0 1 1-14 0v-4a7 7 0 0 1 7-7m0 0v4.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C10.48 11 9.92 11 8.8 11H5" />
    <path
      fill={color}
      d="M5 10a7 7 0 0 1 14 0v4a7 7 0 1 1-14 0z"
      opacity={0.28}
    />
  </Svg>
);

export default Pimousebuttonleftcontrast;
