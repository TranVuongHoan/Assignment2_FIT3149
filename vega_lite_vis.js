// List of visualizations to embed
const visualizations = [
  { element: "#bar_chart", file: "barchart.vg.json" },
  { element: "#bar_chart2", file: "barchart2.vg.json" },
  { element: "#heatmap", file: "heatmap.vg.json" },
  { element: "#pie", file: "pie.vg.json" },
  { element: "#scatter", file: "scatter.vg.json" },
  { element: "#line", file: "line.vg.json" },
  { element: "#map", file: "map.vg.json" }
];

// Embed all charts
visualizations.forEach(vis => {
  vegaEmbed(vis.element, vis.file)
    .then(result => {
      // result.view gives access to the Vega view API if needed
    })
    .catch(console.error);
});
