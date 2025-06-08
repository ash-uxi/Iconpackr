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
 * Piplaybigcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplaybigcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "play big icon",
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
      d="M5 11.723c0-3.818 0-5.728.798-6.793a4 4 0 0 1 2.917-1.593c1.328-.095 2.934.938 6.146 3.002l.431.278c2.787 1.791 4.18 2.687 4.662 3.826a4 4 0 0 1 0 3.114c-.481 1.14-1.875 2.035-4.662 3.827l-.431.277c-3.212 2.065-4.818 3.097-6.146 3.002a4 4 0 0 1-2.917-1.592C5 18.005 5 16.096 5 12.278z"
      opacity={0.28}
    />
    <path d="M5 11.723c0-3.818 0-5.728.798-6.793a4 4 0 0 1 2.917-1.593c1.328-.095 2.934.938 6.146 3.002l.431.278c2.787 1.791 4.18 2.687 4.662 3.826a4 4 0 0 1 0 3.114c-.481 1.14-1.875 2.035-4.662 3.827l-.431.277c-3.212 2.065-4.818 3.097-6.146 3.002a4 4 0 0 1-2.917-1.592C5 18.005 5 16.096 5 12.278z" />
  </Svg>
);

export default Piplaybigcontrast;
