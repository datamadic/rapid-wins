fin.desktop.main(init);


var msgsrec = document.getElementById('msgsrec'),
	numMsgs = 0;

function init() {
	fin.desktop.InterApplicationBus.subscribe('*', 'test', function (){
		//console.log(arguments[0]);
		msgsrec.innerHTML = ++numMsgs;
	});
}