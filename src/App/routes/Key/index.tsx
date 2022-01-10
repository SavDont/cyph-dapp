import React from "react";
import { useHistory } from "react-router-dom";
import { Typography } from "antd";

import { PageLayout } from "@cosmicdapp/design";

import { useEncrypt } from "../../encrypt";
import { MainStack, PasswordStack, LightText } from "../../style";
import { FormKey } from "./FormKey";
import { pathHome } from "../../paths";

const { Title } = Typography;

export function Key(): JSX.Element {
    const encrypt = useEncrypt();

    const history = useHistory();

    return (
        <PageLayout>
            <MainStack>
                <PasswordStack>
                    <Title level={2}>CYPH</Title>
                    <LightText>Please enter your master key below.</LightText> 
                    <LightText>This will be used to encrypt and decrypt your passwords commited to the blockchain.</LightText>
                    <FormKey
                        setKey = { encrypt.setKey }
                        submitButtonAction = { () => history.push(pathHome) }
                    />
                </PasswordStack>
            </MainStack>
        </PageLayout>
    );
}
