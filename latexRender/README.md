## latexRender

1. 提供了 umd 和 es(js, ts)两种使用模式, `umd` 可供在浏览器中`script.src`引入， `es` 可在 vue 中`import`引入. 这两种模式分别提供了 demo：

- demo.html（umd）
- demo.vue2.vue (vue2.x + es + js)
- demo.vue3.ts.vue (vue3.x + es + ts)

2.  window 下挂载了 `latexRender` 方法, es 模式中，export 了 `latexRender` 方法 ，具体入参说明如下：

    ```
    latexRender的入参`option`作为本页面latex渲染的全局配置，单独配置可以在<latex-div></latex-div>标签上添加属性
    ```

    | 参数   |  类型  | 是否必传 | 默认值      |
    | :----- | :----: | :------- | :---------- |
    | option | Object | 否       | 详见 option |

    **option 以及 `<latex-div></latex-div>` 的属性 说明：**
    |参数|类型|是否必传|默认值|说明|
    |:--|:--:|:--|:--|:--|
    |lineBreak|Boolean|否|true|换行|
    |lineHeight|String|否|'20px'|行高|
    |textColor|String|否|'#333'|文字颜色|
    |divideChinese|Boolean|否|false|将中文从 latex 中拆分出来|
    |wrapMathrm|Boolean|否|true|去除罗马字体|

### 注意

- latex 渲染的过程在页面上会展示出来，这是不可避免的，可以选择在 latexRender 的回调中添加 loading 或其他解决办法
- 目前支持的 latex，可参考 [latex 文档](http://doc.latex.ai.kezhitech.com/doc)
