;(function(){
	var $ = function(seletor){
		return document.getElementsByClassName(seletor);
	}

	var eleDustbin = $('dustbin')[0],
		eleDrags = new Array();
		

	for(var j = 0; j< $('draglist').length; j++){
		if($('draglist')[j]){
			eleDrags.push($('draglist')[j]);
		}
	}
	console.log(eleDrags);

	var lDrags = eleDrags.length,
		eleRemind = $('dragremind')[0],
		eleDrag = null;

	eleDrags.forEach(function(index){
			index.onselectstart = function(){
				return false;
			};
			

			index.ondragstart = function(ev){
				// 拖拽开始
				ev.dataTransfer.effectAllowed = 'move';

				ev.dataTransfer.setData('text', ev.target.innerHTML);

				eleDrag = ev.target;
				
				return true;
			};


			index.ondragend = function(ev) {
	        /*拖拽结束*/
	        ev.dataTransfer.clearData('text');
	        eleDrag = null;
	        return false
	    	};
    });

  //   for (var i=0; i<lDrags; i+=1) {
	//     eleDrags[i].onselectstart = function() {
	//         return false;
	//     };
	//     eleDrags[i].ondragstart = function(ev) {
	//         /*拖拽开始*/
	//         //拖拽效果
	//         ev.dataTransfer.effectAllowed = "move";
	//         ev.dataTransfer.setData("text", ev.target.innerHTML);
	//         ev.dataTransfer.setDragImage(ev.target, 0, 0);
	//         eleDrag = ev.target;
	//         return true;
	//     };
	//     eleDrags[i].ondragend = function(ev) {
	//         /*拖拽结束*/
	//         ev.dataTransfer.clearData("text");
	//         eleDrag = null;
	//         return false
	//     };
	// }
	
    eleDustbin.ondragover = function(ev) {

    /*拖拽元素在目标元素头上移动的时候*/
    ev.preventDefault();
    return true;
	};
	
	eleDustbin.ondragenter = function(ev) {
	    /*拖拽元素进入目标元素头上的时候*/
	    ev.target.style.color = "red";
	    return true;
	};
	eleDustbin.ondrop = function(ev) {
	    /*拖拽元素进入目标元素头上，同时鼠标松开的时候*/
	    
	   
	    if (eleDrag) {
	    	console.log(11);
	        eleRemind.innerHTML = '<strong>"' + eleDrag.innerHTML + '"</strong>被扔进了垃圾箱';
	        eleDrag.parentNode.removeChild(eleDrag);
	    }
	    ev.target.style.color = "#000000";
	    return false;
	};
	
})();