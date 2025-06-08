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
 * Piarrowrightupstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightupstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right up icon",
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
      d="M9.99855 5.51601C12.5858 5.12863 15.2066 5.07776 17.7955 5.36385C18.0176 5.38839 18.2154 5.48747 18.3639 5.63594M18.4838 14.0013C18.8712 11.414 18.9221 8.79321 18.636 6.20434C18.6115 5.98226 18.5124 5.7844 18.3639 5.63594M18.3639 5.63594L5.63599 18.3639"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowrightupstroke;
