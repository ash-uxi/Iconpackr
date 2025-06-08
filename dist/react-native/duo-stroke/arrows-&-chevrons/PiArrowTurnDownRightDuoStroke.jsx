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
 * Piarrowturndownrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturndownrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn down right icon",
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
      d="M15.1414 20C16.8942 18.7037 18.4685 17.1893 19.8254 15.4953C19.9418 15.3499 20 15.175 20 15C20 14.825 19.9418 14.6501 19.8254 14.5047C18.4685 12.8107 16.8942 11.2963 15.1414 10"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 15H12C9.19974 15 7.79961 15 6.73005 14.455C5.78924 13.9757 5.02433 13.2108 4.54497 12.27C4 11.2004 4 9.80026 4 7V4"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowturndownrightduostroke;
