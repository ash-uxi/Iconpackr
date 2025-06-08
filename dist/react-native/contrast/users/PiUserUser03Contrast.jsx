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
 * Piuseruser03contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuseruser03contrast = ({
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
    <path fill={color} d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" opacity={0.28} />
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
    <path
      fill={color}
      d="M5.866 21h12.268c1.03 0 1.866-.835 1.866-1.866 0-3.084-2.94-5.32-5.911-4.495l-.696.193a5.2 5.2 0 0 1-2.786 0l-.696-.193C6.94 13.815 4 16.05 4 19.134 4 20.164 4.835 21 5.866 21"
      opacity={0.28}
    />
    <path d="M5.866 21h12.268c1.03 0 1.866-.835 1.866-1.866 0-3.084-2.94-5.32-5.911-4.495l-.696.193a5.2 5.2 0 0 1-2.786 0l-.696-.193C6.94 13.815 4 16.05 4 19.134 4 20.164 4.835 21 5.866 21" />
  </Svg>
);

export default Piuseruser03contrast;
