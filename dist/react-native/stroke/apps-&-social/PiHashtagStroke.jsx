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
 * Pihashtagstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pihashtagstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "hashtag icon",
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
      d="M7 20L7.9375 15M7.9375 15L9.0625 9M7.9375 15H14.9375M7.9375 15H3.5M9.0625 9L10 4M9.0625 9L16.0625 9M9.0625 9H4.5M14 20L14.9375 15M14.9375 15L16.0625 9M14.9375 15H19.5M16.0625 9L17 4M16.0625 9H20.5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pihashtagstroke;
