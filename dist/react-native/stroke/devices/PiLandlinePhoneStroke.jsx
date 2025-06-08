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
 * Pilandlinephonestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilandlinephonestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "landline phone icon",
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
      d="M10 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H10"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path d="M13 14H14" stroke={color} strokeWidth="2" fill="none" />
    <path d="M13 17H14" stroke={color} strokeWidth="2" fill="none" />
    <path d="M13 7H18V11H13V7Z" stroke={color} strokeWidth="2" fill="none" />
    <path d="M17 14H18" stroke={color} strokeWidth="2" fill="none" />
    <path d="M17 17H18" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M3 5.5C3 4.11929 4.11929 3 5.5 3H7.5C8.88071 3 10 4.11929 10 5.5V18.5C10 19.8807 8.88071 21 7.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilandlinephonestroke;
