var reservations = {
    'Bob': {
        claimed: false
    },
    'Ted': {
        claimed: true
    }
};

//var name = prompt('Please enter the name for your reservation');



var capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

var claimReservation = function () {
    var name = document.getElementById('form-name').value;
    // write your code here!
    if (name === '') {
        //        return alert('Please enter a Name');
        document.getElementById('res').innerHTML = 'Please enter a Name';
        document.getElementById('res').style = 'color:red;';
        return;
    }
    name = capitalize(name);
    if (name in reservations)
        if (!reservations[name].claimed) {
            //            alert('Welcome ' + name);
            document.getElementById('res').innerHTML = 'Welcome ' + name;
            reservations[name].claimed = true;
            document.getElementById('res').style = 'color:green;';
        }
    else {
        //        alert(name + ', You have allready claimed your reservation');
        document.getElementById('res').innerHTML = name + ', You have allready claimed your reservation';
        document.getElementById('res').style = 'color:red;';
    } else {

        //            alert('No reservations found under '+name);
        reservations[name] = {
            claimed: true
        };
        //alert(name+', have now reservations under your name');
        document.getElementById('res').innerHTML = name + ', have now reservations under your name';
        document.getElementById('res').style = 'color:green;';
    }

};

//claimReservation();


document.getElementById('btn').onclick = claimReservation;
