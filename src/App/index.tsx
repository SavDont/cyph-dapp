import { GlobalStyle } from "@cosmicdapp/design";
import { ErrorProvider, } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import { pathHome, pathLogin, pathAdd, pathKey, pathEdit, pathDelete } from "./paths";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Add } from "./routes/Add";
import { Key } from "./routes/Key";
import { Edit } from "./routes/Edit";
import { Delete } from "./routes/Delete";
import { CosmWasmProvider } from "./client";
import { EncryptProvider } from "./encrypt";
import { ProtectedSwitch } from "./ProtectedSwitch";

export function App(): JSX.Element {
  return (
    <ErrorProvider>
      <CosmWasmProvider config={config}>
        <EncryptProvider>
          <GlobalStyle />
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path={pathLogin} component={Login} />
              <Route exact path={pathKey} component={Key} />
              <ProtectedSwitch authPath={pathLogin}>
                <Route exact path={pathHome} component={Home} />
                <Route exact path={pathAdd} component={Add} />
                <Route exact path={`${pathEdit}/:name`} component={Edit} />
                <Route exact path={`${pathDelete}/:name`} component={Delete} />
              </ProtectedSwitch>
            </Switch>
          </Router>
        </EncryptProvider>
      </CosmWasmProvider>
    </ErrorProvider>
  );
}
