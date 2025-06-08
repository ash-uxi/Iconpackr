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
 * Pimappin02solid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimappin02solid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "map pin02 icon",
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
      d="M12 2C8.68629 2 6 4.68629 6 8C6 10.973 8.16229 13.441 11 13.917V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13.917C15.8377 13.441 18 10.973 18 8C18 4.68629 15.3137 2 12 2Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pimappin02solid;
