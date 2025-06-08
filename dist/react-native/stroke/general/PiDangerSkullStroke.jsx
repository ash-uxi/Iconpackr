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
 * Pidangerskullstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidangerskullstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "danger skull icon",
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
      d="M10.3 11C10.3 11.5523 9.85228 12 9.3 12C8.74772 12 8.3 11.5523 8.3 11C8.3 10.4477 8.74772 9.99999 9.3 9.99999C9.85228 9.99999 10.3 10.4477 10.3 11Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M15.7 11C15.7 11.5523 15.2523 12 14.7 12C14.1477 12 13.7 11.5523 13.7 11C13.7 10.4477 14.1477 9.99999 14.7 9.99999C15.2523 9.99999 15.7 10.4477 15.7 11Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10V14.4188C19 15.3631 18.3958 16.2014 17.5 16.5C16.6042 16.7986 16 17.6369 16 18.5811V18.6754C16 19.9593 14.9593 21 13.6754 21H10.3246C9.04074 21 8 19.9593 8 18.6754V18.5811C8 17.6369 7.39579 16.7986 6.5 16.5C5.60421 16.2014 5 15.3631 5 14.4188V10Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidangerskullstroke;
