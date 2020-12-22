function initEvents() {
    document.getElementById("selectFont").childNodes.forEach(option => {
        if (option.id != null)
            document.getElementById(option.id).addEventListener("click", changedEnable);});
}