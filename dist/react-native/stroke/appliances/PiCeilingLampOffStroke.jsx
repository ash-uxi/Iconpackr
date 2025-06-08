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
 * Piceilinglampoffstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piceilinglampoffstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ceiling lamp off icon",
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
      d="M12 7C7.02944 7 3 11.0294 3 16H21C21 11.0294 16.9706 7 12 7ZM12 7V4M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16L15 16Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piceilinglampoffstroke;
