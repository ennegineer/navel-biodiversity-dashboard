// Use the D3 library to read in samples.json
d3.json("../samples.json").then(function(data) {
    var samples = data.samples;
    console.log(data)
    // Create a horizontal bar chart with a dropdown menu to display the 
    // top 10 OTUs found in that individual.

    // let individuals = data.map(row => row.names)

    // Loop through the array of data
    for (let i = 0; i < samples.length; i++) {
        row = samples[i];
    
        // Compare value to selected argument
        if (row.id === "940"){
    
            // Initialize arrays
            // grab otu_ids from samples where "id" === currentID
            var otu_IDs = row.otu_ids.slice(0,10);
            var otu_labels = row.otu_labels.slice(0,10);
            var sample_values = row.sample_values.slice(0,10);
        }}
        console.log(sample_values, otu_IDs, otu_labels)
    
    let initialData = [{
        x: sample_values,
        y: otu_IDs,
        orientation: 'h',
        text: otu_labels,
        type: "bar"
    }];


    // Apply the title to the layout
    let layout = {
    title: "Top OTUs by Individual"
    };

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", initialData, layout);



});



// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var currentID = dropdownMenu.property("value");
  
        // Loop through the array of data
        for (let i = 0; i < samples.length; i++) {
            row = samples[i];
      
            // Compare value to selected argument
            if (row.id === currentID){
      
                // Initialize arrays
                // grab otu_ids from samples where "id" === currentID
                var otu_IDs = row.otu_ids;
                var otu_labels = row.otu_labels;
                var sample_values = row.sample_values;
            }
          }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("bar", "x", [otu_IDs]);
    Plotly.restyle("bar", "y", [sample_values]);
    Plotly.restyle("bar", "text", [otu_labels])
  }

      // Use `sample_values` as the values for the bar chart.
    // Use `otu_ids` as the labels for the bar chart.
    // Use `otu_labels` as the hovertext for the chart.