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
 * Piuseruser03solid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuseruser03solid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user user03 icon",
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
      d="M10.1115 13.9161C6.66176 12.9597 3.25 15.5543 3.25 19.1341C3.25 20.5789 4.4212 21.7501 5.86595 21.7501H18.1341C19.5788 21.7501 20.75 20.5789 20.75 19.1341C20.75 15.5543 17.3382 12.9597 13.8885 13.9161L13.1926 14.109C12.4122 14.3253 11.5878 14.3253 10.8074 14.109L10.1115 13.9161Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piuseruser03solid;
