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
 * Pimousescrollduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousescrollduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse scroll icon",
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
      d="M14 14.4998C13.5065 15.1578 12.934 15.7521 12.2957 16.2693C12.2094 16.3392 12.1047 16.3742 12 16.3742C11.8953 16.3742 11.7906 16.3392 11.7043 16.2693C11.066 15.7521 10.4935 15.1578 10 14.4998M14 9.49984C13.5065 8.84185 12.934 8.24764 12.2957 7.73042C12.2094 7.66046 12.1047 7.62549 12 7.62549C11.8953 7.62549 11.7906 7.66046 11.7043 7.73042C11.066 8.24764 10.4935 8.84185 10 9.49984"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19 14V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimousescrollduostroke;
