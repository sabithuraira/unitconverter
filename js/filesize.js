
var filesize = {

    init: function init() {
        'use strict';
        	
        this.selectedUnit=0;
        this.enteredValue=1;
    	this.datas=["bit", "byte", "KiloByte", "MegaByte", "GigaByte", "TeraBute", "PeteByte"];
        
        this.form_filesize=document.getElementById('form_filesize');
        this.dropdown_filesize=document.getElementById("dropdown_filesize");
        this.body_filesize=document.getElementById("body_filesize");
        
        this.generateView();
        this.bindEvents();
    },
    bindEvents: function bindEvents() {
        'use strict';

        var form_filesize=document.getElementById('form_filesize');
        var dropdown_filesize=document.getElementById("dropdown_filesize");
        var self = this;

        dropdown_filesize.addEventListener('change',function onChange(){
        	self.selectedUnit = this.selectedIndex;
        	self.refreshResult();
        });
        
        form_filesize.addEventListener('change', function onChange(){
        	self.enteredValue = this.value;
        	self.refreshResult();
        });
    },
    generateView: function generateView(){
    	for(var i=0;i<this.datas.length;++i){
    		var opt = document.createElement('option');
    	    opt.value = i;
    	    opt.innerHTML = this.datas[i];
    	    this.dropdown_filesize.appendChild(opt);
    	    
    	    var li_form=document.createElement('li');
    	    li_form.innerHTML = this.datas[i]+"<span class='li-text-sub' id='result_filesize"+i+"'></span>";
    	    li_form.setAttribute("class", "ui-li-static");
    	    this.body_filesize.appendChild(li_form);
    	}
    	this.refreshResult();
    },
    refreshResult: function refreshResult(){
    	'use strict';
    	
    	for(var i=0;i< this.datas.length;++i){
    	   var row_unit=document.getElementById('result_filesize'+i);
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
