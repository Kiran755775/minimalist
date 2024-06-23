function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "flex"; // Show the popup
    } else {
        console.error("Popup element not found:", popupId);
    }
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none"; // Hide the popup
    } else {
        console.error("Popup element not found:", popupId);
    }
}