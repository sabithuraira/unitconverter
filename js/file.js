
var file = {

    init: function init() {
        'use strict';
        	
        this.selectedUnit=0;
        this.enteredValue=1;
    	this.datas=["bit", "byte", "kB", "KiB", "MiB", "GiB", "TiB", "PiB"];
    	this.unit=[1, 8, 8000, 8192, (8192*1024), (8192*1024*1024), (8192*1024*1024*1024), (8192*1024*1024*1024*1024)];
        
        this.form_file=document.getElementById('form_file');
        this.dropdown_file=document.getElementById("dropdown_file");
        this.body_file=document.getElementById("body_file");
        
        this.generateView();
        this.bindEvents();
    },
    bindEvents: function bindEvents() {
        'use strict';

        var form_file=document.getElementById('form_file');
        var dropdown_file=document.getElementById("dropdown_file");
        var self = this;

        dropdown_file.addEventListener('change',function onChange(){
        	self.selectedUnit = this.selectedIndex;
        	self.refreshResult();
        });
        
        form_file.addEventListener('change', function onChange(){
        	self.enteredValue = this.value;
        	self.refreshResult();
        });
    },
    generateView: function generateView(){
    	for(var i=0;i<this.datas.length;++i){
    		var opt = document.createElement('option');
    	    opt.value = i;
    	    opt.innerHTML = this.datas[i];
    	    this.dropdown_file.appendChild(opt);
    	    
    	    var li_form=document.createElement('li');
    	    li_form.innerHTML = this.datas[i]+"<span class='li-text-sub' id='result_file"+i+"'></span>";
    	    li_form.setAttribute("class", "ui-li-static");
    	    this.body_file.appendChild(li_form);
    	}
    	this.refreshResult();
    },
    refreshResult: function refreshResult(){
    	'use strict';
    	
    	for(var i=0;i< this.datas.length;++i){
    	   var row_unit=document.getElementById('result_file'+i);
    	   row_unit.innerHTML = this.enteredValue * this.unit[this.selectedUnit]  /  this.unit[i] ;
    	}
    },
    
};
