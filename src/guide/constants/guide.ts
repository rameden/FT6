// import { AssemblySectionsTitle } from "src/guide/constants/assembly";

export enum TableOfContentsSections {
  Assembly = "Assembly",
  Wiring = "Wiring",
  Support = "Support",
}

export enum Steps {
  stepOne = "Step 1",
  stepTwo = "Step 2",
  stepThree = "Step 3",
  stepFour = "Step 4",
  stepFive = "Step 5",
}
export const tableofContents = [
  {
    exact: true,
    main: () => "Welcome to the FT6 Guide",
    path: "/",
    sidebar: () => "Welcome"
  },
  {
    main: () => "Assemble",
    path: "/test",
    sidebar: () => "Test"
  },
];

// export const tableofContents = {
//   [TableOfContentsSections.Assembly]: [
//     AssemblySectionsTitle.FrameAssembly,
//     AssemblySectionsTitle.XYAssembly,
//     AssemblySectionsTitle.ExtruderAssembly,

//   ],
//   [TableOfContentsSections.Wiring]: [
//     Steps.stepFive,
//     "Step 2",
//   ],
//   [TableOfContentsSections.Support]: [
//     "Step 1",
//   ],
// }