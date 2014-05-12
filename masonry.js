/*
    -- this is for sorting the elements into masonry format
	-- written by santhi kabir
    -- contact santhikabir@gmail.com, https://www.facebook.com/santhi.kabir
*/


var masonry = {
    // select the item to be masonry assuming only the class elements
    "item" : "",
	// select the width to be set
	"width" : "",
	// select the height to be set
	"height" : "",
	// select the horizontal gap between the two items
	"marg" : "",
	// select the vertical gap between the two items
	"Vmarg" : "",
	// select the left gap
	"leftPadding" : "",
	// select the right gap
	"rightPadding" : "",
	// select the top margin
	"topPadding" : "",
	
	// other parameters that for sorting these are no need to be set
	"cols" : "",
	// function to check all the parameters
	"checkParameters" : function(){
	
	    // checks all the parameters
	    if(this.item == ""){
		    alert("this item not extist");
		    return false;
		}
		if(this.width == "" || !Number(this.width)){
		    if(this.width = $("." + this.item).width() ){
			}
			else{
			    this.width = 300;
			}
		}
		if(this.height == "" || !Number(this.height)){
		    if(this.height = $("." + this.item).height()){
			}
			else{
			    this.height = 300;
			}
		}
		if(this.leftPadding == "" || !Number(this.leftPadding)){
		    this.leftPadding = 45;
		}
		if(this.rightPadding == "" || !Number(this.rightPadding)){
		    this.rightPadding = 45;
		}
		if(this.topPadding == "" || !Number(this.topPadding)){
		    this.topPadding = 100;
		}
		if(this.marg == "" || !Number(this.marg)){
		    this.marg = 20;
		}
		if(this.Vmarg == "" || !Number(this.Vmarg)){
		    this.Vmarg = 20;
		}
		
		return true;
	},
	// implement the function
	"implement" : function(){
	    if(! this.checkParameters() ){
		    return false;
		};
				
		$docWidth = $(document).width();
        
		// set the columns
		
		// remove the right and left padding
		// now each element is considered as sum of width of element and margin to find number of columns
		$top = $docWidth - this.leftPadding - this.rightPadding;
		
		$down = this.width + this.marg;
		
		$cols = Math.floor( $top / $down );
		
		if($cols < 2 ){
		    this.cols = 2;
			// return; // is it better if bootstrap handle this??... it might be mobiles
		}
		else{
		    this.cols = $cols;
		}
		
		// creating the array to store the position top values
		var cols_array = new Array;
		for(var i = 0; i < this.cols; i++){
		    cols_array.push(this.topPadding);
			console.log(cols_array[i]);
		}
		
		
		// using jquery each function
		var row_id = "";
		$cols = this.cols;
		$ab = this.width + this.marg;
		$left = this.leftPadding;
		$Vmarg = this.Vmarg;
		
		$("." + this.item).each(function(i){
		
		    row_id = i % $cols;
			$top = cols_array[row_id];
			$lefta = ($ab) * (row_id) + $left;
			
			//this.setAttribute("style", "position:absolute; top: " + $top + "px;left:" + $lefta + "px;");
			$(this).css("position", "absolute");
			$(this).css("top", $top);
			$(this).css("left", $lefta);
			cols_array[row_id] += $(this).height() + $Vmarg;
			
		});
		
		return true;
	}
};
