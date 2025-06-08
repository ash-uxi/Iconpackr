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
 * Picloudlightningcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudlightningcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud lightning icon",
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
    <path d="M13.06 11 10 15.5c-.201.272-.01.623.374.685l4.09.664c.38.061.573.408.377.68L11.365 22M6.017 9.026A6.6 6.6 0 0 0 6.174 11m-.157-1.974A4.5 4.5 0 0 0 6.5 18h.05m-.533-8.974a6.5 6.5 0 0 1 12.651-1.582A5.5 5.5 0 0 1 22 12.5c0 2.07-1.21 4.033-3.076 4.937" />
    <path
      fill={color}
      d="m18.34 17.685-.422-.309a3.4 3.4 0 0 0-.426-1.721c-.573-1.033-1.57-1.61-2.548-1.768l-.198-.032.795-1.168a3 3 0 0 0-4.962-3.374l-3.041 4.473a3.38 3.38 0 0 0-.162 3.646L6.96 18H6.5a4.5 4.5 0 0 1-.483-8.974 6.5 6.5 0 0 1 12.651-1.582 5.501 5.501 0 0 1-.329 10.241"
      opacity={0.28}
    />
  </Svg>
);

export default Picloudlightningcontrast;
