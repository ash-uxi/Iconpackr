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
 * Pifile02svgformatcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifile02svgformatcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file02 svg format icon",
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
    <path d="M11 2h1a8 8 0 0 1 8 8h-.17A3 3 0 0 0 17 8h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m0 0H8a4 4 0 0 0-4 4v4m17.25 5c-.451-.619-1.069-1-1.75-1-1.38 0-2.5 1.567-2.5 3.5s1.12 3.5 2.5 3.5c.681 0 1.299-.381 1.75-1v-2h-.75M7 14H4.75a1.75 1.75 0 1 0 0 3.5h1.5a1.75 1.75 0 1 1 0 3.5H3m7-7 1.55 7h1.552l1.55-7" />
    <path
      fill={color}
      d="M4 11V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8v1z"
      opacity={0.28}
    />
  </Svg>
);

export default Pifile02svgformatcontrast;
