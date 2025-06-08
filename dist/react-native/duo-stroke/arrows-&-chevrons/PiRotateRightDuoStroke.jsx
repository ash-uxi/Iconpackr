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
 * Pirotaterightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pirotaterightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "rotate right icon",
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
      d="M17.7834 2.66992C18.2927 3.86202 18.645 5.11461 18.832 6.39629C18.8809 6.73098 18.6171 6.88085 18.3535 6.9818C18.3221 6.9938 18.2908 7.00568 18.2594 7.01746C17.1395 7.43772 15.9726 7.72281 14.7834 7.86607"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18.2593 7.01746C16.7936 5.17853 14.5344 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C15.7277 20 18.8599 17.4505 19.748 14"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pirotaterightduostroke;
