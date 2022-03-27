var sampledata;

// Use the D3 library to read in samples.json
d3.json("../samples.json").then(function(data) {
    sampledata = data;
    console.log(sampledata)
    // let individuals = data.map(row => row.names)
    var subjects = sampledata.names
    select = document.getElementById('selDataset');
    for (let i = 0; i < subjects.length; i++) {
        var opt = document.createElement('option');
        row = subjects[i];
        opt.value = row;
        opt.innerHTML = row;
        select.appendChild(opt);
    };
    optionChanged(sampledata.names[0])
});

function optionChanged(selectedID) {

    // Grab the metadata for the selected ID
    // Loop through the array of data
    for (let i = 0; i < sampledata.metadata.length; i++) {
        row = sampledata.metadata[i];
        // Compare value to selected argument
        if (row.id == selectedID){
            var ethnicity = row.ethnicity;
            var gender = row.gender;
            var age = row.age;
            var location = row.location;
            var bbtype = row.bbtype;
            var wfreq = row.wfreq;
        }};
    

    // subjectCard 
    d3.select("#sample-metadata").html(`id: ${selectedID} <br>
            ethnicity: ${ethnicity}<br>
            gender:  ${gender}<br>
            age: ${age}<br>
            location: ${location}<br>
            bbtype: ${bbtype}<br>
            wash frequency: ${wfreq}`);
    

    // Create a horizontal bar chart with a dropdown menu to display the 
    // top 10 OTUs found in that individual.
    for (let i = 0; i < sampledata.samples.length; i++) {
        row = sampledata.samples[i];
    
        // Compare value to selected argument
        if (row.id == selectedID){       
            var otu_IDs = row.otu_ids;
            var otu_labels = row.otu_labels;
            var sample_values = row.sample_values;
        }}
    
    // Bar chart!
    let BarData = [{
        type: "bar",
        x: sample_values.slice(0,10),
        y: otu_IDs.slice(0,10).map(id => "OTU " + id.toString()),
        text: otu_labels.slice(0,10),
        orientation: 'h',
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
          }]
    }];
    


    // // Apply the title to the layout
    // let layout = {
    // title: "Top OTUs by Individual"
    // };

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", BarData);


    // Bubble chart!
    let BubbleData = [{
        x: otu_IDs,
        y: sample_values,
        mode: 'markers',
        text: otu_labels,
        marker: {
            color: otu_IDs,
            opacity: otu_IDs,
            size: sample_values
          }
    }];

    // Render the plot to the div tag with id "bubble"
    Plotly.newPlot("bubble", BubbleData);


        // Gauge chart!
        let GaugeData = [{
            domain: { x: [0, 1], y: [0, 1] },
		value: wfreq,
		title: { text: "Scrubs per Week" },
		type: "indicator",
		mode: "gauge",
        gauge: {
            axis: { range: [null, 9]},
            // bar: { color: "darkblue" },
            // bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 1], color: "cyan" },
              { range: [1, 2], color: "royalblue" },
              { range: [2, 3], color: "cyan" },
              { range: [3, 4], color: "royalblue" },
              { range: [4, 5], color: "cyan" },
              { range: [5, 6], color: "royalblue" },
              { range: [6, 7], color: "cyan" },
              { range: [7, 8], color: "royalblue" },
              { range: [8, 9], color: "royalblue" }
            ]}
        }];
    
    
        // Render the plot to the div tag with id "gauge"
        Plotly.newPlot("gauge", GaugeData);

    };


// This function is called when a dropdown menu item is selected
// function optionChanged(currentID) {
//     console.log(currentID)
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    // var currentID = dropdownMenu.property("value");
  
        // // Loop through the array of samples data
        // for (let i = 0; i < sampledata.samples.length; i++) {
        //     row = sampledata.samples[i];
      
        //     // Compare value to selected argument
        //     if (row.id == currentID){
        //         var otu_IDs = row.otu_ids;
        //         var otu_labels = row.otu_labels;
        //         var sample_values = row.sample_values;
        //     }
        //   }

        // // Loop through the array of metadata
        // for (let i = 0; i < sampledata.metadata.length; i++) {
        //     row = sampledata.metadata[i];
      
        //     // Compare value to selected argument
        //     if (row.id == currentID){
        //         var ethnicity = row.ethnicity;
        //         var gender = row.gender;
        //         var age = row.age;
        //         var location = row.location;
        //         var bbtype = row.bbtype;
        //         var wfreq = row.wfreq;
        //     }
        //   }
  
    // Note the extra brackets around 'x' and 'y'
    // Plotly.restyle("bar", "x", [otu_IDs]);
    // Plotly.restyle("bar", "y", [sample_values]);
    // Plotly.restyle("bar", "text", [otu_labels]);

    //
    // Put the bubble chart here with restyle
    //


      // Use `sample_values` as the values for the bar chart.
    // Use `otu_ids` as the labels for the bar chart.
    // Use `otu_labels` as the hovertext for the chart.

    // Plotly.restyle("gauge", "value", wfreq);
    // console.log(wfreq)

    // rendering(currentID) 

//     3. Create a bubble chart that displays each sample.

// * Use `otu_ids` for the x values.
// * Use `sample_values` for the y values.
// * Use `sample_values` for the marker size.
// * Use `otu_ids` for the marker colors.
// * Use `otu_labels` for the text values.

//   }

