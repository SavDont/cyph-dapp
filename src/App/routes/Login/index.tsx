import React from "react";
import { config } from "../../../config";
import { pathKey } from "../../paths";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading, PageLayout } from "@cosmicdapp/design";
import { ErrorText, LightText, MainStack, WelcomeStack } from "../../style";
import { Button, Typography } from "antd";
import { configKeplr, useError } from "@cosmicdapp/logic";
import { useCosmWasm } from "../../client";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

export interface RedirectLocation {
  readonly redirectPathname: string;
  readonly redirectState: any;
}

const { Title } = Typography;

export function Login(): JSX.Element {
  const history = useHistory();
  const { error, setError, clearError } = useError();
  const [initializing, setInitializing] = useState(false);
  const cosmWasm = useCosmWasm();
  
  async function initKeplr() {
    const anyWindow: any = window;
    try {
      await anyWindow.keplr.experimentalSuggestChain(configKeplr(config));
      await anyWindow.keplr.enable(config.chainId);

      setInitializing(true);
      clearError();
      
      const offlineSigner = await anyWindow.getOfflineSigner(config.chainId);
      cosmWasm.init(offlineSigner);
    } catch (error) {
      console.error(error);
      if (typeof error === "string") {
        setError(Error(error).message);  
      } else if (error instanceof Error) {
        setError(error.message);
      }
      setInitializing(false);
    }
  }

  useEffect(() => {
    if (cosmWasm.initialized) {
      history.push(pathKey);
    }
  }, [cosmWasm.initialized]);

  return initializing ? (
    <Loading loadingText="Loading Cyph..." />
  ) : (
    <PageLayout>
      <MainStack>
        <WelcomeStack>
          <Typography>
            <Title level={2}>CYPH</Title>
            <LightText>A Decentralized End to End Encrypted Password Manager</LightText> 
            <LightText>Please connect your Keplr wallet to continue.</LightText>
          </Typography>
          {error && <ErrorText>{error}</ErrorText>}
          <Button type="primary" shape="round" onClick={initKeplr}>
            Connect Wallet
          </Button>
        </WelcomeStack>
        <LightText>Built with &nbsp;
          <a href="https://github.com/CosmWasm/cosmwasm"
          target="_blank"
          rel="noreferrer noopener">CosmWasm</a>
          &nbsp; and &nbsp;
          <a href="https://github.com/cosmos/cosmjs"
          target="_blank"
          rel="noreferrer noopener">CosmJS</a>
          &nbsp; by &nbsp; 
          <a href="https://github.com/SavDont/cyph-dapp"
          target="_blank"
          rel="noreferrer noopener">@savdont</a>.
          </LightText>
      </MainStack>
    </PageLayout>
  );
}
