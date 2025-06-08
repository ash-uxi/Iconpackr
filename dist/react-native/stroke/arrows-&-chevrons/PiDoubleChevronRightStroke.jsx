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
 * Pidoublechevronrightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevronrightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "double chevron right icon",
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
      d="M13 8C14.4619 9.06206 15.7713 10.3071 16.8942 11.7021C17.0353 11.8774 17.0353 12.1226 16.8942 12.2979C15.7713 13.6929 14.4619 14.9379 13 16M7 8C8.46188 9.06206 9.77128 10.3071 10.8942 11.7021C11.0353 11.8774 11.0353 12.1226 10.8942 12.2979C9.77128 13.6929 8.46188 14.9379 7 16"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidoublechevronrightstroke;
