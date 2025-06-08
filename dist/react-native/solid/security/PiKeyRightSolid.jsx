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
 * Pikeyrightsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyrightsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key right icon",
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
      d="M6 7C8.41896 7 10.4367 8.71776 10.9 11H22C22.5523 11 23 11.4477 23 12V15C23 15.5523 22.5523 16 22 16C21.4477 16 21 15.5523 21 15V13H19V14C19 14.5523 18.5523 15 18 15C17.4477 15 17 14.5523 17 14V13H10.9C10.4367 15.2822 8.41896 17 6 17C3.23858 17 1 14.7614 1 12C1 9.23858 3.23858 7 6 7Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pikeyrightsolid;
