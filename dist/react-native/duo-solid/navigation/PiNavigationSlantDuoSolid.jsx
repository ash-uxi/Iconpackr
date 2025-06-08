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
 * Pinavigationslantduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinavigationslantduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "navigation slant icon",
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
    <path d="M13.939 20.715a.592.592 0 0 1-1.077-.183l-1.348-5.84a2.94 2.94 0 0 0-2.206-2.206l-5.84-1.348a.591.591 0 0 1-.183-1.077" />{" "}
    <path
      fill={color || "#000"}
      d="M20.108 2.044a1.556 1.556 0 0 1 1.848 1.848 52.2 52.2 0 0 1-6.866 16.87l-.306.485c-.754 1.198-2.579.89-2.897-.49l-1.348-5.84a1.94 1.94 0 0 0-1.456-1.457l-5.84-1.347c-1.38-.319-1.689-2.144-.49-2.898l.484-.305a52.2 52.2 0 0 1 16.87-6.866"
      opacity={0.28}
    />
  </Svg>
);

export default Pinavigationslantduosolid;
