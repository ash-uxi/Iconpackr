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
 * Pivideocalloutgoingsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivideocalloutgoingsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "video call outgoing icon",
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
      d="M13 4C15.1654 4 17.009 5.37697 17.7041 7.30273L18.0703 6.99512C20.0221 5.35561 23 6.74296 23 9.29199V14.708C23 17.2571 20.0221 18.6443 18.0703 17.0049L17.7041 16.6973C17.009 18.623 15.1654 20 13 20H6C3.23857 20 1 17.7614 1 15V9C1 6.23858 3.23858 4 6 4H13ZM11.9043 8.04395C10.9217 7.97151 9.93411 7.98931 8.9541 8.09863L8.46484 8.16113C7.91831 8.23942 7.53812 8.74636 7.61621 9.29297C7.68978 9.80528 8.14013 10.1712 8.64648 10.1504L8.74805 10.1406C9.3567 10.0537 9.96974 10.0093 10.583 10.0029L6.29297 14.29L6.22461 14.3652C5.90402 14.7579 5.92691 15.3378 6.29297 15.7041C6.65887 16.0698 7.23814 16.0932 7.63086 15.7734L7.70703 15.7041L11.998 11.416C11.9932 11.8861 11.9662 12.3563 11.9141 12.8242L11.8594 13.252C11.7815 13.7985 12.1614 14.3057 12.708 14.3838C13.2203 14.4568 13.6971 14.1273 13.8193 13.6357L13.8389 13.5352C14.0249 12.2326 14.05 10.9125 13.9131 9.60547L13.8906 9.45703C13.8246 9.1169 13.6579 8.81224 13.4229 8.57715C13.1542 8.30857 12.7951 8.12984 12.3955 8.08789L11.9043 8.04395ZM21 9.29199C21 8.44232 20.007 7.97986 19.3564 8.52637L18.3564 9.36621C18.1437 9.54505 18.0153 9.80407 18.001 10.0801V13.9141C18.0139 14.1922 18.1423 14.4538 18.3564 14.6338L19.3564 15.4736C20.0071 16.0202 21 15.5577 21 14.708V9.29199Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pivideocalloutgoingsolid;
