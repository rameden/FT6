import Assembly from "src/guide/components/assembly";

const path = "assembly";

export enum AssemblyFieldKey {
  FrameAssembly = "Frame",
  XYAssembly = "XY",
  ExtruderAssembly = "Extrude",
}

export const assemblySteps = {
    ["Step 1"]: {
      content: "On a flat surface, lay (2) 500mm 2040 beams to the left and right on their edge as shown. Slide a L bracket (leg first)" +
      "into the lower channel on each end of both 2040 beams.Slide the other leg of the L brackets into the inner channel of each of the" +
      "500mm 2020 beams forming a rectangle.While making sure the joins are flush, tighten the grub screws. Mount a foot on each corner of" +
      "the frame using a M5 x 10mm bolt and a M5 t - nut. ",
      photoPath: require("src/guide/img/assembly/base.png"),
      stepTitle: "Base Assembly",
    },
    ["Step 2"]: {
      content: "Flip the frame over making sure one of the 2020 beams is toward you and the feet are on the bottom. This will be the front" +
      "of the printer. Working on one corner at a time, place a 700mm 2020 beam at the corner and secure with (1) or (2) FT1(s) as shown using" +
      "(4) M5 x 10mm bolts and (4) M5 t-nuts per F1. Please note the locations of the FT1s as they are not installed on all sides. Make sure the" +
      "700mm 2020 beams are square with the bottom frame.",
      photoPath: require("src/guide/img/assembly/lower-frame.png"),
      stepTitle: "Lower Frame Assembly",
    },
};

export const xySteps = {
  ["Step 1"]: {
    content: "On a flat surface, lay (2) 500mm 2040 beams to the left and right on their edge as shown. Slide a L bracket (leg first)" +
      "into the lower channel on each end of both 2040 beams.Slide the other leg of the L brackets into the inner channel of each of the" +
      "500mm 2020 beams forming a rectangle.While making sure the joins are flush, tighten the grub screws. Mount a foot on each corner of" +
      "the frame using a M5 x 10mm bolt and a M5 t - nut. ",
    photoPath: require("src/guide/img/assembly/base.png"),
    stepTitle: "Base Assembly",
  },
};

export const AssemblySections = {
  [AssemblyFieldKey.FrameAssembly]: {
    steps: {
      ...assemblySteps
    },
    title: "Frame Assembly",

  },
  [AssemblyFieldKey.XYAssembly]: {
    steps: {
      ...xySteps
    },
    title: "XY Assembly",

  }
}
export const assemblyNavigation = {
  component: Assembly,
  path: `/${path}`,
  sections: { ...AssemblySections },
  title: "Assembly",
}