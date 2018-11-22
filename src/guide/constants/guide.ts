import { any } from 'prop-types';
import Assembly from "src/guide/components/assembly";
import Home from "src/guide/components/home";
import Wiring from "src/guide/components/wiring";

export enum Steps {
  stepOne = "Step 1",
  stepTwo = "Step 2",
  stepThree = "Step 3",
  stepFour = "Step 4",
  stepFive = "Step 5",
}

export const TableOfContents = [
  {
    component: Home,
    exact: true,
    path: "/",
    title: "Welcome"
  },
  {
    component: Assembly,
    path: "/assembly",
    title: "Test"
  },
  {
    component: Wiring,
    path: "/wiring",
    title: "Wiring"
  },
];
