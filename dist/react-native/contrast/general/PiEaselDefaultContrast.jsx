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
 * Pieaseldefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieaseldefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "easel default icon",
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
      d="M12 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v2.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.803.41 1.84.434 3.816.436a5926 5926 0 0 0 8.03 0c1.957-.002 2.987-.029 3.786-.436a4 4 0 0 0 1.748-1.748C22 14.96 22 13.84 22 11.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 3 17.84 3 15.6 3z"
      opacity={0.28}
    />
    <path d="M12 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v2.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.803.41 1.84.434 3.816.436m4-15h3.6c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C22 6.04 22 7.16 22 9.4v2.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.799.407-1.829.434-3.785.436M12 3V2M6 22l2-4m10 4-1.97-4M12 21v-2.998M16.03 18l-4.03.002M8 18l4 .002" />
  </Svg>
);

export default Pieaseldefaultcontrast;
