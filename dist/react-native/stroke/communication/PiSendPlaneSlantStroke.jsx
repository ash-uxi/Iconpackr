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
 * Pisendplaneslantstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisendplaneslantstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "send plane slant icon",
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
      d="M9.53908 14.4609L4.06343 11.4746C2.6344 10.6952 2.64856 8.64068 4.08807 7.90084C8.05782 5.86056 12.279 4.34556 16.6459 3.39374C17.8998 3.12044 19.3328 2.56333 20.3847 3.61527C21.4367 4.66721 20.8796 6.10024 20.6063 7.35412C19.6544 11.721 18.1394 15.9422 16.0992 19.9119C15.3593 21.3514 13.3048 21.3656 12.5254 19.9366L9.53908 14.4609ZM9.53908 14.4609L12.8477 11.1523"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisendplaneslantstroke;
