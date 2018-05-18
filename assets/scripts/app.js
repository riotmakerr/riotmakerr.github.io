	function showModal(id) {
		$('#' + id).show();
	}
	function hideModal(id) {
		$('#' + id).hide();
	}

	$('#app-launcher-button').on('click',function(event){
		$('#app-modal').show();
	});
	$('#app-modal').on('click',function(event){
		var outside = $(event.target).is('#app-modal-section') || $(event.target).is('#app-modal-container');
		if(outside){
			$("#app-modal").hide();
		}
	});

        $.ajax({
            type: "GET",
            url: "https://api.github.com/users/riotmakerr/repos",
            dataType: "json",
            success: function(result) {
                for (i in result) {
                    $("#app-list").append(
						'<li class="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">' +
						  '<a target="_blank" aria-describedby="drag-instructions" draggable="true" href="' + result[i].html_url + '" class="slds-app-launcher__tile slds-text-link_reset slds-is-draggable">' +
							'<div class="slds-app-launcher__tile-figure">' +
							  '<span class="slds-avatar slds-avatar_large">' +
								'<abbr class="slds-avatar__initials slds-icon-custom-' + parseInt(i+1) + '" title="company name">' + result[i].name.charAt(0).toUpperCase() + '</abbr>' +
							  '</span>' +
							  '<span class="slds-icon_container" title="Drag item to a new location">'+
								'<svg class="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">' +
								  '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/icons/utility-sprite/svg/symbols.svg#rows" />' +
								'</svg>' +
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
