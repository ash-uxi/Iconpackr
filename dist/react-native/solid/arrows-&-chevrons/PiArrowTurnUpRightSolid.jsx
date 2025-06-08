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
 * Piarrowturnuprightsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnuprightsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn up right icon",
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
      d="M3 20C3 20.5523 3.44772 21 4 21C4.55229 21 5 20.5523 5 20L5 17C5 15.5834 5.00078 14.581 5.0648 13.7974C5.12787 13.0255 5.24729 12.5544 5.43597 12.184C5.81947 11.4314 6.43139 10.8195 7.18404 10.436C7.55435 10.2473 8.02552 10.1279 8.79744 10.0648C9.58104 10.0008 10.5834 10 12 10L14.6269 10C14.5978 10.6683 14.5396 11.3356 14.4522 12C14.3938 12.4433 14.3176 12.8886 14.1558 13.8307C14.0866 14.2332 14.2692 14.6373 14.6169 14.8515C14.9646 15.0656 15.4076 15.0468 15.7359 14.804C17.558 13.4565 19.1948 11.8821 20.6059 10.1204C20.8673 9.79402 21 9.39747 21 9C21 8.60253 20.8673 8.20598 20.6059 7.87957C19.1948 6.11788 17.558 4.54346 15.7359 3.19599C15.4076 2.95317 14.9646 2.93439 14.6169 3.14855C14.2692 3.36271 14.0866 3.76678 14.1558 4.16926C14.3176 5.11146 14.3938 5.55667 14.4522 6C14.5396 6.66444 14.5978 7.33174 14.6269 8L11.9563 8C10.5932 7.99999 9.50917 7.99999 8.63458 8.07144C7.73898 8.14462 6.9753 8.29768 6.27606 8.65396C5.14709 9.2292 4.2292 10.1471 3.65396 11.2761C3.29768 11.9753 3.14462 12.739 3.07144 13.6346C2.99999 14.5091 2.99999 15.5931 3 16.9561L3 20Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piarrowturnuprightsolid;
