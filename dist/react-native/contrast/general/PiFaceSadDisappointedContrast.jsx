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
 * Pifacesaddisappointedcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacesaddisappointedcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face sad disappointed icon",
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
      d="M2.85 12a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0"
      opacity={0.28}
    />
    <path d="m8.386 10.005 1.228-.86m4.771 0 1.229.86M8.429 16A4.99 4.99 0 0 1 12 14.5c1.4 0 2.664.574 3.572 1.5M12 21.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3" />
  </Svg>
);

export default Pifacesaddisappointedcontrast;
