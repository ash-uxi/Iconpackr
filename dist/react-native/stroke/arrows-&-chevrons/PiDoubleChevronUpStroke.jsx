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
 * Pidoublechevronupstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevronupstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "double chevron up icon",
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
      d="M8 11C9.06206 9.53812 10.3071 8.22872 11.7021 7.1058C11.8774 6.96473 12.1226 6.96473 12.2979 7.1058C13.6929 8.22872 14.9379 9.53812 16 11M8 17C9.06206 15.5381 10.3071 14.2287 11.7021 13.1058C11.8774 12.9647 12.1226 12.9647 12.2979 13.1058C13.6929 14.2287 14.9379 15.5381 16 17"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidoublechevronupstroke;
