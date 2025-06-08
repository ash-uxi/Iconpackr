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
 * Pichevronupsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronupsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron up icon",
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
      d="M12.925 9.32681C14.3879 10.5043 15.6927 11.8765 16.8055 13.4074C16.9425 13.5934 17.0161 13.8275 16.9972 14.0759C16.9553 14.6266 16.4749 15.039 15.9242 14.9971C13.3119 14.7983 10.6882 14.7983 8.07593 14.9971C7.52524 15.039 7.04484 14.6266 7.00293 14.0759C6.98403 13.8275 7.05757 13.5934 7.19456 13.4074C8.30737 11.8765 9.61223 10.5044 11.0751 9.32681C11.6165 8.89106 12.3836 8.89106 12.925 9.32681Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pichevronupsolid;
