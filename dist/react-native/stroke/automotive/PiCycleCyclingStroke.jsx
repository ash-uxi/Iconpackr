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
 * Picyclecyclingstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picyclecyclingstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cycle cycling icon",
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
      d="M11.5 19.5001L12.5311 15.3768C12.7928 14.3304 12.1775 13.2649 11.1403 12.9686L9.77818 12.5794C8.20616 12.1303 7.83051 10.0695 9.11871 9.0628C10.2666 8.16573 11.9076 8.21164 12.9895 9.18722L14.1319 10.2173C14.6988 10.7285 15.4001 11.0667 16.153 11.1922L18 11.5001M17.5 8C18.6046 8 19.5 7.10457 19.5 6C19.5 4.89543 18.6046 4 17.5 4C16.3954 4 15.5 4.89543 15.5 6C15.5 7.10457 16.3954 8 17.5 8ZM18.5 20.5001C20.1569 20.5001 21.5 19.157 21.5 17.5001C21.5 15.8432 20.1569 14.5001 18.5 14.5001C16.8431 14.5001 15.5 15.8432 15.5 17.5001C15.5 19.157 16.8431 20.5001 18.5 20.5001ZM5.5 20.5001C7.15685 20.5001 8.5 19.157 8.5 17.5001C8.5 15.8432 7.15685 14.5001 5.5 14.5001C3.84315 14.5001 2.5 15.8432 2.5 17.5001C2.5 19.157 3.84315 20.5001 5.5 20.5001Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picyclecyclingstroke;
