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
 * Piwalletrefreshduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwalletrefreshduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "wallet refresh icon",
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
      d="M2 14.5V11C2 8.19974 2 6.79961 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.79961 3 7.19974 3 10 3H13.5C14.8978 3 15.5967 3 16.1481 3.22836C16.8831 3.53284 17.4672 4.11687 17.7716 4.85195C17.979 5.35251 17.9981 5.97475 17.9998 7.1313M2 14.5C2 15.8297 2 16.9946 2.3806 17.9134C2.88807 19.1386 3.86144 20.1119 5.08658 20.6194C5.8139 20.9207 6.69536 20.9835 8.18665 20.9966M2 14.5C2 12.1703 2 11.0054 2.3806 10.0866C2.88807 8.86144 3.86144 7.88807 5.08658 7.3806C6.00544 7 7.17029 7 9.5 7H14.5C16.1339 7 17.1949 7 17.9998 7.1313M17.9998 7.1313C18.3426 7.18721 18.639 7.26693 18.9134 7.3806C20.1386 7.88807 21.1119 8.86144 21.6194 10.0866C21.7932 10.5061 21.8876 10.9769 21.9389 11.5865"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M22.2948 15.5698C22.1688 16.3826 21.943 17.1763 21.623 17.9329C21.5454 18.1165 21.3626 18.2286 21.1683 18.2192M18.7649 17.4512C19.5098 17.7997 20.2945 18.0549 21.1011 18.2111C21.1236 18.2154 21.146 18.2181 21.1683 18.2192M15.6034 19.6818C14.8496 19.3529 14.0584 19.1185 13.2481 18.9834C13.2329 18.9809 13.2178 18.9792 13.2028 18.9781M12.124 21.6551C12.2287 20.8393 12.4336 20.04 12.7336 19.2752C12.8092 19.0826 12.9999 18.9641 13.2028 18.9781M21.1683 18.2192C21.142 17.944 21.0866 17.6673 21.0002 17.393C20.3359 15.2861 18.0894 14.1166 15.9825 14.7809C15.4788 14.9397 15.0287 15.189 14.6444 15.5051M13.2028 18.9781C13.2293 19.2515 13.2845 19.5262 13.3704 19.7986C14.0347 21.9055 16.2812 23.075 18.3881 22.4107C18.8962 22.2505 19.3498 21.9982 19.7363 21.6781"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piwalletrefreshduostroke;
