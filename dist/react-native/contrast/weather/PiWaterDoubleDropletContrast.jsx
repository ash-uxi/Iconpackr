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
 * Piwaterdoubledropletcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwaterdoubledropletcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "water double droplet icon",
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
    <path d="M16.62 7.755C15.5 6.271 13.987 4.682 12 3-.083 13.224 5.36 19.992 10.775 20.896" />
    <path
      fill={color}
      fillRule="evenodd"
      d="M17.078 8.396c.086.126.003.299-.147.327a3 3 0 0 0-1.455.729c-3.445 3.137-5.136 6.56-4.256 9.808.123.454.29.876.492 1.265.109.21-.038.472-.274.453C5.834 20.543-.584 13.644 11.996 3c2.277 1.927 3.932 3.731 5.082 5.396m.422 3.274c6.262 5.704 2.752 9.333 0 9.333s-6.262-3.63 0-9.333"
      clipRule="evenodd"
      opacity={0.28}
    />
    <path d="M17.5 11.67c6.262 5.704 2.752 9.333 0 9.333s-6.262-3.63 0-9.333" />
  </Svg>
);

export default Piwaterdoubledropletcontrast;
