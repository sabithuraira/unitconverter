
var time = {

    init: function init() {
        'use strict';
        	
        this.selectedUnit=0;
        this.enteredValue=1;
    	this.datas=["ms", "sec", "minute", "hour", "day", "week", "month", "year"];
    	this.unit=[1, 1000, (1000*60),(1000*60*60), (1000*60*60*24), (1000*60*60*24*7), (1000*60*60*24*30),(1000*60*60*24*365)];
        
        this.form_time=document.getElementById('form_time');
        this.dropdown_time=document.getElementById("dropdown_time");
        this.body_time=document.getElementById("body_time");
        
        this.generateView();
        this.bindEvents();
    },
    bindEvents: function bindEvents() {
        'use strict';

        var form_time=document.getElementById('form_time');
        var dropdown_time=document.getElementById("dropdown_time");
        var self = this;

        dropdown_time.addEventListener('change',function onChange(){
        	self.selectedUnit = this.selectedIndex;
        	self.refreshResult();
        });
        
        form_time.addEventListener('change', function onChange(){
        	self.enteredValue = this.value;
        	self.refreshResult();
        });
    },
    generateView: function generateView(){
    	for(var i=0;i<this.datas.length;++i){
    		var opt = document.createElement('option');
    	    opt.value = i;
    	    opt.innerHTML = this.datas[i];
    	    this.dropdown_time.appendChild(opt);
    	    
    	    var li_form=document.createElement('li');
    	    li_form.innerHTML = this.datas[i]+"<span class='li-text-sub' id='result_time"+i+"'></span>";
    	    li_form.setAttribute("class", "ui-li-static");
    	    this.body_time.appendChild(li_form);
    	}
    	this.refreshResult();
    },
    refreshResult: function refreshResult(){
    	'use strict';
    	
    	for(var i=0;i< this.datas.length;++i){
    	   var row_unit=document.getElementById('result_time'+i);
    	   row_unit.innerHTML = this.enteredValue * this.unit[this.selectedUnit]  /  this.unit[i] ;   //Math.pow(10, (i - this.selectedUnit));
    	}
    },
    
};
