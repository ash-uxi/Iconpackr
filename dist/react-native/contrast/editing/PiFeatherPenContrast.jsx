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
 * Pifeatherpencontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifeatherpencontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "feather pen icon",
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
    <path d="M2.5 21.5c0-1.226.18-2.965.68-4.891m0 0C4.716 10.689 9.266 3 20.842 3c.121 3.06-1.021 7.291-4.994 9.11M3.18 16.61c11.219 1.72 12.784-1.89 12.668-4.499m0 0c-1.22.559-2.706.89-4.506.89" />
    <path
      fill={color}
      d="M20.842 3C9.266 3 4.716 10.688 3.18 16.609c11.219 1.72 12.784-1.89 12.668-4.499 3.973-1.819 5.115-6.05 4.994-9.11"
      opacity={0.28}
    />
  </Svg>
);

export default Pifeatherpencontrast;
