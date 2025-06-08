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
 * Pisolidjsstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisolidjsstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "solidjs icon",
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
      d="M20.7407 8.26146L9.08193 11.3854C2.81973 13.0634 2.25041 4.94227 8.52877 3.25493C13.496 2.06323 17.3764 5.27233 20.7407 8.26146Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 15.9632L15.6587 12.8393C21.9209 11.1613 22.4903 19.2824 16.2119 20.9698C11.2446 22.1615 7.36426 18.9524 4 15.9632Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisolidjsstroke;
