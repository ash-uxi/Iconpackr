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
 * Piballcricketcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piballcricketcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ball cricket icon",
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
    <path d="M14.368 3.162a9.15 9.15 0 0 1 6.47 11.206 9.15 9.15 0 0 1-8.178 6.76m1.708-17.966a9.15 9.15 0 1 0-4.736 17.676m4.736-17.676L9.632 20.838m0 0a9.1 9.1 0 0 0 3.028.29M16.968 5.05l-.259.966m-.776 2.898-.259.966m-.776 2.897-.26.966m-.776 2.898-.258.966M9.62 9.292l-.26.966m1.295-4.83-.259.966m-1.812 6.761-.258.966m-.777 2.898-.259.966m5.537 2.519-.167.625" />
    <path
      fill={color}
      d="M14.368 3.162a9.15 9.15 0 0 1 6.47 11.206 9.15 9.15 0 0 1-8.178 6.76 9.15 9.15 0 1 1 1.709-17.967"
      opacity={0.28}
    />
  </Svg>
);

export default Piballcricketcontrast;
