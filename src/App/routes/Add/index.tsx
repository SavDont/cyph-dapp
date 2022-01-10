import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Typography } from "antd";

import { useError } from "@cosmicdapp/logic";
import { PageLayout, Loading } from "@cosmicdapp/design";
import { StdFee } from "@cosmjs/stargate";

import { ExecuteMsg } from "../../../contracts/types/cw-cyph";
import { useCosmWasm } from "../../client";
import { useEncrypt } from "../../encrypt";
import { ErrorText, LightText, MainStack, PasswordStack } from "../../style";
import { FormAdd } from "./FormAdd";
import { pathHome } from "../../paths";

const { Title } = Typography;

export function Add(): JSX.Element {
    const { error, setError } =  useError();
    const history = useHistory();
    const { address, getClient } = useCosmWasm();
    const contractAddress = "wasm10ruqujapa6cg5lj5hufrqnpacwt78j445sltcw";
    const [loading, setLoading] = useState(false);
    const { encrypt } = useEncrypt();

    const [newName, setNewName] = useState("");
    const [newPassword, setNewPassword] = useState("");

    function tryAdd() {
        setLoading(true);
        const client = getClient();
        const addPassword: ExecuteMsg = { add: { name: newName, password: encrypt(newPassword) } };
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
        <Loading loadingText="Adding password..." />
    ) : (
        <PageLayout>
            <MainStack>
                <PasswordStack>
                    <Title level={2}>CYPH</Title>
                    <LightText>Add new password.</LightText>
                    <FormAdd
                        setNewName={setNewName}
                        setNewPassword={setNewPassword}
                        addButtonAction={tryAdd}
                    />
                    {error && <ErrorText>{error}</ErrorText>}
                </PasswordStack>
            </MainStack>
        </PageLayout>
    );
}
