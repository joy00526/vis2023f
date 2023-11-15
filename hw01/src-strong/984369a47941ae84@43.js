function _1(md){return(
md`# HW1 Strong baseline`
)}

function _data(__query,FileAttachment,invalidation){return(
__query(FileAttachment("data@.csv"),{from:{table:"data"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

async function _3(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業一",
      fill: "#164863",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _4(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業二",
      fill: "#427D9D",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _5(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業三",
      fill: "#9BBEC8",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _6(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業三",
      fill: "#DDF2FD",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _7(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業四",
      fill: "#86A789",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _8(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業五",
      fill: "#B2C8BA",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _9(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業六",
      fill: "#D2E3C8",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _10(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業七",
      fill: "#EBF3E8",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _11(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業八",
      fill: "#04364A",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _12(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業九",
      fill: "#176B87",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

async function _13(Plot,FileAttachment){return(
Plot.plot({
  marks: [
    Plot.barY(await FileAttachment("data@.csv").csv({ typed: "auto" }), {
      x: "學號",
      y: "作業十",
      fill: "#64CCC5",
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data@.csv", {url: new URL("../data.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", ["__query","FileAttachment","invalidation"], _data);
  main.variable(observer()).define(["Plot","FileAttachment"], _3);
  main.variable(observer()).define(["Plot","FileAttachment"], _4);
  main.variable(observer()).define(["Plot","FileAttachment"], _5);
  main.variable(observer()).define(["Plot","FileAttachment"], _6);
  main.variable(observer()).define(["Plot","FileAttachment"], _7);
  main.variable(observer()).define(["Plot","FileAttachment"], _8);
  main.variable(observer()).define(["Plot","FileAttachment"], _9);
  main.variable(observer()).define(["Plot","FileAttachment"], _10);
  main.variable(observer()).define(["Plot","FileAttachment"], _11);
  main.variable(observer()).define(["Plot","FileAttachment"], _12);
  main.variable(observer()).define(["Plot","FileAttachment"], _13);
  return main;
}
