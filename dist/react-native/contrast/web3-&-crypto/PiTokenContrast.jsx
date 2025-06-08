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
 * Pitokencontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitokencontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "token icon",
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
    <path d="M10.303 9.697c.594-.594.89-.891 1.233-1.002a1.5 1.5 0 0 1 .927 0c.343.111.64.408 1.234 1.002l.606.606c.594.594.89.891 1.002 1.233a1.5 1.5 0 0 1 0 .928c-.111.342-.408.639-1.002 1.233l-.606.606c-.594.594-.891.891-1.234 1.002a1.5 1.5 0 0 1-.927 0c-.342-.111-.64-.408-1.233-1.002l-.606-.606c-.594-.594-.891-.891-1.002-1.233a1.5 1.5 0 0 1 0-.928c.11-.342.408-.639 1.002-1.233z" />
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
    <path
      fill={color}
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pitokencontrast;
