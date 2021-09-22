import React from 'react';
import styled from 'styled-components';
import { Send } from 'react-feather';

import { Button } from 'components/Toolkit/Button/Button';

interface IContactForm {
  className?: string;
}

const Wrapper = styled.div`
  max-width: 556px;
  padding: ${({ theme }) => theme.spacing.S8};
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHT};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  box-shadow: ${({ theme }) => theme.shadow.drop};
`;

const Header = styled.div`
  ${({ theme }) => theme.fontSize.F1424};
  padding: ${({ theme }) => `${theme.spacing.S16} ${theme.spacing.S12}`};
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  box-shadow: ${({ theme }) => theme.shadow.drop};
  margin-bottom: ${({ theme }) => theme.spacing.S28};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${({ theme }) => theme.fontSize.F1824};
  color: ${({ theme }) => theme.colors.WHITE};
  margin-bottom: ${({ theme }) => theme.spacing.S4};
`;

const TextField = styled.input`
  ${({ theme }) => theme.fontSize.F1824};
  padding: ${({ theme }) => `${theme.spacing.S12} ${theme.spacing.S8}`};
  margin-bottom: ${({ theme }) => theme.spacing.S12};
  background-color: ${({ theme }) => theme.colors.BLUE_DARK};
  color: ${({ theme }) => theme.colors.WHITE};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.all4};
  box-shadow: ${({ theme }) => theme.shadow.inset};
`;

const TextArea = styled.textarea`
  ${({ theme }) => theme.fontSize.F1824};
  min-height: 120px;
  max-height: 200px;
  padding: ${({ theme }) => `${theme.spacing.S12} ${theme.spacing.S8}`};
  margin-bottom: ${({ theme }) => theme.spacing.S12};
  resize: vertical;
  background-color: ${({ theme }) => theme.colors.BLUE_DARK};
  color: ${({ theme }) => theme.colors.WHITE};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.all4};
  box-shadow: ${({ theme }) => theme.shadow.inset};
`;

const SButton = styled(Button)`
  align-self: flex-end;
  width: 50%;
`;

function ContactForm({ className }: IContactForm) {
  return (
    <Wrapper className={className}>
      <Header>
        Get in touch with the Tallaght Rehabilitation Project for more
        information on our services
      </Header>
      <Form>
        <Label>Name</Label>
        <TextField />
        <Label>Email</Label>
        <TextField />
        <Label>Your message</Label>
        <TextArea />
        <SButton icon={<Send />}>Send</SButton>
      </Form>
    </Wrapper>
  );
}

export { ContactForm };
