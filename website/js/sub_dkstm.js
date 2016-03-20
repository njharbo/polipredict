var public_spreadsheet_url_dkstm = 'https://docs.google.com/spreadsheets/d/164-zE9KPAldcQRwp8RH9i3sbi5otaULXJVCgrCYPuUg/pubhtml?gid=0&single=true'
function sub_dkstm() {
   Tabletop.init( { key: public_spreadsheet_url_dkstm,
                     callback: showInfo_dkstm,
                     simpleSheet: true } )
  }


  function showInfo_dkstm(data, tabletop) {
  
    var x = [],mf=[], llr=[],kj=[],kt=[],sg=[];

  for (var i=0; i<data.length; i++) {
    row = data[i];
    x.push( row['date'] );
    mf.push(  Math.round(10*row['mf'])/10 );
    llr.push(  Math.round(10*row['llr'])/10 );
    kj.push(  Math.round(10*row['kj'])/10 );
    kt.push(  Math.round(10*row['kt'])/10 );
    sg.push(  Math.round(10*row['sg'])/10 );
  }
  myfig_dkstm( x, mf,llr,kj,kt,sg  );
  }


function myfig_dkstm( x, y1,y2,y3,y4,y5  ){
  var line1 = { x: x,   y: y1 ,name :'Mette Frederiksen'};
  var line2 = { x: x,   y: y2 ,name :'Lars Løkke Rasmussen' };
  var line3 = { x: x,   y: y3 ,name :'Kristian Jensen' };
  var line4 = { x: x,   y: y4 ,name :'Kristian Thulesen Dahl' };
  var line5 = { x: x,   y: y5 ,name :'Søren Gade' };
  var data = [line1, line2,line3,line4, line5];
  

  var layout = {
    
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
  Plotly.newPlot('dkstmfig', data, layout, {showLink: false,  scrollZoom: false,  displaylogo: false,   modeBarButtonsToRemove: ['pan2d','select2d','sendDataToCloud','zoom2d','zoomIn2d ','zoomOut2d','autoScale2d','resetScale2d','lasso2d','select2d','zoomIn2d','hoverClosestCartesian','hoverCompareCartesian' ],});
};




