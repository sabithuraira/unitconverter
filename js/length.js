
var length = {

    init: function init() {
        'use strict';
        	
        this.selectedUnit=0;
        this.enteredValue=1;
    	this.datas=["mm", "cm", "dm", "m", "dam", "hm", "km"];
        
        this.form_length=document.getElementById('form_length');
        this.dropdown_length=document.getElementById("dropdown_length");
        this.body_length=document.getElementById("body_length");
        
        this.generateView();
        this.bindEvents();
    },
    bindEvents: function bindEvents() {
        'use strict';

        var form_length=document.getElementById('form_length');
        var dropdown_length=document.getElementById("dropdown_length");
        var self = this;

        dropdown_length.addEventListener('change',function onChange(){
        	self.selectedUnit = this.selectedIndex;
        	self.refreshResult();
        });
        
        form_length.addEventListener('change', function onChange(){
        	self.enteredValue = this.value;
        	self.refreshResult();
        });
    },
    generateView: function generateView(){
    	for(var i=0;i<this.datas.length;++i){
    		var opt = document.createElement('option');
    	    opt.value = i;
    	    opt.innerHTML = this.datas[i];
    	    this.dropdown_length.appendChild(opt);
    	    
    	    var li_form=document.createElement('li');
    	    li_form.innerHTML = this.datas[i]+"<span class='li-text-sub' id='result_length"+i+"'></span>";
    	    li_form.setAttribute("class", "ui-li-static");
    	    this.body_length.appendChild(li_form);
    	}
    	this.refreshResult();
    },
    refreshResult: function refreshResult(){
    	'use strict';
    	
    	for(var i=0;i< this.datas.length;++i){
    	   var row_unit=document.getElementById('result_length'+i);
    	   row_unit.innerHTML = this.enteredValue * Math.pow(10, (i - this.selectedUnit));
    	}
    },
    
};
