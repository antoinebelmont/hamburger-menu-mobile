
import styled from "styled-components";
import { device } from "./devices";
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
@media ${device.laptop} {
    padding: 0px 2.76vw;
  }
`;
export const StyledLogo = styled.img`
  height: 4.8vw;
@media ${device.laptop} {
    height: 1.8vw;
    padding-left: 0px;
  }
`;