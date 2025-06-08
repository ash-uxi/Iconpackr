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
 * Pihourglassstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pihourglassstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "hourglass icon",
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
      d="M10.5 12C10.5 8.48068 4.41441 8.11147 4.01443 4.48436C3.93458 3.76031 4.18955 3.04013 4.69671 2.55723C5.28193 2 6.62415 2 9.30861 2H14.6914C17.3759 2 18.7181 2 19.3033 2.55723C19.8104 3.04013 20.0654 3.76031 19.9856 4.48436C19.5856 8.11147 13.5 8.48068 13.5 12C13.5 15.5193 19.5856 15.8885 19.9856 19.5156C20.0654 20.2397 19.8104 20.9599 19.3033 21.4428C18.7181 22 17.3758 22 14.6914 22L9.3086 22C6.62415 22 5.28192 22 4.69671 21.4428C4.18955 20.9599 3.93458 20.2397 4.01442 19.5156C4.41441 15.8885 10.5 15.5193 10.5 12Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pihourglassstroke;
