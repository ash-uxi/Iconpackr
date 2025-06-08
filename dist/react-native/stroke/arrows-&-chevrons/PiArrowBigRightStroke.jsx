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
 * Piarrowbigrightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigrightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big right icon",
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
      d="M3.00244 10.6V13.4C3.00244 13.9601 3.00244 14.2401 3.11143 14.454C3.20731 14.6422 3.36029 14.7951 3.54845 14.891C3.76236 15 4.04239 15 4.60244 15H14.5257C14.4597 16.3357 14.3496 17.6698 14.1953 19C16.6493 17.1852 18.8533 15.0651 20.753 12.6934C20.916 12.4899 20.9975 12.245 20.9975 12C20.9975 11.755 20.916 11.5101 20.753 11.3066C18.8533 8.93491 16.6493 6.81482 14.1953 5C14.3496 6.33024 14.4597 7.6643 14.5257 9H4.60244C4.04239 9 3.76236 9 3.54845 9.109C3.36029 9.20487 3.20731 9.35785 3.11143 9.54601C3.00244 9.75992 3.00244 10.0399 3.00244 10.6Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowbigrightstroke;
