export enum AssemblyFieldKey {
  FrameAssembly = "FrameAssembly",
  XYAssembly = "XYAssembly",
  ExtruderAssembly = "ExtrudeAssembly",
}

export enum AssemblySectionsTitle {
  FrameAssembly = "Frame Assembly",
  XYAssembly = "X & Y Assembly",
  ExtruderAssembly = "Extrude Assembly",
}

export const sectionSteps = {
  [AssemblyFieldKey.FrameAssembly]: {
    ["Step 1"]: {
      content: "",
      photoPath: "",
    },
    ["Step 2"]: {
      content: "",
      photoPath: "",
    },
  },
  [AssemblyFieldKey.XYAssembly]: {
    "Step 1": {
      content: "",
      photoPath: "",
    },
  },
  [AssemblyFieldKey.ExtruderAssembly]: {
    "Step 1": {
      content: "",
      photoPath: "",
    },
  },
};