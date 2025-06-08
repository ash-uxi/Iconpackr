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
 * Piarrowdownduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowdownduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow down icon",
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
    <path d="M12 20V4" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M12 21c-.432 0-.864-.144-1.22-.43a31.2 31.2 0 0 1-5.584-5.806A1 1 0 0 1 6 13.17h12a1 1 0 0 1 .804 1.594 31.2 31.2 0 0 1-5.584 5.807c-.356.285-.788.429-1.22.429"
    />
  </Svg>
);

export default Piarrowdownduosolid;
