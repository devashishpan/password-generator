function pass() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    alert("Password Copied to Clipboard!!: ");
  }
function password_len_change(length) {
    if(length > 4){
      document.getElementById("passlen").innerHTML = length;
    }
    else{
      document.getElementById("passlen").innerHTML = 7;
    }
}

function strength() {
  for(var i = 1; i <= 4; i++){
    document.getElementById(i).style.backgroundColor = "white";
  }
    var up = document.getElementById("up");
    var lo = document.getElementById("lo");
    var nu = document.getElementById("nu");
    var sy = document.getElementById("sy");
    const arr = [up.checked,
      lo.checked,
      nu.checked,
      sy.checked
    ];
    const count = arr.filter(Boolean).length;
    if(count == 0){
        alert("You need to check at least one checkbox....");
        document.getElementById("up").checked = true;
        document.getElementById("spstr").innerHTML = "LOW";
        strength();
    }
    else if(count == 1){document.getElementById("spstr").innerHTML = "LOW";}
    else if(count == 2){document.getElementById("spstr").innerHTML = "MEDIUM";}
    else if(count == 3){document.getElementById("spstr").innerHTML = "MEDIUM";}
    else{document.getElementById("spstr").innerHTML = "STRONG";}
    for(var i = 1; i <= count; i++){
        if(count == 1){
          document.getElementById(i).style.backgroundColor = "red";
        }
        else if(count == 2){
          document.getElementById(i).style.backgroundColor = "orange";
        }
        else if(count == 3){
          document.getElementById(i).style.backgroundColor = "orange";
        }
        else if(count == 4){
          document.getElementById(i).style.backgroundColor = "#53FF40";
        }
    }
}

window.onload = () => {
    strength();
    genpass(document.getElementById("passlength").value);
};

/*
character += window.crypto.getRandomValues(new BigUint64Array(4)).reduce(
        (prev, curr, index) => (
          !index ? prev : prev.toString(36)
        ) + (
          index % 2 ? curr.toString(36).toUpperCase() : curr.toString(36)
        )
      ).split('').sort(
          () => 128 - window.crypto.getRandomValues(new Uint8Array(1))[0]
      ).join('');
*/
function genpass(len) {
    var length = (len)?(len):(14);
    var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numeric = '0123456789';
    var password = "";
    var character = "";
    var up = document.getElementById("up");
    var lo = document.getElementById("lo");
    var nu = document.getElementById("nu");
    var sy = document.getElementById("sy");
    const arr = [up.checked,
      lo.checked,
      nu.checked,
      sy.checked
    ];
    while(password.length<length){
      if(arr[0]){
        var t = window.crypto.getRandomValues(new Uint16Array(1))[0].toString(10)%upper.length;
        character += upper.charAt(t);
      }
      if(arr[1]){
        var t = window.crypto.getRandomValues(new Uint16Array(1))[0].toString(10)%lower.length;
        character += lower.charAt(t);
      }
      if(arr[2]){
        var t = window.crypto.getRandomValues(new Uint16Array(1))[0].toString(10)%numeric.length;
        character += numeric.charAt(t);
      }
      if(arr[3]){
        var t = window.crypto.getRandomValues(new Uint16Array(1))[0].toString(10)%symbols.length;
        character += symbols.charAt(t);
      }
      password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    document.getElementById("password").value = password.substr(0,length);
}