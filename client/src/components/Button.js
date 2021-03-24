import styled from 'styled-components'
import { BORDER_RADIUS, FONT_SIZES, INV_TEXT_COLOR, MARGIN, PADDING, PADDING_EVEN, PRIMARY_COLOR } from '../styles'

const Button = styled.button`
  background: ${props => props.primary ? PRIMARY_COLOR : INV_TEXT_COLOR};
  color: ${props => props.primary ?  INV_TEXT_COLOR : PRIMARY_COLOR};
  font-size: ${FONT_SIZES.MEDIUM};
  padding: ${PADDING_EVEN};
  border: 2px solid ${PRIMARY_COLOR} !important;
  border-radius: ${BORDER_RADIUS};

  &:hover {
    background: ${props => props.primary ? INV_TEXT_COLOR : PRIMARY_COLOR};
    color: ${props => props.primary ?   PRIMARY_COLOR : INV_TEXT_COLOR};
    cursor: pointer; 
  }
`

export default Button