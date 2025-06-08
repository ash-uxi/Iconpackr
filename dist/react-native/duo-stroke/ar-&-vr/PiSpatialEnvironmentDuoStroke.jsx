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
 * Pispatialenvironmentduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispatialenvironmentduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "spatial environment icon",
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
      d="M17 21C17 19.3431 15.6569 18 14 18H10C8.34315 18 7 19.3431 7 21M14.5 12.5C14.5 13.8807 13.3807 15 12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 10 12 10C13.3807 10 14.5 11.1193 14.5 12.5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5 17.1343C4.66109 17.2186 4.32332 17.3092 3.98686 17.4059C3.82672 17.4519 3.66338 17.5009 3.33814 17.5985C3.29255 17.6122 3.26975 17.619 3.25197 17.6237C2.63314 17.7848 2.02416 17.3317 2.00067 16.6926C2 16.6743 2 16.6505 2 16.6029V4.39701C2 4.34941 2 4.32561 2.00067 4.30725C2.02416 3.66822 2.63314 3.21512 3.25197 3.37625C3.26975 3.38088 3.29255 3.38772 3.33814 3.40139C3.66377 3.49908 3.82662 3.54794 3.98686 3.59401C9.2229 5.09941 14.7771 5.09941 20.0131 3.59401C20.1734 3.54794 20.3362 3.49909 20.6619 3.40139C20.7074 3.38773 20.7303 3.38087 20.748 3.37625C21.3669 3.21512 21.9758 3.66822 21.9993 4.30725C22 4.32561 22 4.34941 22 4.39701V16.6029C22 16.6505 22 16.6743 21.9993 16.6926C21.9758 17.3317 21.3669 17.7848 20.748 17.6237C20.7302 17.619 20.7075 17.6122 20.6619 17.5985C20.3367 17.501 20.1733 17.4519 20.0131 17.4059C19.6767 17.3092 19.3389 17.2186 19 17.1343"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pispatialenvironmentduostroke;
