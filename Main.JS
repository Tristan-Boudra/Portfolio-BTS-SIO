/*Apparition des blocs de compétences*/

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            //.addIndicators()
            .addTo(controller)

        }
    }
})


/*Apparition des élements au scrool avec ScroolReveal*/

const sr = ScrollReveal({
    distance: '50px',
    duration: 2000,
    scale: 0.7,
    easing: 'cubic-bezier(.5, 0, 0, 1)',
    mobile: false /*Désactive l'animation sur les appareils mobiles*/
});


/*Apparition de l'en-tête*/
sr.reveal('.nom_prenom', {
    origin: 'top'
});

sr.reveal('.titre_bienvenue', {
    origin: 'top',
    delay: 500
});

sr.reveal('.texte_bienvenue', {
    origin: 'top',
    delay: 400
});

/*Apparition de la carte de présentation*/
sr.reveal('.cadre_presentation', {
    origin: 'bottom'
});

/*Apparition texte certification*/
sr.reveal('.presentation_certification_anssi', {
    origin: 'left'
});

/*Apparition bouton certification*/
sr.reveal('.anssi', {
    origin: 'right'
});

/*Apparition image certification*/
sr.reveal('.Img_certification', {
    origin: 'center'
});

/*Apparition titre des 3 blocs compétences*/
sr.reveal('.contenu_header', {
    origin: 'top'
});

/*Apparition premier bloc PPE*/
sr.reveal('.bloc_PPE1', {
    origin: 'top'
});

/*Apparition texte compétence*/
sr.reveal('.texte_competence', {
    origin: 'top'
});

/*Apparition veille 1*/
sr.reveal('.bloc1_veille', {
    origin: 'bottom'
});

/*Apparition veille 2*/
sr.reveal('.bloc2_veille', {
    origin: 'bottom',
    delay: 150
});

/*Apparition veille 3*/
sr.reveal('.bloc3_veille', {
    origin: 'bottom',
    delay: 300
});

/*Apparition veille 4*/
sr.reveal('.bloc4_veille', {
    origin: 'bottom',
    delay: 450
});

/*Un peu d'histoire du stage 1*/
sr.reveal('.text_JDB', {
    origin: 'top',
});

/*Apparition de la map du stage 1*/
sr.reveal('.maps_stage1', {
    origin: 'bottom',
});

/*Apparition taches realiser*/
sr.reveal('.taches_realiser', {
    origin: 'bottom',
});

/*Apparition taches realiser site web*/
sr.reveal('.site_web_JDB', {
    origin: 'left',
});

/*Apparition taches realiser quizz*/
sr.reveal('.Quizz_JDB', {
    origin: 'right',
});

/*Apparition taches realiser réseaux sociaux*/
sr.reveal('.reseau_sociaux_JDB', {
    origin: 'left',
});








/*Apparition des compétences techniques dev web & programmation*/
const srCompDevProg = ScrollReveal({
    distance: '0px',
    duration: 2000,
    scale: 0,
    easing: 'cubic-bezier(.06,1.09,.51,.92)',
    mobile: false /*Désactive l'animation sur les appareils mobiles*/
});

srCompDevProg.reveal('.devWeb', {
    origin: 'left'
});

srCompDevProg.reveal('.programmation', {
    origin: 'right',
    delay: 300
});

srCompDevProg.reveal('.progression_background_dev_web_1', {
    origin: 'left',
    delay: 500
});

srCompDevProg.reveal('.progression_background_dev_web_2', {
    origin: 'left',
    delay: 650
});

srCompDevProg.reveal('.progression_background_dev_web_3', {
    origin: 'left',
    delay: 800
});

srCompDevProg.reveal('.progression_background_dev_web_4', {
    origin: 'left',
    delay: 950
});

srCompDevProg.reveal('.progression_background_programmation_1', {
    origin: 'left',
    delay: 1100
});

srCompDevProg.reveal('.progression_background_programmation_2', {
    origin: 'left',
    delay: 1250
});

srCompDevProg.reveal('.progression_background_programmation_3', {
    origin: 'left',
    delay: 1400
});




/*Apparition des compétences techniques OS & BDD*/
const srCompOsBdd = ScrollReveal({
    distance: '0px',
    duration: 2000,
    scale: 0,
    easing: 'cubic-bezier(.06,1.09,.51,.92)',
    mobile: false /*Désactive l'animation sur les appareils mobiles*/
});

srCompOsBdd.reveal('.os', {
    origin: 'left',

});

srCompOsBdd.reveal('.bdd', {
    origin: 'right',
    delay: 300
});

srCompOsBdd.reveal('.progression_background_os_1', {
    origin: 'left',
    delay: 500
});

srCompOsBdd.reveal('.progression_background_os_2', {
    origin: 'left',
    delay: 650
});

srCompOsBdd.reveal('.progression_background_bdd_1', {
    origin: 'left',
    delay: 800
});

srCompOsBdd.reveal('.progression_background_bdd_2', {
    origin: 'left',
    delay: 950
});

srCompOsBdd.reveal('.progression_background_bdd_3', {
    origin: 'left',
    delay: 1100
});





/*Apparition des blocs de compétences*/

const srBlocComp = ScrollReveal({
    distance: '50px',
    duration: 2000,
    scale: 0.7,
    origin: 'top',
    easing: 'cubic-bezier(.5, 0, 0, 1)',
    mobile: false /*Désactive l'animation sur les appareils mobiles*/
});

srBlocComp.reveal('.bloc1', {

});

srBlocComp.reveal('.bloc2', {
    delay: 300
});


srBlocComp.reveal('.bloc3', {
    delay: 600
});




/*Apparition du contenu PPE*/

const srPPE = ScrollReveal({
    distance: '50px',
    duration: 2000,
    scale: 0.7,
    easing: 'cubic-bezier(.5, 0, 0, 1)',
    mobile: false /*Désactive l'animation sur les appareils mobiles*/
})

srPPE.reveal('.presentation_ppe', {
    origin: 'center',
    delay: 400
});

srPPE.reveal('.img_ppe', {
    origin: 'center',
    delay: 400
});

srPPE.reveal('.premPPE', {
    origin: 'left',
    delay: 650
});

srPPE.reveal('.deuxPPE', {
    origin: 'right',
    delay: 750
});



/*Apparition du contenu veille technologique*/

const srVeille = ScrollReveal({
    distance: '50px',
    duration: 2000,
    scale: 0.7,
    easing: 'cubic-bezier(.5, 0, 0, 1)',
    mobile: false /*Désactive l'animation sur les appareils mobiles*/
})

srVeille.reveal('.veilleTechno', {
    origin: 'left',
    delay: 300
});

srVeille.reveal('.presentation_veilles', {
    origin: 'right',
    delay: 300
});

srVeille.reveal('.img_monde', {
    origin: 'center',
    delay: 600
});



/*Apparition du contenu des stages*/

const srStage = ScrollReveal({
    distance: '50px',
    duration: 2000,
    scale: 0.7,
    easing: 'cubic-bezier(.5, 0, 0, 1)',
    mobile: false /*Désactive l'animation sur les appareils mobiles*/
})

srStage.reveal('.presentation_stages', {
    origin: 'bottom',
    delay: 300
});

srStage.reveal('.stagePremAnnee', {
    origin: 'left',
    delay: 600
});

srStage.reveal('.stageDeuxAnnee', {
    origin: 'right',
    delay: 700
});



/*Apparition du contenu CV*/

const srCV = ScrollReveal({
    distance: '50px',
    duration: 2000,
    scale: 0.7,
    easing: 'cubic-bezier(.5, 0, 0, 1)',
    mobile: false /*Désactive l'animation sur les appareils mobiles*/
})

srCV.reveal('.texte_cv', {
    origin: 'left',
    delay: 300
});

srCV.reveal('.cv_download', {
    origin: 'right',
    delay: 400
});

srCV.reveal('.img_cv', {
    origin: 'center',
    delay: 500
});







/*Animation du texte*/

const txtAnim = document.querySelector('.titre_bienvenue');

new Typewriter(txtAnim, {
    delay: 400,
    deleteSpeed: 80
})
.changeDelay(80)
.typeString('Bienvenue sur mon')
.pauseFor(500)
.typeString(' Portfolio')
.start()





/*Flèche pour remonter tout en haut*/

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})





