
var area = {

    init: function init() {
        'use strict';
        	
        this.selectedUnit=0;
        this.enteredValue=1;
    	this.datas=["mm", "cm", "dm", "m", "dam", "hm", "km"];
        
        this.form_area=document.getElementById('form_area');
        this.dropdown_area=document.getElementById("dropdown_area");
        this.body_area=document.getElementById("body_area");
        
        this.generateView();
        this.bindEvents();
    },
    bindEvents: function bindEvents() {
        'use strict';

        var form_area=document.getElementById('form_area');
        var dropdown_area=document.getElementById("dropdown_area");
        var self = this;

        dropdown_area.addEventListener('change',function onChange(){
        	self.selectedUnit = this.selectedIndex;
        	self.refreshResult();
        });
        
        form_area.addEventListener('change', function onChange(){
        	self.enteredValue = this.value;
        	self.refreshResult();
        });
    },
    generateView: function generateView(){
    	
    	for(var i=0;i<this.datas.area;++i){
    		var opt = document.createElement('option');
    	    opt.value = i;
    	    opt.innerHTML = this.datas[i];
    	    this.dropdown_area.appendChild(opt);
    	    
    	    var li_form=document.createElement('li');
    	    li_form.innerHTML = this.datas[i]+"<span class='li-text-sub' id='result_"+i+"'>"+(1*Math.pow(10,i)).toLocaleString()+"</span>";
    	    li_form.setAttribute("class", "ui-li-static");
    	    this.body_area.appendChild(li_form);
    	}
    	
    },
    refreshResult: function refreshResult(){
    	'use strict';
    	
    	for(var i=0;i< this.datas.area;++i){
    	   var row_unit=document.getElementById('result_'+i);
    	   row_unit.innerHTML = this.enteredValue * Math.pow(10, (i - this.selectedUnit));
    	}
    },
    
};
