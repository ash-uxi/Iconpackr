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
 * Pihomealtduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pihomealtduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "home alt icon",
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
      d="M16 19.994V16a4 4 0 0 0-8 0v3.994Q8.445 20 9 20h1v-4a2 2 0 1 1 4 0v4h1q.555 0 1-.006"
      fill="none"
    />
    <path
      d="M20.881 10.757a4 4 0 0 0-.513-1.19c-.265-.414-.634-.763-1.374-1.461l-2.6-2.456c-1.546-1.46-2.32-2.19-3.201-2.466a4 4 0 0 0-2.386 0c-.882.275-1.655 1.006-3.201 2.466l-2.6 2.456c-.74.698-1.11 1.047-1.374 1.46a4 4 0 0 0-.513 1.191"
      fill="none"
    />
    <path
      d="M21 14.6v-1.841c0-1.017 0-1.526-.119-2.002a4 4 0 0 0-.513-1.19c-.265-.414-.634-.763-1.374-1.461l-2.6-2.456c-1.546-1.46-2.32-2.19-3.201-2.466a4 4 0 0 0-2.386 0c-.882.275-1.655 1.006-3.201 2.466l-2.6 2.456c-.74.698-1.11 1.047-1.374 1.46a4 4 0 0 0-.513 1.191C3 11.233 3 11.742 3 12.76V14.6c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.803.41 1.84.434 3.816.436h6c1.977-.002 3.013-.027 3.816-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pihomealtduostroke;
