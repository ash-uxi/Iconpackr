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
 * Picampfirecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picampfirecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "camp fire icon",
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
      d="M11 17c.593 0 1.34-1.514 1.616-2.809.94.57 2.384 2.09 2.384 3.84 0 1.484-1 2.967-3 2.967s-3-1.483-3-2.966c0-.885.369-1.711.855-2.386C10.324 16.314 11 17 11 17"
      opacity={0.28}
    />
    <path d="M2 21 12 5.167m0 0L14 2m-2 3.167L22 21M12 5.167 10 2m1 15c.593 0 1.34-1.514 1.616-2.808.94.57 2.384 2.09 2.384 3.84C15 19.516 14 21 12 21s-3-1.483-3-2.967c0-.884.369-1.71.855-2.385C10.324 16.314 11 17 11 17" />
  </Svg>
);

export default Picampfirecontrast;
