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
 * Picampfirestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picampfirestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "camp fire icon",
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
      d="M2 21L12 5.16667M12 5.16667L14 2M12 5.16667L22 21M12 5.16667L10 2M10.9999 17.0001C11.5933 17.0001 12.3399 15.4865 12.6161 14.1923C13.5567 14.7619 14.9999 16.2825 14.9999 18.0324C14.9999 19.5158 13.9999 20.9992 12 20.9992C9.99999 20.9992 9 19.5158 9 18.0324C9 17.1477 9.36888 16.3216 9.85521 15.6474C10.3238 16.3136 10.9999 17.0001 10.9999 17.0001Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picampfirestroke;
