import { any } from 'prop-types';
import Assembly from "src/guide/components/assembly";
import Home from "src/guide/components/home";
import Wiring from "src/guide/components/wiring";
import { assemblyNavigation } from "src/guide/constants/assembly";

export const TableOfContents = [
  {
    component: Home,
    exact: true,
    path: "/",
    sections:{},
    title: "Welcome"
  },
  {
    ...assemblyNavigation
  },
  {
    component: Wiring,
    path: "/wiring",
    sections: {},
    title: "Wiring"
  },
];
