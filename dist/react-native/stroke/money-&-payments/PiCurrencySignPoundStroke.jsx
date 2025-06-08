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
 * Picurrencysignpoundstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picurrencysignpoundstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "currency sign pound icon",
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
      d="M16 20H6.24976C5.9866 20 5.90286 19.6207 6.13823 19.4948C7.5685 18.7301 8.51847 17.2045 8.51847 15.4754V12.8889M8.51847 12.8889V8C8.51847 5.72763 10.2909 4 12.3693 4C14.3276 4 16 5.62062 16 7.76471M8.51847 12.8889H6.02463M8.51847 12.8889H16"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picurrencysignpoundstroke;
