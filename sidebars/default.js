/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  default: [{ type: "autogenerated", dirName: "." }],
  // default: [
  //   {
  //     type: "doc",
  //     label: "Home",
  //     id: "home",
  //   },
  //   {
  //     type: "doc",
  //     label: "What is Design Express?",
  //     id: "about",
  //   },
  //   { type: "html", value: "<div />", className: "sidebar__divider" },
  //   // "hello",
  //   // {
  //   //   type: "category",
  //   //   label: "Tutorial",
  //   //   items: ["tutorial-basics/create-a-document"],
  //   // },
  // ],
};

module.exports = sidebars;