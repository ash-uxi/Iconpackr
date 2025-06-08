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
 * Pigitfork02duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitfork02duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git fork02 icon",
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
      d="M18 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 14.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
    />{" "}
    <path
      d="M6 15.5v-7m11.875-.002c-.154.604-.258.962-.409 1.268a4 4 0 0 1-2.746 2.144c-.417.09-.892.09-1.843.09h-.922c-1.435 0-2.153 0-2.787.219a4 4 0 0 0-1.495.923c-.475.466-.795 1.102-1.428 2.368"
      opacity={0.28}
    />
  </Svg>
);

export default Pigitfork02duosolid;
