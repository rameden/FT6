import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import './App.css';
// tslint:disable-next-line:ordered-imports
import TableofContents from "src/guide/components/tableOfContents";

class FT6App extends React.Component {

  public render(): JSX.Element {

    return (
      <div className="App">
        <div className="container-fluid">
          <TableofContents />
        </div>
      </div>
    );
  }
}

export default FT6App;
