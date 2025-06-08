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
 * Piarchivecodecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarchivecodecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "archive code icon",
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
    <path d="M10.286 12.214A11.6 11.6 0 0 0 8.06 14.33a.27.27 0 0 0 0 .34c.645.8 1.394 1.512 2.226 2.116m3.428 0a11.6 11.6 0 0 0 2.226-2.116.27.27 0 0 0 0-.34 11.6 11.6 0 0 0-2.226-2.116" />
    <path
      fill={color}
      fillRule="evenodd"
      d="M4 3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
      clipRule="evenodd"
      opacity={0.28}
    />
    <path d="M4 8h16M4 8v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8M4 8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2" />
  </Svg>
);

export default Piarchivecodecontrast;
