window.onload = function() {
	var tabButton = document.getElementsByTagName("li");
	var content = document.getElementById("content");
	var tabContent = content.getElementsByTagName("div");
	
	for(var i=0;i<tabButton.length;i++) {
	tabButton[i].index = i;
		tabButton[i].onclick = function() {
			for(var j=0;j<tabButton.length;j++) {
				tabButton[j].classList.remove("active");
				tabContent[j].classList.remove("show");
				tabContent[j].setAttribute("class", "hidden");
			}
			this.setAttribute("class", "active");
			tabContent[this.index].classList.remove("hidden");
		}
	}
}