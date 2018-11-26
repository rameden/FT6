import * as React from 'react';
import { Link } from "react-router-dom";
import { HashLink as ScrollLink } from 'react-router-hash-link';
import * as assembly from "src/guide/constants/assembly";
import { TableOfContents } from "src/guide/constants/guide";

const currentPath = window.location.pathname;

class SidebarNavigation extends React.Component {

  public render(): JSX.Element {
    // tslint:disable:no-console
    return (
      <div className="col col-lg-2 text-justify">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {this.BuildTableOfContents()}
          </ul>
        </div>
    );
  }

  private BuildTableOfContents = () => {
  const contents = [];

  for (const key in TableOfContents) {
    if (TableOfContents.hasOwnProperty(key)) {
      const navItem = TableOfContents[key];
      contents.push(
        <>
          <li key={navItem.title} >
            <Link to={navItem.path}>{navItem.title}</Link>
            {navItem.path === currentPath && navItem.sections &&
              this.BuildSubSections(navItem)
            }
          </li>
        </>
      );
    }
  }
  return contents;
}

  private BuildSubSections = (navItem: any) => {

    const subSections = [];
    const sections = navItem.sections;
    for (const key in sections) {
      if (sections.hasOwnProperty(key)) {
        const steps:any[] = [];
        subSections.push(
          <>
            <ul style={{ listStyleType: "none", padding: "0 0 0 10px"}}>
              <li key={key}><ScrollLink to={`${currentPath}#${key}`.toLowerCase()}>{sections[key].title}</ScrollLink></li>
              <ul style={{ listStyleType: "none", padding: "0 0 0 10px" }}>
                {
                Object.getOwnPropertyNames(sections[key].steps).map((step: string) => {
                  return (
                    <li key={key + step}><ScrollLink to={`${currentPath}#${key}-${step.replace(/\s+/g, '-')}`.toLowerCase()}>{step}</ScrollLink></li>
                  );
                 })
                }
              </ul>
            </ul>
            {steps}
          </>
        )
      }
    }
    return subSections;
  }

}

export default SidebarNavigation;
