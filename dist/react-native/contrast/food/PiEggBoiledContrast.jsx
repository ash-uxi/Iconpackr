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
 * Pieggboiledcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieggboiledcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "egg boiled icon",
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
    <path d="M15.5 14a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
    <path d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611" />
    <path
      fill={color}
      fillRule="evenodd"
      d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611M12 9.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
      clipRule="evenodd"
      opacity={0.28}
    />
  </Svg>
);

export default Pieggboiledcontrast;
