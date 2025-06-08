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
 * Piswaphalfarrowverticalcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaphalfarrowverticalcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap halfarrow vertical icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M18 17.113a20.2 20.2 0 0 1-3.604 3.747A.63.63 0 0 1 14 21v-3.656q.89 0 1.777-.066zM6 6.887A20.2 20.2 0 0 1 9.604 3.14.63.63 0 0 1 10 3v3.656q-.89 0-1.777.066z" />
    </g>
    <path d="M14 17.344V21c.14 0 .28-.047.396-.14A20.2 20.2 0 0 0 18 17.113l-2.223.165q-.888.066-1.777.066m0 0V6m-4 .656V3c-.14 0-.28.047-.396.14A20.2 20.2 0 0 0 6 6.887l2.223-.165A24 24 0 0 1 10 6.656m0 0V18" />
  </Svg>
);

export default Piswaphalfarrowverticalcontrast;
