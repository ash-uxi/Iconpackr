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
 * Pimartiniglasssolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimartiniglasssolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "martini glass icon",
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
      d="M3.00003 3C2.59557 3 2.23093 3.24364 2.07615 3.61732C1.92137 3.99099 2.00692 4.42111 2.29292 4.70711L11 13.4142V20H7.00003C6.44774 20 6.00003 20.4477 6.00003 21C6.00003 21.5523 6.44774 22 7.00003 22H17.5C18.0523 22 18.5 21.5523 18.5 21C18.5 20.4477 18.0523 20 17.5 20H13V13.4142L21.7071 4.70711C21.9931 4.42111 22.0787 3.99099 21.9239 3.61732C21.7691 3.24364 21.4045 3 21 3H3.00003ZM17.553 6.03285C13.8566 6.32181 10.1434 6.32181 6.44709 6.03285L5.41424 5H18.5858L17.553 6.03285Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pimartiniglasssolid;
