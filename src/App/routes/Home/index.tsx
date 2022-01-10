import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";

import { useError } from "@cosmicdapp/logic";
import { PageLayout, Loading } from "@cosmicdapp/design";
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

import { GetAllResponse, QueryMsg } from "../../../contracts/types/cw-cyph";
import { useCosmWasm } from "../../client";
import { useEncrypt } from "../../encrypt";
import { ErrorText, LightText, MainStack, PasswordStack } from "../../style";
import { pathAdd, pathEdit, pathDelete } from "../../paths";

const { Title } = Typography;

export function Home(): JSX.Element {
  const { error, setError } =  useError();
  const { address, getClient } = useCosmWasm();
  const { decrypt } = useEncrypt();
  const contractAddress = "wasm10ruqujapa6cg5lj5hufrqnpacwt78j445sltcw";
  const [response, setResponse] = useState<GetAllResponse>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const client = getClient();
    const queryPasswords: QueryMsg = { get_all: { owner: address } };
    setLoading(true);
    client
      .queryContractSmart(contractAddress, queryPasswords)
      .then( (result) => {
        setResponse(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(Error(error).message);
        setLoading(false);
      });
  }, [getClient, setError, address]);

  return  loading ? (
    <Loading loadingText="Loading passwords..." />
    ) : (
    <PageLayout>
      <MainStack>
        <PasswordStack>
        <Title level={2}>CYPH</Title>
        <LightText>Your Passwords:</LightText>
          {response && response.entries.map(({ name, password }) => (
            <Typography>
              <LightText>Name: {name}</LightText>
              <LightText>Password: { decrypt(password) }</LightText>
              <Link to={ `${pathEdit}/${name}`}>
                <EditOutlined /> 
              </Link>
              <Link to={ `${pathDelete}/${name}`}>
                <DeleteOutlined />
              </Link>
            </Typography>
          ))}
          {error && <ErrorText>{error}</ErrorText>}
          <Link to={pathAdd}>
            <PlusOutlined />
          </Link>
        </PasswordStack>
      </MainStack>
    </PageLayout>
  );
}
