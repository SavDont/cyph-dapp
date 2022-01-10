import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "testing",
  chainName: "Testing",
  addressPrefix: "cosmos",
  rpcUrl: "http://localhost:26657",
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:8000",
  feeToken: "ucosm",
  stakingToken: "uatom",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const sandynet: AppConfig = {
  chainId: "sandynet-1",
  chainName: "sandynet-1",
  addressPrefix: "wasm",
  rpcUrl: "https://rpc.sandynet.cosmwasm.com:443",
  httpUrl: "https://lcd.sandynet.cosmwasm.com",
  faucetUrl: "https://faucet.sandynet.cosmwasm.com",
  feeToken: "ubay",
  stakingToken: "umaya",
  coinMap: {
    ubay: { denom: "BAY", fractionalDigits: 6 },
    umaya: { denom: "MAYA", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const configs: NetworkConfigs = { local, sandynet };
export const config = getAppConfig(configs);
