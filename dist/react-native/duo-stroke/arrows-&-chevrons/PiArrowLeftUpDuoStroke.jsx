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
 * Piarrowleftupduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftupduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left up icon",
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
      d="M5.74331 14.2286C5.35593 11.6413 5.30505 9.0205 5.59114 6.43163C5.61568 6.20955 5.71476 6.0117 5.86323 5.86323C6.0117 5.71476 6.20955 5.61568 6.43163 5.59114C9.0205 5.30505 11.6413 5.35593 14.2286 5.74331"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5.86328 5.86316L18.5912 18.5911"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowleftupduostroke;
