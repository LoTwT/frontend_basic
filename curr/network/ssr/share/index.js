import { render } from "../render.js"

const node = {
  name: "div",
  props: {
    onCLick: () => window.alert("btn-click"),
  },
  children: [
    {
      name: "ul",
      children: [
        {
          name: "li",
          children: "apple",
        },
        {
          name: "li",
          chidren: "orange",
        },
      ],
    },
  ],
}

export const renderAsMap = {
  dom: "dom",
  html: "html",
  rehydrate: "rehydrate",
}

export function goRender(renderAs) {
  render(node, renderAs)
}
