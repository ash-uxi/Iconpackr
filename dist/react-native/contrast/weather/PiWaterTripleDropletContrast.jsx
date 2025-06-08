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
 * Piwatertripledropletcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwatertripledropletcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "water triple droplet icon",
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
      d="M12 2.056c6.262 5.703 2.752 9.333 0 9.333s-6.262-3.63 0-9.333m-6 10.21C12.262 17.97 8.752 21.6 6 21.6s-6.262-3.63 0-9.333m12 0c6.262 5.703 2.752 9.333 0 9.333s-6.262-3.63 0-9.333"
      opacity={0.28}
    />
    <path d="M12 2.056c6.262 5.703 2.752 9.333 0 9.333s-6.262-3.63 0-9.333m-6 10.21C12.262 17.97 8.752 21.6 6 21.6s-6.262-3.63 0-9.333m12 0c6.262 5.703 2.752 9.333 0 9.333s-6.262-3.63 0-9.333" />
  </Svg>
);

export default Piwatertripledropletcontrast;
