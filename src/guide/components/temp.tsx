import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { tableofContents } from "src/guide/constants/guide"

class TestRouter extends React.Component {
  public render(): JSX.Element {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              background: "#f0f0f0",
              padding: "10px",
              width: "40%",
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
              <li>
                <Link to="/shoelaces">Shoelaces</Link>
              </li>
            </ul>

            {/* {tableofContents.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar as any}
              />
            ))} */}
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            {tableofContents.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main as any}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default TestRouter;
