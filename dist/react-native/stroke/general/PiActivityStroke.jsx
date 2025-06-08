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
 * Piactivitystroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piactivitystroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "activity icon",
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
      d="M2 12H5.27924C5.70967 12 6.09181 11.7246 6.22792 11.3162L9 3L15 21L17.7721 12.6838C17.9082 12.2754 18.2903 12 18.7208 12H22"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piactivitystroke;
