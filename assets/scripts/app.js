	$.ajax({
		type: "GET",
		url: "https://api.github.com/users/riotmakerr/repos",
		dataType: "json",
		success: function(result) {
			for (i in result) {
				$("#app-list").append(
					'<li class="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">' +
					'<a target="_blank" href="' + result[i].html_url + '" class="slds-app-launcher__tile slds-text-link_reset">' +
					'<div class="slds-app-launcher__tile-figure">' +
					'<span class="slds-avatar slds-avatar_large">' +
					'<abbr class="slds-avatar__initials slds-icon-custom-' + parseInt(i+1) + '" title="company name">' + result[i].name.charAt(0).toUpperCase() + '</abbr>' +
					'</span>' +
					'</div>' +
					'<div class="slds-app-launcher__tile-body">' +
					'<span class="slds-text-link">'+ result[i].name + '</span>' +
					'<p>' + result[i].description +
					'</p>' +
					'</div>' +
					'</a>' +
					'</li>'
				);
			}
			$("#repo-count").append(result.length);
		}
	});
