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
 * Pigitlabsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitlabsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "gitlab icon",
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
      d="M7.29998 2.60303C6.79617 1.12905 4.72488 1.1336 4.22693 2.60905L1.83495 9.69675C0.994621 12.1867 1.76836 14.9514 3.78688 16.6188L10.0562 21.7978C11.1872 22.7321 12.8109 22.7343 13.9444 21.8029L20.2006 16.6621C22.226 14.9978 23.0059 12.2306 22.1672 9.73648L19.7723 2.61399C19.2758 1.13717 17.2028 1.13131 16.6987 2.60625L14.9361 7.76314C14.9259 7.79303 14.9058 7.79734 14.9003 7.79734H9.09956C9.09404 7.79734 9.07394 7.79303 9.06372 7.76314L7.29998 2.60303Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pigitlabsolid;
