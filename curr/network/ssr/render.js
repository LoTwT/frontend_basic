// {
//   name: "div",
//   props: {
//     onClick: () =>  {},
//     style: {
//       backgroundColor: "blue"
//     }
//   },
//   children: [
//     {
//       name: "div",
//       ...
//     }
//   ],
//   children: "Hello"
// }

export function render(node, renderAs = "dom", path = []) {
  const { name, props, children } = node

  if (renderAs === "dom") {
    const element = document.createElement(name)

    if (props && props.onClick) {
      element.addEventListener("click", props.onClick)
    }

    if (typeof children === "string") {
      element.innerHTML = children
    } else if (Array.isArray(children)) {
      children.forEach((child, i) => {
        element.appendChild(render(child, renderAs, path.concat(i)))
      })
    }

    return element
  } else if (renderAs === "html") {
    let childrenStr = ""

    if (typeof children === "string") {
      childrenStr
    } else if (Array.isArray(children)) {
      childrenStr = children
        .map((child, i) => render(child, renderAs, path.concat(i)))
        .join("")
    }

    return `<${name} id="node-${path.join("-")}">${childrenStr}</${name}>`
  } else if (renderAs === "rehydrate") {
    // 再水合
    // html 已经在页面上了，处理事件
    if (props && props.onClick) {
      document
        .getElementById(`node-${path.join("-")}`)
        .addEventListener("click", props.onClick)

      if (Array.isArray(children)) {
        children.forEach((child, i) => render(child, renderAs, path.concat(i)))
      }
    }
  } else {
    throw Error("not support this renderAs type")
  }
}
