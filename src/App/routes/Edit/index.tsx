import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Typography } from "antd";

import { useError } from "@cosmicdapp/logic";
import { PageLayout, Loading } from "@cosmicdapp/design";
import { StdFee } from "@cosmjs/stargate";

import { ExecuteMsg } from "../../../contracts/types/cw-cyph";
import { useCosmWasm } from "../../client";
import { ErrorText, LightText, MainStack, PasswordStack } from "../../style";
import { FormEdit } from "./FormEdit";
import { pathHome } from "../../paths";
import { useEncrypt } from "../../encrypt";

const { Title } = Typography;

interface EditParams {
    readonly name: string;
  }

export function Edit(): JSX.Element {
    const { name } = useParams() as EditParams;
    const { error, setError } =  useError();
    const history = useHistory();
    const { address, getClient } = useCosmWasm();
    const contractAddress = "wasm10ruqujapa6cg5lj5hufrqnpacwt78j445sltcw";
    const [loading, setLoading] = useState(false);
    const { encrypt } = useEncrypt();

    const [newPassword, setNewPassword] = useState("");

    function tryEdit() {
        setLoading(true);
        const client = getClient();
        const addPassword: ExecuteMsg = { edit: { name: name, password: encrypt(newPassword) } };
        const defaultFee: StdFee = {
            amount: [],
            gas: "200000",
        };

        client
            .execute(address, contractAddress, addPassword, defaultFee)
            .then(() => {
                history.push(pathHome);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(Error(error).message);
                setLoading(false);
            });
    }

    return loading ? (
        <Loading loadingText="Updating password..." />
    ) : (
        <PageLayout>
            <MainStack>
                <PasswordStack>
                    <Title level={2}>CYPH</Title>
                    <LightText>Set new password for { name }:</LightText>
                    <FormEdit
                        setNewPassword={setNewPassword}
                        editButtonAction={tryEdit}
                    />
                    {error && <ErrorText>{error}</ErrorText>}
                </PasswordStack>
            </MainStack>
        </PageLayout>
    );
}