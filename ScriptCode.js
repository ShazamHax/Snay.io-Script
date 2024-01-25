window.loggedIn = false;

function isMobile() {
	return (window.screen.width < 800) && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}
window.onMobile = isMobile();

if (isMobile()) {
	console.log("I am on mobile");
} else {
	console.log("I am on PC");
}

function setupUI() {
	var style = document.createElement('style');
	style.type = 'text/css';
	// Define the CSS styles
	var css = `
        #modmenu {
            background-color: #282b30;
            border: none;
            border-radius: 10px;
            margin-top: 100px;
            margin-right: -40px;
            padding-left: 10px;
        }
        #modmenuclosebtn {
            scale: 1;
            margin-top: 84px;
            margin-right: 117px;
            background: url("https://i.imgur.com/xDFW0d6.png");
			background-size: contain;
			position: absolute;
			left: -3%;
			top: -14%;
        }
		#title {
		 z-index: 7;
		}
        #modmenutitle {
            color: #7289da;
            margin-bottom: 10px;
        }
        #modmenusubtitle {
            color: #ffffff;
        }
        #modmenu .buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: -5px;
            margin-right: 3%;
            width: 100%;
        }
        #modmenu .buttons button {
            margin: 5px;
            padding: 5px 10px;
            background-color: #7289da;
            color: white;
            border: none;
            border-radius: 5px;
            margin: 3px;
            width: 90%;
            cursor: pointer;
        }
    `;
	// Add the CSS styles to the <style> element
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	// Append the <style> element to the document's <head>
	document.head.appendChild(style);
	var modmenu = document.getElementById('modmenu');
	var modmenutitle = document.createElement('div');
	modmenutitle.id = 'modmenutitle';
	modmenutitle.textContent = 'Extras😉';
	var buttonsContainer = document.createElement('div');
	buttonsContainer.classList.add('buttons');
	modmenu.appendChild(modmenutitle);
	modmenu.appendChild(document.createElement("br"));
	modmenu.appendChild(document.createElement("br"));
	modmenu.appendChild(document.createElement("br"));
	modmenu.appendChild(buttonsContainer);
	var myPatreon = document.createElement("div");
	//myPatreon.style = "height: 50px; width: 120px; position: absolute; background-image: url('https://cdn.dribbble.com/users/2287419/screenshots/15177508/media/685ba889bceaec17a7742495ff1a4f92.gif'); border-radius: 25px; border: 2px solid blue";
	myPatreon.style = "height: 50px; width: 120px; position: absolute; border-radius: 25px; border: 2px solid blue; background: gray; text-align: center; color: white;";
	myPatreon.innerText = "Patreon";
	document.querySelector("#main-menu").append(myPatreon)
	myPatreon.style.top = "35px";
	myPatreon.style.right = "5px";
	myPatreon.style.backgroundSize = "100% 100%";
	myPatreon.setAttribute("class", "ShazamPatreon");
	myPatreon.onclick = () => {
		window.open("https://patreon.com/ShazamHax?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link");
	}
	myPatreon.style.cursor = "pointer";
	var myDiscord = document.createElement("div");
	//myDiscord.style = "height: 50px; width: 120px; position: absolute; top: -15px; right: 5px; background-image: url('https://cdn.dribbble.com/users/5242374/screenshots/16641455/media/0a74ea6b1d505b316ced8be139175fc3.gif'); border: 2px solid blue; border-radius: 25px;";
	myDiscord.style = "height: 50px; width: 120px; position: absolute; top: -15px; right: 5px; border: 2px solid blue; border-radius: 25px; background: gray; text-align: center; color: white;";
	myDiscord.innerText = "Discord";
	document.querySelector("#main-menu").append(myDiscord);
	myDiscord.onclick = () => {
		window.open("https://discord.gg/realclan");
	}
	myDiscord.style.cursor = "pointer";
	myDiscord.style.backgroundSize = "100% 100%";
	myDiscord.style.backgroundRepeat = "no-repeat";
	const logo = document.createElement("img");
	const node = document.createElement("p");
	const textnode = document.createTextNode("Shazam's snay.io script.   ");
	const menuTitle = document.querySelector("#title");
	menuTitle.src = "https://cdn.discordapp.com/attachments/1114383797409021992/1127586457192775700/shazam_2.png";
	menuTitle.style.position = "absolute";
	menuTitle.style.top = "-5%";
	menuTitle.style.zIndex = "7";
	node.appendChild(textnode);
	//node.style.backgroundColor = "#6495ED";
	node.style.backgroundImage = "linear-gradient(to right, #71797E, gray, #71797E)";
	node.style.position = "absolute";
	node.style.left = "25%";
	node.style.top = "5%";
	node.style.color = "white";
	node.style.padding = "8px";
	node.style.borderRadius = "25px";
	node.style.opacity = "70%";
	node.style.border = "1.5px solid black";
	node.style.color = "white";
	logo.style.backgroundColor = "#6495ED";
	logo.style.position = "absolute";
	logo.style.left = "20%";
	logo.style.top = "5%";
	logo.style.borderRadius = "50%";
	logo.style.opacity = "70%";
	logo.src = "https://cdn.discordapp.com/attachments/1114383797409021992/1132122032298008576/wonder_1689985693221.jpg";
	logo.style.height = "10%";
	logo.style.width = "6%";
	logo.style.border = "2px solid black";
	document.querySelector("#deco1").style.opacity = "0%";
	document.querySelector("#deco2").style.opacity = "0%";
	document.querySelector("#deco3").style.opacity = "0%";
	document.querySelector("#deco4").style.opacity = "0%";
	document.querySelector("#signin-btn").src = "http://www.clker.com/cliparts/d/u/w/y/F/1/thin-gray-signin-button-hi.png";
	document.querySelector("#HUD").appendChild(logo);
	document.querySelector("#HUD").appendChild(node);
	node.classList.add("NewHud");
	/*
		setInterval(()=>{
			var labels = document.querySelector("#gallery-body").querySelectorAll("label");
				for (let i = 0; i<labels.length; i++){
					if (labels[i].nextElementSibling.checkVisibility()){
						labels[i].style.backgroundColor = "lightblue";
						labels[i].style.border = "3px solid blue";
					}else {
						labels[i].style.backgroundColor = "gray";
						labels[i].style.border = "";
					}
				}
			});
*/
	document.querySelector("#seasons-body").style.backgroundColor = "black";
	document.querySelector("#seasons-header").style.backgroundColor = "black";
	document.querySelector("#store-body").style.backgroundColor = "black";
	document.querySelector("#store-header").style.backgroundColor = "black";
	document.querySelector("#gallery-content").style.background = "black";
	document.querySelector("#gallery-header").style.backgroundColor = "black";
	/*
			var setLabels = setInterval(()=>{
				if (document.querySelector("#gallery-content").checkVisibility()){
				document.querySelector("#gallery-content").querySelectorAll("label").forEach((elem)=>{
				  elem.style.backgroundColor = "gray";
				  elem.style.borderRadius = "20%";
				})
					clearInterval(setLabels);
				}
			});
*/
	document.querySelector("#gallery-body").style.backgroundImage = "linear-gradient(to bottom, black, darkblue, black)";
	document.querySelector(".windowclosebtn").style.filter = "hue-rotate(200deg)";
	document.querySelector("#settings-body").style.backgroundImage = "linear-gradient(to bottom, black, darkblue, black)";
	document.querySelector("#Settings-common").style.backgroundColor = "#818589";
	document.querySelector("#Settings-common").style.borderRadius = "25px";
	document.querySelector("#settings-header").style.backgroundColor = "black";
	document.querySelectorAll(".windowclosebtn").forEach((elem) => {
		elem.style.filter = "hue-rotate(200deg)";
	})
	document.querySelector("#Settings-quality").style.backgroundColor = "#818589";
	document.querySelector("#Settings-quality").style.borderRadius = "25px";
	document.querySelector("#Settings-input").style.backgroundColor = "#818589";
	document.querySelector("#Settings-input").style.borderRadius = "25px";
	document.querySelector("#keys").style.backgroundColor = "lightgray";
	document.querySelector("#keys").style.borderRadius = "25px";
}

function setupCustomSkins() {
	var customSkinList = ["https://yt3.googleusercontent.com/TNVorEJ9iTsESmUbcZXizwaZgy5jB-Ihx3z9qxfuuatrFRDhJHotz5x_X7mGIu38VBsr5bvlkg=s176-c-k-c0x00ffffff-no-rj", "https://cdn.discordapp.com/attachments/1114829833030074428/1120534848067604602/real.png"]

	function checkCustomSkin(customLink) {
		var customExists = false
		var customSkins = document.querySelector(".customSkinContainer").children;
		for (let i = 0; i < customSkins.length; i++) {
			if (customLink != customSkins[i].src) {
				customExists = false;
			} else {
				customExists = true;
				break;
			}
		}
		return customExists;
	}
	var mainContainer = document.querySelector("label[for='custom-skin']").nextElementSibling.querySelector("ul");
	var customSkinContainer = document.createElement("ul");
	customSkinContainer.setAttribute("class", "window-body");
	customSkinContainer.classList.add("customSkinContainer");
	var saveSkinBtn = document.createElement("button");
	var saveSkinText = document.createTextNode("Save");
	saveSkinBtn.append(saveSkinText);
	saveSkinBtn.style = "height: 50px; width: 100px; background: lightgreen; border-radius: 25px;";
	saveSkinBtn.onclick = () => {
		if (document.querySelector("#customSkin").value && !checkCustomSkin(document.querySelector("#customSkin").value)) {
			addNewCustomSkin("Skin" + document.querySelector(".customSkinContainer").children.length, document.querySelector("#customSkin").value, 1);
			if (localStorage.getItem("customSkins")) {
				localStorage.setItem("customSkins", localStorage.getItem("customSkins") + ", " + document.querySelector("#customSkin").value);
			} else {
				localStorage.setItem("customSkins", document.querySelector("#customSkin").value);
			}
		}
	};
	var removeSkinBtn = document.createElement("button");
	var removeSkinText = document.createTextNode("Remove Last Saved Custom Skin");
	removeSkinBtn.append(removeSkinText);
	removeSkinBtn.style = "height: 50px; width:fit-content; background: red; border-radius: 25px; color: white;";
	removeSkinBtn.onclick = () => {
		if (localStorage.getItem("customSkins")) {
			var customLinks = localStorage.getItem("customSkins").split(",");
			customLinks.pop();
			localStorage.setItem("customSkins", customLinks);
			document.querySelectorAll(".custom")[document.querySelectorAll(".custom").length - 1].remove();
		}
	}
	var buttonContainer = document.createElement("li");
	buttonContainer.style = "display: flex; height: fit-content; width: 100%; flex-direction: row";
	//customSkinContainer.style = "width: 100%; height: fit-content; display: flex; flex-direction: row; column-gap: 10px; flex-wrap: wrap; overflow-y: scroll; row-gap: 10px;";
	//mainContainer.append();
	mainContainer.append(document.createElement("br"));
	buttonContainer.style.justifyContent = "center";
	customSkinContainer.append(buttonContainer);
	buttonContainer.append(saveSkinBtn);
	buttonContainer.append(removeSkinBtn);
	mainContainer.append(document.createElement("br"));
	mainContainer.append(customSkinContainer);

	function addNewCustomSkin(name, link, custom) {
		var newSkin = document.createElement("img");
		if (custom == 0) {
			newSkin.setAttribute("class", name);
		} else {
			if (custom == 1) {
				newSkin.classList.add(name);
				newSkin.classList.add("custom");
			}
		}
		mainContainer.style = "";
		newSkin.classList.add("circular");
		customSkinContainer.append(newSkin);
		customSkinContainer.style.overflow = "visible"
		document.querySelector("." + name).src = link;
		document.querySelector("." + name).style = "height: 150px; width: 150px; border-radius: 50%; cursor: pointer; border: 1.5px solid blue; border-style: dotted; margin: 5px;";
		document.querySelector("." + name).onclick = () => {
			settings.customSkin = link;
			connect(settings.server);
			document.querySelector(".windowclosebtn").click();
		};
	}
	if (customSkinList) {
		for (let i = 0; i < customSkinList.length; i++) {
			addNewCustomSkin("Skin" + i, customSkinList[i], 0);
		}
	}
	if (localStorage.getItem("customSkins")) {
		var localCustomSkins = localStorage.getItem("customSkins").split(",");
		for (let i = 0; i < localCustomSkins.length; i++) {
			addNewCustomSkin("Skin" + document.querySelector(".customSkinContainer").children.length, localCustomSkins[i], 1);
		}
	}
}

function setupModMenu() {
	function createModBtn(id, def, ls, btnName) {
		var newBtn = document.createElement("button");
		newBtn.setAttribute("id", id);
		document.querySelector(".buttons").append(newBtn);
		var newBtnOutput = document.createElement("output");
		newBtnOutput.style.color = "white";
		newBtnOutput.setAttribute("id", id + "OutputValue");
		newBtn.append(newBtnOutput);
		var newBtnValueOn = document.createTextNode(btnName + ": On");
		var newBtnValueOff = document.createTextNode(btnName + ": Off");
		if (def == "off") {
			if (localStorage.getItem(ls)) {
				newBtn.setAttribute("class", "on");
				newBtnOutput.append(newBtnValueOn);
				newBtn.style.filter = "brightness(100%)";
			} else {
				newBtnOutput.append(newBtnValueOff);
				newBtn.style.filter = "brightness(70%)";
			}
		} else {
			if (def == "on") {
				if (localStorage.getItem(ls)) {
					newBtnOutput.append(newBtnValueOff);
					newBtn.style.filter = "brightness(70%)";
				} else {
					newBtn.setAttribute("class", "on");
					newBtnOutput.append(newBtnValueOn);
					newBtn.style.filter = "brightness(100%)";
				}
			}
		}
		newBtn.onclick = () => {
			if (id == "soundEffectsBtn") {
				soundEffects();
			}
			if (def == "off") {
				if (document.querySelector("button#" + id + ".on")) {
					localStorage.removeItem(ls);
					newBtn.style.filter = "";
					newBtn.removeAttribute("class");
					newBtn.style.filter = "brightness(70%)";
					newBtnOutput.firstChild.remove();
					newBtnOutput.append(newBtnValueOff);
				} else {
					if (!document.querySelector("button#" + id + ".on")) {
						localStorage.setItem(ls, "true");
						newBtn.removeAttribute("class");
						newBtn.setAttribute("class", "on");
						newBtnOutput.firstChild.remove();
						newBtn.style.filter = "brightness(100%)";
						newBtnOutput.append(newBtnValueOn);
					}
				}
			} else {
				if (def == "on") {
					if (document.querySelector("button#" + id + ".on")) {
						localStorage.setItem(ls, "true");
						newBtnOutput.firstChild.remove();
						newBtnOutput.append(newBtnValueOff);
						newBtn.style.filter = "";
						newBtn.style.filter = "brightness(70%)";
						newBtn.removeAttribute("class");
					} else {
						if (!document.querySelector("button#" + id + ".on")) {
							localStorage.removeItem(ls);
							newBtnOutput.firstChild.remove();
							newBtnOutput.append(newBtnValueOn);
							newBtn.style.filter = "brightness(100%)";
							newBtn.setAttribute("class", "on");
						}
					}
				}
			}
		}
		newBtn.style.borderRadius = "5px";
		newBtn.style.padding = "10px";
		newBtn.style.transition = "all 1s ease";
		newBtnOutput.style.transition = "all 2s ease";
		return newBtn;
	}
	// id, default, localStorageName, ButtonName
	if (!window.onMobile) {
		var press4Btn = createModBtn("press4Btn", "off", "press4On", "4 key respawn");
		var emojiBindingsButton = createModBtn("emojiBindings", "on", "emojiBindsOff", "Emoji Keybinds");
		var mouseControls = createModBtn("mouseControls", "off", "mouseControlsOn", "Mouse Controls");
	}
	var soundEffectsBtn = createModBtn("soundEffectsBtn", "on", "SoundEffectsOn", "Goofy ah Sounds");
	var spamLastEmoteBtn = createModBtn("spamLastEmoteBtn", "off", "spamLastEmoteOn", "Spam Recent Emoji");
	var spamEmojiBtn = createModBtn("spamEmojiBtn", "off", "spamEmojisOn", "Spam All Emojis");
	var respawnButton = createModBtn("respawnButton", "on", "respawnBtnOff", "Automatic Respawn");
	document.querySelector(".buttons").append(document.querySelector("#modmenu").querySelector(".button-81"));
	document.querySelector("#modmenu").querySelector(".button-81").style.padding = "10px";
	document.querySelector("#modmenu").querySelector(".button-81").style.background = "gray";
}

/*
 const handleMutation = (mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                    if (mutation.target.id === 'overlays') {
                        if (!mutation.target.hidden) {
                            document.querySelector("#overlays").style.backgroundImage = "url('" + backgroundImage + "')";
                        }
                    }
                }
            }
            // Check if window.stats.mycells becomes 0
            if (typeof window.stats !== 'undefined' && window.stats.mycells === 0) {
                document.querySelector("#overlays").style.backgroundImage = "url('" + backgroundImage + "')";
            }
        };
        // Options for the observer
        const observerOptions = {
            attributes: true, // Watch for changes to attributes
            attributeFilter: ['hidden'], // Only watch for changes to the "hidden" attribute
        };
        // Create the observer
        const overlaysElement = document.getElementById('overlays');
        const observer = new MutationObserver(handleMutation);
        // Start observing the "overlays" element
        observer.observe(overlaysElement, observerOptions);
		*/
window.addEventListener("load", () => {
	if (localStorage.getItem("seenShill")) {} else {
		swal("Please consider checking out my Patreon!");
		localStorage.setItem("seenShill", "1");
	}
	/*
				setTimeout(()=>{
					var meny = document.querySelector("#overlays.fade-in");
					var bleb = document.createElement("img");
				bleb.style.height = "100%";
			  bleb.style.width = "100%";
				bleb.src = "https://github.com/GravityGYT/Script/blob/main/download.jpg?raw=true";
				bleb.zIndex = "3";
				//meny.appendChild(bleb);

				var checkBackground = setInterval(()=>{
					if(!bleb.checkVisibility()){
						clearInterval(checkBackground);
						meny.appendChild(bleb);
					}
				});

				bleb.style.position = "absolute";
				}, 3000);
	*/
	document.querySelector("#title").style.zIndex = "2";
	document.querySelector("button#play-btn").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YouTube_play_buttom_dark_icon_%282013-2017%29.svg/800px-YouTube_play_buttom_dark_icon_%282013-2017%29.svg.png')";
	document.querySelector("button#spectate-btn").style.backgroundImage = "url('https://www.freeiconspng.com/uploads/eye-icon--icon-search-engine-17.png')";
	document.querySelector("button#spectate-btn").style.border = "3px solid white";
	document.querySelector("button#spectate-btn").style.backgroundColor = "gray";
	document.querySelector("button#settings-btn").style.backgroundImage = "url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90db49863f26a04.png')";
	document.querySelector("button#settings-btn").style.backgroundImage = "url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90db49863f26a04.png')";
	document.querySelector("#settings-btn").style.backgroundColor = "gray";
	document.querySelector("#modmenu").style.height = "fit-content";
	document.querySelector("label[for='custom-skin']").nextElementSibling.querySelector("li").style.height = "";
});

function setupEmojiSettings() {
	var emojis = document.querySelector(".react-horizontal-scrolling-menu--scroll-container").querySelectorAll("img");
	var emojiLinks = [];
	var emojiBindTitle = document.createElement("span");
	emojiBindTitle.innerText = "Custom Emoji Keybinds";
	emojiBindTitle.setAttribute("class", "emojiBindTitle");
	var restoreEmojiBindsBtn = document.createElement("div");
	restoreEmojiBindsBtn.style = "background: red; border-radius: 15px; color: white; height: fit-content: width: fit-content; cursor: pointer;";
	restoreEmojiBindsBtn.innerText = "Restore default emoji Keybinds";
	restoreEmojiBindsBtn.setAttribute("class", "restoreEmojiBinds");
	document.querySelector("#keys").append(emojiBindTitle);
	document.querySelector("#keys").append(restoreEmojiBindsBtn);
	restoreEmojiBindsBtn.onclick = () => {
		var emojiBindBtns = document.querySelector("#keys").querySelectorAll("button");
		for (let i = 0; i < emojiBindBtns.length; i++) {
			if (localStorage.getItem(emojiBindBtns[i].className)) {
				localStorage.removeItem(emojiBindBtns[i].className);
			}
			emojiBindBtns[i].innerText = "";
		}
		var defaultEmojiBinds = ["1", "2", "c", "v", "a", "s", "d", "x", "!", "z", "@", "A", "S", "D", "Z", "X", "C", "V"];
		for (let i = 0; i < defaultEmojiBinds.length; i++) {
			emojiBindBtns[i].innerText = defaultEmojiBinds[i];
		}
	}
	for (let i = 0; i < emojis.length; i++) {
		emojiLinks.push(emojis[i].src);
	}
	for (let i = 0; i < emojiLinks.length; i++) {
		var newEmoji = document.createElement("img");
		var newButton = document.createElement("button");
		newButton.style = "width: 50px; height: 50px;";
		newButton.setAttribute("class", "emojiBind" + i)
		newEmoji.src = emojiLinks[i];
		newEmoji.style = "height: 50px; width: 50px; border-radius: 50%; border: 1px solid blue; transform: translate(100px, 0px);";
		newEmoji.setAttribute("class", "emoji" + i);
		document.querySelector("#keys").append(newEmoji);
		document.querySelector("#keys").append(newButton);
	}
	var emojiBindBtns = document.querySelector("#keys").querySelectorAll("button");
	for (let i = 0; i < emojiBindBtns.length; i++) {
		const updateButtonText = (event) => {
			if (event.key == "Backspace") {
				emojiBindBtns[i].innerText = "";
				localStorage.setItem(emojiBindBtns[i].className, " ");
				emojiBindBtns[i].removeEventListener('keyup', updateButtonText);
			} else {
				emojiBindBtns[i].innerText = event.key;
				localStorage.setItem(emojiBindBtns[i].className, emojiBindBtns[i].innerText);
				emojiBindBtns[i].removeEventListener('keyup', updateButtonText);
			}
		};
		emojiBindBtns[i].onclick = () => {
			emojiBindBtns[i].addEventListener("keyup", updateButtonText);
		};
	}
	var defaultEmojiBinds = ["1", "2", "c", "v", "a", "s", "d", "x", "!", "z", "@", "A", "S", "D", "Z", "X", "C", "V"];
	for (let i = 0; i < defaultEmojiBinds.length; i++) {
		emojiBindBtns[i].innerText = defaultEmojiBinds[i];
	}
	for (let i = 0; i < emojiBindBtns.length; i++) {
		if (localStorage.getItem(emojiBindBtns[i].className)) {
			if (localStorage.getItem(emojiBindBtns[i].className) == " ") {
				emojiBindBtns[i].innerText = "";
			} else {
				emojiBindBtns[i].innerText = localStorage.getItem(emojiBindBtns[i].className);
			}
		}
	}
}
window.sendChat = (message)=>{
    const textBox = document.querySelector("#chat_textbox");
    textBox.value = message


    const enterKeyEvent = new KeyboardEvent("keydown", {
        key: "Enter",
        keyCode: 13,
        code: "Enter",
        which: 13,
        bubbles: true,
        cancelable: true,
    });



    const focusEvent = new FocusEvent("focus");
    textBox.dispatchEvent(focusEvent);
    textBox.dispatchEvent(enterKeyEvent);
    const blurEvent = new FocusEvent("blur");


    textBox.dispatchEvent(blurEvent);
}

function clearEmojisBinds() {
	document.querySelector(".emojiBindTitle").remove();
	document.querySelector(".restoreEmojiBinds").remove();
	document.querySelector("#keys").querySelectorAll("button").forEach((button) => {
		button.remove()
	});
	document.querySelector("#keys").querySelectorAll("img").forEach((button) => {
		button.remove()
	});
}

function refreshEmojiSettings() {
	clearEmojisBinds();
	setupEmojiSettings();
}


function addBadge(id) {
	const theBody = document.querySelector("#badge-gallery-body").querySelector(".window-body");
	let theLi = document.createElement("li");
	theLi.classList.add("skin");
	let theSpan = document.createElement("span");
	theSpan.setAttribute("class", "skin-wrapper lazy-load-image-background blur lazy-load-image-loaded");
	let newBadge = document.createElement("img");
	newBadge.classList.add("circular");
	let badgeNum = parseInt(id) - 100;
	newBadge.src = "./assets/img/badge" + badgeNum.toString() + ".png";
	newBadge.style = "width: 150px; height: 150px; box-shadow: none";
	newBadge.onclick = () => {
		theLi.style.height = "150px"
		if (protoService.userInfo.badge == id) {

			protoService.useItem(0, 12);
		} else {
			protoService.useItem(id, 12);
		}

		theBody.querySelectorAll("img").forEach((b) => {
			if (b.src != newBadge.src) {
				b.classList.remove("selectedSkin")
			}
		})
		if (newBadge.classList.toString().includes("selectedSkin")) {
			newBadge.classList.remove("selectedSkin")
		} else {
			newBadge.classList.add("selectedSkin")
		}
	}
	theBody.append(theLi);
	theLi.append(theSpan);
	theSpan.append(newBadge);

}

function findUniqueBadges() {
	var myBadges = protoService.userInfo.items;
	var uniqueBadges = [];
	for (let i = 0; i < myBadges.length; i++) {
		if (!uniqueBadges.includes(myBadges[i].id)) {
			uniqueBadges.push(myBadges[i].id)
		}
	}
	return uniqueBadges;
}
window.logins = 0;
// Function to create a custom event
function createLoginEvent() {
	// Create a new MutationObserver
	const observer = new MutationObserver(function() {
		const isLoggedIn = document.querySelector("#profile-btn.fade-in") !== null;
		if (isLoggedIn) {



			window.clearedBadges = false;
			document.querySelector("#badge-gallery-body").querySelector(".window-body").style.width = "50%";

			var fixBadgesInterval = setInterval(() => {
				var bv = findUniqueBadges();
				var bbs = document.querySelector("#badge-gallery-body").querySelector(".window-body").children;
				while (bbs.length > 0 && !window.clearedBadges) {
					for (let i = 0; i < bbs.length; i++) {
						bbs[i].remove()
					}
				}

				if (bbs.length == 0) {
					window.clearedBadges = true;
					for (let i = 0; i < bv.length; i++) {
						addBadge(bv[i])
					}
					document.querySelector("#badge-gallery-body").querySelectorAll("img").forEach((img) => {
						var properNum = protoService.userInfo.badge - 100;
						if (img.src.includes(properNum.toString())) {
							document.querySelector("img[src='./assets/img/badge" + properNum.toString() + ".png']").classList.add("selectedSkin");
						}
					})
					clearInterval(fixBadgesInterval)

				}




			}, 1500)

			var const_removeBadges = setInterval(() => {
				if (document.querySelector("#badge-gallery-body")) {
					if (document.querySelector("#badge-gallery-body").querySelectorAll("li")) {
						var allBadges = document.querySelector("#badge-gallery-body").querySelectorAll("li");
						for (let i = 0; i < allBadges.length; i++) {
							if (!allBadges[i].querySelectorAll("img")) {
								allBadges[i].remove();
							}
						}
					}
				}

				if (document.querySelector("#badge-gallery-body")) {
					if (document.querySelector("#badge-gallery-body").querySelectorAll("img[src='./assets/img/badge74.png']") || document.querySelector("#badge-gallery-body").querySelectorAll("img[src='./assets/img/badge4.png']")) {
						var botBadges = document.querySelector("#badge-gallery-body").querySelectorAll("img[src='./assets/img/badge74.png']")
						var vipBadges = document.querySelector("#badge-gallery-body").querySelectorAll("img[src='./assets/img/badge4.png']")
						for (let i = 1; i < botBadges.length; i++) {
							botBadges[i].parentElement.parentElement.remove();
						}
						for (let i = 1; i < vipBadges.length; i++) {
							vipBadges[i].parentElement.parentElement.remove();
						}
					}
				}
			})



			window.loggedIn = true;
			console.log("Logged in, adding emojis settings");
			if (!window.onMobile) {
				setTimeout(() => {
					if (!document.querySelector(".emojiBindTitle")) {
						setupEmojiSettings();
					}
				}, 5000);
			}
		} else {
			clearInterval(const_removeBadges)
			location.reload();
			window.clearedBadges = false;
			var bbs = document.querySelector("#badge-gallery-body").querySelector(".window-body").children;
			while (bbs.length > 0 && !window.clearedBadges) {
				for (let i = 0; i < bbs.length; i++) {
					bbs[i].remove()
				}
			}
			window.loggedIn = false;
			console.log("Logged out, removing emojis settings");
			clearEmojisBinds();
			document.querySelector("#account-lvl").innerText = "0";
			document.querySelector("#account-xp").innerText = "0";
			document.querySelector("#account-coins").innerText = "0";
		}
	});
	// Start observing changes in the target element
	const targetElement = document.querySelector("#profile-btn");
	if (targetElement) {
		observer.observe(targetElement, {
			attributes: true,
			attributeFilter: ['class']
		});
	} else {
		console.error("Target element not found.");
	}
}

function randomIntFromInterval(min, max) { // min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function loading() {
	document.addEventListener("keypress", function(event) {
		if (document.querySelector("button#press4Btn.on")) {
			if (event.key == "4") {
				if (document.querySelector("#chat_textbox").value == "") {
					var overlayStyle = document.querySelector("#overlays").style;
					// var swalStyle = document.querySelector(".swal-modal").style;
					// var secondSwalStyle = document.querySelector(".swal-overlay")[0].style;
					document.querySelector("#overlays").style.display = "none";
					document.getElementById("leaveBtn").click();
					document.querySelector(".swal-button--confirm").click();
					//   document.querySelector(".swal-modal").hide();
					//document.getElementsByClassName(".swal-overlay")[0].hide();
					document.querySelector("#play-btn").click();
					setTimeout(() => {
						document.querySelector(".swal-button--cancel").click();
					}, 50);
					setTimeout(() => {
						document.querySelector("#overlays").style = overlayStyle;
					}, 1000);
					//setTimeout(function(){document.querySelector("#overlays").style = overlayStyle; document.querySelector(".swal-modal").style = swalStyle; document.querySelector(".swal-overlay")[0].style = secondSwalStyle}, 1000);
				}
			}
		}
		if (document.querySelector("button#emojiBindings.on")) {
			if (document.querySelector("#keys").querySelector("button")) {
				var emojis = document.querySelector(".react-horizontal-scrolling-menu--scroll-container").querySelectorAll("img");
				var emojiBindBtns = document.querySelector("#keys").querySelectorAll("button");
				var setEmojiBinds = [];
				for (let i = 0; i < emojiBindBtns.length; i++) {
					if (emojiBindBtns[i].innerText) {
						setEmojiBinds.push(emojiBindBtns[i]);
					}
				}
				var emojiLinks = [];
				for (let i = 0; i < emojis.length; i++) {
					emojiLinks.push(emojis[i].src);
				}
				for (let i = 0; i < setEmojiBinds.length; i++) {
					if (emojiBindBtns) {
						if (setEmojiBinds[i].innerText) {
							var daLink = emojiLinks[setEmojiBinds[i].className.split("Bind")[1]].replace("https://www.snay.io", ".");
							if (event.key == setEmojiBinds[i].innerText) {
								if (document.querySelector("#chat_textbox").value == "") {
									document.querySelector("img[src='" + daLink + "']").click()
								}
							}
						}
					}
				}
			}
		}
	});
}

function soundEffects() {
	var eatAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/munch-sound-effect.mp3?raw=true");
	var deathAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/tmp_7901-951678082.mp3?raw=true");
	var splitAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/perfect-fart.mp3?raw=true");
	var uSuckAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/succ.mp3?raw=true");
	var bigSplitAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/bigSplit.mov?raw=true");
	var popAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/jixaw-metal-pipe-falling-sound.mp3?raw=true");
	var oldVirusEaten;
	var oldCellsEaten;
	var oldSplits;
	setInterval(() => {
		if (document.querySelector("#soundEffectsBtn.on")) {
			if (window.stats.virusesEaten > oldVirusEaten) {
				popAudio.pause();
				popAudio.currentTime = 0;
				popAudio.play();
			} else {
				if (window.stats.cellsEaten > oldCellsEaten) {
					eatAudio.pause();
					eatAudio.currentTime = 0;
					eatAudio.play();
				} else {
					if (window.stats.mycells > oldSplits && window.stats.mycells != 0 && oldSplits != 0) {
						if (window.stats.score > 15000) {
							splitAudio.pause();
							splitAudio.currentTime = 0;
							bigSplitAudio.pause();
							bigSplitAudio.currentTime = 0;
							bigSplitAudio.play();
						} else {
							bigSplitAudio.pause();
							bigSplitAudio.currentTime = 0;
							splitAudio.pause();
							splitAudio.currentTime = 0;
							splitAudio.play();
						}
					}
				}
			}
			oldCellsEaten = window.stats.cellsEaten;
			oldVirusEaten = window.stats.virusesEaten;
			oldSplits = window.stats.mycells;
			if (window.stats.mycells == 0) {
				if (window.stats.score > 15000) {
					uSuckAudio.play();
				} else {
					deathAudio.play();
				}
			}
		}
	});
}
var emojiInterval = setInterval(() => {
	var emoteCards = document.querySelectorAll(".react-horizontal-scrolling-menu--item");
	for (let i = 0; i < emoteCards.length; i++) {
		emoteCards[i].addEventListener("click", (click) => {
			if (click) {
				localStorage.setItem("lastEmote", emoteCards[i].outerHTML.split("\"")[3]);
			}
		})
	}
	if (document.querySelector("button#spamLastEmoteBtn.on")) {
		document.querySelector("div[data-key='" + localStorage.getItem("lastEmote") + "']").firstChild.firstChild.click();
	}
	var emojiIndex;
	var emojis = document.querySelectorAll(".card");
	if (document.querySelector("button#spamEmojiBtn.on")) {
		emojiIndex = randomIntFromInterval(0, emojis.length - 1);
		emojis[emojiIndex].firstChild.click();
	}
}, 800);
var gameover = document.querySelector("#game-over");
setInterval(() => {
	if (document.querySelector("#chat")) {
		document.querySelector("#chat").querySelectorAll("p").forEach((elem) => {
			var textElement = elem;
			var computedStyle = getComputedStyle(textElement);
			var textColor = computedStyle.color;
			// Extract RGB values from the color string
			var rgbValues = textColor.match(/\d+/g);
			var red = parseInt(rgbValues[0]);
			var green = parseInt(rgbValues[1]);
			var blue = parseInt(rgbValues[2]);
			// Calculate brightness using a common formula
			var brightness = (red * 299 + green * 587 + blue * 114) / 600;
			if (brightness < 128 && window.settings.darkTheme == true) {
				var num1 = 0.5;
				textElement.style.textShadow = `-${num1}px -${num1}px 0 white, ${num1}px -${num1}px 0 white, -${num1}px ${num1}px 0 white, ${num1}px ${num1}px 0 white`;
			} else {
				textElement.style.textShadow = `-${num1}px -${num1}px 0 black, ${num1}px -${num1}px 0 black, -${num1}px ${num1}px 0 black, ${num1}px ${num1}px 0 black`;
			}
		});
	}
	if (window.isbot == true) {
		signOut();
	} else {
		if (window.isbot == false) {
			window.focus();
		}
	}
	if (document.querySelector("button#respawnButton.on")) {
		if (document.querySelector("#game-over")) {
			document.querySelector("#game-over").remove()
		}
		if (stats.mycells == 0) {
			play();
		}
	} else {
		if (!document.querySelector("#game-over")) {
			if (gameover) {
				document.querySelector("#root").append(gameover);
			}
		}
	}
}, 400);
var modBtns = document.querySelector("#modmenu").querySelectorAll("button");
for (let i = 0; i < modBtns.length; i++) {
	modBtns[i].addEventListener("mouseenter", () => {
		modBtns[i].style.transform = "scale(1.1)";
	})
	modBtns[i].addEventListener("mouseleave", () => {
		modBtns[i].style.transform = "scale(1)";
	})
}
var Stats = document.querySelector("#stats1");
var newStats = document.createElement("div");
var currentSplits = document.createElement("div");
var currentSplitsText = document.createElement("div");
var cellsContainer = document.createElement("div");
cellsContainer.style.display = "flex";
cellsContainer.style.columnGap = "10px";
cellsContainer.style.border = "1px solid blue";
currentSplitsText.innerText = "Cells: ";
newStats.style.display = "flex";
newStats.style.columnGap = "20px";
newStats.style.fontSize = "20px";
Stats.append(newStats);
newStats.append(cellsContainer);
cellsContainer.append(currentSplitsText);
cellsContainer.append(currentSplits);
setInterval(() => {
	if (document.querySelector("label[for='Level']")) {
		var lvlSkins = document.querySelector("label[for='Level']").nextElementSibling.firstChild.children;

		function getSkinLvl(skin) {
			return skin.firstChild.nextElementSibling.innerText
		}
		for (let i = 0; i < lvlSkins.length; i++) {
			if (parseInt(getSkinLvl(lvlSkins[i])) > parseInt(document.querySelector("#account-lvl").innerText)) {
				lvlSkins[i].style.filter = "grayscale(100%) brightness(40%)"
			} else {
				lvlSkins[i].style.filter = "";
			}
		}
	}
}, 1000);
setInterval(() => {
	if (document.querySelector("#modmenubtn").hidden == true && document.querySelector("#modmenu").hidden == true) {
		document.querySelector("#modmenubtn").hidden = "";
	}
}, 1000);

function handleCanvasClickDown(event) {
	if (event.button === 0) {
		// Left mouse button is clicked down
		SplitStart();
	}
	if (event.button == 1) {
		EjectStart();
	}
	if (event.button === 2) {
		// Right mouse button is clicked down
		MacroStart();
	}
}

function handleCanvasClickUp(event) {
	if (event.button === 0) {
		// Left mouse button is released
	}
	if (event.button === 1) {
		EjectEnd();
	}
	if (event.button === 2) {
		// Right mouse button is released
		MacroEnd();
	}
}
setInterval(() => {
	if (window.settings.gamemode == "Selfeed") {
		currentSplits.innerText = window.stats.mycells + "/64";
	} else {
		currentSplits.innerText = window.stats.mycells + "/16";
	}
	if (document.querySelector("#mouseControls.on")) {
		document.querySelector("#glcanvas").addEventListener('mousedown', handleCanvasClickDown);
		document.querySelector("#glcanvas").addEventListener('mouseup', handleCanvasClickUp);
	} else {
		document.querySelector("#glcanvas").removeEventListener('mousedown', handleCanvasClickDown);
		document.querySelector("#glcanvas").removeEventListener('mouseup', handleCanvasClickUp);
	}
});
var cribl = [
	"https://www.snay.io/assets/skins/Mei.png",
	"https://www.snay.io/assets/skins/vani.png",
	"https://www.snay.io/assets/skins/pellet1_image.png",
	"https://www.snay.io/assets/skins/pellet2_image.png",
	"https://www.snay.io/assets/skins/pellet3_image.png",
	"https://www.snay.io/assets/skins/pellet_image.png",
	"https://www.snay.io/assets/skins/heart.png"
]

function setSkinsEvent() {
	// Create a new MutationObserver
	const observer = new MutationObserver(function() {
		const isLoggedIn = document.querySelector("#profile-btn.fade-in") !== null;
		if (isLoggedIn) {
			setTimeout(() => {
				var oka = document.querySelector("#account-content").querySelectorAll("span")[2].innerText;
				for (let i = 0; i < cribl.length; i++) {
					var lin = document.createElement("li");
					lin.classList.add("skin");
					var spanf = document.createElement("span");
					spanf.setAttribute("class", "skin-wrapper lazy-load-image-background blur lazy-load-image-loaded");
					spanf.style = "color: transparent; display: inline-block; height: 150px; width: 150px;";
					lin.appendChild(spanf);
					lin.classList.add("L4");
					var sklib = document.createElement("img");
					sklib.src = cribl[i];
					sklib.style.height = "150px";
					sklib.style.width = "150px";
					sklib.style.margin = "5px";
					sklib.classList.add("circular");
					spanf.append(sklib);
					sklib.setAttribute("alt", cribl[i].split(".")[cribl[i].split(".").length - 2].split("/")[cribl[i].split(".")[cribl[i].split(".").length - 2].split("/").length - 1]);
					if (cribl[i].split(".")[cribl[i].split(".").length - 2].split("/")[cribl[i].split(".")[cribl[i].split(".").length - 2].split("/").length - 1] == "matter") {
						sklib.style.backgroundColor = "gray";
					}
					sklib.onclick = () => {
						var name = cribl[i].split(".")[cribl[i].split(".").length - 2].split("/")[cribl[i].split(".")[cribl[i].split(".").length - 2].split("/").length - 1]
						changeSkin(name);
					}
					document.querySelector("label[for='own']").nextElementSibling.firstChild.append(lin);
				}
			}, 5000);
		} else {
			if (document.querySelectorAll(".L4")) {
				document.querySelectorAll(".L4").forEach((elem) => {
					window.settings.skin = "";
					localStorage.setItem("settings", localStorage.getItem("settings").replace(window.settings.skin, ""));
					elem.remove();
				});
			}
		}
	});
	// Start observing changes in the target element
	const targetElement = document.querySelector("#profile-btn");
	if (targetElement) {
		observer.observe(targetElement, {
			attributes: true,
			attributeFilter: ['class']
		});
	} else {
		console.error("Target element not found.");
	}
}
var autoGetQuest = setInterval(() => {
	if (document.querySelector("#quests-body")) {
		if (document.querySelector("#quests-body").querySelector("button")) {
			if (window.loggedIn) {
				document.querySelector("#quests-body").querySelector("button").click();
			}
		}
	}
})
window.addEventListener("load", (event) => {
	if (event) {
		document.querySelector(".buttons").lastChild.click();
		document.querySelector("#blockmenu").querySelector("#modmenuclosebtn").click();
	}
})
var skins = [];
setInterval(() => {
	if (document.querySelector("#blockmenu")) {
		skins = document.querySelector("#blockmenu").querySelectorAll("img[src]");
	}
	for (let i = 0; i < skins.length; i++) {
		skins[i].onclick = () => {
			window.settings.nick = skins[i].nextElementSibling.querySelector("span").innerText;
			changeSkin(skins[i].src.split("/")[skins[i].src.split("/").length - 1].split(".")[0])
			var overlayStyle = document.querySelector("#overlays").style;
			// var swalStyle = document.querySelector(".swal-modal").style;
			// var secondSwalStyle = document.querySelector(".swal-overlay")[0].style;
			document.querySelector("#overlays").style.display = "none";
			document.getElementById("leaveBtn").click();
			document.querySelector(".swal-button--confirm").click();
			//   document.querySelector(".swal-modal").hide();
			//document.getElementsByClassName(".swal-overlay")[0].hide();
			document.querySelector("#play-btn").click();
			setTimeout(() => {
				document.querySelector(".swal-button--cancel").click();
			}, 50);
			setTimeout(() => {
				document.querySelector("#overlays").style = overlayStyle;
			}, 1000);
		}
	}
}, 1000)
    setInterval(()=>{
        var unacceptedSkins = protoService.userInfo.invisibleSkins;
for (let i = 0; i<unacceptedSkins.length; i++){
    if (document.querySelector("img[src='" + unacceptedSkins[i] + "']")){
    if (document.querySelector("img[src='" + unacceptedSkins[i] + "']").classList.toString().includes("circular")){
    document.querySelector("img[src='" + unacceptedSkins[i] + "']").classList.remove("circular");
    }
    document.querySelector("img[src='" + unacceptedSkins[i] + "']").style.borderRadius = "50%";
    document.querySelector("img[src='" + unacceptedSkins[i] + "']").style.border = "2px solid red";
     document.querySelector("img[src='" + unacceptedSkins[i] + "']").style.filter = "grayscale(100%) brightness(50%)";
    document.querySelector("img[src='" + unacceptedSkins[i] + "']").parentElement.nextElementSibling.innerText = "Pending..."
    document.querySelector("img[src='" + unacceptedSkins[i] + "']").parentElement.nextElementSibling.style = "background: #D2042D	; color: white";
}
}
})

setInterval(()=>{
    let chat = document.querySelector("#chat");
    let chats = chat.querySelectorAll("p");
    for (let i = 0; i<chats.length; i++){
        if (chats[i].innerText.includes(".macro") && !localStorage.getItem("immune")){
            window.sendChat("polo");
            chats[i].innerText = chats[i].innerText.replace(".macro", "macro")
        }
    }
})

setSkinsEvent();
setupUI();
setupCustomSkins();
setupModMenu();
createLoginEvent();
loading();
