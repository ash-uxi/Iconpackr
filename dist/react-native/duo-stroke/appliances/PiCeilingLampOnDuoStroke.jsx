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
 * Piceilinglamponduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piceilinglamponduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ceiling lamp on icon",
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
      d="M13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zM13 2a1 1 0 1 0-2 0v2.05a10 10 0 0 1 2 0z"
      fill="none"
    />
    <path d="M15 14H9m-6 0a9 9 0 0 1 18 0z" opacity={0.28} fill="none" />
    <path
      d="M16.866 18.5a1 1 0 1 0-1.732 1l.5.866a1 1 0 0 0 1.732-1zM8.126 15a4.002 4.002 0 0 0 7.748 0h-2.141a2 2 0 0 1-3.465 0zM8.866 19.5a1 1 0 1 0-1.732-1l-.5.866a1 1 0 0 0 1.732 1z"
      fill="none"
    />
  </Svg>
);

export default Piceilinglamponduostroke;
