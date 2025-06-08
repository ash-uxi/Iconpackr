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
 * Pipursebagremovestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipursebagremovestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "purse bag remove icon",
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
      d="M8.00012 7.01576C8.41692 7 8.91381 7 9.52725 7H14.473C15.0864 7 15.5833 7 16.0001 7.01576M8.00012 7.01576C7.32003 7.04146 6.85317 7.10912 6.44115 7.28717C5.85507 7.54044 5.34944 7.94921 4.97898 8.46921C4.55895 9.05881 4.38982 9.84808 4.05156 11.4266L3.65891 13.259C3.09121 15.9083 2.80736 17.2329 3.15552 18.2714C3.46084 19.1822 4.08367 19.9526 4.9102 20.442C5.85273 21 7.20743 21 9.91684 21H14.0834C16.7928 21 18.1475 21 19.09 20.442C19.9166 19.9526 20.5394 19.1822 20.8447 18.2714C21.1929 17.2329 20.909 15.9083 20.3413 13.259L19.9487 11.4266C19.6104 9.84808 19.4413 9.05881 19.0213 8.46921C18.6508 7.94921 18.1452 7.54044 17.5591 7.28717C17.1471 7.10912 16.6802 7.04146 16.0001 7.01576M8.00012 7.01576C8.00012 4.82986 9.80766 3 12.0001 3C14.1926 3 16.0001 4.82986 16.0001 7.01576M8.99996 14H15"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipursebagremovestroke;
