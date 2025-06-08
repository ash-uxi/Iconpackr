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
 * Piheartsupportduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheartsupportduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heart support icon",
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
      d="M11.2372 3.16591C9.48763 1.86399 7.32948 1.71178 5.45831 2.41938C2.99559 3.35068 1 5.77583 1 8.94432C1 12.8877 3.50811 16.1523 5.95649 18.3531C7.19833 19.4694 8.47187 20.3555 9.50746 20.9666C10.0249 21.2718 10.4936 21.5148 10.8789 21.6851C11.0707 21.7699 11.2537 21.842 11.4193 21.8947C11.5596 21.9394 11.7757 22.0001 12 22.0001C12.2987 22.0001 12.6163 21.8888 12.827 21.8074C13.0854 21.7076 13.389 21.5675 13.7213 21.3952C14.3879 21.0494 15.2148 20.55 16.0959 19.9177C17.4497 18.9461 18.9728 17.6307 20.2433 16.0342C20.0639 15.9929 19.8852 15.9472 19.7074 15.897C17.6701 15.3228 15.824 14.2003 14.3815 12.6726L14.029 13.0753C12.4429 14.8881 9.65494 14.983 7.94918 13.2824C6.45078 11.7885 6.30937 9.40893 7.62029 7.74808L11.2372 3.16591Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M21.4813 14.2317C22.3858 12.6734 23.0002 10.8919 23.0002 8.94436C23.0002 5.7773 21.0022 3.35471 18.5396 2.42423C17.2478 1.93614 15.819 1.85705 14.4825 2.28282L9.19041 8.98724C8.50852 9.85118 8.58207 11.089 9.3615 11.8661C10.2488 12.7507 11.699 12.7013 12.5241 11.7584L13.6394 10.4838C13.837 10.2579 14.1257 10.1327 14.4256 10.1428C14.7256 10.1529 15.0051 10.2972 15.1871 10.5359C16.4486 12.1901 18.237 13.4046 20.2502 13.972C20.6557 14.0864 21.0672 14.1728 21.4813 14.2317Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Piheartsupportduosolid;
