## latexRender

- window 下挂载了 latexRender 方法，入参说明：
  |参数|类型|是否必传|默认值|
  |:--|:--:|:--|:--|
  |ele|HTMLElement|是||
  |content|String|是||
  |option|Object|否|详见 option|
- option 入参说明：
  |参数|类型|是否必传|默认值|说明|
  |:--|:--:|:--|:--|:--|
  |lineBreak|Boolean|否|true|换行|
  |lineHeight|String|否|'20px'|行高|
  |textColor|String|否|'#333'|文字颜色|
  |divideChinese|Boolean|否|false|将中文从 latex 中拆分出来|
  |wrapMathrm|Boolean|否|true|去除罗马字体|
- 具体使用参见 demo.html

### 注意

- latex 渲染的过程在页面上会展示出来，这是不可避免的，可以选择在 latexRender 的回调中添加 loading 或其他解决办法
- 目前支持的 latex，可参考 [latex 文档](http://doc.latex.ai.kezhitech.com/doc)
