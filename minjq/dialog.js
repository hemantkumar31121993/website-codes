function Dialog(arg) { //support only one element at time
    this.obj = document.querySelector(arg);

    var self = this.obj;
    var parent = this.obj.parentElement;

    this.dialog = function (height, width, buttons, closebtn) { //buttons: list of buttons and associated handler, close: to close the dialog
        var overlay = document.createElement("div");
        var overlay_style = `position:absolute;width:${window.innerWidth}px;height:${window.innerHeight}px;z-index:998;top:0px;left:0px;background:#aaaaaa10`;
        overlay.setAttribute("style", overlay_style);
        var bigdiv = document.createElement("div");
        var top =  (window.innerHeight - height)/2;
        var style = `width:${width}px;margin:${top}px auto; z-index:999;`;
        bigdiv.setAttribute("style", style);
        bigdiv.className = "dialog";

        var headdiv = document.createElement("div");
        headdiv.className = "dialog-header";
        var bodydiv = document.createElement("div");
        bodydiv.className = "dialog-body";
        var buttondiv = document.createElement("div");
        buttondiv.className = "dialog-buttons"
        bigdiv.appendChild(headdiv);
        bigdiv.appendChild(bodydiv);
        bigdiv.appendChild(buttondiv);

        var clsbtn = document.createElement("div");
        clsbtn.className = "dialog-close";
        headdiv.innerText = self.title;
        headdiv.appendChild(clsbtn);
        clsbtn.addEventListener("click", close);

        function open () {
            self.style.display = "unset";
            bodydiv.appendChild(self);
            if(buttons) {
                var btns = Object.keys(buttons);
                for(let i=0;i<btns.length;i++) {
                    let b = document.createElement("button");
                    b.innerText = btns[i];
                    b.addEventListener("click", buttons[btns[i]])
                    buttondiv.appendChild(b);
                }
            }
            overlay.appendChild(bigdiv);
            document.body.appendChild(overlay);
        }

        function close() {
            self.style.display = "none";
            parent.appendChild(self);
            document.body.removeChild(overlay);
            if(closebtn)
                closebtn();
        }

        return {open: open, close: close};
    }
}