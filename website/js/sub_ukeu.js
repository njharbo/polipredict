var public_spreadsheet_url_ukeu = 'https://docs.google.com/spreadsheets/d/1gsV51pf_nONnFjESV3izDGDCnFXzDJ6SNIZIVc6AF0k/pubhtml?gid=0&single=true';

function sub_ukeu() {
   Tabletop.init( { key: public_spreadsheet_url_ukeu,
                     callback: showInfo_ukeu,
                     simpleSheet: true } )
  }


  function showInfo_ukeu(data, tabletop) {
    var x = [], stay = [],leave=[];

  for (var i=0; i<data.length; i++) {
    row = data[i];
    x.push( row['date'] );
    stay.push( row['stay'] );
    leave.push( row['leave'] );
  }
  myfig_ukeu( x, stay, leave  );
  }


function myfig_ukeu(x, stay, leave  ){
  var line1 = { x: x,   y: stay ,name :'Stay'};
  var line2 = { x: x,   y: leave ,name :'Leave' };
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
    dtick: 25,
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
  Plotly.newPlot('ukeufig', data, layout, {showLink: false,  scrollZoom: false,  displaylogo: false,   modeBarButtonsToRemove: ['pan2d','select2d','sendDataToCloud','zoom2d','zoomIn2d ','zoomOut2d','autoScale2d','resetScale2d','lasso2d','select2d','zoomIn2d','hoverClosestCartesian','hoverCompareCartesian' ],});
};



