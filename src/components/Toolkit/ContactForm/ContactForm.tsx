import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Send } from 'react-feather';

import { Button } from 'components/Toolkit/Button/Button';
import { breakpoints } from 'styles/breakpoints';
interface IContactForm {
  id: string;
  onSubmit: (t: Record<string, unknown>) => void;
  clearForm: boolean;
  setClearForm: (t: boolean) => void;
  className?: string;
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.S8};
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHT};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  box-shadow: ${({ theme }) => theme.shadow.drop};
  ${breakpoints.medium} {
    padding: ${({ theme }) => theme.spacing.S16};
  }
`;

const Header = styled.div`
  ${({ theme }) => theme.fontSize.F1624};
  padding: ${({ theme }) => `${theme.spacing.S16} ${theme.spacing.S12}`};
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.GREY_DARK};
  border-radius: ${({ theme }) => theme.borderRadius.drop8};
  box-shadow: ${({ theme }) => theme.shadow.drop};
  margin-bottom: ${({ theme }) => theme.spacing.S28};

  ${breakpoints.medium} {
    ${({ theme }) => theme.fontSize.F1824};
    padding: ${({ theme }) => `${theme.spacing.S24} ${theme.spacing.S12}`};
    margin-bottom: ${({ theme }) => theme.spacing.S32};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${({ theme }) => theme.fontSize.F1824};
  color: ${({ theme }) => theme.colors.WHITE};
  margin-bottom: ${({ theme }) => theme.spacing.S4};
  ${breakpoints.medium} {
    ${({ theme }) => theme.fontSize.F2424};
    margin-bottom: ${({ theme }) => theme.spacing.S12};
  }
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
  ${breakpoints.medium} {
    margin-bottom: ${({ theme }) => theme.spacing.S24};
  }
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
  ${breakpoints.medium} {
    margin-bottom: ${({ theme }) => theme.spacing.S24};
  }
`;

const SButton = styled(Button)`
  align-self: flex-end;
  width: 50%;
`;

function ContactForm({
  id,
  onSubmit,
  clearForm,
  setClearForm,
  className,
}: IContactForm) {
  useEffect(() => {
    if (clearForm) {
      (document.getElementById(id) as HTMLFormElement).reset();
      setClearForm(false);
    }
  }, [clearForm]);

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const { name, email, message } = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    onSubmit({
      name: name.value,
      email: email.value,
      message: message.value,
    });
  }
  return (
    <Wrapper className={className}>
      <Header>
        Get in touch with the Tallaght Rehabilitation Project for more
        information on our services
      </Header>
      <Form id={id} onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <TextField
          id="name"
          name="name"
          type="text"
          inputMode="text"
          required
        />
        <Label htmlFor="email">Email</Label>
        <TextField
          id="email"
          name="email"
          type="text"
          inputMode="email"
          required
        />
        <Label htmlFor="message">Your message</Label>
        <TextArea id="message" name="message" required />
        <SButton icon={<Send />} type="submit">
          Send
        </SButton>
      </Form>
    </Wrapper>
  );
}

export { ContactForm };
