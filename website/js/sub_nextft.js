var public_spreadsheet_url_nextft = 'https://docs.google.com/spreadsheets/d/1JXRO7WvmR_i19aCYUehxUw9IorBR75yq0wEADXFajGU/pubhtml?gid=0&single=true';

function sub_nextft() {
   Tabletop.init( { key: public_spreadsheet_url_nextft,
                     callback: showInfo_nextft,
                     simpleSheet: true } )
  }


  function showInfo_nextft(data, tabletop) {
  
    var x = [], y2016 = [], y2017=[]; y2018=[]; y2019=[];

  for (var i=0; i<data.length; i++) {
    row = data[i];
    x.push( row['date'] );
    y2016.push( row['2016'] );
    y2017.push( row['2017'] );
    y2018.push( row['2018'] );
    y2019.push( row['2019'] );
  }
  fig_nextft( x, y2016, y2017, y2018 , y2019   );
  }


function fig_nextft( x, y1,y2,y3,y4  ){
  var line1 = { x: x,   y: y1 ,name :'2016'};
  var line2 = { x: x,   y: y2 ,name :'2017' };
  var line3 = { x: x,   y: y3 ,name :'2018' };
  var line4 = { x: x,   y: y4 ,name :'2019' }
  var data = [line1, line2,line3,line4];

  var layout = {
     annotations: [{
    xref: 'paper',
    yref: 'paper',
     x: .99,
    xanchor: 'right',
    y: 0.03,
    font: {   family: ' sans-serif'},
    yanchor: 'bottom',
    text: '&copy; polipredict.dk',
    showarrow: false
  }],
    legend : {
       xanchor:"center",
    yanchor:"top",
      y:1.3, // play with it
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
          ticklen: 7,
     tickcolor:"white",
    linecolor: '#000',
    title: '',
    titlefont: {
        family: 'sans-serif',
      size: 14,
      color: '#7f7f7f'
    },
    tickfont: {
       family: 'sans-serif',
      size: 14,
      color: 'black'
    },
    tickangle: 0,
  },
  yaxis: {
    range: [0, 50],
     showgrid: false,
    dtick: 10,
    title: 'Sandsynlighed i pct.',
     linewidth: 1,
    linecolor: '#000',
    titlefont: {
      family: 'sans-serif',
      size: 14,
      color: 'black'
    },
    tickfont: {
        family: 'sans-serif',
      size: 14,
      color: 'black'
    }
  }
};
  Plotly.newPlot('nextftvalgfig', data, layout, {showLink: false,  scrollZoom: false,  displaylogo: false,   modeBarButtonsToRemove: ['pan2d','select2d','sendDataToCloud','zoom2d','zoomIn2d ','zoomOut2d','autoScale2d','resetScale2d','lasso2d','select2d','zoomIn2d','hoverClosestCartesian','hoverCompareCartesian' ],});
};




