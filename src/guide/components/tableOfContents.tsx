// import * as React from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';

// import { sectionSteps } from "src/guide/constants/assembly";
// import { tableofContents } from "src/guide/constants/guide";

// class TableOfContents extends React.Component {
//   private BuildTableOfContents = () => {
//     const contents = [];

//     for (const section in tableofContents) {
//       if (tableofContents.hasOwnProperty(section)) {
//         const children = [];
//         // tslint:disable-next-line:prefer-for-of
//         for (let i = 0; i < tableofContents[section].length; i++) {
//           const rowid = `${section}-${tableofContents[section][i].replace(/\s+/g, '-')}`.toLowerCase();
//           children.push(
//             <NavItem key={i} id={rowid}>
//               <NavLink href="#" className="p-1">
//                 {tableofContents[section][i]}
//               </NavLink>
//             </NavItem>
//           )
//         }

//         contents.push(
//           <>
//             <h5 className="mb-2 mt-4">{section}</h5>
//             <Nav
//               vertical={true}
//             >
//               {children}
//             </Nav>
//           </>
//           )
//       }
//     }
//     return contents;
//   }

//   // tslint:disable-next-line:member-ordering
//   public render(): JSX.Element {
//     // tslint:disable-next-line:no-console
//     console.log(sectionSteps);
//     return (
//       <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
//         {this.BuildTableOfContents()}
//       </div>
//     );
//   }
// }

// export default TableOfContents;
