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
 * Pitoggleoffstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitoggleoffstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "toggle off icon",
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
      d="M13 12C13 9.79086 11.2091 8 9 8C6.79086 8 5 9.79086 5 12C5 14.2091 6.79086 16 9 16C11.2091 16 13 14.2091 13 12Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M15 5H9C5.13401 5 2 8.13401 2 12C2 15.866 5.13401 19 9 19H15C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitoggleoffstroke;
