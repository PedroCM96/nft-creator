import styled from "styled-components";
import {theme} from "../../theme";

export const CssButtonWrapper = styled.div`
  display: flex;
  min-width: 100px;
  padding: 16px;
  justify-content: center;
  border: 1px solid ${theme.palette.tints.blue};
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.5s ease;

  &:hover {
    background: ${theme.palette.tints.blue};
    box-shadow:
    0 0 10px 5px ${theme.palette.tints.pink}, /* middle magenta */
    0 0 15px 3px ${theme.palette.tints.green}; /* outer cyan */
}
  }
`;

