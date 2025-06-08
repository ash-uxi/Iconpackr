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
 * Piwaterdoubledropletduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwaterdoubledropletduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "water double droplet icon",
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
      d="M16.6199 7.755C15.5009 6.271 13.9869 4.682 11.9999 3C-0.0830712 13.224 5.35993 19.992 10.7749 20.896"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M17.5 11.6699C23.762 17.3739 20.252 21.0029 17.5 21.0029C14.748 21.0029 11.238 17.3729 17.5 11.6699Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piwaterdoubledropletduostroke;
