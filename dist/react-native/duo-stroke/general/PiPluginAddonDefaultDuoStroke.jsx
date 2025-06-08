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
 * Pipluginaddondefaultduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipluginaddondefaultduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "plugin addon default icon",
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
      d="M10 8V5.6C10 5.03995 10 4.75992 9.89101 4.54601C9.79513 4.35785 9.64215 4.20487 9.45399 4.10899C9.24008 4 8.96005 4 8.4 4H6.6C6.03995 4 5.75992 4 5.54601 4.10899C5.35785 4.20487 5.20487 4.35785 5.10899 4.54601C5 4.75992 5 5.03995 5 5.6V8.01919M14 8V5.6C14 5.03995 14 4.75992 14.109 4.54601C14.2049 4.35785 14.3578 4.20487 14.546 4.10899C14.7599 4 15.0399 4 15.6 4H17.4C17.9601 4 18.2401 4 18.454 4.10899C18.6422 4.20487 18.7951 4.35785 18.891 4.54601C19 4.75992 19 5.03995 19 5.6V8.01919"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M21 13.6V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.7157 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H6.2C5.0799 8 4.51984 8 4.09202 8.21799C3.7157 8.40973 3.40973 8.71569 3.21799 9.09202C3 9.51984 3 10.0799 3 11.2V13.6C3 15.8402 3 16.9603 3.43597 17.816C3.81947 18.5686 4.43139 19.1805 5.18404 19.564C6.03968 20 7.1598 20 9.4 20H14.6C16.8402 20 17.9603 20 18.816 19.564C19.5686 19.1805 20.1805 18.5686 20.564 17.816C21 16.9603 21 15.8402 21 13.6Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipluginaddondefaultduostroke;
