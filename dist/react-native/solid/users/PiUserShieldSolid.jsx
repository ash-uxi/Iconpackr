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
 * Piusershieldsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piusershieldsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user shield icon",
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
      d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M12.9831 22C11.6678 20.5567 10.9173 18.6423 11.0072 16.5951L11.0343 15.9774C11.0664 15.2445 11.2908 14.5723 11.6528 14H8C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H12.9831Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M17.4725 17.4335L17.1381 17.5394C17.2203 17.719 17.3396 17.8905 17.497 18.0422C17.6513 17.8948 17.7694 17.7284 17.8522 17.5537L17.4725 17.4335Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M21.9394 15.992C21.8642 15.1351 21.2644 14.443 20.472 14.1922L18.1336 13.4521C17.704 13.3161 17.2411 13.3161 16.8115 13.4521L14.5056 14.1819C13.6834 14.4421 13.0716 15.1767 13.0324 16.07L13.0053 16.6876C12.9079 18.907 14.1664 20.9495 16.1834 21.9574L16.5096 22.1205C17.1088 22.4199 17.818 22.4267 18.4228 22.1396L18.7072 22.0045C20.8641 20.9806 22.1849 18.7887 21.9791 16.4443L21.9394 15.992Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piusershieldsolid;
