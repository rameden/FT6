export enum tableOfContentsSections {
  Assembly = "Assembly",
  Wiring = "Wiring",
  Support = "Support",
}

export const tableofContents = {
  [tableOfContentsSections.Assembly]: [
    "Section 1",
    "Section 2",
    "Section 3",
    "Section 4",
    "Section 5",
  ],
  [tableOfContentsSections.Wiring]: [
    "Section 1",
    "Section 2",
  ],
  [tableOfContentsSections.Support]: [
    "Section 1",
  ],
}