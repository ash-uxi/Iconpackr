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
 * Pidoublechevrondownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevrondownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "double chevron down icon",
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
      d="M8 13C9.06206 14.4619 10.3071 15.7713 11.7021 16.8942C11.8774 17.0353 12.1226 17.0353 12.2979 16.8942C13.6929 15.7713 14.9379 14.4619 16 13M8 7C9.06206 8.46188 10.3071 9.77128 11.7021 10.8942C11.8774 11.0353 12.1226 11.0353 12.2979 10.8942C13.6929 9.77128 14.9379 8.46188 16 7"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidoublechevrondownstroke;
