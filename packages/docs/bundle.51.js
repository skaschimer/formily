(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{139:function(e,a,t){var c={"./bash":123,"./bash.js":123,"./css":124,"./css.js":124,"./htmlbars":125,"./htmlbars.js":125,"./javascript":126,"./javascript.js":126,"./scss":127,"./scss.js":127,"./typescript":128,"./typescript.js":128};function m(e){var a=l(e);return t(a)}function l(e){if(!t.o(c,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return c[e]}m.keys=function(){return Object.keys(c)},m.resolve=l,e.exports=m,m.id=139},70:function(e,a,t){"use strict";var c=t(135),m=(t(136),t(137),t(138),function(){return c.createElement(c.Fragment,{},c.createElement("h1",{id:"uform是什么？",className:"react-demo-h1"},"UForm是什么？"),c.createElement("blockquote",{className:"react-demo-blockquote"},c.createElement("p",{className:"react-demo-p"},"UForm 谐音 Your Form，这才是你想要的Form解决方案 😆")),c.createElement("h2",{id:"背景",className:"react-demo-h2"},"背景"),c.createElement("p",{className:"react-demo-p"},"表单问题，不管是在 jQuery 时代，还是 Angular/React 时代，都永远是前端工程师们的痛，但是这又是没办法的事情，业务需求多种多样，对于中后台业务而言，表单页面和报表页面基本上是中后台业务的核心展现形式，但是，如何帮助开发者更高效的开发表单，目前传统的表单开发方式："),c.createElement("ul",{className:"react-demo-ul"},c.createElement("li",{className:"react-demo-li"},"手动管理表单状态"),c.createElement("li",{className:"react-demo-li"},"手动收集表单数据"),c.createElement("li",{className:"react-demo-li"},"手动管理表单校验状态")),c.createElement("p",{className:"react-demo-p"},"带来的问题"),c.createElement("ul",{className:"react-demo-ul"},c.createElement("li",{className:"react-demo-li"},"表单状态管理变得越来越难以维护，不得已需要引入其他大而全的状态管理库，其实这仅仅只是一个领域性问题"),c.createElement("li",{className:"react-demo-li"},"当表单数量巨大的时候，如果每个表单都需要手动传入 value/onChange，那是不能容忍的，同时传统表单开发的数据结构都是扁平结构，没法很好的处理嵌套复杂数据的情况，如果硬是要处理，工作量会变得越来越大"),c.createElement("li",{className:"react-demo-li"},"当表单校验规则存在联动校验的时候，要处理表单校验简直是噩梦，很容易产生大量的面条代码"),c.createElement("li",{className:"react-demo-li"},"当服务端有动态输出表单的需求的时候，你将不得不自己开发一个基于某个 JSON 协议动态输出表单的组件"),c.createElement("li",{className:"react-demo-li"},"当业务有对表单操作效率等指标的监控需求的时候，你将不得不自己开发一个基于某个 JSON 协议动态输出表单的组件来全局管理表单"),c.createElement("li",{className:"react-demo-li"},"当你希望在可视化搭建界面中快速配置产出表单的时候，你将不得不自己开发一个基于某个 JSON 协议动态输出表单的组件")),c.createElement("h2",{id:"方案",className:"react-demo-h2"},"方案"),c.createElement("p",{className:"react-demo-p"},"基于以上问题，也经历了漫长的表单领域的各种探索，最终我们沉淀出来 ",c.createElement("strong",{className:"react-demo-strong"},"UForm 解决方案")),c.createElement("p",{className:"react-demo-p"},"UForm 是中后台领域的表单解决方案，覆盖了表单领域的各种布局，联动，校验场景，它集成了阿里内部 Fusion 组件体系与 Antd 组件，让您快速开发符合您业务体验需求的表单界面，您当然也可以通过 UForm 的扩展机制来快速接入自己团队的组件库。"),c.createElement("p",{className:"react-demo-p"},"UForm 和核心特性："),c.createElement("ul",{className:"react-demo-ul"},c.createElement("li",{className:"react-demo-li"},"基于标准 JSON Schema 协议，数据化构建表单"),c.createElement("li",{className:"react-demo-li"},"基于 rxjs 对表单内部的副作用做统一管理，轻松解决各种复杂联动校验场景"),c.createElement("li",{className:"react-demo-li"},"支持各种表单布局方案"),c.createElement("li",{className:"react-demo-li"},"支持可视化构建表单"),c.createElement("li",{className:"react-demo-li"},"支持自定义组件扩展"),c.createElement("li",{className:"react-demo-li"},"分布式状态管理，表单性能更高")),c.createElement("h2",{id:"json-schema-规范",className:"react-demo-h2"},"JSON Schema 规范"),c.createElement("p",{className:"react-demo-p"},"想要快速了解 JSON Schema，可以移步 ",c.createElement("a",{href:"https://json-schema.org/",className:"react-demo-a"},"JSON Schema 规范地址")),c.createElement("h2",{id:"为什么选用-json-schema",className:"react-demo-h2"},"为什么选用 JSON Schema"),c.createElement("p",{className:"react-demo-p"},"选用 JSON Schema，我们主要从以下几点来考虑："),c.createElement("ul",{className:"react-demo-ul"},c.createElement("li",{className:"react-demo-li"},"我们的理念是希望用数据的思路来描述表单，而非前端组件树的思路来描述表单"),c.createElement("li",{className:"react-demo-li"},"标准化，因为它是目前业界最流行的数据结构描述语言，表单是 Web 系统的数据输入核心，所以采用 JSON Schema 也是一种最自然的选择")),c.createElement("h2",{id:"业界对比",className:"react-demo-h2"},"业界对比"),c.createElement("p",{className:"react-demo-p"},"目前来说业界比较流行的 JSON Schema 驱动的 React 表单解决方案也就是 Mozilla 家的 ",c.createElement("a",{href:"https://github.com/mozilla-services/react-jsonschema-form",className:"react-demo-a"},"https://github.com/mozilla-services/react-jsonschema-form"),"，但是，该方案存在几个问题："),c.createElement("ul",{className:"react-demo-ul"},c.createElement("li",{className:"react-demo-li"},"强耦合 Bootstrap，不方便扩展"),c.createElement("li",{className:"react-demo-li"},"JSON 描述不能很好的在 JSX 中描述"),c.createElement("li",{className:"react-demo-li"},"没能很好的解决表单布局，表单联动的各种复杂问题"),c.createElement("li",{className:"react-demo-li"},"性能不行，内部数据管理走的 React 的全量 rerender 机制来做数据同步")),c.createElement("p",{className:"react-demo-p"},"当然，还有集团内部的 ",c.createElement("a",{href:"https://alibaba.github.io/nopage",className:"react-demo-a"},"NoForm 解决方案"),"，该方案同样也存在几个问题"),c.createElement("ul",{className:"react-demo-ul"},c.createElement("li",{className:"react-demo-li"},"单纯基于 JSX 描述表单，没办法数据驱动表单构建"),c.createElement("li",{className:"react-demo-li"},"性能不行，基于React的全量rerender机制做数据同步与表单联动"),c.createElement("li",{className:"react-demo-li"},"核心思路不够完备，从文档上来看，很难找到一个理念主线来串联整体设计")),c.createElement("p",{className:"react-demo-p"},"最后，再对比一下 redux-form 作者最近一直在持续更新的 ",c.createElement("a",{href:"https://github.com/final-form/final-form",className:"react-demo-a"},"final-form 解决方案")," ，UForm的核心设计思路其实也是参考的 final-form，可见它是非常优秀的一个表单解决方案，但是，因为它是属于 JSX 的表单解决方案，所以也不能支持数据化驱动，同时，在表单副作用管理上它也并没有一个完备的解决方案来管理，更多的是借助 React 自身的特性来解决副作用管理上的问题，而且，目前 final-form 也没有集成 Ant Design 或者 Fusion Next 这类强大的中后台组件体系，所以，如果您想从性能好，扩展性强，功能完备性，生态完备性这几个角度来选择表单解决方案的话，请选择 UForm 吧！"),c.createElement("h2",{id:"谁在使用？",className:"react-demo-h2"},"谁在使用？"),c.createElement("ul",{className:"react-demo-ul"},c.createElement("li",{className:"react-demo-li"},"阿里供应链平台事业部"),c.createElement("li",{className:"react-demo-li"},"天猫"),c.createElement("li",{className:"react-demo-li"},"阿里云"),c.createElement("li",{className:"react-demo-li"},"阿里妈妈"),c.createElement("li",{className:"react-demo-li"},"盒马"),c.createElement("li",{className:"react-demo-li"},"CBU"),c.createElement("li",{className:"react-demo-li"},"业务平台事业部"),c.createElement("li",{className:"react-demo-li"},"...")))});m.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=m}}]);