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
 * Piinboxdefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piinboxdefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "inbox default icon",
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
      d="M10 20h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 16.2 22 14.8 22 12v-.15c0-.317 0-.475-.024-.63a2 2 0 0 0-.048-.22h-5.005a.923.923 0 0 0-.923.923c0 1.7-1.378 3.077-3.077 3.077h-1.846A3.077 3.077 0 0 1 8 11.923.923.923 0 0 0 7.077 11H2.072a2 2 0 0 0-.048.22C2 11.376 2 11.534 2 11.85V12c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 20 7.2 20 10 20"
      opacity={0.28}
    />
    <path d="M21.928 11h-5.005a.923.923 0 0 0-.923.923c0 1.7-1.378 3.077-3.077 3.077h-1.846A3.077 3.077 0 0 1 8 11.923.923.923 0 0 0 7.077 11H2.072m19.856 0a2 2 0 0 0-.059-.18c-.055-.146-.134-.283-.29-.558l-1.736-3.037c-.671-1.175-1.007-1.762-1.479-2.19a4 4 0 0 0-1.444-.838C16.315 4 15.639 4 14.286 4H9.714c-1.353 0-2.029 0-2.634.197a4 4 0 0 0-1.444.839c-.472.427-.808 1.014-1.479 2.189l-1.735 3.037c-.157.275-.236.412-.291.558a2 2 0 0 0-.06.18m19.857 0a2 2 0 0 1 .048.22c.024.155.024.313.024.63V12c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12v-.15c0-.317 0-.475.024-.63a2 2 0 0 1 .048-.22" />
  </Svg>
);

export default Piinboxdefaultcontrast;
