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
 * Pinotebookduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotebookduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notebook icon",
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
      d="M12 21.5V5.06641"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M2 20.5664V5.06641C4.99481 3.35509 8.9751 3.96646 12 5.06642C15.0249 3.96646 19.0052 3.3551 22 5.06642V20.5664C18.8032 19.1964 14.9369 20.165 12 21.5C9.06309 20.165 5.19684 19.1964 2 20.5664Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pinotebookduostroke;
