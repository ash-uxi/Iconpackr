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
 * Pidoublechevronrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevronrightduostroke = ({
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
      d="M13 16C14.4619 14.9379 15.7713 13.6929 16.8942 12.2979C17.0353 12.1226 17.0353 11.8774 16.8942 11.7021C15.7713 10.3071 14.4619 9.06206 13 8"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7 16C8.46188 14.9379 9.77128 13.6929 10.8942 12.2979C11.0353 12.1226 11.0353 11.8774 10.8942 11.7021C9.77128 10.3071 8.46188 9.06206 7 8"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pidoublechevronrightduostroke;
