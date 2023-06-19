# Latex-Editor

###### this is a latex editor package, it provide some help with writing math formula even if you don't understand latex.

---

![demo image](./demo.gif)

## Getting started

1. **Install**

   ```bash
   npm install latex-editor
   ```

   or

   ```bash
   yarn add latex-editor
   ```

2. **Load the latex-editor libary**

   ```html
   <head>
     <link rel="stylesheet" href="./style.css" />
     <script src="./index.umd.js"></script>
   </head>
   ```

   or

   ```javascript
   import LatexEditor from 'latex-editor'
   ```

3. **Add a `<div></div>` tag. this tag is the initial of editor**

   ```html
   <div class="my-editor"></div>
   ```

4. **Init the latex editor: new LatexEditor(ele:HTMLElement, options: Object)**

   | 参数    |    类型     | 是否必传 | 默认值      |
   | :------ | :---------: | :------- | :---------- |
   | ele     | HTMLElement | 是       |             |
   | content |   String    | 是       |             |
   | option  |   Object    | 否       | 详见 option |

   ```javascript
   new LatexEditor(document.querySelector('.latex-editor'), {
     content: '\\angleABC=90\\circ',
   })
   ```

## Options

| 参数          |  类型   | 是否必传 | 默认值 | 说明                      |
| :------------ | :-----: | :------- | :----- | :------------------------ |
| lineBreak     | Boolean | 否       | true   | 换行                      |
| lineHeight    | String  | 否       | '20px' | 行高                      |
| textColor     | String  | 否       | '#333' | 文字颜色                  |
| divideChinese | Boolean | 否       | false  | 将中文从 latex 中拆分出来 |
| wrapMathrm    | Boolean | 否       | true   | 去除罗马字体              |
