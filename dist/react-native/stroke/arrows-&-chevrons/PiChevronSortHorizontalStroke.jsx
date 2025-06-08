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
 * Pichevronsorthorizontalstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronsorthorizontalstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron sort horizontal icon",
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
      d="M15 16C16.4619 14.9379 17.7713 13.6929 18.8942 12.2979C19.0353 12.1226 19.0353 11.8774 18.8942 11.7021C17.7713 10.3071 16.4619 9.06206 15 8M9 8C7.53812 9.06206 6.22872 10.3071 5.1058 11.7021C4.96473 11.8774 4.96473 12.1226 5.1058 12.2979C6.22872 13.6929 7.53812 14.9379 9 16"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pichevronsorthorizontalstroke;
