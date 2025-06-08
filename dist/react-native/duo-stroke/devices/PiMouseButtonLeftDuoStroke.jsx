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
 * Pimousebuttonleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousebuttonleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse button left icon",
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
      d="M19 14V10C19 6.13401 15.866 3 12 3V7.8C12 8.92011 12 9.48016 11.782 9.90798C11.5903 10.2843 11.2843 10.5903 10.908 10.782C10.4802 11 9.9201 11 8.8 11H5V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M5 10C5 6.13401 8.13401 3 12 3V7.8C12 8.92011 12 9.48016 11.782 9.90798C11.5903 10.2843 11.2843 10.5903 10.908 10.782C10.4802 11 9.9201 11 8.8 11H5V10Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimousebuttonleftduostroke;
