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
 * Pivisionprocontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivisionprocontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "vision pro icon",
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
      d="M12 6.5c4.088 0 9.909.142 9.977 5.5.032 2.524-1.113 5.172-3.898 5.475-2.575.28-3.685-2.383-6.08-2.381-2.364.001-3.473 2.616-6 2.39-2.822-.255-4.008-2.932-3.976-5.484.068-5.358 5.89-5.5 9.977-5.5"
      opacity={0.28}
    />
    <path d="M12 6.5c4.088 0 9.909.142 9.977 5.5.032 2.524-1.113 5.172-3.898 5.475-2.575.28-3.685-2.383-6.08-2.381-2.364.001-3.473 2.616-6 2.39-2.822-.255-4.008-2.932-3.976-5.484.068-5.358 5.89-5.5 9.977-5.5" />
  </Svg>
);

export default Pivisionprocontrast;
