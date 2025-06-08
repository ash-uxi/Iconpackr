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
 * Pilistheartcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistheartcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list heart icon",
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
      d="M17.714 18.327c.372 0 3.715-1.805 3.715-4.333 0-1.264-1.115-2.15-2.229-2.167-.557-.008-1.114.18-1.486.723-.371-.542-.938-.723-1.485-.723-1.115 0-2.229.903-2.229 2.167 0 2.528 3.343 4.333 3.714 4.333"
      opacity={0.28}
    />
    <path d="M4 12h6m-6 6h6M4 6h16m-2.286 12.327c-.371 0-3.714-1.806-3.714-4.333 0-1.264 1.114-2.167 2.229-2.167.547 0 1.114.18 1.485.722.372-.541.929-.73 1.486-.722 1.114.016 2.229.903 2.229 2.167 0 2.527-3.343 4.333-3.715 4.333" />
  </Svg>
);

export default Pilistheartcontrast;
