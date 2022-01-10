import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { useError } from "@cosmicdapp/logic";
import { Loading } from "@cosmicdapp/design";
import { StdFee } from "@cosmjs/stargate";

import { ExecuteMsg } from "../../../contracts/types/cw-cyph";
import { useCosmWasm } from "../../client";
import { pathHome } from "../../paths";

interface DeleteParams {
    readonly name: string;
  }

export function Delete(): JSX.Element {
    const { name } = useParams() as DeleteParams;
    const loadingText = "Deleting password " + name + "...";
    const { setError } =  useError();
    const history = useHistory();
    const { address, getClient } = useCosmWasm();
    const contractAddress = "wasm10ruqujapa6cg5lj5hufrqnpacwt78j445sltcw";

    function tryDelete(name: string) {
        const client = getClient();
        const addPassword: ExecuteMsg = { delete: { name: name } };
        const defaultFee: StdFee = {
            amount: [],
            gas: "200000",
        };
    
        client
            .execute(address, contractAddress, addPassword, defaultFee)
            .then(() => {
                history.push(pathHome);
            })
            .catch((error) => {
                console.error(error);
                setError(Error(error).message);
                history.push(pathHome);
            });
      }
      tryDelete(name);

    return (
        <Loading loadingText={ loadingText } />);
}