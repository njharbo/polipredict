var public_spreadsheet_url_cameron ='https://docs.google.com/spreadsheets/d/1SehCqTJske0Lk9G8cSF5NH6ycUwyLmB3IHBwaQ10EJk/pubhtml?gid=0&single=true'

function sub_cameron() {
   Tabletop.init( { key: public_spreadsheet_url_cameron,
                     callback: showInfo_cameron,
                     simpleSheet: true } )
  }


  function showInfo_cameron(data, tabletop) {
  
    var x = [], y2016 = [], y2017=[], y2018=[], y2019=[], y2020=[],y2021=[]  ;

  for (var i=0; i<data.length; i++) {
    row = data[i];
    x.push( row['date'] );
    y2016.push( row['2016'] );
    y2017.push( row['2017'] );
    y2018.push( row['2018'] );
    y2019.push( row['2019'] );
    y2020.push( row['2020'] );
    y2021.push( row['2021'] );
  }
  fig_cameron( x, y2016, y2017, y2018 , y2019, y2020,y2021   );
  }


function fig_cameron( x, y1,y2,y3,y4,y5,y6  ){
  var line1 = { x: x,   y: y1 ,name :'2016',mode: 'lines'};
  var line2 = { x: x,   y: y2 ,name :'2017',mode: 'lines' };
  var line3 = { x: x,   y: y3 ,name :'2018' ,mode: 'lines'};
  var line4 = { x: x,   y: y4 ,name :'2019' ,mode: 'lines'}
  var line5 = { x: x,   y: y5 ,name :'2020' ,mode: 'lines'}
  var line6 = { x: x,   y: y6 ,name :'2021' ,mode: 'lines'}
  var data = [line1, line2,line3,line4,line5,line6];

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
  Plotly.newPlot('cameronfig', data, layout, {showLink: false,  scrollZoom: false,  displaylogo: false,   modeBarButtonsToRemove: ['pan2d','select2d','sendDataToCloud','zoom2d','zoomIn2d ','zoomOut2d','autoScale2d','resetScale2d','lasso2d','select2d','zoomIn2d','hoverClosestCartesian','hoverCompareCartesian' ],});
};




