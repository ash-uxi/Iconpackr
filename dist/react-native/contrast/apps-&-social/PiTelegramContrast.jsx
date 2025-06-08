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
 * Pitelegramcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitelegramcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "telegram icon",
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
      d="m5.022 10.792 13.89-5.396c.772-.3 1.159-.45 1.443-.378a.9.9 0 0 1 .573.448c.133.254.065.653-.072 1.45l-1.558 9.082c-.237 1.38-.356 2.071-.73 2.456a1.82 1.82 0 0 1-1.253.546c-.545.014-1.154-.36-2.373-1.107l-2.586-1.587c-.776-.476-1.165-.714-1.332-1.035a1.27 1.27 0 0 1-.105-.91c.091-.348.416-.664 1.066-1.295l4.366-4.24-7.354 4.285c-.59.344-.884.515-1.201.609-.281.083-.575.12-.868.111-.332-.01-.662-.102-1.323-.286l-.445-.123c-1.231-.342-1.847-.513-2.03-.803a.85.85 0 0 1-.043-.827c.151-.307.746-.538 1.935-1"
      opacity={0.28}
    />
    <path d="m5.022 10.792 13.89-5.396c.772-.3 1.159-.45 1.443-.378a.9.9 0 0 1 .573.448c.133.254.065.653-.072 1.45l-1.558 9.082c-.237 1.38-.356 2.071-.73 2.456a1.82 1.82 0 0 1-1.253.546c-.545.014-1.154-.36-2.373-1.107l-2.586-1.587c-.776-.476-1.165-.714-1.332-1.035a1.27 1.27 0 0 1-.105-.91c.091-.348.416-.664 1.066-1.295l4.366-4.24-7.354 4.285c-.59.344-.884.515-1.201.609-.281.083-.575.12-.868.111-.332-.01-.662-.102-1.323-.286l-.445-.123c-1.231-.342-1.847-.513-2.03-.803a.85.85 0 0 1-.043-.827c.151-.307.746-.538 1.935-1" />
  </Svg>
);

export default Pitelegramcontrast;
