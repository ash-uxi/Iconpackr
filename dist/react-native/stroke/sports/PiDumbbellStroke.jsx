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
 * Pidumbbellstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidumbbellstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "dumbbell icon",
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
      d="M9 11H15M5 9H4C2.89543 9 2 9.89543 2 11C2 12.1046 2.89543 13 4 13H5M19 13H20C21.1046 13 22 12.1046 22 11C22 9.89543 21.1046 9 20 9H19M19 13V7C19 5.89543 18.1046 5 17 5C15.8954 5 15 5.89543 15 7V15C15 16.1046 15.8954 17 17 17C18.1046 17 19 16.1046 19 15V13ZM7 17C8.10457 17 9 16.1046 9 15V7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7V15C5 16.1046 5.89543 17 7 17Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidumbbellstroke;
