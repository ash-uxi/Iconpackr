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
 * Pidangerskullduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidangerskullduostroke = ({
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
      d="M10.2998 11C10.2998 11.5523 9.85209 12 9.2998 12C8.74752 12 8.2998 11.5523 8.2998 11C8.2998 10.4477 8.74752 10 9.2998 10C9.85209 10 10.2998 10.4477 10.2998 11Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M15.6998 11C15.6998 11.5523 15.2521 12 14.6998 12C14.1475 12 13.6998 11.5523 13.6998 11C13.6998 10.4477 14.1475 10 14.6998 10C15.2521 10 15.6998 10.4477 15.6998 11Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19 14.4188V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V14.4188C5 15.3631 5.60421 16.2014 6.5 16.5C7.39579 16.7986 8 17.6369 8 18.5811V18.6754C8 19.9593 9.04074 21 10.3246 21H13.6754C14.9593 21 16 19.9593 16 18.6754V18.5811C16 17.6369 16.6042 16.7986 17.5 16.5C18.3958 16.2014 19 15.3631 19 14.4188Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pidangerskullduostroke;
