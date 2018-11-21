import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import TestRouter from "src/guide/components/temp";
import './App.css';
// tslint:disable-next-line:ordered-imports
// import TableofContents from "src/guide/components/tableOfContents";

class FT6App extends React.Component {

  public render(): JSX.Element {

    return (
      <div className="App">
        <div className="container-fluid">
          <TestRouter />
        </div>
      </div>
    );
  }
}

export default FT6App;
