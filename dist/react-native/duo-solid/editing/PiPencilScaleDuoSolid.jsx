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
 * Pipencilscaleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipencilscaleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pencil scale icon",
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
    <g fill={color || "#000"} opacity={0.28}>
      {" "}
      <path d="M5.988.792a1 1 0 0 0-1.43.019L2.932 2.519l-.044.046c-.184.193-.375.393-.517.633-.124.21-.216.438-.271.675-.064.272-.064.549-.064.815v.064L2 21.022a2.38 2.38 0 0 0 1.88 2.332 6.55 6.55 0 0 0 2.71.009l.06-.013.091-.02a2.41 2.41 0 0 0 1.86-2.371L8.635 4.78v-.066c.001-.276.002-.563-.065-.844a2.4 2.4 0 0 0-.287-.696c-.152-.246-.356-.449-.55-.642l-.048-.047zM15.162 1c-.528 0-.982 0-1.357.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C11 4.18 11 4.635 11 5.161V18.84c0 .527 0 .982.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.357.031h2.677c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356V5.16c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A18 18 0 0 0 17.838 1z" />{" "}
    </g>{" "}
    <path d="M12 18h4m-4-8h4m-4-4h3m-3 8h3M7.598 9l.038-4.222c0-.343.001-.515-.037-.676a1.4 1.4 0 0 0-.168-.405c-.086-.141-.208-.262-.45-.504L5.282 1.5 3.657 3.208c-.229.24-.343.36-.425.499a1.4 1.4 0 0 0-.158.394c-.037.156-.037.322-.038.653l-.038 4.271" />
  </Svg>
);

export default Pipencilscaleduosolid;
