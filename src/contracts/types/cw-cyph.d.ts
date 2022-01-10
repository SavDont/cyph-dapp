/*
 * This file is an attempt to generate type definitions from a JSON schema.
 * The result is often far from ideal but it should help you getting started.
 * Feel free to adapt this to your needs.
 *
 * Type generation powered by json-schema-to-typescript.
 */

export type ExecuteMsg =
  | {
      add: {
        name: string;
        password: string;
        [k: string]: unknown;
      };
    }
  | {
      edit: {
        name: string;
        password: string;
        [k: string]: unknown;
      };
    }
  | {
      delete: {
        name: string;
        [k: string]: unknown;
      };
    };

export interface GetAllResponse {
  entries: {
    name: string;
    password: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}

export interface InstantiateMsg {
  [k: string]: unknown;
}

export type QueryMsg = {
  get_all: {
    owner: string;
    [k: string]: unknown;
  };
};

