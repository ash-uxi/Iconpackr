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
 * Pichecktickcirclebrokenstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichecktickcirclebrokenstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "check tick circle broken icon",
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
      d="M21.0347 5.40332L20.2423 5.94449C17.0371 8.13349 14.3705 11.0217 12.4437 14.3913L12.0843 15.0198L8.60958 11M21.0002 10.3363C21.6143 13.6712 20.3426 17.2187 17.4293 19.3658C13.3614 22.364 7.63321 21.4968 4.63507 17.4288C1.63692 13.3609 2.50414 7.63272 6.57207 4.63458C9.48533 2.48744 13.2501 2.32277 16.2538 3.89642"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pichecktickcirclebrokenstroke;
