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
 * Piforkknifestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piforkknifestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fork knife icon",
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
      d="M5.00348 3L4.55042 6.62445C4.37157 8.05521 5.0936 9.44807 6.36586 10.1266C6.87762 10.3995 7.44055 10.536 8.00348 10.536M11.0035 3L11.4565 6.62445C11.6354 8.05521 10.9133 9.44807 9.64109 10.1266C9.12933 10.3995 8.56641 10.536 8.00348 10.536M8.00348 10.536V21M8.00348 10.536V3M19.0034 20.9999V16.0739M19.0034 16.0739L19.0034 3.83082C19.0034 3.16836 18.2658 2.77323 17.7151 3.1407C16.6634 3.84243 15.9893 4.98623 15.8844 6.24693L15.3932 12.1467C15.3414 12.7684 15.3155 13.0793 15.3383 13.3366C15.4585 14.6922 16.4745 15.7973 17.8141 16.0298C18.0685 16.0739 18.3801 16.0739 19.0034 16.0739Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piforkknifestroke;
