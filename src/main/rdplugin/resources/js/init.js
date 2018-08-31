//
jQuery(function () {
    if (typeof(UI_PLUGIN_EXAMPLES) !== 'object') {
        window.UI_PLUGIN_EXAMPLES = {};
    }
    UI_PLUGIN_EXAMPLES['test-ui'] = "@name@";
    //place to put init functions
    if(!UI_PLUGIN_EXAMPLES.toLoad){
        UI_PLUGIN_EXAMPLES.toLoad = [];
    }
});
