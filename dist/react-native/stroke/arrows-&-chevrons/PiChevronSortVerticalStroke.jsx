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
 * Pichevronsortverticalstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronsortverticalstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron sort vertical icon",
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
      d="M16 9C14.9379 7.53812 13.6929 6.22872 12.2979 5.1058C12.1226 4.96473 11.8774 4.96473 11.7021 5.1058C10.3071 6.22872 9.06206 7.53812 8 9M8 15C9.06206 16.4619 10.3071 17.7713 11.7021 18.8942C11.8774 19.0353 12.1226 19.0353 12.2979 18.8942C13.6929 17.7713 14.9379 16.4619 16 15"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pichevronsortverticalstroke;
