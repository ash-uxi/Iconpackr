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
 * Picctvstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picctvstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cctv icon",
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
      d="M2 21V15M2.00001 17.9999L7.41676 17.0972C7.77649 17.0372 8.07507 16.7862 8.19589 16.4421L9.85867 11.7066M21.2442 8.71214L19.9501 13.5418M9.85867 11.7066L15.8362 13.3083C16.3697 13.4512 16.9181 13.1346 17.061 12.6011L18.3838 7.66419C18.5268 7.13072 18.2102 6.58239 17.6767 6.43945L6.77234 3.51762C5.7054 3.23174 4.60873 3.8649 4.32285 4.93183L3.51763 7.93693C3.23175 9.00387 3.86491 10.1005 4.93185 10.3864L9.85867 11.7066Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picctvstroke;
