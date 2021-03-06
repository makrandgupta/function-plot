'use strict';

// functionPlot({
//   target: '#playground',
//   data: [{
//     fn: 'x^2'
//   }]
// })
var cursor = 0;
var fp = functionPlot(makeSettings(0));

// var mouseMoveListener = fp.listeners('mousemove')[0];
// fp.removeListener('mousemove', mouseMoveListener);
// fp.on('updateTip', mouseMoveListener);

// var mouseOutListener = fp.listeners('mouseout')[0];
// fp.removeListener('mouseout', mouseOutListener);

// // var mouseOutListener = fp.listeners('mouseout')[0];
// // fp.removeListener('mouseout', mouseOutListener);

// document.addEventListener('keydown', function(event) {
// 	// console.log(event)
// 	switch (event.key) {
// 		case 'ArrowRight':
// 			cursor++;
// 			console.log('right trigger', cursor)
// 			break;
// 		case 'ArrowLeft':
// 			cursor--;
// 			console.log('left trigger', cursor);
// 			break;
// 		default:
// 			return;
// 	}
// 	console.log(makeSettings(cursor))
// 	functionPlot(makeSettings(cursor));
// 	fp.emit('updateTip', {x: cursor, y: 0});
// }, false);

function makeSettings(cursor) {
	return {
  target: '#playground',
  width: 300,
  height: 180,
  // xTickValues: [1, 2, 3, 4],
  // yTickValues: [-1, -2, -3, 4],
  // ticks: 4,

  grid: true,
  tip: {
  	xLine: true,
  	yLine: true,
    renderer: function(x, y, index) {
      return x + ", " + y;
    }, 
  },
  xAxis: {
  	domain: [0, 1200],
    label: 'vol'
  },
	yAxis: {
  	domain: [0, 40],
    label: 'height'
  },
  xTicks: 6,
  data: [
    { 
    	fn: 'x/40', 
    	sampler: 'builtIn', 
    	graphType: 'polyline',
    	range: [0, 800],
    	color: 'red',
    },
    {
    	fn: '((x-200)/200)^2 + 11', 
    	sampler: 'builtIn', 
    	graphType: 'polyline',
    	range: [800, 1200]
    },
    // { 
    // 	fn: '(x/20) - 23', 
    // 	sampler: 'builtIn', 
    // 	graphType: 'polyline',
    // 	range: [1000, 1200],
    // 	color: 'red',
    // },
    // { 
    // 	fn: '(x/40)', 
    // 	sampler: 'builtIn', 
    // 	graphType: 'polyline',
    // 	range: [0, 1200],
    // 	color: 'blue',
    // }
  ]
};
}

// functionPlot({
//   target: '#playground',
//   width: 1200,
//   height: 400,
//   data: [{
//     fn: 'x^2'
//   }]
// })

// var instance = functionPlot({
//   title: 'test',
//   target: '#playground',
//   grid: true,
//   data: [{
//     fn: 'x * x + y * y - 1',
//     fnType: 'implicit'
//   }]
// })
//instance.on('programmatic-zoom', function () {
//  console.log('end')
//})

// // linked graphs
// var a = functionPlot({
//   target: '#linked-a-multiple',
//   height: 250,
//   xAxis: {domain: [-10, 10]},
//   data: [{ fn: 'x * x' }]
// })
// var b = functionPlot({
//   target: '#linked-b-multiple',
//   height: 250,
//   xAxis: {domain: [-20, 20]},
//   data: [{ fn: '2 * x' }]
// })
// a.addLink(b)
// b.addLink(a)

//// annotation test
//functionPlot({
//  target: '#playground',
//  data: [{
//    fn: 'x * x'
//  }],
//  annotations: [{
//    x: 2,
//    text: 'x = 2'
//  }, {
//    y: 2,
//    text: 'y = 2'
//  }]
//});

//// implicit
//functionPlot({
//  target: '#playground',
//  data: [{
//    fn: 'x * x + y * y - 1',
//    fnType: 'implicit'
//  }]
//});
