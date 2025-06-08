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
 * Piarrowleftdownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftdownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left down icon",
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
      d="M5.74331 9.77161C5.35593 12.3589 5.30505 14.9797 5.59114 17.5686C5.61568 17.7906 5.71476 17.9885 5.86323 18.137C6.0117 18.2854 6.20955 18.3845 6.43163 18.4091C9.0205 18.6951 11.6413 18.6443 14.2286 18.2569"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5.86328 18.1369L18.5912 5.40894"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowleftdownduostroke;
