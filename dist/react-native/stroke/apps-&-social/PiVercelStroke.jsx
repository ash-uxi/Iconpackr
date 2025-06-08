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
 * Pivercelstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivercelstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "vercel icon",
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
      d="M11.138 3.46564C11.5246 2.80833 12.4752 2.80833 12.8619 3.46564L21.1134 17.4933C21.5056 18.16 21.0249 19.0003 20.2515 19.0003H3.74834C2.97493 19.0003 2.49427 18.16 2.88641 17.4933L11.138 3.46564Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pivercelstroke;
