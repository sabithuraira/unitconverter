(function() {
	/**
	 * Back key event handler
	 */
	window.addEventListener('tizenhwkey', function(ev) {
		if (ev.keyName === "back") {
			var activePopup = document.querySelector('.ui-popup-active'),
				page = document.getElementsByClassName('ui-page-active')[0],
				pageid = page ? page.id : "";

			if (pageid === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());


var app = {
    init: function init() {
        'use strict';

        length.init();
        weight.init();
//        area.init();
    },

    /**
     * Closes application.
     *
     * @public
     */
    exit: function exit() {
        'use strict';

        try {
            tizen.application.getCurrentApplication().exit();
        } catch (error) {
            console.error(error);
        }
    },

    /**
     * Handles Low Battery event.
     *
     * @private
     */
//    onLowBattery: function onLowBattery() {
//        'use strict';
//
//        this.exit();
//    }
};
