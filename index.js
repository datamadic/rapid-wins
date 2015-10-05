fin.desktop.main(init);

// var startchatty = document.getElementById('startchatty'),
// 	stopchatty = document.getElementById('stopchatty'),
// 	numsent = document.getElementById('numsent'),
// 	numsentsend = document.getElementById('numsentsend'),
// 	startdirect = document.getElementById('startdirect'),
// 	stopdirect = document.getElementById('stopdirect'),
// 	wins = document.getElementById('wins'), 
// 	grandeMessage = {},
// 	state = {
// 		chatonPub: false,
// 		chatonSend: false,
// 		msgsSentPub: 0,
// 		msgsSentSend: 0
// 	},
// 	winNames = [0,1,2,3,4],
// 	winURL = location.origin + '/empty.html?a=',
// 	createdWins;


// Object.observe(state, function(a){
// 	var change = a[0];

// 	switch (change.name){
// 		case 'chatonPub': blastMessagesPublish(); break;
// 		case 'chatonSend': blastMessagesSend(); break;
// 		case 'msgsSentPub': updateSentPub(); break;
// 		case 'msgsSentSend': updateSent(); break;
// 		default: break;
// 	}
// });

// startchatty.addEventListener('click', function(){
// 	state.chatonPub = true;
// });

// stopchatty.addEventListener('click', function(){
// 	state.chatonPub = false;
// });

// startdirect.addEventListener('click', function(){
// 	state.chatonSend = true;
// });

// stopdirect.addEventListener('click', function(){
// 	state.chatonSend = false;
// });

// wins.addEventListener('click', function(){
// 	windowShuffle();
// });

// function windowShuffle () {
// 	createdWins = winNames.map(function(name){
// 		return new fin.desktop.Window({
// 			name: name+'',
// 			uuid: name+'',
// 			autoShow: true,
// 			url: winURL + name
// 		});
// 	});
// };










// function blastMessagesPublish(){
// 	if (state.chatonPub) {
// 		++state.msgsSentPub;
// 		fin.desktop.InterApplicationBus.publish(
// 			'test', 
// 			grandeMessage);
// 		setTimeout(blastMessagesPublish, 100);
// 	}
// }

// function blastMessagesSend(){
// 	if (state.chatonSend) {
// 		++state.msgsSentSend;
// 		fin.desktop.InterApplicationBus.send('noone','test', grandeMessage, function(){
// 			console.log('hey');
// 		},
// 		function(){
// 			console.log('hey hommie');
// 		});
// 		setTimeout(blastMessagesSend, 100);
// 	}
// }

// function updateSentPub() {
// 	numsent.innerHTML = state.msgsSentPub;
// }

// function updateSent() {
// 	numsentsend.innerHTML = state.msgsSentSend;
// }


function init() {
	var version = document.getElementById('version');

	version.innerHTML = fin.desktop.getVersion();

	var wins = document.getElementById('wins');

	wins.addEventListener('click',  wnopen.bind(null, 2000));

    // var recApp = new fin.desktop.Application({
    //     url: location.origin + '/rec.html',
    //     name: 'rec',
    //     uuid: 'rec',
    //     autoShow: true
    // }, function() {
    //     recApp.run();
    // });

    // debugger;

    // fin.desktop.System.launchExternalProcess({
    //         path: "notepad",
    //         arguments: "",
    //         listener: function(exit) {
    //             console.log(console.log('the exit code', exit));

    //         }
    //     },
    //     function sus(argument) {
    //         console.log('great success', argument);
    //     },
    //     function fail(argument) {
    //         console.log('you suck', argument);
    //     });


    

    // function wnopen() {
    //     var newWin = new fin.desktop.Window({
    //             name: 'Orders 1',
    //             url: 'about:blank'
    //         },
    //         function() {
    //             newWin.addEventListener('closed', function() {
    //                 --numWins;

    //                 if (numWins > 0) {
    //                    // wnopen()
    //                 }
    //             });

    //             newWin.show(newWin.close.bind(newWin, true));
    //             // newWin.show(function() {
    //             //     newWin.close(true);
    //             // });
    //         });
    // }


    // wnopen();

    //console.log('asdfasdfasdfasdf');
    //
    

    //debugger;
    // fin.desktop.Window.getCurrent().moveBy(10,10)
    
    //var numWins = 100;

    function wnopen(numWins) {

        console.log('%c open called', 'background: goldenrod; color: bluesteel');

        var newWin = new fin.desktop.Window({
                name: 'Orders 1',
                url: 'about:blank',
                autoShow: true
            },
            function() {
            	console.log('window success', numWins);
                newWin.addEventListener('closed', function closeListener() {
										console.log('%c window closed  ' +  numWins, 'background: red');
                    newWin.removeEventListener('closed', closeListener, function() {
                        --numWins;
                        
                        if (numWins > 0) {
                            wnopen(numWins);
                        }
                    });
                }, function() {
                    console.log('show and close', numWins);
                    newWin.show(function() {
                        newWin.close(true);
                    });
                });
            });
    }


   // wnopen(2000);



}


// //


//line 2136
//event.action !== "ack" && event.payload.type === "closed"
//delete windowList[me.name];


// function reqListener () {
// 	console.log('loaded the grande message');
// 	grandeMessage = JSON.parse(this.responseText);
//   	//console.log(typeof JSON.parse(this.responseText));

// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "./34k.json");
// oReq.send();

/*
fin.desktop.Window.getCurrent().getBounds(function reRun(){
	//console.log('asdf');
	fin.desktop.Window.getCurrent().getBounds(reRun);
})
 */

/*

createdWins[2].moveTo(0,0);


createdWins.slice(1,3).forEach(function(a){console.log('closing '+ a.name);a.close()});


var win2 = new fin.desktop.Window(
{
	name: '2',
	uuid: '2',
	autoShow: true,
	url: winURL + '2'
}
);

createdWins[2].moveTo(100,100);


var win1 = new fin.desktop.Window(
{
	name: '1',
	uuid: '1',
	autoShow: true,
	url: winURL + '1'
}
);

{
	name: '3',
	uuid: '3',
	autoShow: true,
	url: winURL + '3'
}


payload.type === "external-process-exited"
 

*/
