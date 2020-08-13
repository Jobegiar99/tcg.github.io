(this.webpackJsonpltg=this.webpackJsonpltg||[]).push([[0],{19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(2),l=t(4),c=t(3),o=t(0),i=t.n(o),h=t(6),u=t.n(h),p=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).handleSelect=function(a){e.props.handleChange(a)},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"categoryDiv",align:"center"},i.a.createElement("form",null,i.a.createElement("label",null,i.a.createElement("h4",null,"Select the type of input that you would like to generate")),i.a.createElement("select",{id:"inputOptions",onChange:this.handleSelect},i.a.createElement("option",{value:"array"},"  Array  "))))}}]),t}(i.a.Component),s=t(7),m=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).callSortChange=function(a){e.props.handleSortChange(a)},e.callRepeatedChange=function(a){e.props.handleRepeatedChange(a)},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("label",null,i.a.createElement("h4",null,"Sort the array? Allow repeated values?"),"Sort?"),i.a.createElement("input",{type:"checkbox",onClick:this.callSortChange}),i.a.createElement("labe",null," Allow repeated values?"),i.a.createElement("input",{type:"checkbox",onClick:this.callRepeatedChange}))}}]),t}(i.a.Component),d=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).callInputChange=function(a){e.props.handleInputChange(a)},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h4",null,"Type the range of numbers from -1000000000 to 1000000000",i.a.createElement("br",null),"If range is way too small for the size of the array and no repeated values are allowed, the range will increase automatically"),i.a.createElement("label",{for:"minInput"}," Min "),i.a.createElement("input",{name:"minIn",min:"-1000000000",max:"1000000000",id:"minInput",onChange:this.callInputChange,type:"number"}),i.a.createElement("label",{for:"maxInput"}," Max "),i.a.createElement("input",{name:"maxIn",min:"-1000000000",max:"1000000000",id:"maxInput",onChange:this.callInputChange,type:"number"}),i.a.createElement(m,{handleSortChange:this.props.handleSortChange,handleRepeatedChange:this.props.handleRepeatedChange}))}}]),t}(i.a.Component),g=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).callInputChange=function(a){e.props.handleInputChange(a)},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h4",null,"Type the range of numbers from -1000000000 to 1000000000",i.a.createElement("br",null),"If range is way too small for the size of the array and no repeated values are allowed, the range will increase automatically"),i.a.createElement("label",{for:"minInput"}," Min "),i.a.createElement("input",{name:"minIn",min:"-1000000000",max:"1000000000",id:"minInput",step:"any",onChange:this.callInputChange,type:"number"}),i.a.createElement("label",{for:"maxInput"}," Max "),i.a.createElement("input",{name:"maxIn",min:"-1000000000",max:"1000000000",id:"maxInput",step:"any",onChange:this.callInputChange,type:"number"}),i.a.createElement("label",null,i.a.createElement("h4",null,"Amount of decimals (from 1 to 10)")),i.a.createElement("input",{name:"decimals",min:"1",max:"10",onChange:this.callInputChange}),i.a.createElement(m,{handleSortChange:this.props.handleSortChange,handleRepeatedChange:this.props.handleRepeatedChange}))}}]),t}(i.a.Component),f=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).callLower=function(a){e.props.handleLower(a)},e.callUpper=function(a){e.props.handleUpper(a)},e.callSpecial=function(a){e.props.handleSpecial(a)},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("label",null,"Lower Case?"),i.a.createElement("input",{type:"checkbox",onChange:this.callLower}),i.a.createElement("label",null," Upper Case?"),i.a.createElement("input",{type:"checkbox",onChange:this.callUpper}),i.a.createElement("label",null," Special Characters? "),i.a.createElement("input",{type:"checkbox",onChange:this.callSpecial}))}}]),t}(i.a.Component),C=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).callInputChange=function(a){e.props.handleInputChange(a)},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("label",null,"string length 1 to 1000 "),i.a.createElement("input",{name:"strLength",type:"number",min:"0",max:"1000",onChange:this.callInputChange}),i.a.createElement(f,{handleLower:this.props.handleLower,handleUpper:this.props.handleUpper,handleSpecial:this.props.handleSpecial}))}}]),t}(i.a.Component),b=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("label",null," Numbers? "),i.a.createElement("input",{type:"checkbox",onChange:this.props.handleNum}),i.a.createElement(f,{handleLower:this.props.handleLower,handleUpper:this.props.handleUpper,handleSpecial:this.props.handleSpecial}))}}]),t}(i.a.Component),y=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).handleDataTypeChange=function(a){switch(e.setState({dataType:a.target.value}),a.target.value){case"int":e.setState({currentView:i.a.createElement(d,{handleInputChange:e.handleInputChange,handleSortChange:e.handleSortChange,handleRepeatedChange:e.handleRepeatedChange}),minIn:-1e9,maxIn:1e9,sort:!1,repeated:!1});break;case"float":e.setState({currentView:i.a.createElement(g,{handleInputChange:e.handleInputChange,handleSortChange:e.handleSortChange,handleRepeatedChange:e.handleRepeatedChange}),minIn:-1e9,maxIn:1e9,sort:!1,repeated:!1,decimals:1});break;case"bool":e.setState({currentView:null});break;case"char":e.setState({currentView:i.a.createElement(b,{handleNum:e.handleNum,handleLower:e.handleLower,handleUpper:e.handleUpper,handleSpecial:e.handleSpecial}),lowerCase:!1,upperCase:!1,numbers:!1,special:!1});break;case"string":e.setState({currentView:i.a.createElement(C,{handleInputChange:e.handleInputChange,handleLower:e.handleLower,handleUpper:e.handleUpper,handleSpecial:e.handleSpecial}),lowerCase:!1,upperCase:!1,special:!1,strLength:1})}},e.handleInputChange=function(a){e.setState(Object(s.a)({},a.target.name,a.target.value))},e.handleSortChange=function(){e.setState({sort:!e.state.sort})},e.handleRepeatedChange=function(){e.setState({repeated:!e.state.repeated})},e.handleLower=function(){e.setState({lowerCase:!e.state.lowerCase})},e.handleUpper=function(){e.setState({upperCase:!e.state.upperCase})},e.handleNum=function(){e.setState({numbers:!e.state.numbers})},e.handleSpecial=function(){e.setState({special:!e.state.special})},e.callArrayGenerator=function(a){a.preventDefault(),e.props.generate(e.state.dataType,e.state.arraySize,e.state.minIn,e.state.maxIn,e.state.sort,e.state.repeated,e.state.decimals,e.state.lowerCase,e.state.upperCase,e.state.numbers,e.state.special,e.state.strLength)},e.state={dataType:"int",arraySize:1,minIn:-1e9,maxIn:1e9,sort:!1,repeated:!1,decimals:1,lowerCase:!1,upperCase:!1,numbers:!1,special:!1,strLength:1,currentView:i.a.createElement(d,{handleInputChange:e.handleInputChange,handleSortChange:e.handleSortChange,handleRepeatedChange:e.handleRepeatedChange})},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{align:"center"},i.a.createElement("form",null,i.a.createElement("label",{for:"arrayDataType"},i.a.createElement("h4",null,"Select the data type")),i.a.createElement("select",{id:"arrayDataType",onChange:this.handleDataTypeChange},i.a.createElement("option",{value:"int"}," int   "),i.a.createElement("option",{value:"float"}," float"),i.a.createElement("option",{value:"bool"}," bool  "),i.a.createElement("option",{value:"char"}," char  "),i.a.createElement("option",{value:"string"}," string")),i.a.createElement("label",{for:"arraySize"},i.a.createElement("h4",null,"Select the amount of values that this array will contain from 1 to 10000. If limit is ",i.a.createElement("u",null,"exceeded the length of the array will be set to 10000."))),i.a.createElement("input",{id:"arraySize",name:"arraySize",type:"number",min:"1",max:"10000",onChange:this.handleInputChange}),i.a.createElement("br",null),i.a.createElement("br",null),this.state.currentView,i.a.createElement("button",{id:"buttonGenerate",onClick:this.callArrayGenerator},"Generate Random Test Case")))}}]),t}(i.a.Component),E=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(i.a.Component),v=t(13).Chance(),S=function(e,a,t,n,r,l,c,o,i){for(var h=new Array(a),u=new Array(a),p=!1,s=0;s<a;s++){var m=w(e,c,t,n,o,i);if(l||"float"!=e&&"int"!=e){if("char"==e){if(!o.includes(m))for(;!o.includes(m);)m=w(e,c,t,n,o,i)}else if("string"==e)for(var d=!0;d;){for(var g=!1,f=0;f<m.length;f++)if(-1==o.indexOf(m[f])){m=w(e,c,t,n,o,i),g=!0;break}g||(d=!1)}}else{if(u.includes(m)){for(var C=1e4;u.includes(m)&&C>0;)m=w(e,c,t,n,o,i),C--;u.includes(m)&&(t--,n++,m=p?t:n,p=!p)}u[s]=m}h[s]=m}r&&(h=h.sort((function(e,a){return e-a})));var b=h.join();return"char"==e?I(b):"string"==e?O(b,i):b},w=function(e,a,t,n,r,l){return"int"==e?v.integer({min:parseInt(t),max:parseInt(n)}):"float"==e?v.floating({min:parseFloat(t),max:parseFloat(n),fixed:a}):"bool"==e?v.bool():"char"==e?v.character({pool:r}):v.string({pool:r,length:l})},I=function(e){for(var a="",t=0;t<e.length;t++)a+=t%2==0?"'"+e[t]+"'":e[t];return a},O=function(e,a){for(var t="",n=0,r=0;r<e.length;r++,n++)n%a==0?t+='"'+e[r]:n%a==a-1?(t+=e[r]+'"',n=-2):t+=e[r];return'"'!=t[t.length-1]&&(t+='"'),t},j=(t(19),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).generateTestCase=function(a,t,n,r,l,c,o,i,h,u,p,s){var m=function(e,a,t,n,r,l,c,o,i,h,u,p){var s="";if(o&&(s+="abcdefghijklmnopqrstuvwxyz"),i&&(s+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),h&&(s+="0123456789"),u&&(s+="!@#$%^&*()"),""==s&&(s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"),s=String(s),a<1&&(a=1),a>1e4&&(a=1e4),c<1&&(c=1),c>10&&(c=10),p<1&&(p=1),p>1e3&&(p=1e3),t<-1e9&&(t=-1e9),t>1e9&&(t=1e9),n<-1e9&&(n=-1e9),n>1e9&&(n=1e9),t>n){var m=n;n=t,t=m}return S(e,a,t,n,r,l,c,s,p)}(a,t,n,r,l,c,o,i,h,u,p,s);e.setState({testcase:m})},e.handleChange=function(a){var t=null;switch(a.target.value){case"array":t=i.a.createElement(y,{generate:e.arrayGenerator});break;case"string":t=i.a.createElement(E,null)}e.setState({currentCategory:t})},e.copyToClipboard=function(){var e=document.createRange();e.selectNode(document.getElementById("testCase")),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges(),alert("Test case has been copied to clipboard :).")},e.state={currentCategory:i.a.createElement(y,{generate:e.generateTestCase}),testcase:""},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{align:"center"},"This app is under development. Expect more features soon :)",i.a.createElement(p,{handleChange:this.handleChange}),this.state.currentCategory,i.a.createElement("br",null),i.a.createElement("button",{onClick:this.copyToClipboard}," Copy "),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",{id:"testCase"},"[",this.state.testcase,"]"),i.a.createElement("br",null))}}]),t}(i.a.Component));u.a.render(i.a.createElement(j,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.bd520e14.chunk.js.map