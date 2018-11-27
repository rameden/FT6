import isEmpty from "lodash-es/isEmpty"
import * as React from 'react';
import { Link } from "react-router-dom";
import { HashLink as ScrollLink } from 'react-router-hash-link';
import * as assembly from "src/guide/constants/assembly";
import { TableOfContents } from "src/guide/constants/guide";

const currentPath = window.location.pathname;
const scrollWithOffset = (el:any, offset:number) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: elementPosition,
  });
}

class SidebarNavigation extends React.Component {

  public render(): JSX.Element {
    // tslint:disable:no-console
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar" >
        <div className="sidebar-sticky">
          <ul className="nav flex-column pt-3">
            {this.BuildTableOfContents()}
          </ul>
        </div>
      </nav>
    );
  }

  private BuildTableOfContents = () => {
  const contents = [];

  for (const key in TableOfContents) {
    if (TableOfContents.hasOwnProperty(key)) {
      const navItem = TableOfContents[key];
      contents.push(
        <>
          <li key={navItem.title} className="nav-item">
            <Link to={navItem.path} className="nav-link">{navItem.title}</Link>
            {!isEmpty(navItem.sections) &&
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
            <ul key={key} className="nav sub-nav flex-column">

              <li key={key} className="nav-item"><ScrollLink scroll={
                // tslint:disable-next-line:jsx-no-lambda
                el => scrollWithOffset(el, 150)
              } className="nav-link" to={`${navItem.path}#${key}`.toLowerCase()}>{sections[key].title}</ScrollLink></li>
              <ul className="nav sub-nav flex-column">
                {
                Object.getOwnPropertyNames(sections[key].steps).map((step: string) => {
                  return (
                    <li key={key + step} className="nav-item"><ScrollLink scroll={
                      // tslint:disable-next-line:jsx-no-lambda
                      el => scrollWithOffset(el, 55)
                    } className="nav-link" to={`${navItem.path}#${key}-${step.replace(/\s+/g, '-')}`.toLowerCase()}>{step}</ScrollLink></li>
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
