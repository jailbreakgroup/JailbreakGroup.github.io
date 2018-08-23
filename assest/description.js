function loadRecentUpdates() {
	var form_url = window.location.protocol+"//"+window.location.hostname+"../debs/last.updates";
	$.ajax({
		url: form_url,
		type: "GET",
		cache: false,
		crossDomain: true,
		success: function (returnhtml) {
			var decodeResp = eval('('+returnhtml+')');
			var htmlnews = "";
			for (var dicNow in decodeResp) {
				var urlOpen = "cydia://package/"+decodeResp[dicNow].package;
				if (navigator.userAgent.search(/Cydia/) == -1) {
					urlOpen = window.location.protocol+"//"+window.location.hostname+"../depictions/index.html?p="+decodeResp[dicNow].package;
				}
				htmlnews +=  "<li><a href='"+urlOpen+"' target='_blank'><img class='icon' src='tweak.png'/><label>"+decodeResp[dicNow].name+" v"+decodeResp[dicNow].version+"</label></a></li>";
			}
			$("#updates").html(htmlnews);
			$("#updates_").show();			
        },
		error: function (err) {
			$("#updates_").hide();	
		}
	});
}