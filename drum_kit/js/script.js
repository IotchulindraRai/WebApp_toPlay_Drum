var snare = new Audio('./audio/snare.mp3');
var ohihat = new Audio('./audio/open-hi-hat.mp3');
var chihat = new Audio('./audio/close-hi-hat.mp3');
var crash = new Audio('./audio/crash.mp3');
var kick = new Audio('./audio/kick.mp3');
var hightom = new Audio('./audio/high-tom.mp3');
var midtom = new Audio('./audio/mid-tom.mp3');
var floortom = new Audio('./audio/floor-tom.mp3');
var ride = new Audio('./audio/ride.mp3');

function play_sound($key = '') {
    const allowed_key = [97, 115, 100, 102, 103, 104, 106, 107, 108, 113, 119, 101, 114, 116, 121, 117, 105, 111];
    if ($.inArray($key, allowed_key) > -1) {
        var audio, kit;
        if ($key == 97 || $key == 113) {
            audio = snare
            kit = 'snare-kit';
        }
        if ($key == 115 || $key == 119) {
            audio = hightom
            kit = 'tom1-kit';
        }
        if ($key == 100 || $key == 101) {
            audio = midtom
            kit = 'tom2-kit';
        }
        if ($key == 102 || $key == 114) {
            audio = floortom
            kit = 'floor-kit';
        }
        if ($key == 103 || $key == 116) {
            audio = kick
            kit = 'kick-kit';
        }
        if ($key == 104 || $key == 121) {
            audio = chihat
            kit = 'hihat-kit';
        }
        if ($key == 106 || $key == 117) {
            audio = ohihat
            kit = 'hihat-kit';
        }
        if ($key == 107 || $key == 105) {
            audio = crash
            kit = 'crash-kit';
        }
        if ($key == 108 || $key == 111) {
            audio = ride
            kit = 'ride-kit';
        }
        audio.pause()
        audio.currentTime = 0;
        audio.play()
        animate_kit(kit)
    }
}

function animate_kit($kit = "") {
    if ($kit != "") {
        const allowed_element = ['kick-kit', 'snare-kit', 'tom1-kit', 'tom2-kit', 'floor-kit', 'hihat-kit', 'crash-kit', 'ride-kit']
        if ($.inArray($kit, allowed_element) > -1) {
            $('#' + $kit).removeClass('active')
            $('#' + $kit).addClass('active')
            setTimeout(() => {
                $('#' + $kit).removeClass('active')
            }, 100)
        }
    }
}
$(function() {
    $(document).keypress(function(e) {
        console.log(e.which)
        play_sound(e.which)
    })
    $('.kit-holder>img').click(function() {
        var id = $(this).attr('id')
        const key_codes = {
            "snare-kit": 97,
            "tom1-kit": 115,
            "tom2-kit": 100,
            "floor-kit": 102,
            "kick-kit": 103,
            "hihat-kit": 106,
            "crash-kit": 107,
            "ride-kit": 108
        }
        if (id != '' && !!key_codes[id])
            play_sound(key_codes[id])
    })
})