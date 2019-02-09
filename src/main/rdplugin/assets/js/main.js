jQuery(function () {
var useHelloWorld=false;
var useXKCD=true;
var usePanic=false;
var project = rundeckPage.project();
if(useHelloWorld){
	if(project){
		console.log(project);
	}else{
		console.log('main sccreen');
	}
}
var path = rundeckPage.path();


var para = document.createElement("div");
para.style.fontSize = "150%";
para.style.textAlign = "center";
para.style.marginBottom = "10px";

//element only in Home
if(useHelloWorld && !project){
	var div = document.createElement("div");
	div.style.fontSize = "250%";
	div.id = "testuifield";
	var nodeHome = document.createTextNode("Hello Rundeck.");
	div.appendChild(nodeHome);
	para.appendChild(div);
}

if(useXKCD){
	var xkcd = document.createElement("div");
	xkcd.id = "xkcdfield";
	para.appendChild(xkcd);
}

var x = jQuery(".main-panel .content").prepend(para);

var pluginName = UI_PLUGIN_EXAMPLES['test-ui'];


demo_init_plugin(pluginName, function () {
		if(useHelloWorld){
			if(rundeckPage.path() === "menu/home"){
				var salute = 'Hello';
				if(window.Messages){
					//loaded i18n
					//rundeck-ui-hello-world
					salute = window.Messages[pluginName+'.Salute'];
				}
				jQuery("#testuifield").text(salute);
			}
		}
		if(useXKCD){
			if(rundeckPage.path() === "menu/jobs"){
				//on any project page
				jQuery.ajax({
					beforeSend: function(xhr){
					    if (xhr.overrideMimeType)
					    {
					      xhr.overrideMimeType("application/json");
					    }
					  },
					dataType: 'json',
			        url: url_path(rundeckPage.pluginBasei18nUrl(pluginName))+'/service/xkcdsource.json',
			        success: function (data) {
			            var imgCount = data.list.length;
			            var n = Math.floor(Math.random() * imgCount);
			            var image = data.list[n];
			            if(image.img){
			            	jQuery("#xkcdfield").prepend(jQuery('<img>',{id:'xcdImg',src:image.img, title:image.alt}));
			            }
			        }
			    });
			}
		}
		if(usePanic){
			//dramatic failed job
			if(rundeckPage.path() === "execution/show"){
				console.log("job status");
				var status = (jQuery(".exec-status")[0].getAttribute("data-execstate"));
				if(status && status.toLowerCase() === 'failed' ){
					//bs-example-navbar-collapse-1
					jQuery(".main-panel .mainbar").css("backgroundColor", "red");
				}
			}
		}
	});

});
