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
 * Pibulboffcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibulboffcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bulb off icon",
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
    <path d="M10.379 21h3.242M6.313 10.468c0-3.023 2.546-5.474 5.687-5.474s5.688 2.451 5.688 5.474c0 1.657-.766 3.142-1.974 4.146-.511.424-.95.95-1.117 1.593l-.227.875c-.14.537-.625.912-1.18.912h-2.38c-.555 0-1.04-.375-1.18-.912l-.227-.875c-.167-.643-.606-1.169-1.117-1.593-1.208-1.004-1.973-2.489-1.973-4.146" />
    <path
      fill={color}
      d="M12 4.994c-3.141 0-5.687 2.451-5.687 5.474 0 1.657.765 3.142 1.973 4.146.511.424.95.95 1.117 1.593l.227.875c.14.537.625.912 1.18.912h2.38c.555 0 1.04-.375 1.18-.912l.227-.875c.167-.643.606-1.169 1.117-1.593 1.208-1.004 1.973-2.489 1.973-4.146 0-3.023-2.546-5.474-5.687-5.474"
      opacity={0.28}
    />
  </Svg>
);

export default Pibulboffcontrast;
