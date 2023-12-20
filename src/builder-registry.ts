"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import SiteNavbar from "./components/SiteNavbar/siteNavbar";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(SiteNavbar, {
  name: "SiteNavbar",
});
