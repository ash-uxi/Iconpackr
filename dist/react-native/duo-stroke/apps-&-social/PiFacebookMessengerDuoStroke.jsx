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
 * Pifacebookmessengerduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacebookmessengerduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "facebook messenger icon",
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
      d="M3 11.7298C3 6.71465 6.93075 3 12 3C17.0693 3 21 6.7169 21 11.732C21 16.7471 17.0693 20.4618 12 20.4618C11.0887 20.4618 10.2158 20.3403 9.3945 20.1153C9.23475 20.0725 9.06375 20.0838 8.913 20.1513L7.1265 20.9388C7.0186 20.9864 6.90067 21.0067 6.78306 20.9981C6.66545 20.9894 6.55177 20.952 6.452 20.8891C6.35224 20.8262 6.26944 20.7398 6.2109 20.6374C6.15236 20.5351 6.11985 20.4199 6.11625 20.302L6.06675 18.7001C6.06225 18.5021 5.97225 18.3176 5.826 18.1871C4.0755 16.6211 3 14.3532 3 11.7298Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8 14L10.1651 10.9688C10.3419 10.7213 10.6969 10.6877 10.917 10.8975L13.2179 13.0909C13.4422 13.3047 13.805 13.2651 13.9778 13.0079L16 10"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifacebookmessengerduostroke;
