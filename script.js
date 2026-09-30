/* =========================================================
   YOUTUBE STREAMING
   JAVASCRIPT — VERSION 2026
   MENU + RECHERCHE + CATEGORIES + LANGUES + TAWK
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const sidebar =
        document.getElementById("sidebar");


    if (menuButton && sidebar) {

        menuButton.addEventListener("click", () => {

            sidebar.classList.toggle("mobile-open");

        });


        const sidebarLinks =
            sidebar.querySelectorAll("a");


        sidebarLinks.forEach((link) => {

            link.addEventListener("click", () => {

                if (window.innerWidth <= 700) {

                    sidebar.classList.remove(
                        "mobile-open"
                    );

                }

            });

        });

    }



    /* =====================================================
       TRADUCTIONS
    ===================================================== */

    const translations = {

        /* =================================================
           FRANÇAIS
        ================================================= */

        fr: {

            language: "FR FR",

            htmlLang: "fr",

            searchPlaceholder:
                "Rechercher de l'aide, des guides ou des solutions...",

            searchAlert:
                "Recherche : ",

            menuLabel:
                "Ouvrir le menu",

            voiceLabel:
                "Recherche vocale",


            sidebar: {

                start: "Accueil",

                explore: "Explorer",

                help: "Centre d'aide",

                categories: "Catégories",

                account: "Compte & Sécurité",

                monetization: "Monétisation",

                guidelines: "Règles",

                chat: "Chat en direct",

                privacy: "Politique de confidentialité",

                terms: "Conditions d'utilisation"

            },


            categories: {

                all: "Tous",

                cleaning: "Nettoyage du compte",

                copyright: "Droits d'auteur",

                channel: "Paramètres de la chaîne",

                security: "Sécurité",

                studio: "YouTube Studio"

            },


            hero: {

                badge: "YOUTUBE STREAMING 2026",

                title:
                    "Comment pouvons-nous vous aider aujourd'hui ?",

                text:
                    "Obtenez rapidement de l'aide pour votre compte YouTube, gérez les paramètres de votre chaîne et résolvez vos problèmes techniques directement avec notre équipe.",

                chat:
                    "Démarrer le chat en direct",

                guides:
                    "Lire les guides",

                fast:
                    "Réponses rapides",

                secure:
                    "100 % sécurisé",

                support:
                    "Assistance 24/7"

            },


            guides: {

                label:
                    "ARTICLES D'AIDE",

                title:
                    "Guides populaires",

                all:
                    "Voir tout",

                accountBadge:
                    "COMPTE",

                accountTitle:
                    "Supprimer ou désactiver une chaîne",

                accountInfo:
                    "Comment supprimer définitivement votre chaîne YouTube",

                accountMeta:
                    "YouTube Streaming • Guide étape par étape",

                accountUpdate:
                    "Mis à jour pour 2026",

                securityBadge:
                    "SÉCURITÉ",

                securityTitle:
                    "Récupérer un compte piraté",

                securityInfo:
                    "Protégez et récupérez rapidement votre profil",

                securityMeta:
                    "YouTube Streaming • Sécurité",

                securityUpdate:
                    "Informations importantes",

                copyrightBadge:
                    "DROITS D'AUTEUR",

                copyrightTitle:
                    "Gérer les réclamations de droits d'auteur",

                copyrightInfo:
                    "Que faire en cas d'avertissement pour droits d'auteur ?",

                copyrightMeta:
                    "YouTube Streaming • Règles",

                copyrightUpdate:
                    "Guide",

                reading3:
                    "3 min de lecture",

                reading4:
                    "4 min de lecture",

                reading5:
                    "5 min de lecture"

            },


            help: {

                title:
                    "Besoin d'une assistance personnalisée ?",

                text:
                    "Nos conseillers sont disponibles pour répondre à vos questions en temps réel par chat.",

                button:
                    "Contactez-nous maintenant"

            },


            information: {

                privacyTitle:
                    "Confidentialité et sécurité des données",

                privacyText:
                    "Nous vous aidons à effacer votre historique de recherche, à gérer vos paramètres de confidentialité et à protéger vos informations personnelles sur la plateforme.",

                optimizationTitle:
                    "Optimisation de la chaîne",

                optimizationText:
                    "Découvrez comment modifier le nom de votre chaîne, personnaliser votre URL et organiser votre contenu afin d'offrir la meilleure expérience à vos visiteurs."

            },


            footer: {

                privacy:
                    "Politique de confidentialité",

                terms:
                    "Conditions d'utilisation"

            },


            tawkLoading:
                "Le chat en direct se charge, veuillez patienter un instant..."

        },


        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            language: "GB EN",

            htmlLang: "en",

            searchPlaceholder:
                "Search for help, guides or solutions...",

            searchAlert:
                "Search: ",

            menuLabel:
                "Open menu",

            voiceLabel:
                "Voice search",


            sidebar: {

                start: "Home",

                explore: "Explore",

                help: "Help Center",

                categories: "Categories",

                account: "Account & Security",

                monetization: "Monetization",

                guidelines: "Guidelines",

                chat: "Live chat",

                privacy: "Privacy Policy",

                terms: "Terms of Service"

            },


            categories: {

                all: "All",

                cleaning: "Account Cleanup",

                copyright: "Copyright",

                channel: "Channel Settings",

                security: "Security",

                studio: "YouTube Studio"

            },


            hero: {

                badge: "YOUTUBE STREAMING 2026",

                title:
                    "How can we help you today?",

                text:
                    "Get quick help with your YouTube account, manage your channel settings and solve technical problems directly with our team.",

                chat:
                    "Start live chat",

                guides:
                    "Read guides",

                fast:
                    "Fast answers",

                secure:
                    "100% Secure",

                support:
                    "24/7 Support"

            },


            guides: {

                label:
                    "HELP ARTICLES",

                title:
                    "Popular guides",

                all:
                    "View all",

                accountBadge:
                    "ACCOUNT",

                accountTitle:
                    "Delete or deactivate a channel",

                accountInfo:
                    "How to permanently delete your YouTube channel",

                accountMeta:
                    "YouTube Streaming • Step-by-step",

                accountUpdate:
                    "Updated for 2026",

                securityBadge:
                    "SECURITY",

                securityTitle:
                    "Recover a hacked account",

                securityInfo:
                    "Protect and recover your profile quickly",

                securityMeta:
                    "YouTube Streaming • Security",

                securityUpdate:
                    "Important information",

                copyrightBadge:
                    "COPYRIGHT",

                copyrightTitle:
                    "Manage copyright claims",

                copyrightInfo:
                    "What to do if you receive a copyright warning",

                copyrightMeta:
                    "YouTube Streaming • Guidelines",

                copyrightUpdate:
                    "Guide",

                reading3:
                    "3 min read",

                reading4:
                    "4 min read",

                reading5:
                    "5 min read"

            },


            help: {

                title:
                    "Need personal assistance?",

                text:
                    "Our advisors are available to answer your questions in real time via chat.",

                button:
                    "Contact us now"

            },


            information: {

                privacyTitle:
                    "Privacy and Data Security",

                privacyText:
                    "We can help you clear your search history, manage your privacy settings and keep your personal information protected on the platform.",

                optimizationTitle:
                    "Channel Optimization",

                optimizationText:
                    "Learn how to change your channel name, customize your URL and organize your content to provide the best experience for your visitors."

            },


            footer: {

                privacy:
                    "Privacy Policy",

                terms:
                    "Terms of Service"

            },


            tawkLoading:
                "Live chat is loading, please wait a moment..."

        },


        /* =================================================
           SUÉDOIS
        ================================================= */

        sv: {

            language: "SE SV",

            htmlLang: "sv",

            searchPlaceholder:
                "Sök efter hjälp, guider eller lösningar...",

            searchAlert:
                "Sökning: ",

            menuLabel:
                "Öppna meny",

            voiceLabel:
                "Röstsökning",


            sidebar: {

                start: "Start",

                explore: "Utforska",

                help: "Hjälpcenter",

                categories: "Kategorier",

                account: "Konto & Säkerhet",

                monetization: "Monetarisering",

                guidelines: "Riktlinjer",

                chat: "Direktchatt",

                privacy: "Integritetspolicy",

                terms: "Användarvillkor"

            },


            categories: {

                all: "Alla",

                cleaning: "Kontorensning",

                copyright: "Upphovsrätt",

                channel: "Kanalinställningar",

                security: "Säkerhet",

                studio: "YouTube Studio"

            },


            hero: {

                badge: "YOUTUBE STREAMING 2026",

                title:
                    "Hur kan vi hjälpa dig idag?",

                text:
                    "Få snabb hjälp med ditt YouTube-konto, hantera dina kanalinställningar och lös tekniska problem direkt med vårt team.",

                chat:
                    "Starta livechatten",

                guides:
                    "Läs guider",

                fast:
                    "Snabba svar",

                secure:
                    "100% Säkert",

                support:
                    "Support 24/7"

            },


            guides: {

                label:
                    "HJÄLPARTIKLAR",

                title:
                    "Populära guider",

                all:
                    "Visa alla",

                accountBadge:
                    "KONTO",

                accountTitle:
                    "Radera eller inaktivera kanal",

                accountInfo:
                    "Hur du tar bort din YouTube-kanal permanent",

                accountMeta:
                    "YouTube Streaming • Steg-för-steg",

                accountUpdate:
                    "Uppdaterad för 2026",

                securityBadge:
                    "SÄKERHET",

                securityTitle:
                    "Återställ hackat konto",

                securityInfo:
                    "Skydda och återställ din profil snabbt",

                securityMeta:
                    "YouTube Streaming • Säkerhet",

                securityUpdate:
                    "Viktig information",

                copyrightBadge:
                    "UPPHOVSRÄTT",

                copyrightTitle:
                    "Hantera Copyright-anspråk",

                copyrightInfo:
                    "Vad gör du om du får en upphovsrättsvarning?",

                copyrightMeta:
                    "YouTube Streaming • Riktlinjer",

                copyrightUpdate:
                    "Guide",

                reading3:
                    "3 min läsning",

                reading4:
                    "4 min läsning",

                reading5:
                    "5 min läsning"

            },


            help: {

                title:
                    "Behöver du personlig assistans?",

                text:
                    "Våra rådgivare finns tillgängliga för att svara på dina frågor i realtid via chatt.",

                button:
                    "Kontakta oss nu"

            },


            information: {

                privacyTitle:
                    "Integritet och Datasäkerhet",

                privacyText:
                    "Vi hjälper dig att rensa din sökhistorik, hantera dina sekretessinställningar och se till att din personliga information förblir skyddad på plattformen.",

                optimizationTitle:
                    "Kanaloptimering",

                optimizationText:
                    "Lär dig hur du ändrar ditt kanalnamn, anpassar din URL och organiserar ditt innehåll för att ge dina besökare den bästa upplevelsen."

            },


            footer: {

                privacy:
                    "Integritetspolicy",

                terms:
                    "Användarvillkor"

            },


            tawkLoading:
                "Livechatten laddas, vänligen vänta ett ögonblick..."

        },


        /* =================================================
           NORVÉGIEN
        ================================================= */

        no: {

            language: "NO NO",

            htmlLang: "no",

            searchPlaceholder:
                "Søk etter hjelp, veiledninger eller løsninger...",

            searchAlert:
                "Søk: ",

            menuLabel:
                "Åpne meny",

            voiceLabel:
                "Stemmesøk",


            sidebar: {

                start: "Start",

                explore: "Utforsk",

                help: "Hjelpesenter",

                categories: "Kategorier",

                account: "Konto og sikkerhet",

                monetization: "Inntektsgenerering",

                guidelines: "Retningslinjer",

                chat: "Direktechat",

                privacy: "Personvernerklæring",

                terms: "Vilkår for bruk"

            },


            categories: {

                all: "Alle",

                cleaning: "Kontorydding",

                copyright: "Opphavsrett",

                channel: "Kanalinnstillinger",

                security: "Sikkerhet",

                studio: "YouTube Studio"

            },


            hero: {

                badge: "YOUTUBE STREAMING 2026",

                title:
                    "Hvordan kan vi hjelpe deg i dag?",

                text:
                    "Få rask hjelp med YouTube-kontoen din, administrer kanalinnstillingene dine og løs tekniske problemer direkte med teamet vårt.",

                chat:
                    "Start livechat",

                guides:
                    "Les veiledninger",

                fast:
                    "Raske svar",

                secure:
                    "100 % sikkert",

                support:
                    "Support 24/7"

            },


            guides: {

                label:
                    "HJELPEARTIKLER",

                title:
                    "Populære veiledninger",

                all:
                    "Se alle",

                accountBadge:
                    "KONTO",

                accountTitle:
                    "Slett eller deaktiver en kanal",

                accountInfo:
                    "Slik sletter du YouTube-kanalen din permanent",

                accountMeta:
                    "YouTube Streaming • Steg for steg",

                accountUpdate:
                    "Oppdatert for 2026",

                securityBadge:
                    "SIKKERHET",

                securityTitle:
                    "Gjenopprett hacket konto",

                securityInfo:
                    "Beskytt og gjenopprett profilen din raskt",

                securityMeta:
                    "YouTube Streaming • Sikkerhet",

                securityUpdate:
                    "Viktig informasjon",

                copyrightBadge:
                    "OPPHAVSRETT",

                copyrightTitle:
                    "Administrer opphavsrettskrav",

                copyrightInfo:
                    "Hva gjør du hvis du får et opphavsrettsvarsel?",

                copyrightMeta:
                    "YouTube Streaming • Retningslinjer",

                copyrightUpdate:
                    "Veiledning",

                reading3:
                    "3 min lesing",

                reading4:
                    "4 min lesing",

                reading5:
                    "5 min lesing"

            },


            help: {

                title:
                    "Trenger du personlig hjelp?",

                text:
                    "Våre rådgivere er tilgjengelige for å svare på spørsmålene dine i sanntid via chat.",

                button:
                    "Kontakt oss nå"

            },


            information: {

                privacyTitle:
                    "Personvern og datasikkerhet",

                privacyText:
                    "Vi hjelper deg med å slette søkehistorikken din, administrere personverninnstillingene dine og sørge for at personopplysningene dine er beskyttet på plattformen.",

                optimizationTitle:
                    "Kanaloptimalisering",

                optimizationText:
                    "Lær hvordan du endrer kanalnavnet ditt, tilpasser URL-en din og organiserer innholdet ditt for å gi besøkende den beste opplevelsen."

            },


            footer: {

                privacy:
                    "Personvernerklæring",

                terms:
                    "Vilkår for bruk"

            },


            tawkLoading:
                "Direktechatten lastes inn, vennligst vent et øyeblikk..."

        }

    };



    /* =====================================================
       SÉLECTEURS
       Ces sélecteurs correspondent à TON index.html
    ===================================================== */

    const languageSelector =
        document.querySelector(".language-selector");

    const languageButton =
        document.querySelector(".language-button");

    const languageMenu =
        document.querySelector(".language-menu");


    /* =====================================================
       OUVERTURE / FERMETURE DU MENU LANGUE
    ===================================================== */

    if (
        languageButton &&
        languageMenu
    ) {

        languageButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                const isOpen =
                    languageMenu.style.display === "flex";

                languageMenu.style.display =
                    isOpen ? "none" : "flex";

            }
        );


        document.addEventListener(
            "click",
            (event) => {

                if (
                    languageSelector &&
                    !languageSelector.contains(event.target)
                ) {

                    languageMenu.style.display =
                        "none";

                }

            }
        );

    }



    /* =====================================================
       FONCTION UTILITAIRE
    ===================================================== */

    function setText(selector, text) {

        const element =
            document.querySelector(selector);

        if (element) {

            element.textContent = text;

        }

    }


    function setTextAll(selector, values) {

        const elements =
            document.querySelectorAll(selector);

        elements.forEach((element, index) => {

            if (values[index] !== undefined) {

                element.textContent =
                    values[index];

            }

        });

    }



    /* =====================================================
       APPLICATION DE LA LANGUE
    ===================================================== */

    function applyLanguage(language) {

        const t =
            translations[language] ||
            translations.sv;


        /* ---------------------------------------------
           HTML LANG
        --------------------------------------------- */

        document.documentElement.lang =
            t.htmlLang;


        /* ---------------------------------------------
           BOUTON LANGUE
        --------------------------------------------- */

        if (languageButton) {

            languageButton.innerHTML =
                `${t.language} <span>⌄</span>`;

        }


        /* ---------------------------------------------
           MENU MOBILE
        --------------------------------------------- */

        if (menuButton) {

            menuButton.setAttribute(
                "aria-label",
                t.menuLabel
            );

        }


        /* ---------------------------------------------
           RECHERCHE
        --------------------------------------------- */

        const searchInput =
            document.querySelector(
                ".search-box input"
            );

        if (searchInput) {

            searchInput.placeholder =
                t.searchPlaceholder;

            searchInput.setAttribute(
                "aria-label",
                language === "fr"
                    ? "Rechercher"
                    : language === "en"
                        ? "Search"
                        : language === "no"
                            ? "Søk"
                            : "Sök"
            );

        }


        const voiceButton =
            document.querySelector(".voice-button");

        if (voiceButton) {

            voiceButton.setAttribute(
                "aria-label",
                t.voiceLabel
            );

        }


        /* ---------------------------------------------
           SIDEBAR
        --------------------------------------------- */

        setText(
            '.sidebar-link[href="#"] span:not(.sidebar-icon)',
            t.sidebar.start
        );


        const sidebarText =
            document.querySelectorAll(
                ".sidebar-link span:not(.sidebar-icon)"
            );


        if (sidebarText.length >= 8) {

            sidebarText[0].textContent =
                t.sidebar.start;

            sidebarText[1].textContent =
                t.sidebar.explore;

            sidebarText[2].textContent =
                t.sidebar.help;

            sidebarText[3].textContent =
                t.sidebar.account;

            sidebarText[4].textContent =
                t.sidebar.monetization;

            sidebarText[5].textContent =
                t.sidebar.guidelines;

            sidebarText[6].textContent =
                t.sidebar.chat;

        }


        const sidebarTitle =
            document.querySelector(".sidebar-title");

        if (sidebarTitle) {

            sidebarTitle.textContent =
                t.sidebar.categories;

        }


        const sidebarFooterLinks =
            document.querySelectorAll(
                ".sidebar-footer a"
            );


        if (sidebarFooterLinks.length >= 2) {

            sidebarFooterLinks[0].textContent =
                t.sidebar.privacy;

            sidebarFooterLinks[1].textContent =
                t.sidebar.terms;

        }


        /* ---------------------------------------------
           CATÉGORIES
        --------------------------------------------- */

        const categories =
            document.querySelectorAll(
                ".category"
            );


        const categoryTexts = [

            t.categories.all,

            t.categories.cleaning,

            t.categories.copyright,

            t.categories.channel,

            t.categories.security,

            t.categories.studio

        ];


        categories.forEach(
            (category, index) => {

                if (
                    categoryTexts[index] !==
                    undefined
                ) {

                    category.textContent =
                        categoryTexts[index];

                }

            }
        );


        /* ---------------------------------------------
           HERO
        --------------------------------------------- */

        setText(
            ".hero-badge",
            t.hero.badge
        );


        setText(
            ".hero h1",
            t.hero.title
        );


        setText(
            ".hero p",
            t.hero.text
        );


        const heroButtons =
            document.querySelectorAll(
                ".hero-buttons .primary-button, " +
                ".hero-buttons .secondary-button"
            );


        if (heroButtons.length >= 2) {

            heroButtons[0].innerHTML =
                `<i class="fa-solid fa-comments"></i>
                 ${t.hero.chat}`;

            heroButtons[1].innerHTML =
                `<i class="fa-solid fa-book-open"></i>
                 ${t.hero.guides}`;

        }


        /* ---------------------------------------------
           CARTES FLOTTANTES HERO
        --------------------------------------------- */

        const cardOne =
            document.querySelector(".card-one");

        const cardTwo =
            document.querySelector(".card-two");

        const cardThree =
            document.querySelector(".card-three");


        if (cardOne) {

            cardOne.innerHTML =
                `<i class="fa-solid fa-circle-check"></i>
                 ${t.hero.fast}`;

        }


        if (cardTwo) {

            cardTwo.innerHTML =
                `<i class="fa-solid fa-shield"></i>
                 ${t.hero.secure}`;

        }


        if (cardThree) {

            cardThree.innerHTML =
                `<i class="fa-solid fa-headset"></i>
                 ${t.hero.support}`;

        }


        /* ---------------------------------------------
           SECTION GUIDES
        --------------------------------------------- */

        setText(
            ".section-label",
            t.guides.label
        );


        setText(
            ".section-header h2",
            t.guides.title
        );


        setText(
            ".see-all",
            t.guides.all
        );


        /* ---------------------------------------------
           CARTE 1
        --------------------------------------------- */

        const videoCards =
            document.querySelectorAll(
                ".video-card"
            );


        if (videoCards.length >= 3) {

            /* CARTE 1 */

            const card1 =
                videoCards[0];

            const badge1 =
                card1.querySelector(
                    ".thumbnail-badge"
                );

            const title1 =
                card1.querySelector(
                    ".thumbnail strong"
                );

            const info1 =
                card1.querySelector(
                    ".video-info h3"
                );

            const meta1 =
                card1.querySelector(
                    ".video-info p"
                );

            const update1 =
                card1.querySelector(
                    ".video-info span"
                );

            const duration1 =
                card1.querySelector(
                    ".duration"
                );


            if (badge1)
                badge1.textContent =
                    t.guides.accountBadge;

            if (title1)
                title1.textContent =
                    t.guides.accountTitle;

            if (info1)
                info1.textContent =
                    t.guides.accountInfo;

            if (meta1)
                meta1.textContent =
                    t.guides.accountMeta;

            if (update1)
                update1.textContent =
                    t.guides.accountUpdate;

            if (duration1)
                duration1.textContent =
                    t.guides.reading3;


            /* -----------------------------------------
               CARTE 2
            ----------------------------------------- */

            const card2 =
                videoCards[1];

            const badge2 =
                card2.querySelector(
                    ".thumbnail-badge"
                );

            const title2 =
                card2.querySelector(
                    ".thumbnail strong"
                );

            const info2 =
                card2.querySelector(
                    ".video-info h3"
                );

            const meta2 =
                card2.querySelector(
                    ".video-info p"
                );

            const update2 =
                card2.querySelector(
                    ".video-info span"
                );

            const duration2 =
                card2.querySelector(
                    ".duration"
                );


            if (badge2)
                badge2.textContent =
                    t.guides.securityBadge;

            if (title2)
                title2.textContent =
                    t.guides.securityTitle;

            if (info2)
                info2.textContent =
                    t.guides.securityInfo;

            if (meta2)
                meta2.textContent =
                    t.guides.securityMeta;

            if (update2)
                update2.textContent =
                    t.guides.securityUpdate;

            if (duration2)
                duration2.textContent =
                    t.guides.reading5;


            /* -----------------------------------------
               CARTE 3
            ----------------------------------------- */

            const card3 =
                videoCards[2];

            const badge3 =
                card3.querySelector(
                    ".thumbnail-badge"
                );

            const title3 =
                card3.querySelector(
                    ".thumbnail strong"
                );

            const info3 =
                card3.querySelector(
                    ".video-info h3"
                );

            const meta3 =
                card3.querySelector(
                    ".video-info p"
                );

            const update3 =
                card3.querySelector(
                    ".video-info span"
                );

            const duration3 =
                card3.querySelector(
                    ".duration"
                );


            if (badge3)
                badge3.textContent =
                    t.guides.copyrightBadge;

            if (title3)
                title3.textContent =
                    t.guides.copyrightTitle;

            if (info3)
                info3.textContent =
                    t.guides.copyrightInfo;

            if (meta3)
                meta3.textContent =
                    t.guides.copyrightMeta;

            if (update3)
                update3.textContent =
                    t.guides.copyrightUpdate;

            if (duration3)
                duration3.textContent =
                    t.guides.reading4;

        }


        /* ---------------------------------------------
           QUICK HELP
        --------------------------------------------- */

        setText(
            ".quick-help h2",
            t.help.title
        );


        setText(
            ".quick-help p",
            t.help.text
        );


        const quickHelpButton =
            document.querySelector(
                ".quick-help .primary-button"
            );


        if (quickHelpButton) {

            quickHelpButton.innerHTML =
                `<i class="fa-solid fa-paper-plane"></i>
                 ${t.help.button}`;

        }


        /* ---------------------------------------------
           INFORMATIONS
        --------------------------------------------- */

        const informationSections =
            document.querySelectorAll(
                ".information-section"
            );


        if (informationSections.length >= 2) {

            const info1 =
                informationSections[0];

            const info2 =
                informationSections[1];


            const info1Title =
                info1.querySelector("h2");

            const info1Text =
                info1.querySelector("p");


            const info2Title =
                info2.querySelector("h2");

            const info2Text =
                info2.querySelector("p");


            if (info1Title)
                info1Title.textContent =
                    t.information.privacyTitle;

            if (info1Text)
                info1Text.textContent =
                    t.information.privacyText;


            if (info2Title)
                info2Title.textContent =
                    t.information.optimizationTitle;

            if (info2Text)
                info2Text.textContent =
                    t.information.optimizationText;

        }


        /* ---------------------------------------------
           FOOTER MOBILE
        --------------------------------------------- */

        const mobileFooterLinks =
            document.querySelectorAll(
                ".mobile-footer-links a"
            );


        if (mobileFooterLinks.length >= 2) {

            mobileFooterLinks[0].textContent =
                t.footer.privacy;

            mobileFooterLinks[1].textContent =
                t.footer.terms;

        }


        /* ---------------------------------------------
           BOUTONS SUPPORT
        --------------------------------------------- */

        const supportButton =
            document.querySelector(
                ".create-button.contact-button"
            );


        if (supportButton) {

            const supportText =
                supportButton.querySelector("span");


            if (supportText) {

                supportText.textContent =
                    language === "fr"
                        ? "Support"
                        : language === "en"
                            ? "Support"
                            : language === "no"
                                ? "Support"
                                : "Support";

            }

        }


        /* ---------------------------------------------
           MÉMORISATION
        --------------------------------------------- */

        try {

            localStorage.setItem(
                "youtubeStreamingLanguage",
                language
            );

        } catch (error) {

            console.warn(
                "Impossible de mémoriser la langue.",
                error
            );

        }

    }



    /* =====================================================
       CLIC SUR LES LANGUES
    ===================================================== */

    if (languageMenu) {

        const languageButtons =
            languageMenu.querySelectorAll(
                "button"
            );


        languageButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    (event) => {

                        event.preventDefault();
                        event.stopPropagation();


                        const languageText =
                            button.textContent
                                .trim()
                                .toUpperCase();


                        let language = "sv";


                        if (
                            languageText.includes("FR")
                        ) {

                            language = "fr";

                        }

                        else if (
                            languageText.includes("GB")
                        ) {

                            language = "en";

                        }

                        else if (
                            languageText.includes("NO")
                        ) {

                            language = "no";

                        }

                        else if (
                            languageText.includes("SE")
                        ) {

                            language = "sv";

                        }


                        applyLanguage(language);


                        languageMenu.style.display =
                            "none";

                    }
                );

            }
        );

    }



    /* =====================================================
       RESTAURER LA LANGUE SAUVEGARDÉE
    ===================================================== */

    let savedLanguage = "sv";


    try {

        const storedLanguage =
            localStorage.getItem(
                "youtubeStreamingLanguage"
            );


        if (
            storedLanguage &&
            translations[storedLanguage]
        ) {

            savedLanguage =
                storedLanguage;

        }

    } catch (error) {

        console.warn(
            "Impossible de récupérer la langue.",
            error
        );

    }


    applyLanguage(savedLanguage);



    /* =====================================================
       FORMULAIRE DE RECHERCHE
    ===================================================== */

    const searchForm =
        document.querySelector(".search-box");

    const searchInput =
        document.querySelector(
            ".search-box input"
        );


    if (
        searchForm &&
        searchInput
    ) {

        searchForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const searchValue =
                    searchInput.value.trim();


                if (searchValue !== "") {

                    let currentLanguage =
                        "sv";


                    try {

                        currentLanguage =
                            localStorage.getItem(
                                "youtubeStreamingLanguage"
                            ) || "sv";

                    } catch (error) {

                        currentLanguage = "sv";

                    }


                    const prefix =
                        translations[currentLanguage]
                            ?.searchAlert ||
                        translations.sv.searchAlert;


                    alert(
                        prefix +
                        searchValue
                    );

                }

            }
        );

    }



    /* =====================================================
       CATEGORIES
    ===================================================== */

    const categories =
        document.querySelectorAll(
            ".category"
        );


    categories.forEach(
        (category) => {

            category.addEventListener(
                "click",
                () => {

                    categories.forEach(
                        (item) => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    category.classList.add(
                        "active"
                    );

                }
            );

        }
    );



    /* =====================================================
       TAWK.TO LIVE CHAT
    ===================================================== */

    const contactButtons =
        document.querySelectorAll(
            ".contact-button"
        );


    contactButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    if (

                        typeof Tawk_API !==
                        "undefined"

                        &&

                        typeof Tawk_API.maximize ===
                        "function"

                    ) {

                        Tawk_API.maximize();

                    }

                    else {

                        let currentLanguage =
                            "sv";


                        try {

                            currentLanguage =
                                localStorage.getItem(
                                    "youtubeStreamingLanguage"
                                ) || "sv";

                        } catch (error) {

                            currentLanguage = "sv";

                        }


                        const message =
                            translations[currentLanguage]
                                ?.tawkLoading ||
                            translations.sv.tawkLoading;


                        alert(message);

                    }

                }
            );

        }
    );



    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "YouTube Streaming — " +
        "Gränssnitt laddat."
    );

});
