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
 * Pimappinusercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimappinusercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "map pin user icon",
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
      d="M12 21.5c1.948 0 7.79-4.111 7.79-10.278C19.79 5.056 14.922 3 12 3c-2.92 0-7.79 2.056-7.79 8.222C4.21 17.39 10.054 21.5 12 21.5"
      opacity={0.28}
    />
    <path d="M17.14 18.096a2.88 2.88 0 0 0-2.25-1.078H9.111c-.91 0-1.722.42-2.252 1.078m10.28 0c1.473-1.753 2.65-4.107 2.65-6.874C19.79 5.056 14.922 3 12 3c-2.92 0-7.79 2.056-7.79 8.222 0 2.767 1.177 5.12 2.65 6.874m10.28 0C15.332 20.251 13.075 21.5 12 21.5s-3.33-1.25-5.14-3.404m8.062-7.306a2.921 2.921 0 1 1-5.843 0 2.921 2.921 0 0 1 5.842 0" />
  </Svg>
);

export default Pimappinusercontrast;
