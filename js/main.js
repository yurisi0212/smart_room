w().ready(function() { 


    $('#light_on').bind(BUTTON_DOWN, function(event) {
        w().callMacro('LIGHT_ON')
    })

    $('#light_off').bind(BUTTON_DOWN, function(event){
      w().callMacro("LIGHT_OFF")
    });

    $('#light_half').bind(BUTTON_DOWN, function(event){
      w().callMacro('LIGHT_HALF')
    });

    $('#light_up').bind(BUTTON_DOWN, function(event){
      w().callMacro('LIGHT_UP')
    });

    $('#light_down').bind(BUTTON_DOWN, function(event){
      w().callMacro('LIGHT_DOWN')
    });

    $('#light_80').bind(BUTTON_DOWN, function(event){
      w().callMacro('LIGHT_80')
    });

    $('#light_60').bind(BUTTON_DOWN, function(event){
      w().callMacro('LIGHT_60')
    });

    $('#light_30').bind(BUTTON_DOWN, function(event){
      w().callMacro('LIGHT_30')
    });

    $('#air_on').bind(BUTTON_DOWN, function(event){
      w().callMacro('AIR_ON')
    });

    $('#air_off').bind(BUTTON_DOWN, function(event){
      w().callMacro('AIR_OFF')
    });

    $('#all_on').bind(BUTTON_DOWN, function(event){
      w().callMacro('ALL_ON')
    });

    $('#all_off').bind(BUTTON_DOWN, function(event){
      w().callMacro('ALL_OFF')
    });
  });