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
 * Piarrowbiguprightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbiguprightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big up right icon",
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
      d="M9.19116 4.90963C12.2097 4.45769 15.2673 4.39834 18.2876 4.7321C18.5467 4.76073 18.7775 4.87633 18.9507 5.04954C19.124 5.22276 19.2396 5.45358 19.2682 5.71268C19.602 8.73302 19.5426 11.7906 19.0907 14.8091"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.19121 4.90918C10.2409 5.74073 11.2621 6.60618 12.2533 7.50398L5.23644 14.5208C4.84043 14.9168 4.64242 15.1148 4.56823 15.3432C4.50297 15.544 4.50297 15.7604 4.56823 15.9612C4.64242 16.1895 4.84043 16.3875 5.23644 16.7835L7.21634 18.7634C7.61236 19.1595 7.81037 19.3575 8.0387 19.4317C8.23954 19.4969 8.45589 19.4969 8.65673 19.4317C8.88506 19.3575 9.08307 19.1595 9.47908 18.7634L16.4959 11.7466C17.3937 12.7378 18.2592 13.759 19.0907 14.8087"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowbiguprightduostroke;
