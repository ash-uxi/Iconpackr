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
 * Piarchivesparkleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarchivesparkleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "archive sparkle icon",
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
    <path d="M12 12.582c.004.101.005.151.008.195a3 3 0 0 0 2.797 2.797l.195.008-.195.008a3 3 0 0 0-2.797 2.797l-.008.195c-.004-.1-.005-.151-.008-.195A3 3 0 0 0 9 15.582l.195-.008a3 3 0 0 0 2.797-2.797z" />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M4 9a1 1 0 0 0-1 1v7a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-7a1 1 0 0 0-1-1z"
      clipRule="evenodd"
      opacity={0.28}
    />
  </Svg>
);

export default Piarchivesparkleduosolid;
