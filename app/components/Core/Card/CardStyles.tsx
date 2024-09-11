import styled, { css } from 'styled-components';

export const cardWrapperStyles = css`
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 24px;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
`;

export const contentStyles = css`
  display: flex;
  gap: 16px;
  padding: 10px 10px;
`;

export const colorStyles = (color: string) => {
  switch (color) {
    case 'primary':
      return css`
        color: #fff;
        background-color: var(--color-primary);
      `;
    case 'secondary':
      return css`
        color: #fff;
        background-color: var(--color-secondary);
      `;
    case 'white':
      return css`
        color: var(--color-gray);
        background-color: #fff;
        border: 1px solid var(--color-gray-light);
      `;
    default:
      return null;
  }
};

export const titleStyles = css`
  font-size: var(--size-text-title-h5);
  font-weight: bold;
`;

export const imageWrapperStyles = css`
  position: relative;
  display: flex;
  max-width: 250px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 764px) {
    width: 250px;
  }

  @media only screen and (max-width: 764px) {
    width: 100%; /* Adjust the width as needed */
  }
`;

export const CardWrapper = styled.div<{ color: string }>`
  ${cardWrapperStyles}
  ${(props) => colorStyles(props.color)}
`;

export const ContentWrapper = styled.div`
  ${contentStyles}
  flex-direction: column;
`;

export const Title = styled.h4`
  ${titleStyles}
`;

export const ImageWrapper = styled.div`
  ${imageWrapperStyles}
`;


export const TextMedium = styled.p`
  font-size: var(--size-text-medium);
`;

export const TextDanger = styled.span`
  color: var(--color-danger);
`;

export const TextBold = styled.span`
  font-weight: bold;
`;

export const CardContentWrapper = styled.div`
  ${contentStyles}
  padding: 20px;
`;


export const CardImageWrapper = styled.div`
  ${imageWrapperStyles}
`;

export const HomeCardContentWrapper = styled.div`
  ${contentStyles}
`;

export const HomeText = styled.p`
  font-size: var(--size-text-medium);
`;