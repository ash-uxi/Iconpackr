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
 * Piusercheckcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piusercheckcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user check icon",
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
      <path d="M11 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M7 14h1.659l2.382 1.172a3 3 0 0 0 .839 2.617l2.341 2.338q.057.057.116.11L13.469 22H5a3 3 0 0 1-3-3 5 5 0 0 1 5-5" />
    </g>
    <path d="M10.051 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h8.684M14 15.666l2.341 2.339C17.49 15.997 19.093 14.303 21 13m-6-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </Svg>
);

export default Piusercheckcontrast;
