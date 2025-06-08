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
 * Pitshirtdefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitshirtdefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "t shirt default icon",
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
    <path d="m6 10-3 1-1.5-5L8 3l1.09.272a12 12 0 0 0 5.82 0L16 3l6.5 3-1.5 5-3-1" />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M7.58 2.092a1 1 0 0 1 .663-.062l1.09.272a11 11 0 0 0 5.335 0l1.09-.272a1 1 0 0 1 .66.062l6.5 3a1 1 0 0 1 .54 1.195l-1.5 5a1 1 0 0 1-1.274.662L19 11.387V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.613l-1.684.562a1 1 0 0 1-1.274-.662l-1.5-5a1 1 0 0 1 .54-1.195zm.995 2.052.515.128a12 12 0 0 0 5.82 0l.515-.128c.186-.047.315.162.18.297a5.125 5.125 0 0 1-7.21 0c-.135-.135-.006-.344.18-.297"
      clipRule="evenodd"
      opacity={0.28}
    />
  </Svg>
);

export default Pitshirtdefaultduosolid;
