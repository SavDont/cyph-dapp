import { Typography } from "antd";
import styled from "styled-components";
import { Stack } from "@cosmicdapp/design";

const { Text } = Typography;

export const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s9);
  }
`;

export const WelcomeStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }
`;

export const PasswordStack = styled(Stack)`
  & > * {
    --gap: var(--s4);
  }
`;

export const LightText = styled(Text)`
  display: block;
  font-weight: lighter;
`;

export const ErrorText = styled(Text)`
  color: var(--color-red);
`;
