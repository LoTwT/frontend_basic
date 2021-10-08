# 苹果官网

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [步骤](#步骤)
- [rgba](#rgba)
- [vw、vh](#vw-vh)

<!-- /code_chunk_output -->

---

## 步骤

1. 分析页面结构
  分析页面是否包含移动端，如包含，一定要加上meta viewport
1. 完成HTML结构布局
1. 完成CSS样式

---

## rgba

- r -> red
- g -> green
- b -> blue
- a -> 透明度

---

## vw、vh

vw: viewport width, 100vw == 100%viewport width
vh: viewport height, 100vh == 100%viewport height

设置`width: 100vw; height: 100vh;`

## background

当设定背景图片时，注意考虑url、重复、位置、尺寸

```css
background-image: url();
background-repeat: ;
background-position: ;
background-size: ;
```

## 注意媒体查询内的优先级
