function input_check_hex(obj, e) {
    var keynum = window.event ? e.keyCode : (e.which ? e.which : 0);
    var result = false;

    if ((keynum == 8) || (keynum == 46)) result = true;
    if (keynum >= 0x30 && keynum <= 0x39) result = true;
    if (keynum >= 0x41 && keynum <= 0x46) result = true;
    if (keynum >= 0x61 && keynum <= 0x66) result = true;

    return result;
}

function setCursorPosition(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

function move(obj, e) {
    var keynum = window.event ? e.keyCode : (e.which ? e.which : 0);
    var obj_num = obj.id.substr(obj.id.length - 1, 1);
    var obj_prefix = obj.id.substr(0, obj.id.length - 1);

    if (!input_check_hex(obj, e))
        return false;

    if (obj.value.length == 2) {
        obj_num++;
        if (obj_num <= 5) {
            var next_obj = document.getElementById(obj_prefix + obj_num);
            next_obj.focus();
            next_obj.select();
        }
        return true;
    }

    if (obj.value.length == 0) {
        obj_num--;
        if (obj_num >= 0) {
            var prev_obj = document.getElementById(obj_prefix + obj_num);
            prev_obj.focus();
            setCursorPosition(prev_obj, prev_obj.value.length);
        }
        return true;
    }

    return true;
}

function generate_mac_input(cid, id_prefix, mac) {
    var container = document.getElementById(cid);
    var mac_val = mac.split("-");

    var content = "";

    for (var i = 0; i < 6; i++) {
        var name = (id_prefix != "") ? (id_prefix + "_mac" + i) : ("mac" + i);

        content += "<input class=\"mac_field\" name=\"" + name + "\" id=\"" + name + "\" " +
             "onkeydown=\"return input_check_hex(this, event)\" onkeyup=\"return move(this, event)\" value=\"" + mac_val[i] + "\" " +
             "size=\"2\" maxlength=\"2\" />";

        if (i != 5)
            content += " - ";
    }

    container.innerHTML = content;
}
