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
 * Piclockoffstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclockoffstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "clock off icon",
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
      d="M12 8V12M12 12L18.4701 5.52991M12 12L5.53003 18.47M22 2L18.4701 5.52991M18.4701 5.52991C16.8143 3.87411 14.5268 2.84998 12.0001 2.84998C6.94669 2.84998 2.8501 6.94657 2.8501 12C2.8501 14.5267 3.87423 16.8141 5.53003 18.47M5.53003 18.47L2 22M9.00521 20.6486C9.94357 20.9735 10.9512 21.15 12.0001 21.15C17.0535 21.15 21.1501 17.0534 21.1501 12C21.1501 10.9511 20.9736 9.94345 20.6487 9.00508M14.7884 14.8654L15 15"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piclockoffstroke;
