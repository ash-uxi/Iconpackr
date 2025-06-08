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
 * Pichevronbigupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronbigupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron big up icon",
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
      d="M12.51 9.183A30.6 30.6 0 0 1 18 15a72 72 0 0 0-12 0 30.6 30.6 0 0 1 5.49-5.817.8.8 0 0 1 1.02 0"
      opacity={0.28}
    />
    <path d="M12.51 9.183A30.6 30.6 0 0 1 18 15a72 72 0 0 0-12 0 30.6 30.6 0 0 1 5.49-5.817.8.8 0 0 1 1.02 0" />
  </Svg>
);

export default Pichevronbigupcontrast;
