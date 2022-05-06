//Styled-components
import styled from "styled-components";

const DescContent = () => {
  return (
    <Wrapper>
      <StyledText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione veniam
        magni quae, non quis earum reprehenderit voluptas eligendi! Ipsa ullam,
        ea deleniti fugit rerum quis odio delectus suscipit id. Enim ut iusto
        dolor facere deserunt, libero animi, maxime dolorum eaque quasi quae
        molestiae expedita harum nam. In iste animi maxime.
      </StyledText>
      <StyledText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi rerum
        in ratione, culpa fugiat fuga magnam ullam. Eos itaque deserunt cumque
        quod necessitatibus, at cum odio. Voluptatibus velit perferendis, ad
        omnis pariatur iure, nihil nobis tempore, soluta consequuntur ipsam
        quaerat expedita nesciunt vel mollitia doloremque corrupti. Quia debitis
        sit in?
      </StyledText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  padding: 10px;
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.text.homeText};
  font-size: ${({ theme }) => theme.font.size.small};
  text-align: justify;
  line-height: 25.2px;
`;

export { DescContent };
