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
 * Pimartiniglassduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimartiniglassduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "martini glass icon",
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
    <path d="M12 13v8m0 0h5.5M12 21H7" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M3 3a1 1 0 0 0-.707 1.707l9 9a1 1 0 0 0 1.414 0l9-9A1 1 0 0 0 21 3zm3.447 3.033L5.414 5h13.172l-1.033 1.033a71 71 0 0 1-11.106 0"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pimartiniglassduosolid;
