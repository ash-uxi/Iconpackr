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
 * Pifingerprintdefaultstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifingerprintdefaultstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fingerprint default icon",
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
      d="M12 13V10.5M12 21V17M9.35418 8C10.0593 7.37764 10.9856 7 12 7C14.2091 7 16 8.79086 16 11V20.2501M8 12V20.2501M15 3.58152C14.0736 3.20651 13.0609 3 12 3C7.58172 3 4 6.58172 4 11V17.5499M18.6153 6.5C19.4892 7.78211 20 9.3314 20 11V17.5499"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifingerprintdefaultstroke;
