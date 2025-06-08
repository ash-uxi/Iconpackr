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
 * Pipaperbagcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipaperbagcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "paper bag icon",
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
      fill={color}
      d="M14.372 21H9.628c-2.621 0-3.932 0-4.86-.536a4 4 0 0 1-1.76-2.096c-.366-1.008-.138-2.298.318-4.88l.858-4.861c.29-1.645.435-2.468.851-3.084a3.5 3.5 0 0 1 1.478-1.24C7.193 4 8.028 4 9.698 4h4.604c1.67 0 2.506 0 3.185.303a3.5 3.5 0 0 1 1.478 1.24c.416.616.561 1.439.852 3.084l.857 4.86c.456 2.583.684 3.873.317 4.88a4 4 0 0 1-1.758 2.097c-.929.536-2.24.536-4.861.536"
      opacity={0.28}
    />
    <path d="M15 8a3 3 0 1 1-6 0m.698-4h4.604c1.67 0 2.506 0 3.185.303a3.5 3.5 0 0 1 1.478 1.24c.416.616.561 1.439.852 3.084l.857 4.86c.456 2.583.684 3.873.317 4.88a4 4 0 0 1-1.758 2.097c-.929.536-2.24.536-4.861.536H9.628c-2.621 0-3.932 0-4.86-.536a4 4 0 0 1-1.76-2.096c-.366-1.008-.138-2.298.318-4.88l.858-4.861c.29-1.645.435-2.468.851-3.084a3.5 3.5 0 0 1 1.478-1.24C7.193 4 8.028 4 9.698 4" />
  </Svg>
);

export default Pipaperbagcontrast;
