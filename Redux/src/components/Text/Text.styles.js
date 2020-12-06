import styled from 'styled-components';

export const TextElement = styled.p`
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ fontColor }) => fontColor};
`;