//#region Pour les flèches
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; // selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
//#endregion

//#region Bouton menu pour ouvrir et fermer le menu vertical
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
//#endregion

//#region Permet de garder la couleur quand je clique sur un menu
const TestList = document.querySelectorAll('.icon-link');
TestList.forEach(Test =>
{
  Test.addEventListener('click', () => {
    document.querySelector('.OnClick')?.classList.remove('OnClick');
  })
})
//#endregion

$(".menu > ul > li").click(function (e)
{
    // Enlever la fenêtre active
    $(this).siblings().removeClass("close");
    // Pour mettre la fenêtre active lorsqu'on clique
    $(this).toggleClass("close");
    // Pour ouvrir les sous-menu
    $(this).find("ul").slideToggle();
    // Pour ouvrir qu'un sous-menu à la fois
    $(this).siblings().find("ul").slideUp();
    // Ferme le sous menu lorsqu'on clique sur une fenêtre d'un SM
    $(this).siblings().find("ul").find("li").removeClass("close");
});