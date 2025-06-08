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
 * Piswaphalfarrowhorizontalcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaphalfarrowhorizontalcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap halfarrow horizontal icon",
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
      <path d="M17.113 6a20.2 20.2 0 0 1 3.747 3.604c.093.116.14.256.14.396h-3.656q0-.89-.066-1.777zM6.887 18a20.2 20.2 0 0 1-3.747-3.604A.63.63 0 0 1 3 14h3.656q0 .89.066 1.777z" />
    </g>
    <path d="M17.344 10H21c0-.14-.047-.28-.14-.396A20.2 20.2 0 0 0 17.113 6l.165 2.223q.066.888.066 1.777m0 0H6m.656 4H3c0 .14.047.28.14.396A20.2 20.2 0 0 0 6.887 18l-.165-2.223A24 24 0 0 1 6.656 14m0 0H18" />
  </Svg>
);

export default Piswaphalfarrowhorizontalcontrast;
