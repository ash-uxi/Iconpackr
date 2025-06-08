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
 * Pipiechart01stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechart01stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart01 icon",
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
      d="M20.3349 15.5738C18.9393 18.7678 15.7522 21 12.0437 21C7.049 21 3 16.951 3 11.9563C3 8.24781 5.23216 5.06067 8.42622 3.66512M12.0437 4.26916V10.5997C12.0437 11.349 12.651 11.9563 13.4002 11.9563H19.7308C20.48 11.9563 21.0981 11.3454 20.987 10.6045C20.4006 6.692 17.308 3.59937 13.3955 3.01296C12.6546 2.90191 12.0437 3.51996 12.0437 4.26916Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipiechart01stroke;
