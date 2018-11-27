import * as React from 'react';
class Header extends React.Component {
  public render(): JSX.Element {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">FolgerTech FT6</a>
      </nav>
    )
  }
}
export default Header;