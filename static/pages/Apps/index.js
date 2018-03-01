
$.getJSON('config/pages/Apps.json', function(links) {
	if(typeof mem.Apps.hash[''] == 'string') {
		$('#tab .topBanner').hide();
		var frame = links[mem.Apps.hash['']];
		$('#tab').append('<iframe src="'+frame.url+'"></iframe>');
	} else {
		$.each(links, function(k) {
			if(this.pop) {
				var link = this.url;
			} else {
				var link = '#Apps,.'+k;
			}
			$('#list').append('<a href="'+link+'"><img src="static/img/apps/'+this.img+'"><div class="ttl">'+k+'</div></a>');
		});
	}
});