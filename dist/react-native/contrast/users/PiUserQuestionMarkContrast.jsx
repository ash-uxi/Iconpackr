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
 * Piuserquestionmarkcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserquestionmarkcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user question mark icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M15.473 18.371l-.119-.039A3 3 0 0 1 13.393 15H8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h9.542c.058-.349.177-.678.345-.975a3 3 0 0 1-.414-1.654" />
    </g>
    <path d="M14.54 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4.379m3.971.502a2.249 2.249 0 0 1 4.37.75c0 1.499-2.249 2.248-2.249 2.248m.03 3h.01M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </Svg>
);

export default Piuserquestionmarkcontrast;
