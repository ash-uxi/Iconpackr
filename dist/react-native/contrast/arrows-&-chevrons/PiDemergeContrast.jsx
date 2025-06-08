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
 * Pidemergecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidemergecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "demerge icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M4.647 4.086a20.6 20.6 0 0 1 5.296.2 53 53 0 0 0-5.657 5.657 20.6 20.6 0 0 1-.2-5.296.62.62 0 0 1 .56-.56M14.057 4.286a20.6 20.6 0 0 1 5.296-.2.62.62 0 0 1 .56.56 20.6 20.6 0 0 1-.199 5.297 53 53 0 0 0-5.657-5.657" />
    </g>
    <path d="M7.007 7.007 12 12v8M7.007 7.007a53 53 0 0 1 2.936-2.721 20.6 20.6 0 0 0-5.296-.2.62.62 0 0 0-.56.56 20.6 20.6 0 0 0 .199 5.297 53 53 0 0 1 2.721-2.936m9.986 0L15 9m1.993-1.993a53 53 0 0 0-2.936-2.721 20.6 20.6 0 0 1 5.296-.2.62.62 0 0 1 .56.56 20.6 20.6 0 0 1-.199 5.297 53 53 0 0 0-2.721-2.936" />
  </Svg>
);

export default Pidemergecontrast;
