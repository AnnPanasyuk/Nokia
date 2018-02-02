function hiddenMenu(o) {
    2 == o && "none" == dropdownMenu.style.display && (dropdownMenu.style.display = "block", mdAfter.style.zIndex = "3", mdBefore.style.zIndex = "2"), 1 == o && "block" == dropdownMenu.style.display && (dropdownMenu.style.display = "none", mdAfter.style.zIndex = "2", mdBefore.style.zIndex = "3"), 0 == o && "block" == dropdownMenu.style.display && (dropdownMenu.style.display = "none", mdAfter.style.zIndex = "2", mdBefore.style.zIndex = "3")
}
var model = '<div class="form-group model"><select required type="text" id="size"><option>Nokia 6700 Silver</option><option>Nokia 6700 Bold</option><option>Nokia 6700 Gold</option></select></div>';
$("form input[name=phone]").closest(".form-group").after(model);
var dropdownMenu = document.getElementById("dropdown-menu"),
    mdBefore = document.getElementById("md-before"),
    mdAfter = document.getElementById("md-after");
window.onload = function() {
    dropdownMenu.style.display = "none", mdAfter.style.zIndex = "2", mdBefore.style.zIndex = "3"
}, screen.width < 668 && document.getElementById("distinctive-features_flex-container").classList.add("one-time");