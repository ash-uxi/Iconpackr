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
 * Piarrowturndownleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturndownleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn down left icon",
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
      d="M4 15H12C14.8003 15 16.2004 15 17.27 14.455C18.2108 13.9757 18.9757 13.2108 19.455 12.27C20 11.2004 20 9.80026 20 7L20 4"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8.85867 20C7.10583 18.7037 5.53153 17.1893 4.1746 15.4953C4.0582 15.3499 4 15.175 4 15C4 14.825 4.0582 14.6501 4.1746 14.5047C5.53153 12.8107 7.10583 11.2963 8.85867 10"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowturndownleftduostroke;
