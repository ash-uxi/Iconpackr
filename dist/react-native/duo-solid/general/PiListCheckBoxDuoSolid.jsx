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
 * Pilistcheckboxduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistcheckboxduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list check box icon",
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
    <path d="M12 12h9m-9 6h9M12 6h9" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M4 4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM9.155 14.826a1 1 0 1 0-1.128-1.652 13.1 13.1 0 0 0-3.302 3.24l-1.018-1.017a1 1 0 0 0-1.414 1.415l1.898 1.895a1 1 0 0 0 1.574-.21 11.15 11.15 0 0 1 3.39-3.671"
    />
  </Svg>
);

export default Pilistcheckboxduosolid;
