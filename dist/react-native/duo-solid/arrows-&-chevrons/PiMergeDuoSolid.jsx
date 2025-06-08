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
 * Pimergeduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimergeduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "merge icon",
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
      d="M12 3c-.372 0-.739.13-1.035.376a21.6 21.6 0 0 0-3.78 4.074 1 1 0 0 0 .897 1.577l2.022-.167a23 23 0 0 1 3.792 0l2.022.167a1 1 0 0 0 .896-1.577 21.6 21.6 0 0 0-3.779-4.074A1.62 1.62 0 0 0 12 3"
    />{" "}
    <path d="M12 7.782V13l-6 7m12 0-3.429-4" opacity={0.28} />
  </Svg>
);

export default Pimergeduosolid;
