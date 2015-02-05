(function ($){
    //set up standard parameters for the player
    var settings = {
        width: '100%',
        height: '100%',
        videoId: 'JR7MUfxns9c',
        autoPlay: false,
        mute: false,
        loop: 1,
        showSuggestions: 0,
        controls: 0,
        showinfo: 0
    };

    //the playerID is not supposed to be adjusted
    var playerID = 'player';

    var methods = {
        init: function(){
                //create the player, first param is the player name, second are the options
                player = new YT.Player(playerID, {
                videoId: settings.videoId,
                width: settings.width,
                height: settings.height,
                playerVars: {
                    'loop': settings.loop,
                    //store the video in a playlist to allow autoplay
                    'playlist': settings.videoId,
                    'rel': settings.showSuggestions,
                    'controls': settings.controls,
                    'showinfo': settings.showinfo
                },
                events: {
                    //this method is called when the player has finished loading
                    'onReady': methods.onPlayerReady
                }
            });
        },
        //this method is called when the player has finished loading
        onPlayerReady: function(e){
            //if settings.autoplay is true, start the video
            if (settings.autoPlay){
                e.target.playVideo();
            }
            //if settings.mute is true, mute the video
            if(settings.mute){
                e.target.mute();
            }
        }
    };

    //function takes options as a parameter
    $.fn.addPlayer = function(options){
        //if options exists extend the current settings with the user specified options
        if(options){
            settings = $.extend(settings, options);
        }
        //call the init() method to initialize the plugin
        methods.init();

        //return this for jquery chaining
        return this;
    }
})(jQuery);