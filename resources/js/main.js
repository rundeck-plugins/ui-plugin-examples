
function initXKCD() {
	var project = rundeckPage.project();
	var path = rundeckPage.path();
	var para = document.createElement("div");
	
	para.style.fontSize = "150%";
	para.style.textAlign = "center";
	para.style.marginBottom = "10px";

	var xkcd = document.createElement("div");
	xkcd.id = "xkcdfield";
	para.appendChild(xkcd);

	var x = jQuery(".main-panel .content").prepend(para);

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
	        url: url_path(rundeckPage.pluginBasei18nUrl('xkcd-ui'))+'/service/xkcdsource.json',
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
};

function url_path(baseUrl) {
    if (baseUrl.indexOf('/') == 0) {
        return baseUrl;
    }
    if (baseUrl.toLowerCase().indexOf('http') == 0) {
        var len = baseUrl.indexOf('://');
        if (len > 0) {
            var absurl = baseUrl.substring(len + 3);
            if (absurl.indexOf('/') >= 0) {
                absurl = absurl.substring(absurl.indexOf('/'));
                return absurl;
            } else {
                return '';
            }
        }
    }
}