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
 * Piarrowbigleftstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigleftstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big left icon",
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
      d="M20.9975 10.6V13.4C20.9975 13.9601 20.9975 14.2401 20.8885 14.454C20.7926 14.6422 20.6396 14.7951 20.4515 14.891C20.2375 15 19.9575 15 19.3975 15H9.47417C9.54019 16.3357 9.65032 17.6698 9.80457 19C7.35061 17.1852 5.14658 15.0651 3.24688 12.6934C3.08392 12.4899 3.00244 12.245 3.00244 12C3.00244 11.755 3.08392 11.5101 3.24688 11.3066C5.14658 8.93491 7.35061 6.81482 9.80457 5C9.65032 6.33024 9.54019 7.6643 9.47417 9H19.3975C19.9575 9 20.2375 9 20.4515 9.109C20.6396 9.20487 20.7926 9.35785 20.8885 9.54601C20.9975 9.75992 20.9975 10.0399 20.9975 10.6Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowbigleftstroke;
