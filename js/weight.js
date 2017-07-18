
var weight = {

    init: function init() {
        'use strict';
        	
        this.selectedUnit=0;
        this.enteredValue=1;
    	this.datas=["mg", "cg", "dg", "g", "dag", "hg (ons)", "kg", "quintal", "ton"];
        
        this.form_weight=document.getElementById('form_weight');
        this.dropdown_weight=document.getElementById("dropdown_weight");
        this.body_weight=document.getElementById("body_weight");
        
        this.generateView();
        this.bindEvents();
    },
    bindEvents: function bindEvents() {
        'use strict';

        var form_weight=document.getElementById('form_weight');
        var dropdown_weight=document.getElementById("dropdown_weight");
        var self = this;

        dropdown_weight.addEventListener('change',function onChange(){
        	self.selectedUnit = this.selectedIndex;
        	self.refreshResult();
        });
        
        form_weight.addEventListener('change', function onChange(){
        	self.enteredValue = this.value;
        	self.refreshResult();
        });
    },
    generateView: function generateView(){
    	for(var i=0;i<this.datas.length;++i){
    		var opt = document.createElement('option');
    	    opt.value = i;
    	    opt.innerHTML = this.datas[i];
    	    this.dropdown_weight.appendChild(opt);
    	    
    	    var li_form=document.createElement('li');
    	    li_form.innerHTML = this.datas[i]+"<span class='li-text-sub' id='result_weight"+i+"'></span>";
    	    li_form.setAttribute("class", "ui-li-static");
    	    this.body_weight.appendChild(li_form);
    	}
    	this.refreshResult();
    },
    refreshResult: function refreshResult(){
    	'use strict';
    	
    	for(var i=0;i< this.datas.length;++i){
    	   var row_unit=document.getElementById('result_weight'+i);
    	   var result;
    	   
    	   if(i==7 || i==8){
    		   result = this.enteredValue * Math.pow(10, (i - this.selectedUnit + 1));
    	   }
    	   else{
    		   result= this.enteredValue * Math.pow(10, (i - this.selectedUnit));
    	   }
    	   row_unit.innerHTML = result;
    	}
    },
    
};
