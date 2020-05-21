var mrImageCropper = function(element, settings) {
	var mr = this;
	mr.elem = document.getElementById(element);
	mr.set = {
				"wgt" : settings ? (settings.width != null ? settings.width : 300) : 300,
				"hgt" : settings ? (settings.height != null ? settings.height : 150) : 150,
                "drw" : settings ? (settings.drawingTools != null ? settings.drawingTools : true) : true,
                "flt" : settings ? (settings.filters != null ? settings.filters : true) : true,
				"tls" : settings ? (settings.toolsHidden != null ? settings.toolsHidden : false) : false,
				"dlb" : settings ? (settings.downloadButton != null ? settings.downloadButton : true) : true,
				"uev" : settings ? (settings.uploadEvent != null ? settings.uploadEvent : "") : "",
				"lan" : window.navigator.language.indexOf("da") != -1
			  };
			  // width = 300, height = 150, drawingTools = true, filters = true, toolsHidden = false, downloadButton = true, uploadEvent = "", language = "en-uk"
	mr.init = function () {
	/* Create Elements */
		/* Create Image Zone */
		var imageZone = document.createElement("div");
		imageZone.setAttribute("id","imageZone");
		mr.elem.appendChild(imageZone);

		mr.imzn = document.getElementById("imageZone");
		/* Create Hide Checkbox Placeholder */
		var document.createElement("div")
		mr.elem.appendChild();
		mr.elem.getElementsByTagName("div")[1].className = "textBandit";
		mr.txtb = mr.elem.getElementsByClassName("textBandit")[0];		
		mr.txtb.style.cssText = "right:0;top:0;position:fixed;z-index: 999; color: #777;";
		/* Create Edit Zone */
		mr.elem.appendChild(document.createElement("div"));
		mr.elem.getElementsByTagName("div")[2].className = "editField";
		mr.edit = mr.elem.getElementsByClassName("editField")[0];
		mr.edit.style.cssText = "border-radius: 5px; background: rgba(133,133,123,0.9); width: 350px; padding: 10px; top: 0; right:0; height: 100%; position:fixed; z-index: 998; transition: 0.1s;	background: rgba(133,133,123,0.9); width: 350px; padding: 10px; top: 0; right:0; height: 100%; position:fixed; z-index: 998; transition: 0.1s;";
		mr.edit.style.display = mr.set.tls ? "none" : "block";
		/* Inside Image Zone */
			/* Create Drawing Canvas */
			mr.imzn.appendChild(document.createElement("canvas"));
			mr.imzn.getElementsByTagName("canvas")[0].className = "imageCropper";
			mr.cavs = mr.imzn.getElementsByClassName("imageCropper")[0];
			mr.cavs.style.cssText = "box-shadow: 5px 5px 10px grey;";
			mr.ctxt = mr.cavs.getContext("2d");
			/* Create Right Resize Handler */
			mr.imzn.appendChild(document.createElement("div"));
			mr.imzn.getElementsByTagName("div")[0].className = "rightBar";
			mr.rtrz = mr.imzn.getElementsByClassName("rightBar")[0];
			mr.rtrz.style.cssText = "margin-left: 0; left: 0; height: 150px; width: 10px; display: inline-block;";
			/* Create Bottom Resize Handler */
			mr.imzn.appendChild(document.createElement("div"));
			mr.imzn.getElementsByTagName("div")[1].className = "bottomBar";
			mr.btrz = mr.imzn.getElementsByClassName("bottomBar")[0];
			mr.btrz.style.cssText = "margin-top: 0;	top: 0; height: 10px; width: 300px;";
		/* Inside Hide Checkbox Placeholder */
			/* Create Checkbox Label */
			mr.txtb.appendChild(document.createElement("label"));
			mr.txtb.getElementsByTagName("label")[0].className = "hideLabel";
			mr.hidl = mr.txtb.getElementsByClassName("hideLabel")[0];
			mr.hidl.innerHTML = toolsHidden ? "Show" : "Hide";
			mr.hidl.checked = toolsHidden;
			/* Create Checkbox */
			mr.txtb.appendChild(document.createElement("input"));
			mr.txtb.getElementsByTagName("input")[0].className = "hideTools";
			mr.hidc = mr.txtb.getElementsByClassName("hideTools")[0];
			mr.hidc.setAttribute("type","checkbox");
		/* Inside Edit Zone */
			/* Slider */
			mr.edit.appendChild(document.createElement("div"));
			mr.edit.getElementsByTagName("div")[0].className = "slider";
			mr.sldr = mr.edit.getElementsByClassName("slider")[0];
			mr.sldr.style.cssText = "position: absolute; width: 8px; background: silver; height: 100%; left: 0; transition: 0.1s;"
			/* Edit Box */
			mr.edit.appendChild(document.createElement("div"));
			mr.edit.getElementsByTagName("div")[1].className = "editBox";
			mr.ebox = mr.edit.getElementsByClassName("editBox")[0];
			mr.ebox.style.cssText = "margin-left: 12px";
			/* Inside Edit Box */
				mr.ebox.appendChild(document.createElement("label"));
				mr.ebox.appendChild(document.createElement("input"));
				mr.ebox.appendChild(document.createElement("label"));
				mr.ebox.appendChild(document.createElement("input"));
				mr.ebox.appendChild(document.createElement("span"));
	};
	mr.init()
};