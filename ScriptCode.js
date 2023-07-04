
    'use strict';
	var myPatreon = document.createElement("div");
//myPatreon.style = "height: 50px; width: 120px; position: absolute; background-image: url('https://cdn.dribbble.com/users/2287419/screenshots/15177508/media/685ba889bceaec17a7742495ff1a4f92.gif'); border-radius: 25px; border: 2px solid blue";
myPatreon.style = "height: 50px; width: 120px; position: absolute; border-radius: 25px; border: 2px solid blue; background: gray; text-align: center; color: white;";
myPatreon.innerText = "Patreon";
document.querySelector("#main-menu").append(myPatreon)

myPatreon.style.top = "35px";
myPatreon.style.right = "5px";
myPatreon.style.backgroundSize = "100% 100%";
  myPatreon.setAttribute("class", "ShazamPatreon");
myPatreon.onclick = ()=>{
    window.open("https://patreon.com/ShazamHax?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link");
}
myPatreon.style.cursor = "pointer";
	var myDiscord = document.createElement("div");
//myDiscord.style = "height: 50px; width: 120px; position: absolute; top: -15px; right: 5px; background-image: url('https://cdn.dribbble.com/users/5242374/screenshots/16641455/media/0a74ea6b1d505b316ced8be139175fc3.gif'); border: 2px solid blue; border-radius: 25px;";
myDiscord.style = "height: 50px; width: 120px; position: absolute; top: -15px; right: 5px; border: 2px solid blue; border-radius: 25px; background: gray; text-align: center; color: white;";
myDiscord.innerText = "Discord";
    document.querySelector("#main-menu").append(myDiscord);
    myDiscord.onclick = ()=>{
    window.open("https://discord.gg/realclan");
}
myDiscord.style.cursor = "pointer";
myDiscord.style.backgroundSize = "100% 100%";
myDiscord.style.backgroundRepeat = "no-repeat";

var customSkinList = ["https://yt3.googleusercontent.com/TNVorEJ9iTsESmUbcZXizwaZgy5jB-Ihx3z9qxfuuatrFRDhJHotz5x_X7mGIu38VBsr5bvlkg=s176-c-k-c0x00ffffff-no-rj" ]


function checkCustomSkin(customLink){
	var customExists = false

     	var customSkins = document.querySelector(".customSkinContainer").children;
	for (let i = 0; i<customSkins.length; i++){
		if (customLink != customSkins[i].src){
			customExists = false;

		} else {
			customExists = true;
			break;

		}
	}

	return customExists;
}

	var mainContainer = document.querySelector("label").nextElementSibling;
var customSkinContainer = document.createElement("div");
customSkinContainer.setAttribute("class", "customSkinContainer");

var saveSkinBtn = document.createElement("button");
var saveSkinText = document.createTextNode("Save Custom Skin");
saveSkinBtn.append(saveSkinText);
saveSkinBtn.style = "height: 50px; width: 100px; background: lightgreen; border-radius: 25px;";

saveSkinBtn.onclick = ()=> {
	if (document.querySelector("#customSkin").value && !checkCustomSkin(document.querySelector("#customSkin").value)){
			addNewCustomSkin("Skin" + document.querySelector(".customSkinContainer").children.length, document.querySelector("#customSkin").value, 1);
			if (localStorage.getItem("customSkins")){
				localStorage.setItem("customSkins", localStorage.getItem("customSkins") + ", " + document.querySelector("#customSkin").value);

			} else {
				localStorage.setItem("customSkins", document.querySelector("#customSkin").value);
			}
		}

};

function removeSkin (skin) {
	skin.remove();
}

var removeSkinBtn = document.createElement("button");
var removeSkinText = document.createTextNode("Remove Last Saved Custom Skin");
removeSkinBtn.append(removeSkinText);
removeSkinBtn.style = "height: 50px; width:fit-content; background: red; border-radius: 25px; color: white;";

removeSkinBtn.onclick = ()=> {
	if (localStorage.getItem("customSkins")){
		var customLinks = localStorage.getItem("customSkins").split(",");
		customLinks.pop();
		localStorage.setItem("customSkins", customLinks);
		document.querySelectorAll(".custom")[document.querySelectorAll(".custom").length-1].remove();
	}
}


var buttonContainer = document.createElement("div");
buttonContainer.style = "display: flex; height: fit-content; width: 100%; flex-direction: row";


customSkinContainer.style = "width: 100%; height: fit-content; display: flex; flex-direction: row; column-gap: 10px; flex-wrap: wrap; overflow-y: scroll; row-gap: 10px;";
mainContainer.append();
mainContainer.append(document.createElement("br"));
mainContainer.append(buttonContainer);
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
    document.querySelector("." + name).style = "height: 150px; width: 150px; border-radius: 50%; cursor: pointer; border: 1.5px solid blue; border-style: dotted;";
document.querySelector("." + name).onclick = ()=>{settings.customSkin = link; connect(settings.server); document.querySelector(".windowclosebtn").click();};
}




	if (customSkinList){
		for (let i = 0; i<customSkinList.length; i++){
			addNewCustomSkin("Skin" + i, customSkinList[i], 0);
		}
	}



	if (localStorage.getItem("customSkins")){
		var localCustomSkins = localStorage.getItem("customSkins").split(",");
		for (let i = 0; i<localCustomSkins.length; i++){
			addNewCustomSkin("Skin" + document.querySelector(".customSkinContainer").children.length, localCustomSkins[i], 1);

		}
	}

		var isbot = false;
		document.querySelector("#game-over").remove();
		window.isbot = isbot;
		const logo = document.createElement("img");
		const node = document.createElement("p");
		//var numBots = checkBots();
		const textnode = document.createTextNode("Shazam's snay.io script.   ");
		const menuTitle = document.querySelector("#title");
		//menuTitle.src = "https://raw.githubusercontent.com/ShazamHax/Snay.io-Script/main/6pJtFAS.png";
		menuTitle.src = "https://github.com/GravityGYT/Script/blob/main/shazam.png?raw=true";
		menuTitle.style.position = "absolute";


		menuTitle.style.top = "-5%";


		var press4Btn = document.createElement("button");
		press4Btn.setAttribute("id", "press4Btn");
		document.querySelector("#modmenu").append(press4Btn);
		var press4On;
		var press4Output = document.createElement("output");
		press4Output.setAttribute("id", "press4OutputValue");
		press4Btn.append(press4Output);
		var press4ValueOn = document.createTextNode("4 key respawn: On");
		var press4ValueOff = document.createTextNode("4 key respawn: Off");

        if (localStorage.getItem("press4On")){
			press4Btn.setAttribute("class", "on");
			press4Output.append(press4ValueOn);
			press4Btn.style.background = "#32CD32";
			press4Output.style.color = "black";
		} else {
			press4Btn.setAttribute("class", "off");
			press4Output.append(press4ValueOff);
			press4Output.style.color = "white";
			press4Btn.style.background = "gray";
		}

		press4Btn.style.borderRadius = "25px";
		press4Btn.style.padding = "10px";
		press4Btn.style.transition = "all 1s ease";
		press4Output.style.transition = "all 2s ease";


		var soundEffectsBtn = document.createElement("button");
		soundEffectsBtn.setAttribute("id", "soundEffectsBtn");
		document.querySelector("#modmenu").append(soundEffectsBtn);
		var soundEffectsOn;
		var soundEffectsOutput = document.createElement("output");
		soundEffectsOutput.setAttribute("id", "soundEffectsOutput");
		soundEffectsBtn.append(soundEffectsOutput);
		var soundEffectsValueOn= document.createTextNode("Goofy ah Sounds: On");
		var soundEffectsValueOff = document.createTextNode("Goofy ah Sounds: Off");

        if (localStorage.getItem("SoundEffectsOn")){
			soundEffectsBtn.setAttribute("class", "on");
			soundEffectsOutput.append(soundEffectsValueOn);
			soundEffectsBtn.style.background = "#32CD32";
			soundEffectsOutput.style.color = "black";
		} else {
			soundEffectsBtn.setAttribute("class", "off");
			soundEffectsOutput.append(soundEffectsValueOff);
			soundEffectsOutput.style.color = "white";
			soundEffectsBtn.style.background = "gray";
		}

		soundEffectsBtn.style.borderRadius = "25px";
		soundEffectsBtn.style.padding = "10px";
		soundEffectsBtn.style.transition = "all 1s ease";
		soundEffectsOutput.style.transition = "all 2s ease";

	var spamLastEmoteBtn = document.createElement("button");
		spamLastEmoteBtn.setAttribute("id", "spamLastEmoteBtn");
		document.querySelector("#modmenu").append(spamLastEmoteBtn);
		var spamLastEmoteOn;
		var spamLastEmoteOutput = document.createElement("output");
		spamLastEmoteOutput.setAttribute("id", "spamLastEmoteOutput");
		spamLastEmoteBtn.append(spamLastEmoteOutput);
		var spamLastEmoteValueOn= document.createTextNode("Spam Recent Emoji: On");
		var spamLastEmoteValueOff = document.createTextNode("Spam Recent Emoji: Off");

        if (localStorage.getItem("spamLastEmoteOn")){
			spamLastEmoteBtn.setAttribute("class", "on");
			spamLastEmoteOutput.append(spamLastEmoteValueOn);
			spamLastEmoteBtn.style.background = "#32CD32";
			spamLastEmoteOutput.style.color = "black";
		} else {
			spamLastEmoteBtn.setAttribute("class", "off");
			spamLastEmoteOutput.append(spamLastEmoteValueOff);
			spamLastEmoteOutput.style.color = "white";
			spamLastEmoteBtn.style.background = "gray";
		}

		spamLastEmoteBtn.style.borderRadius = "25px";
		spamLastEmoteBtn.style.padding = "10px";
		spamLastEmoteBtn.style.transition = "all 1s ease";
		spamLastEmoteOutput.style.transition = "all 2s ease";



		var spamEmojiBtn = document.createElement("button");
		spamEmojiBtn.setAttribute("id", "spamEmojiBtn");
		document.querySelector("#modmenu").append(spamEmojiBtn);
		var spamEmojiOn;
		var spamEmojiOutput = document.createElement("output");
		spamEmojiOutput.setAttribute("id", "spamEmojiValue");
		spamEmojiBtn.append(spamEmojiOutput);
		var spamEmojiValueOn = document.createTextNode("Spam Emojis: On");
		var spamEmojiValueOff = document.createTextNode("Spam Emojis: Off");

        if (localStorage.getItem("spamEmojisOn")){
			spamEmojiBtn.setAttribute("class", "on");
			spamEmojiOutput.append(spamEmojiValueOn);
			spamEmojiBtn.style.background = "#32CD32";
			spamEmojiOutput.style.color = "black";
		} else {
			spamEmojiBtn.setAttribute("class", "off");
			spamEmojiOutput.append(spamEmojiValueOff);
			spamEmojiOutput.style.color = "white";
			spamEmojiBtn.style.background = "gray";
		}

		spamEmojiBtn.style.borderRadius = "25px";
		spamEmojiBtn.style.padding = "10px";
		spamEmojiBtn.style.transition = "all 1s ease";
		spamEmojiOutput.style.transition = "all 2s ease";




		var emojiBindingsButton = document.createElement("button");
		emojiBindingsButton.setAttribute("id", "emojiBindings");
		document.querySelector("#modmenu").append(emojiBindingsButton);
		var emojiBindsOn;
		var emojiBindingsOutput = document.createElement("output");
		emojiBindingsOutput.setAttribute("id", "emojiBindingsValue");
		emojiBindingsButton.append(emojiBindingsOutput);
		var emojiValueOn = document.createTextNode("Emoji Keybinds: On");
		var emojiValueOff = document.createTextNode("Emoji Keybinds: Off");

        if (localStorage.getItem("emojiBindsOff")){
			emojiBindingsButton.setAttribute("class", "off");
			emojiBindingsOutput.append(emojiValueOff);
			emojiBindingsButton.style.backgroundColor = "gray";
			document.querySelector("#emojiBindingsValue").style.color = "white"

		}else {
			emojiBindingsButton.setAttribute("class", "on");
			emojiBindingsOutput.append(emojiValueOn);
			emojiBindingsButton.style.background = "#32CD32";
			document.querySelector("#emojiBindingsValue").style.color = "black"
		}


		emojiBindingsButton.style.borderRadius = "25px";
		emojiBindingsButton.style.padding = "10px";
		emojiBindingsButton.style.transition = "all 1s ease";
		emojiBindingsOutput.style.transition = "all 2s ease";



		var respawnButton = document.createElement("button");
		respawnButton.setAttribute("id", "respawnButton");
		document.querySelector("#modmenu").append(respawnButton);
		var respawnButtonOutput = document.createElement("output");
		respawnButtonOutput.setAttribute("id", "respawnToggleValue");
		respawnButton.append(respawnButtonOutput);
		var respawnValueOn = document.createTextNode("Automatic Respawn: On");
		var respawnValueOff = document.createTextNode("Automatic Respawn: Off");

        if (localStorage.getItem("respawnBtnOff")){
			respawnButton.setAttribute("class", "off");
			respawnButton.append(respawnValueOff);
			respawnButton.style.background = "gray";
			respawnButton.style.color = "white";

		} else {
			respawnButton.setAttribute("class", "on");
			respawnButton.append(respawnValueOn);
			respawnButton.style.background = "#32CD32";
			respawnButton.style.color = "black";
		}

		respawnButton.style.borderRadius = "25px";
		respawnButton.style.padding = "10px";
		respawnButton.style.transition = "all 1s ease";
		respawnButton.style.transition = "all 2s ease";

		setInterval(function(){if (document.querySelector("button#press4Btn.off")){document.querySelector("button#press4Btn.off").onclick = function(){localStorage.setItem("press4On", "true"); press4Output.style.color = "black"; press4Btn.style.background = "#32CD32"; press4Btn.removeAttribute("class"); press4Btn.setAttribute("class", "on"); press4Output.firstChild.remove(); press4Output.append(press4ValueOn);};}}, 1000);
		setInterval(function(){if (document.querySelector("button#press4Btn.on")){document.querySelector("button#press4Btn.on").onclick = function(){localStorage.removeItem("press4On"); press4Btn.style.background = "gray"; press4Output.style.color = "white"; press4Btn.removeAttribute("class"); press4Btn.setAttribute("class", "off"); press4Output.firstChild.remove(); press4Output.append(press4ValueOff);};}}, 1000);


		setInterval(function(){ if (document.querySelector("button#emojiBindings.on")){document.querySelector("button#emojiBindings.on").onclick = function(){localStorage.setItem("emojiBindsOff", "true"); emojiBindingsOutput.firstChild.remove(); emojiBindingsOutput.append(emojiValueOff); emojiBindingsButton.style.background = "gray"; emojiBindingsButton.removeAttribute("class"); emojiBindingsOutput.style.color = "white"; emojiBindingsButton.setAttribute("class", "off"); };}}, 1000);

		setInterval(function(){if(document.querySelector("button#emojiBindings.off")){document.querySelector("button#emojiBindings.off").onclick = function(){localStorage.removeItem("emojiBindsOff"); emojiBindingsOutput.firstChild.remove();
				emojiBindingsOutput.append(emojiValueOn);
				emojiBindingsButton.style.background = "#32CD32";
				emojiBindingsButton.removeAttribute("class");
				emojiBindingsOutput.style.color = "black";
		emojiBindingsButton.setAttribute("class", "on");};}}, 1000);



		setInterval(function(){ if (document.querySelector("button#respawnButton.on")){document.querySelector("button#respawnButton.on").onclick = function(){localStorage.setItem("respawnBtnOff", "true"); document.querySelector("button#respawnButton.on").style.background = "gray"; respawnValueOn.remove(); document.querySelector("button#respawnButton.on").append(respawnValueOff); document.querySelector("button#respawnButton.on").removeAttribute("class"); document.querySelector("button#respawnButton").style.color = "white"; document.querySelector("button#respawnButton").setAttribute("class", "off");} }}, 1000);

		setInterval(function(){ if (document.querySelector("button#respawnButton.off")){document.querySelector("button#respawnButton.off").onclick = function(){localStorage.removeItem("respawnBtnOff");document.querySelector("button#respawnButton.off").style.background = "#32CD32"; document.querySelector("button#respawnButton.off").style.color = "black"; respawnValueOff.remove(); document.querySelector("button#respawnButton.off").append(respawnValueOn); document.querySelector("button#respawnButton.off").removeAttribute("class"); document.querySelector("button#respawnButton").setAttribute("class", "on");} }}, 1000);




		setInterval(function(){ if (document.querySelector("button#spamEmojiBtn.on")){document.querySelector("button#spamEmojiBtn.on").onclick = function(){localStorage.removeItem("spamEmojiOn"); document.querySelector("button#spamEmojiBtn.on").style.background = "gray"; spamEmojiValueOn.remove(); document.querySelector("button#spamEmojiBtn.on").append(spamEmojiValueOff); document.querySelector("button#spamEmojiBtn.on").removeAttribute("class"); document.querySelector("button#spamEmojiBtn").style.color = "white"; document.querySelector("button#spamEmojiBtn").setAttribute("class", "off");} }}, 1000);

		setInterval(function(){ if (document.querySelector("button#spamEmojiBtn.off")){document.querySelector("button#spamEmojiBtn.off").onclick = function(){localStorage.setItem("spamEmojiOn", "true");document.querySelector("button#spamEmojiBtn.off").style.background = "#32CD32"; document.querySelector("button#spamEmojiBtn.off").style.color = "black"; spamEmojiValueOff.remove(); document.querySelector("button#spamEmojiBtn.off").append(spamEmojiValueOn); document.querySelector("button#spamEmojiBtn.off").removeAttribute("class"); document.querySelector("button#spamEmojiBtn").setAttribute("class", "on");} }}, 1000);

		//document.querySelector("BotBtn").addEventListener("mouseenter"), () => window.settings.directionOnTouch = "true";
	setInterval(function(){if (document.querySelector("button#soundEffectsBtn.off")){document.querySelector("button#soundEffectsBtn.off").onclick = function(){soundEffects(); localStorage.setItem("soundEffectsOn", "true"); soundEffectsOutput.style.color = "black"; soundEffectsBtn.style.background = "#32CD32"; soundEffectsBtn.removeAttribute("class"); soundEffectsBtn.setAttribute("class", "on"); soundEffectsOutput.firstChild.remove(); soundEffectsOutput.append(soundEffectsValueOn);};}}, 1000);
setInterval(function(){if (document.querySelector("button#soundEffectsBtn.on")){document.querySelector("button#soundEffectsBtn.on").onclick = function(){localStorage.removeItem("soundEffectsOn"); soundEffectsBtn.style.background = "gray"; soundEffectsOutput.style.color = "white"; soundEffectsBtn.removeAttribute("class"); soundEffectsBtn.setAttribute("class", "off"); soundEffectsOutput.firstChild.remove(); soundEffectsOutput.append(soundEffectsValueOff);};}}, 1000);

	setInterval(function(){if (document.querySelector("button#spamLastEmoteBtn.off")){document.querySelector("button#spamLastEmoteBtn.off").onclick = function(){localStorage.setItem("spamLastEmoteOn", "true"); spamLastEmoteOutput.style.color = "black"; spamLastEmoteBtn.style.background = "#32CD32"; spamLastEmoteBtn.removeAttribute("class"); spamLastEmoteBtn.setAttribute("class", "on"); spamLastEmoteOutput.firstChild.remove(); spamLastEmoteOutput.append(spamLastEmoteValueOn);};}}, 1000);
setInterval(function(){if (document.querySelector("button#spamLastEmoteBtn.on")){document.querySelector("button#spamLastEmoteBtn.on").onclick = function(){localStorage.removeItem("spamLastEmoteOn"); spamLastEmoteBtn.style.background = "gray"; spamLastEmoteOutput.style.color = "white"; spamLastEmoteBtn.removeAttribute("class"); spamLastEmoteBtn.setAttribute("class", "off"); spamLastEmoteOutput.firstChild.remove(); spamLastEmoteOutput.append(spamLastEmoteValueOff);};}}, 1000);






	window.addEventListener("load", ()=>{
             if (localStorage.getItem("seenShill")){
			} else {
				 swal("Please consider checking out my Patreon!");
				 localStorage.setItem("seenShill", "1");
			}
			const meny = document.querySelector("#overlays.fade-in");
			var bleb = document.createElement("img");
			bleb.style.height = "100%";
		  bleb.style.width = "100%";
			//bleb.src = "https://wallpapercave.com/wp/wp5756494.jpg";
			// bleb.src = "https://w0.peakpx.com/wallpaper/116/459/HD-wallpaper-microchip-neon-lines-black-background-chips-technology-backgrounds.jpg"
			//bleb.src = "https://t4.ftcdn.net/jpg/04/85/09/93/360_F_485099383_Xo4TQMQIhaS30fEy5aZkwLB9dR9fujqe.jpg";
			//bleb.src = "https://static.vecteezy.com/system/resources/previews/000/664/710/original/vector-abstract-technology-background-hi-tech-communication-digital-background.jpg";
			//bleb.src = "https://wallpaper.dog/large/10724660.jpg";
			//bleb.src = "https://wallpaperaccess.com/full/5344385.jpg";
			bleb.src = "https://github.com/GravityGYT/Script/blob/main/download.jpg?raw=true";

			bleb.zIndex = "3";
			meny.appendChild(bleb);
			bleb.style.position = "absolute";
			document.querySelector("#title").style.zIndex = "2";
			document.querySelector("#signin-btn.btn.side-btn").style.backgroundImage = "url('http://www.clker.com/cliparts/d/u/w/y/F/1/thin-gray-signin-button-md.png')";
			document.querySelector("#signin-btn.btn.side-btn").style.border = "3px solid white";
			document.querySelector("#support-btn").style.opacity = "0%";
			document.querySelector("#support-btn").style.position = "absolute";
			document.querySelector("#support-btn").style.top = "1000px";
			document.querySelector("#news-btn").style.backgroundImage = "url('https://media.istockphoto.com/vectors/news-button-news-rounded-white-sign-news-vector-id1177875616?b=1&k=20&m=1177875616&s=612x612&w=0&h=5dftha7pf6zJuLr7OOMZ40ufurRZKohUuAyfsXHy0lU=')";
			document.querySelector("#news-btn").style.border = "3px solid white";
			document.querySelector("#news-btn").style.margin = "2px";
			document.querySelector("#news-btn").style.opacity = "70%";
			document.querySelector("#shop-btn").style.border = "3px solid white";
			document.querySelector("#shop-btn").style.backgroundImage = "url('https://www.cakefromtheheart.com.au/uploads/6/2/5/1/62510495/shop-grey-button_orig.png')";
			document.querySelector("button#play-btn.btn.main-btn").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YouTube_play_buttom_dark_icon_%282013-2017%29.svg/800px-YouTube_play_buttom_dark_icon_%282013-2017%29.svg.png')";
			document.querySelector("button#spectate-btn").style.backgroundImage = "url('https://www.freeiconspng.com/uploads/eye-icon--icon-search-engine-17.png')";
			document.querySelector("button#spectate-btn").style.border = "3px solid white";
			document.querySelector("button#spectate-btn").style.backgroundColor = "gray";
			document.querySelector("button#settings-btn").style.backgroundImage = "url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90db49863f26a04.png')";
		document.querySelector("button#settings-btn").style.backgroundImage = "url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90db49863f26a04.png')";
			document.querySelector("#settings-btn").style.backgroundColor = "gray";
		document.querySelector("#modmenu").style.height = "fit-content";
		if (document.querySelector(".WizSkin")){
			document.querySelector(".WizSkin").remove();
		}


	});

	function setupEmojiSettings(){
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
	restoreEmojiBindsBtn.onclick = ()=>{


		var emojiBindBtns = document.querySelector("#keys").querySelectorAll("button");
		for (let i = 0; i<emojiBindBtns.length; i++){
			if (localStorage.getItem(emojiBindBtns[i].className)){
				localStorage.removeItem(emojiBindBtns[i].className);
			}
			emojiBindBtns[i].innerText = "";
		}

		var defaultEmojiBinds = ["1", "2", "c", "v", "a", "s", "d", "x", "!", "z", "@", "A", "S", "D", "Z", "X", "C", "V"];
		for (let i = 0; i<defaultEmojiBinds.length; i++){
			emojiBindBtns[i].innerText = defaultEmojiBinds[i];
		}

	}




for (let i = 0; i<emojis.length; i++){
    emojiLinks.push(emojis[i].src);
}
for (let i = 0; i<emojiLinks.length; i++){

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

for (let i = 0; i<emojiBindBtns.length; i++){
const updateButtonText = (event) => {
	if (event.key == "Backspace"){
		emojiBindBtns[i].innerText = "";
		localStorage.setItem(emojiBindBtns[i].className, " ");
		emojiBindBtns[i].removeEventListener('keyup', updateButtonText);
	} else {
    emojiBindBtns[i].innerText = event.key;
	localStorage.setItem(emojiBindBtns[i].className, emojiBindBtns[i].innerText);
    emojiBindBtns[i].removeEventListener('keyup', updateButtonText);
	}

  };

emojiBindBtns[i].onclick = ()=>{
    emojiBindBtns[i].addEventListener("keyup", updateButtonText);

};
}
		var defaultEmojiBinds = ["1", "2", "c", "v", "a", "s", "d", "x", "!", "z", "@", "A", "S", "D", "Z", "X", "C", "V"];
		for (let i = 0; i<defaultEmojiBinds.length; i++){
			/*if (localStorage.getItem(emojiBindBtns[i].className)){
				var value = localStorage.getItem(emojiBindBtns[i].className);
				if (value == " "){
					emojiBindBtns[i].innerText = "";
				}
			}
			*/
			emojiBindBtns[i].innerText = defaultEmojiBinds[i];
		}
		for (let i =0; i<emojiBindBtns.length; i++){
			if (localStorage.getItem(emojiBindBtns[i].className)){
				if (localStorage.getItem(emojiBindBtns[i].className) == " "){
					emojiBindBtns[i].innerText = "";
				} else {
				emojiBindBtns[i].innerText = localStorage.getItem(emojiBindBtns[i].className);
				}
			}
		}
	}




	var checkEmojiBindInterval = setInterval(()=>{
		if (document.querySelector("#profile-btn.fade-in")){
			clearInterval(checkEmojiBindInterval);
			setTimeout(()=>{setupEmojiSettings();}, 6000);
		}

	});





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
		logo.src = "https://yt3.ggpht.com/TNVorEJ9iTsESmUbcZXizwaZgy5jB-Ihx3z9qxfuuatrFRDhJHotz5x_X7mGIu38VBsr5bvlkg=s176-c-k-c0x00ffffff-no-rj";
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







		function randomIntFromInterval(min, max) { // min and max included
		  return Math.floor(Math.random() * (max - min + 1) + min);
		} 







		function updateSkins(){

			var freeTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

		var halloweenTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

		var ytbersTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
		var flagSkins = []; var freeSkins = []; var halloweenSkins = []; var ytberSkins = []; openSkinsList(); document.querySelector("#gallery-body").style.transform = "scale(0.02)"; document.querySelector("#gallery-body").style.height = "100%"; freeTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

		halloweenTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

		ytbersTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling; setTimeout(function(){flagSkins = document.querySelectorAll("img.circular"); freeTitle.click()}, 1000); setTimeout(function(){freeSkins = document.querySelectorAll("img.circular"); halloweenTitle.click()}, 2000); setTimeout(function(){halloweenSkins = document.querySelectorAll("img.circular"); ytbersTitle.click()}, 3000);/*yeet = document.querySelectorAll("img.circular");*/setTimeout(function(){ytberSkins = document.querySelectorAll("img.circular"); document.querySelector("#gallery-body").style.transform = "scale(1)"; document.querySelector("#gallery-body").style.height = ""; document.querySelector(".windowclosebtn").click()}, 4500);
		}


		function SkinChange() {
		//  var rndInt = randomIntFromInterval(2, 235);
			var allSkinList = ["yt", "za", "zm", "zw", "(10)", "(100)", "(103)", "(104)", "(105)", "(106)", "(107)", "(108)", "(109)", "(11)", "(110)", "(111)", "(112)", "(113)", "(114)", "(115)", "(116)", "(117)", "(118)", "(119)", "(12)", "(120)", "(121)", "(122)", "(123)", "(124)", "(125)", "(126)", "(127)", "(128)", "(129)", "(13)", "(130)", "(131)", "(132)", "(133)", "(134)", "(135)", "(136)", "(137)", "(138)", "(139)", "(14)", "(140)", "(141)", "(142)", "(143)", "(144)", "(145)", "(146)", "(147)", "(148)", "(149)", "(15)", "(150)", "(151)", "(152)", "(153)", "(154)", "(155)", "(156)", "(157)", "(158)", "(159)", "(16)", "(160)", "(161)", "(162)", "(163)", "(164)", "(165)", "(166)", "(167)", "(168)", "(169)", "(17)", "(170)", "(171)", "(172)", "(173)", "(174)", "(175)", "(176)", "(177)", "(178)", "(179)", "(18)", "(180)", "(181)", "(183)", "(184)", "(185)", "(186)", "(187)", "(188)", "(189)", "(19)", "(190)", "(191)", "(192)", "(193)", "(194)", "(195)", "(196)", "(197)", "(198)", "(199)", "(2)", "(20)", "(200)", "(201)", "(202)", "(203)", "(204)", "(205)", "(206)", "(207)", "(208)", "(209)", "(21)", "(210)", "(211)", "(212)", "(214)", "(215)", "(216)", "(217)", "(218)", "(219)", "(22)", "(220)", "(221)", "(222)", "(223)", "(224)", "(225)", "(226)", "(227)", "(228)", "(229)", "(23)", "(230)", "(231)", "(232)", "(233)", "(234)", "(235)", "(24)", "(25)", "(26)", "(27)", "(28)", "(29)", "(3)", "(30)", "(31)", "(32)", "(33)", "(34)", "(35)", "(36)", "(37)", "(38)", "(39)", "(40)", "(41)", "(42)", "(43)", "(44)", "(45)", "(46)", "(47)", "(48)", "(49)", "(5)", "(50)", "(51)", "(52)", "(53)", "(54)", "(55)", "(56)", "(57)", "(58)", "(59)", "(6)", "(60)", "(61)", "(62)", "(63)", "(64)", "(65)", "(66)", "(67)", "(68)", "(69)", "(7)", "(70)", "(71)", "(72)", "(73)", "(74)", "(75)", "(76)", "(77)", "(78)", "(79)", "(8)", "(80)", "(81)", "(82)", "(83)", "(84)", "(85)", "(86)", "(87)", "(88)", "(89)", "(9)", "(90)", "(92)", "(93)", "(94)", "(95)", "(96)", "(97)", "(98)", "(99)", "anime (1)", "anime (10)", "anime (11)", "anime (12)", "anime (13)", "anime (14)", "anime (15)", "anime (16)", "anime (17)", "anime (18)", "anime (19)", "anime (2)", "anime (20)", "anime (21)", "anime (22)", "anime (23)", "anime (24)", "anime (25)", "anime (26)", "anime (27)", "anime (28)", "anime (29)", "anime (3)", "anime (30)", "anime (31)", "anime (32)", "anime (33)", "anime (34)", "anime (35)", "anime (36)", "anime (37)", "anime (38)", "anime (39)", "anime (4)", "anime (40)", "anime (41)", "anime (42)", "anime (43)", "anime (44)", "anime (45)", "anime (46)", "anime (47)", "anime (48)", "anime (49)", "anime (5)", "anime (50)", "anime (51)", "anime (52)", "anime (53)", "anime (54)", "anime (55)", "anime (56)", "anime (57)", "anime (58)", "anime (59)", "anime (6)", "anime (60)", "anime (61)", "anime (7)", "anime (8)", "anime (9)", "hwk(1)", "hwk(10)", "hwk(11)", "hwk(12)", "hwk(13)", "hwk(14)", "hwk(15)", "hwk(16)", "hwk(17)", "hwk(18)", "hwk(19)", "hwk(2)", "hwk(20)", "hwk(21)", "hwk(22)", "hwk(23)", "hwk(24)", "hwk(25)", "hwk(26)", "hwk(3)", "hwk(4)", "hwk(5)", "hwk(6)", "hwk(7)", "hwk(8)", "hwk(9)", "1667083115975", "1667083133355", "1667083151115", "1667083177297", "1667083219340", "1667083258153", "1667083283026", "1667083312011", "1667083362728", "1667083380895", "1667083438058", "1667083459417", "1667083490052", "63467523455676", "YT(1)", "YT(10)", "YT(11)", "YT(12)", "YT(13)", "YT(14)", "YT(15)", "YT(16)", "YT(17)", "YT(18)", "YT(19)", "YT(2)", "YT(20)", "YT(21)", "YT(22)", "YT(23)", "YT(24)", "YT(25)", "YT(26)", "YT(27)", "YT(28)", "YT(29)", "YT(3)", "YT(30)", "YT(31)", "YT(32)", "YT(33)", "YT(34)", "YT(35)", "YT(36)", "YT(37)", "YT(38)", "YT(39)", "YT(4)", "YT(40)", "YT(41)", "YT(42)", "YT(43)", "YT(44)", "YT(45)", "YT(46)", "YT(47)", "YT(48)", "YT(49)", "YT(5)", "YT(50)", "YT(51)", "YT(52)", "YT(53)", "YT(54)", "YT(55)", "YT(56)", "YT(57)", "YT(58)", "YT(59)", "YT(6)", "YT(60)", "YT(7)", "YT(8)", "YT(9)"]
			var newSkinlist = ["1667083115975", "1667083133355", "1667083151115", "1667083177297", "1667083219340", "1667083258153", "1667083283026", "1667083312011", "1667083362728", "1667083380895", "1667083438058", "1667083459417", "1667083490052"]
			  var rndInt = randomIntFromInterval(0, allSkinList.length-1);
		  //changeSkin("(" + rndInt + ")");
			changeSkin(allSkinList[rndInt]);
		}

		function clickEmoji(emojiElem){
				emojiElem.firstChild.click()
			}




		function respawn() {
			if (window.settings.gamemode == "Dual[NoLogin]"){

			} else {
					play();
			}

		   // take this away after done with editing script
		}


		  function loading(){
				document.addEventListener("keypress",function(event){
					if (document.querySelector("button#press4Btn.on")) {
						 if (event.key == "4") {
							 if (document.querySelector("#chat_textbox").value == ""){
							 var overlayStyle = document.querySelector("#overlays").style;
							// var swalStyle = document.querySelector(".swal-modal").style;
							// var secondSwalStyle = document.querySelector(".swal-overlay")[0].style;

							document.querySelector("#overlays").style.display = "none";
							   document.getElementById("leaveBtn").click();
							   document.querySelector(".swal-button--confirm").click();

							//   document.querySelector(".swal-modal").hide();
							   //document.getElementsByClassName(".swal-overlay")[0].hide();
							  document.querySelector("#play-btn").click();
							 setTimeout(()=>{document.querySelector(".swal-button--cancel").click();}, 50);
							 setTimeout(()=>{document.querySelector("#overlays").style = overlayStyle;}, 1000);
							  //setTimeout(function(){document.querySelector("#overlays").style = overlayStyle; document.querySelector(".swal-modal").style = swalStyle; document.querySelector(".swal-overlay")[0].style = secondSwalStyle}, 1000);
							 }
						 }
					}

					if (document.querySelector("button#emojiBindings.on")){
						if (document.querySelector("#keys").querySelector("button")){
							var emojis = document.querySelector(".react-horizontal-scrolling-menu--scroll-container").querySelectorAll("img");

							var emojiBindBtns = document.querySelector("#keys").querySelectorAll("button");
							var setEmojiBinds = [];
							for (let i = 0; i<emojiBindBtns.length; i++){
								if (emojiBindBtns[i].innerText){
									setEmojiBinds.push(emojiBindBtns[i]);
								}
							}
							var emojiLinks = [];
							for (let i = 0; i<emojis.length; i++){
								emojiLinks.push(emojis[i].src);
							}

							for (let i = 0; i<setEmojiBinds.length; i++){
							if (emojiBindBtns) {
								if (setEmojiBinds[i].innerText){
								var daLink = emojiLinks[setEmojiBinds[i].className.split("Bind")[1]].replace("https://www.snay.io", ".");

								if (event.key == setEmojiBinds[i].innerText){
									if (document.querySelector("#chat_textbox").value == ""){
										document.querySelector("img[src='"+ daLink + "']").click()
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
setInterval(()=>{
	if (document.querySelector("#soundEffectsBtn.on")){



    if (window.stats.virusesEaten > oldVirusEaten){

            popAudio.pause();
        popAudio.currentTime = 0;
        popAudio.play();



    } else {
         if (window.stats.cellsEaten > oldCellsEaten) {
        eatAudio.pause();
        eatAudio.currentTime = 0;
        eatAudio.play();
    } else {
               if (window.stats.mycells > oldSplits && window.stats.mycells != 0 && oldSplits != 0){
        if (window.stats.score > 15000){
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
        if (window.stats.score > 15000){
            uSuckAudio.play();
        } else {
            deathAudio.play();

        }
	}

    }

});
			}

	var emojiInterval = setInterval(()=>{

var emoteCards = document.querySelectorAll(".react-horizontal-scrolling-menu--item");
for (let i = 0; i<emoteCards.length; i++){
    emoteCards[i].addEventListener("click", (click)=>{
        if (click){
            localStorage.setItem("lastEmote", emoteCards[i].outerHTML.split("\"")[3]);
        }
    })
}
		if (document.querySelector("button#spamLastEmoteBtn.on")){
             document.querySelector("div[data-key='" + localStorage.getItem("lastEmote") + "']").firstChild.firstChild.click();
		}


		var emojiIndex;
		var emojis = document.querySelectorAll(".card");
		if (document.querySelector("button#spamEmojiBtn.on")){
			emojiIndex = randomIntFromInterval(0, emojis.length-1);
			clickEmoji(emojis[emojiIndex]);
		}

					}, 800);

		setInterval(()=> {






			if (window.isbot == true) {
				signOut();
			} else {
				if (window.isbot == false){
					window.focus();
				}
			}

		  if (document.querySelector("button#respawnButton.on")){
			if (stats.mycells == 0) {
				play();
		}

		}


		  }, 400);
				//window.cells.byId ---> and open the options and it will say the coordinates of the player
				// cells.list[0] ---> a big list of all the cells. Do a for loop and do cells.list[i].player
						// and if it is a player, then put it somewhere to check which one is me.
var modBtns = document.querySelector("#modmenu").querySelectorAll("button");
for (let i = 0; i<modBtns.length; i++){

modBtns[i].addEventListener("mouseenter", ()=>{
    modBtns[i].style.transform = "scale(1.1)";
})
modBtns[i].addEventListener("mouseleave", ()=>{
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
setInterval(()=>{
	var lvlSkins = document.querySelector("label[for='Level']").nextElementSibling.firstChild.children;
function getSkinLvl(skin){
    return skin.firstChild.nextElementSibling.innerText
}
for (let i = 0; i<lvlSkins.length; i++){
    if (parseInt(getSkinLvl(lvlSkins[i]))>parseInt(document.querySelector("#account-lvl").innerText)){
        lvlSkins[i].style.filter = "grayscale(100%) brightness(40%)"
    } else {
	 lvlSkins[i].style.filter = "";
    }
}

}, 1000);
setInterval(()=>{
    if (document.querySelector("#modmenubtn").checkVisibility() == false && document.querySelector("#modmenu").checkVisibility() == false){
        document.querySelector("#modmenubtn").hidden = "";
    }
}, 1000);
/*

function removeBoughtPremiumSkins(){
var premiumSkins = document.querySelector("label[for='Premium']").nextElementSibling.firstChild.querySelectorAll("img");

function checkBought(premiumSkin){
    var skinBought = false;

         if (premiumSkin.parentElement.nextElementSibling.innerText == ""){
        skinBought = true;
        }



    return skinBought;
}


for (let i = 0; i<premiumSkins.length; i++){
    if (checkBought(premiumSkins[i])){
        premiumSkins[i].parentElement.remove();

    } else {
        continue;
    }
}
}
setInterval(()=>{
    if (document.querySelector("label[for='Premium']")){
        removeBoughtPremiumSkins();
    }
})
*/

setInterval(()=>{
    if (window.settings.gamemode == "Selfeed"){
	    	currentSplits.innerText = window.stats.mycells + "/64";
    } else {
	    	 currentSplits.innerText = window.stats.mycells + "/16";
    }



});


		  loading();
