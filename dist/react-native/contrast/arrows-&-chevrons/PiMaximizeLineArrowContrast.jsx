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
 * Pimaximizelinearrowcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimaximizelinearrowcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "maximize line arrow icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M19.916 4.647a20.6 20.6 0 0 1-.2 5.296L18.29 8.28a24 24 0 0 0-2.567-2.566L14.06 4.286a20.6 20.6 0 0 1 5.296-.2.62.62 0 0 1 .56.56M4.086 19.353a20.6 20.6 0 0 1 .2-5.296l1.428 1.663c.79.919 1.647 1.777 2.566 2.566l1.663 1.428a20.6 20.6 0 0 1-5.296.2.62.62 0 0 1-.56-.56" />
    </g>
    <path d="M6.949 17.052a24 24 0 0 1-1.235-1.332l-1.428-1.663a20.6 20.6 0 0 0-.2 5.296.62.62 0 0 0 .56.56c1.755.163 3.535.096 5.297-.199L8.28 18.286q-.69-.592-1.331-1.235m0 0L17.053 6.947m0 0q.642.643 1.236 1.333l1.428 1.663a20.6 20.6 0 0 0 .2-5.296.62.62 0 0 0-.56-.56 20.6 20.6 0 0 0-5.297.199l1.662 1.428q.69.592 1.33 1.233" />
  </Svg>
);

export default Pimaximizelinearrowcontrast;
