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
 * Piwineglassemptysolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwineglassemptysolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "wine glass empty icon",
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
      d="M7.30171 1C6.94349 1 6.61264 1.19161 6.43436 1.5023C5.53485 3.0699 5 4.97535 5 6.88889C5 10.4502 7.36105 13.4678 11 13.9368V21H8C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H11.9986L12 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H13V13.9368C16.639 13.4678 19 10.4502 19 6.88889C19 4.97535 18.4651 3.0699 17.5656 1.5023C17.3874 1.19161 17.0565 1 16.6983 1H7.30171Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piwineglassemptysolid;
