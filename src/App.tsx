import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "src/guide/components/common/header";
import Guide from "src/guide/components/guide";
import SidebarNavigation from "src/guide/components/navigation";
import './App.css';

class FT6App extends React.Component {

  public render(): JSX.Element {

    return (
      <div className="App">
        <body>
        <Header />
          <div className="container-fluid">
            <Router>
              <div className="row">
                <SidebarNavigation />
                <Guide />
              </div>
            </Router>
          </div>
        </body>
      </div>

    );
  }
}

export default FT6App;
