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
 * Pieraserlinecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieraserlinecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "eraser line icon",
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
    <path d="m14.268 17.292-.907.908c-.302.301-.567.567-.807.8m1.714-1.708 3.932-3.931c1.27-1.27 1.905-1.905 2.143-2.638.21-.644.21-1.338 0-1.982-.238-.733-.873-1.368-2.143-2.638l-.303-.303c-1.27-1.27-1.905-1.905-2.638-2.143a3.2 3.2 0 0 0-1.982 0c-.732.238-1.368.873-2.638 2.143L6.708 9.732m7.56 7.56-7.56-7.56m0 0-.908.907c-1.27 1.27-1.905 1.906-2.143 2.638a3.2 3.2 0 0 0 0 1.982c.238.733.873 1.368 2.143 2.638l.303.303c.301.301.567.567.807.8h5.644m0 0H21" />
    <path
      fill={color}
      d="m17.897 5.8.303.303c1.27 1.27 1.905 1.905 2.143 2.638.21.644.21 1.338 0 1.982-.238.732-.873 1.368-2.143 2.638l-3.918 3.917-7.56-7.56L10.639 5.8c1.27-1.27 1.906-1.905 2.638-2.143a3.2 3.2 0 0 1 1.982 0c.733.238 1.368.873 2.638 2.143"
      opacity={0.28}
    />
  </Svg>
);

export default Pieraserlinecontrast;
