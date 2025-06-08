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
 * Piarrowleftcirclecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftcirclecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left circle icon",
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
    <path d="M11.949 16a20.3 20.3 0 0 1-3.807-3.604A.63.63 0 0 1 8 12m3.949-4a20.3 20.3 0 0 0-3.807 3.604A.63.63 0 0 0 8 12m0 0h8m-4-9.15a9.15 9.15 0 1 1 0 18.3 9.15 9.15 0 0 1 0-18.3" />
    <path
      fill={color}
      d="M21.15 12a9.15 9.15 0 1 0-18.3 0 9.15 9.15 0 0 0 18.3 0"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowleftcirclecontrast;
