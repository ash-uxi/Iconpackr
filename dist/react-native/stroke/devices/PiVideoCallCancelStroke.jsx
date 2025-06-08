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
 * Pivideocallcancelstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivideocallcancelstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "video call cancel icon",
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
      d="M7 14.5L9.5 12M9.5 12L12 9.5M9.5 12L7 9.5M9.5 12L12 14.5M17.0011 13.934C17.0197 14.5 17.278 15.033 17.7136 15.399L18.7136 16.239C20.0148 17.332 22 16.407 22 14.708V9.292C22 7.5926 20.0148 6.6676 18.7136 7.7606L17.7136 8.6006C17.28 8.9648 17.022 9.495 17.0013 10.059M17.0011 13.934L17 15C17 17.209 15.2091 19 13 19H6C3.79086 19 2 17.209 2 15V9C2 6.7909 3.79086 5 6 5H13C15.2091 5 17 6.7909 17 9L17.0013 10.059M17.0011 13.934L17.0013 10.059"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pivideocallcancelstroke;
