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
 * Pipeoplemalecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipeoplemalecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "people male icon",
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
      fill={color}
      d="M14.5 4.534a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-7.06 8.85a4 4 0 0 1 3.944-3.337h1.225a4 4 0 0 1 3.946 3.345l.44 2.655L15 16l-.671 4.027a2.36 2.36 0 0 1-4.658 0L9 16H7z"
      opacity={0.28}
    />
    <path d="M14.5 4.535a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M7.44 13.385a4 4 0 0 1 3.944-3.338h1.225a4 4 0 0 1 3.946 3.345l.44 2.655L15 16l-.671 4.027a2.36 2.36 0 0 1-4.658 0L9 16H7z" />
  </Svg>
);

export default Pipeoplemalecontrast;
