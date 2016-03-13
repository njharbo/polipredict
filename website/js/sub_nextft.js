var public_spreadsheet_url_nextft = 'https://docs.google.com/spreadsheets/d/1nNh0y_f86gPHGiN4J6Xwdou7zLY7rtV_aHsseAcaQqU/pubhtml?gid=0&single=true';

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
    range: [0, 50],
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
  Plotly.newPlot('nextftvalgfig', data, layout, {showLink: false,  scrollZoom: false,  displaylogo: false,   modeBarButtonsToRemove: ['pan2d','select2d','sendDataToCloud','zoom2d','zoomIn2d ','zoomOut2d','autoScale2d','resetScale2d','lasso2d','select2d','zoomIn2d','hoverClosestCartesian','hoverCompareCartesian' ],});
};




