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
 * Picryptocurrencyusdtdiamondstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptocurrencyusdtdiamondstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto currency usdt diamond icon",
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
      d="M8.42472 8H12M12 8H15.5753M12 8V11M12 14C14.7614 14 17 13.3284 17 12.5C17 11.6716 14.7614 11 12 11M12 14C9.23858 14 7 13.3284 7 12.5C7 11.6716 9.23858 11 12 11M12 14V17M12 11V11.5M7.40794 4H16.5921C17.4459 4 18.2433 4.42674 18.7169 5.13719L21.5711 9.41838C22.2434 10.4269 22.1142 11.769 21.2619 12.6307L13.8157 20.1597C12.8162 21.1703 11.1838 21.1703 10.1843 20.1597L2.73807 12.6307C1.88578 11.769 1.75663 10.4269 2.42895 9.41838L5.28307 5.13719C5.75671 4.42674 6.55408 4 7.40794 4Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picryptocurrencyusdtdiamondstroke;
