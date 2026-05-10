
// ═══════════════════════════════════════════════
//  VOCAB DATA  (AQA 8652 v1.2 Sept 2025)
//  Tags: unit = U1..U9, tier = F or H
//  Unit→Theme: U1-3=T1, U4-6=T2, U7-9=T3
//  Unit topics:
//  U1 Identity & relationships
//  U2 Healthy living & lifestyle
//  U3 Education & work
//  U4 Free-time activities
//  U5 Customs, festivals & celebrations
//  U6 Celebrity culture
//  U7 Travel & tourism
//  U8 Media & technology
//  U9 Environment & where people live
// ═══════════════════════════════════════════════
const VOCAB = [
// ── U1 FOUNDATION ── Identity & relationships
{f:"aimer",e:"to like, love",pos:"v",u:1,t:"F"},
{f:"s'appeler",e:"to be named / called",pos:"v",u:1,t:"F"},
{f:"bavard",e:"chatty, talkative",pos:"adj",u:1,t:"F"},
{f:"beau / belle",e:"beautiful",pos:"adj",u:1,t:"F",synonym_group:"beautiful / pretty",synonym_order:1,synonym_note:"beau/belle = beautiful (strong, used for people and landscapes); joli = pretty or nice-looking (lighter, more everyday)"},
{f:"bi(sexuel)",e:"bisexual",pos:"adj",u:1,t:"F"},
{f:"blanc / blanche",e:"white",pos:"adj",u:1,t:"F"},
{f:"bleu",e:"blue",pos:"adj",u:1,t:"F"},
{f:"bouddhiste",e:"Buddhist",pos:"adj",u:1,t:"F"},
{f:"britannique",e:"British",pos:"adj",u:1,t:"F"},
{f:"brun",e:"brown",pos:"adj",u:1,t:"F"},
{f:"calme",e:"calm, quiet",pos:"adj",u:1,t:"F"},
{f:"canadien",e:"Canadian",pos:"adj",u:1,t:"F"},
{f:"célibataire",e:"single, unmarried",pos:"adj",u:1,t:"F"},
{f:"chrétien",e:"Christian",pos:"adj",u:1,t:"F"},
{f:"court",e:"short",pos:"adj",u:1,t:"F"},
{f:"drôle",e:"funny",pos:"adj",u:1,t:"F"},
{f:"égal",e:"equal",pos:"adj",u:1,t:"F"},
{f:"embêtant",e:"annoying",pos:"adj",u:1,t:"F"},
{f:"ennuyeux",e:"boring",pos:"adj",u:1,t:"F"},
{f:"espagnol",e:"Spanish",pos:"adj",u:1,t:"F"},
{f:"familial",e:"family (adj)",pos:"adj",u:1,t:"F"},
{f:"fier",e:"proud",pos:"adj",u:1,t:"F"},
{f:"fort",e:"strong, loud",pos:"adj",u:1,t:"F"},
{f:"français",e:"French",pos:"adj",u:1,t:"F"},
{f:"gay",e:"gay",pos:"adj",u:1,t:"F"},
{f:"gentil / gentille",e:"kind",pos:"adj",u:1,t:"F",faux_ami:true,faux_ami_trap:"gentle"},
{f:"grand",e:"tall, big, large",pos:"adj",u:1,t:"F"},
{f:"handicapé",e:"disabled",pos:"adj",u:1,t:"F"},
{f:"hétéro",e:"straight, heterosexual",pos:"adj",u:1,t:"F"},
{f:"heureux",e:"happy",pos:"adj",u:1,t:"F",synonym_group:"happy",synonym_order:1,synonym_note:"heureux = happy (general, deep contentment); joyeux = joyful or merry (more animated, e.g. Joyeux Noël); content = pleased or satisfied (often more temporary)"},
{f:"inquiet / inquiète",e:"worried, anxious",pos:"adj",u:1,t:"F"},
{f:"intelligent",e:"intelligent",pos:"adj",u:1,t:"F"},
{f:"jeune",e:"young",pos:"adj",u:1,t:"F"},
{f:"joli",e:"pretty, attractive",pos:"adj",u:1,t:"F",synonym_group:"beautiful / pretty",synonym_order:2,synonym_note:"beau/belle = beautiful (strong, used for people and landscapes); joli = pretty or nice-looking (lighter, more everyday)"},
{f:"juif",e:"Jewish",pos:"adj",u:1,t:"F"},
{f:"méchant",e:"nasty, naughty, mean",pos:"adj",u:1,t:"F"},
{f:"mort",e:"dead",pos:"adj",u:1,t:"F"},
{f:"musulman",e:"Muslim",pos:"adj",u:1,t:"F"},
{f:"noir",e:"black",pos:"adj",u:1,t:"F"},
{f:"non-binaire",e:"non-binary",pos:"adj",u:1,t:"F"},
{f:"paresseux",e:"lazy",pos:"adj",u:1,t:"F"},
{f:"petit",e:"short, small, little",pos:"adj",u:1,t:"F"},
{f:"queer",e:"queer",pos:"adj",u:1,t:"F"},
{f:"religieux",e:"religious",pos:"adj",u:1,t:"F"},
{f:"rouge",e:"red",pos:"adj",u:1,t:"F"},
{f:"sérieux",e:"conscientious, responsible",pos:"adj",u:1,t:"F"},
{f:"seul",e:"alone",pos:"adj",u:1,t:"F"},
{f:"spécial",e:"special",pos:"adj",u:1,t:"F"},
{f:"strict",e:"strict",pos:"adj",u:1,t:"F"},
{f:"sympathique / sympa",e:"nice, kind, friendly",pos:"adj",u:1,t:"F",faux_ami:true,faux_ami_trap:"sympathetic"},
{f:"timide",e:"timid, shy",pos:"adj",u:1,t:"F"},
{f:"traditionnel",e:"traditional",pos:"adj",u:1,t:"F"},
{f:"transgenre",e:"trans",pos:"adj",u:1,t:"F"},
{f:"travailleur / travailleuse",e:"hard-working",pos:"adj",u:1,t:"F"},
{f:"triste",e:"sad",pos:"adj",u:1,t:"F"},
{f:"vert",e:"green",pos:"adj",u:1,t:"F"},
{f:"vieux / vieille",e:"old",pos:"adj",u:1,t:"F",synonym_group:"old (age)",synonym_order:1,synonym_note:"vieux/vieille = old (general, can be pejorative for people); âgé = elderly or aged (more respectful when describing people)"},
{f:"ensemble",e:"together",pos:"adv",u:1,t:"F"},
{f:"l'aide (f)",e:"help",pos:"n",u:1,t:"F"},
{f:"la belle-mère",e:"stepmother / mother-in-law",pos:"n",u:1,t:"F"},
{f:"le beau-père",e:"stepfather / father-in-law",pos:"n",u:1,t:"F"},
{f:"la colère",e:"anger",pos:"n",u:1,t:"F"},
{f:"la communication",e:"communication",pos:"n",u:1,t:"F"},
{f:"la confiance",e:"confidence, trust",pos:"n",u:1,t:"F"},
{f:"la conversation",e:"conversation",pos:"n",u:1,t:"F"},
{f:"la copine",e:"friend (f), girlfriend",pos:"n",u:1,t:"F",synonym_group:"friend (informal)",synonym_order:3,synonym_note:"ami/amie = friend (neutral); copain/copine = friend (informal), can also mean boyfriend/girlfriend"},
{f:"le copain",e:"friend (m), boyfriend",pos:"n",u:1,t:"F",synonym_group:"friend (informal)",synonym_order:2,synonym_note:"ami/amie = friend (neutral); copain/copine = friend (informal), can also mean boyfriend/girlfriend"},
{f:"la couleur",e:"colour",pos:"n",u:1,t:"F"},
{f:"le couple",e:"couple",pos:"n",u:1,t:"F"},
{f:"le cousin",e:"cousin",pos:"n",u:1,t:"F"},
{f:"la dame",e:"lady",pos:"n",u:1,t:"F"},
{f:"la date",e:"date",pos:"n",u:1,t:"F"},
{f:"la famille",e:"family",pos:"n",u:1,t:"F"},
{f:"la femme",e:"woman, wife",pos:"n",u:1,t:"F"},
{f:"la fille",e:"girl, daughter",pos:"n",u:1,t:"F"},
{f:"le fils",e:"son",pos:"n",u:1,t:"F"},
{f:"le frère",e:"brother",pos:"n",u:1,t:"F"},
{f:"la génération",e:"generation",pos:"n",u:1,t:"F"},
{f:"l'homme (m)",e:"man",pos:"n",u:1,t:"F"},
{f:"l'identité (f)",e:"identity",pos:"n",u:1,t:"F"},
{f:"l'indépendance (f)",e:"independence",pos:"n",u:1,t:"F"},
{f:"la jeunesse",e:"youth",pos:"n",u:1,t:"F"},
{f:"la langue",e:"language, tongue",pos:"n",u:1,t:"F"},
{f:"le mari",e:"husband",pos:"n",u:1,t:"F"},
{f:"le mariage",e:"marriage, wedding",pos:"n",u:1,t:"F"},
{f:"le membre",e:"member",pos:"n",u:1,t:"F"},
{f:"la mère",e:"mother",pos:"n",u:1,t:"F"},
{f:"la mort",e:"death",pos:"n",u:1,t:"F"},
{f:"la naissance",e:"birth",pos:"n",u:1,t:"F"},
{f:"le nom",e:"name, surname",pos:"n",u:1,t:"F"},
{f:"l'oncle (m)",e:"uncle",pos:"n",u:1,t:"F"},
{f:"le PACS",e:"civil partnership",pos:"n",u:1,t:"F"},
{f:"le parent",e:"parent",pos:"n",u:1,t:"F"},
{f:"le partenaire / la partenaire",e:"partner",pos:"n",u:1,t:"F"},
{f:"le père",e:"father",pos:"n",u:1,t:"F"},
{f:"la personnalité",e:"personality",pos:"n",u:1,t:"F"},
{f:"la personne",e:"person",pos:"n",u:1,t:"F"},
{f:"le problème",e:"problem",pos:"n",u:1,t:"F"},
{f:"la religion",e:"religion",pos:"n",u:1,t:"F"},
{f:"le sentiment",e:"feeling",pos:"n",u:1,t:"F"},
{f:"la société",e:"society",pos:"n",u:1,t:"F"},
{f:"la sœur",e:"sister",pos:"n",u:1,t:"F"},
{f:"la taille",e:"size, height",pos:"n",u:1,t:"F"},
{f:"la tante",e:"aunt",pos:"n",u:1,t:"F"},
{f:"la tradition",e:"tradition",pos:"n",u:1,t:"F"},
{f:"la vie",e:"life",pos:"n",u:1,t:"F"},
{f:"le visage",e:"face",pos:"n",u:1,t:"F"},
{f:"les cheveux (mpl)",e:"hair",pos:"n",u:1,t:"F"},
{f:"les gens (mpl)",e:"people",pos:"n",u:1,t:"F"},
{f:"les yeux (mpl)",e:"eyes",pos:"n",u:1,t:"F"},
{f:"l'adulte (m/f)",e:"adult",pos:"n",u:1,t:"F"},
{f:"l'ami (m)",e:"friend (m)",pos:"n",u:1,t:"F",synonym_group:"friend (informal)",synonym_order:1,synonym_note:"ami/amie = friend (neutral); copain/copine = friend (informal), can also mean boyfriend/girlfriend"},
{f:"l'amour (m)",e:"love",pos:"n",u:1,t:"F"},
{f:"l'animal (m)",e:"animal, pet",pos:"n",u:1,t:"F"},
{f:"l'enfant (m/f)",e:"child",pos:"n",u:1,t:"F"},
{f:"le chien",e:"dog",pos:"n",u:1,t:"F"},
{f:"proche",e:"nearby, close",pos:"prep",u:1,t:"F"},
{f:"changer",e:"to change",pos:"v",u:1,t:"F"},
{f:"communiquer",e:"to communicate",pos:"v",u:1,t:"F"},
{f:"comprendre",e:"to understand",pos:"v",u:1,t:"F"},
{f:"connaître",e:"to know (a person/place)",pos:"v",u:1,t:"F",synonym_group:"to know",synonym_order:2,synonym_note:"savoir = to know a fact or how to do something; connaître = to know a person, place or thing"},
{f:"discuter de",e:"to discuss",pos:"v",u:1,t:"F"},
{f:"se disputer",e:"to argue",pos:"v",u:1,t:"F"},
{f:"écouter",e:"to listen to",pos:"v",u:1,t:"F"},
{f:"encourager",e:"to encourage",pos:"v",u:1,t:"F"},
{f:"s'entendre avec",e:"to get on with (someone)",pos:"v",u:1,t:"F"},
{f:"s'excuser",e:"to apologise",pos:"v",u:1,t:"F"},
{f:"inviter",e:"to invite",pos:"v",u:1,t:"F"},
{f:"se marier",e:"to get married",pos:"v",u:1,t:"F"},
{f:"montrer",e:"to show",pos:"v",u:1,t:"F",synonym_group:"to show",synonym_order:1,synonym_note:"montrer = to show physically; présenter = to present or introduce formally; indiquer = to indicate or point out"},
{f:"mourir",e:"to die",pos:"v",u:1,t:"F"},
{f:"parler",e:"to speak, talk",pos:"v",u:1,t:"F"},
{f:"passer",e:"to spend (time)",pos:"v",u:1,t:"F"},
{f:"se passer",e:"to happen",pos:"v",u:1,t:"F",synonym_group:"to happen",synonym_order:1,synonym_note:"se passer = to happen generally; avoir lieu = to take place (planned events, more formal)"},
{f:"prêter",e:"to lend",pos:"v",u:1,t:"F"},
{f:"promettre",e:"to promise",pos:"v",u:1,t:"F"},
{f:"rencontrer",e:"to meet",pos:"v",u:1,t:"F"},
{f:"ressembler à",e:"to look like",pos:"v",u:1,t:"F"},
{f:"se séparer",e:"to break up",pos:"v",u:1,t:"F"},
{f:"sortir",e:"to go out",pos:"v",u:1,t:"F"},
{f:"sourire",e:"to smile",pos:"v",u:1,t:"F"},
{f:"tomber",e:"to fall",pos:"v",u:1,t:"F"},
{f:"mariage du même sexe",e:"same-sex marriage",pos:"phrase",u:1,t:"F"},
// ── U1 HIGHER ──
{f:"africain",e:"African",pos:"adj",u:1,t:"H"},
{f:"arabe",e:"Arabic, Arab",pos:"adj",u:1,t:"H"},
{f:"belge",e:"Belgian",pos:"adj",u:1,t:"H"},
{f:"catholique",e:"Catholic",pos:"adj",u:1,t:"H"},
{f:"chinois",e:"Chinese",pos:"adj",u:1,t:"H"},
{f:"francophone",e:"French-speaking",pos:"adj",u:1,t:"H"},
{f:"gris",e:"grey",pos:"adj",u:1,t:"H"},
{f:"indépendant",e:"independent",pos:"adj",u:1,t:"H"},
{f:"libéral",e:"liberal",pos:"adj",u:1,t:"H"},
{f:"marocain",e:"Moroccan",pos:"adj",u:1,t:"H"},
{f:"patient",e:"patient",pos:"adj",u:1,t:"H"},
{f:"québécois",e:"from Quebec",pos:"adj",u:1,t:"H"},
{f:"responsable",e:"responsible",pos:"adj",u:1,t:"H"},
{f:"sensible",e:"sensitive",pos:"adj",u:1,t:"H",faux_ami:true,faux_ami_trap:"sensible"},
{f:"suisse",e:"Swiss",pos:"adj",u:1,t:"H"},
{f:"vif",e:"lively",pos:"adj",u:1,t:"H"},
{f:"la blague",e:"joke",pos:"n",u:1,t:"H"},
{f:"l'émotion (f)",e:"emotion, feeling",pos:"n",u:1,t:"H"},
{f:"l'enfance (f)",e:"childhood",pos:"n",u:1,t:"H"},
{f:"l'étape (f)",e:"stage, step",pos:"n",u:1,t:"H"},
{f:"la foi",e:"faith",pos:"n",u:1,t:"H"},
{f:"la maman",e:"mum",pos:"n",u:1,t:"H"},
{f:"la promesse",e:"promise",pos:"n",u:1,t:"H"},
{f:"la qualité",e:"quality",pos:"n",u:1,t:"H"},
{f:"la relation",e:"relationship",pos:"n",u:1,t:"H",synonym_group:"relationship",synonym_order:1,synonym_note:"relation = personal relationship; rapport = relationship or report (more formal, can also mean a written report)"},
{f:"la responsabilité",e:"responsibility",pos:"n",u:1,t:"H"},
{f:"l'air (m)",e:"air, appearance",pos:"n",u:1,t:"H"},
{f:"l'argument (m)",e:"argument",pos:"n",u:1,t:"H"},
{f:"le citoyen",e:"citizen",pos:"n",u:1,t:"H"},
{f:"le conflit",e:"conflict",pos:"n",u:1,t:"H"},
{f:"le handicap",e:"disability",pos:"n",u:1,t:"H"},
{f:"l'individu (m)",e:"individual",pos:"n",u:1,t:"H"},
{f:"l'œil (m)",e:"eye",pos:"n",u:1,t:"H"},
{f:"l'oiseau (m)",e:"bird",pos:"n",u:1,t:"H"},
{f:"le rapport",e:"relationship, report",pos:"n",u:1,t:"H",synonym_group:"relationship",synonym_order:2,synonym_note:"relation = personal relationship; rapport = relationship or report (more formal, can also mean a written report)"},
{f:"le respect",e:"respect",pos:"n",u:1,t:"H"},
{f:"le soutien",e:"support",pos:"n",u:1,t:"H"},
{f:"moi-même",e:"myself",pos:"pron",u:1,t:"H"},
{f:"toi-même",e:"yourself",pos:"pron",u:1,t:"H"},
{f:"admettre",e:"to admit, confess",pos:"v",u:1,t:"H",synonym_group:"to admit / confess",synonym_order:1,synonym_note:"admettre = to admit a fact; avouer = to confess (more emotionally charged, implies guilt)"},
{f:"avouer",e:"to admit to, confess",pos:"v",u:1,t:"H",synonym_group:"to admit / confess",synonym_order:2,synonym_note:"admettre = to admit a fact; avouer = to confess (more emotionally charged, implies guilt)"},
{f:"critiquer",e:"to criticise",pos:"v",u:1,t:"H"},
{f:"dépendre de",e:"to depend on",pos:"v",u:1,t:"H"},
{f:"garder",e:"to keep, look after",pos:"v",u:1,t:"H"},
{f:"grandir",e:"to grow up, get bigger",pos:"v",u:1,t:"H"},
{f:"manquer à",e:"to miss (someone)",pos:"v",u:1,t:"H"},
{f:"mentir",e:"to lie",pos:"v",u:1,t:"H"},
{f:"s'occuper de",e:"to take care of",pos:"v",u:1,t:"H",synonym_group:"to manage / handle",synonym_order:2,synonym_note:"gérer = to manage a situation or business; s'occuper de = to take care of, deal with (more personal)"},
{f:"permettre",e:"to allow",pos:"v",u:1,t:"H",synonym_group:"to allow / let",synonym_order:1,synonym_note:"permettre = to officially permit; laisser = to let/allow informally, also means to leave"},
{f:"présenter",e:"to introduce, present",pos:"v",u:1,t:"H",synonym_group:"to show",synonym_order:2,synonym_note:"montrer = to show physically; présenter = to present or introduce formally; indiquer = to indicate or point out"},
{f:"prier",e:"to pray",pos:"v",u:1,t:"H"},
{f:"respecter",e:"to respect",pos:"v",u:1,t:"H"},
{f:"sembler",e:"to seem",pos:"v",u:1,t:"H"},
{f:"se sentir",e:"to feel",pos:"v",u:1,t:"H"},
{f:"soutenir",e:"to support",pos:"v",u:1,t:"H"},
{f:"se tromper",e:"to make a mistake",pos:"v",u:1,t:"H"},
{f:"unir",e:"to unite, join",pos:"v",u:1,t:"H"},
// ── U2 FOUNDATION ── Healthy living & lifestyle
{f:"actif",e:"active, energetic",pos:"adj",u:2,t:"F"},
{f:"dangereux",e:"dangerous",pos:"adj",u:2,t:"F"},
{f:"équilibré",e:"balanced",pos:"adj",u:2,t:"F"},
{f:"faible",e:"weak",pos:"adj",u:2,t:"F"},
{f:"fatigué",e:"tired",pos:"adj",u:2,t:"F"},
{f:"grave",e:"serious",pos:"adj",u:2,t:"F"},
{f:"inquiétant",e:"worrying",pos:"adj",u:2,t:"F"},
{f:"malade",e:"ill",pos:"adj",u:2,t:"F"},
{f:"mauvais",e:"bad, wrong",pos:"adj",u:2,t:"F"},
{f:"médical",e:"medical",pos:"adj",u:2,t:"F"},
{f:"sain",e:"healthy",pos:"adj",u:2,t:"F"},
{f:"sportif",e:"sporty, athletic",pos:"adj",u:2,t:"F"},
{f:"végan",e:"vegan",pos:"adj",u:2,t:"F"},
{f:"végétarien",e:"vegetarian",pos:"adj",u:2,t:"F"},
{f:"tôt",e:"early",pos:"adv",u:2,t:"F"},
{f:"l'activité (f)",e:"activity",pos:"n",u:2,t:"F"},
{f:"la boisson",e:"drink, beverage",pos:"n",u:2,t:"F"},
{f:"la bouche",e:"mouth",pos:"n",u:2,t:"F"},
{f:"la cause",e:"cause",pos:"n",u:2,t:"F"},
{f:"la cigarette",e:"cigarette",pos:"n",u:2,t:"F"},
{f:"la crise",e:"crisis",pos:"n",u:2,t:"F"},
{f:"la cuisine",e:"cooking, kitchen",pos:"n",u:2,t:"F"},
{f:"la drogue",e:"drug",pos:"n",u:2,t:"F"},
{f:"l'eau (f)",e:"water",pos:"n",u:2,t:"F"},
{f:"l'énergie (f)",e:"energy",pos:"n",u:2,t:"F"},
{f:"la faim",e:"hunger",pos:"n",u:2,t:"F"},
{f:"la forme",e:"form, shape",pos:"n",u:2,t:"F"},
{f:"la glace",e:"ice cream, ice",pos:"n",u:2,t:"F"},
{f:"l'habitude (f)",e:"habit",pos:"n",u:2,t:"F"},
{f:"l'inquiétude (f)",e:"worry, anxiety",pos:"n",u:2,t:"F",synonym_group:"worry / concern",synonym_order:1,synonym_note:"inquiétude = anxiety or deep worry (emotional state); souci = everyday worry or concern (also a problem or hassle)"},
{f:"la jambe",e:"leg",pos:"n",u:2,t:"F"},
{f:"la main",e:"hand",pos:"n",u:2,t:"F"},
{f:"la maladie",e:"illness",pos:"n",u:2,t:"F"},
{f:"la menace",e:"threat",pos:"n",u:2,t:"F"},
{f:"la mort",e:"death",pos:"n",u:2,t:"F"},
{f:"la natation",e:"swimming",pos:"n",u:2,t:"F"},
{f:"la nourriture",e:"food",pos:"n",u:2,t:"F"},
{f:"l'oreille (f)",e:"ear",pos:"n",u:2,t:"F"},
{f:"la promenade",e:"walk",pos:"n",u:2,t:"F"},
{f:"la recette",e:"recipe",pos:"n",u:2,t:"F"},
{f:"la santé",e:"health",pos:"n",u:2,t:"F"},
{f:"la science",e:"science",pos:"n",u:2,t:"F"},
{f:"la soif",e:"thirst",pos:"n",u:2,t:"F"},
{f:"la tête",e:"head",pos:"n",u:2,t:"F"},
{f:"l'urgence (f)",e:"emergency",pos:"n",u:2,t:"F"},
{f:"la viande",e:"meat",pos:"n",u:2,t:"F"},
{f:"les frites (fpl)",e:"chips",pos:"n",u:2,t:"F"},
{f:"l'accident (m)",e:"accident",pos:"n",u:2,t:"F"},
{f:"l'alcool (m)",e:"alcohol",pos:"n",u:2,t:"F"},
{f:"le bras",e:"arm",pos:"n",u:2,t:"F"},
{f:"le café",e:"café, coffee",pos:"n",u:2,t:"F"},
{f:"le cœur",e:"heart",pos:"n",u:2,t:"F"},
{f:"le corps",e:"body",pos:"n",u:2,t:"F"},
{f:"le danger",e:"danger",pos:"n",u:2,t:"F"},
{f:"le déjeuner",e:"lunch",pos:"n",u:2,t:"F"},
{f:"le dîner",e:"dinner",pos:"n",u:2,t:"F"},
{f:"le dos",e:"back",pos:"n",u:2,t:"F"},
{f:"l'effort (m)",e:"effort",pos:"n",u:2,t:"F"},
{f:"l'exercice (m)",e:"exercise",pos:"n",u:2,t:"F"},
{f:"le fast-food",e:"fast food",pos:"n",u:2,t:"F"},
{f:"le fromage",e:"cheese",pos:"n",u:2,t:"F"},
{f:"le fruit",e:"fruit",pos:"n",u:2,t:"F"},
{f:"le gâteau",e:"cake",pos:"n",u:2,t:"F"},
{f:"le goût",e:"taste, flavour",pos:"n",u:2,t:"F"},
{f:"l'hôpital (m)",e:"hospital",pos:"n",u:2,t:"F"},
{f:"le kilomètre",e:"kilometre",pos:"n",u:2,t:"F"},
{f:"le lait",e:"milk",pos:"n",u:2,t:"F"},
{f:"le légume",e:"vegetable",pos:"n",u:2,t:"F"},
{f:"le lit",e:"bed",pos:"n",u:2,t:"F"},
{f:"le mal",e:"ache, pain",pos:"n",u:2,t:"F"},
{f:"le médicament",e:"medicine, drug",pos:"n",u:2,t:"F"},
{f:"le pain",e:"bread",pos:"n",u:2,t:"F"},
{f:"le petit-déjeuner",e:"breakfast",pos:"n",u:2,t:"F"},
{f:"le pied",e:"foot",pos:"n",u:2,t:"F"},
{f:"le poisson",e:"fish",pos:"n",u:2,t:"F"},
{f:"le produit",e:"product",pos:"n",u:2,t:"F"},
{f:"le rendez-vous",e:"appointment",pos:"n",u:2,t:"F"},
{f:"le repas",e:"meal",pos:"n",u:2,t:"F"},
{f:"le restaurant",e:"restaurant",pos:"n",u:2,t:"F"},
{f:"le soin",e:"care",pos:"n",u:2,t:"F"},
{f:"le souci",e:"worry, concern",pos:"n",u:2,t:"F",synonym_group:"worry / concern",synonym_order:2,synonym_note:"inquiétude = anxiety or deep worry (emotional state); souci = everyday worry or concern (also a problem or hassle)"},
{f:"le sport",e:"sport",pos:"n",u:2,t:"F"},
{f:"le thé",e:"tea",pos:"n",u:2,t:"F"},
{f:"le vin",e:"wine",pos:"n",u:2,t:"F"},
{f:"le médecin",e:"doctor",pos:"n",u:2,t:"F",faux_ami:true,faux_ami_trap:"medicine"},
{f:"chez",e:"at the place of, at",pos:"prep",u:2,t:"F"},
{f:"améliorer",e:"to improve",pos:"v",u:2,t:"F",synonym_group:"to improve",synonym_order:1,synonym_note:"améliorer = to make something better (transitive — améliorer quelque chose); progresser = to make progress, improve (intransitive)"},
{f:"arrêter de",e:"to stop (doing)",pos:"v",u:2,t:"F"},
{f:"boire",e:"to drink",pos:"v",u:2,t:"F"},
{f:"se coucher",e:"to go to bed",pos:"v",u:2,t:"F"},
{f:"courir",e:"to run",pos:"v",u:2,t:"F"},
{f:"danser",e:"to dance",pos:"v",u:2,t:"F"},
{f:"détester",e:"to hate, detest",pos:"v",u:2,t:"F"},
{f:"dormir",e:"to sleep",pos:"v",u:2,t:"F"},
{f:"essayer de",e:"to try to",pos:"v",u:2,t:"F"},
{f:"éviter de",e:"to avoid",pos:"v",u:2,t:"F"},
{f:"fumer",e:"to smoke",pos:"v",u:2,t:"F"},
{f:"se lever",e:"to get up",pos:"v",u:2,t:"F"},
{f:"manger",e:"to eat",pos:"v",u:2,t:"F"},
{f:"marcher",e:"to walk, work",pos:"v",u:2,t:"F",synonym_group:"to work (function)",synonym_order:1,synonym_note:"both mean a machine or plan is working/functioning; marcher is more colloquial"},
{f:"perdre",e:"to lose",pos:"v",u:2,t:"F"},
{f:"peser",e:"to weigh",pos:"v",u:2,t:"F"},
{f:"préparer",e:"to prepare",pos:"v",u:2,t:"F"},
{f:"proposer",e:"to suggest, offer",pos:"v",u:2,t:"F"},
{f:"rechercher",e:"to look for, collect",pos:"v",u:2,t:"F",synonym_group:"to look for",synonym_order:2,synonym_note:"chercher = to look for generally; rechercher = to search more thoroughly, or to seek out"},
{f:"recommander",e:"to recommend",pos:"v",u:2,t:"F"},
{f:"se relaxer",e:"to relax",pos:"v",u:2,t:"F"},
{f:"remplir",e:"to fill",pos:"v",u:2,t:"F"},
{f:"rester",e:"to stay, remain",pos:"v",u:2,t:"F",faux_ami:true,faux_ami_trap:"to rest"},
{f:"supporter",e:"to tolerate, put up with",pos:"v",u:2,t:"F",faux_ami:true,faux_ami_trap:"to support"},
{f:"tuer",e:"to kill",pos:"v",u:2,t:"F"},
{f:"vapoter",e:"to vape",pos:"v",u:2,t:"F"},
{f:"visiter",e:"to visit",pos:"v",u:2,t:"F"},
// ── U2 HIGHER ──
{f:"conscient",e:"conscious, aware",pos:"adj",u:2,t:"H"},
{f:"efficace",e:"efficient, effective",pos:"adj",u:2,t:"H"},
{f:"vivant",e:"alive, living",pos:"adj",u:2,t:"H"},
{f:"l'attaque (f)",e:"attack",pos:"n",u:2,t:"H"},
{f:"l'attente (f)",e:"wait",pos:"n",u:2,t:"H"},
{f:"la bataille",e:"battle",pos:"n",u:2,t:"H"},
{f:"l'explication (f)",e:"explanation",pos:"n",u:2,t:"H"},
{f:"la honte",e:"shame",pos:"n",u:2,t:"H"},
{f:"la peau",e:"skin",pos:"n",u:2,t:"H"},
{f:"la perte",e:"loss",pos:"n",u:2,t:"H"},
{f:"le conseil",e:"advice",pos:"n",u:2,t:"H"},
{f:"le contenu",e:"contents",pos:"n",u:2,t:"H"},
{f:"le débat",e:"debate",pos:"n",u:2,t:"H"},
{f:"l'esprit (m)",e:"mind, spirit",pos:"n",u:2,t:"H"},
{f:"l'incident (m)",e:"incident",pos:"n",u:2,t:"H"},
{f:"le plat",e:"dish",pos:"n",u:2,t:"H"},
{f:"le poulet",e:"chicken",pos:"n",u:2,t:"H"},
{f:"le régime",e:"diet",pos:"n",u:2,t:"H"},
{f:"le risque",e:"risk",pos:"n",u:2,t:"H"},
{f:"le sang",e:"blood",pos:"n",u:2,t:"H"},
{f:"le soutien",e:"support",pos:"n",u:2,t:"H"},
{f:"le tabac",e:"tobacco",pos:"n",u:2,t:"H"},
{f:"le traitement",e:"treatment",pos:"n",u:2,t:"H"},
{f:"les hôpitaux (mpl)",e:"hospitals",pos:"n",u:2,t:"H"},
{f:"amener",e:"to bring (someone)",pos:"v",u:2,t:"H"},
{f:"bénéficier de",e:"to benefit from",pos:"v",u:2,t:"H"},
{f:"blesser",e:"to hurt, injure",pos:"v",u:2,t:"H",faux_ami:true,faux_ami_trap:"to bless"},
{f:"se casser",e:"to break a body part",pos:"v",u:2,t:"H"},
{f:"causer",e:"to cause",pos:"v",u:2,t:"H"},
{f:"conseiller",e:"to advise",pos:"v",u:2,t:"H"},
{f:"contenir",e:"to contain",pos:"v",u:2,t:"H"},
{f:"empêcher de",e:"to prevent from",pos:"v",u:2,t:"H"},
{f:"gérer",e:"to manage, handle",pos:"v",u:2,t:"H",synonym_group:"to manage / handle",synonym_order:1,synonym_note:"gérer = to manage a situation or business; s'occuper de = to take care of, deal with (more personal)"},
{f:"lutter",e:"to fight, struggle",pos:"v",u:2,t:"H"},
{f:"mener",e:"to lead",pos:"v",u:2,t:"H"},
{f:"nager",e:"to swim",pos:"v",u:2,t:"H"},
{f:"nourrir",e:"to feed",pos:"v",u:2,t:"H"},
{f:"prévenir",e:"to warn, let know",pos:"v",u:2,t:"H"},
{f:"refuser de",e:"to refuse to",pos:"v",u:2,t:"H"},
{f:"se rendre",e:"to go to, get to",pos:"v",u:2,t:"H"},
{f:"se reposer",e:"to rest",pos:"v",u:2,t:"H"},
{f:"risquer de",e:"to risk",pos:"v",u:2,t:"H"},
{f:"sauver",e:"to save, rescue",pos:"v",u:2,t:"H"},
{f:"souffrir",e:"to suffer",pos:"v",u:2,t:"H"},
// ── U3 FOUNDATION ── Education & work
{f:"affreux",e:"dreadful, awful",pos:"adj",u:3,t:"F"},
{f:"capable",e:"able, capable",pos:"adj",u:3,t:"F"},
{f:"difficile",e:"difficult",pos:"adj",u:3,t:"F"},
{f:"dur",e:"hard",pos:"adj",u:3,t:"F"},
{f:"facile",e:"easy",pos:"adj",u:3,t:"F"},
{f:"idéal",e:"ideal",pos:"adj",u:3,t:"F"},
{f:"industriel",e:"industrial",pos:"adj",u:3,t:"F"},
{f:"interdit",e:"prohibited, banned",pos:"adj",u:3,t:"F"},
{f:"inutile",e:"useless",pos:"adj",u:3,t:"F"},
{f:"juste",e:"right, fair, correct",pos:"adj",u:3,t:"F"},
{f:"méchant",e:"mean, nasty",pos:"adj",u:3,t:"F"},
{f:"moderne",e:"modern",pos:"adj",u:3,t:"F"},
{f:"nul / nulle",e:"rubbish",pos:"adj",u:3,t:"F"},
{f:"passionnant",e:"exciting, thrilling",pos:"adj",u:3,t:"F"},
{f:"pratique",e:"practical",pos:"adj",u:3,t:"F"},
{f:"riche",e:"rich",pos:"adj",u:3,t:"F"},
{f:"scolaire",e:"school (adj)",pos:"adj",u:3,t:"F"},
{f:"simple",e:"simple",pos:"adj",u:3,t:"F"},
{f:"utile",e:"useful",pos:"adj",u:3,t:"F"},
{f:"l'activité (f)",e:"activity",pos:"n",u:3,t:"F"},
{f:"l'aide (f)",e:"help",pos:"n",u:3,t:"F"},
{f:"l'apprentissage (m)",e:"apprenticeship",pos:"n",u:3,t:"F"},
{f:"l'avenir (m)",e:"future",pos:"n",u:3,t:"F"},
{f:"le baccalauréat / bac",e:"French A-level equivalent",pos:"n",u:3,t:"F"},
{f:"la bibliothèque",e:"library",pos:"n",u:3,t:"F"},
{f:"le boulot",e:"work, job (informal)",pos:"n",u:3,t:"F",synonym_group:"job / work",synonym_order:2,synonym_note:"travail = work or job (general); boulot = job (informal/colloquial); emploi = employment or job (formal); métier = trade, occupation or profession"},
{f:"le bureau",e:"desk, office",pos:"n",u:3,t:"F"},
{f:"le candidat",e:"candidate",pos:"n",u:3,t:"F"},
{f:"la carrière",e:"career",pos:"n",u:3,t:"F"},
{f:"la chaise",e:"chair",pos:"n",u:3,t:"F"},
{f:"la chance",e:"luck",pos:"n",u:3,t:"F",faux_ami:true,faux_ami_trap:"chance (= opportunity)"},
{f:"le chef",e:"boss, cook",pos:"n",u:3,t:"F",synonym_group:"boss",synonym_order:1,synonym_note:"chef/cheffe = boss or head chef; patron = boss or owner of a business (more specific to ownership)"},
{f:"le chemin",e:"way, path",pos:"n",u:3,t:"F"},
{f:"le choix",e:"choice",pos:"n",u:3,t:"F"},
{f:"le chômage",e:"unemployment",pos:"n",u:3,t:"F"},
{f:"la classe",e:"class",pos:"n",u:3,t:"F"},
{f:"le collège",e:"secondary school",pos:"n",u:3,t:"F",faux_ami:true,faux_ami_trap:"college"},
{f:"le collègue / la collègue",e:"colleague",pos:"n",u:3,t:"F"},
{f:"la compétence",e:"skill, competence",pos:"n",u:3,t:"F"},
{f:"le concours",e:"competition, entrance exam",pos:"n",u:3,t:"F"},
{f:"la confiance",e:"confidence, trust",pos:"n",u:3,t:"F"},
{f:"la construction",e:"construction, building",pos:"n",u:3,t:"F"},
{f:"le courage",e:"courage",pos:"n",u:3,t:"F"},
{f:"la cour",e:"courtyard, playground",pos:"n",u:3,t:"F"},
{f:"les devoirs (mpl)",e:"homework",pos:"n",u:3,t:"F"},
{f:"le dictionnaire",e:"dictionary",pos:"n",u:3,t:"F"},
{f:"le directeur",e:"head teacher, manager",pos:"n",u:3,t:"F"},
{f:"la discussion",e:"discussion",pos:"n",u:3,t:"F"},
{f:"l'école (f)",e:"school",pos:"n",u:3,t:"F"},
{f:"l'éducation (f)",e:"education",pos:"n",u:3,t:"F"},
{f:"l'égalité (f)",e:"equality",pos:"n",u:3,t:"F"},
{f:"l'élève (m/f)",e:"pupil, student",pos:"n",u:3,t:"F"},
{f:"l'emploi (m)",e:"job",pos:"n",u:3,t:"F",synonym_group:"job / work",synonym_order:3,synonym_note:"travail = work or job (general); boulot = job (informal/colloquial); emploi = employment or job (formal); métier = trade, occupation or profession"},
{f:"l'employé (m)",e:"employee, worker",pos:"n",u:3,t:"F"},
{f:"l'enseignement (m)",e:"education, teaching",pos:"n",u:3,t:"F"},
{f:"l'entreprise (f)",e:"company",pos:"n",u:3,t:"F"},
{f:"l'entretien (m)",e:"interview, maintenance",pos:"n",u:3,t:"F"},
{f:"l'équipe (f)",e:"team",pos:"n",u:3,t:"F"},
{f:"l'erreur (f)",e:"mistake, error",pos:"n",u:3,t:"F",synonym_group:"mistake / error",synonym_order:1,synonym_note:"erreur = mistake or error (neutral); faute = fault or mistake (implies blame or moral failing)"},
{f:"l'espace (m)",e:"space",pos:"n",u:3,t:"F"},
{f:"l'étudiant (m)",e:"student",pos:"n",u:3,t:"F"},
{f:"l'examen (m)",e:"exam",pos:"n",u:3,t:"F"},
{f:"l'expert (m)",e:"expert",pos:"n",u:3,t:"F"},
{f:"le facteur",e:"postman",pos:"n",u:3,t:"F"},
{f:"la faute",e:"mistake, fault",pos:"n",u:3,t:"F",synonym_group:"mistake / error",synonym_order:2,synonym_note:"erreur = mistake or error (neutral); faute = fault or mistake (implies blame or moral failing)"},
{f:"la géographie",e:"geography",pos:"n",u:3,t:"F"},
{f:"la grève",e:"strike",pos:"n",u:3,t:"F"},
{f:"l'histoire (f)",e:"history, story",pos:"n",u:3,t:"F"},
{f:"l'indépendance (f)",e:"independence",pos:"n",u:3,t:"F"},
{f:"l'information (f)",e:"information",pos:"n",u:3,t:"F"},
{f:"l'informatique (f)",e:"computer science",pos:"n",u:3,t:"F"},
{f:"l'intention (f)",e:"intention",pos:"n",u:3,t:"F"},
{f:"l'inquiétude (f)",e:"worry, anxiety",pos:"n",u:3,t:"F"},
{f:"le journaliste / la journaliste",e:"journalist",pos:"n",u:3,t:"F"},
{f:"la journée",e:"day",pos:"n",u:3,t:"F",faux_ami:true,faux_ami_trap:"journey"},
{f:"la langue",e:"language",pos:"n",u:3,t:"F"},
{f:"la leçon",e:"lesson",pos:"n",u:3,t:"F"},
{f:"la lecture",e:"reading",pos:"n",u:3,t:"F",faux_ami:true,faux_ami_trap:"lecture"},
{f:"le lycée",e:"college, sixth form",pos:"n",u:3,t:"F"},
{f:"la madame",e:"Mrs, madam",pos:"n",u:3,t:"F"},
{f:"Mademoiselle",e:"Miss",pos:"n",u:3,t:"F"},
{f:"les maths (fpl)",e:"mathematics",pos:"n",u:3,t:"F"},
{f:"la matière",e:"subject",pos:"n",u:3,t:"F"},
{f:"le médecin",e:"doctor",pos:"n",u:3,t:"F"},
{f:"le membre",e:"member",pos:"n",u:3,t:"F"},
{f:"le métier",e:"job, occupation",pos:"n",u:3,t:"F",synonym_group:"job / work",synonym_order:4,synonym_note:"travail = work or job (general); boulot = job (informal/colloquial); emploi = employment or job (formal); métier = trade, occupation or profession"},
{f:"le monde",e:"world",pos:"n",u:3,t:"F"},
{f:"Monsieur",e:"Sir, Mr",pos:"n",u:3,t:"F"},
{f:"le mot",e:"word",pos:"n",u:3,t:"F"},
{f:"le niveau",e:"level",pos:"n",u:3,t:"F"},
{f:"la note",e:"mark, grade",pos:"n",u:3,t:"F"},
{f:"l'occasion (f)",e:"chance, opportunity",pos:"n",u:3,t:"F",faux_ami:true,faux_ami_trap:"occasion"},
{f:"l'ordinateur (m)",e:"computer",pos:"n",u:3,t:"F"},
{f:"l'organisation (f)",e:"organisation",pos:"n",u:3,t:"F"},
{f:"le pantalon",e:"trousers",pos:"n",u:3,t:"F"},
{f:"le patron",e:"boss",pos:"n",u:3,t:"F",synonym_group:"boss",synonym_order:3,synonym_note:"chef/cheffe = boss or head chef; patron = boss or owner of a business (more specific to ownership)"},
{f:"le physique",e:"physics",pos:"n",u:3,t:"F"},
{f:"le policier / la policière",e:"policeman / policewoman",pos:"n",u:3,t:"F"},
{f:"le portable",e:"mobile phone, laptop",pos:"n",u:3,t:"F"},
{f:"la première",e:"year 12",pos:"n",u:3,t:"F"},
{f:"le président",e:"president",pos:"n",u:3,t:"F"},
{f:"le professeur / prof",e:"teacher",pos:"n",u:3,t:"F"},
{f:"le programme",e:"schedule",pos:"n",u:3,t:"F"},
{f:"le progrès",e:"progress",pos:"n",u:3,t:"F"},
{f:"le projet",e:"plan",pos:"n",u:3,t:"F"},
{f:"le propriétaire / la propriétaire",e:"owner",pos:"n",u:3,t:"F"},
{f:"la quatrième",e:"year 9",pos:"n",u:3,t:"F"},
{f:"la récréation / récré",e:"break time",pos:"n",u:3,t:"F"},
{f:"la règle",e:"rule, ruler",pos:"n",u:3,t:"F",synonym_group:"rule / regulation",synonym_order:1,synonym_note:"règle = rule in general (also means ruler); règlement = a formal set of rules or regulations"},
{f:"la réponse",e:"reply, answer",pos:"n",u:3,t:"F"},
{f:"la ressource",e:"resource",pos:"n",u:3,t:"F"},
{f:"le résultat",e:"result",pos:"n",u:3,t:"F"},
{f:"la réunion",e:"meeting",pos:"n",u:3,t:"F"},
{f:"le rêve",e:"dream",pos:"n",u:3,t:"F"},
{f:"le sac",e:"bag, sack",pos:"n",u:3,t:"F"},
{f:"le salaire",e:"salary, wage",pos:"n",u:3,t:"F"},
{f:"la salle",e:"room",pos:"n",u:3,t:"F"},
{f:"la science",e:"science",pos:"n",u:3,t:"F"},
{f:"le scientifique / la scientifique",e:"scientist",pos:"n",u:3,t:"F"},
{f:"la seconde",e:"year 11",pos:"n",u:3,t:"F"},
{f:"le secrétaire / la secrétaire",e:"secretary",pos:"n",u:3,t:"F"},
{f:"le stage",e:"work experience",pos:"n",u:3,t:"F",faux_ami:true,faux_ami_trap:"stage"},
{f:"le stylo",e:"pen",pos:"n",u:3,t:"F"},
{f:"le succès",e:"success",pos:"n",u:3,t:"F"},
{f:"le tableau",e:"board, picture",pos:"n",u:3,t:"F"},
{f:"la tâche",e:"task, chore",pos:"n",u:3,t:"F"},
{f:"le téléphone",e:"telephone",pos:"n",u:3,t:"F"},
{f:"le texte",e:"text",pos:"n",u:3,t:"F"},
{f:"le théâtre",e:"theatre, drama",pos:"n",u:3,t:"F"},
{f:"la toilette",e:"bathroom, toilet",pos:"n",u:3,t:"F"},
{f:"le travail",e:"work, job, task",pos:"n",u:3,t:"F",synonym_group:"job / work",synonym_order:1,synonym_note:"travail = work or job (general); boulot = job (informal/colloquial); emploi = employment or job (formal); métier = trade, occupation or profession"},
{f:"l'uniforme (m)",e:"uniform",pos:"n",u:3,t:"F"},
{f:"l'université (f)",e:"university",pos:"n",u:3,t:"F"},
{f:"l'usine (f)",e:"factory",pos:"n",u:3,t:"F"},
{f:"le vêtement",e:"garment, clothing",pos:"n",u:3,t:"F"},
{f:"le vote",e:"vote",pos:"n",u:3,t:"F"},
{f:"le voyage",e:"trip, journey",pos:"n",u:3,t:"F",faux_ami:true,faux_ami_trap:"voyage (= sea trip only)"},
{f:"l'artiste (m/f)",e:"artist",pos:"n",u:3,t:"F"},
{f:"l'auteur (m/f)",e:"author",pos:"n",u:3,t:"F"},
{f:"le bénévole / la bénévole",e:"volunteer",pos:"n",u:3,t:"F"},
{f:"l'aidant (m)",e:"carer",pos:"n",u:3,t:"F"},
{f:"accepter",e:"to accept",pos:"v",u:3,t:"F"},
{f:"aider à",e:"to help (to)",pos:"v",u:3,t:"F"},
{f:"apprendre",e:"to learn",pos:"v",u:3,t:"F"},
{f:"arriver à",e:"to manage to",pos:"v",u:3,t:"F"},
{f:"choisir",e:"to choose",pos:"v",u:3,t:"F"},
{f:"commencer à",e:"to start to",pos:"v",u:3,t:"F",synonym_group:"to begin / start",synonym_order:1,synonym_note:"commencer is the general word; débuter implies starting something for the first time"},
{f:"comprendre",e:"to understand",pos:"v",u:3,t:"F"},
{f:"construire",e:"to build, construct",pos:"v",u:3,t:"F"},
{f:"continuer",e:"to continue",pos:"v",u:3,t:"F"},
{f:"corriger",e:"to correct, mark",pos:"v",u:3,t:"F"},
{f:"décider de",e:"to decide to",pos:"v",u:3,t:"F"},
{f:"demander",e:"to ask for",pos:"v",u:3,t:"F"},
{f:"devenir",e:"to become",pos:"v",u:3,t:"F"},
{f:"écrire",e:"to write",pos:"v",u:3,t:"F"},
{f:"employer",e:"to use, employ",pos:"v",u:3,t:"F",synonym_group:"to use",synonym_order:2,synonym_note:"utiliser = most neutral; employer = to use or employ (slightly formal); se servir de = to make use of (idiomatic)"},
{f:"emprunter à",e:"to borrow from",pos:"v",u:3,t:"F"},
{f:"espérer",e:"to hope",pos:"v",u:3,t:"F"},
{f:"étudier",e:"to study",pos:"v",u:3,t:"F"},
{f:"expliquer",e:"to explain",pos:"v",u:3,t:"F"},
{f:"fabriquer",e:"to manufacture, make",pos:"v",u:3,t:"F",synonym_group:"to make / produce",synonym_order:1,synonym_note:"fabriquer = to manufacture physically; produire = to produce output or results; créer = to create something new"},
{f:"finir",e:"to finish, end",pos:"v",u:3,t:"F",synonym_group:"to finish / end",synonym_order:1,synonym_note:"largely interchangeable; terminer is slightly more formal or deliberate"},
{f:"gagner",e:"to win, earn",pos:"v",u:3,t:"F"},
{f:"imaginer",e:"to imagine, invent",pos:"v",u:3,t:"F"},
{f:"interdire",e:"to forbid, ban",pos:"v",u:3,t:"F"},
{f:"lire",e:"to read",pos:"v",u:3,t:"F"},
{f:"organiser",e:"to organise",pos:"v",u:3,t:"F"},
{f:"payer",e:"to pay (for)",pos:"v",u:3,t:"F"},
{f:"porter",e:"to wear, carry",pos:"v",u:3,t:"F"},
{f:"progresser",e:"to progress",pos:"v",u:3,t:"F",synonym_group:"to improve",synonym_order:2,synonym_note:"améliorer = to make something better (transitive — améliorer quelque chose); progresser = to make progress, improve (intransitive)"},
{f:"quitter",e:"to leave",pos:"v",u:3,t:"F",synonym_group:"to leave",synonym_order:1,synonym_note:"quitter takes a direct object (quitter un endroit / une personne); partir is intransitive (to set off)"},
{f:"rentrer",e:"to go back in",pos:"v",u:3,t:"F"},
{f:"répéter",e:"to repeat",pos:"v",u:3,t:"F"},
{f:"réussir",e:"to succeed, pass (exam)",pos:"v",u:3,t:"F"},
{f:"rêver de",e:"to dream about",pos:"v",u:3,t:"F"},
{f:"se servir de",e:"to use, make use of",pos:"v",u:3,t:"F",synonym_group:"to use",synonym_order:3,synonym_note:"utiliser = most neutral; employer = to use or employ (slightly formal); se servir de = to make use of (idiomatic)"},
{f:"terminer",e:"to finish",pos:"v",u:3,t:"F",synonym_group:"to finish / end",synonym_order:2,synonym_note:"largely interchangeable; terminer is slightly more formal or deliberate"},
{f:"traduire",e:"to translate",pos:"v",u:3,t:"F"},
{f:"travailler",e:"to work",pos:"v",u:3,t:"F"},
{f:"vendre",e:"to sell",pos:"v",u:3,t:"F"},
{f:"voyager",e:"to travel",pos:"v",u:3,t:"F"},
// ── U3 HIGHER ──
{f:"conscient",e:"conscious, aware",pos:"adj",u:3,t:"H"},
{f:"divers",e:"varied, diverse",pos:"adj",u:3,t:"H"},
{f:"professionnel",e:"professional",pos:"adj",u:3,t:"H"},
{f:"sabbatique",e:"sabbatical",pos:"adj",u:3,t:"H"},
{f:"technique",e:"technical",pos:"adj",u:3,t:"H"},
{f:"l'attitude (f)",e:"attitude",pos:"n",u:3,t:"H"},
{f:"la cheffe",e:"boss, cook (f)",pos:"n",u:3,t:"H",synonym_group:"boss",synonym_order:2,synonym_note:"chef/cheffe = boss or head chef; patron = boss or owner of a business (more specific to ownership)"},
{f:"la concurrence",e:"competition",pos:"n",u:3,t:"H"},
{f:"la connaissance",e:"knowledge, acquaintance",pos:"n",u:3,t:"H"},
{f:"la coopération",e:"cooperation",pos:"n",u:3,t:"H"},
{f:"la direction",e:"direction, management",pos:"n",u:3,t:"H"},
{f:"la diversité",e:"diversity",pos:"n",u:3,t:"H"},
{f:"la durée",e:"length, duration",pos:"n",u:3,t:"H"},
{f:"l'échelle (f)",e:"ladder, scale",pos:"n",u:3,t:"H"},
{f:"l'économie (f)",e:"economy",pos:"n",u:3,t:"H"},
{f:"l'enfance (f)",e:"childhood",pos:"n",u:3,t:"H"},
{f:"l'enquête (f)",e:"survey, investigation",pos:"n",u:3,t:"H"},
{f:"l'étape (f)",e:"stage, step",pos:"n",u:3,t:"H",faux_ami:true,faux_ami_trap:"tape"},
{f:"l'étude (f)",e:"study",pos:"n",u:3,t:"H"},
{f:"l'explication (f)",e:"explanation",pos:"n",u:3,t:"H"},
{f:"la feuille",e:"leaf, sheet",pos:"n",u:3,t:"H"},
{f:"la formation",e:"training",pos:"n",u:3,t:"H"},
{f:"l'industrie (f)",e:"industry",pos:"n",u:3,t:"H"},
{f:"la loi",e:"law",pos:"n",u:3,t:"H"},
{f:"la passion",e:"passion",pos:"n",u:3,t:"H"},
{f:"la poche",e:"pocket",pos:"n",u:3,t:"H"},
{f:"la police",e:"police",pos:"n",u:3,t:"H"},
{f:"la recherche",e:"research, search",pos:"n",u:3,t:"H"},
{f:"la rentrée",e:"start of the school year",pos:"n",u:3,t:"H"},
{f:"la responsabilité",e:"responsibility",pos:"n",u:3,t:"H"},
{f:"la scène",e:"stage, scene",pos:"n",u:3,t:"H"},
{f:"la troisième",e:"year 10",pos:"n",u:3,t:"H"},
{f:"l'appel (m)",e:"call",pos:"n",u:3,t:"H"},
{f:"l'art (m)",e:"art",pos:"n",u:3,t:"H"},
{f:"l'avocat (m)",e:"lawyer",pos:"n",u:3,t:"H"},
{f:"le cahier",e:"exercise book",pos:"n",u:3,t:"H"},
{f:"le champ",e:"field, realm",pos:"n",u:3,t:"H"},
{f:"le chapitre",e:"chapter",pos:"n",u:3,t:"H"},
{f:"le chercheur",e:"researcher",pos:"n",u:3,t:"H"},
{f:"le commerce",e:"trade, commerce",pos:"n",u:3,t:"H"},
{f:"le comportement",e:"behaviour",pos:"n",u:3,t:"H"},
{f:"le conseil",e:"advice, council",pos:"n",u:3,t:"H"},
{f:"le contrôle",e:"test, check, inspection",pos:"n",u:3,t:"H"},
{f:"le début",e:"beginning",pos:"n",u:3,t:"H"},
{f:"le développement",e:"development",pos:"n",u:3,t:"H"},
{f:"l'échec (m)",e:"failure",pos:"n",u:3,t:"H"},
{f:"l'essai (m)",e:"attempt, test",pos:"n",u:3,t:"H"},
{f:"l'établissement (m)",e:"establishment, organisation",pos:"n",u:3,t:"H"},
{f:"l'objectif (m)",e:"objective, aim, goal",pos:"n",u:3,t:"H"},
{f:"le papier",e:"paper",pos:"n",u:3,t:"H"},
{f:"le parlement",e:"parliament",pos:"n",u:3,t:"H"},
{f:"le règlement",e:"rule, regulation",pos:"n",u:3,t:"H",synonym_group:"rule / regulation",synonym_order:2,synonym_note:"règle = rule in general (also means ruler); règlement = a formal set of rules or regulations"},
{f:"le respect",e:"respect",pos:"n",u:3,t:"H"},
{f:"le retard",e:"delay",pos:"n",u:3,t:"H"},
{f:"le rôle",e:"role",pos:"n",u:3,t:"H"},
{f:"le service",e:"service",pos:"n",u:3,t:"H"},
{f:"le soldat",e:"soldier",pos:"n",u:3,t:"H"},
{f:"le soutien",e:"support",pos:"n",u:3,t:"H"},
{f:"le sujet",e:"subject, topic",pos:"n",u:3,t:"H"},
{f:"le terrain",e:"ground, terrain",pos:"n",u:3,t:"H"},
{f:"le leader / la leader",e:"leader",pos:"n",u:3,t:"H"},
{f:"le ministre / la ministre",e:"minister",pos:"n",u:3,t:"H"},
{f:"le porte-parole",e:"spokesperson",pos:"n",u:3,t:"H"},
{f:"le voisin",e:"neighbour",pos:"n",u:3,t:"H"},
{f:"abandonner",e:"to give up, abandon",pos:"v",u:3,t:"H"},
{f:"s'asseoir",e:"to sit down",pos:"v",u:3,t:"H"},
{f:"assister à",e:"to attend",pos:"v",u:3,t:"H",faux_ami:true,faux_ami_trap:"to assist"},
{f:"concentrer",e:"to concentrate",pos:"v",u:3,t:"H"},
{f:"contrôler",e:"to check, inspect, control",pos:"v",u:3,t:"H"},
{f:"crier",e:"to shout",pos:"v",u:3,t:"H"},
{f:"décevoir",e:"to disappoint",pos:"v",u:3,t:"H"},
{f:"distribuer",e:"to hand out",pos:"v",u:3,t:"H"},
{f:"enseigner",e:"to teach",pos:"v",u:3,t:"H"},
{f:"harceler",e:"to bully, harass",pos:"v",u:3,t:"H"},
{f:"s'inscrire à",e:"to join, enrol in",pos:"v",u:3,t:"H"},
{f:"inspirer",e:"to inspire",pos:"v",u:3,t:"H"},
{f:"inventer",e:"to invent, make up",pos:"v",u:3,t:"H"},
{f:"mériter",e:"to deserve",pos:"v",u:3,t:"H"},
{f:"nettoyer",e:"to clean",pos:"v",u:3,t:"H"},
{f:"noter",e:"to mark, write down, notice",pos:"v",u:3,t:"H"},
{f:"obliger",e:"to require, force",pos:"v",u:3,t:"H"},
{f:"obtenir",e:"to get, obtain",pos:"v",u:3,t:"H"},
{f:"permettre",e:"to allow",pos:"v",u:3,t:"H"},
{f:"poser",e:"to put, ask",pos:"v",u:3,t:"H"},
{f:"pratiquer",e:"to do, play, practise",pos:"v",u:3,t:"H"},
{f:"ranger",e:"to tidy, put away",pos:"v",u:3,t:"H"},
{f:"réaliser",e:"to realise, achieve",pos:"v",u:3,t:"H",faux_ami:true,faux_ami_trap:"to realise (= understand mentally)"},
{f:"réfléchir à",e:"to think about, reflect",pos:"v",u:3,t:"H"},
{f:"remercier",e:"to thank",pos:"v",u:3,t:"H"},
{f:"regretter",e:"to regret, be sorry",pos:"v",u:3,t:"H",faux_ami:true,faux_ami_trap:"to regret (only partly correct)"},
{f:"respecter",e:"to respect",pos:"v",u:3,t:"H"},
{f:"souhaiter",e:"to wish",pos:"v",u:3,t:"H"},
{f:"souligner",e:"to underline, stress",pos:"v",u:3,t:"H"},
{f:"se tromper",e:"to make a mistake",pos:"v",u:3,t:"H"},
{f:"décrire",e:"to describe",pos:"v",u:3,t:"H"},
// ── U4 FOUNDATION ── Free-time activities
{f:"actif",e:"active, energetic",pos:"adj",u:4,t:"F"},
{f:"commercial",e:"commercial, shopping",pos:"adj",u:4,t:"F"},
{f:"complet",e:"full, complete",pos:"adj",u:4,t:"F"},
{f:"dangereux",e:"dangerous",pos:"adj",u:4,t:"F"},
{f:"difficile",e:"difficult",pos:"adj",u:4,t:"F"},
{f:"dur",e:"hard",pos:"adj",u:4,t:"F"},
{f:"facile",e:"easy",pos:"adj",u:4,t:"F"},
{f:"ouvert",e:"open",pos:"adj",u:4,t:"F"},
{f:"passionnant",e:"exciting, thrilling",pos:"adj",u:4,t:"F"},
{f:"populaire",e:"popular",pos:"adj",u:4,t:"F"},
{f:"sportif",e:"sporty, athletic",pos:"adj",u:4,t:"F"},
{f:"vite",e:"quickly, fast",pos:"adv",u:4,t:"F"},
{f:"l'action (f)",e:"action",pos:"n",u:4,t:"F"},
{f:"l'activité (f)",e:"activity",pos:"n",u:4,t:"F"},
{f:"l'après-midi (m)",e:"afternoon",pos:"n",u:4,t:"F"},
{f:"l'article (m)",e:"article, item",pos:"n",u:4,t:"F"},
{f:"le billet",e:"ticket",pos:"n",u:4,t:"F",synonym_group:"ticket",synonym_order:1,synonym_note:"billet = ticket for transport or events (also means banknote); ticket = ticket for local transport or a receipt"},
{f:"la boisson",e:"drink, beverage",pos:"n",u:4,t:"F"},
{f:"le but",e:"goal, aim, purpose",pos:"n",u:4,t:"F"},
{f:"le café",e:"café, coffee",pos:"n",u:4,t:"F"},
{f:"la caisse",e:"checkout",pos:"n",u:4,t:"F"},
{f:"le camping",e:"camping",pos:"n",u:4,t:"F"},
{f:"la carte",e:"menu, map, card",pos:"n",u:4,t:"F"},
{f:"la chanson",e:"song",pos:"n",u:4,t:"F"},
{f:"le chanteur",e:"singer",pos:"n",u:4,t:"F"},
{f:"le cinéma",e:"cinema",pos:"n",u:4,t:"F"},
{f:"le club",e:"club",pos:"n",u:4,t:"F"},
{f:"le concert",e:"concert",pos:"n",u:4,t:"F"},
{f:"le concours",e:"competition, entrance exam",pos:"n",u:4,t:"F"},
{f:"la copine",e:"friend (f), girlfriend",pos:"n",u:4,t:"F"},
{f:"la course",e:"race, shopping",pos:"n",u:4,t:"F"},
{f:"les courses (fpl)",e:"food shopping",pos:"n",u:4,t:"F"},
{f:"la culture",e:"culture",pos:"n",u:4,t:"F"},
{f:"le défi",e:"challenge",pos:"n",u:4,t:"F"},
{f:"le dîner",e:"dinner",pos:"n",u:4,t:"F"},
{f:"l'émission (f)",e:"TV programme",pos:"n",u:4,t:"F"},
{f:"l'entrée (f)",e:"entrance, starter",pos:"n",u:4,t:"F",faux_ami:true,faux_ami_trap:"entry"},
{f:"l'équipe (f)",e:"team",pos:"n",u:4,t:"F"},
{f:"l'euro (m)",e:"euro",pos:"n",u:4,t:"F"},
{f:"l'événement (m)",e:"event",pos:"n",u:4,t:"F"},
{f:"l'exercice (m)",e:"exercise",pos:"n",u:4,t:"F"},
{f:"le festival",e:"festival",pos:"n",u:4,t:"F"},
{f:"la fête",e:"party, festival",pos:"n",u:4,t:"F"},
{f:"le film",e:"film",pos:"n",u:4,t:"F"},
{f:"le foot(ball)",e:"football, soccer",pos:"n",u:4,t:"F"},
{f:"le fromage",e:"cheese",pos:"n",u:4,t:"F"},
{f:"les frites (fpl)",e:"chips",pos:"n",u:4,t:"F"},
{f:"le fruit",e:"fruit",pos:"n",u:4,t:"F"},
{f:"le gâteau",e:"cake",pos:"n",u:4,t:"F"},
{f:"le goût",e:"taste, flavour",pos:"n",u:4,t:"F"},
{f:"le groupe",e:"group",pos:"n",u:4,t:"F"},
{f:"l'instrument (m)",e:"instrument",pos:"n",u:4,t:"F"},
{f:"l'intérêt (m)",e:"interest",pos:"n",u:4,t:"F"},
{f:"l'internet (m)",e:"internet",pos:"n",u:4,t:"F"},
{f:"le jeu",e:"game",pos:"n",u:4,t:"F"},
{f:"le journal / les journaux",e:"newspaper(s)",pos:"n",u:4,t:"F"},
{f:"le le Tour de France",e:"Tour de France",pos:"n",u:4,t:"F"},
{f:"le légume",e:"vegetable",pos:"n",u:4,t:"F"},
{f:"le livre",e:"book",pos:"n",u:4,t:"F"},
{f:"le match",e:"match",pos:"n",u:4,t:"F"},
{f:"le matin",e:"morning",pos:"n",u:4,t:"F"},
{f:"le membre",e:"member",pos:"n",u:4,t:"F"},
{f:"la mode",e:"way, fashion",pos:"n",u:4,t:"F"},
{f:"la montagne",e:"mountain",pos:"n",u:4,t:"F"},
{f:"le musée",e:"museum",pos:"n",u:4,t:"F"},
{f:"la musique",e:"music",pos:"n",u:4,t:"F"},
{f:"la natation",e:"swimming",pos:"n",u:4,t:"F"},
{f:"la nourriture",e:"food",pos:"n",u:4,t:"F"},
{f:"l'ordinateur (m)",e:"computer",pos:"n",u:4,t:"F"},
{f:"le pantalon",e:"trousers",pos:"n",u:4,t:"F"},
{f:"le parc",e:"park",pos:"n",u:4,t:"F"},
{f:"les paroles (fpl)",e:"lyrics",pos:"n",u:4,t:"F"},
{f:"la participation",e:"participation",pos:"n",u:4,t:"F"},
{f:"la partie",e:"part, game, match",pos:"n",u:4,t:"F"},
{f:"le passe-temps",e:"hobby",pos:"n",u:4,t:"F"},
{f:"le personnage",e:"character, person",pos:"n",u:4,t:"F"},
{f:"la photo",e:"photo",pos:"n",u:4,t:"F"},
{f:"la pièce",e:"piece, room, play",pos:"n",u:4,t:"F"},
{f:"la piscine",e:"swimming pool",pos:"n",u:4,t:"F"},
{f:"la place",e:"room, space, square",pos:"n",u:4,t:"F"},
{f:"la plage",e:"beach",pos:"n",u:4,t:"F"},
{f:"le poisson",e:"fish",pos:"n",u:4,t:"F"},
{f:"le prix",e:"price, prize",pos:"n",u:4,t:"F"},
{f:"la radio",e:"radio",pos:"n",u:4,t:"F"},
{f:"la réalité",e:"reality",pos:"n",u:4,t:"F"},
{f:"la recette",e:"recipe",pos:"n",u:4,t:"F"},
{f:"le repas",e:"meal",pos:"n",u:4,t:"F"},
{f:"le restaurant",e:"restaurant",pos:"n",u:4,t:"F"},
{f:"le roman",e:"novel",pos:"n",u:4,t:"F"},
{f:"le sac",e:"bag, sack",pos:"n",u:4,t:"F"},
{f:"la santé",e:"health",pos:"n",u:4,t:"F"},
{f:"le serveur",e:"waiter, server",pos:"n",u:4,t:"F"},
{f:"le shopping",e:"shopping",pos:"n",u:4,t:"F"},
{f:"la soif",e:"thirst",pos:"n",u:4,t:"F"},
{f:"la soirée",e:"evening",pos:"n",u:4,t:"F",synonym_group:"evening",synonym_order:2,synonym_note:"soir = evening as a point in time (ce soir = this evening); soirée = evening as a duration or event (also a party)"},
{f:"le soir",e:"evening",pos:"n",u:4,t:"F",synonym_group:"evening",synonym_order:1,synonym_note:"soir = evening as a point in time (ce soir = this evening); soirée = evening as a duration or event (also a party)"},
{f:"le soleil",e:"sun",pos:"n",u:4,t:"F"},
{f:"le sport",e:"sport",pos:"n",u:4,t:"F"},
{f:"le stade",e:"stadium",pos:"n",u:4,t:"F"},
{f:"le style",e:"style",pos:"n",u:4,t:"F"},
{f:"la table",e:"table",pos:"n",u:4,t:"F"},
{f:"la taille",e:"size, height",pos:"n",u:4,t:"F"},
{f:"la technologie",e:"technology",pos:"n",u:4,t:"F"},
{f:"la télévision / télé",e:"television",pos:"n",u:4,t:"F"},
{f:"le thé",e:"tea",pos:"n",u:4,t:"F"},
{f:"le théâtre",e:"theatre",pos:"n",u:4,t:"F"},
{f:"le vélo",e:"bike, bicycle",pos:"n",u:4,t:"F"},
{f:"le vêtement",e:"garment, clothing",pos:"n",u:4,t:"F"},
{f:"la viande",e:"meat",pos:"n",u:4,t:"F"},
{f:"la vidéo",e:"video",pos:"n",u:4,t:"F"},
{f:"la visite",e:"visit, tour",pos:"n",u:4,t:"F"},
{f:"le vin",e:"wine",pos:"n",u:4,t:"F"},
{f:"le voyage",e:"trip, journey",pos:"n",u:4,t:"F"},
{f:"le week-end",e:"weekend",pos:"n",u:4,t:"F"},
{f:"l'artiste (m/f)",e:"artist",pos:"n",u:4,t:"F"},
{f:"l'auteur (m/f)",e:"author",pos:"n",u:4,t:"F"},
{f:"acheter",e:"to buy",pos:"v",u:4,t:"F"},
{f:"boire",e:"to drink",pos:"v",u:4,t:"F"},
{f:"célébrer",e:"to celebrate",pos:"v",u:4,t:"F"},
{f:"chanter",e:"to sing",pos:"v",u:4,t:"F"},
{f:"courir",e:"to run",pos:"v",u:4,t:"F"},
{f:"coûter",e:"to cost",pos:"v",u:4,t:"F"},
{f:"danser",e:"to dance",pos:"v",u:4,t:"F"},
{f:"descendre",e:"to go down, get off",pos:"v",u:4,t:"F"},
{f:"écouter",e:"to listen to",pos:"v",u:4,t:"F"},
{f:"écrire",e:"to write",pos:"v",u:4,t:"F"},
{f:"essayer de",e:"to try to",pos:"v",u:4,t:"F"},
{f:"fermer",e:"to close, shut",pos:"v",u:4,t:"F"},
{f:"gagner",e:"to win, earn",pos:"v",u:4,t:"F"},
{f:"s'intéresser à",e:"to be interested in",pos:"v",u:4,t:"F"},
{f:"jouer à / de",e:"to play",pos:"v",u:4,t:"F"},
{f:"lire",e:"to read",pos:"v",u:4,t:"F"},
{f:"manger",e:"to eat",pos:"v",u:4,t:"F"},
{f:"marcher",e:"to walk, work",pos:"v",u:4,t:"F"},
{f:"monter",e:"to go up, climb",pos:"v",u:4,t:"F"},
{f:"ouvrir",e:"to open",pos:"v",u:4,t:"F"},
{f:"participer à",e:"to take part in",pos:"v",u:4,t:"F"},
{f:"payer",e:"to pay",pos:"v",u:4,t:"F"},
{f:"perdre",e:"to lose",pos:"v",u:4,t:"F"},
{f:"raconter",e:"to tell, narrate",pos:"v",u:4,t:"F",synonym_group:"to tell / say",synonym_order:2,synonym_note:"dire = to say or tell (general); raconter = to tell a story or narrate; déclarer = to declare or state formally"},
{f:"recommander",e:"to recommend",pos:"v",u:4,t:"F"},
{f:"regarder",e:"to watch, look at",pos:"v",u:4,t:"F"},
{f:"remplir",e:"to fill",pos:"v",u:4,t:"F"},
{f:"rencontrer",e:"to meet",pos:"v",u:4,t:"F"},
{f:"réserver",e:"to reserve, book",pos:"v",u:4,t:"F"},
{f:"rire",e:"to laugh",pos:"v",u:4,t:"F"},
{f:"se relaxer",e:"to relax",pos:"v",u:4,t:"F"},
{f:"se situer",e:"to be situated",pos:"v",u:4,t:"F"},
{f:"sortir",e:"to go out",pos:"v",u:4,t:"F"},
{f:"télécharger",e:"to download",pos:"v",u:4,t:"F"},
{f:"visiter",e:"to visit",pos:"v",u:4,t:"F"},
// ── U4 HIGHER ──
{f:"l'achat (m)",e:"purchase",pos:"n",u:4,t:"H"},
{f:"l'addition (f)",e:"bill",pos:"n",u:4,t:"H"},
{f:"l'art (m)",e:"art",pos:"n",u:4,t:"H"},
{f:"le chapeau",e:"hat",pos:"n",u:4,t:"H"},
{f:"le chapitre",e:"chapter",pos:"n",u:4,t:"H"},
{f:"la concurrence",e:"competition",pos:"n",u:4,t:"H"},
{f:"le consommateur",e:"consumer, customer",pos:"n",u:4,t:"H"},
{f:"le couteau",e:"knife",pos:"n",u:4,t:"H"},
{f:"l'effet (m)",e:"effect",pos:"n",u:4,t:"H"},
{f:"l'équipement (m)",e:"equipment",pos:"n",u:4,t:"H"},
{f:"la formation",e:"training",pos:"n",u:4,t:"H"},
{f:"le genre",e:"type, kind, sort",pos:"n",u:4,t:"H"},
{f:"l'impôt (m)",e:"tax",pos:"n",u:4,t:"H"},
{f:"la météo",e:"weather forecast",pos:"n",u:4,t:"H"},
{f:"l'ouverture (f)",e:"opening",pos:"n",u:4,t:"H"},
{f:"la passion",e:"passion",pos:"n",u:4,t:"H"},
{f:"le plat",e:"dish",pos:"n",u:4,t:"H"},
{f:"le plaisir",e:"pleasure",pos:"n",u:4,t:"H"},
{f:"le poulet",e:"chicken",pos:"n",u:4,t:"H"},
{f:"le public",e:"public, audience",pos:"n",u:4,t:"H"},
{f:"le risque",e:"risk",pos:"n",u:4,t:"H"},
{f:"la rivière",e:"river",pos:"n",u:4,t:"H"},
{f:"le rôle",e:"role",pos:"n",u:4,t:"H"},
{f:"le rythme",e:"rhythm, rate",pos:"n",u:4,t:"H"},
{f:"la scène",e:"stage, scene",pos:"n",u:4,t:"H"},
{f:"la série",e:"series",pos:"n",u:4,t:"H"},
{f:"le terrain",e:"ground, terrain",pos:"n",u:4,t:"H"},
{f:"le ticket",e:"ticket",pos:"n",u:4,t:"H",synonym_group:"ticket",synonym_order:2,synonym_note:"billet = ticket for transport or events (also means banknote); ticket = ticket for local transport or a receipt"},
{f:"le verre",e:"glass",pos:"n",u:4,t:"H"},
{f:"la victoire",e:"victory",pos:"n",u:4,t:"H"},
{f:"la vitesse",e:"speed",pos:"n",u:4,t:"H"},
{f:"appartenir",e:"to belong",pos:"v",u:4,t:"H"},
{f:"blesser",e:"to hurt, injure",pos:"v",u:4,t:"H"},
{f:"commander",e:"to order",pos:"v",u:4,t:"H",faux_ami:true,faux_ami_trap:"to command"},
{f:"dessiner",e:"to draw",pos:"v",u:4,t:"H"},
{f:"se diriger",e:"to make one's way",pos:"v",u:4,t:"H"},
{f:"mener",e:"to lead",pos:"v",u:4,t:"H"},
{f:"nager",e:"to swim",pos:"v",u:4,t:"H"},
{f:"pratiquer",e:"to do, play, practise",pos:"v",u:4,t:"H"},
{f:"profiter de",e:"to enjoy, make the most of",pos:"v",u:4,t:"H",faux_ami:true,faux_ami_trap:"to profit from"},
{f:"risquer de",e:"to risk",pos:"v",u:4,t:"H"},
{f:"annuler",e:"to cancel, undo",pos:"v",u:4,t:"H"},
// ── U5 FOUNDATION ── Customs, festivals & celebrations
{f:"bouddhiste",e:"Buddhist",pos:"adj",u:5,t:"F"},
{f:"chrétien",e:"Christian",pos:"adj",u:5,t:"F"},
{f:"culturel",e:"cultural",pos:"adj",u:5,t:"F"},
{f:"familial",e:"family (adj)",pos:"adj",u:5,t:"F"},
{f:"férié",e:"public holiday (adj)",pos:"adj",u:5,t:"F"},
{f:"folle / fou",e:"crazy",pos:"adj",u:5,t:"F"},
{f:"historique",e:"historic",pos:"adj",u:5,t:"F"},
{f:"international",e:"international",pos:"adj",u:5,t:"F"},
{f:"juif",e:"Jewish",pos:"adj",u:5,t:"F"},
{f:"local",e:"local",pos:"adj",u:5,t:"F"},
{f:"musulman",e:"Muslim",pos:"adj",u:5,t:"F"},
{f:"national",e:"national",pos:"adj",u:5,t:"F"},
{f:"régional",e:"regional",pos:"adj",u:5,t:"F"},
{f:"religieux",e:"religious",pos:"adj",u:5,t:"F"},
{f:"spécial",e:"special",pos:"adj",u:5,t:"F"},
{f:"traditionnel",e:"traditional",pos:"adj",u:5,t:"F"},
{f:"félicitations",e:"congratulations",pos:"intj",u:5,t:"F"},
{f:"l'anniversaire (m)",e:"birthday",pos:"n",u:5,t:"F"},
{f:"le bruit",e:"noise",pos:"n",u:5,t:"F"},
{f:"le cadeau",e:"present, gift",pos:"n",u:5,t:"F"},
{f:"la chanson",e:"song",pos:"n",u:5,t:"F"},
{f:"la cuisine",e:"cooking, kitchen",pos:"n",u:5,t:"F"},
{f:"la culture",e:"culture",pos:"n",u:5,t:"F"},
{f:"la date",e:"date",pos:"n",u:5,t:"F"},
{f:"le défilé",e:"parade, procession",pos:"n",u:5,t:"F"},
{f:"l'église (f)",e:"church",pos:"n",u:5,t:"F"},
{f:"l'événement (m)",e:"event",pos:"n",u:5,t:"F"},
{f:"l'expérience (f)",e:"experience",pos:"n",u:5,t:"F"},
{f:"la fête",e:"party, festival",pos:"n",u:5,t:"F"},
{f:"la Fête Nationale",e:"Bastille Day",pos:"n",u:5,t:"F"},
{f:"le festival",e:"festival",pos:"n",u:5,t:"F"},
{f:"le feu",e:"fire",pos:"n",u:5,t:"F"},
{f:"feu d'artifice",e:"firework display",pos:"phrase",u:5,t:"F"},
{f:"la fleur",e:"flower",pos:"n",u:5,t:"F"},
{f:"le gâteau",e:"cake",pos:"n",u:5,t:"F"},
{f:"l'intérêt (m)",e:"interest",pos:"n",u:5,t:"F"},
{f:"le lendemain",e:"next day",pos:"n",u:5,t:"F"},
{f:"la lumière",e:"light",pos:"n",u:5,t:"F"},
{f:"le mariage",e:"marriage, wedding",pos:"n",u:5,t:"F"},
{f:"le monde",e:"world",pos:"n",u:5,t:"F"},
{f:"la mosquée",e:"mosque",pos:"n",u:5,t:"F"},
{f:"la musique",e:"music",pos:"n",u:5,t:"F"},
{f:"Noël",e:"Christmas",pos:"n",u:5,t:"F"},
{f:"le PACS",e:"civil partnership",pos:"n",u:5,t:"F"},
{f:"la participation",e:"participation",pos:"n",u:5,t:"F"},
{f:"Pâques",e:"Easter",pos:"n",u:5,t:"F"},
{f:"la religion",e:"religion",pos:"n",u:5,t:"F"},
{f:"le repas",e:"meal",pos:"n",u:5,t:"F"},
{f:"Saint Valentin",e:"Valentine's Day",pos:"n",u:5,t:"F"},
{f:"le siècle",e:"century",pos:"n",u:5,t:"F"},
{f:"la société",e:"society",pos:"n",u:5,t:"F"},
{f:"la soirée",e:"evening",pos:"n",u:5,t:"F"},
{f:"le spectacle",e:"sight, show",pos:"n",u:5,t:"F"},
{f:"la surprise",e:"surprise",pos:"n",u:5,t:"F"},
{f:"la synagogue",e:"synagogue",pos:"n",u:5,t:"F"},
{f:"le temple",e:"temple",pos:"n",u:5,t:"F"},
{f:"la tradition",e:"tradition",pos:"n",u:5,t:"F"},
{f:"les vacances (fpl)",e:"holiday",pos:"n",u:5,t:"F"},
{f:"le vêtement",e:"garment, clothing",pos:"n",u:5,t:"F"},
{f:"la visite",e:"visit, tour",pos:"n",u:5,t:"F"},
{f:"l'Aïd (m)",e:"Eid",pos:"n",u:5,t:"F"},
{f:"le vin",e:"wine",pos:"n",u:5,t:"F"},
{f:"acheter",e:"to buy",pos:"v",u:5,t:"F"},
{f:"cacher",e:"to hide",pos:"v",u:5,t:"F"},
{f:"célébrer",e:"to celebrate",pos:"v",u:5,t:"F"},
{f:"chanter",e:"to sing",pos:"v",u:5,t:"F"},
{f:"communiquer",e:"to communicate",pos:"v",u:5,t:"F"},
{f:"croire",e:"to believe",pos:"v",u:5,t:"F"},
{f:"danser",e:"to dance",pos:"v",u:5,t:"F"},
{f:"découvrir",e:"to discover",pos:"v",u:5,t:"F"},
{f:"donner",e:"to give",pos:"v",u:5,t:"F"},
{f:"envoyer",e:"to send",pos:"v",u:5,t:"F"},
{f:"inviter",e:"to invite",pos:"v",u:5,t:"F"},
{f:"se marier avec",e:"to get married to",pos:"v",u:5,t:"F"},
{f:"organiser",e:"to organise",pos:"v",u:5,t:"F"},
{f:"partager",e:"to share",pos:"v",u:5,t:"F"},
{f:"participer à",e:"to take part in",pos:"v",u:5,t:"F"},
{f:"passer",e:"to spend (time)",pos:"v",u:5,t:"F"},
{f:"se préparer",e:"to get ready",pos:"v",u:5,t:"F"},
{f:"recevoir",e:"to receive",pos:"v",u:5,t:"F"},
{f:"regarder",e:"to watch",pos:"v",u:5,t:"F"},
{f:"réserver",e:"to book, reserve",pos:"v",u:5,t:"F"},
{f:"surprendre",e:"to surprise",pos:"v",u:5,t:"F"},
// ── U5 HIGHER ──
{f:"belge",e:"Belgian",pos:"adj",u:5,t:"H"},
{f:"catholique",e:"Catholic",pos:"adj",u:5,t:"H"},
{f:"francophone",e:"French-speaking",pos:"adj",u:5,t:"H"},
{f:"joyeux",e:"merry, joyful, happy",pos:"adj",u:5,t:"H",synonym_group:"happy",synonym_order:2,synonym_note:"heureux = happy (general, deep contentment); joyeux = joyful or merry (more animated, e.g. Joyeux Noël); content = pleased or satisfied (often more temporary)"},
{f:"vif",e:"lively",pos:"adj",u:5,t:"H"},
{f:"le bonheur",e:"happiness",pos:"n",u:5,t:"H"},
{f:"le dieu",e:"god",pos:"n",u:5,t:"H"},
{f:"la diversité",e:"diversity",pos:"n",u:5,t:"H"},
{f:"la foi",e:"faith",pos:"n",u:5,t:"H"},
{f:"l'humanité (f)",e:"humanity",pos:"n",u:5,t:"H"},
{f:"la joie",e:"joy",pos:"n",u:5,t:"H"},
{f:"le plat",e:"dish",pos:"n",u:5,t:"H"},
{f:"le roi",e:"king",pos:"n",u:5,t:"H"},
{f:"assister à",e:"to attend",pos:"v",u:5,t:"H"},
{f:"brûler",e:"to burn",pos:"v",u:5,t:"H"},
{f:"féliciter",e:"to congratulate",pos:"v",u:5,t:"H"},
{f:"lancer",e:"to throw, launch",pos:"v",u:5,t:"H",synonym_group:"to throw",synonym_order:2,synonym_note:"jeter = to throw away or toss casually; lancer = to throw with force, or to launch"},
{f:"offrir à",e:"to give (someone), offer",pos:"v",u:5,t:"H"},
{f:"prier",e:"to pray",pos:"v",u:5,t:"H"},
{f:"profiter de",e:"to make the most of",pos:"v",u:5,t:"H"},
{f:"se rappeler",e:"to remember",pos:"v",u:5,t:"H"},
{f:"unir",e:"to unite, join",pos:"v",u:5,t:"H"},
// ── U6 FOUNDATION ── Celebrity culture
{f:"célèbre",e:"famous",pos:"adj",u:6,t:"F"},
{f:"culturel",e:"cultural",pos:"adj",u:6,t:"F"},
{f:"extraordinaire",e:"extraordinary",pos:"adj",u:6,t:"F"},
{f:"fier",e:"proud",pos:"adj",u:6,t:"F"},
{f:"international",e:"international",pos:"adj",u:6,t:"F"},
{f:"local",e:"local",pos:"adj",u:6,t:"F"},
{f:"national",e:"national",pos:"adj",u:6,t:"F"},
{f:"populaire",e:"popular",pos:"adj",u:6,t:"F"},
{f:"public / publique",e:"public",pos:"adj",u:6,t:"F"},
{f:"riche",e:"rich",pos:"adj",u:6,t:"F"},
{f:"spécial",e:"special",pos:"adj",u:6,t:"F"},
{f:"l'acteur (m)",e:"actor",pos:"n",u:6,t:"F"},
{f:"l'argent (m)",e:"money",pos:"n",u:6,t:"F"},
{f:"l'artiste (m/f)",e:"artist",pos:"n",u:6,t:"F"},
{f:"l'auteur (m/f)",e:"author",pos:"n",u:6,t:"F"},
{f:"la carrière",e:"career",pos:"n",u:6,t:"F"},
{f:"la célébrité",e:"celebrity",pos:"n",u:6,t:"F"},
{f:"la chanson",e:"song",pos:"n",u:6,t:"F"},
{f:"le chanteur",e:"singer",pos:"n",u:6,t:"F"},
{f:"le cinéma",e:"cinema",pos:"n",u:6,t:"F"},
{f:"le concert",e:"concert",pos:"n",u:6,t:"F"},
{f:"l'écrivain (m)",e:"writer",pos:"n",u:6,t:"F"},
{f:"l'émission (f)",e:"TV programme",pos:"n",u:6,t:"F"},
{f:"l'entretien (m)",e:"interview",pos:"n",u:6,t:"F"},
{f:"l'équipe (f)",e:"team",pos:"n",u:6,t:"F"},
{f:"le film",e:"film",pos:"n",u:6,t:"F"},
{f:"la génération",e:"generation",pos:"n",u:6,t:"F"},
{f:"le groupe",e:"group",pos:"n",u:6,t:"F"},
{f:"l'identité (f)",e:"identity",pos:"n",u:6,t:"F"},
{f:"l'influence (f)",e:"influence",pos:"n",u:6,t:"F"},
{f:"l'influenceur (m)",e:"influencer",pos:"n",u:6,t:"F"},
{f:"l'internet (m)",e:"internet",pos:"n",u:6,t:"F"},
{f:"le journal / les journaux",e:"newspaper(s)",pos:"n",u:6,t:"F"},
{f:"le mariage",e:"marriage, wedding",pos:"n",u:6,t:"F"},
{f:"les médias (mpl)",e:"media",pos:"n",u:6,t:"F"},
{f:"la mode",e:"way, fashion",pos:"n",u:6,t:"F"},
{f:"le monde",e:"world",pos:"n",u:6,t:"F"},
{f:"la musique",e:"music",pos:"n",u:6,t:"F"},
{f:"les paroles (fpl)",e:"lyrics",pos:"n",u:6,t:"F"},
{f:"le personnage",e:"character, person",pos:"n",u:6,t:"F"},
{f:"la personnalité",e:"personality",pos:"n",u:6,t:"F"},
{f:"la photo",e:"photo",pos:"n",u:6,t:"F"},
{f:"la politique",e:"politics",pos:"n",u:6,t:"F"},
{f:"le prix",e:"price, prize",pos:"n",u:6,t:"F"},
{f:"la réalité",e:"reality",pos:"n",u:6,t:"F"},
{f:"le selfie",e:"selfie",pos:"n",u:6,t:"F"},
{f:"le spectacle",e:"sight, show",pos:"n",u:6,t:"F"},
{f:"le sport",e:"sport",pos:"n",u:6,t:"F"},
{f:"la star",e:"star, celebrity",pos:"n",u:6,t:"F",faux_ami:true,faux_ami_trap:"star (= celestial body)"},
{f:"le style",e:"style",pos:"n",u:6,t:"F"},
{f:"le succès",e:"success",pos:"n",u:6,t:"F"},
{f:"la télévision / télé",e:"television",pos:"n",u:6,t:"F"},
{f:"le thème",e:"theme, topic",pos:"n",u:6,t:"F"},
{f:"la tour",e:"tower, tour",pos:"n",u:6,t:"F"},
{f:"la vidéo",e:"video",pos:"n",u:6,t:"F"},
{f:"certains",e:"some people",pos:"n",u:6,t:"F"},
{f:"chanter",e:"to sing",pos:"v",u:6,t:"F"},
{f:"écouter",e:"to listen to",pos:"v",u:6,t:"F"},
{f:"entrer",e:"to enter, go in",pos:"v",u:6,t:"F"},
{f:"exprimer",e:"to express",pos:"v",u:6,t:"F"},
{f:"jouer à / de",e:"to play",pos:"v",u:6,t:"F"},
{f:"porter",e:"to wear, carry",pos:"v",u:6,t:"F"},
{f:"raconter",e:"to tell, narrate",pos:"v",u:6,t:"F"},
{f:"regarder",e:"to watch, look at",pos:"v",u:6,t:"F"},
{f:"suivre",e:"to follow",pos:"v",u:6,t:"F"},
// ── U6 HIGHER ──
{f:"francophone",e:"French-speaking",pos:"adj",u:6,t:"H"},
{f:"puissant",e:"powerful",pos:"adj",u:6,t:"H",faux_ami:true,faux_ami_trap:"puissant (rare archaic English)"},
{f:"unique",e:"unique",pos:"adj",u:6,t:"H"},
{f:"le contexte",e:"context",pos:"n",u:6,t:"H"},
{f:"l'étoile (f)",e:"star",pos:"n",u:6,t:"H"},
{f:"l'héroïne (f)",e:"hero (f)",pos:"n",u:6,t:"H"},
{f:"l'héros (m)",e:"hero (m)",pos:"n",u:6,t:"H"},
{f:"l'image (f)",e:"picture, image",pos:"n",u:6,t:"H"},
{f:"l'individu (m)",e:"individual",pos:"n",u:6,t:"H"},
{f:"la marque",e:"brand, mark",pos:"n",u:6,t:"H"},
{f:"l'ouverture (f)",e:"opening",pos:"n",u:6,t:"H"},
{f:"la presse",e:"press",pos:"n",u:6,t:"H"},
{f:"le public",e:"public, audience",pos:"n",u:6,t:"H"},
{f:"la richesse",e:"wealth",pos:"n",u:6,t:"H"},
{f:"le rôle",e:"role",pos:"n",u:6,t:"H"},
{f:"le scandale",e:"scandal",pos:"n",u:6,t:"H"},
{f:"la série",e:"series",pos:"n",u:6,t:"H"},
{f:"le titre",e:"title",pos:"n",u:6,t:"H"},
{f:"la tournée",e:"tour",pos:"n",u:6,t:"H"},
{f:"la victime",e:"victim",pos:"n",u:6,t:"H"},
{f:"la voix",e:"voice",pos:"n",u:6,t:"H"},
{f:"annoncer",e:"to announce",pos:"v",u:6,t:"H"},
{f:"se diriger",e:"to make one's way",pos:"v",u:6,t:"H"},
{f:"s'inspirer de",e:"to be inspired by",pos:"v",u:6,t:"H"},
{f:"persuader de",e:"to persuade to",pos:"v",u:6,t:"H"},
{f:"présenter",e:"to present, introduce",pos:"v",u:6,t:"H"},
{f:"se rappeler",e:"to remember",pos:"v",u:6,t:"H"},
{f:"reconnaître",e:"to recognise",pos:"v",u:6,t:"H"},
{f:"représenter",e:"to represent",pos:"v",u:6,t:"H"},
{f:"respecter",e:"to respect",pos:"v",u:6,t:"H"},
// ── U7 FOUNDATION ── Travel & tourism
{f:"l'aéroport (m)",e:"airport",pos:"n",u:7,t:"F"},
{f:"l'arrivée (f)",e:"arrival",pos:"n",u:7,t:"F"},
{f:"l'autobus / bus (m)",e:"bus",pos:"n",u:7,t:"F"},
{f:"l'avion (m)",e:"aeroplane",pos:"n",u:7,t:"F"},
{f:"le bateau",e:"boat, ship",pos:"n",u:7,t:"F"},
{f:"la capitale",e:"capital city",pos:"n",u:7,t:"F"},
{f:"la carte",e:"map, menu, card",pos:"n",u:7,t:"F"},
{f:"le château",e:"castle, palace",pos:"n",u:7,t:"F"},
{f:"la côte",e:"coast",pos:"n",u:7,t:"F"},
{f:"le départ",e:"departure",pos:"n",u:7,t:"F"},
{f:"la découverte",e:"discovery",pos:"n",u:7,t:"F"},
{f:"l'église (f)",e:"church",pos:"n",u:7,t:"F"},
{f:"l'endroit (m)",e:"place, spot",pos:"n",u:7,t:"F"},
{f:"l'est (m)",e:"east",pos:"n",u:7,t:"F"},
{f:"l'hôtel (m)",e:"hotel",pos:"n",u:7,t:"F"},
{f:"l'île (f)",e:"island",pos:"n",u:7,t:"F"},
{f:"le jardin",e:"garden",pos:"n",u:7,t:"F"},
{f:"la gare",e:"railway station",pos:"n",u:7,t:"F"},
{f:"la mer",e:"sea",pos:"n",u:7,t:"F"},
{f:"le midi",e:"noon",pos:"n",u:7,t:"F"},
{f:"la montagne",e:"mountain",pos:"n",u:7,t:"F"},
{f:"le musée",e:"museum",pos:"n",u:7,t:"F"},
{f:"le nord",e:"north",pos:"n",u:7,t:"F"},
{f:"l'ouest (m)",e:"west",pos:"n",u:7,t:"F"},
{f:"le parc",e:"park",pos:"n",u:7,t:"F"},
{f:"le pays",e:"country",pos:"n",u:7,t:"F"},
{f:"la plage",e:"beach",pos:"n",u:7,t:"F"},
{f:"la porte",e:"door",pos:"n",u:7,t:"F"},
{f:"la région",e:"region, area",pos:"n",u:7,t:"F"},
{f:"le retour",e:"return",pos:"n",u:7,t:"F"},
{f:"la rivière",e:"river",pos:"n",u:7,t:"F"},
{f:"la route",e:"road",pos:"n",u:7,t:"F"},
{f:"la rue",e:"street",pos:"n",u:7,t:"F"},
{f:"la station",e:"station",pos:"n",u:7,t:"F"},
{f:"le sud",e:"south",pos:"n",u:7,t:"F"},
{f:"le touriste",e:"tourist",pos:"n",u:7,t:"F"},
{f:"le train",e:"train",pos:"n",u:7,t:"F"},
{f:"le transport",e:"transportation",pos:"n",u:7,t:"F"},
{f:"le véhicule",e:"vehicle",pos:"n",u:7,t:"F"},
{f:"le village",e:"village",pos:"n",u:7,t:"F"},
{f:"la ville",e:"town",pos:"n",u:7,t:"F"},
{f:"la visite",e:"visit, tour",pos:"n",u:7,t:"F"},
{f:"la voiture",e:"car",pos:"n",u:7,t:"F"},
{f:"le voyage",e:"trip, journey",pos:"n",u:7,t:"F"},
{f:"le Maroc",e:"Morocco",pos:"n",u:7,t:"F"},
{f:"la France",e:"France",pos:"n",u:7,t:"F"},
{f:"la Belgique",e:"Belgium",pos:"n",u:7,t:"F"},
{f:"la Suisse",e:"Switzerland",pos:"n",u:7,t:"F"},
{f:"le Canada",e:"Canada",pos:"n",u:7,t:"F"},
{f:"le Québec",e:"Quebec",pos:"n",u:7,t:"F"},
{f:"le Sénégal",e:"Senegal",pos:"n",u:7,t:"F"},
{f:"la Réunion",e:"Reunion Island",pos:"n",u:7,t:"F"},
{f:"Paris",e:"Paris",pos:"n",u:7,t:"F"},
{f:"conduire",e:"to drive",pos:"v",u:7,t:"F"},
{f:"découvrir",e:"to discover",pos:"v",u:7,t:"F"},
{f:"monter",e:"to go up",pos:"v",u:7,t:"F"},
{f:"partir",e:"to leave",pos:"v",u:7,t:"F",synonym_group:"to leave",synonym_order:2,synonym_note:"quitter takes a direct object (quitter un endroit / une personne); partir is intransitive (to set off)"},
{f:"passer",e:"to spend (time)",pos:"v",u:7,t:"F"},
{f:"rentrer",e:"to return home",pos:"v",u:7,t:"F"},
{f:"réserver",e:"to book, reserve",pos:"v",u:7,t:"F"},
{f:"retourner",e:"to return, go back",pos:"v",u:7,t:"F"},
{f:"traverser",e:"to cross",pos:"v",u:7,t:"F"},
{f:"visiter",e:"to visit",pos:"v",u:7,t:"F"},
{f:"voyager",e:"to travel",pos:"v",u:7,t:"F"},
// ── U7 HIGHER ──
{f:"l'appartement (m)",e:"apartment, flat",pos:"n",u:7,t:"H"},
{f:"le bâtiment",e:"building",pos:"n",u:7,t:"H"},
{f:"la cité",e:"council estate",pos:"n",u:7,t:"H"},
{f:"la frontière",e:"border",pos:"n",u:7,t:"H"},
{f:"l'habitant (m)",e:"resident",pos:"n",u:7,t:"H"},
{f:"le logement",e:"accommodation",pos:"n",u:7,t:"H"},
{f:"le mur",e:"wall",pos:"n",u:7,t:"H"},
{f:"la province",e:"province",pos:"n",u:7,t:"H"},
{f:"le quartier",e:"district, quarter",pos:"n",u:7,t:"H"},
{f:"la voie",e:"street, route, way",pos:"n",u:7,t:"H"},
{f:"accompagner",e:"to accompany",pos:"v",u:7,t:"H"},
{f:"se diriger",e:"to make one's way",pos:"v",u:7,t:"H"},
{f:"habiter",e:"to live (somewhere)",pos:"v",u:7,t:"H",synonym_group:"to live (somewhere)",synonym_order:1,synonym_note:"habiter = to reside at a specific address; vivre = to live more broadly, also to be alive"},
{f:"se situer",e:"to be situated",pos:"v",u:7,t:"H"},
// ── U8 FOUNDATION ── Media & technology
{f:"cher",e:"expensive, dear",pos:"adj",u:8,t:"F"},
{f:"dangereux",e:"dangerous",pos:"adj",u:8,t:"F"},
{f:"disponible",e:"available",pos:"adj",u:8,t:"F"},
{f:"facile",e:"easy",pos:"adj",u:8,t:"F"},
{f:"gratuit",e:"free of charge",pos:"adj",u:8,t:"F"},
{f:"inquiétant",e:"worrying, disturbing",pos:"adj",u:8,t:"F"},
{f:"moderne",e:"modern",pos:"adj",u:8,t:"F"},
{f:"populaire",e:"popular",pos:"adj",u:8,t:"F"},
{f:"rapide",e:"fast, quick",pos:"adj",u:8,t:"F"},
{f:"social",e:"social",pos:"adj",u:8,t:"F"},
{f:"sûr",e:"safe, sure",pos:"adj",u:8,t:"F"},
{f:"l'action (f)",e:"action",pos:"n",u:8,t:"F"},
{f:"l'application / appli (f)",e:"application, app",pos:"n",u:8,t:"F"},
{f:"l'appareil (m)",e:"device, apparatus",pos:"n",u:8,t:"F"},
{f:"le blog",e:"blog",pos:"n",u:8,t:"F"},
{f:"la clé",e:"key",pos:"n",u:8,t:"F"},
{f:"la communication",e:"communication",pos:"n",u:8,t:"F"},
{f:"la conversation",e:"conversation",pos:"n",u:8,t:"F"},
{f:"le danger",e:"danger",pos:"n",u:8,t:"F"},
{f:"le dialogue",e:"dialogue",pos:"n",u:8,t:"F"},
{f:"l'écran (m)",e:"screen",pos:"n",u:8,t:"F"},
{f:"l'émission (f)",e:"TV programme",pos:"n",u:8,t:"F"},
{f:"l'équipement (m)",e:"equipment",pos:"n",u:8,t:"F"},
{f:"l'expert (m)",e:"expert",pos:"n",u:8,t:"F"},
{f:"le film",e:"film",pos:"n",u:8,t:"F"},
{f:"la génération",e:"generation",pos:"n",u:8,t:"F"},
{f:"l'influence (f)",e:"influence",pos:"n",u:8,t:"F"},
{f:"l'influenceur (m)",e:"influencer",pos:"n",u:8,t:"F"},
{f:"l'informatique (f)",e:"computer science, computing",pos:"n",u:8,t:"F"},
{f:"l'internet (m)",e:"internet",pos:"n",u:8,t:"F"},
{f:"la jeunesse",e:"youth",pos:"n",u:8,t:"F"},
{f:"le jeu",e:"game",pos:"n",u:8,t:"F"},
{f:"la ligne",e:"line",pos:"n",u:8,t:"F"},
{f:"la lumière",e:"light",pos:"n",u:8,t:"F"},
{f:"le mail / e-mail",e:"e-mail",pos:"n",u:8,t:"F"},
{f:"les médias (mpl)",e:"media",pos:"n",u:8,t:"F"},
{f:"le message",e:"message",pos:"n",u:8,t:"F"},
{f:"le mot",e:"word",pos:"n",u:8,t:"F"},
{f:"l'ordinateur (m)",e:"computer",pos:"n",u:8,t:"F"},
{f:"l'outil (m)",e:"tool",pos:"n",u:8,t:"F"},
{f:"le portable",e:"mobile phone, laptop",pos:"n",u:8,t:"F"},
{f:"la photo",e:"photo",pos:"n",u:8,t:"F"},
{f:"le réseau",e:"network",pos:"n",u:8,t:"F"},
{f:"la santé",e:"health",pos:"n",u:8,t:"F"},
{f:"la sécurité",e:"security, safety",pos:"n",u:8,t:"F"},
{f:"le selfie",e:"selfie",pos:"n",u:8,t:"F"},
{f:"le shopping",e:"shopping",pos:"n",u:8,t:"F"},
{f:"le site",e:"site",pos:"n",u:8,t:"F"},
{f:"le SMS",e:"SMS",pos:"n",u:8,t:"F"},
{f:"le streaming",e:"streaming",pos:"n",u:8,t:"F"},
{f:"la technologie",e:"technology",pos:"n",u:8,t:"F"},
{f:"le téléphone",e:"telephone",pos:"n",u:8,t:"F"},
{f:"la télévision / télé",e:"television",pos:"n",u:8,t:"F"},
{f:"le texte",e:"text",pos:"n",u:8,t:"F"},
{f:"la vidéo",e:"video",pos:"n",u:8,t:"F"},
{f:"acheter",e:"to buy",pos:"v",u:8,t:"F"},
{f:"chatter / tchatter",e:"to chat",pos:"v",u:8,t:"F"},
{f:"communiquer",e:"to communicate",pos:"v",u:8,t:"F"},
{f:"créer",e:"to create",pos:"v",u:8,t:"F",synonym_group:"to make / produce",synonym_order:3,synonym_note:"fabriquer = to manufacture physically; produire = to produce output or results; créer = to create something new"},
{f:"découvrir",e:"to discover",pos:"v",u:8,t:"F"},
{f:"diminuer",e:"to decrease, lower",pos:"v",u:8,t:"F",synonym_group:"to reduce / decrease",synonym_order:2,synonym_note:"largely interchangeable; réduire often implies deliberate action; diminuer can describe a natural decline"},
{f:"écouter",e:"to listen to",pos:"v",u:8,t:"F"},
{f:"enregistrer",e:"to record, save",pos:"v",u:8,t:"F"},
{f:"envoyer",e:"to send",pos:"v",u:8,t:"F"},
{f:"fabriquer",e:"to manufacture, make",pos:"v",u:8,t:"F"},
{f:"jouer à",e:"to play",pos:"v",u:8,t:"F"},
{f:"marcher",e:"to walk, work",pos:"v",u:8,t:"F"},
{f:"partager",e:"to share",pos:"v",u:8,t:"F"},
{f:"poster",e:"to post",pos:"v",u:8,t:"F"},
{f:"protéger",e:"to protect",pos:"v",u:8,t:"F"},
{f:"recevoir",e:"to receive",pos:"v",u:8,t:"F"},
{f:"regarder",e:"to watch",pos:"v",u:8,t:"F"},
{f:"suivre",e:"to follow",pos:"v",u:8,t:"F"},
{f:"télécharger",e:"to download",pos:"v",u:8,t:"F"},
{f:"traduire",e:"to translate",pos:"v",u:8,t:"F"},
{f:"utiliser",e:"to use",pos:"v",u:8,t:"F",synonym_group:"to use",synonym_order:1,synonym_note:"utiliser = most neutral; employer = to use or employ (slightly formal); se servir de = to make use of (idiomatic)"},
{f:"voler",e:"to fly, steal",pos:"v",u:8,t:"F"},
// ── U8 HIGHER ──
{f:"direct",e:"direct",pos:"adj",u:8,t:"H"},
{f:"numérique",e:"digital",pos:"adj",u:8,t:"H",faux_ami:true,faux_ami_trap:"numerical"},
{f:"puissant",e:"powerful",pos:"adj",u:8,t:"H"},
{f:"technique",e:"technical",pos:"adj",u:8,t:"H"},
{f:"directement",e:"directly",pos:"adv",u:8,t:"H"},
{f:"l'achat (m)",e:"purchase",pos:"n",u:8,t:"H"},
{f:"l'appel (m)",e:"call",pos:"n",u:8,t:"H"},
{f:"l'attaque (f)",e:"attack",pos:"n",u:8,t:"H"},
{f:"le commentaire",e:"comment, remark",pos:"n",u:8,t:"H"},
{f:"la communauté",e:"community",pos:"n",u:8,t:"H"},
{f:"le consommateur",e:"consumer, customer",pos:"n",u:8,t:"H"},
{f:"le contenu",e:"contents",pos:"n",u:8,t:"H"},
{f:"le débat",e:"debate",pos:"n",u:8,t:"H"},
{f:"le document",e:"document",pos:"n",u:8,t:"H"},
{f:"l'évolution (f)",e:"evolution",pos:"n",u:8,t:"H"},
{f:"l'image (f)",e:"picture, image",pos:"n",u:8,t:"H"},
{f:"la marque",e:"brand, mark",pos:"n",u:8,t:"H"},
{f:"la protection",e:"protection",pos:"n",u:8,t:"H"},
{f:"la publicité / pub",e:"advert",pos:"n",u:8,t:"H"},
{f:"la puissance",e:"power",pos:"n",u:8,t:"H"},
{f:"la réception",e:"reception",pos:"n",u:8,t:"H"},
{f:"le risque",e:"risk",pos:"n",u:8,t:"H"},
{f:"la série",e:"series",pos:"n",u:8,t:"H"},
{f:"l'utilisation (f)",e:"use",pos:"n",u:8,t:"H"},
{f:"la victime",e:"victim",pos:"n",u:8,t:"H"},
{f:"allumer",e:"to turn on",pos:"v",u:8,t:"H"},
{f:"attaquer",e:"to attack",pos:"v",u:8,t:"H"},
{f:"se casser",e:"to break",pos:"v",u:8,t:"H"},
{f:"cliquer",e:"to click",pos:"v",u:8,t:"H"},
{f:"diffuser",e:"to broadcast",pos:"v",u:8,t:"H",faux_ami:true,faux_ami_trap:"to diffuse"},
{f:"harceler",e:"to bully, harass",pos:"v",u:8,t:"H"},
{f:"s'inscrire à",e:"to join, enrol in",pos:"v",u:8,t:"H"},
{f:"produire",e:"to produce, make",pos:"v",u:8,t:"H",synonym_group:"to make / produce",synonym_order:2,synonym_note:"fabriquer = to manufacture physically; produire = to produce output or results; créer = to create something new"},
{f:"réagir",e:"to react",pos:"v",u:8,t:"H"},
{f:"recharger",e:"to charge (a device)",pos:"v",u:8,t:"H"},
{f:"renvoyer",e:"to send back, resend",pos:"v",u:8,t:"H"},
{f:"souffrir",e:"to suffer",pos:"v",u:8,t:"H"},
{f:"toucher",e:"to touch",pos:"v",u:8,t:"H"},
{f:"unir",e:"to unite, join",pos:"v",u:8,t:"H"},
// ── U9 FOUNDATION ── Environment & where people live
{f:"l'accent (m)",e:"accent",pos:"n",u:9,t:"F"},
{f:"l'appartement (m)",e:"apartment, flat",pos:"n",u:9,t:"F"},
{f:"l'arbre (m)",e:"tree",pos:"n",u:9,t:"F"},
{f:"le bâtiment",e:"building",pos:"n",u:9,t:"F"},
{f:"le bois",e:"wood",pos:"n",u:9,t:"F"},
{f:"la campagne",e:"countryside",pos:"n",u:9,t:"F"},
{f:"la catastrophe",e:"catastrophe, disaster",pos:"n",u:9,t:"F"},
{f:"le centre",e:"centre",pos:"n",u:9,t:"F"},
{f:"le ciel",e:"sky",pos:"n",u:9,t:"F"},
{f:"le climat",e:"climate",pos:"n",u:9,t:"F"},
{f:"le coin",e:"corner",pos:"n",u:9,t:"F"},
{f:"le déchets",e:"rubbish",pos:"n",u:9,t:"F"},
{f:"l'eau (f)",e:"water",pos:"n",u:9,t:"F"},
{f:"l'énergie (f)",e:"energy",pos:"n",u:9,t:"F"},
{f:"l'environnement (m)",e:"environment",pos:"n",u:9,t:"F"},
{f:"la ferme",e:"farm",pos:"n",u:9,t:"F"},
{f:"la forêt",e:"forest",pos:"n",u:9,t:"F"},
{f:"le gaz",e:"gas",pos:"n",u:9,t:"F"},
{f:"l'habitant (m)",e:"resident",pos:"n",u:9,t:"F"},
{f:"l'île (f)",e:"island",pos:"n",u:9,t:"F"},
{f:"le jardin",e:"garden",pos:"n",u:9,t:"F"},
{f:"le logement",e:"accommodation",pos:"n",u:9,t:"F"},
{f:"la maison",e:"house, home",pos:"n",u:9,t:"F"},
{f:"la manifestation",e:"demonstration, event",pos:"n",u:9,t:"F",faux_ami:true,faux_ami_trap:"manifestation"},
{f:"la mer",e:"sea",pos:"n",u:9,t:"F"},
{f:"le monde",e:"world",pos:"n",u:9,t:"F"},
{f:"la montagne",e:"mountain",pos:"n",u:9,t:"F"},
{f:"le mur",e:"wall",pos:"n",u:9,t:"F"},
{f:"la nature",e:"nature",pos:"n",u:9,t:"F"},
{f:"la neige",e:"snow",pos:"n",u:9,t:"F"},
{f:"le nord",e:"north",pos:"n",u:9,t:"F"},
{f:"le parc",e:"park",pos:"n",u:9,t:"F"},
{f:"la pauvreté",e:"poverty",pos:"n",u:9,t:"F"},
{f:"la planète",e:"planet",pos:"n",u:9,t:"F"},
{f:"la pollution",e:"pollution",pos:"n",u:9,t:"F"},
{f:"la poubelle",e:"rubbish bin",pos:"n",u:9,t:"F"},
{f:"le quartier",e:"district, quarter",pos:"n",u:9,t:"F"},
{f:"le réchauffement",e:"warming",pos:"n",u:9,t:"F"},
{f:"le recyclage",e:"recycling",pos:"n",u:9,t:"F"},
{f:"la région",e:"region, area",pos:"n",u:9,t:"F"},
{f:"la route",e:"road",pos:"n",u:9,t:"F"},
{f:"la rue",e:"street",pos:"n",u:9,t:"F"},
{f:"le salon",e:"lounge, living room",pos:"n",u:9,t:"F"},
{f:"le soleil",e:"sun",pos:"n",u:9,t:"F"},
{f:"le sud",e:"south",pos:"n",u:9,t:"F"},
{f:"la technologie",e:"technology",pos:"n",u:9,t:"F"},
{f:"la terre",e:"earth, world, soil",pos:"n",u:9,t:"F"},
{f:"le transport",e:"transportation",pos:"n",u:9,t:"F"},
{f:"le vent",e:"wind",pos:"n",u:9,t:"F"},
{f:"le village",e:"village",pos:"n",u:9,t:"F"},
{f:"la ville",e:"town",pos:"n",u:9,t:"F"},
{f:"les Alpes",e:"the Alps",pos:"n",u:9,t:"F"},
{f:"les Pyrénées",e:"the Pyrenees",pos:"n",u:9,t:"F"},
{f:"la Méditerranée",e:"the Mediterranean",pos:"n",u:9,t:"F"},
{f:"la Manche",e:"the English Channel",pos:"n",u:9,t:"F"},
{f:"détruire",e:"to destroy",pos:"v",u:9,t:"F"},
{f:"habiter",e:"to live (somewhere)",pos:"v",u:9,t:"F"},
{f:"intégrer",e:"to integrate",pos:"v",u:9,t:"F"},
{f:"jeter",e:"to throw",pos:"v",u:9,t:"F",synonym_group:"to throw",synonym_order:1,synonym_note:"jeter = to throw away or toss casually; lancer = to throw with force, or to launch"},
{f:"menacer de",e:"to threaten",pos:"v",u:9,t:"F"},
{f:"polluer",e:"to pollute",pos:"v",u:9,t:"F"},
{f:"protéger",e:"to protect",pos:"v",u:9,t:"F"},
{f:"recycler",e:"to recycle",pos:"v",u:9,t:"F"},
{f:"réduire",e:"to reduce",pos:"v",u:9,t:"F",synonym_group:"to reduce / decrease",synonym_order:1,synonym_note:"largely interchangeable; réduire often implies deliberate action; diminuer can describe a natural decline"},
{f:"traverser",e:"to cross",pos:"v",u:9,t:"F"},
{f:"trouver",e:"to find",pos:"v",u:9,t:"F"},
{f:"vivre",e:"to live",pos:"v",u:9,t:"F",synonym_group:"to live (somewhere)",synonym_order:2,synonym_note:"habiter = to reside at a specific address; vivre = to live more broadly, also to be alive"},
// ── U9 HIGHER ──
{f:"global",e:"global",pos:"adj",u:9,t:"H"},
{f:"mondial",e:"worldwide, global",pos:"adj",u:9,t:"H"},
{f:"nucléaire",e:"nuclear",pos:"adj",u:9,t:"H"},
{f:"occidental",e:"western",pos:"adj",u:9,t:"H"},
{f:"l'arme (f)",e:"weapon, arms",pos:"n",u:9,t:"H"},
{f:"le changement",e:"change",pos:"n",u:9,t:"H"},
{f:"la conséquence",e:"consequence",pos:"n",u:9,t:"H"},
{f:"la démocratie",e:"democracy",pos:"n",u:9,t:"H"},
{f:"l'élection (f)",e:"election",pos:"n",u:9,t:"H"},
{f:"l'espèce (f)",e:"species",pos:"n",u:9,t:"H"},
{f:"la guerre",e:"war",pos:"n",u:9,t:"H"},
{f:"l'humanité (f)",e:"humanity",pos:"n",u:9,t:"H"},
{f:"la libération (f)",e:"liberation",pos:"n",u:9,t:"H"},
{f:"la lutte",e:"struggle, fight",pos:"n",u:9,t:"H"},
{f:"la nécessité",e:"necessity, need",pos:"n",u:9,t:"H"},
{f:"la paix",e:"peace",pos:"n",u:9,t:"H"},
{f:"le plastic",e:"plastic",pos:"n",u:9,t:"H"},
{f:"la population",e:"population",pos:"n",u:9,t:"H"},
{f:"la protection",e:"protection",pos:"n",u:9,t:"H"},
{f:"la république",e:"republic",pos:"n",u:9,t:"H"},
{f:"le taux",e:"rate",pos:"n",u:9,t:"H"},
{f:"la vague",e:"wave",pos:"n",u:9,t:"H"},
{f:"la violence",e:"violence",pos:"n",u:9,t:"H"},
{f:"appartenir",e:"to belong",pos:"v",u:9,t:"H"},
{f:"contribuer",e:"to contribute",pos:"v",u:9,t:"H"},
{f:"disparaître",e:"to disappear",pos:"v",u:9,t:"H"},
{f:"élire",e:"to elect",pos:"v",u:9,t:"H"},
{f:"lutter",e:"to fight, struggle",pos:"v",u:9,t:"H"},
{f:"manifester",e:"to protest, demonstrate",pos:"v",u:9,t:"H",faux_ami:true,faux_ami_trap:"to manifest"},
{f:"risquer de",e:"to risk",pos:"v",u:9,t:"H"},
{f:"sauver",e:"to save, rescue",pos:"v",u:9,t:"H"},
{f:"transformer en",e:"to transform into",pos:"v",u:9,t:"H"},
// ── HIGH-FREQUENCY ADVERBS & TIME WORDS (cross-unit, F tier) ──
{f:"maintenant",e:"now",pos:"adv",u:1,t:"F"},
{f:"aujourd'hui",e:"today",pos:"adv",u:1,t:"F"},
{f:"hier",e:"yesterday",pos:"adv",u:1,t:"F"},
{f:"demain",e:"tomorrow",pos:"adv",u:1,t:"F"},
{f:"bientôt",e:"soon",pos:"adv",u:1,t:"F"},
{f:"déjà",e:"already",pos:"adv",u:1,t:"F"},
{f:"encore",e:"still, again",pos:"adv",u:1,t:"F"},
{f:"toujours",e:"always",pos:"adv",u:1,t:"F"},
{f:"souvent",e:"often",pos:"adv",u:1,t:"F"},
{f:"parfois",e:"sometimes",pos:"adv",u:1,t:"F",synonym_group:"sometimes",synonym_order:1,synonym_note:"fully interchangeable; parfois is slightly more common in formal writing"},
{f:"quelquefois",e:"sometimes",pos:"adv",u:1,t:"F",synonym_group:"sometimes",synonym_order:2,synonym_note:"fully interchangeable; parfois is slightly more common in formal writing"},
{f:"rarement",e:"rarely",pos:"adv",u:1,t:"F"},
{f:"jamais",e:"never",pos:"adv",u:1,t:"F"},
{f:"ne…jamais",e:"never (with verb)",pos:"adv",u:1,t:"F"},
{f:"d'abord",e:"first of all",pos:"adv",u:1,t:"F"},
{f:"ensuite",e:"then, next",pos:"adv",u:1,t:"F",synonym_group:"then / next",synonym_order:1,synonym_note:"largely interchangeable in sequences; puis is slightly more literary"},
{f:"puis",e:"then",pos:"adv",u:1,t:"F",synonym_group:"then / next",synonym_order:2,synonym_note:"largely interchangeable in sequences; puis is slightly more literary"},
{f:"enfin",e:"finally",pos:"adv",u:1,t:"F"},
{f:"soudain",e:"suddenly",pos:"adv",u:1,t:"F"},
{f:"avant",e:"before",pos:"adv",u:1,t:"F"},
{f:"après",e:"after, afterwards",pos:"adv",u:1,t:"F"},
{f:"pendant",e:"during, for (a period)",pos:"adv",u:1,t:"F"},
{f:"quand",e:"when",pos:"adv",u:1,t:"F"},
{f:"normalement",e:"normally",pos:"adv",u:1,t:"F"},
{f:"généralement",e:"generally",pos:"adv",u:1,t:"F"},
{f:"récemment",e:"recently",pos:"adv",u:1,t:"H"},
{f:"actuellement",e:"currently, at the moment",pos:"adv",u:1,t:"H",faux_ami:true,faux_ami_trap:"actually"},
{f:"longtemps",e:"for a long time",pos:"adv",u:1,t:"F"},
{f:"rapidement",e:"quickly, rapidly",pos:"adv",u:1,t:"F"},
{f:"facilement",e:"easily",pos:"adv",u:1,t:"F"},
{f:"vraiment",e:"truly, really",pos:"adv",u:1,t:"F"},
{f:"seulement",e:"only",pos:"adv",u:1,t:"F"},
{f:"partout",e:"everywhere",pos:"adv",u:1,t:"F"},
{f:"assez",e:"quite, enough",pos:"adv",u:1,t:"F"},
{f:"très",e:"very",pos:"adv",u:1,t:"F"},
{f:"trop",e:"too, too much",pos:"adv",u:1,t:"F"},
{f:"beaucoup",e:"a lot",pos:"adv",u:1,t:"F"},
{f:"peu",e:"a little, not much",pos:"adv",u:1,t:"F"},
{f:"tellement",e:"so much",pos:"adv",u:1,t:"F"},
{f:"si",e:"so (+ adj), if",pos:"adv",u:1,t:"F"},
{f:"environ",e:"about, approximately",pos:"adv",u:1,t:"F"},
{f:"tard",e:"late",pos:"adv",u:1,t:"F"},
{f:"tôt",e:"early",pos:"adv",u:1,t:"F"},
{f:"là",e:"there, here",pos:"adv",u:1,t:"F"},
{f:"ici",e:"here",pos:"adv",u:1,t:"F"},
{f:"loin",e:"far",pos:"adv",u:1,t:"F"},
{f:"près",e:"nearby, close by",pos:"adv",u:1,t:"F"},
{f:"dehors",e:"outside",pos:"adv",u:1,t:"F"},
{f:"là-bas",e:"over there",pos:"adv",u:1,t:"F"},
{f:"bien",e:"well",pos:"adv",u:1,t:"F"},
{f:"mal",e:"badly",pos:"adv",u:1,t:"F"},
{f:"mieux",e:"better",pos:"adv",u:1,t:"F"},
{f:"plus",e:"more",pos:"adv",u:1,t:"F"},
{f:"moins",e:"less",pos:"adv",u:1,t:"F"},
{f:"aussi",e:"also, too, as well",pos:"adv",u:1,t:"F"},
{f:"même",e:"even, same",pos:"adv",u:1,t:"F"},
{f:"surtout",e:"especially, above all",pos:"adv",u:1,t:"F"},
{f:"pourtant",e:"yet, nevertheless",pos:"adv",u:1,t:"H",synonym_group:"however",synonym_order:2,synonym_note:"cependant = however (formal, written French); pourtant = yet/nevertheless (emphasises contrast, slightly stronger); par contre = on the other hand (informal, spoken)"},
{f:"cependant",e:"however",pos:"adv",u:1,t:"H",synonym_group:"however",synonym_order:1,synonym_note:"cependant = however (formal, written French); pourtant = yet/nevertheless (emphasises contrast, slightly stronger); par contre = on the other hand (informal, spoken)"},
{f:"d'ailleurs",e:"besides, moreover",pos:"adv",u:1,t:"H"},
{f:"donc",e:"so, therefore",pos:"adv",u:1,t:"F",synonym_group:"therefore / so",synonym_order:1,synonym_note:"donc = therefore or so (logical conclusion); alors = so/then/well (more casual, also means 'at that moment')"},
{f:"alors",e:"so, well, then",pos:"adv",u:1,t:"F",synonym_group:"therefore / so",synonym_order:2,synonym_note:"donc = therefore or so (logical conclusion); alors = so/then/well (more casual, also means 'at that moment')"},
{f:"enfin",e:"finally, at last",pos:"adv",u:1,t:"F"},
{f:"peut-être",e:"maybe, perhaps",pos:"adv",u:1,t:"F",synonym_group:"maybe / perhaps",synonym_order:1,synonym_note:"peut-être = maybe or perhaps (genuine uncertainty); sans doute = probably or no doubt — it actually implies MORE certainty than peut-être, despite the word 'doute'"},
{f:"heureusement",e:"fortunately",pos:"adv",u:1,t:"H",synonym_group:"fortunately",synonym_order:1,synonym_note:"heureusement = fortunately (standard); par chance = luckily or by chance (more informal and colloquial)"},
{f:"malheureusement",e:"unfortunately",pos:"adv",u:1,t:"H",synonym_group:"unfortunately",synonym_order:1,synonym_note:"malheureusement = unfortunately (standard); hélas = alas (more literary or dramatic, found in writing)"},
{f:"autrefois",e:"in the past, formerly",pos:"adv",u:1,t:"H"},
{f:"jadis",e:"in olden days, long ago",pos:"adv",u:1,t:"H"},
// ── SYNONYM GROUP ADDITIONS ──
{f:"laisser",e:"to let, allow, leave",pos:"v",u:1,t:"F",synonym_group:"to allow / let",synonym_order:2,synonym_note:"permettre = to officially permit; laisser = to let/allow informally, also means to leave"},
{f:"débuter",e:"to begin, start out",pos:"v",u:1,t:"H",synonym_group:"to begin / start",synonym_order:2,synonym_note:"commencer is the general word; débuter implies starting something for the first time"},
{f:"savoir",e:"to know (a fact / how to)",pos:"v",u:1,t:"F",synonym_group:"to know",synonym_order:1,synonym_note:"savoir = to know a fact or how to do something; connaître = to know a person, place or thing"},
{f:"chercher",e:"to look for",pos:"v",u:1,t:"F",synonym_group:"to look for",synonym_order:1,synonym_note:"chercher = to look for generally; rechercher = to search more thoroughly, or to seek out"},
{f:"indiquer",e:"to indicate, show",pos:"v",u:1,t:"H",synonym_group:"to show",synonym_order:3,synonym_note:"montrer = to show physically; présenter = to present or introduce formally; indiquer = to indicate or point out"},
{f:"fonctionner",e:"to work, function",pos:"v",u:1,t:"F",synonym_group:"to work (function)",synonym_order:2,synonym_note:"both mean a machine or plan is working/functioning; marcher is more colloquial"},
{f:"avoir lieu",e:"to take place",pos:"v",u:1,t:"H",synonym_group:"to happen",synonym_order:2,synonym_note:"se passer = to happen generally; avoir lieu = to take place (planned events, more formal)"},
{f:"dire",e:"to say, tell",pos:"v",u:1,t:"F",synonym_group:"to tell / say",synonym_order:1,synonym_note:"dire = to say or tell (general); raconter = to tell a story or narrate; déclarer = to declare or state formally"},
{f:"déclarer",e:"to declare, state",pos:"v",u:1,t:"H",synonym_group:"to tell / say",synonym_order:3,synonym_note:"dire = to say or tell (general); raconter = to tell a story or narrate; déclarer = to declare or state formally"},
{f:"content",e:"pleased, satisfied, glad",pos:"adj",u:1,t:"F",synonym_group:"happy",synonym_order:3,synonym_note:"heureux = happy (general, deep contentment); joyeux = joyful or merry (more animated, e.g. Joyeux Noël); content = pleased or satisfied (often more temporary)"},
{f:"âgé",e:"elderly, aged",pos:"adj",u:1,t:"H",synonym_group:"old (age)",synonym_order:2,synonym_note:"vieux/vieille = old (general, can be pejorative for people); âgé = elderly or aged (more respectful when describing people)"},
{f:"ancien / ancienne",e:"former, ancient",pos:"adj",u:1,t:"H",synonym_group:"old / former",synonym_order:1,synonym_note:"ancien before the noun = former (mon ancien professeur); after the noun = ancient or old (un bâtiment ancien). Note: only one French word — the nuance is positional"},
{f:"par contre",e:"on the other hand",pos:"adv",u:1,t:"F",synonym_group:"however",synonym_order:3,synonym_note:"cependant = however (formal, written French); pourtant = yet/nevertheless (emphasises contrast, slightly stronger); par contre = on the other hand (informal, spoken)"},
{f:"par chance",e:"luckily, by luck",pos:"adv",u:1,t:"H",synonym_group:"fortunately",synonym_order:2,synonym_note:"heureusement = fortunately (standard); par chance = luckily or by chance (more informal and colloquial)"},
{f:"hélas",e:"alas, unfortunately",pos:"adv",u:1,t:"H",synonym_group:"unfortunately",synonym_order:2,synonym_note:"malheureusement = unfortunately (standard); hélas = alas (more literary or dramatic, found in writing)"},
{f:"sans doute",e:"probably, no doubt",pos:"adv",u:1,t:"H",synonym_group:"maybe / perhaps",synonym_order:2,synonym_note:"peut-être = maybe or perhaps (genuine uncertainty); sans doute = probably or no doubt — it actually implies MORE certainty than peut-être, despite the word 'doute'"},
];

// ══════════════════════════════════════════════
//  TIME EXPRESSIONS DATASET
//  tenses: array — a word can belong to multiple tenses
//  note: explains the tense signal to the student
//  Also used in recognition drill (see tense) and recall drill (group by tense)
// ══════════════════════════════════════════════
const TENSE_LABELS = {
  present:     {label:"Present",     colour:"#58a6ff", emoji:"▶"},
  perfect:     {label:"Perfect",     colour:"#3fb950", emoji:"✔"},
  imperfect:   {label:"Imperfect",   colour:"#e3b341", emoji:"↺"},
  future:      {label:"Future",      colour:"#bc8cff", emoji:"→"},
  conditional: {label:"Conditional", colour:"#f78166", emoji:"?"},
};

const TIME_EXPRESSIONS = [
  // ── PRESENT ──
  {f:"maintenant",          e:"now",                        tenses:["present"],                  note:"Classic present-tense marker"},
  {f:"en ce moment",        e:"at the moment",              tenses:["present"],                  note:"Used with the present tense"},
  {f:"aujourd'hui",         e:"today",                      tenses:["present","perfect"],        note:"Today's events → present or perfect"},
  {f:"normalement",         e:"normally",                   tenses:["present","imperfect","conditional"], note:"Routine in present; habit in imperfect; expectation in conditional"},
  {f:"généralement",        e:"generally",                  tenses:["present","imperfect"],      note:"General habit → present or imperfect"},
  {f:"d'habitude",          e:"usually",                    tenses:["present","imperfect"],      note:"Usual routine → present; past routine → imperfect"},
  {f:"toujours",            e:"always",                     tenses:["present","imperfect"],      note:"Always → present habit; used to always → imperfect"},
  {f:"souvent",             e:"often",                      tenses:["present","imperfect"],      note:"Frequency word → present or imperfect"},
  {f:"parfois",             e:"sometimes",                  tenses:["present","imperfect"],      note:"Frequency word → present or imperfect"},
  {f:"quelquefois",         e:"sometimes",                  tenses:["present","imperfect"],      note:"Same as parfois — frequency → present or imperfect"},
  {f:"de temps en temps",   e:"from time to time",          tenses:["present","imperfect"],      note:"Irregular frequency → present or imperfect"},
  {f:"rarement",            e:"rarely",                     tenses:["present","imperfect"],      note:"Low frequency → present or imperfect"},
  {f:"jamais",              e:"never",                      tenses:["present","imperfect"],      note:"With ne…jamais — present or imperfect negation"},
  {f:"tous les jours",      e:"every day",                  tenses:["present","imperfect"],      note:"Regular routine → present; past routine → imperfect"},
  {f:"chaque jour",         e:"every day",                  tenses:["present","imperfect"],      note:"Same as tous les jours"},
  {f:"chaque semaine",      e:"every week",                 tenses:["present","imperfect"],      note:"Weekly routine → present or imperfect"},
  {f:"chaque année",        e:"every year",                 tenses:["present","imperfect"],      note:"Annual routine → present or imperfect"},
  {f:"actuellement",        e:"currently, at the moment",   tenses:["present"],                  note:"Means 'currently' NOT 'actually' — false friend! Use with present"},
  {f:"à présent",           e:"at present, currently",      tenses:["present"],                  note:"Formal way of saying 'now' → present tense"},
  {f:"encore",              e:"still, again",               tenses:["present","perfect"],        note:"'Still' → present; 'again' can go with perfect"},
  {f:"déjà",                e:"already",                    tenses:["present","perfect"],        note:"'Already' → perfect; 'yet' → present/negative"},
  // ── PERFECT ──
  {f:"hier",                e:"yesterday",                  tenses:["perfect"],                  note:"Yesterday = completed action → perfect tense"},
  {f:"avant-hier",          e:"the day before yesterday",   tenses:["perfect"],                  note:"Completed past → perfect"},
  {f:"la semaine dernière", e:"last week",                  tenses:["perfect"],                  note:"Completed past period → perfect"},
  {f:"le mois dernier",     e:"last month",                 tenses:["perfect"],                  note:"Completed past period → perfect"},
  {f:"l'année dernière",    e:"last year",                  tenses:["perfect"],                  note:"Completed past period → perfect"},
  {f:"il y a",              e:"ago",                        tenses:["perfect"],                  note:"il y a + time = '... ago' → always perfect tense"},
  {f:"récemment",           e:"recently",                   tenses:["perfect"],                  note:"Recently = completed → perfect"},
  {f:"tout à l'heure",      e:"a moment ago / in a moment", tenses:["perfect","future"],         note:"In the past = 'a moment ago' (perfect); in future = 'in a moment'"},
  {f:"tout de suite",       e:"immediately, straight away", tenses:["perfect","future"],         note:"Can refer to immediate past or immediate future"},
  {f:"soudain",             e:"suddenly",                   tenses:["perfect"],                  note:"Sudden completed event → perfect (interrupts imperfect narrative)"},
  {f:"d'abord",             e:"first of all",               tenses:["perfect"],                  note:"Sequence of completed events → perfect"},
  {f:"ensuite",             e:"then, next",                 tenses:["perfect"],                  note:"Next step in a sequence → perfect"},
  {f:"puis",                e:"then",                       tenses:["perfect"],                  note:"Then in a sequence → perfect"},
  {f:"enfin",               e:"finally, at last",           tenses:["perfect"],                  note:"End of sequence → perfect"},
  {f:"après",               e:"after, afterwards",          tenses:["perfect"],                  note:"After a completed event → perfect"},
  {f:"avant",               e:"before",                     tenses:["perfect","imperfect"],      note:"Before a past event → perfect; 'before (in the old days)' → imperfect"},
  {f:"pendant",             e:"during, for (a period)",     tenses:["perfect","imperfect"],      note:"'For' a completed time → perfect; ongoing period → imperfect"},
  // ── IMPERFECT ──
  {f:"autrefois",           e:"in the past, formerly",      tenses:["imperfect"],                note:"Strong imperfect signal — past states/habits"},
  {f:"jadis",               e:"in olden days, long ago",    tenses:["imperfect"],                note:"Literary word for distant past → imperfect"},
  {f:"à l'époque",          e:"at the time, back then",     tenses:["imperfect"],                note:"Describes how things used to be → imperfect"},
  {f:"à ce moment-là",      e:"at that moment",             tenses:["imperfect"],                note:"Ongoing background situation → imperfect"},
  {f:"quand j'étais jeune", e:"when I was young",           tenses:["imperfect"],                note:"Classic imperfect phrase — past state"},
  {f:"quand",               e:"when",                       tenses:["imperfect","perfect","future"], note:"'When' in past narrative → imperfect (background) or perfect (event); future clause → future tense"},
  // ── FUTURE ──
  {f:"demain",              e:"tomorrow",                   tenses:["future"],                   note:"Tomorrow = future event → future or near future (aller + inf)"},
  {f:"après-demain",        e:"the day after tomorrow",     tenses:["future"],                   note:"Future → future tense"},
  {f:"la semaine prochaine",e:"next week",                  tenses:["future"],                   note:"Next week → future tense"},
  {f:"le mois prochain",    e:"next month",                 tenses:["future"],                   note:"Next month → future tense"},
  {f:"l'année prochaine",   e:"next year",                  tenses:["future"],                   note:"Next year → future tense"},
  {f:"bientôt",             e:"soon",                       tenses:["future"],                   note:"Soon → future tense"},
  {f:"plus tard",           e:"later",                      tenses:["future","conditional"],     note:"'Later' → future; in a conditional sentence → conditional"},
  {f:"un jour",             e:"one day",                    tenses:["future","conditional"],     note:"'One day' (hopeful) → future; hypothetical → conditional"},
  {f:"à l'avenir",          e:"in the future",              tenses:["future","conditional"],     note:"Future plans → future tense; wishes → conditional"},
  {f:"dans",                e:"in (+ time period)",         tenses:["future"],                   note:"dans + time = 'in X time from now' → future tense"},
  {f:"dès que",             e:"as soon as",                 tenses:["future"],                   note:"In French, 'as soon as' triggers future tense (not present like in English)"},
  {f:"prochainement",       e:"shortly, coming soon",       tenses:["future"],                   note:"Soon → future tense"},
  {f:"à partir de maintenant", e:"from now on",            tenses:["future"],                   note:"From this point forward → future"},
  {f:"ce soir",             e:"this evening",               tenses:["future","present"],         note:"This evening → future plans; or present if happening now"},
  {f:"cette semaine",       e:"this week",                  tenses:["future","present"],         note:"This week → present or future depending on context"},
  // ── CONDITIONAL ──
  {f:"si j'avais…",         e:"if I had…",                  tenses:["conditional"],              note:"si + imperfect triggers the conditional — classic structure"},
  {f:"si j'étais…",         e:"if I were…",                 tenses:["conditional"],              note:"si + imperfect triggers the conditional"},
  {f:"si c'était possible", e:"if it were possible",        tenses:["conditional"],              note:"si + imperfect → conditional main clause"},
  {f:"à ma place",          e:"in my position / if I were you", tenses:["conditional"],         note:"Hypothetical situation → conditional"},
  {f:"dans un monde idéal", e:"in an ideal world",          tenses:["conditional"],              note:"Hypothetical → conditional"},
  {f:"idéalement",          e:"ideally",                    tenses:["conditional"],              note:"Ideal scenario → conditional"},
  {f:"quand même",          e:"even so, all the same",      tenses:["conditional"],              note:"Concession in hypothetical argument → often conditional"},
  {f:"si",                  e:"if",                         tenses:["conditional"],              note:"si + imperfect = conditional structure; si + present = future structure"},
  {f:"à votre place",       e:"in your position",           tenses:["conditional"],              note:"Hypothetical advice → conditional (je ferais…)"},
];

// ══════════════════════════════════════════════
//  CONSTANTS & STATE
// ══════════════════════════════════════════════
const COLORS = ["#58a6ff","#3fb950","#f78166","#e3b341","#bc8cff","#79c0ff","#56d364","#ffa657"];
const UNIT_NAMES = {
  1:"U1 · Identity & Relationships",
  2:"U2 · Healthy Living",
  3:"U3 · Education & Work",
  4:"U4 · Free-time Activities",
  5:"U5 · Customs & Festivals",
  6:"U6 · Celebrity Culture",
  7:"U7 · Travel & Tourism",
  8:"U8 · Media & Technology",
  9:"U9 · Environment"
};

let profiles = [], currentProfile = null;
let activeUnits = [1,2,3,4,5,6,7,8,9];
let activeTiers = ["F","H"];
let activeDirection = "fr-en"; // "fr-en" | "en-fr" | "both"
let currentMode = "normal";
let deck = [], queue = [], sessionCorrect = 0, sessionWrong = 0;
let isFlipped = false, timerInterval = null, timerLeft = 10;

// ══════════════════════════════════════════════
//  STORAGE
// ══════════════════════════════════════════════
function saveProfiles(){try{localStorage.setItem('fr_profiles',JSON.stringify(profiles));}catch(e){console.warn('Storage unavailable — profile not saved',e);}}
function loadProfiles(){
  try{profiles=JSON.parse(localStorage.getItem('fr_profiles'))||[];}catch{profiles=[];}
}
function getProgress(pid){
  try{return JSON.parse(localStorage.getItem('fr_progress_'+pid))||{};}catch{return {};}
}
function saveProgress(pid,data){localStorage.setItem('fr_progress_'+pid,JSON.stringify(data));}

// ══════════════════════════════════════════════
//  SCREENS
// ══════════════════════════════════════════════
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));
  const el=document.getElementById(id);
  el.classList.remove('hidden');
  el.scrollTop=0;
  updateFabVisibility();
  // Show/hide fixed study back button
  const sb=document.getElementById('studyBack');
  if(sb) sb.style.display = id==='studyScreen' ? '' : 'none';
  // Focus scrollable area so keyboard arrow keys work without a mouse
  const scrollMap={profileScreen:'profileScreen',menuScreen:'menuBody',exprScreen:'exprBody',synScreen:'synBody',timeScreen:'timeBody',drillScreen:'drillBody',progressScreen:'progScreenBody',speakScreen:'speakBody'};
  const focusId=scrollMap[id];
  if(focusId){const t=document.getElementById(focusId);if(t)setTimeout(()=>t.focus({preventScroll:true}),50);}
}

// ── Mouse wheel scroll fix ──
// html/body are overflow:hidden so wheel events need forwarding to scrollable children
(function(){
  var scrollTargets = {
    profileScreen:'profileScreen',
    menuScreen:'menuBody',
    exprScreen:'exprBody',
    synScreen:'synBody',
    timeScreen:'timeBody',
    drillScreen:'drillBody',
    progressScreen:'progScreenBody',
    speakScreen:'speakBody',
    studyScreen:'studyScreen',
    resultsScreen:'resultsScreen',
    adminScreen:'adminBody',
  };
  document.addEventListener('wheel', function(e){
    // Find which screen is currently visible
    var screens = document.querySelectorAll('.screen');
    var activeScreen = null;
    for(var i=0;i<screens.length;i++){
      if(!screens[i].classList.contains('hidden')){
        activeScreen = screens[i];
        break;
      }
    }
    if(!activeScreen) return;
    var sid = activeScreen.id;
    var targetId = scrollTargets[sid] || sid;
    var el = document.getElementById(targetId);
    if(el){
      // Always forward wheel to the scrollable container,
      // regardless of where the cursor is within the screen
      var atTop = el.scrollTop === 0 && e.deltaY < 0;
      var atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1 && e.deltaY > 0;
      if(!atTop && !atBottom){
        e.preventDefault();
        el.scrollTop += e.deltaY;
      }
    }
  }, {passive:false});
})();

// ══════════════════════════════════════════════
//  PROFILE SCREEN
// ══════════════════════════════════════════════
let selectedColor = COLORS[0];
function renderProfiles(){
  const grid = document.getElementById('profilesGrid');
  grid.innerHTML='';
  profiles.forEach((p,i)=>{
    const prog = getProgress(p.id);
    const seen = new Set();
    const words = VOCAB.filter(v=>{ if(seen.has(v.f)) return false; seen.add(v.f); return true; });
    const mastered = words.filter(v=>isWordMastered(prog,v.f)).length;
    const inProgress = words.filter(v=>!isWordMastered(prog,v.f)&&isWordInProgress(prog,v.f)).length;
    const div = document.createElement('div');
    div.className='profile-btn';
    div.style.animationDelay=i*0.05+'s';
    div.innerHTML=`<div class="avatar" style="background:${p.color}22;color:${p.color}">${p.name[0].toUpperCase()}</div>
      <div class="pname">${p.name}</div>
      <div class="pstats">${mastered} mastered · ${inProgress} in progress</div>
      <button class="pdel" title="Delete" onclick="deleteProfile(event,${i})">✕</button>`;
    div.onclick=(e)=>{if(!e.target.classList.contains('pdel'))selectProfile(i);};
    grid.appendChild(div);
  });
}
function deleteProfile(e,i){
  e.stopPropagation();
  if(confirm('Delete profile "'+profiles[i].name+'"?')){
    try{localStorage.removeItem('fr_progress_'+profiles[i].id);}catch(err){console.warn('Storage unavailable',err);}
    profiles.splice(i,1);
    saveProfiles();
    renderProfiles();
  }
}
function selectProfile(i){
  currentProfile=profiles[i];
  openMenu();
}

// Add profile form
document.getElementById('addProfileBtn').onclick=()=>{
  document.getElementById('addForm').classList.toggle('visible');
  document.getElementById('nameInput').focus();
};
document.getElementById('cancelAdd').onclick=()=>{
  document.getElementById('addForm').classList.remove('visible');
  document.getElementById('nameInput').value='';
};
document.getElementById('saveProfile').onclick=()=>{
  const name=document.getElementById('nameInput').value.trim();
  if(!name)return;
  profiles.push({id:Date.now().toString(),name,color:selectedColor});
  saveProfiles();
  document.getElementById('nameInput').value='';
  document.getElementById('addForm').classList.remove('visible');
  renderProfiles();
};
document.getElementById('nameInput').onkeydown=e=>{if(e.key==='Enter')document.getElementById('saveProfile').click();};

// Color picker
const cp=document.getElementById('colorPicker');
COLORS.forEach(c=>{
  const d=document.createElement('div');
  d.className='color-dot'+(c===selectedColor?' sel':'');
  d.style.background=c;
  d.onclick=()=>{selectedColor=c;cp.querySelectorAll('.color-dot').forEach(x=>x.classList.remove('sel'));d.classList.add('sel');};
  cp.appendChild(d);
});

// ══════════════════════════════════════════════
//  MENU SCREEN
// ══════════════════════════════════════════════
function saveProfilePrefs(){
  try{
    const prefs = {activeUnits, activeTiers, activeDirection};
    localStorage.setItem('fr_prefs_'+currentProfile.id, JSON.stringify(prefs));
  }catch(e){console.warn('Storage unavailable — prefs not saved',e);}
  updateSettingsSummary();
}
function loadProfilePrefs(){
  try {
    const prefs = JSON.parse(localStorage.getItem('fr_prefs_'+currentProfile.id));
    if(prefs){
      if(prefs.activeUnits) activeUnits = prefs.activeUnits;
      if(prefs.activeTiers) activeTiers = prefs.activeTiers;
      if(prefs.activeDirection) activeDirection = prefs.activeDirection;
    }
  } catch(e){}
}
function openMenu(){
  loadProfilePrefs();
  showScreen('menuScreen');
  const av=document.getElementById('menuAvatar');
  av.style.background=currentProfile.color+'22';
  av.style.color=currentProfile.color;
  av.textContent=currentProfile.name[0].toUpperCase();
  document.getElementById('menuName').textContent=currentProfile.name;
  buildFilterChips();
  updateMenuStats();
  updateSettingsSummary();
  updateDailyGoalUI();
  updateWeeklyCalendar();
  // Always start collapsed
  document.getElementById('settingsPanel').style.display='none';
  const sb=document.getElementById('menuSettingsBtn');
  if(sb) sb.style.color='';
}

function toggleSettings(){
  const panel=document.getElementById('settingsPanel');
  const btn=document.getElementById('menuSettingsBtn');
  const open=panel.style.display==='none';
  panel.style.display=open?'block':'none';
  if(btn) btn.style.color=open?'var(--gold)':'';
}

function updateSettingsSummary(){
  const el=document.getElementById('settingsSummary');
  if(!el) return;
  const dirLabels={'fr-en':'🇫🇷→🇬🇧 French to English','en-fr':'🇬🇧→🇫🇷 English to French','both':'🔀 Both ways'};
  const tierLabel=activeTiers.length===2?'All tiers':activeTiers.includes('F')?'Foundation only':'Higher only';
  const unitLabel=activeUnits.length===9?'All units':`U${activeUnits.sort((a,b)=>a-b).join(', U')}`;
  el.textContent=`${dirLabels[activeDirection]} · ${tierLabel} · ${unitLabel}`;
}

function buildFilterChips(){
  // Unit chips
  const t1=document.getElementById('t1chips');
  const t2=document.getElementById('t2chips');
  const t3=document.getElementById('t3chips');
  t1.innerHTML=t2.innerHTML=t3.innerHTML='';
  for(let u=1;u<=9;u++){
    const label=`U${u}`;
    const c=document.createElement('button');
    c.className='chip'+(activeUnits.includes(u)?' active':'');
    c.textContent=label;
    c.onclick=()=>toggleUnit(u,c);
    const count=VOCAB.filter(v=>v.u===u).length;
    c.title=UNIT_NAMES[u]+` (${count})`;
    if(u<=3)t1.appendChild(c);
    else if(u<=6)t2.appendChild(c);
    else t3.appendChild(c);
  }
  // Direction buttons
  const dc = document.getElementById('dirChips');
  dc.innerHTML = '';
  const dirs = [
    {
      id:'fr-en',
      label:'🇫🇷 French GCSE → 🇬🇧 English',
      sub:'Recognition — reading & listening skill. Easier, but essential.'
    },
    {
      id:'en-fr',
      label:'🇬🇧 English → 🇫🇷 French GCSE',
      sub:'Production — writing & speaking skill. Harder, where most marks are lost.'
    },
    {
      id:'both',
      label:'🔀  Both ways',
      sub:'Mixes recognition and production. Best all-round preparation.'
    }
  ];
  dirs.forEach(d => {
    const c = document.createElement('button');
    c.className = 'dir-btn' + (activeDirection === d.id ? ' active' : '');
    c.innerHTML = `<div class="dir-btn-label">${d.label}</div><div class="dir-btn-sub">${d.sub}</div>`;
    c.onclick = () => {
      activeDirection = d.id;
      dc.querySelectorAll('.dir-btn').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      saveProfilePrefs();
    };
    dc.appendChild(c);
  });
  // Tier chips
  const tc=document.getElementById('tierChips');
  tc.innerHTML='';
  ['F','H'].forEach(t=>{
    const label=t==='F'?'Foundation':'Higher';
    const c=document.createElement('button');
    c.className='chip tier-'+t+(activeTiers.includes(t)?' active':'');
    c.textContent=label;
    c.onclick=()=>toggleTier(t,c);
    tc.appendChild(c);
  });
}
function toggleUnit(u,el){
  if(activeUnits.includes(u)){if(activeUnits.length>1){activeUnits=activeUnits.filter(x=>x!==u);el.classList.remove('active');}}
  else{activeUnits.push(u);el.classList.add('active');}
  saveProfilePrefs();
  updateMenuStats();
}
function toggleTier(t,el){
  if(activeTiers.includes(t)){if(activeTiers.length>1){activeTiers=activeTiers.filter(x=>x!==t);el.classList.remove('active');}}
  else{activeTiers.push(t);el.classList.add('active');}
  saveProfilePrefs();
  updateMenuStats();
}
function getFilteredVocab(){
  return VOCAB.filter(v=>activeUnits.includes(v.u)&&activeTiers.includes(v.t));
}
function getHardVocab(){
  const prog=getProgress(currentProfile.id);
  const dirs = activeDirection==='both' ? ['fr-en','en-fr'] : [activeDirection];
  return getFilteredVocab().filter(v=>{
    return dirs.some(dir=>{
      const key=v.f+'|'+dir;
      const p=prog[key]||prog[v.f];
      return p&&p.wrong>p.correct&&p.wrong>0;
    });
  });
}
function getFauxVocab(){
  return getFilteredVocab().filter(v=>v.faux_ami);
}
function updateMenuStats(){
  const prog=getProgress(currentProfile.id);
  const total=VOCAB.length;
  // Mastered = 3+ correct answers total across both directions
  const seen=new Set();
  let masteredCount=0, hardCount=0;
  Object.entries(prog).forEach(([key,p])=>{
    const word=key.includes('|')?key.split('|')[0]:key;
    if(!seen.has(word)){
      seen.add(word);
      if(isWordMastered(prog,word)) masteredCount++;
    }
    if(p.wrong>p.correct&&p.wrong>0) hardCount++;
  });
  document.getElementById('statLearned').textContent=masteredCount;
  document.getElementById('statHard').textContent=hardCount||0;
  updateLevelUI(masteredCount);
  // Today stat
  if(currentProfile){
    const dp = getDailyProgress(currentProfile.id);
    document.getElementById('statToday').textContent = dp.correct||0;
    document.getElementById('statStreak').textContent = dp.streak||0;
  }
  const filtered=getFilteredVocab();
  const hardF=getHardVocab();
  const fauxF=getFauxVocab();
  document.getElementById('hardCount').textContent=hardF.length||'–';
  document.getElementById('fauxCount').textContent=fauxF.length||'–';
  document.getElementById('timeCount').textContent=TIME_EXPRESSIONS.length;
  if(typeof SYNONYM_GROUPS!=='undefined'&&SYNONYM_GROUPS.length>0){
    document.getElementById('synCount').textContent=
      SYNONYM_GROUPS.filter(g=>g.members.length>=2).length+' groups';
  }
}
document.getElementById('menuBack').onclick=()=>{showScreen('profileScreen');};

document.getElementById('modeHard').onclick=()=>{
  if(getHardVocab().length===0){showToast('No hard words yet! Keep studying 💪');return;}
  startStudy('hard');
};

document.getElementById('modeFaux').onclick=()=>{
  if(getFauxVocab().length===0){showToast('No faux amis match your filters!');return;}
  startStudy('faux');
};
document.getElementById('resetProgress').onclick=()=>{
  document.getElementById('resetProfileName').textContent=currentProfile.name;
  document.getElementById('resetConfirm').classList.remove('hidden');
  document.getElementById('resetProgress').style.display='none';
};
document.getElementById('resetCancel').onclick=()=>{
  document.getElementById('resetConfirm').classList.add('hidden');
  document.getElementById('resetProgress').style.display='';
};
document.getElementById('resetConfirmBtn').onclick=()=>{
  saveProgress(currentProfile.id,{});
  updateMenuStats();
  document.getElementById('resetConfirm').classList.add('hidden');
  document.getElementById('resetProgress').style.display='';
  // Close settings panel after reset
  document.getElementById('settingsPanel').style.display='none';
  const sb=document.getElementById('menuSettingsBtn'); if(sb) sb.style.color='';
  showToast('Progress reset for '+currentProfile.name);
};

// ══════════════════════════════════════════════
//  STUDY SESSION
// ══════════════════════════════════════════════
function buildQueue(mode){
  const prog=getProgress(currentProfile.id);
  let base;
  if(mode==='hard') base=getHardVocab();
  else if(mode==='faux') base=getFauxVocab();
  else base=getFilteredVocab();
  base=[...base].sort(()=>Math.random()-0.5);
  // For faux mode assign faux direction; for others assign flashcard direction
  if(mode==='faux'){
    base=base.map(v=>({...v,dir:fauxDirection==='rev'?'en-fr':'fr-en'}));
    return base; // no weighting needed — MCQ handles its own repeat logic
  }
  base=base.map(v=>{
    let dir;
    if(activeDirection==='fr-en') dir='fr-en';
    else if(activeDirection==='en-fr') dir='en-fr';
    else dir=Math.random()<0.5?'fr-en':'en-fr';
    return {...v,dir};
  });
  if(mode==='normal'){
    let weighted=[];
    base.forEach(v=>{
      const key=v.f+'|'+v.dir;
      const p=prog[key]||prog[v.f];
      const w=p?Math.max(1,3-(p.score||0)):2;
      for(let i=0;i<w;i++) weighted.push(v);
    });
    return weighted.filter((v,i)=>i===0||weighted[i-1].f!==v.f||weighted[i-1].dir!==v.dir);
  }
  return base;
}

function startStudy(mode){
  currentMode=mode;
  sessionCorrect=0;
  sessionWrong=0;
  deck=buildQueue(mode);
  // Cap normal (Flashcard Challenge) to 20 cards to match daily goal
  if(mode==='normal') deck=deck.slice(0,20);
  queue=[...deck];
  if(queue.length===0){showToast('No cards match your filters!');return;}
  showScreen('studyScreen');
  const badge=document.getElementById('studyModeBadge');
  const isFaux=mode==='faux';
  badge.textContent=mode==='hard'?'💪 Hard Words':isFaux?'🪤 Faux Amis':'🃏 Flashcards';
  document.getElementById('studyStreakBadge').style.display='none';
  document.getElementById('studyModeBadge2').style.display='none';
  // Timer: show for faux mode only
  if(mode==='faux'){document.getElementById('timerWrap').classList.add('show');}
  else{document.getElementById('timerWrap').classList.remove('show');}
  // Show/hide faux direction toggle
  document.getElementById('fauxDirToggle').style.display=isFaux?'flex':'none';
  // Show/hide MCQ vs normal answer area
  document.getElementById('answerArea').classList.toggle('hidden',isFaux);
  document.getElementById('mcqArea').classList.toggle('hidden',!isFaux);
  showNextCard();
}

function showNextCard(){
  if(queue.length===0){showResults();return;}
  isFlipped=false;
  clearInterval(timerInterval);
  const v=queue[0];
  const prog=getProgress(currentProfile.id);
  const key=v.f+'|'+v.dir;
  const p=prog[key]||prog[v.f];
  const isHard=p&&p.wrong>p.correct&&p.wrong>0;
  const tier=v.t==='F'?'Foundation':'Higher';
  const tag=`U${v.u} · ${tier}`;
  const isFaux=currentMode==='faux';

  // Faux ribbon
  document.getElementById('fauxRibbon').classList.toggle('show',isFaux);
  document.getElementById('cardTap').classList.toggle('hidden',isFaux);
  // Card is non-interactive in faux mode
  document.getElementById('cardWrap').style.cursor=isFaux?'default':'pointer';

  if(isFaux){
    // Forward: show French word → pick correct English
    // Reverse: show English trap word → pick correct French
    const isRev=fauxDirection==='rev';
    document.getElementById('frontTag').textContent=tag;
    document.getElementById('frontPos').textContent='';
    document.getElementById('hardDot').style.display=isHard?'block':'none';
    document.getElementById('frontWord').textContent=isRev?v.faux_ami_trap:v.f;
    document.getElementById('frontHint').textContent='';
    document.getElementById('studyDirBadge').textContent=isRev?'🇬🇧 English → 🇫🇷 French GCSE':'🇫🇷 French GCSE → 🇬🇧 English';
    document.getElementById('cardInner').classList.remove('flipped');
    // Build MCQ options
    buildMCQ(v,isRev);
  } else {
    const isFrEn=v.dir==='fr-en';
    document.getElementById('frontTag').textContent=tag;
    document.getElementById('frontPos').textContent=v.pos;
    document.getElementById('hardDot').style.display=isHard?'block':'none';
    if(isFrEn){
      document.getElementById('frontWord').textContent=v.f;
      document.getElementById('frontHint').textContent='';
      document.getElementById('backWord').textContent=v.e;
      document.getElementById('backHint').textContent=v.pos+' · '+v.f;
    } else {
      document.getElementById('frontWord').textContent=v.e;
      document.getElementById('frontHint').textContent='('+v.pos+')';
      document.getElementById('backWord').textContent=v.f;
      document.getElementById('backHint').textContent=v.pos+' · '+v.e;
    }
    document.getElementById('backTag').textContent=tag;
    document.getElementById('studyDirBadge').textContent=isFrEn?'🇫🇷 French GCSE → 🇬🇧 English':'🇬🇧 English → 🇫🇷 French GCSE';
    document.getElementById('cardInner').classList.remove('flipped');
    document.getElementById('answerArea').classList.add('hidden');
  }

  const done = deck.length - queue.length;
  const correctPct = Math.round(sessionCorrect / deck.length * 100);
  const wrongPct   = Math.round(sessionWrong  / deck.length * 100);
  document.getElementById('progFill').style.width = correctPct + '%';
  const wrongEl = document.getElementById('progFillWrong');
  if(wrongEl) wrongEl.style.width = wrongPct + '%';
  document.getElementById('progText').textContent = done + ' / ' + deck.length;
  document.getElementById('queueInfo').textContent = '';

  if(currentMode==='faux'){startTimer();}

  const w=document.getElementById('cardWrap');
  w.style.animation='none';
  requestAnimationFrame(()=>{w.style.animation='flipIn 0.3s ease both';});
}

function speakFrench(){
  const word = document.getElementById('frontWord').textContent;
  if(!word) return;
  // Only speak if showing French (fr-en direction or faux mode forward)
  const isFrShowing = !document.getElementById('cardInner').classList.contains('flipped');
  if(!isFrShowing) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function flipCard(){
  if(currentMode==='faux')return; // MCQ handles its own reveal
  if(isFlipped)return;
  isFlipped=true;
  document.getElementById('cardInner').classList.add('flipped');
  document.getElementById('answerArea').classList.remove('hidden');
  if(currentMode==='faux'){clearInterval(timerInterval);}
}

function startTimer(){
  timerLeft=10;
  const fill=document.getElementById('timerFill');
  const num=document.getElementById('timerNum');
  fill.style.width='100%';
  fill.className='timer-fill';
  num.textContent='10';
  timerInterval=setInterval(()=>{
    timerLeft-=0.1;
    const pct=Math.max(0,timerLeft/10*100);
    fill.style.width=pct+'%';
    num.textContent=Math.ceil(timerLeft);
    if(timerLeft<=3){fill.className='timer-fill danger';}
    else if(timerLeft<=6){fill.className='timer-fill warn';}
    if(timerLeft<=0){
      clearInterval(timerInterval);
      if(currentMode==='faux'){
        // Time up in faux mode: mark wrong and reveal answer
        fauxRevealAnswer(null);
      } else {
        if(!isFlipped)flipCard();
        setTimeout(()=>markAnswer(false),800);
      }
    }
  },100);
}

function todayISO(){
  return new Date().toISOString().slice(0,10); // YYYY-MM-DD
}
function getProfileMeta(pid){
  try{return JSON.parse(localStorage.getItem('fr_meta_'+pid))||{};}catch{return {};}
}
function saveProfileMeta(pid,data){localStorage.setItem('fr_meta_'+pid,JSON.stringify(data));}

function markAnswer(correct){
  clearInterval(timerInterval);
  const v=queue.shift();
  const prog=getProgress(currentProfile.id);
  const key=v.f+'|'+(currentMode==='faux'?'fr-en':v.dir);
  if(!prog[key])prog[key]={score:0,correct:0,wrong:0,sessions:[]};
  if(!prog[key].sessions) prog[key].sessions=[];
  if(correct){
    prog[key].score=Math.min(5,prog[key].score+1);
    prog[key].correct++;
    sessionCorrect++;
    // Record today's date as a session (deduplicated)
    const today=todayISO();
    if(!prog[key].sessions.includes(today)) prog[key].sessions.push(today);
  } else {
    prog[key].score=Math.max(0,prog[key].score-1);
    prog[key].wrong++;
    sessionWrong++;
    if(currentMode!=='faux'){
      const insertAt=Math.min(queue.length,3+Math.floor(Math.random()*3));
      queue.splice(insertAt,0,v);
    }
  }
  saveProgress(currentProfile.id,prog);
  // Record toward daily goal
  if(correct) recordDailyCorrect(currentProfile.id);
  // Milestone toasts — celebrate progress!
  if(correct){
    const _mp=getProgress(currentProfile.id);
    const _seen=new Set(); let _mc=0;
    Object.keys(_mp).forEach(k=>{const w=k.includes('|')?k.split('|')[0]:k;if(!_seen.has(w)){_seen.add(w);if(isWordMastered(_mp,w))_mc++;}});
    const _miles={5:'⭐ 5 words mastered — great start!',10:'🌟 10 words mastered!',25:'🔥 25 mastered — on fire!',50:'🏅 50 words — keep going!',100:'🏆 100 words mastered!',150:'💎 150 mastered — incredible!',200:'🚀 200 words — flying!',250:'👑 250 mastered — champion!',300:'🌟 300 words — outstanding!',400:'💫 400 mastered — nearly there!',500:'🎓 500 words — GCSE ready!'};
    if(_miles[_mc]) setTimeout(()=>showToast(_miles[_mc]),500);
  }
  // Update last-active metadata
  const meta=getProfileMeta(currentProfile.id);
  meta.lastActive=todayISO();
  saveProfileMeta(currentProfile.id,meta);
  if(currentMode!=='faux') showNextCard();
}

document.getElementById('btnWrong').onclick=()=>markAnswer(false);
document.getElementById('btnRight').onclick=()=>markAnswer(true);
document.getElementById('studyBack').onclick=()=>{
  clearInterval(timerInterval);
  openMenu();
};

// ══════════════════════════════════════════════
//  FAUX AMIS LOGIC
// ══════════════════════════════════════════════
let fauxDirection = 'fwd'; // 'fwd' = fr→en, 'rev' = en→fr
let fauxAnswered = false;

// Direction toggle buttons
document.getElementById('fauxDirFwd').onclick = () => setFauxDir('fwd');
document.getElementById('fauxDirRev').onclick = () => setFauxDir('rev');
function setFauxDir(dir){
  fauxDirection = dir;
  document.getElementById('fauxDirFwd').classList.toggle('active', dir==='fwd');
  document.getElementById('fauxDirRev').classList.toggle('active', dir==='rev');
  // Rebuild queue and restart with new direction
  deck = buildQueue('faux');
  queue = [...deck];
  showNextCard();
}

function buildMCQ(v, isRev){
  fauxAnswered = false;
  // Collect all faux amis for distractors
  const allFaux = VOCAB.filter(x=>x.faux_ami && x.f !== v.f);

  let correctAnswer, trapAnswer, distractors;
  if(!isRev){
    // Forward: show French → pick correct English meaning
    correctAnswer = v.e;
    trapAnswer    = v.faux_ami_trap;
    // 2 random distractors: correct English meanings from other faux amis
    const pool = allFaux.map(x=>x.e).filter(x=>x!==correctAnswer&&x!==trapAnswer);
    distractors = shuffleArr(pool).slice(0,2);
  } else {
    // Reverse: show English trap → pick correct French word
    correctAnswer = v.f;
    trapAnswer    = v.faux_ami_trap; // shown as a decoy English look-alike
    // 2 random distractors: French words from other faux amis
    const pool = allFaux.map(x=>x.f).filter(x=>x!==correctAnswer);
    distractors = shuffleArr(pool).slice(0,2);
    // In reverse, trap is the English word that looks like French — we show it as a wrong French option
    // Replace trapAnswer with a plausible French decoy (the trap word itself looks French)
    // Use the trap string as one of the wrong options
  }

  // Build 4 options: correct + trap + 2 distractors, shuffled
  const options = shuffleArr([
    {text: correctAnswer, isCorrect: true},
    {text: trapAnswer,    isCorrect: false, isTrap: true},
    {text: distractors[0]||'—', isCorrect: false},
    {text: distractors[1]||'—', isCorrect: false},
  ]);

  // Populate buttons
  const btns = [0,1,2,3].map(i=>document.getElementById('mcqBtn'+i));
  btns.forEach((btn,i)=>{
    btn.textContent = options[i].text;
    btn.className = 'mcq-btn';
    btn.disabled = false;
    btn.onclick = () => fauxRevealAnswer(options[i]);
  });

  // Hide explanation and next button
  document.getElementById('mcqExplanation').classList.remove('show');
  document.getElementById('mcqExplanation').innerHTML='';
  document.getElementById('mcqNext').style.display='none';
}

function fauxRevealAnswer(chosen){
  if(fauxAnswered) return;
  fauxAnswered = true;
  clearInterval(timerInterval);

  const v = queue[0]; // don't shift yet
  const isRev = fauxDirection==='rev';
  const correct = chosen && chosen.isCorrect;

  // Style all buttons
  const btns = [0,1,2,3].map(i=>document.getElementById('mcqBtn'+i));
  btns.forEach(btn=>{
    btn.disabled = true;
    if(btn.textContent === (isRev ? v.f : v.e)){
      btn.className = 'mcq-btn reveal'; // highlight correct answer
    }
  });
  if(chosen){
    const chosenBtn = btns.find(b=>b.textContent===chosen.text);
    if(chosenBtn) chosenBtn.className = correct ? 'mcq-btn correct' : 'mcq-btn wrong';
  }

  // Explanation
  const exp = document.getElementById('mcqExplanation');
  if(correct){
    exp.innerHTML = `✅ <strong>Correct!</strong> <span class="correct-en">${v.f}</span> means <span class="correct-en">${v.e}</span>` +
      ` — not <span class="trap">"${v.faux_ami_trap}"</span> which is the false friend trap.`;
  } else {
    const reason = !chosen ? '⏱️ Time\'s up!' : `❌ You chose <span class="trap">"${chosen.text}"</span>.`;
    exp.innerHTML = `${reason} <strong>${v.f}</strong> means <span class="correct-en">${v.e}</span>` +
      ` — not <span class="trap">"${v.faux_ami_trap}"</span>.` +
      ` It's a false friend: it looks like the English word <em>"${v.faux_ami_trap}"</em> but means something different.`;
  }
  exp.classList.add('show');
  document.getElementById('mcqNext').style.display='block';

  // Record progress (uses same key structure as flashcards → feeds main stats)
  markAnswer(correct);
}

// mcqNext advances to next card
document.getElementById('mcqNext').onclick = () => {
  // queue was already shifted by markAnswer; just show next
  showNextCard();
};

function shuffleArr(arr){
  return [...arr].sort(()=>Math.random()-0.5);
}

// ══════════════════════════════════════════════
//  RESULTS
// ══════════════════════════════════════════════
function showResults(){
  clearInterval(timerInterval);
  const total=sessionCorrect+sessionWrong;
  const pct=total>0?Math.round(sessionCorrect/total*100):0;
  let emoji='🎉',title='Round Complete!';
  if(pct>=90){emoji='🏆';title='Outstanding!';}
  else if(pct>=70){emoji='⭐';title='Great work!';}
  else if(pct>=50){emoji='👍';title='Good effort!';}
  else{emoji='💪';title='Keep going!';}
  document.getElementById('resultsEmoji').textContent=emoji;
  document.getElementById('resultsTitle').textContent=title;
  const modeLabel = currentMode==='hard'?'Hard Words':currentMode==='faux'?'Faux Amis':'Flashcards';
  document.getElementById('resultsSub').textContent=`You reviewed ${total} cards in ${modeLabel} mode.`;
  document.getElementById('rCorrect').textContent=sessionCorrect;
  document.getElementById('rWrong').textContent=sessionWrong;
  document.getElementById('rScore').textContent=pct+'%';
  injectResultsExpression();
  showScreen('resultsScreen');
}
document.getElementById('rPlayAgain').onclick=()=>startStudy(currentMode);
document.getElementById('rMenu').onclick=()=>openMenu();

// ══════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}

// ══════════════════════════════════════════════
//  ADJECTIVE DRILL — DATA
// ══════════════════════════════════════════════

// Nouns: {f, e, g:"m"|"f"}
// Nouns split into two pools:
// DRILL_NOUNS_PERSON — people & animals (used with personality adjectives)
// DRILL_NOUNS_GENERAL — objects, places, concepts (used with descriptive adjectives)
const DRILL_NOUNS_PERSON = [
  {f:"ami",        e:"friend",        g:"m"},
  {f:"amie",       e:"friend",        g:"f"},
  {f:"homme",      e:"man",           g:"m"},
  {f:"femme",      e:"woman",         g:"f"},
  {f:"garçon",     e:"boy",           g:"m"},
  {f:"fille",      e:"girl",          g:"f"},
  {f:"enfant",     e:"child",         g:"m"},
  {f:"père",       e:"father",        g:"m"},
  {f:"mère",       e:"mother",        g:"f"},
  {f:"frère",      e:"brother",       g:"m"},
  {f:"sœur",       e:"sister",        g:"f"},
  {f:"cousin",     e:"cousin",        g:"m"},
  {f:"professeur", e:"teacher",       g:"m"},
  {f:"élève",      e:"pupil",         g:"m"},
  {f:"chien",      e:"dog",           g:"m"},
  {f:"chat",       e:"cat",           g:"m"},
  {f:"oiseau",     e:"bird",          g:"m"},
  {f:"lapin",      e:"rabbit",        g:"m"},
];
const DRILL_NOUNS_GENERAL = [
  {f:"livre",      e:"book",          g:"m"},
  {f:"sac",        e:"bag",           g:"m"},
  {f:"stylo",      e:"pen",           g:"m"},
  {f:"téléphone",  e:"phone",         g:"m"},
  {f:"ordinateur", e:"computer",      g:"m"},
  {f:"écran",      e:"screen",        g:"m"},
  {f:"film",       e:"film",          g:"m"},
  {f:"restaurant", e:"restaurant",    g:"m"},
  {f:"repas",      e:"meal",          g:"m"},
  {f:"gâteau",     e:"cake",          g:"m"},
  {f:"appartement",e:"flat",          g:"m"},
  {f:"jardin",     e:"garden",        g:"m"},
  {f:"sport",      e:"sport",         g:"m"},
  {f:"travail",    e:"work",          g:"m"},
  {f:"pays",       e:"country",       g:"m"},
  {f:"problème",   e:"problem",       g:"m"},
  {f:"voiture",    e:"car",           g:"f"},
  {f:"maison",     e:"house",         g:"f"},
  {f:"école",      e:"school",        g:"f"},
  {f:"ville",      e:"town",          g:"f"},
  {f:"rue",        e:"street",        g:"f"},
  {f:"chanson",    e:"song",          g:"f"},
  {f:"musique",    e:"music",         g:"f"},
  {f:"langue",     e:"language",      g:"f"},
  {f:"idée",       e:"idea",          g:"f"},
  {f:"histoire",   e:"story",         g:"f"},
  {f:"question",   e:"question",      g:"f"},
  {f:"réponse",    e:"answer",        g:"f"},
  {f:"journée",    e:"day",           g:"f"},
  {f:"semaine",    e:"week",          g:"f"},
  {f:"saison",     e:"season",        g:"f"},
  {f:"photo",      e:"photo",         g:"f"},
  {f:"vidéo",      e:"video",         g:"f"},
  {f:"émission",   e:"TV programme",  g:"f"},
  {f:"nourriture", e:"food",          g:"f"},
  {f:"boisson",    e:"drink",         g:"f"},
  {f:"technologie",e:"technology",    g:"f"},
  {f:"santé",      e:"health",        g:"f"},
  {f:"nature",     e:"nature",        g:"f"},
  {f:"planète",    e:"planet",        g:"f"},
  {f:"mer",        e:"sea",           g:"f"},
  {f:"montagne",   e:"mountain",      g:"f"},
];
// Combined for backward compat
const DRILL_NOUNS = [...DRILL_NOUNS_PERSON, ...DRILL_NOUNS_GENERAL];

// Adjectives: {e, ms, fs, mp, fp, pre:bool, pool:"person"|"general"|"any"}
// pool:"person"  — personality/state adjectives, only make sense with people/animals
// pool:"general" — colours, size, quality adjectives, work with anything
// pool:"any"     — genuinely work with both (e.g. important, social)
const DRILL_ADJS = [
  // Colours (all post-noun)
  {e:"green",       ms:"vert",       fs:"verte",      mp:"verts",      fp:"vertes",      pre:false, pool:"general"},
  {e:"blue",        ms:"bleu",       fs:"bleue",      mp:"bleus",      fp:"bleues",      pre:false, pool:"general"},
  {e:"red",         ms:"rouge",      fs:"rouge",      mp:"rouges",     fp:"rouges",      pre:false, pool:"general"},
  {e:"white",       ms:"blanc",      fs:"blanche",    mp:"blancs",     fp:"blanches",    pre:false, pool:"general"},
  {e:"black",       ms:"noir",       fs:"noire",      mp:"noirs",      fp:"noires",      pre:false, pool:"general"},
  {e:"grey",        ms:"gris",       fs:"grise",      mp:"gris",       fp:"grises",      pre:false, pool:"general"},
  {e:"brown",       ms:"brun",       fs:"brune",      mp:"bruns",      fp:"brunes",      pre:false, pool:"general"},
  // Size / age (pre-noun)
  {e:"big",         ms:"grand",      fs:"grande",     mp:"grands",     fp:"grandes",     pre:true,  pool:"any"},
  {e:"small",       ms:"petit",      fs:"petite",     mp:"petits",     fp:"petites",     pre:true,  pool:"any"},
  {e:"long",        ms:"long",       fs:"longue",     mp:"longs",      fp:"longues",     pre:false, pool:"general"},
  {e:"short",       ms:"court",      fs:"courte",     mp:"courts",     fp:"courtes",     pre:false, pool:"general"},
  {e:"young",       ms:"jeune",      fs:"jeune",      mp:"jeunes",     fp:"jeunes",      pre:true,  pool:"person"},
  {e:"old",         ms:"vieux",      fs:"vieille",    mp:"vieux",      fp:"vieilles",    pre:true,  pool:"any"},
  {e:"new",         ms:"nouveau",    fs:"nouvelle",   mp:"nouveaux",   fp:"nouvelles",   pre:true,  pool:"general"},
  {e:"beautiful",   ms:"beau",       fs:"belle",      mp:"beaux",      fp:"belles",      pre:true,  pool:"any"},
  {e:"good",        ms:"bon",        fs:"bonne",      mp:"bons",       fp:"bonnes",      pre:true,  pool:"any"},
  {e:"bad",         ms:"mauvais",    fs:"mauvaise",   mp:"mauvais",    fp:"mauvaises",   pre:true,  pool:"any"},
  // Personality / quality (post-noun) — person only
  {e:"happy",       ms:"heureux",    fs:"heureuse",   mp:"heureux",    fp:"heureuses",   pre:false, pool:"person"},
  {e:"sad",         ms:"triste",     fs:"triste",     mp:"tristes",    fp:"tristes",     pre:false, pool:"person"},
  {e:"kind",        ms:"gentil",     fs:"gentille",   mp:"gentils",    fp:"gentilles",   pre:false, pool:"person"},
  {e:"intelligent", ms:"intelligent",fs:"intelligente",mp:"intelligents",fp:"intelligentes",pre:false, pool:"person"},
  {e:"hard-working",ms:"travailleur",fs:"travailleuse",mp:"travailleurs",fp:"travailleuses",pre:false, pool:"person"},
  {e:"lazy",        ms:"paresseux",  fs:"paresseuse", mp:"paresseux",  fp:"paresseuses", pre:false, pool:"person"},
  {e:"interesting", ms:"intéressant",fs:"intéressante",mp:"intéressants",fp:"intéressantes",pre:false, pool:"any"},
  {e:"boring",      ms:"ennuyeux",   fs:"ennuyeuse",  mp:"ennuyeux",   fp:"ennuyeuses",  pre:false, pool:"any"},
  {e:"funny",       ms:"drôle",      fs:"drôle",      mp:"drôles",     fp:"drôles",      pre:false, pool:"person"},
  {e:"serious",     ms:"sérieux",    fs:"sérieuse",   mp:"sérieux",    fp:"sérieuses",   pre:false, pool:"person"},
  {e:"strict",      ms:"strict",     fs:"stricte",    mp:"stricts",    fp:"strictes",    pre:false, pool:"person"},
  {e:"shy",         ms:"timide",     fs:"timide",     mp:"timides",    fp:"timides",     pre:false, pool:"person"},
  {e:"proud",       ms:"fier",       fs:"fière",      mp:"fiers",      fp:"fières",      pre:false, pool:"person"},
  {e:"traditional", ms:"traditionnel",fs:"traditionnelle",mp:"traditionnels",fp:"traditionnelles",pre:false, pool:"any"},
  {e:"popular",     ms:"populaire",  fs:"populaire",  mp:"populaires", fp:"populaires",  pre:false, pool:"any"},
  {e:"famous",      ms:"célèbre",    fs:"célèbre",    mp:"célèbres",   fp:"célèbres",    pre:false, pool:"any"},
  // Health / state — person only
  {e:"healthy",     ms:"sain",       fs:"saine",      mp:"sains",      fp:"saines",      pre:false, pool:"person"},
  {e:"ill",         ms:"malade",     fs:"malade",     mp:"malades",    fp:"malades",     pre:false, pool:"person"},
  {e:"tired",       ms:"fatigué",    fs:"fatiguée",   mp:"fatigués",   fp:"fatiguées",   pre:false, pool:"person"},
  {e:"balanced",    ms:"équilibré",  fs:"équilibrée", mp:"équilibrés", fp:"équilibrées", pre:false, pool:"any"},
  // Misc
  {e:"free (of charge)",ms:"gratuit",fs:"gratuite",  mp:"gratuits",   fp:"gratuites",   pre:false, pool:"general"},
  {e:"expensive",   ms:"cher",       fs:"chère",      mp:"chers",      fp:"chères",      pre:false, pool:"general"},
  {e:"easy",        ms:"facile",     fs:"facile",     mp:"faciles",    fp:"faciles",     pre:false, pool:"any"},
  {e:"difficult",   ms:"difficile",  fs:"difficile",  mp:"difficiles", fp:"difficiles",  pre:false, pool:"any"},
  {e:"fast",        ms:"rapide",     fs:"rapide",     mp:"rapides",    fp:"rapides",     pre:false, pool:"any"},
  {e:"slow",        ms:"lent",       fs:"lente",      mp:"lents",      fp:"lentes",      pre:false, pool:"any"},
  {e:"safe",        ms:"sûr",        fs:"sûre",       mp:"sûrs",       fp:"sûres",       pre:false, pool:"any"},
  {e:"dangerous",   ms:"dangereux",  fs:"dangereuse", mp:"dangereux",  fp:"dangereuses", pre:false, pool:"any"},
  {e:"important",   ms:"important",  fs:"importante", mp:"importants", fp:"importantes", pre:false, pool:"any"},
  {e:"social",      ms:"social",     fs:"sociale",    mp:"sociaux",    fp:"sociales",    pre:false, pool:"person"},
  {e:"pretty",      ms:"joli",       fs:"jolie",      mp:"jolis",      fp:"jolies",      pre:true,  pool:"any"},
];

// ══════════════════════════════════════════════
//  ADJECTIVE DRILL — STATE & LOGIC
// ══════════════════════════════════════════════
let drillCorrect = 0, drillWrong = 0, drillStreak = 0;
let drillCurrent = null; // {noun, adj, number:"sg"|"pl", answer, en}
let drillChecked = false;

// Nouns starting with vowel or h need elision
function startsWithVowel(word){
  return /^[aeiouâêîôûàèùëïü]/i.test(word);
}

// Build a random drill prompt
function newDrillPrompt(){
  const adj  = DRILL_ADJS[Math.floor(Math.random()*DRILL_ADJS.length)];
  const pool = adj.pool === 'person' ? DRILL_NOUNS_PERSON
             : adj.pool === 'general' ? DRILL_NOUNS_GENERAL
             : DRILL_NOUNS; // "any" uses full list
  const noun = pool[Math.floor(Math.random()*pool.length)];
  const num  = Math.random() < 0.5 ? 'sg' : 'pl';
  const g    = noun.g; // "m" or "f"

  // Select correct adjective form
  let adjForm;
  if(num==='sg') adjForm = (g==='m') ? adj.ms : adj.fs;
  else           adjForm = (g==='m') ? adj.mp : adj.fp;

  // Build French noun phrase
  let article, nounFr, nounEn;
  const nounStr = num==='pl' ? noun.f+'s' : noun.f;
  // Irregular plurals handled simply with +s (sufficient for drill context)
  if(num==='sg'){
    if(g==='m') article = startsWithVowel(noun.f) ? "un" : "un";
    else        article = "une";
    nounFr = noun.f;
    nounEn = (g==='m'?'a ':'a ')+noun.e;
  } else {
    // Plural indefinite article is "des" → reduced to "de" before adjective that precedes noun
    // Standard rule: de + adj + noun when adj is pre-noun
    article = adj.pre ? "de" : "des";
    nounFr = noun.f+'s';
    const IRREG_EN_PL = {'man':'men','woman':'women','child':'children','person':'people','fish':'fish','pupil':'pupils','teacher':'teachers','cousin':'cousins','brother':'brothers','sister':'sisters','father':'fathers','mother':'mothers','rabbit':'rabbits','dog':'dogs','cat':'cats','bird':'birds','friend':'friends'};
    nounEn = 'some '+(IRREG_EN_PL[noun.e]||noun.e+'s');
  }

  // Build expected answer
  let answer;
  if(adj.pre){
    answer = `${article} ${adjForm} ${nounFr}`;
  } else {
    answer = `${article} ${nounFr} ${adjForm}`;
  }

  // English prompt
  const enAdj = adj.e;
  const enPrompt = num==='sg'
    ? `a${/^[aeiou]/i.test(enAdj)?'n':''} ${enAdj} ${noun.e}`
    : `some ${enAdj} ${noun.e}s`;

  drillCurrent = {noun, adj, num, g, article, nounFr, adjForm, answer, enPrompt, adjPre:adj.pre};

  document.getElementById('drillPromptEn').textContent = enPrompt;
  document.getElementById('drillPromptHint').textContent =
    num==='pl' && adj.pre ? 'Remember: de + adjective + noun in the plural' : '';

  // Reset UI
  const inp = document.getElementById('drillInput');
  inp.value = '';
  inp.className = 'drill-input';
  inp.disabled = false;
  document.getElementById('drillCheckBtn').disabled = false;
  document.getElementById('drillFeedback').classList.remove('show');
  document.getElementById('drillFeedback').innerHTML = '';
  document.getElementById('drillNextBtn').style.display = 'none';
  drillChecked = false;
  // Note: inp.focus() is called by each invoking gesture handler directly,
  // not here — iOS Safari requires focus() to be synchronous within a user gesture.
}

// Check the student's answer token by token
function checkDrillAnswer(){
  if(drillChecked) return;
  drillChecked = true;
  const {noun, adj, num, g, article, nounFr, adjForm, answer, adjPre} = drillCurrent;

  const raw = document.getElementById('drillInput').value;
  // Normalise: trim, collapse spaces, lowercase
  const student = raw.trim().replace(/\s+/g,' ').toLowerCase();
  const expected = answer.toLowerCase();

  const inp = document.getElementById('drillInput');
  inp.disabled = true;
  document.getElementById('drillCheckBtn').disabled = true;

  if(student === expected){
    // Perfect
    inp.className = 'drill-input correct';
    drillCorrect++;
    drillStreak++;
    updateDrillStats();
    saveDrillProgress(adj.e, true);
    showDrillFeedback([
      {icon:'✅', html:`<strong>Correct!</strong> <span class="correct-val">${answer}</span>`}
    ], true);
  } else {
    // Parse student tokens
    const sToks = student.split(' ');
    const eToks = expected.split(' '); // always 3 tokens: article, (adj/noun), (noun/adj)

    inp.className = 'drill-input wrong';
    drillWrong++;
    drillStreak = 0;
    updateDrillStats();
    saveDrillProgress(adj.e, false);

    // Determine expected positions
    // eToks[0]=article, eToks[1]=(pre?adjForm:nounFr), eToks[2]=(pre?nounFr:adjForm)
    const expArticle = eToks[0];
    const expTok1    = eToks[1];
    const expTok2    = eToks[2];
    const sTok0 = sToks[0]||'';
    const sTok1 = sToks[1]||'';
    const sTok2 = sToks[2]||'';

    const rows = [];

    // Check article
    if(sTok0 === expArticle){
      rows.push({icon:'✅', html:`Article <span class="correct-val">${expArticle}</span> — correct`});
    } else {
      let hint = '';
      if(num==='sg'){
        hint = g==='m' ? 'masculine singular needs <strong>un</strong>' : 'feminine singular needs <strong>une</strong>';
      } else {
        hint = adjPre ? 'plural before adjective needs <strong>de</strong>' : 'plural needs <strong>des</strong>';
      }
      rows.push({icon:'❌', html:`Article: you wrote <span class="wrong-val">${sTok0||'(missing)'}</span> — ${hint}`});
    }

    // Check noun
    const expNoun = adjPre ? expTok2 : expTok1;
    const sNoun   = adjPre ? sTok2   : sTok1;
    if(sNoun === expNoun){
      rows.push({icon:'✅', html:`Noun <span class="correct-val">${expNoun}</span> — correct`});
    } else {
      // Check if they used base form without plural s
      const missingPlural = num==='pl' && sNoun === noun.f;
      rows.push({icon:'❌', html:`Noun: you wrote <span class="wrong-val">${sNoun||'(missing)'}</span> — correct form is <span class="correct-val">${expNoun}</span>${missingPlural?' (don\'t forget the plural -s)':''}`});
    }

    // Check adjective form
    const expAdj = adjPre ? expTok1 : expTok2;
    const sAdj   = adjPre ? sTok1   : sTok2;
    if(sAdj === expAdj){
      rows.push({icon:'✅', html:`Adjective <span class="correct-val">${expAdj}</span> — correct`});
    } else {
      // Diagnose what went wrong
      let diagHint = '';
      const allForms = [adj.ms, adj.fs, adj.mp, adj.fp];
      if(sAdj === adj.ms && expAdj !== adj.ms) diagHint = `you used the <strong>masculine singular</strong> form`;
      else if(sAdj === adj.fs && expAdj !== adj.fs) diagHint = `you used the <strong>feminine singular</strong> form`;
      else if(sAdj === adj.mp && expAdj !== adj.mp) diagHint = `you used the <strong>masculine plural</strong> form`;
      else if(sAdj === adj.fp && expAdj !== adj.fp) diagHint = `you used the <strong>feminine plural</strong> form`;
      else if(allForms.some(f=>stripAccents(f)===stripAccents(sAdj||''))) diagHint = `almost right — check your accents`;
      else diagHint = `wrong agreement form for ${g==='m'?'masculine':'feminine'} ${num==='pl'?'plural':'singular'}`;
      rows.push({icon:'❌', html:`Adjective: you wrote <span class="wrong-val">${sAdj||'(missing)'}</span> — correct form is <span class="correct-val">${expAdj}</span> (${diagHint})`});
    }

    // Check word order only if individual tokens are otherwise correct
    if(sToks.length===3){
      const orderOk = adjPre
        ? (sTok1===expAdj && sTok2===expNoun)  // adj before noun
        : (sTok1===expNoun && sTok2===expAdj); // noun before adj
      if(!orderOk && sTok1 && sTok2){
        const swapped = adjPre
          ? (sTok1===expNoun && sTok2===expAdj)
          : (sTok1===expAdj  && sTok2===expNoun);
        if(swapped){
          rows.push({icon:'⚠️', html:`Word order: adjective <strong>${adjPre?'goes before':'goes after'}</strong> the noun for this word`});
        }
      }
    }

    showDrillFeedback(rows, false);
  }

  // Show correct answer and next button
  const fb = document.getElementById('drillFeedback');
  const reveal = document.createElement('div');
  reveal.className = 'drill-answer-reveal';
  reveal.innerHTML = `<div class="reveal-label">Correct answer</div><div class="reveal-val">${answer}</div>`;
  fb.appendChild(reveal);
  document.getElementById('drillNextBtn').style.display = 'block';
}

function stripAccents(str){
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

function showDrillFeedback(rows, correct){
  const fb = document.getElementById('drillFeedback');
  fb.innerHTML = rows.map(r=>`<div class="feedback-row"><span class="fb-icon">${r.icon}</span><span class="fb-text">${r.html}</span></div>`).join('');
  fb.classList.add('show');
}

function updateDrillStats(){
  document.getElementById('dCorrect').textContent = drillCorrect;
  document.getElementById('dWrong').textContent   = drillWrong;
  document.getElementById('dStreak').textContent  = drillStreak;
}

function saveDrillProgress(adjE, correct){
  const key = 'fr_drill_progress_' + currentProfile.id;
  let p = {};
  try{ p = JSON.parse(localStorage.getItem(key))||{}; }catch{}
  if(!p[adjE]) p[adjE] = {correct:0, wrong:0};
  if(correct) p[adjE].correct++; else p[adjE].wrong++;
  localStorage.setItem(key, JSON.stringify(p));
}

function startDrill(){
  drillCorrect = 0; drillWrong = 0; drillStreak = 0;
  updateDrillStats();
  showScreen('drillScreen');
  newDrillPrompt();
}

// Wire up drill events
document.getElementById('modeDrill').onclick = () => { startDrill(); document.getElementById('drillInput').focus(); };
document.getElementById('drillBack').onclick = () => openMenu();
document.getElementById('drillCheckBtn').onclick = () => checkDrillAnswer();
document.getElementById('drillNextBtn').onclick = () => { newDrillPrompt(); document.getElementById('drillInput').focus(); };
// Safe event binding — prevents crash if element not found
function on(id, evt, fn) {
  var el = document.getElementById(id);
  if (el) el.addEventListener(evt, fn);
}

on('drillInput', 'keydown', e => {
  if(e.key==='Enter'){ if(!drillChecked){ checkDrillAnswer(); } else { newDrillPrompt(); document.getElementById('drillInput').focus(); } }
});

// Accent insert buttons
document.querySelectorAll('.accent-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const inp = document.getElementById('drillInput');
    const ch = btn.dataset.char;
    const start = inp.selectionStart, end = inp.selectionEnd;
    inp.value = inp.value.slice(0,start) + ch + inp.value.slice(end);
    inp.selectionStart = inp.selectionEnd = start + 1;
    inp.focus();
  });
});

// ══════════════════════════════════════════════
//  SYNONYM DRILL LOGIC
// ══════════════════════════════════════════════

// Build the SYNONYM_GROUPS index from VOCAB at runtime
function buildSynonymGroups(){
  const map = {};
  VOCAB.forEach(v => {
    if(!v.synonym_group) return;
    const key = v.synonym_group;
    if(!map[key]){
      map[key] = {
        key,
        note: v.synonym_note || '',
        members: []
      };
    }
    // Avoid duplicate French words in the group
    if(!map[key].members.find(m => m.f === v.f)){
      map[key].members.push({
        f: v.f,
        e: v.e,
        order: v.synonym_order || 99
      });
    }
  });
  // Sort members by synonym_order within each group
  Object.values(map).forEach(g => {
    g.members.sort((a,b) => a.order - b.order);
  });
  // Filter out single-member groups (old/former has only one — still useful for note display)
  return Object.values(map);
}

let SYNONYM_GROUPS = [];
let ssCorrect = 0, ssWrong = 0, ssStreak = 0;
let ssQueue = [];       // shuffled group queue for this session
let ssCurrent = null;   // current group
let ssState = [];       // per-member state: {f, e, status:'pending'|'correct'|'revealed'}
let ssPendingIdx = 0;   // index of next pending member to attempt

function getSynProgress(pid){
  try{return JSON.parse(localStorage.getItem('fr_syn_'+pid))||{};}catch{return {};}
}
function saveSynProgress(pid,data){localStorage.setItem('fr_syn_'+pid,JSON.stringify(data));}

function openSynScreen(){
  SYNONYM_GROUPS = buildSynonymGroups();
  showScreen('synScreen');
  updateSynMenuCount();
  startSynSession();
}

function updateSynMenuCount(){
  SYNONYM_GROUPS = buildSynonymGroups();
  // Only count groups with 2+ members
  const count = SYNONYM_GROUPS.filter(g => g.members.length >= 2).length;
  document.getElementById('synCount').textContent = count + ' groups';
}

function startSynSession(){
  ssCorrect = 0; ssWrong = 0; ssStreak = 0;
  updateSynStats();
  // Build queue: multi-member groups only, shuffled
  ssQueue = SYNONYM_GROUPS
    .filter(g => g.members.length >= 2)
    .sort(() => Math.random() - 0.5);
  loadNextSynGroup();
}

function loadNextSynGroup(){
  if(ssQueue.length === 0){
    // All groups done — reshuffle and restart
    ssQueue = SYNONYM_GROUPS
      .filter(g => g.members.length >= 2)
      .sort(() => Math.random() - 0.5);
  }
  ssCurrent = ssQueue.shift();
  ssState = ssCurrent.members.map(m => ({...m, status:'pending'}));
  ssPendingIdx = 0;

  // Update UI
  document.getElementById('synPromptEn').textContent = ssCurrent.key;
  const n = ssCurrent.members.length;
  document.getElementById('synCountBadge').textContent =
    n + ' synonym' + (n > 1 ? 's' : '');
  document.getElementById('ssGroup').textContent =
    (SYNONYM_GROUPS.filter(g=>g.members.length>=2).length - ssQueue.length);

  renderSynTargets();
  resetSynInput();
  document.getElementById('synNoteBox').classList.remove('show');
  document.getElementById('synNextBtn').style.display = 'none';
  document.getElementById('synFeedback').innerHTML = '';
  // Focus is handled by each gesture handler directly (iOS Safari requirement)
}

function renderSynTargets(){
  const container = document.getElementById('synTargets');
  container.innerHTML = '';
  ssState.forEach((m, i) => {
    const row = document.createElement('div');
    row.className = 'syn-target-row' +
      (m.status==='correct' ? ' correct' : m.status==='revealed' ? ' revealed' : '');
    row.id = 'syn-target-' + i;

    const num = document.createElement('span');
    num.className = 'syn-target-num';
    num.textContent = (i+1) + '.';

    const word = document.createElement('span');
    word.className = 'syn-target-word';
    if(m.status === 'correct'){
      word.textContent = m.f;
      word.className = 'syn-target-word correct-word';
    } else if(m.status === 'revealed'){
      word.textContent = m.f;
      word.className = 'syn-target-word revealed-word';
    } else {
      word.textContent = '— type it —';
      word.className = 'syn-target-word hidden-word';
    }

    row.appendChild(num);
    row.appendChild(word);

    // Only show skip button for pending items
    if(m.status === 'pending'){
      const skip = document.createElement('button');
      skip.className = 'syn-target-skip';
      skip.textContent = 'Skip';
      skip.onclick = () => skipSynTarget(i);
      row.appendChild(skip);
    }

    container.appendChild(row);
  });
}

function resetSynInput(){
  const inp = document.getElementById('synInput');
  inp.value = '';
  inp.className = 'syn-input';
  inp.disabled = false;
  document.getElementById('synCheckBtn').disabled = false;
}

function focusSynInput(){
  // Direct call only — no setTimeout. iOS Safari requires focus() synchronously
  // within a user gesture. Callers must invoke this directly from their event handler.
  document.getElementById('synInput').focus();
}

function checkSynAnswer(){
  const inp = document.getElementById('synInput');
  const raw = inp.value.trim();
  if(!raw) return;

  const student = raw.toLowerCase().replace(/\s+/g,' ');

  // Check against all still-pending members
  const pendingIdx = ssState
    .map((m,i) => ({...m, i}))
    .filter(m => m.status === 'pending');

  if(pendingIdx.length === 0) return;

  // Find match: exact or close (strip articles for comparison)
  const stripArticle = s => s.replace(/^(le |la |les |l'|l'|un |une |des |se |s')/i,'').trim();
  const studentClean = stripArticle(student);

  let matchIdx = -1;
  for(const {f, i} of pendingIdx){
    const fClean = stripArticle(f.toLowerCase());
    if(student === f.toLowerCase() || studentClean === fClean){
      matchIdx = i;
      break;
    }
  }

  if(matchIdx >= 0){
    // Correct
    ssState[matchIdx].status = 'correct';
    ssCorrect++;
    ssStreak++;
    updateSynStats();
    inp.className = 'syn-input correct';
    document.getElementById('synFeedback').innerHTML =
      `<span class="correct-fb">✅ ${ssState[matchIdx].f} — correct!</span>`;
    renderSynTargets();

    // Clear input for next synonym
    setTimeout(() => {
      inp.value = '';
      inp.className = 'syn-input';
      document.getElementById('synFeedback').innerHTML = '';
      checkGroupComplete();
    }, 700);

  } else {
    // Wrong — check if it matched a word already got
    const alreadyDone = ssState.find(m =>
      m.status !== 'pending' &&
      stripArticle(m.f.toLowerCase()) === studentClean
    );
    ssWrong++;
    ssStreak = 0;
    updateSynStats();
    inp.className = 'syn-input wrong';
    if(alreadyDone){
      document.getElementById('synFeedback').innerHTML =
        `<span class="wrong-fb">Already got ${alreadyDone.f}! Try another.</span>`;
    } else {
      document.getElementById('synFeedback').innerHTML =
        `<span class="wrong-fb">Not quite — keep trying, or use Skip.</span>`;
    }
    setTimeout(() => { inp.className = 'syn-input'; }, 600);
  }
}

function skipSynTarget(i){
  ssState[i].status = 'revealed';
  ssWrong++;
  ssStreak = 0;
  updateSynStats();
  renderSynTargets();
  document.getElementById('synFeedback').innerHTML =
    `<span class="wrong-fb">Revealed: ${ssState[i].f}</span>`;
  setTimeout(() => {
    document.getElementById('synFeedback').innerHTML = '';
    checkGroupComplete();
  }, 900);
}

function checkGroupComplete(){
  const allDone = ssState.every(m => m.status !== 'pending');
  if(!allDone) return;

  // Group finished — save progress and show note
  const correct = ssState.filter(m => m.status === 'correct').length;
  const total = ssState.length;
  const prog = getSynProgress(currentProfile.id);
  const key = ssCurrent.key;
  if(!prog[key]) prog[key] = {correct:0, wrong:0, mastered:[]};
  prog[key].correct += correct;
  prog[key].wrong += (total - correct);
  ssState.filter(m => m.status === 'correct').forEach(m => {
    if(!prog[key].mastered.includes(m.f)) prog[key].mastered.push(m.f);
  });
  saveSynProgress(currentProfile.id, prog);

  // Show note if exists
  if(ssCurrent.note){
    const nb = document.getElementById('synNoteBox');
    nb.innerHTML = `<strong>Nuance:</strong> ${ssCurrent.note}`;
    nb.classList.add('show');
  }

  document.getElementById('synInput').disabled = true;
  document.getElementById('synCheckBtn').disabled = true;
  document.getElementById('synNextBtn').style.display = 'block';
  document.getElementById('synFeedback').innerHTML =
    `Group done — ${correct}/${total} correct`;
}

function updateSynStats(){
  document.getElementById('ssCorrect').textContent = ssCorrect;
  document.getElementById('ssWrong').textContent   = ssWrong;
  document.getElementById('ssStreak').textContent  = ssStreak;
}

// Wire up events
document.getElementById('modeSyn').onclick = () => { openSynScreen(); focusSynInput(); };
document.getElementById('synBack').onclick = () => openMenu();
document.getElementById('synCheckBtn').onclick = () => { checkSynAnswer(); };
document.getElementById('synNextBtn').onclick = () => { loadNextSynGroup(); focusSynInput(); };
on('synInput', 'keydown', e => {
  if(e.key === 'Enter') checkSynAnswer();
});

// Accent buttons in syn screen reuse same data-char pattern
document.querySelectorAll('#synScreen .accent-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const inp = document.getElementById('synInput');
    const ch = btn.dataset.char;
    const start = inp.selectionStart, end = inp.selectionEnd;
    inp.value = inp.value.slice(0,start) + ch + inp.value.slice(end);
    inp.selectionStart = inp.selectionEnd = start + 1;
    inp.focus();
  });
});

// ══════════════════════════════════════════════
//  TIME EXPRESSIONS LOGIC
// ══════════════════════════════════════════════
let trCorrect = 0, trWrong = 0, trStreak = 0, trBestStreak = 0;
let trCurrent = null, trAnswered = false;
let trQueue = [];

function getTimeProgress(pid){
  try{return JSON.parse(localStorage.getItem('fr_time_'+pid))||{};}catch{return {};}
}
function saveTimeProgress(pid,data){
  try{localStorage.setItem('fr_time_'+pid,JSON.stringify(data));}catch(err){console.warn('Storage unavailable',err);}
}

function getTimePB(pid){
  const d = getTimeProgress(pid);
  return d.pb || 0;
}

function saveTimePBIfBetter(pid, score){
  const d = getTimeProgress(pid);
  if(score > (d.pb||0)){
    d.pb = score;
    saveTimeProgress(pid, d);
    return true; // new PB
  }
  return false;
}

function openTimeScreen(){
  showScreen('timeScreen');
  buildRecallSections();
  startRecogSession();
  updateTimeMenuCount();
}

function updateTimeMenuCount(){
  const pb = currentProfile ? getTimePB(currentProfile.id) : 0;
  document.getElementById('timeCount').textContent = pb > 0 ? 'PB: '+pb : TIME_EXPRESSIONS.length;
}

// ── RECOGNITION mode ──
function startRecogSession(){
  trCorrect=0; trWrong=0; trStreak=0; trBestStreak=0;
  updateTRStats();
  // Load and display existing PB
  const pb = currentProfile ? getTimePB(currentProfile.id) : 0;
  document.getElementById('trPB').textContent = pb > 0 ? pb : '–';
  trQueue = [...TIME_EXPRESSIONS].sort(()=>Math.random()-0.5);
  showNextTRCard();
}

function showNextTRCard(){
  if(trQueue.length===0){
    trQueue=[...TIME_EXPRESSIONS].sort(()=>Math.random()-0.5);
  }
  trAnswered=false;
  trCurrent=trQueue.shift();

  document.getElementById('trWord').textContent=trCurrent.f;
  document.getElementById('trEn').textContent=trCurrent.e;
  document.getElementById('trNote').classList.remove('show');
  document.getElementById('trNote').innerHTML='';
  document.getElementById('trNextBtn').style.display='none';

  // Build tense option buttons — all 5 tenses as options
  const opts=document.getElementById('trOptions');
  opts.innerHTML='';
  const tenseKeys=Object.keys(TENSE_LABELS);
  // Shuffle so correct answer isn't always in same position
  const shuffled=[...tenseKeys].sort(()=>Math.random()-0.5);
  shuffled.forEach(key=>{
    const t=TENSE_LABELS[key];
    const btn=document.createElement('button');
    btn.className='tense-opt-btn';
    btn.dataset.tense=key;
    btn.innerHTML=`<span class="tense-opt-emoji">${t.emoji}</span> ${t.label}`;
    btn.onclick=()=>handleTRAnswer(key);
    opts.appendChild(btn);
  });
}

function handleTRAnswer(chosen){
  if(trAnswered)return;
  trAnswered=true;
  const correct=trCurrent.tenses;
  const isCorrect=correct.includes(chosen);

  // Colour all buttons
  document.querySelectorAll('.tense-opt-btn').forEach(btn=>{
    const k=btn.dataset.tense;
    btn.disabled=true;
    if(correct.includes(k)){
      btn.className=k===chosen?'tense-opt-btn correct':'tense-opt-btn also-correct';
    } else if(k===chosen && !isCorrect){
      btn.className='tense-opt-btn wrong';
    }
  });

  // Update score
  if(isCorrect){trCorrect++;trStreak++;}
  else{trWrong++;trStreak=0;}
  updateTRStats();

  // Save progress
  const prog=getTimeProgress(currentProfile.id);
  const key=trCurrent.f;
  if(!prog[key])prog[key]={correct:0,wrong:0};
  if(isCorrect)prog[key].correct++;else prog[key].wrong++;
  saveTimeProgress(currentProfile.id,prog);

  // Show note
  const note=document.getElementById('trNote');
  const allLabels=correct.map(t=>`<strong style="color:${TENSE_LABELS[t].colour}">${TENSE_LABELS[t].label}</strong>`).join(' / ');
  const extra=correct.length>1?` (also valid: ${correct.filter(t=>t!==chosen).map(t=>TENSE_LABELS[t].label).join(', ')})`:'';
  note.innerHTML=`${isCorrect?'✅':'❌'} <strong>${trCurrent.f}</strong> signals the ${allLabels} tense${correct.length>1?'s':''}${isCorrect&&correct.length>1?extra:''}. ${trCurrent.note}`;
  note.classList.add('show');
  document.getElementById('trNextBtn').style.display='block';
}

function updateTRStats(){
  document.getElementById('trCorrect').textContent=trCorrect;
  document.getElementById('trWrong').textContent=trWrong;
  document.getElementById('trStreak').textContent=trStreak;
  if(trStreak > trBestStreak) trBestStreak = trStreak;
}

document.getElementById('trNextBtn').onclick=()=>showNextTRCard();

// ── RECALL mode ──
function buildRecallSections(){
  const container=document.getElementById('recallSections');
  container.innerHTML='';
  Object.entries(TENSE_LABELS).forEach(([key,tense])=>{
    const exprs=TIME_EXPRESSIONS.filter(te=>te.tenses.includes(key));
    if(!exprs.length)return;

    const section=document.createElement('div');
    section.className='recall-tense-section';

    const header=document.createElement('div');
    header.className='recall-tense-header';
    header.innerHTML=`
      <div class="recall-tense-title">
        <span>${tense.emoji}</span>
        <span>${tense.label}</span>
        <span class="recall-tense-badge" style="background:${tense.colour}">${exprs.length}</span>
      </div>
      <span class="recall-toggle" id="toggle-${key}">▼</span>`;

    const body=document.createElement('div');
    body.className='recall-exprs';
    body.id='recall-body-'+key;

    exprs.forEach(te=>{
      const row=document.createElement('div');
      row.className='recall-expr-row';
      const multiTenses=te.tenses.length>1;
      const otherTenses=te.tenses.filter(t=>t!==key).map(t=>TENSE_LABELS[t].label).join(', ');
      row.innerHTML=`
        <div>
          <div class="recall-fr">${te.f}</div>
          <div class="recall-en">${te.e}</div>
          <div class="recall-note">${te.note}</div>
        </div>
        ${multiTenses?`<span class="recall-multi-badge">also: ${otherTenses}</span>`:''}`;
      body.appendChild(row);
    });

    header.onclick=()=>{
      const isOpen=body.classList.toggle('open');
      document.getElementById('toggle-'+key).classList.toggle('open',isOpen);
    };

    section.appendChild(header);
    section.appendChild(body);
    container.appendChild(section);
  });
}

// Mode toggle tabs
document.getElementById('timeModeRecog').onclick=()=>{
  document.getElementById('timeModeRecog').classList.add('active');
  document.getElementById('timeModeRecall').classList.remove('active');
  document.getElementById('timeRecogPanel').style.display='flex';
  document.getElementById('timeRecallPanel').style.display='none';
};
document.getElementById('timeModeRecall').onclick=()=>{
  document.getElementById('timeModeRecall').classList.add('active');
  document.getElementById('timeModeRecog').classList.remove('active');
  document.getElementById('timeRecallPanel').style.display='flex';
  document.getElementById('timeRecogPanel').style.display='none';
};

document.getElementById('timeBack').onclick=()=>{
  // Save PB if this session's best streak is better
  if(currentProfile && trBestStreak > 0){
    const isNew = saveTimePBIfBetter(currentProfile.id, trBestStreak);
    const pb = getTimePB(currentProfile.id);
    const total = trCorrect + trWrong;
    if(total > 0){
      const msg = isNew
        ? `⭐ New PB! Best streak: ${trBestStreak} · ${trCorrect}/${total} correct`
        : `${trCorrect}/${total} correct · Best streak: ${trBestStreak} (PB: ${pb})`;
      showToast(msg);
    }
    updateTimeMenuCount();
  }
  openMenu();
};
document.getElementById('modeTime').onclick=()=>openTimeScreen();

// ══════════════════════════════════════════════
//  PROGRESS SCREEN
// ══════════════════════════════════════════════

const THEME_MAP = {1:'T1',2:'T1',3:'T1',4:'T2',5:'T2',6:'T2',7:'T3',8:'T3',9:'T3'};
const THEME_LABELS = {
  T1:'Theme 1 — People &amp; Lifestyle',
  T2:'Theme 2 — Popular Culture',
  T3:'Theme 3 — Communication &amp; the World'
};
const UNIT_LABELS = {
  1:'U1 · Identity &amp; Relationships',
  2:'U2 · Healthy Living',
  3:'U3 · Education &amp; Work',
  4:'U4 · Free-time Activities',
  5:'U5 · Customs &amp; Festivals',
  6:'U6 · Celebrity Culture',
  7:'U7 · Travel &amp; Tourism',
  8:'U8 · Media &amp; Technology',
  9:'U9 · Environment'
};

// Core mastered check for a single word (French string)
// "Mastered" = total correct answers across both directions >= 3
function isWordMastered(prog, wordF){
  const fren = prog[wordF+'|fr-en'];
  const enfr = prog[wordF+'|en-fr'];
  const total = (fren ? (fren.correct||0) : 0) + (enfr ? (enfr.correct||0) : 0);
  return total >= 2;
}

function isWordInProgress(prog, wordF){
  const fren = prog[wordF+'|fr-en'];
  const enfr = prog[wordF+'|en-fr'];
  return (fren && (fren.correct||0)>0) || (enfr && (enfr.correct||0)>0);
}

// Compute full progress stats for a profile
function computeProgressStats(pid){
  const prog = getProgress(pid);

  // Deduplicate VOCAB by French word (some words appear in multiple units)
  const seen = new Set();
  const words = VOCAB.filter(v => {
    if(seen.has(v.f)) return false;
    seen.add(v.f);
    return true;
  });

  const total = words.length;
  let mastered = 0, inProgress = 0;

  // By unit: {u: {total, mastered, inProgress, F:{total,mastered}, H:{total,mastered}}}
  const byUnit = {};
  for(let u=1;u<=9;u++) byUnit[u]={total:0,mastered:0,inProgress:0,F:{total:0,mastered:0},H:{total:0,mastered:0}};

  // By tier overall
  const byTier = {F:{total:0,mastered:0,inProgress:0}, H:{total:0,mastered:0,inProgress:0}};

  words.forEach(v => {
    const m = isWordMastered(prog, v.f);
    const ip = !m && isWordInProgress(prog, v.f);
    if(m) mastered++;
    if(ip) inProgress++;

    const u = v.u;
    if(byUnit[u]){
      byUnit[u].total++;
      if(m) byUnit[u].mastered++;
      if(ip) byUnit[u].inProgress++;
      const tier = v.t==='F'?'F':'H';
      byUnit[u][tier].total++;
      if(m) byUnit[u][tier].mastered++;
    }

    const tier = v.t==='F'?'F':'H';
    byTier[tier].total++;
    if(m) byTier[tier].mastered++;
    if(ip) byTier[tier].inProgress++;
  });

  return {total, mastered, inProgress, notStarted: total-mastered-inProgress, byUnit, byTier};
}

function formatLastActive(pid){
  const meta = getProfileMeta(pid);
  if(!meta.lastActive) return 'never';
  const d = new Date(meta.lastActive);
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.round((today - d) / 86400000);
  if(diff === 0) return 'today';
  if(diff === 1) return 'yesterday';
  if(diff < 7)  return diff + ' days ago';
  if(diff < 30) return Math.floor(diff/7) + ' week' + (Math.floor(diff/7)>1?'s':'') + ' ago';
  return d.toLocaleDateString('en-GB', {day:'numeric', month:'short'});
}

function makePBar(mastered, inProgress, total, height='10px'){
  const pct_m  = total ? (mastered/total*100).toFixed(1)  : 0;
  const pct_ip = total ? (inProgress/total*100).toFixed(1): 0;
  return `<div class="prog-bar-wrap" style="height:${height}">
    <div style="height:100%;display:flex;border-radius:10px;overflow:hidden">
      <div style="width:${pct_m}%;background:var(--green);transition:width 0.6s ease"></div>
      <div style="width:${pct_ip}%;background:var(--gold);transition:width 0.6s ease"></div>
    </div>
  </div>`;
}

function makeCollapsible(id, headerHTML, bodyHTML, startOpen=false){
  return `<div class="prog-section">
    <div class="prog-section-header" onclick="toggleProgSection('${id}')">
      <span class="prog-section-title">${headerHTML}</span>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="prog-section-toggle${startOpen?' open':''}" id="prog-toggle-${id}">▼</span>
      </div>
    </div>
    <div class="prog-section-body${startOpen?' open':''}" id="prog-body-${id}">
      ${bodyHTML}
    </div>
  </div>`;
}

function toggleProgSection(id){
  const body = document.getElementById('prog-body-'+id);
  const tog  = document.getElementById('prog-toggle-'+id);
  const open = body.classList.toggle('open');
  tog.classList.toggle('open', open);
}

function buildProgressView(){
  const pid = currentProfile.id;
  const stats = computeProgressStats(pid);
  const lastActive = formatLastActive(pid);
  const container = document.getElementById('progScreenBody');

  // ── Hero card ──
  const pct_m  = stats.total ? (stats.mastered/stats.total*100).toFixed(0)  : 0;
  const pct_ip = stats.total ? (stats.inProgress/stats.total*100).toFixed(0): 0;

  // Build donut chart data
  const themeData = [
    {label:'Theme 1 - People & Lifestyle', units:[1,2,3], colour:'#58a6ff'},
    {label:'Theme 2 - Popular Culture',    units:[4,5,6], colour:'#3fb950'},
    {label:'Theme 3 - Communication',      units:[7,8,9], colour:'#bc8cff'},
  ].map(function(t){
    const total = [...new Set(VOCAB.filter(v=>t.units.includes(v.u)).map(v=>v.f))].length;
    const mastered = [...new Set(VOCAB.filter(v=>t.units.includes(v.u)).map(v=>v.f))].filter(f=>isWordMastered(prog,f)).length;
    return {label:t.label, colour:t.colour, total:total, mastered:mastered, pct: total ? Math.round(mastered/total*100) : 0};
  });
  const cx=60,cy=60,r=50,circ=2*Math.PI*r;
  let offset=0;
  const totalAll = themeData.reduce(function(s,t){return s+t.total;},0);
  let donutSegs = '';
  themeData.forEach(function(t){
    const frac = totalAll ? t.total/totalAll : 0.333;
    const masteredFrac = t.total ? t.mastered/t.total : 0;
    const bgDash = (circ*frac) + ' ' + (circ - circ*frac);
    const bgOff = -(offset*circ);
    const fillDash = (circ*frac*masteredFrac) + ' ' + (circ - circ*frac*masteredFrac);
    const fillOff = -(offset*circ);
    donutSegs += '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+t.colour+'33" stroke-width="14" stroke-dasharray="'+bgDash+'" stroke-dashoffset="'+bgOff+'" transform="rotate(-90 '+cx+' '+cy+')"/>';
    donutSegs += '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+t.colour+'" stroke-width="14" stroke-dasharray="'+fillDash+'" stroke-dashoffset="'+fillOff+'" transform="rotate(-90 '+cx+' '+cy+')" stroke-linecap="round"/>';
    offset += frac;
  });
  let legendHTML = '';
  themeData.forEach(function(t){
    legendHTML += '<div class="donut-legend-item"><div class="donut-legend-dot" style="background:'+t.colour+'"></div><div class="donut-legend-label">'+t.label+'</div><div class="donut-legend-pct">'+t.pct+'%</div></div>';
  });
  const donutHTML = '<div class="prog-section"><div class="donut-wrap"><svg class="donut-svg" width="120" height="120" viewBox="0 0 120 120">'+donutSegs+'<text x="60" y="55" text-anchor="middle" font-family="Fraunces,serif" font-size="16" font-weight="700" fill="#e6edf3">'+stats.mastered+'</text><text x="60" y="70" text-anchor="middle" font-size="9" fill="#8b949e">mastered</text></svg><div class="donut-legend">'+legendHTML+'</div></div></div>';
  let html = donutHTML + `
  <div class="prog-hero">
    <div class="prog-hero-name">${currentProfile.name}</div>
    <div class="prog-hero-last">Last active: ${lastActive}</div>
    <div class="prog-overall-nums">
      <span class="prog-overall-big">${stats.mastered}</span>
      <span class="prog-overall-of">/ ${stats.total}</span>
      <span class="prog-overall-label">words mastered</span>
    </div>
    ${makePBar(stats.mastered, stats.inProgress, stats.total, '10px')}
    <div class="prog-legend">
      <div class="prog-legend-item"><div class="prog-legend-dot" style="background:var(--green)"></div> Mastered (${stats.mastered})</div>
      <div class="prog-legend-item"><div class="prog-legend-dot" style="background:var(--gold)"></div> In progress (${stats.inProgress})</div>
      <div class="prog-legend-item"><div class="prog-legend-dot" style="background:var(--surface3)"></div> Not started (${stats.notStarted})</div>
    </div>
    <div class="prog-mastered-note">
      <strong>Mastered</strong> means at least 1 correct answer in each direction (🇫🇷→🇬🇧 and 🇬🇧→🇫🇷).
    </div>
  </div>`;

  // ── Tier breakdown ──
  const tierBody = `
  <div class="prog-tier-grid">
    <div class="prog-tier-card">
      <div class="prog-tier-label">Foundation</div>
      <div class="prog-tier-nums" style="color:var(--green)">${stats.byTier.F.mastered}<span style="font-size:0.75rem;color:var(--text2);font-family:'Outfit',sans-serif;font-weight:400"> / ${stats.byTier.F.total}</span></div>
      ${makePBar(stats.byTier.F.mastered, stats.byTier.F.inProgress, stats.byTier.F.total, '6px')}
      <div class="prog-tier-sub">${stats.byTier.F.inProgress} in progress</div>
    </div>
    <div class="prog-tier-card">
      <div class="prog-tier-label">Higher</div>
      <div class="prog-tier-nums" style="color:var(--purple)">${stats.byTier.H.mastered}<span style="font-size:0.75rem;color:var(--text2);font-family:'Outfit',sans-serif;font-weight:400"> / ${stats.byTier.H.total}</span></div>
      ${makePBar(stats.byTier.H.mastered, stats.byTier.H.inProgress, stats.byTier.H.total, '6px')}
      <div class="prog-tier-sub">${stats.byTier.H.inProgress} in progress</div>
    </div>
  </div>`;
  html += makeCollapsible('tier', 'By Tier', tierBody, true);

  // ── Theme/unit breakdowns ──
  ['T1','T2','T3'].forEach((theme, ti) => {
    const units = [1,2,3,4,5,6,7,8,9].filter(u => THEME_MAP[u]===theme);
    const thTotal    = units.reduce((s,u)=>s+stats.byUnit[u].total,0);
    const thMastered = units.reduce((s,u)=>s+stats.byUnit[u].mastered,0);
    const thInProg   = units.reduce((s,u)=>s+stats.byUnit[u].inProgress,0);
    const thPct = thTotal ? Math.round(thMastered/thTotal*100) : 0;

    let body = '';
    units.forEach((u, ui) => {
      const d = stats.byUnit[u];
      if(ui > 0) body += `<div class="prog-divider"></div>`;
      body += `<div class="prog-row">
        <div class="prog-row-top">
          <span class="prog-row-label">${UNIT_LABELS[u]}</span>
          <span class="prog-row-nums">${d.mastered}/${d.total}</span>
        </div>
        ${makePBar(d.mastered, d.inProgress, d.total, '5px')}
        <div style="display:flex;gap:12px;margin-top:2px">
          <span style="font-size:0.68rem;color:var(--text3)">F: ${d.F.mastered}/${d.F.total}</span>
          <span style="font-size:0.68rem;color:var(--text3)">H: ${d.H.mastered}/${d.H.total}</span>
          ${d.inProgress>0?`<span style="font-size:0.68rem;color:var(--gold)">${d.inProgress} in progress</span>`:''}
        </div>
      </div>`;
    });

    const headerHTML = `${THEME_LABELS[theme]} <span style="font-size:0.72rem;color:var(--text2);font-weight:400;margin-left:6px">${thMastered}/${thTotal} · ${thPct}%</span>`;
    html += makeCollapsible('theme-'+theme, headerHTML, body, ti===0);
  });

  container.innerHTML = html;
}

function openProgressScreen(){
  buildProgressView();
  showScreen('progressScreen');
}

document.getElementById('menuProgressBtn').onclick = () => openProgressScreen();
document.getElementById('menuAdminBtn').onclick = () => openAdminScreen();
document.getElementById('progressBack').onclick = () => openMenu();

// ══════════════════════════════════════════════
//  EXPRESSIONS — DATA
// ══════════════════════════════════════════════
const EXPRESSIONS = [
  // Food
  {f:"avoir le cafard", lit:"to have the cockroach", mean:"to feel down / depressed", tag:"😔 feelings"},
  {f:"tomber dans les pommes", lit:"to fall in the apples", mean:"to faint", tag:"🍎 body"},
  {f:"avoir d'autres chats à fouetter", lit:"to have other cats to whip", mean:"to have bigger fish to fry", tag:"🐱 animals"},
  {f:"casser les pieds à quelqu'un", lit:"to break someone's feet", mean:"to annoy someone", tag:"🦶 body"},
  {f:"avoir le beurre et l'argent du beurre", lit:"to have the butter and the money for the butter", mean:"to have it both ways / want everything", tag:"🧈 food"},
  {f:"ramener sa fraise", lit:"to bring back one's strawberry", mean:"to show up / stick one's nose in", tag:"🍓 food"},
  {f:"avoir du pain sur la planche", lit:"to have bread on the board", mean:"to have a lot of work to do", tag:"🍞 school / work"},
  {f:"se lever du pied gauche", lit:"to get up on the left foot", mean:"to get out of bed on the wrong side", tag:"🛏️ daily life"},
  // Animals
  {f:"poser un lapin à quelqu'un", lit:"to put a rabbit on someone", mean:"to stand someone up", tag:"🐰 animals"},
  {f:"quand les poules auront des dents", lit:"when hens have teeth", mean:"when pigs fly / never", tag:"🐔 animals"},
  {f:"donner sa langue au chat", lit:"to give one's tongue to the cat", mean:"to give up guessing", tag:"🐱 animals"},
  {f:"il pleut des cordes", lit:"it's raining ropes", mean:"it's raining cats and dogs", tag:"🌧️ weather"},
  {f:"avoir le mal du pays", lit:"to have the illness of the country", mean:"to feel homesick", tag:"🏠 family / holidays"},
  {f:"faire la grasse matinée", lit:"to do the fat morning", mean:"to have a lie-in", tag:"😴 daily life"},
  // Body
  {f:"coûter les yeux de la tête", lit:"to cost the eyes from the head", mean:"to cost an arm and a leg", tag:"💰 money"},
  {f:"avoir les yeux plus grands que le ventre", lit:"to have eyes bigger than one's stomach", mean:"to bite off more than you can chew", tag:"🍽️ food"},
  {f:"garder la tête hors de l'eau", lit:"to keep one's head out of the water", mean:"to keep one's head above water", tag:"💪 school / work"},
  {f:"avoir un poil dans la main", lit:"to have a hair in one's hand", mean:"to be bone idle", tag:"😴 personality"},
  {f:"casser les oreilles", lit:"to break someone's ears", mean:"to be deafeningly loud / to go on and on", tag:"👂 body"},
  {f:"avoir la chair de poule", lit:"to have hen's flesh", mean:"to have goosebumps", tag:"🐔 body"},
  // Objects / misc
  {f:"appeler un chat un chat", lit:"to call a cat a cat", mean:"to call a spade a spade", tag:"🐱 animals"},
  {f:"mettre les pieds dans le plat", lit:"to put one's feet in the dish", mean:"to put one's foot in it", tag:"🦶 body"},
  {f:"se noyer dans un verre d'eau", lit:"to drown in a glass of water", mean:"to make a mountain out of a molehill", tag:"💧 personality"},
  {f:"tenir la chandelle", lit:"to hold the candle", mean:"to play gooseberry / be the third wheel", tag:"🕯️ relationships"},
  {f:"avoir le coup de foudre", lit:"to have the lightning bolt", mean:"to fall in love at first sight", tag:"⚡ relationships"},
  // GCSE-relevant
  {f:"passer une nuit blanche", lit:"to spend a white night", mean:"to pull an all-nighter", tag:"📚 school / work"},
  {f:"faire la tête", lit:"to make the head", mean:"to sulk", tag:"😒 family"},
  {f:"avoir le trac", lit:"to have the track", mean:"to have stage fright / nerves", tag:"😰 feelings"},
  {f:"prendre ses jambes à son cou", lit:"to take one's legs to one's neck", mean:"to run away as fast as possible", tag:"🏃 body"},
  {f:"avoir la langue bien pendue", lit:"to have one's tongue well hung", mean:"to be a chatterbox", tag:"👅 personality"},
];

// ══════════════════════════════════════════════
//  EXPRESSIONS — LOGIC
// ══════════════════════════════════════════════
let exprIndex = 0;

let EXPRESSIONS_SHUFFLED = [];
let exprFlipped = false;

function flipExprCard(){
  exprFlipped = !exprFlipped;
  const inner = document.getElementById('exprCardInner');
  if(inner) inner.classList.toggle('flipped', exprFlipped);
}

function openExprScreen(){
  EXPRESSIONS_SHUFFLED = [...EXPRESSIONS].sort(()=>Math.random()-0.5);
  exprIndex = 0;
  exprFlipped = false;
  renderExprBrowse();
  renderExprList();
  // Reset to flashcard tab
  document.getElementById('exprBrowsePanel').style.display = '';
  document.getElementById('exprListPanel').style.display = 'none';
  document.getElementById('exprModeBrowse').classList.add('active');
  document.getElementById('exprModeList').classList.remove('active');
  showScreen('exprScreen');
}

function renderExprBrowse(){
  const src = (EXPRESSIONS_SHUFFLED && EXPRESSIONS_SHUFFLED.length) ? EXPRESSIONS_SHUFFLED : EXPRESSIONS;
  const e = src[exprIndex];
  exprFlipped = false;
  const inner = document.getElementById('exprCardInner');
  if(inner) inner.classList.remove('flipped');
  document.getElementById('exprFrench').textContent = e.f;
  document.getElementById('exprLiteral').textContent = '"' + e.lit + '"';
  document.getElementById('exprMeaning').textContent = e.mean;
  document.getElementById('exprTag').textContent = e.tag;
  document.getElementById('exprCounter').textContent = (exprIndex+1) + ' / ' + src.length;
  document.getElementById('exprPrev').style.opacity = exprIndex === 0 ? '0.3' : '1';
  document.getElementById('exprNext').textContent = exprIndex === src.length-1 ? '← Back to start' : 'Next →';
}

function renderExprList(){
  const body = document.getElementById('exprListBody');
  body.innerHTML = EXPRESSIONS.map(e => `
    <div class="expr-list-item">
      <div class="expr-list-fr">${e.f}</div>
      <div class="expr-list-lit">"${e.lit}"</div>
      <div class="expr-list-mean">${e.mean}</div>
      <div class="expr-list-tag">${e.tag}</div>
    </div>
  `).join('');
}

function injectResultsExpression(){
  const e = EXPRESSIONS[Math.floor(Math.random() * EXPRESSIONS.length)];
  document.getElementById('rExprFr').textContent = e.f;
  document.getElementById('rExprLit').textContent = '"' + e.lit + '"';
  document.getElementById('rExprMean').textContent = e.mean;
}

document.getElementById('modeSpeaking').onclick = () => openSpeakScreen();
document.getElementById('modeExpr').onclick = () => openExprScreen();
document.getElementById('speakBack').onclick = () => {
  clearSpeakTimer();
  // In full exam, step back through the flow
  if(speakMode === 'full'){
    if(speakPhase === 'task' || speakPhase === 'prep'){
      // Go back to the end-of-part card or the previous part's task
      if(speakPart === 'rp'){ speakPhase = 'home'; renderSpeakBody(); return; }
      if(speakPart === 'ra'){ speakPart = 'rp'; speakPhase = 'task'; speakTaskIdx = ROLE_PLAYS[speakScores.rpNum] ? ROLE_PLAYS[speakScores.rpNum].tasks.length - 1 : 0; renderSpeakBody(); return; }
      if(speakPart === 'pc'){ speakPart = 'ra'; speakPhase = 'prep'; speakTaskIdx = -1; renderSpeakBody(); return; }
    }
    if(speakPhase === 'select'){ speakPhase = 'home'; renderSpeakBody(); return; }
    speakPhase = 'home'; renderSpeakBody(); return;
  }
  // Part practice — go back to selection
  if(speakPhase === 'task' || speakPhase === 'prep'){ speakPhase = 'select'; speakPart = 'select-part'; renderSpeakBody(); return; }
  if(speakPhase === 'select'){ speakPhase = 'home'; renderSpeakBody(); return; }
  openMenu();
};
document.getElementById('exprBack').onclick = () => openMenu();

document.getElementById('exprModeBrowse').onclick = () => {
  document.getElementById('exprBrowsePanel').style.display = '';
  document.getElementById('exprListPanel').style.display = 'none';
  document.getElementById('exprModeBrowse').classList.add('active');
  document.getElementById('exprModeList').classList.remove('active');
};
document.getElementById('exprModeList').onclick = () => {
  document.getElementById('exprBrowsePanel').style.display = 'none';
  document.getElementById('exprListPanel').style.display = '';
  document.getElementById('exprModeBrowse').classList.remove('active');
  document.getElementById('exprModeList').classList.add('active');
};
document.getElementById('exprPrev').onclick = () => {
  if(exprIndex > 0){ exprIndex--; renderExprBrowse(); }
};
document.getElementById('exprNext').onclick = () => {
  const src = (EXPRESSIONS_SHUFFLED && EXPRESSIONS_SHUFFLED.length) ? EXPRESSIONS_SHUFFLED : EXPRESSIONS;
  exprIndex = exprIndex === src.length-1 ? 0 : exprIndex+1;
  renderExprBrowse();
};



// ══════════════════════════════════════════════
//  FEEDBACK & ADMIN
// ══════════════════════════════════════════════

// Storage key for feedback entries
const FB_KEY = 'fr_feedback';

function loadFeedback(){
  try{ return JSON.parse(localStorage.getItem(FB_KEY)) || []; }catch{ return []; }
}
function saveFeedback(data){
  try{ localStorage.setItem(FB_KEY, JSON.stringify(data)); }catch(e){ console.warn('Storage unavailable', e); }
}

// Derive a human-readable page label from the current active screen
function getFeedbackPageContext(){
  const active = document.querySelector('.screen:not(.hidden)');
  if(!active) return 'Unknown';
  const id = active.id;
  const modeLabels = {
    profileScreen: 'Profile select',
    menuScreen: 'Menu',
    studyScreen: (() => {
      const badge = document.getElementById('studyModeBadge');
      const dir   = document.getElementById('studyDirBadge');
      return (badge ? badge.textContent : 'Study') + (dir ? ' · ' + dir.textContent : '');
    })(),
    resultsScreen: 'Results',
    drillScreen: 'Adjective Drill',
    synScreen: 'Synonyms',
    timeScreen: 'Time Expressions',
    progressScreen: 'Progress',
    exprScreen: 'Expressions',
    adminScreen: 'Admin / Feedback'
  };
  return modeLabels[id] || id;
}

// Show / hide the FAB on relevant screens
function updateFabVisibility(){
  const fab = document.getElementById('feedbackFab');
  if(!fab) return;
  const active = document.querySelector('.screen:not(.hidden)');
  const hiddenOn = ['profileScreen', 'adminScreen'];
  if(active && hiddenOn.includes(active.id)){
    fab.classList.add('hidden');
  } else {
    fab.classList.remove('hidden');
  }
}



// Modal open / close
function openFeedbackModal(){
  document.getElementById('fbPageContext').textContent = getFeedbackPageContext();
  document.getElementById('fbText').value = '';
  document.getElementById('fbWordCount').textContent = '0 / 200 words';
  document.getElementById('fbWordCount').classList.remove('warn');
  document.getElementById('fbSubmitBtn').disabled = true;
  document.getElementById('fbModalBg').classList.add('open');
}
function closeFeedbackModal(){
  document.getElementById('fbModalBg').classList.remove('open');
}
function closeFeedbackOutside(e){
  if(e.target === document.getElementById('fbModalBg')) closeFeedbackModal();
}

// Word count + cap
function fbUpdateCount(){
  const raw = document.getElementById('fbText').value;
  const words = raw.trim() ? raw.trim().split(/\s+/).length : 0;
  const wc = document.getElementById('fbWordCount');
  if(words > 200){
    const trimmed = raw.trim().split(/\s+/).slice(0, 200).join(' ');
    document.getElementById('fbText').value = trimmed;
    wc.textContent = '200 / 200 words';
    wc.classList.add('warn');
    document.getElementById('fbSubmitBtn').disabled = false;
    return;
  }
  wc.textContent = words + ' / 200 words';
  wc.classList.toggle('warn', words > 200);
  document.getElementById('fbSubmitBtn').disabled = words === 0;
}

// Submit
const FEEDBACK_WEBHOOK = 'https://script.google.com/macros/s/AKfycbz91B5qXSd2P3xuImND5Yd2Zj5Ums3sF-6OaHQ8nTanVH9fGY95wPfQL_WugzuBQBl00w/exec';

function submitFeedback(){
  const text = document.getElementById('fbText').value.trim();
  const cat  = document.getElementById('fbCategory').value;
  const page = document.getElementById('fbPageContext').textContent;
  if(!text) return;
  const timestamp = new Date().toLocaleString('en-GB',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
  const user = currentProfile ? currentProfile.name : 'Unknown';
  const entry = {
    id: Date.now(),
    user,
    color: currentProfile ? currentProfile.color : '#58a6ff',
    cat,
    text,
    page,
    time: timestamp,
    status: 'new'
  };
  // Save locally
  const all = loadFeedback();
  all.unshift(entry);
  saveFeedback(all);
  // Send to Google Sheets (fire and forget)
  const params = new URLSearchParams({
    timestamp,
    user,
    page,
    category: cat,
    feedback: text
  });
  fetch(FEEDBACK_WEBHOOK, {
    method: 'POST',
    mode: 'no-cors',
    body: params
  }).catch(function(){}); // Silent fail — local save is the backup
  closeFeedbackModal();
  showToast('Feedback submitted — thanks!');
}

// ── Admin screen ──
function openAdminScreen(){
  showScreen('adminScreen');
  renderAdminFeedback();
}

function renderAdminFeedback(){
  const filter = document.getElementById('adminFilter').value;
  const all = loadFeedback();
  const filtered = filter === 'all' ? all : all.filter(f => f.cat === filter);

  const newItems      = filtered.filter(f => f.status === 'new');
  const resolvedItems = filtered.filter(f => f.status === 'resolved');

  document.getElementById('adminStatNew').textContent      = all.filter(f=>f.status==='new').length;
  document.getElementById('adminStatResolved').textContent = all.filter(f=>f.status==='resolved').length;
  document.getElementById('adminStatTotal').textContent    = all.length;

  const container = document.getElementById('adminGroups');
  container.innerHTML = '';
  document.getElementById('adminEmpty').style.display = filtered.length === 0 ? 'block' : 'none';

  [
    { items: newItems,      label: 'New',      icon: '○', badgeClass: 'new' },
    { items: resolvedItems, label: 'Resolved', icon: '✓', badgeClass: 'done' }
  ].forEach(g => {
    if(!g.items.length) return;
    const grp = document.createElement('div');
    grp.className = 'admin-group';
    grp.innerHTML = `
      <button class="admin-group-hdr" onclick="toggleAdminGroup(this)">
        <span class="admin-group-icon">${g.icon}</span>
        <span class="admin-group-label">${g.label}</span>
        <span class="admin-group-badge ${g.badgeClass}">${g.items.length}</span>
        <span class="admin-group-chevron open">›</span>
      </button>
      <div class="admin-group-body open">
        ${g.items.map(f => renderAdminItem(f)).join('')}
      </div>`;
    container.appendChild(grp);
  });
}

function renderAdminItem(f){
  const initials = f.user.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const resolveBtn = f.status === 'new'
    ? `<button class="admin-fb-btn resolve" onclick="resolveAdminItem(${f.id})">Mark resolved</button>` : '';
  return `<div class="admin-fb-item">
    <div class="admin-fb-avatar" style="background:${f.color}22;color:${f.color}">${initials}</div>
    <div class="admin-fb-body">
      <div class="admin-fb-meta">
        <span class="admin-fb-name">${f.user}</span>
        <span class="admin-fb-cat">${f.cat}</span>
        <span class="admin-fb-time">${f.time}</span>
      </div>
      <div class="admin-fb-page">◎ ${f.page}</div>
      <div class="admin-fb-text">${f.text}</div>
      <div class="admin-fb-actions">${resolveBtn}</div>
    </div>
  </div>`;
}

function resolveAdminItem(id){
  const all = loadFeedback();
  const item = all.find(f => f.id === id);
  if(item){ item.status = 'resolved'; saveFeedback(all); renderAdminFeedback(); }
}

function toggleAdminGroup(btn){
  const body = btn.nextElementSibling;
  const chev = btn.querySelector('.admin-group-chevron');
  const open = body.classList.toggle('open');
  chev.classList.toggle('open', open);
}

// Wire up admin button on menu top-bar (📊 is progress; we add 💬 admin btn)
document.getElementById('adminBack').onclick = () => openMenu();


// ══════════════════════════════════════════════
//  SPEAKING PRACTICE
// ══════════════════════════════════════════════

// Sequence chart: paper number → [rpNum, raNum, cardId]
const SPEAK_SEQUENCE = {
  F: [
    [1,1,'A'],[2,2,'B'],[3,3,'C'],[4,4,'D'],[5,5,'E'],
    [6,6,'F'],[7,7,'G'],[8,8,'H'],[9,9,'I']
  ],
  H: [
    [10,10,'J'],[11,11,'K'],[12,12,'L'],[13,13,'M'],[14,14,'N'],
    [15,15,'O'],[16,16,'P'],[17,17,'Q'],[18,18,'R']
  ]
};

const RP_TITLES = {
  1:'Ma ville',2:'Les amis',3:'Le week-end',4:'Le college',5:'La sante',
  6:'L\'anniversaire',7:'La celebrite',8:'L\'ecole',9:'La tele',
  10:'Films et loisirs',11:'Les amis',12:'La region',13:'L\'ecole',
  14:'La sante',15:'Sport et sante',16:'Les celebrites',17:'La region',18:'La technologie'
};

const RA_TOPICS = {
  1:'Education & work',2:'Celebrity culture',3:'Media & technology',
  4:'Identity & relationships',5:'Healthy living',6:'Free time',
  7:'Customs & celebrations',8:'Education & work',9:'Environment & where people live',
  10:'Education & work',11:'Celebrity culture',12:'Media & technology',
  13:'Environment & where people live',14:'Healthy living',15:'Free time',
  16:'Free time',17:'Travel & tourism',18:'Environment & where people live'
};

const PC_THEMES = {
  A:'People & lifestyle',B:'Communication & world around us',C:'Popular culture',
  D:'People & lifestyle',E:'People & lifestyle',F:'Popular culture',
  G:'Popular culture',H:'Communication & world around us',I:'Communication & world around us',
  J:'People & lifestyle',K:'Communication & world around us',L:'Popular culture',
  M:'People & lifestyle',N:'People & lifestyle',O:'Popular culture',
  P:'Popular culture',Q:'Communication & world around us',R:'Communication & world around us'
};

// Photo descriptions for each card
const PC_PHOTOS = {
  A:{p1:'A father and young child cooking together in a kitchen, preparing vegetables.',p2:'A family playing football together in a garden or park.'},
  B:{p1:'A couple dining at a rooftop restaurant with the Eiffel Tower in the background.',p2:'A group of friends hiking with backpacks along a coastal trail.'},
  C:{p1:'A family gathered outside for a celebration party with a table of food.',p2:'A couple sharing a first dance at their wedding celebration.'},
  D:{p1:'Young friends having a picnic in a park, with a laptop open between them.',p2:'A diverse group of friends eating a meal together around a table.'},
  E:{p1:'Students wearing safety goggles doing a science experiment in a school lab.',p2:'A woman buying clothes at a boutique, being served by a shop assistant.'},
  F:{p1:'Teenagers hiking through nature, one carrying a small dog in a backpack.',p2:'An audience of young people watching a film in a cinema.'},
  G:{p1:'A female celebrity stepping out of a limousine at a red carpet event, surrounded by photographers.',p2:'A group of street dancers performing an energetic routine outdoors.'},
  H:{p1:'A young couple looking at a laptop screen together and smiling.',p2:'Two people at a restaurant photographing their food with their phones.'},
  I:{p1:'A busy UK high street with traffic, shops and pedestrians.',p2:'A mother and two children in matching recycling t-shirts, carrying a recycling box.'},
  J:{p1:'A father and young child cooking together in a kitchen, preparing vegetables.',p2:'A family playing football together in a garden or park.'},
  K:{p1:'A couple dining at a rooftop restaurant with the Eiffel Tower in the background.',p2:'A group of friends hiking with backpacks along a coastal trail.'},
  L:{p1:'A family gathered outside for a celebration party with a table of food.',p2:'A couple sharing a first dance at their wedding celebration.'},
  M:{p1:'Young friends having a picnic in a park, with a laptop open between them.',p2:'A diverse group of friends eating a meal together around a table.'},
  N:{p1:'Students wearing safety goggles doing a science experiment in a school lab.',p2:'A woman buying clothes at a boutique, being served by a shop assistant.'},
  O:{p1:'Teenagers hiking through nature, one carrying a small dog in a backpack.',p2:'An audience of young people watching a film in a cinema.'},
  P:{p1:'A female celebrity stepping out of a limousine at a red carpet event, surrounded by photographers.',p2:'A group of street dancers performing an energetic routine outdoors.'},
  Q:{p1:'A young couple looking at a laptop screen together and smiling.',p2:'Two people at a restaurant photographing their food with their phones.'},
  R:{p1:'A busy UK high street with traffic, shops and pedestrians.',p2:'A mother and two children in matching recycling t-shirts, carrying a recycling box.'}
};

// Unsplash image URLs for each scene
const PC_IMAGES = {
  A:['images/photo-01.png','images/photo-02.png'],
  B:['images/photo-03.png','images/photo-04.png'],
  C:['images/photo-05.png','images/photo-06.png'],
  D:['images/photo-07.png','images/photo-08.png'],
  E:['images/photo-09.png','images/photo-10.png'],
  F:['images/photo-11.png','images/photo-12.png'],
  G:['images/photo-13.png','images/photo-14.png'],
  H:['images/photo-15.png','images/photo-16.png'],
  I:['images/photo-17.png','images/photo-18.png'],
};
// Higher tier uses same images as Foundation
'JKLMNOPQR'.split('').forEach(function(c,i){ PC_IMAGES[c] = PC_IMAGES['ABCDEFGHI'[i]]; });

// Role play data (tasks + mark scheme)
const ROLE_PLAYS = {
  1:{title:'Ma ville',friend:'French friend',
    intro:'Tu parles avec ton ami(e) français(e). Moi, je suis ton ami(e).',
    teacherOpening:'Bonjour ! Tu habites dans quelle sorte de ville ou de village ?',
    tasks:[
      {q:'Describe your town or village.',detail:'Give one detail.',unprepared:false,
       teacher:'Decris ta ville ou ton village.',
       g:{full:'Ma ville est interessante / C\'est beau.',part:'Interessant(e) — no accurate verb',miss:'Je suis interessant — wrong person'}},
      {q:'Say when you go to town.',detail:'Give one detail.',unprepared:false,
       teacher:'Quand est-ce que tu vas en ville ?',
       g:{full:'Je vais en ville le samedi / deux fois par semaine.',part:'Je vais deux fois — some ambiguity',miss:'Incomprehensible pronunciation'}},
      {q:'Say where you like to go in town.',detail:'Give one detail.',unprepared:false,
       teacher:'Ou est-ce que tu aimes aller en ville ?',
       g:{full:'Je vais au stade / J\'aime aller aux magasins.',part:'Je suis alle(e) au cafe — wrong tense',miss:'Ville piscine — incomprehensible'}},
      {q:'Give one opinion of your region.',detail:'',unprepared:false,
       teacher:'Qu\'est-ce que tu penses de ta region ?',
       g:{full:'Ma region est industrielle / J\'aime ma region.',part:'Region bon(ne) — no verb',miss:'Je voudrais ma region'}},
      {q:'Ask your friend a question about where they live.',detail:'',unprepared:true,
       teacher:'C\'est interessant. (Give an appropriate response.)',
       g:{full:'Ou est ta ville ? / Ou habites-tu ?',part:'Tu aimes habite(s) ? — ambiguous',miss:'Ta ville aime(s) ?'}},
    ]},
  2:{title:'Les amis',friend:'French friend',
    intro:'Tu parles avec ton ami(e) français(e). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu sors souvent avec tes amis ?',
    tasks:[
      {q:'Say when you go out with friends.',detail:'Give one detail.',unprepared:false,
       teacher:'Quand est-ce que tu sors avec tes amis ?',
       g:{full:'Je sors avec mes amis le samedi / a midi.',part:'Sortir le vendredi soir — no accurate verb',miss:'Je sors a sink oors — incomprehensible'}},
      {q:'Say where you go.',detail:'Give one place.',unprepared:false,
       teacher:'Et, ou est-ce que tu vas avec tes amis ?',
       g:{full:'Je vais au stade / Nous allons a la piscine.',part:'au cinema — no verb',miss:'Je vais avec mes amis — no place'}},
      {q:'Give one opinion of spending time with friends.',detail:'',unprepared:false,
       teacher:'Quelle est ton opinion de passer du temps avec des amis ?',
       g:{full:'C\'est genial / J\'aime passer du temps avec mes copains.',part:'Interessant(e) — no verb',miss:'Amis, oui'}},
      {q:'Ask your friend a question about their free time.',detail:'',unprepared:true,
       teacher:'Tres bien. (Give an appropriate response.)',
       g:{full:'Tu joues au basket ? / Qu\'est-ce que tu fais le soir ?',part:'Tu jouer au football ? — no accurate verb',miss:'Visiter le football ?'}},
      {q:'Describe your best friend.',detail:'Give one detail.',unprepared:false,
       teacher:'Decris ton ou ta meilleur(e) ami(e).',
       g:{full:'Il est drole / Elle est grande.',part:'Beau — no verb',miss:'Ma copine vrai'}},
    ]},
  3:{title:'Le week-end',friend:'Canadian friend',
    intro:'Tu parles avec ton ami(e) canadien(ne). Moi, je suis ton ami(e).',
    teacherOpening:'Bonjour ! Qu\'est-ce que tu fais normalement le week-end ?',
    tasks:[
      {q:'Say where you like to go at the weekend.',detail:'Give one place.',unprepared:false,
       teacher:'Ou aimes-tu aller le week-end ?',
       g:{full:'J\'aime aller a la piscine / Nous allons en ville.',part:'(A la) campagne — no verb',miss:'Il aime aller en ville — wrong person'}},
      {q:'Say one type of film you like.',detail:'',unprepared:false,
       teacher:'Quelle sorte de film est-ce que tu aimes ?',
       g:{full:'J\'aime les films d\'amour / droles / interessants.',part:'Je veux un film de nature — ambiguous',miss:'Oui, les films'}},
      {q:'Say one sport you do.',detail:'',unprepared:false,
       teacher:'Quel sport fais-tu ?',
       g:{full:'Je fais de la natation / Je joue au football.',part:'Le football — no verb',miss:'Le sport, oui, j\'aime'}},
      {q:'Describe your favourite singer.',detail:'Give one detail.',unprepared:false,
       teacher:'Decris ton chanteur ou ta chanteuse prefere(e).',
       g:{full:'Mon chanteur prefere est francais.',part:'Grand(e) / Beau — no verb',miss:'J\'aime le chanteur'}},
      {q:'Ask your friend a question about music.',detail:'',unprepared:true,
       teacher:'Tres bien. (Give an appropriate response.)',
       g:{full:'Tu joues d\'un instrument ? / Tu aimes la musique ?',part:'(La) Musique ? — no verb',miss:'Tu instrument ?'}},
    ]},
  4:{title:'Le college',friend:'Canadian friend',
    intro:'Tu parles avec ton ami(e) canadien(ne). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu aimes ton collège ?',
    tasks:[
      {q:'Say where your school is.',detail:'Give one detail.',unprepared:false,
       teacher:'Ou est ton college ?',
       g:{full:'Mon college est a + town / a la campagne.',part:'(Mon college) a + town — no verb',miss:'C\'est un college grand'}},
      {q:'Ask your friend a question about their favourite subject.',detail:'',unprepared:true,
       teacher:'Tres bien. (Give an appropriate response.)',
       g:{full:'Quelle est ta matiere preferee ? / Tu aimes les maths ?',part:'Ta matiere preferee ... ? — no verb',miss:'Ma matiere preferee est l\'anglais ?'}},
      {q:'Say one subject you do not like.',detail:'',unprepared:false,
       teacher:'Il y a une matiere que tu n\'aimes pas ?',
       g:{full:'Je n\'aime pas / Je deteste l\'anglais.',part:'Je n\'aime l\'histoire — inaccurate',miss:'J\'aime la geographie — contradictory'}},
      {q:'Say one sport you do at school.',detail:'',unprepared:false,
       teacher:'Quel sport est-ce que tu fais au college ?',
       g:{full:'J\'aime le / Je joue au football / Je danse.',part:'Je danser — ambiguous',miss:'Je n\'aime pas danser — irrelevant'}},
      {q:'Say what you eat at lunchtime.',detail:'Give one detail.',unprepared:false,
       teacher:'Qu\'est-ce que tu manges a midi ?',
       g:{full:'Je mange des fruits / Je prends des legumes.',part:'(Des) fruits — no verb',miss:'Nothing conveyed'}},
    ]},
  5:{title:'La sante',friend:'French friend',
    intro:'Tu parles avec ton ami(e) français(e). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu fais attention à ta santé ?',
    tasks:[
      {q:'Say what you drink to stay healthy.',detail:'Give one detail.',unprepared:false,
       teacher:'Qu\'est-ce que tu bois pour etre en bonne sante ?',
       g:{full:'Je bois / Je prends de l\'eau / du lait.',part:'(Je boire) de l\'eau — no accurate verb',miss:'Je ne bois pas de cafe — irrelevant'}},
      {q:'Say one activity you do to keep fit.',detail:'',unprepared:false,
       teacher:'Et, qu\'est-ce que tu fais pour rester en forme ?',
       g:{full:'Je joue au foot / Je vais a la piscine.',part:'Natation / Football — no verb',miss:'Je vais avec mes amis'}},
      {q:'Give one opinion of school meals.',detail:'',unprepared:false,
       teacher:'Quelle est ton opinion des repas au college ?',
       g:{full:'Ils sont bons / affreux / Je n\'aime pas.',part:'Ils bons — no verb',miss:'Repas (au college), oui'}},
      {q:'Ask your friend a question about food.',detail:'',unprepared:true,
       teacher:'C\'est vrai. (Give an appropriate response.)',
       g:{full:'Tu aimes la viande ? / Tu manges sain ?',part:'Ta nourriture ? / Manger sain ? — no verb',miss:'Manger bon?'}},
      {q:'Say one thing you do to relax.',detail:'',unprepared:false,
       teacher:'Qu\'est-ce que tu fais pour te relaxer ?',
       g:{full:'Je regarde la television / J\'ecoute la musique.',part:'(Regarder) La tele — no verb',miss:'J\'aime me relaxer'}},
    ]},
  6:{title:'L\'anniversaire',friend:'Canadian friend',
    intro:'Tu parles avec ton ami(e) canadien(ne). Moi, je suis ton ami(e).',
    teacherOpening:'Bonjour ! C\'est bientôt ton anniversaire, non ?',
    tasks:[
      {q:'Say when your birthday is.',detail:'Give one detail.',unprepared:false,
       teacher:'Ton anniversaire, c\'est quand ?',
       g:{full:'C\'est le vingt-cinq / en mars.',part:'C\'est le sink avril — ambiguous',miss:'Le sink — not communicated'}},
      {q:'Say one thing you do with your friends.',detail:'',unprepared:false,
       teacher:'Qu\'est-ce que tu fais avec tes amis ?',
       g:{full:'Je mange dans un restaurant / Nous allons au cinema.',part:'(Manger dans un) restaurant — no verb',miss:'Tu cinema'}},
      {q:'Ask your friend a question about their free time.',detail:'',unprepared:true,
       teacher:'C\'est genial. (Give an appropriate response.)',
       g:{full:'Qu\'est-ce que tu fais pendant ton temps libre ?',part:'Ton temps libre jouer avec amis — ambiguous',miss:'Fais ton temps libre ?'}},
      {q:'Say what your favourite day of the week is.',detail:'Give one day.',unprepared:false,
       teacher:'Quel jour de la semaine preferes-tu ?',
       g:{full:'Je prefere mardi / samedi.',part:'Je preferer samedi — no accurate verb',miss:'J\'aime les fetes'}},
      {q:'Say what type of food you like.',detail:'Give one detail.',unprepared:false,
       teacher:'Qu\'est-ce que tu aimes manger ?',
       g:{full:'J\'aime les frites / J\'adore les fruits.',part:'J\'(adorer) (la) pizza — no verb',miss:'Je voudrais une pizza'}},
    ]},
  7:{title:'La celebrite',friend:'Canadian friend',
    intro:'Tu parles avec ton ami(e) canadien(ne). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu as une célébrité préférée ?',
    tasks:[
      {q:'Describe your favourite celebrity.',detail:'Give one detail.',unprepared:false,
       teacher:'Ta celebrite preferee est comment ?',
       g:{full:'Il est beau / Elle est belle / Il a les cheveux bruns.',part:'Beau / grand — no verb',miss:'Ma celebrite preferee'}},
      {q:'Say what job they do.',detail:'Give one detail.',unprepared:false,
       teacher:'Qu\'est qu\'il/elle fait comme metier ?',
       g:{full:'Il est acteur / Elle joue au football.',part:'Ma celebrite chef — no verb',miss:'(Il/Elle) travaille dur'}},
      {q:'Say why you like this person.',detail:'Give one detail.',unprepared:false,
       teacher:'Pourquoi tu aimes cette personne ?',
       g:{full:'(Je l\'aime parce qu\') Il/Elle est drole.',part:'Interessant(e) — no verb',miss:'J(e l\')aime'}},
      {q:'Say one type of film you like.',detail:'',unprepared:false,
       teacher:'Quelle sorte de film aimes-tu ?',
       g:{full:'J\'aime les films de la nature / d\'action.',part:'(Je preferer les) films droles — no verb',miss:'J\'aime les cartoons — incomprehensible'}},
      {q:'Ask your friend a question about music.',detail:'',unprepared:true,
       teacher:'D\'accord. (Give an appropriate response.)',
       g:{full:'Tu aimes la musique / Taylor Swift / les concerts ?',part:'Ta musique preferee ? — no verb',miss:'Tu aimes celebrite musique ?'}},
    ]},
  8:{title:'L\'ecole',friend:'French friend',
    intro:'Tu parles avec ton ami(e) français(e). Moi, je suis ton ami(e).',
    teacherOpening:'Bonjour ! Tu peux me parler de ton collège ?',
    tasks:[
      {q:'Describe your school.',detail:'Give one detail.',unprepared:false,
       teacher:'Decris ton college.',
       g:{full:'Mon college est grand / moderne.',part:'Grand / Les profs sympas — no verb',miss:'Ton college est petit'}},
      {q:'Say one subject you like.',detail:'',unprepared:false,
       teacher:'Il y a une matiere que tu aimes ?',
       g:{full:'J\'aime les maths / Ma matiere preferee est le sport.',part:'L\'anglais — no verb',miss:'Que tu aimes, l\'anglais'}},
      {q:'Say why you like it.',detail:'Give one detail.',unprepared:false,
       teacher:'Pourquoi tu aimes ca ?',
       g:{full:'C\'est interessant / J\'aime le prof / Je n\'ai pas de devoirs.',part:'Pas de devoirs — no verb',miss:'Mauvais'}},
      {q:'Say what you do at break.',detail:'Give one detail.',unprepared:false,
       teacher:'Qu\'est-ce que tu fais a la recreation ?',
       g:{full:'Je parle avec mes amis / J\'ecoute de la musique.',part:'Football / (Je) Manger — no accurate verb',miss:'J\'aime la recreation'}},
      {q:'Ask your friend a question about their school.',detail:'',unprepared:true,
       teacher:'Tres bien. (Give an appropriate response.)',
       g:{full:'Tu aimes ton ecole ? / Ton college est bon ?',part:'Tes amis aller a ton college ? — no verb',miss:'Le college ?'}},
    ]},
  9:{title:'La tele',friend:'French friend',
    intro:'Tu parles avec ton ami(e) français(e). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu regardes beaucoup la télé ?',
    tasks:[
      {q:'Say one programme you watch on television or online.',detail:'',unprepared:false,
       teacher:'Quelle emission est-ce que tu regardes ?',
       g:{full:'J\'adore / Je regarde Eastenders.',part:'Un film — no verb',miss:'(La) Tele (est) bonne'}},
      {q:'Give one opinion about this programme.',detail:'',unprepared:false,
       teacher:'Quelle est ton opinion de cette emission ?',
       g:{full:'C\'est drole / J\'aime les acteurs.',part:'Interessant — no verb',miss:'Acteurs'}},
      {q:'Ask your friend a question about television.',detail:'',unprepared:true,
       teacher:'D\'accord. (Give an appropriate response.)',
       g:{full:'Tu regardes beaucoup la tele ? / Qu\'est-ce que tu aimes a la television ?',part:'(Tu) Aimer la tele ? — no verb',miss:'Ta tele chambre ?'}},
      {q:'Describe your favourite actor.',detail:'Give one detail.',unprepared:false,
       teacher:'Decris ton acteur ou ton actrice prefere(e).',
       g:{full:'Il/Elle s\'appelle X / Mon acteur prefere est grand(e).',part:'(Tres) beau/belle — no verb',miss:'Scarlett Johansson'}},
      {q:'Say where you go at the weekend.',detail:'Give one detail.',unprepared:false,
       teacher:'Ou vas-tu le week-end ?',
       g:{full:'Je vais en ville / au stade / J\'aime faire les magasins.',part:'(Normalement) Aller a York — no verb',miss:'Je vais avec mes amis'}},
    ]},
  10:{title:'Films et loisirs',friend:'Canadian friend',
    intro:'Tu parles avec ton ami(e) canadien(ne). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu aimes regarder des films ?',
    tasks:[
      {q:'Say what type of film you prefer and why.',detail:'Give one type and one reason.',unprepared:false,
       teacher:'Quelle sorte de film est-ce que tu preferes ? ... Pourquoi ?',
       g:{full:'Je prefere les films d\'action. Ils sont super.',part:'(D\')amour... drole — no verb',miss:'Action / Genial — only one element'}},
      {q:'Describe your favourite actor.',detail:'Give two details.',unprepared:false,
       teacher:'Decris ton acteur ou ton actrice prefere(e).',
       g:{full:'Mon acteur prefere est X. Il est beau.',part:'Grand(e) et beau/belle — no verbs',miss:'Neither part conveyed'}},
      {q:'Say something you did in your free time last week.',detail:'Give two details.',unprepared:false,
       teacher:'Qu\'est-ce que tu as fait la semaine derniere ?',
       g:{full:'J\'ai vu un film avec mes amis / J\'ai fait du shopping.',part:'Je joue au football. Je regarde la tele — wrong tense',miss:'Le cinema bon — incomprehensible'}},
      {q:'Give one advantage of playing sport.',detail:'',unprepared:false,
       teacher:'Quel est l\'avantage de faire du sport ?',
       g:{full:'C\'est bon pour la sante / C\'est amusant.',part:'passionnant — no verb',miss:'Sport'}},
      {q:'Ask your friend a question about free time.',detail:'',unprepared:true,
       teacher:'Oui, c\'est vrai. (Give an appropriate response.)',
       g:{full:'Qu\'est-ce que tu fais pendant ton temps libre ?',part:'Pendant ton temps libre la musique ? — no verb',miss:'Foot bon ?'}},
    ]},
  11:{title:'Les amis',friend:'Swiss friend',
    intro:'Tu parles avec ton ami(e) suisse. Moi, je suis ton ami(e).',
    teacherOpening:'Bonjour ! Tu as beaucoup d\'amis ?',
    tasks:[
      {q:'Say what your best friend looks like.',detail:'Give two details.',unprepared:false,
       teacher:'Ton ou ta meilleur(e) ami(e) est comment ?',
       g:{full:'Il/Elle est petit(e). Il/Elle a les cheveux noirs.',part:'Petit(e) et (les) cheveux noirs — no verbs',miss:'Neither element conveyed'}},
      {q:'Say what makes a good friend.',detail:'Give one detail.',unprepared:false,
       teacher:'Qu\'est-ce que c\'est un(e) bon(ne) ami(e) ?',
       g:{full:'Un(e) bon(ne) ami(e) est drole / Il/Elle est drole.',part:'Drole — no verb',miss:'Emeubeul — incomprehensible'}},
      {q:'Say what you and your friends talk about.',detail:'Give two details.',unprepared:false,
       teacher:'De quoi parles-tu avec tes amis ?',
       g:{full:'On parle des amis et de l\'ecole / du sport et des jeux-video.',part:'(De) la musique et (de) la tele — no verb',miss:'(Du) sport — one topic, no verb'}},
      {q:'Describe a day you spent with friends recently.',detail:'Give two details.',unprepared:false,
       teacher:'Parle-moi d\'une journee que tu as passee recemment avec des amis.',
       g:{full:'Je suis alle(e) en ville et j\'ai regarde un film.',part:'Aller a la campagne et manger dans un cafe — no verbs',miss:'One detail, no verb'}},
      {q:'Ask your friend a question about hobbies.',detail:'',unprepared:true,
       teacher:'Tres bien. (Give an appropriate response.)',
       g:{full:'Qu\'est-ce que tu fais pendant ton temps libre ? / Tu aimes la natation ?',part:'La danse interessante ? — no verb',miss:'Tu temps libre ?'}},
    ]},
  12:{title:'La region',friend:'French friend',
    intro:'Tu parles avec ton ami(e) français(e). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu habites dans quelle région ?',
    tasks:[
      {q:'Say what tourists can do in your region.',detail:'Give two details.',unprepared:false,
       teacher:'Comme touriste, qu\'est-ce qu\'on peut faire dans ta region ?',
       g:{full:'On peut visiter la ville historique et voir le musee.',part:'Chateau et campagne — no verbs',miss:'Je visite la ville — wrong subject'}},
      {q:'Say if you like living in your region and why / why not.',detail:'Give one opinion and one reason.',unprepared:false,
       teacher:'Tu aimes habiter dans ta region ? ... Pourquoi / pourquoi pas ?',
       g:{full:'J\'aime ma region parce que c\'est tranquille.',part:'(La) region bonne ... beaucoup a faire — no verb',miss:'Nothing conveyed'}},
      {q:'Ask your friend a question about the environment.',detail:'',unprepared:true,
       teacher:'Moi aussi. (Give an appropriate response.)',
       g:{full:'Il y a des centres de recyclage ? / Il y a beaucoup de pollution ?',part:'Beaucoup de pollution ? — no verb',miss:'L\'environnement ?'}},
      {q:'Describe an environmental problem in your area.',detail:'Give one detail.',unprepared:false,
       teacher:'Est-ce qu\'il y a des problemes d\'environnement dans ta region ?',
       g:{full:'Il y a trop de plastique / Les rues sont sales.',part:'Sale / (Le) plastique — no verb',miss:'Probleme dans l\'environnement'}},
      {q:'Say what you did to protect the environment last week.',detail:'Give two details.',unprepared:false,
       teacher:'Qu\'est-ce que tu as fait pour proteger l\'environnement la semaine derniere ?',
       g:{full:'J\'ai fait du recyclage du papier et du verre.',part:'Je fais du recyclage — wrong tense',miss:'Plastique et verre — no verb'}},
    ]},
  13:{title:'L\'ecole (Higher)',friend:'Swiss friend',
    intro:'Tu parles avec ton ami(e) suisse. Moi, je suis ton ami(e).',
    teacherOpening:'Bonjour ! Ton collège, il est comment ?',
    tasks:[
      {q:'Describe your school.',detail:'Give two details.',unprepared:false,
       teacher:'Ton college, il est comment ?',
       g:{full:'Mon college est moderne. Il y a un bon rapport entre les professeurs et les eleves.',part:'Le college dur. Les profs nuls — no accurate verbs',miss:'Le college ici'}},
      {q:'Say what you think of exams and why.',detail:'Give one opinion and one reason.',unprepared:false,
       teacher:'Qu\'est-ce que tu penses des examens ? ... Pourquoi ?',
       g:{full:'Je deteste les examens car ils sont durs.',part:'Les examens, ca va. Necessaires — no verbs',miss:'Nothing conveyed'}},
      {q:'Say what you did last week at school.',detail:'Give two details.',unprepared:false,
       teacher:'Qu\'est-ce que tu as fait au college la semaine derniere ?',
       g:{full:'J\'ai etudie les maths. C\'etait interessant.',part:'Je fais l\'histoire et les mathematiques — wrong tense',miss:'La semaine derniere au college'}},
      {q:'Ask your friend a question about school.',detail:'',unprepared:true,
       teacher:'D\'accord. (Give an appropriate response.)',
       g:{full:'Tu aimes ton uniforme ? / Les cours commencent a quelle heure ?',part:'Le sport au college ? — no verb',miss:'Tu college ?'}},
      {q:'Give one opinion of going to university.',detail:'',unprepared:false,
       teacher:'Quelle est ton opinion d\'aller a l\'universite ?',
       g:{full:'C\'est cher / C\'est bon pour ma carriere.',part:'Utile / Cher — no verb',miss:'L\'universite, oui'}},
    ]},
  14:{title:'La sante (Higher)',friend:'Moroccan friend',
    intro:'Tu parles avec ton ami(e) marocain(e). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu fais attention à ta santé ?',
    tasks:[
      {q:'Say if you eat healthily and why / why not.',detail:'Give one opinion and one reason.',unprepared:false,
       teacher:'A ton avis, est-ce que tu manges sain ? ... Pourquoi / pourquoi pas ?',
       g:{full:'Je mange sain. Je prends beaucoup de legumes.',part:'Je manger sain. Beaucoup de fruits — no accurate verbs',miss:'Je mange(r)'}},
      {q:'Describe a recent sporting activity.',detail:'Give two details.',unprepared:false,
       teacher:'Quel sport as-tu fait recemment ?',
       g:{full:'Samedi, j\'ai joue au foot.',part:'(Le) foot avec mon equipe — no verb',miss:'Samedi / (Le) sport'}},
      {q:'Say what you do to relax.',detail:'Give two details.',unprepared:false,
       teacher:'Qu\'est-ce que tu fais pour te relaxer ?',
       g:{full:'Je vais au cinema avec mes amis / Je joue aux jeux-video.',part:'Cinema avec mes amis — no verb',miss:'Relaxer'}},
      {q:'Ask your friend a question about healthy living.',detail:'',unprepared:true,
       teacher:'Tres bien. (Give an appropriate response.)',
       g:{full:'Tu as une vie saine ? / Tu manges bien ? / Tu fais du sport ?',part:'(Tu) Manger bien ? — no verb',miss:'Ta vie ?'}},
      {q:'Say something about the importance of friends.',detail:'Give one detail.',unprepared:false,
       teacher:'Quelle est l\'importance des amis ?',
       g:{full:'Ils m\'aident / Mes amis et moi, on aime les memes choses.',part:'Aimer les memes choses — no verb',miss:'(Mes) amis'}},
    ]},
  15:{title:'Sport et sante',friend:'Belgian friend',
    intro:'Tu parles avec ton ami(e) belge. Moi, je suis ton ami(e).',
    teacherOpening:'Bonjour ! Tu fais beaucoup de sport ?',
    tasks:[
      {q:'Say when you do sport.',detail:'Give one detail.',unprepared:false,
       teacher:'Quand est-ce que tu fais du sport ?',
       g:{full:'Je joue au football le samedi / Je fais du sport le week-end.',part:'A sept heures — no verb',miss:'J\'aime le sport'}},
      {q:'Say what you did last week to stay healthy.',detail:'Give two details.',unprepared:false,
       teacher:'Qu\'est-ce que tu as fait la semaine derniere pour rester en forme ?',
       g:{full:'J\'ai dormi huit heures et j\'ai bu de l\'eau.',part:'Je bois de l\'eau et je mange des repas vegetariens — wrong tense',miss:'(Des) repas vegetariens'}},
      {q:'Say how you relax.',detail:'Give two details.',unprepared:false,
       teacher:'Qu\'est-ce que tu fais pour te relaxer ?',
       g:{full:'Je sors avec mon chien et je danse.',part:'Je nager et lire — no verbs',miss:'J\'aime me relaxer'}},
      {q:'Say what you think about fast food and why.',detail:'Give one opinion and one reason.',unprepared:false,
       teacher:'Qu\'est-ce que tu penses du fast-food ? Pourquoi ?',
       g:{full:'J\'aime le fast-food. C\'est facile.',part:'Je n\'aime pas le fast-food. Nul — no verb for reason',miss:'Le fast-food a McDonalds'}},
      {q:'Ask your friend a question about food.',detail:'',unprepared:true,
       teacher:'Moi aussi. (Give an appropriate response.)',
       g:{full:'Qu\'est-ce que tu aimes manger ? / Tu manges du poisson ?',part:'Les gateaux ? — no verb',miss:'Tu repas ?'}},
    ]},
  16:{title:'Les celebrites',friend:'Canadian friend',
    intro:'Tu parles avec ton ami(e) canadien(ne). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu t\'intéresses aux célébrités ?',
    tasks:[
      {q:'Describe a celebrity you like.',detail:'Give two details.',unprepared:false,
       teacher:'Qui est-ce que tu apprecies ?',
       g:{full:'J\'aime X. Il est super / Elle est benevole.',part:'Il fort et rapide — no verb',miss:'J\'aime celebrite(s)'}},
      {q:'Say if you would like to be famous in the future and why / why not.',detail:'Give one opinion and one reason.',unprepared:false,
       teacher:'Est-ce que tu voudrais etre celebre a l\'avenir ? ... Pourquoi / pourquoi pas ?',
       g:{full:'Je voudrais etre celebre car je veux avoir beaucoup d\'argent.',part:'Je vais celebre car j\'ai beaucoup d\'argent — no accurate verb',miss:'Celebre, oui'}},
      {q:'Ask your friend a question about their favourite celebrity.',detail:'',unprepared:true,
       teacher:'C\'est bien. (Give an appropriate response.)',
       g:{full:'Qui est ton acteur prefere ? / Ta celebrite preferee habite en Angleterre ?',part:'(Qui) ta personne celebre preferee ? — no verb',miss:'Tu preferes celebrite ?'}},
      {q:'Give two advantages of social media.',detail:'',unprepared:false,
       teacher:'Quels sont les avantages des reseaux sociaux ?',
       g:{full:'Je communique avec mes amis et je poste des photos.',part:'Interessant et utile — no verbs',miss:'(Les) mails'}},
      {q:'Say something about reality TV.',detail:'Give one detail.',unprepared:false,
       teacher:'Parle-moi de la tele-realite.',
       g:{full:'La tele-realite / C\'est drole / J\'adore la tele-realite.',part:'La tele-realite drole — no verb',miss:'Realite bonne'}},
    ]},
  17:{title:'La region (Higher)',friend:'Swiss friend',
    intro:'Tu parles avec ton ami(e) suisse. Moi, je suis ton ami(e).',
    teacherOpening:'Bonjour ! Tu peux me décrire ta région ?',
    tasks:[
      {q:'Describe your region.',detail:'Give two details.',unprepared:false,
       teacher:'Decris ta region.',
       g:{full:'Ma region est historique et jolie / C\'est tranquille mais je la trouve sale.',part:'Ma region industrielle. J\'aimer — no accurate verb',miss:'Touristes'}},
      {q:'Say what there is for young people in your area.',detail:'Give two details.',unprepared:false,
       teacher:'Qu\'est-ce qu\'il y a pour les jeunes dans ta region ?',
       g:{full:'Il y a un cinema et on peut aller danser.',part:'Les magasins et les cafes — no verb',miss:'Nothing conveyed'}},
      {q:'Describe the weather in your region.',detail:'Give one detail.',unprepared:false,
       teacher:'Quel temps fait-il dans ta region ?',
       g:{full:'Il (ne) fait (pas) chaud / Il pleut beaucoup.',part:'Du soleil (en ete) — no verb',miss:'Le temps'}},
      {q:'Say where you would like to live in the future and why.',detail:'Give one detail and one reason.',unprepared:false,
       teacher:'Ou est-ce que tu voudrais habiter a l\'avenir ? ... Pourquoi ?',
       g:{full:'Je voudrais habiter a Londres. Il y a beaucoup a faire.',part:'Je voudrais habiter aux Etats-Unis. Interessant — no verb for reason',miss:'J\'aime Paris'}},
      {q:'Ask your friend a question about where they live.',detail:'',unprepared:true,
       teacher:'C\'est interessant, ca. (Give an appropriate response.)',
       g:{full:'Ou habites-tu ? / Tu aimes ton village ?',part:'Ta ville grande ? — no verb',miss:'Ou voudrais-tu habiter ?'}},
    ]},
  18:{title:'La technologie',friend:'French friend',
    intro:'Tu parles avec ton ami(e) français(e). Moi, je suis ton ami(e).',
    teacherOpening:'Salut ! Tu utilises beaucoup la technologie au collège ?',
    tasks:[
      {q:'Describe your school.',detail:'Give two details.',unprepared:false,
       teacher:'Ton college, il est comment ?',
       g:{full:'Mon college est moderne. Il y a un bon rapport entre les professeurs et les eleves.',part:'Le college dur. Les profs nuls — no accurate verbs',miss:'Le college ici'}},
      {q:'Say something about school rules.',detail:'Give two details.',unprepared:false,
       teacher:'Parle-moi des regles scolaires.',
       g:{full:'Il y a beaucoup de regles. Je dois porter un uniforme.',part:'Etre tot et porter l\'uniforme — no verbs',miss:'Regles scolaires'}},
      {q:'Say how you used technology recently at school.',detail:'Give two details.',unprepared:false,
       teacher:'Comment as-tu utilise la technologie recemment au college ?',
       g:{full:'J\'ai ecrit une histoire a l\'ordinateur et nous avons fait un exercice de maths.',part:'Faire des controles et envoyer des mails — no verbs',miss:'Mes exercices'}},
      {q:'Give one advantage of the internet.',detail:'',unprepared:false,
       teacher:'Qu\'est-ce que tu penses d\'Internet ?',
       g:{full:'Internet est rapide / Je fais du shopping en ligne.',part:'Rapide / Des courses (en ligne) — no verb',miss:'Il y a des problemes de securite'}},
      {q:'Ask your friend a question about technology.',detail:'',unprepared:true,
       teacher:'Oui, c\'est vrai. (Give an appropriate response.)',
       g:{full:'Tu as un portable ? / Tu utilises beaucoup les medias sociaux ?',part:'(Utiliser les) medias sociaux ? — no verb',miss:'Tu un portable ?'}},
    ]},
};

// Reading aloud data
const READ_ALOUD = {
  1:{topic:'Education & work',
   text:'Le collège commence à huit heures.\n\nJ\'étudie beaucoup de matières et j\'aime bien ça. À la récréation, je parle avec mes amis.\n\nMon copain est très intelligent.\n\nPlus tard, il veut travailler en France.',
   questions:['Où est ton collège ?','Parle-moi de ta matière préférée.','Quand est-ce que tu fais tes devoirs ?','Qu\'est-ce que tu penses de ton uniforme ?']},
  2:{topic:'Celebrity culture',
   text:'Mon acteur préféré est beau.\n\nSes films d\'action sont très célèbres.\n\nJ\'adore aussi regarder ses vidéos amusantes sur Internet. Il habite au Canada, dans une grande maison.\n\nSa copine est une chanteuse française.',
   questions:['Qu\'est-ce que tu penses des films d\'action ?','Quelle est ton opinion de regarder des films en ligne ?','Quelle sorte de musique aimes-tu ?','Parle-moi de ton chanteur ou ta chanteuse préféré(e).']},
  3:{topic:'Media & technology',
   text:'La technologie est très utile.\n\nIl y a beaucoup d\'applications.\n\nMoi, j\'écoute de la musique sur mon téléphone portable. Je fais aussi mes devoirs sur mon ordinateur.\n\nMon copain aime faire les courses en ligne.',
   questions:['Qu\'est-ce que tu aimes faire sur Internet ?','Quelle est ton opinion de partager des photos en ligne ?','Qu\'est-ce que tu penses du shopping en ligne ?','Quand est-ce que tu utilises la technologie au collège ?']},
  4:{topic:'Identity & relationships',
   text:'Mon amie habite près de chez moi. Elle a presque quinze ans.\n\nJe pense qu\'elle est très belle. Sa famille a un petit chien blanc.\n\nOn aime faire des promenades ensemble au parc ou dans la forêt.',
   questions:['Où habites-tu ?','Décris ta personnalité.','Quelle est ton opinion des animaux ?','Quand est-ce que tu aimes sortir avec tes amis ?']},
  5:{topic:'Healthy living',
   text:'Mon ami fait un effort pour être en bonne santé. Faire de l\'exercice est important.\n\nSon sport préféré est la natation.\n\nIl mange toujours de la nourriture saine.\n\nAu supermarché, il achète souvent des légumes.',
   questions:['Quand est-ce que tu fais du sport ?','Parle-moi de ton repas préféré.','Qu\'est-ce que tu n\'aimes pas manger ?','Quelle est ton opinion de fumer ?']},
  6:{topic:'Free time',
   text:'Je vais souvent en ville avec mes copains. Il y a un cinéma au centre.\n\nJ\'aime beaucoup faire les magasins. Pour moi, le shopping est génial.\n\nJ\'achète surtout des livres et des vêtements de sport.',
   questions:['Quelle sorte de film est-ce que tu préfères ?','À la maison, qu\'est-ce que tu fais dans ton temps libre ?','Qu\'est-ce que tu aimes comme musique ?','Qu\'est-ce que tu penses du sport ?']},
  7:{topic:'Customs & celebrations',
   text:'Ma fête préférée, c\'est mon anniversaire. Je célèbre ça à la maison.\n\nJ\'aime aussi aller danser avec mes amis. Mon copain, il adore Noël.\n\nIl mange un grand repas traditionnel avec sa famille.',
   questions:['Quelle est la date de ton anniversaire ?','Le jour de ton anniversaire, qu\'est-ce que tu aimes manger ?','Décris un bon cadeau d\'anniversaire.','À une fête, quelle sorte de musique est-ce que tu préfères ?']},
  8:{topic:'Education & work',
   text:'J\'adore mon collège et les profs aussi. Ma prof de mathématiques est super. Je porte un uniforme vert.\n\nLa récréation est à onze heures.\n\nJ\'aime l\'histoire et je veux travailler dans un musée.',
   questions:['Où est ton collège ?','Qu\'est-ce que tu penses de ton uniforme ?','Qu\'est-ce que tu fais pendant la récréation ?','Qu\'est-ce que tu n\'aimes pas comme matières scolaires ?']},
  9:{topic:'Environment & where people live',
   text:'Ma ville est très belle et historique.\n\nElle se trouve dans le sud de la France. On peut visiter le château.\n\nMoi, j\'adore aller au jardin public.\n\nIci, il n\'y a pas beaucoup de pollution.',
   questions:['Où habites-tu ?','Parle-moi des magasins dans ta région.','Qu\'est-ce que tu n\'aimes pas dans ta région ?','Qu\'est-ce que tu fais pour aider l\'environnement ?']},
  10:{topic:'Education & work',
   text:'Hier, j\'ai quitté la maison à huit heures avec mon frère. Alors, nous sommes arrivés au collège en retard.\n\nMon premier cours était les sciences. Heureusement, le prof est sympa.\n\nIl est toujours drôle et il aide ses élèves.\n\nÀ l\'avenir, je voudrais travailler dans une école à Paris.',
   questions:['Quel est ton jour préféré au collège ?','Qu\'est-ce que tu penses des règles au collège ?','Parle-moi des clubs dans ton collège.','Quelle est ton opinion d\'aller à l\'université ?']},
  11:{topic:'Celebrity culture',
   text:'J\'adore regarder des films.\n\nMon actrice préférée a récemment gagné un prix à un festival de cinéma.\n\nJ\'aime la suivre en ligne.\n\nActuellement elle est dans une émission de télé-réalité.\n\nElle reçoit beaucoup de votes parce qu\'elle est très populaire. Selon moi, c\'est une vraie star !',
   questions:['Parle-moi d\'un film que tu aimes.','Qu\'est-ce que tu penses des stars de télé-réalité ?','Quelle célébrité veux-tu rencontrer ?','Quels sont les problèmes pour les célébrités ?']},
  12:{topic:'Media & technology',
   text:'La technologie est devenue essentielle dans la vie moderne. Elle est partout : en ligne, en ville, à la campagne, même à la maison.\n\nLes réseaux sociaux sont très populaires, surtout parmi les jeunes. On peut télécharger de la musique et regarder des vidéos.\n\nCependant, il y a aussi des dangers.',
   questions:['Qu\'est-ce que tu fais en ligne ?','Quelle sorte de musique est-ce que tu aimes télécharger ?','Quels sont les dangers de la technologie ?','Qu\'est-ce que tu penses des portables ?']},
  13:{topic:'Environment & where people live',
   text:'J\'habite dans une ville industrielle, au nord de l\'Angleterre. Malheureusement, il y a trop de pollution.\n\nAlors, protéger l\'environnement est important pour beaucoup de gens.\n\nIci, on peut recycler, prendre le bus et utiliser des vélos gratuits. À l\'avenir, je vais continuer à vivre dans cette région.',
   questions:['Qu\'est-ce que tu aimes faire dans ta région ?','Parle-moi de ta maison ou ton appartement.','Qu\'est-ce que tu recycles à la maison ?','Qu\'est-ce que tu penses des transports dans ta région ?']},
  14:{topic:'Healthy living',
   text:'Le matin je me lève très tôt, à sept heures.\n\nEnsuite, je sors avec ma mère et notre chien pour courir dix kilomètres.\n\nL\'année dernière j\'ai pris la décision de devenir végétarien. Mon frère, lui, il est complètement différent.\n\nIl est absolument paresseux et ne mange pas bien !',
   questions:['Parle-moi de l\'importance de faire de l\'exercice.','Qu\'est-ce que tu fais pour te relaxer à la maison ?','Qu\'est-ce que tu manges pour être en bonne santé ?','Que penses-tu du fast-food ?']},
  15:{topic:'Free time',
   text:'Mon passe-temps préféré est la natation.\n\nEn novembre, je participe au concours de France. Je nage depuis quinze ans et je n\'ai que seize ans !\n\nLe week-end dernier, je suis allée à la piscine avec mes amies. Après ça, nous avons vu un film au cinéma qui était formidable.',
   questions:['Quel sport est-ce que tu aimes regarder ?','Quels sont les avantages de regarder un film au cinéma ?','Décris-moi un acteur ou une actrice que tu aimes.','Parle-moi de ta musique préférée.']},
  16:{topic:'Free time',
   text:'Le week-end dernier, j\'ai fait les magasins avec mon meilleur ami. Il a acheté le nouveau roman de son auteur préféré.\n\nMoi, je lis souvent des articles sur Internet.\n\nPendant mon temps libre, je joue en ligne et j\'adore aller aux concerts.\n\nLa musique est essentielle dans ma vie.',
   questions:['Quelle sorte de magasins est-ce que tu aimes ?','Qu\'est-ce que tu penses des jeux en ligne ?','Décris-moi ton chanteur ou ta chanteuse préféré(e).','Quels sont les avantages de faire du sport ?']},
  17:{topic:'Travel & tourism',
   text:'Selon moi, les vacances d\'été sont importantes dans la vie.\n\nLa plupart des gens vont à l\'étranger pour profiter du beau temps. Ils aiment aussi pratiquer une langue différente.\n\nRécemment, mon meilleur ami est allé en Suisse. Il a découvert la culture et les traditions de ce pays.',
   questions:['Qu\'est-ce que tu fais pendant les vacances scolaires quand il fait beau ?','Tu préfères passer tes vacances d\'été avec qui ?','Quel est l\'avantage de parler une langue différente ?','Qu\'est-ce qu\'il y a pour les touristes dans ta région ?']},
  18:{topic:'Environment & where people live',
   text:'J\'ai de la chance.\n\nJ\'habite une maison en pleine campagne, près d\'un petit lac. Les magasins sont à quelques minutes.\n\nMais, ce qui m\'intéresse, c\'est l\'énergie de la grande ville.\n\nJe voudrais habiter au dernier étage d\'un grand bâtiment, à Paris par exemple.',
   questions:['Dans ta région, quelle sorte de magasins aimes-tu ?','Qu\'est-ce qu\'il y a pour les jeunes dans ta région ?','Quels problèmes est-ce qu\'il y a dans ta ville ou ton village ?','Qu\'est-ce que tu penses d\'habiter à l\'étranger ?']},
};

// Photo card conversation topics
const PC_CONV_TOPICS = {
  'People & lifestyle':['Identity & relationships with others','Healthy living & lifestyle','Education & work'],
  'Popular culture':['Free-time activities','Customs, festivals & celebrations','Celebrity culture'],
  'Communication & world around us':['Travel & tourism including places of interest','Media & technology','The environment & where people live']
};

const PC_SAMPLE_QUESTIONS = {
  'Identity & relationships with others':[
    {fr:'Parle-moi de ta famille.',en:'Tell me about your family.'},
    {fr:'Comment est ton/ta meilleur(e) ami(e) ?',en:'What is your best friend like?'},
    {fr:'Qu\'est-ce qui est important dans une amitié ?',en:'What is important in a friendship?'},
    {fr:'Est-ce que tu t\'entends bien avec ta famille ?',en:'Do you get on well with your family?'},
    {fr:'Décris ta personnalité.',en:'Describe your personality.'},
    {fr:'Quelles qualités cherches-tu chez un(e) ami(e) ?',en:'What qualities do you look for in a friend?'},
    {fr:'Parle-moi d\'une personne importante dans ta vie.',en:'Tell me about an important person in your life.'},
    {fr:'Est-ce que les réseaux sociaux aident les relations ?',en:'Do social networks help relationships?'},
    {fr:'Préfères-tu passer du temps avec ta famille ou tes amis ?',en:'Do you prefer spending time with family or friends?'},
    {fr:'Comment est-ce que tu gardes contact avec tes amis ?',en:'How do you keep in touch with your friends?'}
  ],
  'Healthy living & lifestyle':[
    {fr:'Qu\'est-ce que tu fais pour rester en forme ?',en:'What do you do to stay fit?'},
    {fr:'Est-ce que tu manges sainement ?',en:'Do you eat healthily?'},
    {fr:'Quel sport pratiques-tu ?',en:'What sport do you do?'},
    {fr:'Qu\'est-ce que tu penses du fast-food ?',en:'What do you think of fast food?'},
    {fr:'Comment est-ce que tu te relaxes ?',en:'How do you relax?'},
    {fr:'Dors-tu assez ?',en:'Do you get enough sleep?'},
    {fr:'Quels sont les avantages de faire du sport ?',en:'What are the benefits of doing sport?'},
    {fr:'Est-ce que tu penses que les jeunes ont une vie saine ?',en:'Do you think young people live healthily?'},
    {fr:'Qu\'est-ce que tu as fait la semaine dernière pour ta santé ?',en:'What did you do last week for your health?'},
    {fr:'Quelle est ton opinion sur le tabac et l\'alcool ?',en:'What is your opinion on tobacco and alcohol?'}
  ],
  'Education & work':[
    {fr:'Parle-moi de ton collège.',en:'Tell me about your school.'},
    {fr:'Quelle est ta matière préférée et pourquoi ?',en:'What is your favourite subject and why?'},
    {fr:'Qu\'est-ce que tu voudrais faire comme métier ?',en:'What job would you like to do?'},
    {fr:'Qu\'est-ce que tu penses des examens ?',en:'What do you think of exams?'},
    {fr:'Est-ce que tu voudrais aller à l\'université ?',en:'Would you like to go to university?'},
    {fr:'Décris une journée typique au collège.',en:'Describe a typical day at school.'},
    {fr:'Quels sont les avantages de parler une langue étrangère ?',en:'What are the advantages of speaking a foreign language?'},
    {fr:'Qu\'est-ce que tu as fait au collège la semaine dernière ?',en:'What did you do at school last week?'},
    {fr:'Qu\'est-ce que tu n\'aimes pas au collège ?',en:'What don\'t you like about school?'},
    {fr:'Comment sont tes professeurs ?',en:'What are your teachers like?'}
  ],
  'Free-time activities':[
    {fr:'Qu\'est-ce que tu fais pendant ton temps libre ?',en:'What do you do in your free time?'},
    {fr:'Quel est ton passe-temps préféré ?',en:'What is your favourite hobby?'},
    {fr:'Parle-moi d\'un film que tu as vu récemment.',en:'Tell me about a film you saw recently.'},
    {fr:'Est-ce que tu joues d\'un instrument de musique ?',en:'Do you play a musical instrument?'},
    {fr:'Qu\'est-ce que tu as fait le week-end dernier ?',en:'What did you do last weekend?'},
    {fr:'Quelle sorte de musique est-ce que tu aimes ?',en:'What kind of music do you like?'},
    {fr:'Est-ce que tu préfères les activités en plein air ou à la maison ?',en:'Do you prefer outdoor or indoor activities?'},
    {fr:'Combien de temps passes-tu sur ton téléphone chaque jour ?',en:'How much time do you spend on your phone each day?'},
    {fr:'Est-ce que tu lis beaucoup ?',en:'Do you read a lot?'},
    {fr:'Qu\'est-ce que tu feras pendant les prochaines vacances ?',en:'What will you do in the next holidays?'}
  ],
  'Customs, festivals & celebrations':[
    {fr:'Quelle est ta fête préférée et pourquoi ?',en:'What is your favourite celebration and why?'},
    {fr:'Comment est-ce que tu fêtes ton anniversaire ?',en:'How do you celebrate your birthday?'},
    {fr:'Parle-moi d\'une fête traditionnelle dans ta région.',en:'Tell me about a traditional celebration in your area.'},
    {fr:'Est-ce que tu fêtes Noël ? Comment ?',en:'Do you celebrate Christmas? How?'},
    {fr:'Quelle est l\'importance des traditions familiales ?',en:'What is the importance of family traditions?'},
    {fr:'Est-ce que tu aimes les fêtes ? Pourquoi ?',en:'Do you like celebrations? Why?'},
    {fr:'Qu\'est-ce que tu as fait lors d\'une fête récente ?',en:'What did you do at a recent celebration?'},
    {fr:'Est-ce que les fêtes sont importantes pour les jeunes ?',en:'Are celebrations important for young people?'},
    {fr:'Qu\'est-ce que tu manges lors des fêtes ?',en:'What do you eat at celebrations?'},
    {fr:'Comment est-ce que tu prépares une fête ?',en:'How do you prepare for a celebration?'}
  ],
  'Celebrity culture':[
    {fr:'Qui est ta célébrité préférée et pourquoi ?',en:'Who is your favourite celebrity and why?'},
    {fr:'Qu\'est-ce que tu penses de la téléréalité ?',en:'What do you think of reality TV?'},
    {fr:'Est-ce que tu voudrais être célèbre ? Pourquoi ?',en:'Would you like to be famous? Why?'},
    {fr:'Quels sont les problèmes d\'être célèbre ?',en:'What are the problems of being famous?'},
    {fr:'Est-ce que les célébrités ont trop d\'influence sur les jeunes ?',en:'Do celebrities have too much influence on young people?'},
    {fr:'Parle-moi d\'un(e) acteur/actrice que tu aimes.',en:'Tell me about an actor/actress you like.'},
    {fr:'Qu\'est-ce que tu penses des réseaux sociaux des célébrités ?',en:'What do you think of celebrities\' social media?'},
    {fr:'Est-ce que les célébrités sont de bons modèles ?',en:'Are celebrities good role models?'},
    {fr:'Quel film as-tu regardé récemment ?',en:'What film did you watch recently?'},
    {fr:'Préfères-tu regarder des films au cinéma ou à la maison ?',en:'Do you prefer watching films at the cinema or at home?'}
  ],
  'Travel & tourism including places of interest':[
    {fr:'Où es-tu allé(e) en vacances l\'année dernière ?',en:'Where did you go on holiday last year?'},
    {fr:'Quel est ton pays préféré et pourquoi ?',en:'What is your favourite country and why?'},
    {fr:'Est-ce que tu préfères les vacances à la mer ou à la montagne ?',en:'Do you prefer holidays at the seaside or in the mountains?'},
    {fr:'Qu\'est-ce qu\'il y a à voir dans ta région pour les touristes ?',en:'What is there to see in your area for tourists?'},
    {fr:'Est-ce que tu voudrais vivre à l\'étranger ?',en:'Would you like to live abroad?'},
    {fr:'Quels sont les avantages de voyager ?',en:'What are the advantages of travelling?'},
    {fr:'Parle-moi d\'un endroit que tu voudrais visiter.',en:'Tell me about a place you would like to visit.'},
    {fr:'Est-ce que le tourisme est bon pour l\'environnement ?',en:'Is tourism good for the environment?'},
    {fr:'Qu\'est-ce que tu aimes faire pendant les vacances ?',en:'What do you like doing on holiday?'},
    {fr:'Décris des vacances idéales.',en:'Describe an ideal holiday.'}
  ],
  'Media & technology':[
    {fr:'Combien de temps passes-tu sur Internet chaque jour ?',en:'How much time do you spend on the internet each day?'},
    {fr:'Quels sont les avantages et les inconvénients des réseaux sociaux ?',en:'What are the advantages and disadvantages of social media?'},
    {fr:'Est-ce que la technologie a amélioré ta vie ?',en:'Has technology improved your life?'},
    {fr:'Qu\'est-ce que tu penses des jeux vidéo ?',en:'What do you think of video games?'},
    {fr:'Est-ce que tu achètes des choses en ligne ?',en:'Do you buy things online?'},
    {fr:'Comment utilises-tu la technologie au collège ?',en:'How do you use technology at school?'},
    {fr:'Quels sont les dangers d\'Internet ?',en:'What are the dangers of the internet?'},
    {fr:'Quel est ton réseau social préféré ?',en:'What is your favourite social network?'},
    {fr:'Est-ce que tu lis les nouvelles en ligne ?',en:'Do you read the news online?'},
    {fr:'Comment la technologie a-t-elle changé la façon dont les gens communiquent ?',en:'How has technology changed the way people communicate?'}
  ],
  'The environment & where people live':[
    {fr:'Qu\'est-ce que tu fais pour protéger l\'environnement ?',en:'What do you do to protect the environment?'},
    {fr:'Parle-moi de l\'endroit où tu habites.',en:'Tell me about where you live.'},
    {fr:'Quels sont les problèmes environnementaux dans ta région ?',en:'What are the environmental problems in your area?'},
    {fr:'Est-ce que tu recycles ? Qu\'est-ce que tu recycles ?',en:'Do you recycle? What do you recycle?'},
    {fr:'Que penses-tu du changement climatique ?',en:'What do you think about climate change?'},
    {fr:'Est-ce que tu préfères la ville ou la campagne ?',en:'Do you prefer the town or the countryside?'},
    {fr:'Qu\'est-ce que les jeunes peuvent faire pour aider l\'environnement ?',en:'What can young people do to help the environment?'},
    {fr:'Est-ce que les transports en commun sont importants ?',en:'Are public transport important?'},
    {fr:'Voudrais-tu habiter dans un autre pays ? Pourquoi ?',en:'Would you like to live in another country? Why?'},
    {fr:'Comment est-ce que ta région a changé récemment ?',en:'How has your area changed recently?'}
  ]
};

// State
let speakTier = 'F';
let speakMode = null; // 'full' or 'part'
let speakPart = null; // 'rp', 'ra', 'pc'
let speakPaperNum = null;
let speakPhase = 'home'; // home|select|prep|task|result
let speakTaskIdx = 0;
let speakScores = {};
let speakPrepTimer = null;
let speakPrepSecs = 900;
let speakExamScores = {};

function setSpeakTier(t){
  speakTier = t;
  speakPhase = 'home';
  renderSpeakBody();
}

function openSpeakScreen(){
  speakTier = 'F'; speakMode = null; speakPart = null; speakPaperNum = null;
  speakPhase = 'home'; speakScores = {}; speakExamScores = {};
  clearSpeakTimer();
  renderTipsOverlay();
  renderSpeakBody();
  showScreen('speakScreen');
}

function clearSpeakTimer(){
  if(speakPrepTimer){ clearInterval(speakPrepTimer); speakPrepTimer = null; }
}

function playAlertSound(){
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Three short beeps
    [0, 0.4, 0.8].forEach(function(t){
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 880;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.4, ctx.currentTime + t);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.3);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + 0.3);
    });
  } catch(e){}
}

function startSpeakTimer(secs, elId, onDone){
  speakPrepSecs = secs;
  clearSpeakTimer();
  speakPrepTimer = setInterval(function(){
    speakPrepSecs--;
    var el = document.getElementById(elId);
    if(el){
      var m = Math.floor(speakPrepSecs/60);
      var s = speakPrepSecs % 60;
      el.textContent = m + ':' + (s<10?'0':'') + s;
      // Colour changes as time runs low
      if(speakPrepSecs <= 120){ // 2 mins — orange warning
        el.style.color = 'var(--red)';
        el.style.animation = speakPrepSecs <= 60 ? 'trophy-pulse 1s infinite' : '';
      } else if(speakPrepSecs <= 300){ // 5 mins — gold nudge
        el.style.color = 'var(--gold)';
      }
    }
    if(speakPrepSecs <= 0){
      clearSpeakTimer();
      playAlertSound();
      if(onDone) onDone();
    }
  }, 1000);
}

function renderSpeakBody(){
  var body = document.getElementById('speakBody');
  if(!body) return;
  var tier = speakTier;
  if(speakPhase === 'home') body.innerHTML = renderSpeakHome();
  else if(speakPhase === 'select') body.innerHTML = renderSpeakSelect();
  else if(speakPhase === 'prep') body.innerHTML = renderSpeakPrep();
  else if(speakPhase === 'task') body.innerHTML = renderSpeakTask();
  else if(speakPhase === 'result') body.innerHTML = renderSpeakResult();
}

function renderSpeakHome(){
  return '<div style="font-size:0.75rem;color:var(--text3);margin-bottom:10px">AQA French Paper 2 Speaking — Timed exam simulation</div>'

    // Collapsible exam overview
    + '<button onclick="var p=document.getElementById(\'examOverview\');var c=document.getElementById(\'examOverviewChev\');var open=p.style.display===\'none\';p.style.display=open?\'\':\'none\';c.textContent=open?\'▲\':\'▼\';" style="width:100%;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;font-family:var(--font-sans);margin-bottom:0;text-align:left">'
    + '<span style="font-size:0.82rem;font-weight:600;color:var(--text)">ℹ️ About the exam — structure &amp; tips</span>'
    + '<span id="examOverviewChev" style="font-size:0.65rem;color:var(--text3)">▼</span>'
    + '</button>'
    + '<div id="examOverview" style="display:none;background:var(--surface);border:1px solid var(--border);border-top:none;border-bottom-left-radius:var(--radius);border-bottom-right-radius:var(--radius);padding:14px 16px;margin-bottom:12px">'

    // Part 1 — Role Play
    + '<div style="border-left:3px solid var(--accent);padding:10px 14px;margin-bottom:10px;background:rgba(88,166,255,0.04);border-radius:0 var(--radius-sm) var(--radius-sm) 0">'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">'
    + '<div style="font-size:0.85rem;font-weight:700;color:var(--text)">🎭 Part 1 — Role Play</div>'
    + '<div style="font-size:0.68rem;color:var(--accent);font-weight:600">1–1.5 mins · 10 marks</div>'
    + '</div>'
    + '<div style="font-size:0.75rem;color:var(--text2);line-height:1.6">'
    + '→ Stimulus card written in English — 5 tasks to complete<br>'
    + '→ Read each bullet carefully — match the tense asked for<br>'
    + '→ Give only the number of details asked — no more<br>'
    + '→ Keep answers short and accurate'
    + '</div></div>'

    // Part 2 — Read Aloud
    + '<div style="border-left:3px solid var(--green);padding:10px 14px;margin-bottom:10px;background:rgba(63,185,80,0.04);border-radius:0 var(--radius-sm) var(--radius-sm) 0">'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">'
    + '<div style="font-size:0.85rem;font-weight:700;color:var(--text)">📖 Part 2 — Read Aloud</div>'
    + '<div style="font-size:0.68rem;color:var(--green);font-weight:600">3–3.5 mins · 15 marks</div>'
    + '</div>'
    + '<div style="font-size:0.75rem;color:var(--text2);line-height:1.6">'
    + '→ Short French text (~50 words) — read aloud when asked<br>'
    + '→ No reading aloud during prep time — practise silently<br>'
    + '→ Then answer 4 pre-set questions using <strong style="color:var(--green);cursor:pointer;text-decoration:underline dotted" onclick="toggleSpeakTips();setTipTab(\'sore\')">SORE</strong><br>'
    + '→ Slow and clear — do not panic if you stumble'
    + '</div></div>'

    // Part 3 — Photo Card
    + '<div style="border-left:3px solid var(--gold);padding:10px 14px;margin-bottom:4px;background:rgba(227,179,65,0.04);border-radius:0 var(--radius-sm) var(--radius-sm) 0">'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">'
    + '<div style="font-size:0.85rem;font-weight:700;color:var(--text)">🖼️ Part 3 — Photo Card</div>'
    + '<div style="font-size:0.68rem;color:var(--gold);font-weight:600">6–7 mins · 25 marks</div>'
    + '</div>'
    + '<div style="font-size:0.75rem;color:var(--text2);line-height:1.6">'
    + '→ Two photos from one AQA theme — describe both using <strong style="color:var(--gold);cursor:pointer;text-decoration:underline dotted" onclick="toggleSpeakTips();setTipTab(\'spalma\')">SPALMA</strong><br>'
    + '→ ~1.5 mins photo description, then ~5 mins conversation<br>'
    + '→ Notes allowed — write useful expressions during prep<br>'
    + '→ Listen for the tense in questions and match it'
    + '</div></div>'

    + '<div style="font-size:0.68rem;color:var(--text3);margin-top:8px;text-align:center">Tap <strong>SPALMA</strong> or <strong>SORE</strong> above to see full phrase guides · Or tap 💡 Tips anytime during practice</div>'
    + '</div>'

    // Part 0 card
    + '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;margin-bottom:12px;display:flex;align-items:flex-start;gap:14px">'
    + '<div style="font-size:1.4rem;flex-shrink:0">⏱️</div>'
    + '<div>'
    + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text3);margin-bottom:3px">Part 0 — Start here</div>'
    + '<div style="font-size:0.95rem;font-weight:700;color:var(--text);font-family:\'Fraunces\',serif;margin-bottom:4px">Preparation Time · 15 minutes</div>'
    + '<div style="font-size:0.78rem;color:var(--text2);line-height:1.5">Before the exam begins, you get 15 minutes to read <strong>all three parts</strong> — your role play tasks, the reading aloud text, and the photo card. Use this time to plan answers for everything, not just Part 1.</div>'
    + '</div>'
    + '</div>'

    // Mode buttons
    + '<div class="speak-mode-row">'
    + '<div class="speak-mode-card" onclick="startSpeakMode(\'full\')">'
    + '<div class="icon">📋</div>'
    + '<div class="title">Specimen Papers — full exam</div>'
    + '<div class="desc">All 3 parts in sequence. Results at the end only.</div>'
    + '</div>'
    + '<div class="speak-mode-card" onclick="startSpeakMode(\'part\')">'
    + '<div class="icon">🎯</div>'
    + '<div class="title">Specimen Papers — by section</div>'
    + '<div class="desc">Choose one part to practise on its own.</div>'
    + '</div>'
    + '</div>'
    + '<div style="font-size:0.72rem;color:var(--text3);text-align:center;margin-top:8px">Foundation: 9 mins total &nbsp;|&nbsp; Higher: 12 mins total</div>';
}

function startSpeakMode(mode){
  speakMode = mode;
  speakScores = {};
  if(mode === 'full'){
    speakPart = 'select-paper';
    speakPhase = 'select';
  } else {
    speakPart = 'select-part';
    speakPhase = 'select';
  }
  renderSpeakBody();
}

function renderSpeakSelect(){
  var fNums = [1,2,3,4,5,6,7,8,9];
  var hNums = [10,11,12,13,14,15,16,17,18];

  if(speakPart === 'select-paper'){
    var fBtns = fNums.map(function(n){
      var seq = SPEAK_SEQUENCE['F'][n-1];
      return '<div class="speak-select-btn" onclick="selectSpeakPaper('+n+')">'
        + '<div class="num">Exam '+n+'</div>'
        + '<div class="lbl">RP'+seq[0]+' · Reading '+seq[1]+' · Card '+seq[2]+'</div>'
        + '</div>';
    }).join('');
    var hBtns = hNums.map(function(n){
      var seq = SPEAK_SEQUENCE['H'][n-10];
      return '<div class="speak-select-btn" onclick="selectSpeakPaper('+n+')">'
        + '<div class="num">Exam '+n+'</div>'
        + '<div class="lbl">RP'+seq[0]+' · Reading '+seq[1]+' · Card '+seq[2]+'</div>'
        + '</div>';
    }).join('');
    return '<div class="speak-section-title">🎭 Full Papers — all 3 parts included</div>'
      + '<div style="font-size:0.78rem;color:var(--text2);margin-bottom:12px">Select a sample past paper to practise the full exam in sequence.</div>'
      + renderSpeakDivider('Foundation')
      + '<div class="speak-select-grid">'+fBtns+'</div>'
      + renderSpeakDivider('Higher')
      + '<div class="speak-select-grid">'+hBtns+'</div>'
      + '<button class="speak-action sec" style="margin-top:10px" onclick="speakPhase=\'home\';renderSpeakBody()">← Back</button>';
  }

  if(speakPart === 'select-part'){
    return '<div style="font-size:0.75rem;color:var(--text3);margin-bottom:10px">Which part do you want to practise?</div>'
      + '<div style="display:flex;flex-direction:column;gap:8px">'
      + '<div class="speak-mode-card" onclick="selectSpeakPartType(\'rp\')" style="text-align:left;display:flex;align-items:center;gap:12px"><span style="font-size:1.4rem">🎭</span><div><div class="title">Part 1 — Role Play</div><div class="desc">5 tasks, scored out of 10</div></div></div>'
      + '<div class="speak-mode-card" onclick="selectSpeakPartType(\'ra\')" style="text-align:left;display:flex;align-items:center;gap:12px"><span style="font-size:1.4rem">📖</span><div><div class="title">Part 2 — Read Aloud</div><div class="desc">Read text + 4 questions</div></div></div>'
      + '<div class="speak-mode-card" onclick="selectSpeakPartType(\'pc\')" style="text-align:left;display:flex;align-items:center;gap:12px"><span style="font-size:1.4rem">🖼️</span><div><div class="title">Part 3 — Photo Card</div><div class="desc">Describe photos + conversation</div></div></div>'
      + '</div>'
      + '<button class="speak-action sec" style="margin-top:10px" onclick="speakPhase=\'home\';renderSpeakBody()">← Back</button>';
  }

  if(speakPart === 'select-rp'){
    var fBtns = fNums.map(function(n){
      return '<div class="speak-select-btn" onclick="selectSpeakItem(\'rp\','+n+')">'
        + '<div class="num">Role-Play '+n+'</div>'
        + '<div class="lbl">'+(RP_TITLES[n]||'')+'</div>'
        + '</div>';
    }).join('');
    var hBtns = hNums.map(function(n){
      return '<div class="speak-select-btn" onclick="selectSpeakItem(\'rp\','+n+')">'
        + '<div class="num">Role-Play '+n+'</div>'
        + '<div class="lbl">'+(RP_TITLES[n]||'')+'</div>'
        + '</div>';
    }).join('');
    return '<div class="speak-section-title">🎭 Part 1 — Role Play</div>'
      + '<div style="font-size:0.78rem;color:var(--text2);margin-bottom:12px">Select a role play to practise. You will get preparation time, then work through 5 tasks.</div>'
      + renderSpeakDivider('Foundation')
      + '<div class="speak-select-grid">'+fBtns+'</div>'
      + renderSpeakDivider('Higher')
      + '<div class="speak-select-grid">'+hBtns+'</div>'
      + '<button class="speak-action sec" style="margin-top:10px" onclick="speakPart=\'select-part\';renderSpeakBody()">← Back</button>';
  }

  if(speakPart === 'select-ra'){
    var fBtns = fNums.map(function(n){
      return '<div class="speak-select-btn" onclick="selectSpeakItem(\'ra\','+n+')">'
        + '<div class="num">Reading '+n+'</div>'
        + '<div class="lbl">'+(RA_TOPICS[n]||'')+'</div>'
        + '</div>';
    }).join('');
    var hBtns = hNums.map(function(n){
      return '<div class="speak-select-btn" onclick="selectSpeakItem(\'ra\','+n+')">'
        + '<div class="num">Reading '+n+'</div>'
        + '<div class="lbl">'+(RA_TOPICS[n]||'')+'</div>'
        + '</div>';
    }).join('');
    return '<div class="speak-section-title">📖 Part 2 — Read Aloud</div>'
      + '<div style="font-size:0.78rem;color:var(--text2);margin-bottom:12px">Select a reading aloud task to practise. You will read a French text aloud, then answer 4 questions from your teacher.</div>'
      + renderSpeakDivider('Foundation')
      + '<div class="speak-select-grid">'+fBtns+'</div>'
      + renderSpeakDivider('Higher')
      + '<div class="speak-select-grid">'+hBtns+'</div>'
      + '<button class="speak-action sec" style="margin-top:10px" onclick="speakPart=\'select-part\';renderSpeakBody()">← Back</button>';
  }

  if(speakPart === 'select-pc'){
    var fIds = ['A','B','C','D','E','F','G','H','I'];
    var hIds = ['J','K','L','M','N','O','P','Q','R'];
    var fBtns = fIds.map(function(id){
      return '<div class="speak-select-btn" onclick="selectSpeakItem(\'pc\',\''+id+'\')">'
        + '<div class="num">Card '+id+'</div>'
        + '<div class="lbl">'+(PC_THEMES[id]||'')+'</div>'
        + '</div>';
    }).join('');
    var hBtns = hIds.map(function(id){
      return '<div class="speak-select-btn" onclick="selectSpeakItem(\'pc\',\''+id+'\')">'
        + '<div class="num">Card '+id+'</div>'
        + '<div class="lbl">'+(PC_THEMES[id]||'')+'</div>'
        + '</div>';
    }).join('');
    return '<div class="speak-section-title">🖼️ Part 3 — Photo Card</div>'
      + '<div style="font-size:0.78rem;color:var(--text2);margin-bottom:12px">Select a photo card to practise. You will describe two photos, then have a conversation with your teacher on the theme.</div>'
      + renderSpeakDivider('Foundation')
      + '<div class="speak-select-grid">'+fBtns+'</div>'
      + renderSpeakDivider('Higher')
      + '<div class="speak-select-grid">'+hBtns+'</div>'
      + '<button class="speak-action sec" style="margin-top:10px" onclick="speakPart=\'select-part\';renderSpeakBody()">← Back</button>';
  }
  return '';
}

function renderSpeakDivider(label){
  return '<div style="display:flex;align-items:center;gap:10px;margin:14px 0 8px">'
    + '<div style="flex:1;height:1px;background:var(--border)"></div>'
    + '<div style="font-size:0.68rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text3);font-weight:600">'+label+'</div>'
    + '<div style="flex:1;height:1px;background:var(--border)"></div>'
    + '</div>';
}

function selectSpeakPaper(n){
  speakPaperNum = n;
  speakTier = n <= 9 ? 'F' : 'H';
  speakPart = 'rp';
  var seq = SPEAK_SEQUENCE[speakTier][n - (speakTier==='F'?1:10)];
  speakScores.rpNum = seq[0]; speakScores.raNum = seq[1]; speakScores.pcId = seq[2];
  speakTaskIdx = 0;
  speakPhase = 'prep';
  renderSpeakBody();
}

function selectSpeakPartType(pt){
  speakPart = 'select-' + pt;
  renderSpeakBody();
}

function selectSpeakItem(pt, id){
  speakPart = pt;
  speakTaskIdx = 0;
  if(pt === 'rp'){ speakScores.rpNum = id; speakTier = (typeof id === 'number' && id <= 9) ? 'F' : 'H'; }
  else if(pt === 'ra'){ speakScores.raNum = id; speakTier = (typeof id === 'number' && id <= 9) ? 'F' : 'H'; }
  else if(pt === 'pc'){ speakScores.pcId = id; speakTier = ['A','B','C','D','E','F','G','H','I'].includes(id) ? 'F' : 'H'; }
  speakPhase = 'prep';
  renderSpeakBody();
}

function renderSpeakPrep(){
  if(speakMode === 'full'){
    if(speakPart === 'rp') return renderFullCandidateCard();
    if(speakPart === 'ra') return renderRAOnlyCard();
    if(speakPart === 'pc') return renderPCOnlyCard();
  }
  // Part practice — skip prep, go straight to task
  if(speakPart === 'ra' || speakPart === 'pc'){
    clearSpeakTimer();
    speakTaskIdx = -1;
    speakPhase = 'task';
    if(!speakScores.tasks) speakScores.tasks = {};
    return renderSpeakTask();
  }
  // Part practice — simple prep view
  var title = '', intro = '', hint = '', teacherOpen = '';
  if(speakPart === 'rp'){
    var rp = ROLE_PLAYS[speakScores.rpNum];
    title = 'Role-Play ' + speakScores.rpNum + ' — ' + (rp ? rp.title : '');
    intro = rp ? rp.intro : '';
    teacherOpen = rp ? rp.teacherOpening : '';
    hint = 'Read the 5 tasks and plan your answers. Remember: include at least one verb in each response.';
  } else if(speakPart === 'ra'){
    var ra = READ_ALOUD[speakScores.raNum];
    title = 'Reading ' + speakScores.raNum + ' — ' + (ra ? ra.topic : '');
    intro = 'Read the French text aloud, then answer 4 questions from your teacher.';
    hint = 'Practise reading the text aloud. Focus on pronunciation and accents.';
  } else if(speakPart === 'pc'){
    var id = speakScores.pcId;
    title = 'Card ' + id + ' — ' + (PC_THEMES[id] || '');
    intro = 'You will describe the two photos, then have a conversation on the theme.';
    hint = 'Study both photos. Use SPALMA to structure your description.';
  }
  var teacherBlock = '';
  return '<div class="exam-flow-badge">Preparation time</div>'
    + '<div style="font-size:1rem;font-weight:600;color:var(--text);margin-bottom:10px">'+title+'</div>'
    + (speakPart === 'rp' && rp ? '<div class="speak-scenario" style="margin-bottom:8px">'
      + '<div class="speak-scenario-label">Instructions to candidates</div>'
      + '<div class="speak-scenario-text">'
      + 'You are talking to your ' + rp.friend + '.<br>'
      + 'Your teacher will play the part of your friend and will speak first.<br>'
      + 'You should address your friend as <em>tu</em>.<br>'
      + 'When you see this — <strong>?</strong> — you will have to ask a question.'
      + '</div></div>' : '')
    + '<div class="speak-scenario" style="background:rgba(88,166,255,0.06);border-color:rgba(88,166,255,0.2)"><div class="speak-scenario-label">Tip</div><div class="speak-scenario-text">'+hint+'</div></div>'
    + '<button class="speak-action" style="margin-top:12px" onclick="startSpeakTask()">I\'m ready — start now →</button>';
}

function renderFullCandidateCard(){
  var rp = ROLE_PLAYS[speakScores.rpNum];
  var ra = READ_ALOUD[speakScores.raNum];
  var pcId = speakScores.pcId;
  var tier = speakTier === 'H' ? 'HIGHER TIER' : 'FOUNDATION TIER';
  var rpNum = speakScores.rpNum;
  var raNum = speakScores.raNum;
  var imgs = PC_IMAGES[pcId] || [];
  var photos = PC_PHOTOS[pcId] || {};
  var theme = PC_THEMES[pcId] || '';

  // ── Role Play card ──
  var rpTasks = rp ? rp.tasks.map(function(t, i){
    return '<div class="aqa-task-row">'
      + (t.unprepared ? '<span class="aqa-task-num aqa-task-unprepared">? '+(i+1)+'</span>' : '<span class="aqa-task-num">'+(i+1)+'</span>')
      + '<span>' + t.q + (t.detail ? ' (' + t.detail + ')' : '') + '</span>'
      + '</div>';
  }).join('') : '';

  var rpCard = '<div class="aqa-card">'
    + '<div class="aqa-header-box">'
    + '<div class="aqa-header-row">ROLE-PLAY ' + rpNum + ' (' + tier + ')</div>'
    + '<div class="aqa-header-row">CANDIDATE\'S ROLE</div>'
    + '</div>'
    + '<div class="aqa-instructions">'
    + '<p><strong>Instructions to candidates</strong></p>'
    + '<p>You are talking to your ' + (rp ? rp.friend : 'friend') + '.</p>'
    + '<p>Your teacher will play the part of your friend and will speak first.</p>'
    + '<p>You should address your friend as <em>tu</em>.</p>'
    + '<p>When you see this &#8211; <strong>?</strong> &#8211; you will have to ask a question.</p>'
    + '</div>'
    + '<div class="aqa-task-box">'
    + '<div class="aqa-task-box-intro">In order to score full marks, you must include at least one verb in your response to each task.</div>'
    + rpTasks
    + '</div>'
    + '</div>';

  // ── Read Aloud card ──
  var raText = ra ? ra.text.split('\n\n').map(function(s){ return '<p style="margin-bottom:14px;color:#000">'+s+'</p>'; }).join('') : '';
  var raCard = '<div class="aqa-card">'
    + '<div style="text-align:center;font-weight:700;font-size:15px;margin-bottom:8px;color:#000">'+tier+'</div>'
    + '<p style="font-weight:700;color:#000;margin-bottom:4px">CANDIDATE\'S CARD</p>'
    + '<p style="font-weight:700;color:#000;margin-bottom:10px">Reading aloud Task '+raNum+'</p>'
    + '<p style="color:#000;margin-bottom:16px">When your teacher asks you, read aloud the following text <strong>in French</strong>.</p>'
    + '<div class="aqa-read-text-box">' + raText + '</div>'
    + '<p style="color:#000;margin-top:12px">You will then be asked four questions <strong>in French</strong> that relate to the topic of <strong>'+(ra ? ra.topic : '')+'</strong>.</p>'
    + '<p style="color:#000;margin-top:8px">In order to score the highest marks, you must try to <strong>answer all four questions as fully as you can</strong>.</p>'
    + '</div>';

  // ── Photo Card ──
  var pcBullets = speakTier === 'H'
    ? ['During your preparation time, look at the two photos. You may make as many notes as you wish on an Additional Answer Sheet and use these notes during the test.',
       'Your teacher will ask you to talk about the content of these photos. The recommended time is approximately <strong>one and a half minutes. You must say at least one thing about each photo.</strong>',
       'After you have spoken about the content of the photos, your teacher will then ask you questions related to <strong>any</strong> of the topics within the theme of <strong>'+theme+'</strong>.']
    : ['During your preparation time, look at the two photos. You may make as many notes as you wish on an Additional Answer Sheet and use these notes during the test.',
       'Your teacher will ask you to talk about the content of these photos. The recommended time is approximately <strong>one minute. You must say at least one thing about each photo.</strong>',
       'After you have spoken about the content of the photos, your teacher will then ask you questions related to <strong>any</strong> of the topics within the theme of <strong>'+theme+'</strong>.'];

  var pcCard = '<div class="aqa-card">'
    + '<p style="font-weight:700;color:#000;margin-bottom:4px">'+tier+'</p>'
    + '<p style="font-weight:700;color:#000;margin-bottom:12px">Card '+pcId+'&nbsp;&nbsp;&nbsp;&nbsp;Candidate\'s Photo card</p>'
    + pcBullets.map(function(b){
        return '<div class="aqa-bullet"><span class="aqa-bullet-dot">•</span><span style="color:#000">'+b+'</span></div>';
      }).join('')
    + (imgs[0] ? '<div class="aqa-photo-label">Photo 1</div><img class="aqa-photo-img" src="'+imgs[0]+'" alt="Photo 1">' : '')
    + (imgs[1] ? '<div class="aqa-photo-label">Photo 2</div><img class="aqa-photo-img" src="'+imgs[1]+'" alt="Photo 2">' : '')
    + '</div>';

  return '<div class="aqa-timer-strip"><span style="font-size:0.82rem;color:var(--text2)">⏱ Preparation time — read all three parts</span><span class="speak-timer-val" id="speakTimerVal" style="font-size:1.4rem;font-weight:700;color:var(--gold)">15:00</span></div>'
    + rpCard
    + raCard
    + pcCard
    + '<button class="speak-action" onclick="startSpeakTask()">I\'m ready — start the exam →</button>';
}

function skipSpeakTimer(){ clearSpeakTimer(); startSpeakTask(); }

function renderRAOnlyCard(){
  var ra = READ_ALOUD[speakScores.raNum];
  var raNum = speakScores.raNum;
  var tier = speakTier === 'H' ? 'HIGHER TIER' : 'FOUNDATION TIER';
  var raText = ra ? ra.text.split('\n\n').map(function(s){ return '<p style="margin-bottom:14px;color:#000">'+s+'</p>'; }).join('') : '';
  var raCard = '<div class="aqa-card">'
    + '<div style="text-align:center;font-weight:700;font-size:15px;margin-bottom:8px;color:#000">'+tier+'</div>'
    + '<p style="font-weight:700;color:#000;margin-bottom:4px">CANDIDATE\'S CARD</p>'
    + '<p style="font-weight:700;color:#000;margin-bottom:10px">Reading aloud Task '+raNum+'</p>'
    + '<p style="color:#000;margin-bottom:16px">When your teacher asks you, read aloud the following text <strong>in French</strong>.</p>'
    + '<div class="aqa-read-text-box">' + raText + '</div>'
    + '<p style="color:#000;margin-top:12px">You will then be asked four questions <strong>in French</strong> that relate to the topic of <strong>'+(ra ? ra.topic : '')+'</strong>.</p>'
    + '<p style="color:#000;margin-top:8px">In order to score the highest marks, you must try to <strong>answer all four questions as fully as you can</strong>.</p>'
    + '</div>';
  return '<div class="aqa-timer-strip"><span style="font-size:0.82rem;color:var(--text2)">⏱ Part 2 — Read Aloud</span><span style="font-size:0.82rem;color:var(--gold)">Ready when you are</span></div>'
    + '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;margin-bottom:12px;display:flex;align-items:center;gap:12px">'
    + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);flex-shrink:0">🗣️ Teacher says</div>'
    + '<div style="font-size:1rem;color:var(--accent);font-style:italic">"Lis-moi le texte."</div>'
    + '</div>'
    + '<button class="speak-action" style="margin-bottom:12px">I\'m ready →</button>'
    + raCard
    + '<button class="speak-action" style="margin-top:12px" onclick="speakTaskIdx=1;speakPhase=\'task\';if(!speakScores.tasks)speakScores.tasks={};renderSpeakBody()">I\'ve finished — show questions →</button>';
}

function renderPCOnlyCard(){
  var pcId = speakScores.pcId;
  var imgs = PC_IMAGES[pcId] || [];
  var theme = PC_THEMES[pcId] || '';
  var tier = speakTier === 'H' ? 'HIGHER TIER' : 'FOUNDATION TIER';
  var pcBullets = speakTier === 'H'
    ? ['During your preparation time, look at the two photos. You may make as many notes as you wish on an Additional Answer Sheet and use these notes during the test.',
       'Your teacher will ask you to talk about the content of these photos. The recommended time is approximately <strong>one and a half minutes. You must say at least one thing about each photo.</strong>',
       'After you have spoken about the content of the photos, your teacher will then ask you questions related to <strong>any</strong> of the topics within the theme of <strong>'+theme+'</strong>.']
    : ['During your preparation time, look at the two photos. You may make as many notes as you wish on an Additional Answer Sheet and use these notes during the test.',
       'Your teacher will ask you to talk about the content of these photos. The recommended time is approximately <strong>one minute. You must say at least one thing about each photo.</strong>',
       'After you have spoken about the content of the photos, your teacher will then ask you questions related to <strong>any</strong> of the topics within the theme of <strong>'+theme+'</strong>.'];
  var pcCard = '<div class="aqa-card">'
    + '<p style="font-weight:700;color:#000;margin-bottom:4px">'+tier+'</p>'
    + '<p style="font-weight:700;color:#000;margin-bottom:12px">Card '+pcId+'&nbsp;&nbsp;&nbsp;&nbsp;Candidate\'s Photo card</p>'
    + pcBullets.map(function(b){
        return '<div class="aqa-bullet"><span class="aqa-bullet-dot">•</span><span style="color:#000">'+b+'</span></div>';
      }).join('')
    + (imgs[0] ? '<div class="aqa-photo-label">Photo 1</div><img class="aqa-photo-img" src="'+imgs[0]+'" alt="Photo 1">' : '')
    + (imgs[1] ? '<div class="aqa-photo-label">Photo 2</div><img class="aqa-photo-img" src="'+imgs[1]+'" alt="Photo 2">' : '')
    + '</div>';
  return '<div class="aqa-timer-strip"><span style="font-size:0.82rem;color:var(--text2)">⏱ Part 3 — Photo Card</span><span style="font-size:0.82rem;color:var(--gold)">Ready when you are</span></div>'
    + '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;margin-bottom:12px;display:flex;align-items:center;gap:12px">'
    + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);flex-shrink:0">🗣️ Teacher says</div>'
    + '<div style="font-size:1rem;color:var(--accent);font-style:italic">"Parle-moi des photos."</div>'
    + '</div>'
    + '<button class="speak-action" style="margin-bottom:12px">I\'m ready →</button>'
    + pcCard
    + '<button class="speak-action" style="margin-top:12px" onclick="speakTaskIdx=0;speakPhase=\'task\';if(!speakScores.tasks)speakScores.tasks={};renderSpeakBody()">I\'ve finished — show questions →</button>';
}

function startSpeakTask(){
  clearSpeakTimer();
  // Start at -1 to show teacher opening first for all parts
  speakTaskIdx = -1;
  speakPhase = 'task';
  if(!speakScores.tasks) speakScores.tasks = {};
  renderSpeakBody();
}

// Called after prep renders to start timer
function afterSpeakPrepRender(){
  startSpeakTimer(900, 'speakTimerVal', function(){ startSpeakTask(); });
}

function renderSpeakTask(){
  if(speakPart === 'rp') return renderRPTask();
  if(speakPart === 'ra') return renderRATask();
  if(speakPart === 'pc') return renderPCTask();
  return '';
}

function renderRPTask(){
  var rp = ROLE_PLAYS[speakScores.rpNum];
  if(!rp) return '';

  // Phase -1: show teacher opening line before any tasks
  if(speakTaskIdx === -1){
    var introText = rp.intro || '';
    return '<div class="speak-task-header"><span class="speak-task-label">Role-Play ' + speakScores.rpNum + ' — ' + rp.title + '</span></div>'
      + '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:24px 20px;margin-bottom:12px;text-align:center">'
      + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text3);margin-bottom:12px">The exam begins — Teacher speaks first</div>'
      + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);margin-bottom:10px">🗣️ Teacher says</div>'
      + '<div style="font-size:1.1rem;color:var(--accent);font-style:italic;line-height:1.7;margin-bottom:16px">"' + introText + '"</div>'
      + '<div style="font-size:0.75rem;color:var(--text3);margin-top:4px">Listen, then respond naturally to start the conversation</div>'
      + '</div>'
      + '<button class="speak-action" onclick="speakTaskIdx=0;renderSpeakBody()">Ready — begin Task 1 →</button>';
  }

  if(speakTaskIdx >= rp.tasks.length) return finishSpeakPart();
  var task = rp.tasks[speakTaskIdx];
  var pct = Math.round(speakTaskIdx / rp.tasks.length * 100);
  var prevScore = speakScores.tasks && speakScores.tasks['rp_'+speakTaskIdx];
  var guidanceHtml = '<div class="speak-guidance" id="speakGuidance" style="display:none">'
    + '<div class="speak-guidance-label">Mark Scheme / Sample Responses</div>'
    + '<div class="speak-guidance-row"><span class="g-good">2 marks: </span>'+task.g.full+'</div>'
    + '<div class="speak-guidance-row"><span class="g-part">1 mark: </span>'+task.g.part+'</div>'
    + '<div class="speak-guidance-row"><span class="g-bad">0 marks: </span>'+task.g.miss+'</div>'
    + '</div>';
  var markHtml = '<div class="speak-mark-row" id="speakMarkRow" style="display:none">'
    + '<button class="speak-mark-btn'+(prevScore===2?' sel-full':'')+'" onclick="markRPTask(2)">Full — 2 pts</button>'
    + '<button class="speak-mark-btn'+(prevScore===1?' sel-part':'')+'" onclick="markRPTask(1)">Partial — 1 pt</button>'
    + '<button class="speak-mark-btn'+(prevScore===0?' sel-miss':'')+'" onclick="markRPTask(0)">Missed — 0 pts</button>'
    + '</div>';

  // Format task: same font size, detail in brackets with bold numbers matching AQA paper
  var detailFormatted = '';
  if(task.detail){
    // Bold any number words (one, two, three, un, une, deux)
    detailFormatted = task.detail.replace(/\b(one|two|three|un|une|deux)\b/gi, '<strong>$1</strong>');
  }

  return '<div class="speak-task-header"><span class="speak-task-label">Task '+(speakTaskIdx+1)+' of '+rp.tasks.length+'</span></div>'
    + '<div class="speak-progress"><div class="speak-progress-fill" style="width:'+pct+'%"></div></div>'
    + '<div class="speak-task-box">'
    + '<div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text3);margin-bottom:6px">📋 Your task (Student)</div>'
    + '<div class="speak-task-q">' + (task.unprepared ? '<span class="speak-unprepared">? </span>' : '') + task.q + (detailFormatted ? ' <span style="font-size:inherit;color:inherit">(' + detailFormatted + ')</span>' : '') + '</div>'
    + '<div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border)">'
    + '<div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);margin-bottom:4px">🗣️ Teacher says</div>'
    + '<div class="speak-teacher-prompt" style="color:var(--accent);font-style:italic">"'+task.teacher+'"</div>'
    + '</div>'
    + '</div>'
    + guidanceHtml
    + markHtml
    + '<button class="speak-action sec" id="speakRevealBtn" onclick="revealRPGuidance()">Reveal mark scheme</button>'
    + (prevScore !== undefined ? '<button class="speak-action" style="margin-top:6px" onclick="nextSpeakTask()">Next task →</button>' : '');
}

function revealRPGuidance(){
  var g = document.getElementById('speakGuidance');
  var m = document.getElementById('speakMarkRow');
  var b = document.getElementById('speakRevealBtn');
  if(g){ g.style.display = 'block'; }
  if(m){ m.style.display = 'flex'; }
  if(b){ b.style.display = 'none'; }
}

function markRPTask(score){
  if(!speakScores.tasks) speakScores.tasks = {};
  speakScores.tasks['rp_'+speakTaskIdx] = score;
  var btns = document.querySelectorAll('.speak-mark-btn');
  btns.forEach(function(b){ b.classList.remove('sel-full','sel-part','sel-miss'); });
  if(btns[0] && score===2) btns[0].classList.add('sel-full');
  if(btns[1] && score===1) btns[1].classList.add('sel-part');
  if(btns[2] && score===0) btns[2].classList.add('sel-miss');
  // Auto-advance to next task
  setTimeout(function(){ nextSpeakTask(); }, 800);
}

function nextSpeakTask(){
  speakTaskIdx++;
  renderSpeakBody();
}

function finishSpeakPart(){
  // Calculate RP total
  if(speakPart === 'rp'){
    var total = 0;
    for(var i=0;i<5;i++){
      var s = speakScores.tasks && speakScores.tasks['rp_'+i];
      if(typeof s === 'number') total += s;
    }
    speakExamScores.rp = total;
  }
  if(speakMode === 'full'){
    if(speakPart === 'rp'){
      speakPart = 'ra'; speakTaskIdx = -1; speakPhase = 'prep';
      return renderPartEndCard('🎭 End of Role Play', 'Part 1 complete. Next up: Part 2 — Read Aloud.', function(){
        renderSpeakBody();
      }, 'Continue to Read Aloud →');
    } else if(speakPart === 'ra'){
      speakPart = 'pc'; speakTaskIdx = -1; speakPhase = 'prep';
      return renderPartEndCard('📖 End of Read Aloud', 'Part 2 complete. Next up: Part 3 — Photo Card.', function(){
        renderSpeakBody();
      }, 'Continue to Photo Card →');
    } else {
      speakPhase = 'result';
      return renderSpeakResult();
    }
  } else {
    var partLabel = speakPart === 'rp' ? 'Role Play' : speakPart === 'ra' ? 'Read Aloud' : 'Photo Card';
    return renderPartEndCard('✅ End of ' + partLabel, 'Well done — you\'ve completed this section.', function(){
      speakPhase = 'result';
      var body = document.getElementById('speakBody');
      if(body) body.innerHTML = renderSpeakResult();
    }, 'See results →');
  }
}

function renderPartEndCard(title, subtitle, onContinue, btnLabel){
  // Store callback for the continue button
  window._speakContinueFn = onContinue;
  return '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:260px;text-align:center;gap:16px;padding:32px 16px">'
    + '<div style="font-size:2.5rem">🎯</div>'
    + '<div style="font-family:\'Fraunces\',serif;font-size:1.4rem;font-weight:700;color:var(--text)">' + title + '</div>'
    + '<div style="font-size:0.85rem;color:var(--text2);max-width:320px;line-height:1.5">' + subtitle + '</div>'
    + '<button class="speak-action" onclick="window._speakContinueFn && window._speakContinueFn()" style="margin-top:8px;min-width:200px">' + btnLabel + '</button>'
    + '<button class="speak-action sec" onclick="openMenu()" style="margin-top:4px;min-width:200px">← Back to menu</button>'
    + '</div>';
}

function renderRATask(){
  var ra = READ_ALOUD[speakScores.raNum];
  if(!ra) return '';

  // Phase -1 and 0 combined: AQA candidate card style
  if(speakTaskIdx === -1 || speakTaskIdx === 0){
    var tier = speakTier === 'H' ? 'HIGHER TIER' : 'FOUNDATION TIER';
    return '<div class="speak-task-header"><span class="speak-task-label">Reading ' + speakScores.raNum + ' — ' + ra.topic + '</span></div>'
      + '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px;margin-bottom:10px">'
      + '<div style="font-size:0.72rem;font-weight:700;color:var(--text);margin-bottom:2px">' + tier + '</div>'
      + '<div style="font-size:0.72rem;font-weight:700;color:var(--text);margin-bottom:2px">CANDIDATE\'S CARD</div>'
      + '<div style="font-size:0.82rem;font-weight:700;color:var(--text);margin-bottom:8px">Reading aloud Task ' + speakScores.raNum + '</div>'
      + '<div style="font-size:0.82rem;color:var(--text2);">When your teacher asks you, read aloud the following text <strong>in French</strong>.</div>'
      + '</div>'
      + '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px">'
      + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);flex-shrink:0">🗣️ Teacher says</div>'
      + '<div style="font-size:1rem;color:var(--accent);font-style:italic">"Lis-moi le texte."</div>'
      + '</div>'
      + '<div class="speak-read-text">' + ra.text.replace(/\n\n/g,'<br><br>') + '</div>'
      + '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;margin-top:10px;font-size:0.8rem;color:var(--text2);line-height:1.6">'
      + 'You will then be asked four questions <strong>in French</strong> that relate to the topic of <strong>' + ra.topic + '</strong>.'
      + '<br>In order to score the highest marks, you must try to <strong>answer all four questions as fully as you can</strong>.'
      + '</div>'
      + '<button class="speak-action" style="margin-top:12px" onclick="speakTaskIdx=1;renderSpeakBody()">I\'ve read it — show questions →</button>';
  }
  var qIdx = speakTaskIdx - 1;
  if(qIdx >= ra.questions.length){
    speakExamScores.ra = speakScores.raScore || 0;
    return finishSpeakPart();
  }
  var q = ra.questions[qIdx];
  var prevScore = speakScores.tasks && speakScores.tasks['ra_'+qIdx];
  // Derive a contextual clue from the French question
  var clue = deriveRAClue(q);
  return '<div class="speak-task-header">'
    + '<span class="speak-task-label">Question '+(qIdx+1)+' of '+ra.questions.length+'</span>'
    + '<span class="speak-task-label">Topic: '+ra.topic+'</span>'
    + '</div>'
    + '<div class="speak-progress"><div class="speak-progress-fill" style="width:'+Math.round((qIdx/ra.questions.length)*100)+'%"></div></div>'
    + '<div class="speak-task-box" style="text-align:center">'
    + '<div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);margin-bottom:8px">🗣️ Teacher asks</div>'
    + '<div class="speak-conv-q" style="font-size:1.1rem;margin-bottom:12px">'+q+'</div>'
    + '<div style="display:flex;gap:8px;justify-content:center">'
    + '<button class="speak-listen-btn" id="raClueBtn" onclick="revealRAClue()" style="flex:none">💡 Clue</button>'
    + '</div>'
    + '<div class="speak-task-detail" id="raClueText" style="display:none;margin-top:10px;color:var(--gold);font-style:italic">'+clue+'</div>'
    + '</div>'
    + '<div style="background:rgba(88,166,255,0.06);border:1px solid rgba(88,166,255,0.2);border-radius:var(--radius);padding:10px 14px;margin:8px 0;font-size:0.78rem;color:var(--text2)">🎙️ Speak your answer aloud using <strong>SORE</strong> — then self-mark below</div>'
    + '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;justify-content:center">'
    + ['S — Statement','O — Opinion','R — Reason','E — Extend'].map(function(s,i){
        var key = 'sore_'+qIdx+'_'+i;
        var checked = speakScores.tasks && speakScores.tasks[key];
        return '<button class="speak-mark-btn'+(checked?' sel-full':'')+'" style="flex:none;padding:5px 10px;font-size:0.68rem" onclick="toggleSORE('+qIdx+','+i+',this)">'+s+'</button>';
      }).join('')
    + '</div>'
    + '<div style="font-size:0.68rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--text3);margin-bottom:6px;text-align:center">Self-score</div>'
    + '<div class="speak-mark-row">'
    + '<button class="speak-mark-btn'+(prevScore===2?' sel-full':'')+'" onclick="markRAQuestion('+qIdx+',2)">Clear (2)</button>'
    + '<button class="speak-mark-btn'+(prevScore===1?' sel-part':'')+'" onclick="markRAQuestion('+qIdx+',1)">Understandable (1)</button>'
    + '<button class="speak-mark-btn'+(prevScore===0?' sel-miss':'')+'" onclick="markRAQuestion('+qIdx+',0)">Not clear (0)</button>'
    + '</div>';
}

function toggleSORE(qIdx, i, btn){
  if(!speakScores.tasks) speakScores.tasks = {};
  var key = 'sore_'+qIdx+'_'+i;
  speakScores.tasks[key] = !speakScores.tasks[key];
  btn.classList.toggle('sel-full', speakScores.tasks[key]);
}

function markRAQuestion(qIdx, score){
  if(!speakScores.tasks) speakScores.tasks = {};
  speakScores.tasks['ra_'+qIdx] = score;
  var total = 0;
  for(var i=0;i<4;i++){
    var s = speakScores.tasks['ra_'+i];
    if(typeof s === 'number') total += s;
  }
  speakScores.raScore = total;
  // Auto-advance to next question
  setTimeout(function(){
    speakTaskIdx++;
    renderSpeakBody();
  }, 800);
}

function speakTextAloud(num){
  var ra = READ_ALOUD[num];
  if(!ra) return;
  window.speechSynthesis.cancel();
  var utt = new SpeechSynthesisUtterance(ra.text.replace(/\n/g,' '));
  utt.lang = 'fr-FR';
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

function speakFrenchText(text){
  window.speechSynthesis.cancel();
  var utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'fr-FR';
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

function speakRAQuestion(q){
  window.speechSynthesis.cancel();
  var utt = new SpeechSynthesisUtterance(q);
  utt.lang = 'fr-FR';
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

function revealRAClue(){
  var el = document.getElementById('raClueText');
  var btn = document.getElementById('raClueBtn');
  if(el){ el.style.display = 'block'; }
  if(btn){ btn.style.display = 'none'; }
}

function deriveRAClue(q){
  var ql = q.toLowerCase();
  if(ql.indexOf('quand') !== -1) return 'Clue: They\'re asking WHEN — give a time or day.';
  if(ql.indexOf('ou ') !== -1 || ql.indexOf('ou?') !== -1) return 'Clue: They\'re asking WHERE — give a place.';
  if(ql.indexOf('pourquoi') !== -1) return 'Clue: They\'re asking WHY — give a reason.';
  if(ql.indexOf('comment') !== -1) return 'Clue: They\'re asking HOW — describe a way or method.';
  if(ql.indexOf('combien') !== -1) return 'Clue: They\'re asking HOW MANY/MUCH — give a quantity.';
  if(ql.indexOf('qui') !== -1) return 'Clue: They\'re asking WHO — name a person or people.';
  if(ql.indexOf('qu\'est-ce que tu penses') !== -1 || ql.indexOf('quelle est ton opinion') !== -1) return 'Clue: They want your OPINION — use "Je pense que..." or "Selon moi...".';
  if(ql.indexOf('quelle sorte') !== -1 || ql.indexOf('quel genre') !== -1) return 'Clue: They\'re asking WHAT TYPE — name a category or example.';
  if(ql.indexOf('qu\'est-ce que tu') !== -1) return 'Clue: They\'re asking WHAT YOU DO — describe an activity or habit.';
  if(ql.indexOf('parle-moi') !== -1 || ql.indexOf('decris') !== -1) return 'Clue: They want you to DESCRIBE — give at least 2-3 details.';
  if(ql.indexOf('aimes') !== -1 || ql.indexOf('prefere') !== -1) return 'Clue: They\'re asking what you LIKE or PREFER — name it and say why.';
  return 'Clue: Listen carefully and answer the question directly, then extend with SORE.';
}

function renderPCTask(){
  var id = speakScores.pcId;
  var photos = PC_PHOTOS[id];
  var imgs = PC_IMAGES[id] || [];
  var theme = PC_THEMES[id] || '';
  var topics = PC_CONV_TOPICS[theme] || [];
  if(!photos) return '';
  var mins = speakTier === 'H' ? 'one and a half minutes' : 'one minute';

  // Phase -1: AQA instructions + photos (dark style)
  if(speakTaskIdx === -1){
    return '<div class="speak-task-header"><span class="speak-task-label">Card ' + id + ' — ' + theme + '</span></div>'
      + '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;margin-bottom:10px">'
      + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text3);margin-bottom:8px">Instructions to candidates</div>'
      + '<div style="display:flex;gap:10px;padding:7px 0;border-bottom:1px solid var(--border);font-size:0.82rem;color:var(--text2);line-height:1.5"><span style="color:var(--text3)">•</span><span>During your preparation time, look at the two photos. You may make as many notes as you wish and use these notes during the test.</span></div>'
      + '<div style="display:flex;gap:10px;padding:7px 0;border-bottom:1px solid var(--border);font-size:0.82rem;color:var(--text2);line-height:1.5"><span style="color:var(--text3)">•</span><span>Your teacher will ask you to talk about the content of these photos. The recommended time is approximately <strong>' + mins + '</strong>. You must say at least one thing about each photo.</span></div>'
      + '<div style="display:flex;gap:10px;padding:7px 0;font-size:0.82rem;color:var(--text2);line-height:1.5"><span style="color:var(--text3)">•</span><span>After you have spoken about the photos, your teacher will ask questions related to <strong>any</strong> of the topics within the theme of <strong>' + theme + '</strong>.</span></div>'
      + '</div>'
      + '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px">'
      + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);flex-shrink:0">🗣️ Teacher says</div>'
      + '<div style="font-size:1rem;color:var(--accent);font-style:italic">"Parle-moi des photos."</div>'
      + '</div>'
      + (imgs[0] ? '<div style="font-size:0.72rem;color:var(--text3);text-align:center;margin:8px 0 4px">Photo 1</div><img class="speak-photo-img" src="'+imgs[0]+'" onerror="this.style.display=\'none\'" alt="Photo 1">' : '')
      + (imgs[1] ? '<div style="font-size:0.72rem;color:var(--text3);text-align:center;margin:8px 0 4px">Photo 2</div><img class="speak-photo-img" src="'+imgs[1]+'" onerror="this.style.display=\'none\'" alt="Photo 2">' : '')
      + '<button class="speak-action" style="margin-top:12px" onclick="speakTaskIdx=0;renderSpeakBody()">I\'ve described the photos — show questions →</button>';
  }

  // Phase 0+: sample questions + self-mark with definitions
  var allQHtml = topics.map(function(topic){
    var qs = PC_SAMPLE_QUESTIONS[topic] || [];
    var qRows = qs.map(function(q){
      return '<div style="display:flex;gap:12px;padding:7px 0;border-bottom:0.5px solid var(--border)">'
        + '<div style="flex:1;font-size:0.82rem;color:var(--text2);font-style:italic">' + q.fr + '</div>'
        + '<div style="flex:1;font-size:0.82rem;color:var(--text3)">' + q.en + '</div>'
        + '</div>';
    }).join('');
    return '<div style="margin-bottom:14px">'
      + '<div style="font-size:0.68rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--gold);font-weight:600;margin-bottom:4px">' + topic + '</div>'
      + qRows + '</div>';
  }).join('');

  var prevPhoto = speakScores.pcPhotoScore;
  var prevConv  = speakScores.pcConvScore;

  // Scoring definitions
  var photoDefsHtml = '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:10px 14px;margin-bottom:10px;font-size:0.75rem;color:var(--text2);line-height:1.8">'
    + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text3);margin-bottom:6px">Scoring guide — photo description</div>'
    + '<div><strong style="color:var(--green)">5</strong> — Both photos described fully with good detail and variety</div>'
    + '<div><strong style="color:var(--green)">4</strong> — Both described, mostly clear with minor gaps</div>'
    + '<div><strong style="color:var(--gold)">3</strong> — Both photos covered but detail limited</div>'
    + '<div><strong style="color:var(--gold)">2</strong> — Only one photo described or very limited content</div>'
    + '<div><strong style="color:var(--red)">1</strong> — Minimal attempt</div>'
    + '</div>';

  var convDefsHtml = '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:10px 14px;margin-bottom:10px;font-size:0.75rem;color:var(--text2);line-height:1.8">'
    + '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text3);margin-bottom:6px">Scoring guide — conversation (2 marks per question)</div>'
    + '<div><strong style="color:var(--green)">2</strong> — Clear, developed answer with opinion or reason</div>'
    + '<div><strong style="color:var(--gold)">1</strong> — Understandable but limited</div>'
    + '<div><strong style="color:var(--red)">0</strong> — Not clear or no response</div>'
    + '</div>';

  return '<div class="speak-task-header"><span class="speak-task-label">Card ' + id + ' — Conversation · ' + theme + '</span></div>'
    + '<div style="background:rgba(88,166,255,0.06);border:1px solid rgba(88,166,255,0.2);border-radius:var(--radius);padding:10px 14px;margin-bottom:14px;font-size:0.78rem;color:var(--text2)">🎙️ Speak your answers aloud using <strong>SORE</strong> — your teacher may ask questions from any of the topics below</div>'
    + allQHtml
    + '<div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--text3);margin:14px 0 8px">Self-score</div>'
    + photoDefsHtml
    + '<div style="font-size:0.72rem;color:var(--text3);margin-bottom:6px">Photo description (out of 5)</div>'
    + '<div class="speak-mark-row" style="margin-bottom:14px">'
    + [5,4,3,2,1].map(function(n){ return '<button class="speak-mark-btn'+(prevPhoto===n?' sel-full':'')+'" onclick="markPC(\'photo\','+n+')">'+n+'</button>'; }).join('')
    + '</div>'
    + convDefsHtml
    + '<div style="font-size:0.72rem;color:var(--text3);margin-bottom:6px">Conversation (out of 6)</div>'
    + '<div class="speak-mark-row">'
    + [6,5,4,3,2,1,0].map(function(n){ return '<button class="speak-mark-btn'+(prevConv===n?' sel-full':'')+'" onclick="markPCConvTotal('+n+')">'+n+'</button>'; }).join('')
    + '</div>'
    + ((prevPhoto !== undefined && prevConv !== undefined)
      ? '<button class="speak-action" style="margin-top:12px" onclick="finishPCConv()">Finish →</button>'
      : '<div style="font-size:0.72rem;color:var(--text3);text-align:center;margin-top:10px">Score both sections above to finish</div>');
}

function markPC(type, score){
  if(type === 'photo') speakScores.pcPhotoScore = score;
  renderSpeakBody();
}

function markPCConvTotal(score){
  speakScores.pcConvScore = score;
  renderSpeakBody();
}

function finishPCConv(){
  var pcTotal = (speakScores.pcPhotoScore||0) + (speakScores.pcConvScore||0);
  speakExamScores.pc = pcTotal;
  speakPhase = 'result';
  var body = document.getElementById('speakBody');
  if(body) body.innerHTML = renderSpeakResult();
}

function renderSpeakResult(){
  var rpScore = speakExamScores.rp;
  var raScore = speakExamScores.ra;
  var pcScore = speakExamScores.pc;
  var parts = [];
  var total = 0, maxTotal = 0;
  if(rpScore !== undefined){ parts.push({name:'Part 1 — Role Play',score:rpScore,max:10}); total+=rpScore; maxTotal+=10; }
  if(raScore !== undefined){ parts.push({name:'Part 2 — Read Aloud',score:raScore,max:4}); total+=raScore; maxTotal+=4; }
  if(pcScore !== undefined){ parts.push({name:'Part 3 — Photo Card',score:pcScore,max:11}); total+=pcScore; maxTotal+=11; }

  var partsHtml = parts.map(function(p){
    return '<div class="speak-result-part">'
      + '<span class="speak-result-part-name">'+p.name+'</span>'
      + '<span class="speak-result-part-score">'+p.score+' / '+p.max+'</span>'
      + '</div>';
  }).join('');

  return '<div class="speak-results">'
    + (parts.length > 1 ? '<div class="speak-result-total">'+total+'<span class="speak-result-denom"> / '+maxTotal+'</span></div><div class="speak-result-label">Indicative total</div>' : '')
    + '</div>'
    + '<div class="speak-result-parts">'+partsHtml+'</div>'
    + '<div class="speak-disclaimer" style="margin-top:12px">Scores are indicative only. Your actual mark depends on your examiner\'s judgement on the day. Use this as a guide to identify areas to improve.</div>'
    + '<div style="display:flex;gap:8px;margin-top:10px">'
    + '<button class="speak-action" onclick="openSpeakScreen()">New practice</button>'
    + '<button class="speak-action sec" onclick="openMenu()">Back to menu</button>'
    + '</div>';
}

// Tips overlay
function toggleSpeakTips(){
  var ov = document.getElementById('speakTipsOverlay');
  if(!ov) return;
  if(ov.style.display === 'none'){
    ov.style.display = 'block';
    // Default to the relevant tab based on current part
    var defaultTab = 'prep';
    if(speakPart === 'rp') defaultTab = 'rp';
    else if(speakPart === 'ra') defaultTab = 'ra';
    else if(speakPart === 'pc') defaultTab = 'pc';
    setTipTab(defaultTab);
  } else {
    ov.style.display = 'none';
  }
}

function setTipTab(tab){
  ['Prep','Rp','Ra','Pc','Spalma','Sore'].forEach(function(t){
    var tl = t.toLowerCase();
    var btn = document.getElementById('tipTab'+t);
    var panel = document.getElementById('tipPanel'+t);
    if(btn) btn.classList.toggle('active', tl===tab);
    if(panel) panel.style.display = tl===tab ? '' : 'none';
  });
}

function renderTipsOverlay(){

  function tipItem(emoji, text){
    return '<div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">'
      + '<span style="flex-shrink:0">' + emoji + '</span>'
      + '<span style="font-size:0.82rem;color:var(--text2);line-height:1.5">' + text + '</span>'
      + '</div>';
  }

  function markBadge(marks){
    return '<div style="display:inline-block;background:rgba(227,179,65,0.15);color:var(--gold);font-size:0.68rem;font-weight:700;padding:3px 10px;border-radius:20px;margin-bottom:10px">' + marks + ' marks</div>';
  }

  function mechanic(text){
    return '<div style="display:flex;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">'
      + '<span style="flex-shrink:0;color:var(--text3)">→</span>'
      + '<span style="font-size:0.82rem;color:var(--text2);line-height:1.5">' + text + '</span>'
      + '</div>';
  }

  function sectionHead(label){
    return '<div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text3);font-weight:600;margin:12px 0 6px">' + label + '</div>';
  }

  // Prep Time panel
  var prepEl = document.getElementById('tipPanelPrep');
  if(prepEl) prepEl.innerHTML = sectionHead('Exam mechanics')
    + mechanic('15 minutes preparation time in total')
    + mechanic('Exam is 10–12 minutes total (Foundation / Higher)')
    + mechanic('No dictionary allowed')
    + '<div style="display:flex;gap:8px;margin:14px 0">'
    + '<div style="flex:1;background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:1.1rem;font-weight:700;color:var(--text)">3–4 min</div><div style="font-size:0.68rem;color:var(--text3)">🎭 Role Play<br>10 marks</div></div>'
    + '<div style="flex:1;background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:1.1rem;font-weight:700;color:var(--text)">4 min</div><div style="font-size:0.68rem;color:var(--text3)">📖 Read Aloud<br>15 marks</div></div>'
    + '<div style="flex:1;background:var(--surface2);border-radius:8px;padding:10px;text-align:center"><div style="font-size:1.1rem;font-weight:700;color:var(--gold)">7–8 min</div><div style="font-size:0.68rem;color:var(--text3)">🖼️ Photo Card<br>25 marks</div></div>'
    + '</div>'
    + sectionHead('How to use your time')
    + tipItem('✍️', '<strong>Role Play:</strong> You can almost write your full answers — plan each bullet response carefully.')
    + tipItem('📖', '<strong>Read Aloud:</strong> Practise reading in your head and note tricky pronunciations.')
    + tipItem('🖼️', '<strong>Photo Card:</strong> Write down useful expressions and vocab for the open conversation — this is worth the most marks.');

  // Role Play panel
  var rpEl = document.getElementById('tipPanelRp');
  if(rpEl) rpEl.innerHTML = markBadge('10 marks — Foundation & Higher')
    + sectionHead('Exam mechanics')
    + mechanic('1–1.5 minutes total')
    + mechanic('Based on a stimulus card written in English')
    + mechanic('Perform one role play — use your vocab and vary your language')
    + sectionHead('Technique tips')
    + tipItem('📋', 'Read each bullet point carefully before planning your answer.')
    + tipItem('🕐', 'Underline where the tense changes — if a bullet uses the past, imperfect or future, your answer must match.')
    + tipItem('⚠️', 'Only provide the number of details asked for. If a bullet says "give one detail", give one — offering more risks extra mistakes and lost marks.')
    + tipItem('❓', 'The ? task means you must ask a question. Prepare this carefully — it\'s an easy mark to bank.')
    + tipItem('🎯', 'Keep answers short and accurate. Longer answers = more chances to make errors.');

  // Read Aloud panel
  var raEl = document.getElementById('tipPanelRa');
  if(raEl) raEl.innerHTML = markBadge('15 marks — Foundation & Higher')
    + sectionHead('Exam mechanics')
    + mechanic('3–3.5 minutes total')
    + mechanic('Based on a short text of around 50 words')
    + mechanic('You are NOT allowed to read aloud during preparation time — practise silently in your head')
    + mechanic('After reading, the teacher asks four pre-set questions on the topic')
    + mechanic('Marked as a whole, not per question')
    + sectionHead('Technique tips')
    + tipItem('🔁', 'Practise reading the text in your head during prep time — go through it at least twice.')
    + tipItem('✏️', 'Underline tricky liaisons. e.g. "nous somme<span style="text-decoration:underline;color:var(--gold);font-weight:700">s</span> <span style="text-decoration:underline;color:var(--gold);font-weight:700">a</span>rrivés" — the <strong>s</strong> of sommes links to <strong>a</strong>rrivés: "noo sum <strong>zar</strong>-ee-vay". The underlined letters merge into one sound.')
    + tipItem('🐢', 'Keep it slow and articulate. Clarity earns more marks than speed.')
    + tipItem('😌', 'Do not panic. If you stumble, pause and repeat the sentence — the examiner expects this.')
    + tipItem('💬', 'For the 4 questions, use <strong>SORE</strong> as a mental template — see the SORE tab.');

  // Photo Card panel
  var pcEl = document.getElementById('tipPanelPc');
  if(pcEl) pcEl.innerHTML = markBadge('25 marks — Higher (most marks!)')
    + sectionHead('Exam mechanics')
    + mechanic('6–7 minutes total: ~1.5 mins photo description + 4.5–5.5 mins unprepared conversation')
    + mechanic('Based on two photos from one of the three AQA themes')
    + mechanic('Written notes are allowed during both preparation time and the test')
    + sectionHead('Technique tips')
    + tipItem('📸', 'Talk about both photos — aim for roughly 5–6 sentences in total over ~1.5 minutes.')
    + tipItem('🎯', 'Only describe what you can see in the photos. Do not drift into related stories or personal anecdotes.')
    + tipItem('🌟', 'Show variety — use synonyms, different expressions, varied grammatical structures and different tenses.')
    + tipItem('👂', 'Listen carefully to the teacher\'s questions. Pick up the tense they use (past/present/future/conditional) and match it in your answer.')
    + tipItem('📝', 'During prep time, write down useful expressions and phrases you can use in the open conversation.')
    + tipItem('🏗️', 'Use <strong>SPALMA</strong> to structure your photo description — see the SPALMA tab. Pre-learn phrases for each letter.');

  // SPALMA panel
  var spalmaData = [
    {l:'S',w:'Start',d:'Introduce what you see',col:'#E6F1FB',txt:'#0C447C',
     ex:'En regardant les photos, je vois...\nD\'abord, sur la première photo...\nAu premier plan / En arrière-plan'},
    {l:'P',w:'People',d:'Who is in the photo',col:'#EEEDFE',txt:'#3C3489',
     ex:'Un homme / une femme / des élèves / une famille\nDes bâtiments / des arbres / un groupe de...'},
    {l:'A',w:'Action',d:'What they are doing',col:'#EAF3DE',txt:'#27500A',
     ex:'Ils mangent / parlent / sourient / travaillent / jouent\nIls sont en train de... (manger, discuter...)'},
    {l:'L',w:'Location',d:'Where the photo is set',col:'#FAEEDA',txt:'#633806',
     ex:'À l\'école / dans la rue / à la montagne\nAu bord de la mer / en ville / à la maison'},
    {l:'M',w:'Mood',d:'How people look or feel',col:'#FAECE7',txt:'#712B13',
     ex:'Ils ont l\'air / Il a l\'air...\ncontent(e) / heureux / calme / triste / fatigué(e)'},
    {l:'A',w:'Add details',d:'Weather or extra observations',col:'#E1F5EE',txt:'#085041',
     ex:'Il y a du soleil / du vent\nIl fait beau / mauvais / Il pleut / il neige'},
  ];

  // SORE panel
  var soreData = [
    {l:'S',w:'Statement',d:'Direct answer to the question',col:'#E6F1FB',txt:'#0C447C',
     ex:'Je pense que... / J\'habite... / Je fais...'},
    {l:'O',w:'Opinion',d:'What you think or feel',col:'#EEEDFE',txt:'#3C3489',
     ex:'Je l\'adore / Selon moi... / À mon avis...\nJe trouve que... / Il me semble que...'},
    {l:'R',w:'Reason',d:'Explain why',col:'#EAF3DE',txt:'#27500A',
     ex:'parce que... / car...\nça m\'aide lorsque... / par exemple, je peux...'},
    {l:'E',w:'Extend',d:'Add a 3rd clause for top marks',col:'#FAEEDA',txt:'#633806',
     ex:'À l\'avenir, je voudrais...\nLa semaine dernière, j\'ai...\nNormalement / D\'habitude, je...'},
  ];

  function renderLetters(data){
    return data.map(function(d){
      return '<div class="speak-letter-card" onclick="var ex=this.querySelector(\'.speak-letter-ex\');ex.classList.toggle(\'open\')">'
        + '<div class="speak-letter-badge" style="background:'+d.col+';color:'+d.txt+'">'+d.l+'</div>'
        + '<div><div class="speak-letter-word">'+d.w+'</div>'
        + '<div class="speak-letter-desc">'+d.d+'</div>'
        + '<div class="speak-letter-ex">'+d.ex.replace(/\n/g,'<br>')+'</div>'
        + '</div></div>';
    }).join('');
  }

  var sp = document.getElementById('tipPanelSpalma');
  var so = document.getElementById('tipPanelSore');
  if(sp) sp.innerHTML = '<div style="font-size:0.7rem;color:var(--text3);margin-bottom:8px">For Photo Card (Part 3) — tap each letter to expand</div>' + renderLetters(spalmaData);
  if(so) so.innerHTML = '<div style="font-size:0.7rem;color:var(--text3);margin-bottom:8px">For Read Aloud Q&A (Part 2) — tap each letter to expand</div>' + renderLetters(soreData)
    + '<div style="margin-top:8px;padding:8px;border-radius:6px;background:rgba(248,81,73,0.08);font-size:0.72rem;color:var(--red)">⚠️ Role play: keep answers short and accurate — longer answers risk extra mistakes!</div>';
}


// ══════════════════════════════════════════════
//  DAILY GOAL SYSTEM
// ══════════════════════════════════════════════
const DAILY_GOAL = 20;

function getDailyProgress(pid){
  const today = todayISO();
  try{
    const data = JSON.parse(localStorage.getItem('fr_daily_'+pid)) || {};
    if(data.date !== today) return {date:today, correct:0, streak:data.date===yesterdayISO()?data.streak||0:0};
    return data;
  }catch{ return {date:today, correct:0, streak:0}; }
}

function saveDailyProgress(pid, data){
  try{ localStorage.setItem('fr_daily_'+pid, JSON.stringify(data)); }catch(e){}
}

function yesterdayISO(){
  const d = new Date();
  d.setDate(d.getDate()-1);
  return d.toISOString().slice(0,10);
}

function recordDailyCorrect(pid){
  const today = todayISO();
  const data = getDailyProgress(pid);
  data.date = today;
  data.correct = (data.correct||0) + 1;
  // Check if streak should increment (first correct of the day hitting goal)
  const prev = data.correct - 1;
  if(prev < DAILY_GOAL && data.correct >= DAILY_GOAL){
    data.streak = (data.streak||0) + 1;
    setTimeout(()=>showToast('🔥 Daily goal hit! Streak: '+data.streak+' days!'), 400);
  }
  // Double day reward
  if(data.correct === DAILY_GOAL * 2){
    setTimeout(()=>showToast('⚡ Double day! Freeze banked for this week!'), 400);
    data.freeze = (data.freeze||0) + 1;
  }
  saveDailyProgress(pid, data);
  recordDailyHistory(pid, data.correct);
  updateDailyGoalUI();
}

function updateDailyGoalUI(){
  if(!currentProfile) return;
  const data = getDailyProgress(currentProfile.id);
  const count = data.correct || 0;
  const streak = data.streak || 0;
  const pct = Math.min(count / DAILY_GOAL, 1);
  const circumference = 150.8;

  // Update ring
  const fill = document.getElementById('goalRingFill');
  if(fill) fill.style.strokeDashoffset = circumference - (pct * circumference);

  // Update count
  const gc = document.getElementById('goalCount');
  if(gc) gc.textContent = count;

  // Update streak badge
  const sb = document.getElementById('streakBadge');
  if(sb) sb.textContent = '🔥 ' + streak;

  // Update subtext
  const sub = document.getElementById('goalSubtext');
  if(sub){
    if(count === 0) sub.textContent = 'Tap to start — balanced across all themes';
    else if(count < DAILY_GOAL) sub.textContent = (DAILY_GOAL - count) + ' words to go!';
    else if(count < DAILY_GOAL * 2) sub.textContent = '✅ Goal done! Keep going for a double day ⚡';
    else sub.textContent = '⚡ Double day achieved! Amazing work!';
  }

  // Change ring colour when done
  if(fill) fill.style.stroke = count >= DAILY_GOAL ? 'var(--gold)' : 'var(--green)';
}

// ── TROPHY ROAD SYSTEM ──
const RANKS = [
  {name:'Novice',       badge:'🎒',  threshold:0,    colour:'#8b949e'},
  {name:'Explorer',     badge:'🌍',  threshold:50,   colour:'#58a6ff'},
  {name:'Adventurer',   badge:'🧭',  threshold:150,  colour:'#56d364'},
  {name:'Navigator',    badge:'⚓',  threshold:300,  colour:'#3fb950'},
  {name:'Globetrotter', badge:'✈️',  threshold:500,  colour:'#d2a679'},
  {name:'Polyglot',     badge:'🗣️',  threshold:750,  colour:'#e3b341'},
  {name:'Native',       badge:'🏆',  threshold:1000, colour:'#ff7b72'},
];

function getRankScore(pid){
  // Score = Words Mastered + (Streak x 5) + (Daily Goals Hit x 2)
  // Score never goes down — stored separately
  const stored = JSON.parse(localStorage.getItem('fr_rankscore_' + pid) || '{"score":0,"lastMastered":0}');
  return stored;
}

function saveRankScore(pid, data){
  try{ localStorage.setItem('fr_rankscore_' + pid, JSON.stringify(data)); }catch(e){}
}

function updateRankScore(pid, mastered, streak, goalsHit){
  const stored = getRankScore(pid);
  const newScore = mastered + (streak * 5) + (goalsHit * 2);
  // Never go down
  stored.score = Math.max(stored.score, newScore);
  stored.lastMastered = mastered;
  // Milestone every 10 words mastered
  if(mastered > 0 && mastered % 10 === 0 && mastered > (stored.lastToast || 0)){
    stored.lastToast = mastered;
    setTimeout(function(){ showToast('🌟 ' + mastered + ' words mastered! Keep going!'); }, 600);
  }
  saveRankScore(pid, stored);
  return stored.score;
}

function getCurrentRank(score){
  let rank = RANKS[0];
  for(var i = 0; i < RANKS.length; i++){ if(score >= RANKS[i].threshold) rank = RANKS[i]; }
  return rank;
}

function getNextRank(score){
  for(var i = 0; i < RANKS.length; i++){ if(score < RANKS[i].threshold) return RANKS[i]; }
  return null;
}

function renderTrophyRoad(score){
  const track = document.getElementById('trophyTrack');
  if(!track) return;
  const current = getCurrentRank(score);
  const next = getNextRank(score);

  // Build nodes — all 9 visible in grid
  let html = '';
  RANKS.forEach(function(r, i){
    const isDone = score >= r.threshold && r.name !== current.name;
    const isCurrent = r.name === current.name;
    const isLocked = score < r.threshold && !isCurrent;
    const badgeClass = isCurrent ? 'current' : isDone ? 'done' : 'locked';
    var ptsLabel = r.threshold === 0 ? 'Start' : r.threshold + ' pts';
    html += '<div class="trophy-node">'
      + '<div class="trophy-badge ' + badgeClass + '">' + r.badge + '</div>'
      + '<div class="trophy-name ' + badgeClass + '">' + r.name + '</div>'
      + '<div class="trophy-pts ' + badgeClass + '">' + ptsLabel + '</div>'
      + '</div>';
  });
  track.innerHTML = html;

  // Score display
  var scoreEl = document.getElementById('rankScore');
  if(scoreEl) scoreEl.textContent = score;

  // Rank name (left) + pts to next (right)
  var rankEl = document.getElementById('trophyRankName');
  if(rankEl){
    rankEl.textContent = current.badge + ' ' + current.name;
    rankEl.style.color = current.colour;
  }

  var bar = document.getElementById('trophyBarFill');
  var nextEl = document.getElementById('trophyRoadNext');
  if(next){
    var pct = Math.round((score - current.threshold) / (next.threshold - current.threshold) * 100);
    if(bar) bar.style.width = Math.min(100, pct) + '%';
    if(nextEl) nextEl.textContent = (next.threshold - score) + ' pts to ' + next.name + ' ' + next.badge;
  } else {
    if(bar) bar.style.width = '100%';
    if(nextEl) nextEl.textContent = '🏆 Maximum rank — you\'re a Native!';
  }
}

function updateLevelUI(mastered){
  if(!currentProfile) return;
  var dp = getDailyProgress(currentProfile.id);
  var streak = dp.streak || 0;
  // Count daily goals hit from weekly history
  var history = getWeeklyHistory(currentProfile.id);
  var goalsHit = Object.values(history).filter(function(d){ return d.correct >= DAILY_GOAL; }).length;
  var score = updateRankScore(currentProfile.id, mastered, streak, goalsHit);
  renderTrophyRoad(score);
}

function getWeekDates(){
  const today = new Date();
  const day = today.getDay(); // 0=Sun
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((day + 6) % 7));
  const days = [];
  for(let i=0;i<7;i++){
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    days.push(d.toISOString().slice(0,10));
  }
  return days;
}

function getWeeklyHistory(pid){
  try{ return JSON.parse(localStorage.getItem('fr_weekly_'+pid)) || {}; }catch{ return {}; }
}

function saveWeeklyHistory(pid, data){
  try{ localStorage.setItem('fr_weekly_'+pid, JSON.stringify(data)); }catch(e){} 
}

function updateWeeklyCalendar(){
  if(!currentProfile) return;
  const pid = currentProfile.id;
  const history = getWeeklyHistory(pid);
  const today = todayISO();
  const weekDates = getWeekDates();
  const DAY_LABELS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const cal = document.getElementById('weeklyCal');
  if(!cal) return;
  cal.innerHTML = '';
  weekDates.forEach((date, i) => {
    const entry = history[date] || {};
    const isToday = date === today;
    const isFuture = date > today;
    const div = document.createElement('div');
    div.className = 'cal-day';
    let dotClass = 'cal-day-dot';
    let emoji = '';
    if(!isFuture){
      if(entry.correct >= DAILY_GOAL * 2){ dotClass += ' double'; emoji = '⚡'; }
      else if(entry.correct >= DAILY_GOAL){ dotClass += ' done'; emoji = '✓'; }
      else if(entry.frozen){ dotClass += ' frozen'; emoji = '❄️'; }
      else if(date < today){ dotClass += ' missed'; emoji = ''; }
    }
    if(isToday) dotClass += ' today';
    div.innerHTML = '<div class="cal-day-label">'+DAY_LABELS[i]+'</div><div class="'+dotClass+'">'+emoji+'</div>';
    cal.appendChild(div);
  });
}

function recordDailyHistory(pid, correct){
  const today = todayISO();
  const history = getWeeklyHistory(pid);
  if(!history[today]) history[today] = {correct:0};
  history[today].correct = correct;
  // Check if freeze needed for any missed days this week
  const weekDates = getWeekDates();
  const freezesUsed = weekDates.filter(d => d < today && history[d] && history[d].frozen).length;
  weekDates.forEach(date => {
    if(date < today && !history[date]){
      // Missed day - apply freeze if available
      if(freezesUsed < 1){
        history[date] = {correct:0, frozen:true};
      }
    }
  });
  saveWeeklyHistory(pid, history);
  updateWeeklyCalendar();
}

function buildTodaysGoalQueue(){
  // Pick words balanced across 3 themes: ~7 from T1 (U1-3), ~7 from T2 (U4-6), ~6 from T3 (U7-9)
  const prog = getProgress(currentProfile.id);
  const today = todayISO();
  const dailyData = getDailyProgress(currentProfile.id);
  const alreadyDoneToday = dailyData.correct || 0;

  function pickFromTheme(units, count){
    const pool = VOCAB.filter(v => units.includes(v.u) && activeTiers.includes(v.t));
    // Shuffle then sort: unseen first, then by score ascending
    const shuffled = [...pool].sort(()=>Math.random()-0.5);
    shuffled.sort((a,b)=>{
      const pa = prog[a.f+'|fr-en'] || prog[a.f] || {score:99};
      const pb = prog[b.f+'|fr-en'] || prog[b.f] || {score:99};
      return (pa.score||0) - (pb.score||0);
    });
    return shuffled.slice(0, count);
  }

  const t1 = pickFromTheme([1,2,3], 7);
  const t2 = pickFromTheme([4,5,6], 7);
  const t3 = pickFromTheme([7,8,9], 6);
  const combined = [...t1, ...t2, ...t3].sort(()=>Math.random()-0.5);

  return combined.map(v => ({
    ...v,
    dir: activeDirection==='en-fr' ? 'en-fr' : activeDirection==='both' ? (Math.random()<0.5?'fr-en':'en-fr') : 'fr-en'
  }));
}

function startTodaysGoal(){
  currentMode = 'normal';
  sessionCorrect = 0;
  sessionWrong = 0;
  deck = buildTodaysGoalQueue();
  queue = [...deck];
  if(queue.length === 0){ showToast('No cards match your filters!'); return; }
  showScreen('studyScreen');
  // Badge row: 🎯 Today's Goal · 🔥 streak · 🃏 Flashcard Challenge
  const dp = getDailyProgress(currentProfile.id);
  const streak = dp.streak || 0;
  document.getElementById('studyModeBadge').textContent = '🎯 Today\'s Goal';
  const streakBadge = document.getElementById('studyStreakBadge');
  streakBadge.textContent = '🔥 ' + streak + ' day streak';
  streakBadge.style.display = '';
  const badge2 = document.getElementById('studyModeBadge2');
  badge2.textContent = '🃏 Flashcard Challenge';
  badge2.style.display = '';
  document.getElementById('timerWrap').classList.remove('show');
  document.getElementById('fauxDirToggle').style.display = 'none';
  document.getElementById('answerArea').classList.remove('hidden');
  document.getElementById('mcqArea').classList.add('hidden');
  showNextCard();
}

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
loadProfiles();
renderProfiles();
showScreen('profileScreen');
document.getElementById('studyBack').style.display='none';
SYNONYM_GROUPS = buildSynonymGroups();
try{var _sl=localStorage.getItem('gcse_lang')||'fr';if(_sl==='es')switchLang('es');}catch(e){}

// Service Worker for offline PWA
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}

