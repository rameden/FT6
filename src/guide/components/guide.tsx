import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import { TableOfContents } from "src/guide/constants/guide";

class Guide extends React.Component {
  public render(): JSX.Element {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <Switch>
          {TableOfContents.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
      </main>
    )
  }
}

export default Guide;