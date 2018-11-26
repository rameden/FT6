import * as React from 'react';
import { Image } from 'react-bootstrap';
import { AssemblySections } from "src/guide/constants/assembly";

const currentPath = window.location.pathname

class Assembly extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="text-justify">
        {this.assemblySections()}
      </div>
    )
  }
  private assemblySections = () => {
    const sections = [];
    for (const section in AssemblySections) {
      if (AssemblySections.hasOwnProperty(section)) {
          sections.push(
            <div id={section.toLowerCase()}>
            <h4>{AssemblySections[section].title}</h4>
              {
                Object.getOwnPropertyNames(AssemblySections[section].steps).map((step: string) => {
                  return (
                    <>
                      <div id={`${section}-${step.replace(/\s+/g, '-')}`.toLowerCase()}>
                        <p style={{height:"500px"}}>
                          {AssemblySections[section].steps[step].stepTitle}
                        </p>
                      </div>
                    </>
                  );
                })
              }
            </div>
          )
      }
    }
    return sections;
  }
}

export default Assembly;