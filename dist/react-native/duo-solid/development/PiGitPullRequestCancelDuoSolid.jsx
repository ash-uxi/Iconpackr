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
 * Pigitpullrequestcancelduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitpullrequestcancelduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git pull request cancel icon",
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
      fill={color || "#000"}
      d="M16.207 2.793a1 1 0 1 0-1.414 1.414L16.486 5.9l-1.693 1.693a1 1 0 0 0 1.414 1.414L17.9 7.314l1.693 1.693a1 1 0 1 0 1.414-1.414L19.314 5.9l1.693-1.693a1 1 0 0 0-1.414-1.414L17.9 4.486zM18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
    />{" "}
    <path d="M6 9v12m12-6v-2" opacity={0.28} />
  </Svg>
);

export default Pigitpullrequestcancelduosolid;
