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
 * Pipencilerasereditswooshcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipencilerasereditswooshcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pencil eraser edit swoosh icon",
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
    <path d="M12 21c4.018-3.274 4.09 3.357 9-2m-2.384-9.884L20.5 7.222c.53-.533.662-1.356.258-2.006a6.3 6.3 0 0 0-1.932-1.965 1.57 1.57 0 0 0-1.964.212l-1.946 1.954m3.699 3.699L7.528 20.252c-.275.277-.413.415-.574.514a1.6 1.6 0 0 1-.46.19c-.183.045-.378.044-.767.044L3 20.995l.066-2.68c.01-.377.014-.565.06-.742q.06-.237.19-.445c.096-.155.228-.288.494-.555L14.917 5.417m3.699 3.699-3.699-3.699" />
    <path
      fill={color}
      d="M3.126 17.573c-.046.177-.05.365-.06.742L3 20.995 5.727 21c.39 0 .584 0 .767-.043q.246-.06.46-.191c.161-.1.299-.237.574-.514l12.973-13.03.061-.062c.5-.527.58-1.327.197-1.944a6.3 6.3 0 0 0-1.932-1.965 1.57 1.57 0 0 0-1.964.212L3.81 16.573c-.266.267-.398.4-.495.555q-.128.208-.19.445"
      opacity={0.28}
    />
  </Svg>
);

export default Pipencilerasereditswooshcontrast;
