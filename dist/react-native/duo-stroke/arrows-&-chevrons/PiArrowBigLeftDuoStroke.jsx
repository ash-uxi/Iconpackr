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
 * Piarrowbigleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigleftduostroke = ({
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
      d="M9.80457 5C7.35061 6.81482 5.14658 8.93491 3.24688 11.3066C3.08392 11.5101 3.00244 11.755 3.00244 12C3.00244 12.245 3.08392 12.4899 3.24688 12.6934C5.14658 15.0651 7.35061 17.1852 9.80458 19"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.80465 5C9.6504 6.33024 9.54026 7.6643 9.47424 9L19.3975 9C19.9576 9 20.2376 9 20.4515 9.109C20.6397 9.20487 20.7927 9.35785 20.8885 9.54601C20.9975 9.75992 20.9975 10.0399 20.9975 10.6V13.4C20.9975 13.9601 20.9975 14.2401 20.8885 14.454C20.7927 14.6422 20.6397 14.7951 20.4515 14.891C20.2376 15 19.9576 15 19.3975 15H9.47424C9.54026 16.3357 9.6504 17.6698 9.80465 19"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowbigleftduostroke;
