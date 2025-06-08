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
 * Piarrowrightdownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightdownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right down icon",
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
      d="M9.99855 18.4838C12.5858 18.8712 15.2066 18.9221 17.7955 18.636C18.0176 18.6115 18.2154 18.5124 18.3639 18.3639M18.4838 9.99855C18.8712 12.5858 18.9221 15.2066 18.636 17.7955C18.6115 18.0176 18.5124 18.2154 18.3639 18.3639M18.3639 18.3639L5.63599 5.63599"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowrightdownstroke;
