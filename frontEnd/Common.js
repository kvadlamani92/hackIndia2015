var Common = {
    callParams: {
        successCallback: function (data) {
            var swipe = data == 'left' || data == 'up' ? '+=1' : ((data == 'right' || data == 'down') && '-=1' || '');
            if(swipe.length) {
                $('.jcarousel').jcarousel('scroll', swipe);
            }
        }
    },

    dataPolling : function (params) {
        /*Setting up recursive calling*/
        setInterval(function () {
            Common.callAPI(params);
        }, 400);        
        /*First Call*/
        Common.callAPI(params);
    },

    callAPI: function(params){
        $.ajax({
            // the URL for the request
            url: 'http://' + Common.getUrlVars(),
         
            // whether this is a POST or GET request
            type: 'GET',
                  
            // the response is passed to the function
            success: params.successCallback,
         
            // code to run if the request fails; the raw request and
            error: function(xhr, status, errorThrown ) {    
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
                console.log( xhr );
                console.log( xhr.responseJSON)
            },
         
            // code to run regardless of success or failure
            timeout : 1500
        });
    },

    getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.split('?');
        
        if(hashes.length > 1)
            return hashes[1];
        else 
            return 0;        
    }
};

$(document).ready(function($) { 
    Common.dataPolling(Common.callParams);
});