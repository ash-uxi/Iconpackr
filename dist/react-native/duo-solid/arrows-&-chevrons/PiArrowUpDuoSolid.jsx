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
 * Piarrowupduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowupduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow up icon",
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
      d="M12 4c-.432 0-.864.144-1.22.429a31.2 31.2 0 0 0-5.584 5.807A1 1 0 0 0 6 11.83h12a1 1 0 0 0 .804-1.594 31.2 31.2 0 0 0-5.584-5.807A1.95 1.95 0 0 0 12 4"
    />{" "}
    <path d="M12 5v16" opacity={0.28} />
  </Svg>
);

export default Piarrowupduosolid;
