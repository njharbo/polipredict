var public_spreadsheet_url_usapres = 'https://docs.google.com/spreadsheets/d/1iZfQDUV2D0TA6a5NkehAdTWsjS6fDQaJmNVUs4r6mV0/pubhtml?gid=0&single=true'
function sub_usapres() {
   Tabletop.init( { key: public_spreadsheet_url_usapres,
                     callback: showInfo_usapres,
                     simpleSheet: true } )
  }


  function showInfo_usapres(data, tabletop) {
  
    var x = [],bf_demo=[], bf_rep=[];

  for (var i=0; i<data.length; i++) {
    row = data[i];
    x.push( row['date'] );
    bf_demo.push( row['bf_demo'] );
    bf_rep.push( row['bf_rep'] );
  }
  myfig_usapres( x, bf_demo, bf_rep);
  }


function myfig_usapres( x, y1,y2,y3,y4  ){
  var line1 = { x: x,   y: y1 ,name :'Democrats'};
  var line2 = { x: x,   y: y2 ,name :'Republicans' };
  var data = [line1, line2];

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
    range: [0, 100],
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
  Plotly.newPlot('usapresfig', data, layout, {showLink: false,  scrollZoom: false,  displaylogo: false,   modeBarButtonsToRemove: ['pan2d','select2d','sendDataToCloud','zoom2d','zoomIn2d ','zoomOut2d','autoScale2d','resetScale2d','lasso2d','select2d','zoomIn2d','hoverClosestCartesian','hoverCompareCartesian' ],});
};




