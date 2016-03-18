var public_spreadsheet_urlftv2015 = 'https://docs.google.com/spreadsheets/d/10wzoBvWqH2p5rBoy64SSqABQe24HFe1Mt3FhPd1QReo/pubhtml?gid=0&single=true';

function sub_ftv2015() {
   Tabletop.init( { key: public_spreadsheet_urlftv2015,
                     callback: showInfoftv2015,
                     simpleSheet: true } )
  }


  function showInfoftv2015(data, tabletop) {
  
    var x = [],hts_mean=[],hts_min=[],hts_max=[],llr_mean=[];llr_min=[]; ;llr_max=[]; 

  for (var i=0; i<data.length; i++) {
    row = data[i];
    x.push( row['date'] );
    llr_mean.push( Math.round(10*row['llr_mean'] )/10);
    llr_min.push( Math.round(10*row['llr_min'] )/10);
    llr_max.push( Math.round(10*row['llr_max'] )/10);
    hts_mean.push(Math.round( 10*row['hts_mean'])/10 );
    hts_min.push( Math.round(10*row['hts_min'])/10 );
    hts_max.push(Math.round( 10*row['hts_max'])/10 );
  }
  myfigftv2015( x, llr_mean,llr_min,llr_max,hts_mean, hts_max,hts_min );
  }


function myfigftv2015( x, y1,y1up,y1low, y2, y2up,y2low  ){
     var line1 = { x: x,   y: y1 ,name :'llr_mean'};
  // LLR area
  var trace1 = {
  x: x, 
  y: y1low, 
  line: {width: 0}, 
  marker: {color: "444"}, 
  mode: "lines", 
  
  name: "Lower Bound", 
  type: "scatter",
   showlegend: false,
      hoverinfo:'none', 
};

var trace3 = {
  x: x, 
  y: y1up,
  fill: "tonexty", 
  fillcolor: "#99b3ff", 
  line: {width: 0}, 
  marker: {color: "444"}, 
  mode: "lines", 
  name: "Upper Bound", 
  type: "scatter",
    showlegend: false,
       hoverinfo:'none', 
};
// HTS area
var trace4 = {
  x: x, 
  y: y2low, 
  line: {width: 0}, 
  marker: {color: "#ff8080"}, 
  mode: "lines", 
  name: "Lower Bound", 
  type: "scatter",
    showlegend: false,
       hoverinfo:'none', 
};
var trace6 = {
  x: x, 
  y: y2up,
  fill: "tonexty", 
  fillcolor: " #ff8080", 
  line: {width: 0}, 
  marker: {color: "#ff8080"}, 
  mode: "lines", 
  name: "Upper Bound", 
  type: "scatter",
    showlegend: false,
       hoverinfo:'none', 
};
/// HTS main
var trace5 = {
  x: x, 
  y: y2,
  line: {color: "#ff0000"}, 
  mode: "lines", 
  name: "Helle Thorning-Schmidt", 
  type: "scatter"
};
/// LLR main
var trace2 = {
  x: x, 
  y: y1,
  line: {color: "#0039e6"}, 
  mode: "lines", 
  name: "Lars Løkke Rasmussen", 
  type: "scatter"
};
  data=[trace1,trace3,trace4,trace6,trace5,trace2]
  var layout = {
     legend:{
       xanchor:"center",
    yanchor:"top",
      y:5.3, // play with it
    x:0.5   // play with it
    },
     titlefont: {
     family: 'Sans-serif',
     size: 16,
     color: 'black'
    },
  xaxis: {

    showgrid: false,
     linewidth: 1,
    linecolor: '#000',
    title: '',
    titlefont: {
        family: 'Courier New, monospace',
      size: 14,
      color: '#7f7f7f'
    },
    tickfont: {
       family: 'Courier New, monospace',
      size: 14,
      color: 'black'
    },
    tickangle: 45,
  },
  yaxis: {
    range: [0, 70],
     showgrid: false,
    dtick: 10,
    title: 'Sandsynlighed i pct.',
     linewidth: 1,
    linecolor: '#000',
    titlefont: {
      family: 'Courier New, monospace',
      size: 14,
      color: '#7f7f7f'
    },
    tickfont: {
        family: 'Courier New, monospace',
      size: 14,
      color: 'black'
    }
  }

};
  Plotly.newPlot('ftvalg2015fig', data, layout, {showLink: false,  scrollZoom: false,  displaylogo: false,   modeBarButtonsToRemove: ['pan2d','select2d','sendDataToCloud','zoom2d','zoomIn2d ','zoomOut2d','autoScale2d','resetScale2d','lasso2d','select2d','zoomIn2d','hoverClosestCartesian','hoverCompareCartesian' ],});
};




