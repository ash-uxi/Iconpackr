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
 * Picashstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picashstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cash icon",
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
      d="M6 5V5.8C6 6.9201 6 7.48016 5.78201 7.90798C5.59027 8.28431 5.28431 8.59027 4.90798 8.78201C4.48016 9 3.9201 9 2.8 9H2M6 5H5.2C4.07989 5 3.51984 5 3.09202 5.21799C2.71569 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2V9M6 5H18M18 5H18.8C19.9201 5 20.4802 5 20.908 5.21799C21.2843 5.40973 21.5903 5.71569 21.782 6.09202C22 6.51984 22 7.07989 22 8.2V9M18 5V5.8C18 6.9201 18 7.48016 18.218 7.90798C18.4097 8.28431 18.7157 8.59027 19.092 8.78201C19.5198 9 20.0799 9 21.2 9H22M6 19V18.2C6 17.0799 6 16.5198 5.78201 16.092C5.59027 15.7157 5.28431 15.4097 4.90798 15.218C4.48016 15 3.9201 15 2.8 15H2M6 19H5.2C4.0799 19 3.51984 19 3.09202 18.782C2.71569 18.5903 2.40973 18.2843 2.21799 17.908C2 17.4802 2 16.9201 2 15.8V15M6 19H18M18 19H18.8C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V15M18 19V18.2C18 17.0799 18 16.5198 18.218 16.092C18.4097 15.7157 18.7157 15.4097 19.092 15.218C19.5198 15 20.0799 15 21.2 15H22M2 15V9M22 15V9M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picashstroke;
