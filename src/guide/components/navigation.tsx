import * as React from 'react';
import { Link } from "react-router-dom";
import { TableOfContents } from "src/guide/constants/guide";

class SidebarNavigation extends React.Component {

  public render(): JSX.Element {
    return (
        <div className="col col-lg-2">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {this.BuildTableOfContents()}
            </ul>
        </div>
    );
  }

  private BuildTableOfContents = () => {
  const contents = [];
  // tslint:disable:no-console
  for (const key in TableOfContents) {
    if (TableOfContents.hasOwnProperty(key)) {
      const navItem = TableOfContents[key];
      contents.push(
        <li key={navItem.title} >
          <Link to={navItem.path}>{navItem.title}</Link>
        </li>
      );
    }
  }
  return contents;
}
}

export default SidebarNavigation;
