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
 * Picloudchecksolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudchecksolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud check icon",
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
      d="M5.11669 10.1756C5.7425 6.66476 8.80966 4 12.5 4C15.6592 4 18.36 5.95271 19.4654 8.71459C21.5626 9.7916 23 11.9769 23 14.5C23 18.0898 20.0899 21 16.5 21H6.5C3.46243 21 1 18.5376 1 15.5C1 12.94 2.74839 10.7894 5.11669 10.1756ZM16.4626 11.8258C16.9187 11.5144 17.036 10.8922 16.7245 10.4361C16.4131 9.97998 15.7909 9.86273 15.3348 10.1742C13.6939 11.2947 12.2795 12.709 11.1609 14.3422L9.70673 12.8895C9.316 12.4992 8.68283 12.4995 8.29252 12.8903C7.9022 13.281 7.90254 13.9142 8.29327 14.3045L10.6345 16.6432C10.8549 16.8633 11.1653 16.9682 11.474 16.9268C11.7828 16.8855 12.0546 16.7026 12.2093 16.4321C13.2601 14.5946 14.7145 13.0196 16.4626 11.8258Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Picloudchecksolid;
