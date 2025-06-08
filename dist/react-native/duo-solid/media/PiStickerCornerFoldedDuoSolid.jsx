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
 * Pistickercornerfoldedduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistickercornerfoldedduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sticker corner folded icon",
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
      d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V8V8.2C22 9.05658 21.9992 9.63887 21.9624 10.089C21.9266 10.5274 21.8617 10.7516 21.782 10.908C21.5903 11.2843 21.2843 11.5903 20.908 11.782C20.7516 11.8617 20.5274 11.9266 20.089 11.9624C19.6389 11.9992 19.0566 12 18.2 12H16.2H16.1615C15.6343 12 15.1795 12 14.805 12.0306C14.4096 12.0629 14.0164 12.1342 13.638 12.327C13.0735 12.6146 12.6146 13.0735 12.327 13.638C12.1342 14.0164 12.0629 14.4096 12.0306 14.805C12 15.1795 12 15.6343 12 16.1614V16.2V18.2C12 19.0566 11.9992 19.6389 11.9624 20.089C11.9266 20.5274 11.8617 20.7516 11.782 20.908C11.5903 21.2843 11.2843 21.5903 10.908 21.782C10.7516 21.8617 10.5274 21.9266 10.089 21.9624C9.63887 21.9992 9.05658 22 8.2 22H8H7C4.23858 22 2 19.7614 2 17V7Z"
      fill={color || "#000"}
      opacity={0.28}
      fillRule="evenodd"
      clipRule="evenodd"
    />{" "}
    <path
      d="M21.988 13.4707C21.751 18.0663 18.0668 21.7505 13.4712 21.9875C13.5035 21.931 13.5345 21.8737 13.5641 21.8156C13.8114 21.3302 13.91 20.8135 13.9559 20.2514C14.0001 19.7102 14.0001 19.0459 14.0001 18.2409V18.1996V16.1996C14.0001 15.623 14.0009 15.2508 14.024 14.9674C14.0462 14.6958 14.0839 14.5951 14.1091 14.5456C14.205 14.3574 14.3579 14.2045 14.5461 14.1086C14.5956 14.0834 14.6963 14.0457 14.9679 14.0235C15.2513 14.0004 15.6235 13.9996 16.2001 13.9996H18.2001H18.2414C19.0464 13.9996 19.7107 13.9996 20.2519 13.9554C20.814 13.9095 21.3307 13.8109 21.8161 13.5636C21.8742 13.534 21.9315 13.503 21.988 13.4707Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Pistickercornerfoldedduosolid;
