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
 * Pibumblestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibumblestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bumble icon",
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
      d="M7.0829 12H17.0829M10.0829 16.0446H14.0829M9.0829 8H15.0829M2.61436 13.6L5.96299 19.4C6.29952 19.9829 6.46779 20.2743 6.70319 20.4863C6.91148 20.6738 7.15686 20.8155 7.42342 20.9021C7.72468 21 8.06121 21 8.73427 21H15.4315C16.1046 21 16.4411 21 16.7424 20.9021C17.009 20.8155 17.2543 20.6738 17.4626 20.4863C17.698 20.2743 17.8663 19.9829 18.2028 19.4L21.5514 13.6C21.888 13.0171 22.0562 12.7257 22.1221 12.4158C22.1804 12.1417 22.1804 11.8583 22.1221 11.5842C22.0562 11.2743 21.888 10.9829 21.5514 10.4L18.2028 4.6C17.8663 4.01711 17.698 3.72567 17.4626 3.51371C17.2543 3.32617 17.009 3.1845 16.7424 3.09789C16.4411 3 16.1046 3 15.4315 3L8.73427 3C8.06121 3 7.72468 3 7.42342 3.09789C7.15686 3.1845 6.91148 3.32617 6.70319 3.51371C6.46779 3.72567 6.29952 4.01711 5.96299 4.6L2.61436 10.4C2.27783 10.9829 2.10956 11.2743 2.0437 11.5842C1.98543 11.8583 1.98543 12.1417 2.0437 12.4158C2.10956 12.7257 2.27783 13.0171 2.61436 13.6Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibumblestroke;
