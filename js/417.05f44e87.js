"use strict";(self["webpackChunkfilet"]=self["webpackChunkfilet"]||[]).push([[417],{8802:function(t,e,a){a.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-info",class:{"full-info":t.fullInfo}},[a("div",{staticClass:"info"},[t.fullInfo?[a("div",{staticClass:"rate"},[t._v(t._s(t.product.rates)+"%")]),a("div",{staticClass:"description"},[a("p",[t._v(" Period: "),a("em",[t._v(t._s(t.product.period))]),t._v(" Days ")]),a("p",[t._v(" Minimum Investment: "),a("em",[t._v(t._s(t.numeral(t.product.minimal).format("0,0")))]),t._v(" USDT ")]),a("p",[t._v(" Management Fee: "),a("em",[t._v(t._s(t.product.mfee))]),t._v(" % ")])]),a("div",{staticClass:"description"},[a("p",[t._v(" Performance Fee: "),a("em",[t._v(t._s(t.numeral(t.product.pfee).format("0,0")))]),t._v(" % ")]),t._m(0),a("p",[t._v(" Max Drawdown: "),a("em",[t._v(t._s(t.numeral(t.product.mdd).format("0,0")))]),t._v(" % ")])])]:[a("div",{staticClass:"rate"},[t._v(t._s(t.product.rates)+"%")]),a("div",{staticClass:"description"},[a("p",[t._v(" Period: "),a("em",[t._v(t._s(t.product.period))]),t._v(" Days ")]),a("p",[t._v(" Minimum: "),a("em",[t._v(t._s(t.numeral(t.product.minimal).format("0,0")))]),t._v(" USDT ")])])]],2),t.redeem?a("button",{on:{click:t.handleRedeemClick}},[t._v("Redeem")]):t.apply?a("button",{on:{click:t.handleApplyClick}},[t._v("Apply")]):a("router-link",{staticClass:"btn-more",attrs:{to:"products"}},[a("button",[t._v("More")])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Early Redemption Fee: "),a("em",[t._v("1")]),t._v(" % / Day")])}],n=a(4665),i=a(1977),l=a.n(i),d={name:"ProductInfo",props:{redeem:{type:Boolean,default:!1},apply:{type:Boolean,default:!1},fullInfo:{type:Boolean,default:!1}},computed:{...(0,n.rn)(["product","userAsset","userFixedInterestRate"])},methods:{...(0,n.OI)(["showAppModal"]),numeral:l(),handleRedeemClick(){this.showAppModal({type:"redeem",max:this.userFixedInterestRate.interest})},handleApplyClick(){this.showAppModal({type:"apply",max:this.userAsset.cash})}}},o=d,h=a(1001),c=(0,h.Z)(o,s,r,!1,null,"240222d7",null),u=c.exports},6365:function(t,e,a){a.d(e,{Z:function(){return b}});var s,r,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"doughnut-chart"},[a("doughnut-chart-base",{attrs:{width:t.width,height:t.height,plugins:[t.htmlLegendPlugin],chartData:t.chartData,chartOptions:t.chartOptions}}),a("div",[a("div",{staticClass:"legend-container"}),t.enableActions?a("div",{staticClass:"button-list"},[a("button",{staticClass:"btn-withdraw",attrs:{disabled:t.isEmpty},on:{click:t.handleWithdrawClick}},[t._v(" Withdraw ")]),a("button",{staticClass:"btn-deposit",attrs:{disabled:!t.isLogin},on:{click:t.handleDepositClick}},[t._v(" Deposit ")])]):t._e()])],1)},i=[],l=a(4665),d=a(1977),o=a.n(d),h=a(5170),c={extends:h.$I,props:{chartData:{type:Array|Object,required:!0},chartOptions:{type:Object,required:!1}},mounted(){this.renderChart(this.chartData,this.chartOptions)}},u=c,p=a(1001),m=(0,p.Z)(u,s,r,!1,null,null,null),C=m.exports;const f=()=>{const t=document.querySelector(".legend-container");let e=t.querySelector("ul");return e||(e=document.createElement("ul"),t.appendChild(e)),e};var v={components:{DoughnutChartBase:C},props:{chartData:{type:Array|Object,required:!0},chartOptions:{type:Object,required:!1},width:{type:Number,default:175},height:{type:Number,default:175},hasButtons:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},enableActions:{type:Boolean,default:!1}},data(){return{htmlLegendPlugin:{id:"htmlLegend",afterUpdate(t){const e=f();while(e.firstChild)e.firstChild.remove();const a=t.options.plugins.legend.labels.generateLabels(t);a.forEach(((a,s)=>{if(!a.text)return;const r=document.createElement("li"),n=document.createElement("span"),i=document.createElement("p"),l=document.createElement("p"),d=document.createTextNode(a.text),h=document.createTextNode(`${o()(t.config.data.datasets[0].data[s]).format("0,0")} USDT`);n.style.backgroundColor=t?.config?.data?.datasets[0]?.backgroundColor[s],l.style.color=t?.config?.options?.plugins?.legend?.fontColor,i.appendChild(n),i.appendChild(d),l.appendChild(h),r.appendChild(i),r.appendChild(l),e.appendChild(r)}))}}}},computed:{...(0,l.rn)(["userAsset"]),...(0,l.Se)(["isLogin"])},methods:{...(0,l.OI)(["showAppModal"]),numeral:o(),handleWithdrawClick(){this.showAppModal({type:"withdraw",max:this.userAsset.cash})},handleDepositClick(){this.showAppModal({type:"deposit"})}}},y=v,g=(0,p.Z)(y,n,i,!1,null,"2f7edc66",null),b=g.exports},417:function(t,e,a){a.r(e),a.d(e,{default:function(){return k}});var s,r,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-dashboard app-card-list"},[a("div",{staticClass:"app-card"},[a("p",{staticClass:"title"},[t._v("Total Value Locked")]),a("p",{staticClass:"sub-title"},[t._v(t._s(t.numeral(t.totalAsset).format("0,0"))+" USDT")]),a("div",{staticClass:"chart"},[a("doughnut-chart",{attrs:{chartData:t.doughnutChartData,chartOptions:t.doughnutChartOptions}})],1)]),a("div",{staticClass:"app-card"},[t._m(0),a("div",{staticClass:"content"},[a("product-info")],1)]),a("div",{staticClass:"app-card large"},[a("p",{staticClass:"title"},[t._v("Total Value Locked")]),a("div",{staticClass:"chart"},[a("line-chart",{attrs:{chartData:t.lineChartData,chartOptions:t.lineChartOptions}})],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"title"},[a("span",{staticClass:"dot"}),t._v(" Fixed Interest ")])}],l=a(4665),d=a(1977),o=a.n(d),h=a(6365),c=a(8802),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"line-chart"},[a("line-chart-base",{attrs:{width:t.width,height:t.height,chartData:t.chartData,chartOptions:t.chartOptions}})],1)},p=[],m=a(5170),C={extends:m.x1,props:{chartData:{type:Array|Object,required:!0},chartOptions:{type:Object,required:!1}},mounted(){this.renderChart(this.chartData,this.chartOptions)}},f=C,v=a(1001),y=(0,v.Z)(f,s,r,!1,null,null,null),g=y.exports,b={components:{LineChartBase:g},props:{chartData:{type:Array|Object,required:!0},chartOptions:{type:Object,required:!1},width:{type:Number,default:null},height:{type:Number,default:212}}},_=b,D=(0,v.Z)(_,u,p,!1,null,null,null),O=D.exports,w={name:"AppDashboard",components:{DoughnutChart:h.Z,ProductInfo:c.Z,LineChart:O},computed:{...(0,l.rn)(["tvl","product","tvlHistory","token"]),...(0,l.Se)(["totalAsset"]),doughnutChartData(){return{labels:["Total Deposit","Fixed Interest"],datasets:[{data:[this.tvl.deposit,this.tvl.interest],backgroundColor:["#A81B15","#EDC612"],borderWidth:0,cutout:"80%"}]}},doughnutChartOptions(){return{maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}}}},lineChartLabelList(){return this.tvlHistory.map((t=>t.date)).reverse()},lineChartDataList(){return this.tvlHistory.map((t=>t.price)).reverse()},lineChartData(){return{labels:this.lineChartLabelList,datasets:[{data:this.lineChartDataList,fill:!1,borderWidth:2,borderColor:"#4312ED",tension:.4}]}},lineChartOptions(){return{maintainAspectRatio:!1,plugins:{legend:{display:!1}}}}},created(){this.getTVL().then((t=>this.setTVL(t.data))),this.getProduct({id:"0"}).then((t=>this.setProduct(t.data))),this.getTVLHistory().then((t=>this.setTVLHistory(t.data)))},methods:{...(0,l.nv)(["getTVL","getTVLHistory","getProduct"]),...(0,l.OI)(["setTVL","setTVLHistory","setProduct"]),numeral:o()}},A=w,L=(0,v.Z)(A,n,i,!1,null,null,null),k=L.exports},5170:function(t,e,a){a.d(e,{$I:function(){return C},x1:function(){return f}});a(1703);var s,r=a(4647);function n(t,e,a,r){t(e,a),void 0!==r&&r.emit(s.ChartRendered)}function i(t,e){t.update(),void 0!==e&&e.emit(s.ChartUpdated)}function l(t,e){t.destroy(),void 0!==e&&e.emit(s.ChartDestroyed)}function d(t,e){const a={labels:"undefined"===typeof t.labels?[]:[...t.labels],datasets:[]};return o(a,{...t},e),a}function o(t,e,a){const s=[];t.datasets=e.datasets.map((e=>{const r=t.datasets.find((t=>t[a]===e[a]));return r&&e.data&&!s.includes(r)?(s.push(r),Object.assign(r,e),r):{...e}}))}function h(t,e,a){t.data.labels=e,void 0!==a&&a.emit(s.LabelsUpdated)}function c(t,e){const a=t.datasets.map((t=>t.label)),s=e.datasets.map((t=>t.label));return e.datasets.length===t.datasets.length&&a.every(((t,e)=>t===s[e]))}(function(t){t["ChartRendered"]="chart:rendered",t["ChartUpdated"]="chart:updated",t["ChartDestroyed"]="chart:destroyed",t["LabelsUpdated"]="labels:updated"})(s||(s={}));const u="Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components",p="annotation";function m(t,e,a){let m=null;return{props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},data(){return{_chart:null}},computed:{hasAnnotationPlugin(){return Object.keys(this.chartOptions).length>0&&"plugins"in this.chartOptions&&Object.keys(this.chartOptions.plugins).length>0&&p in this.chartOptions.plugins}},created(){r.kL.register(a)},mounted(){m={current:null},"datasets"in this.chartData&&this.chartData.datasets.length>0&&(n(this.renderChart,this.chartData,this.chartOptions),this.$emit(s.ChartRendered))},watch:{chartData(t,e){this.chartDataHandler(t,e)}},methods:{renderChart(t,a){const n=this.getCurrentChart();if(null!==n&&(l(n),this.$emit(s.ChartDestroyed)),!this.$refs.canvas)throw new Error(u);{const s=d(t,this.datasetIdKey),n=this.$refs.canvas.getContext("2d");null!==n&&this.setCurrentChart(new r.kL(n,{type:e,data:s,options:a,plugins:this.plugins}))}},chartDataHandler(t,e){const a={...t},r={...e},d=this.getCurrentChart();if(Object.keys(r).length>0){const t=c(a,r);t&&null!==d?(o(d.data,a,this.datasetIdKey),void 0!==a.labels&&(h(d,a.labels),this.$emit(s.LabelsUpdated)),i(d),this.$emit(s.ChartUpdated)):(null!==d&&(l(d),this.$emit(s.ChartDestroyed)),n(this.renderChart,this.chartData,this.chartOptions),this.$emit(s.ChartRendered))}else null!==d&&(l(d),this.$emit(s.ChartDestroyed)),n(this.renderChart,this.chartData,this.chartOptions),this.$emit(s.ChartRendered)},getCurrentChart(){return this.hasAnnotationPlugin?m.current:this.$data._chart},setCurrentChart(t){this.hasAnnotationPlugin?m.current=t:this.$data._chart=t}},beforeDestroy(){const t=this.getCurrentChart();null!==t&&(l(t),this.$emit(s.ChartDestroyed))},render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])}}}const C=m("doughnut-chart","doughnut",r.jI),f=m("line-chart","line",r.ST)}}]);
//# sourceMappingURL=417.05f44e87.js.map