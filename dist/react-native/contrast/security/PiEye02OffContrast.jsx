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
 * Pieye02offcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieye02offcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "eye02 off icon",
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
      fill={color}
      fillRule="evenodd"
      d="M15.401 13.883A1 1 0 0 1 15.874 15 4 4 0 0 1 13 17.874a1 1 0 0 1-.957-1.676l2.154-2.154a1 1 0 0 1 1.203-.161"
      clipRule="evenodd"
      opacity={0.28}
    />
    <path d="m22 2-5.831 5.831m0 0L12.87 11.13M16.17 7.83C15.008 7.32 13.623 7 12 7c-6.3 0-9 4.813-9 7m9.872-2.871L9.128 14.87m3.742-3.742a3 3 0 0 0-3.743 3.743m0 0L2 22m17.391-11.735C20.49 11.598 21 13.048 21 14m-8.249 2.905a3 3 0 0 0 2.154-2.154" />
  </Svg>
);

export default Pieye02offcontrast;
