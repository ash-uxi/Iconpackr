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
 * Pipencileditswooshcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipencileditswooshcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pencil edit swoosh icon",
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
    <path d="M12 21c4.018-3.274 4.09 3.357 9-2M3 20.995 5.727 21c.39 0 .584 0 .767-.043q.246-.06.46-.191c.161-.1.299-.237.574-.514l12.973-13.03c.53-.533.662-1.356.258-2.006a6.3 6.3 0 0 0-1.932-1.965 1.57 1.57 0 0 0-1.964.212L3.81 16.573c-.266.267-.398.4-.495.555q-.128.208-.19.445c-.045.177-.05.365-.059.742z" />
    <path
      fill={color}
      d="M3.126 17.573c-.046.177-.05.365-.06.742L3 20.995 5.727 21c.39 0 .584 0 .767-.043q.246-.06.46-.191c.161-.1.299-.237.574-.514l12.973-13.03.061-.062c.5-.527.58-1.327.197-1.944a6.3 6.3 0 0 0-1.932-1.965 1.57 1.57 0 0 0-1.964.212L3.81 16.573c-.266.267-.398.4-.495.555q-.128.208-.19.445"
      opacity={0.28}
    />
  </Svg>
);

export default Pipencileditswooshcontrast;
