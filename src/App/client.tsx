import { AppConfig } from "@cosmicdapp/logic";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import * as React from "react";
import { useEffect, useState } from "react";

interface CosmWasmContextType {
    readonly initialized: boolean;
    readonly address: string;
    readonly config: Partial<AppConfig>;
    readonly init: (signer: OfflineSigner) => void;
    readonly getSigner: () => OfflineSigner;
    readonly getClient: () => SigningCosmWasmClient;
}

function throwNotInitialized(): any {
    throw new Error("Not yet initialized");
}

const defaultContext: CosmWasmContextType = {
    initialized: false,
    address: "",
    config: {},
    init: throwNotInitialized,
    getSigner: throwNotInitialized,
    getClient: throwNotInitialized,
};

const CosmWasmContext = React.createContext<CosmWasmContextType>(defaultContext);
export const useCosmWasm = (): CosmWasmContextType => React.useContext(CosmWasmContext);

interface CosmWasmProviderProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    readonly config: AppConfig;
}

export function CosmWasmProvider({ config: configProp, children }: CosmWasmProviderProps): JSX.Element {
    const [config, _setConfig] = useState(configProp);
    const [signer, setSigner] = useState<OfflineSigner>();
    const [client, setClient] = useState<SigningCosmWasmClient>();
    const [address, setAddress] = useState("");

    const contextWithInit = { ...defaultContext, init: setSigner };
    const [value, setValue] = useState<CosmWasmContextType>(contextWithInit);

    useEffect(() => {
        if (!signer) return;
        (async function updateClient() {
            const client = await SigningCosmWasmClient.connectWithSigner(config.rpcUrl, signer);
            setClient(client);
        })();
    }, [signer, config]);

    useEffect(() => {
        if (!signer) return;
        (async function updateAddress() {
            const [account] = await signer.getAccounts();
            setAddress(account.address);
        })();
    }, [signer]);

    useEffect(() => {
        if (!signer || !client || !address) return;
    
        (async function updateValue() {
          setValue({
              initialized: true,
              address,
              config,
              init: () => {},
              getSigner: () => signer,
              getClient: () => client,
          });
        })();
    }, [signer, client, address, config]);
    
    return <CosmWasmContext.Provider value={value}>{children}</CosmWasmContext.Provider>;
}