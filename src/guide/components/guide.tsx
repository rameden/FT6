import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import { TableOfContents } from "src/guide/constants/guide";

class Guide extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="col-md-auto">
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
    )
  }
}

export default Guide;