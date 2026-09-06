/* =========================================================================
   DREAM — script principal
   -------------------------------------------------------------------------
   Portage Astro : voir README.md pour la correspondance section -> composant.
   Toutes les données ci-dessous (bios, glossaire) sont rédigées à la main,
   dans mes propres mots, à partir de faits historiques généraux — aucune
   ne provient d'une source copiée. Les poèmes eux-mêmes restent vides :
   à compléter en sourçant les textes (Wikisource, Gallica, Poetry Foundation).
   ========================================================================= */

/* ===================== DONNÉES : POÈTES ===================== */
const poets = [
  // ---- France ----
  {id:'desbordes-valmore', name:'Marceline Desbordes-Valmore', lang:'fr', born:1786, died:1859,
   bio:"Poétesse et actrice, l'une des voix les plus personnelles du lyrisme romantique français, admirée par Baudelaire et Verlaine pour la sincérité de son émotion."},
  {id:'lamartine', name:'Alphonse de Lamartine', lang:'fr', born:1790, died:1869,
   bio:"Figure fondatrice du romantisme français avec ses Méditations poétiques, mêlant élégie amoureuse et méditation sur le temps qui passe."},
  {id:'vigny', name:'Alfred de Vigny', lang:'fr', born:1797, died:1863,
   bio:"Poète de la solitude et du stoïcisme, il conçoit l'artiste comme une figure noble et incomprise, vouée à la grandeur silencieuse."},
  {id:'hugo', name:'Victor Hugo', lang:'fr', born:1802, died:1885,
   bio:"Chef de file du romantisme français, dramaturge, romancier et poète, dont la Préface de Cromwell devient le manifeste du mouvement."},
  {id:'bertrand', name:'Aloysius Bertrand', lang:'fr', born:1807, died:1841,
   bio:"Précurseur du poème en prose, il invente un romantisme fantastique et pictural qui influencera Baudelaire une génération plus tard."},
  {id:'nerval', name:'Gérard de Nerval', lang:'fr', born:1808, died:1855,
   bio:"Poète du rêve et de la mémoire, mêlant mythologie personnelle et angoisse existentielle dans une œuvre marquée par l'ésotérisme."},
  {id:'gautier', name:'Théophile Gautier', lang:'fr', born:1811, died:1872,
   bio:"D'abord fervent romantique et héros de la bataille d'Hernani, il évolue vers une esthétique de l'art pour l'art centrée sur la forme."},
  {id:'musset', name:'Alfred de Musset', lang:'fr', born:1810, died:1857,
   bio:"Poète du désenchantement et de la passion malheureuse, il incarne le « mal du siècle » dans une œuvre lyrique et ironique."},
  {id:'baudelaire', name:'Charles Baudelaire', lang:'fr', born:1821, died:1867,
   bio:"Héritier du romantisme qu'il dépasse, ouvrant avec Les Fleurs du mal la voie à la modernité poétique."},

  // ---- Grande-Bretagne ----
  {id:'barbauld', name:'Anna Lætitia Barbauld', lang:'en', born:1743, died:1825,
   bio:"Poétesse et essayiste, figure de transition entre les Lumières et le romantisme, engagée pour l'éducation et l'abolitionnisme."},
  {id:'blake', name:'William Blake', lang:'en', born:1757, died:1827,
   bio:"Poète-graveur visionnaire, il développe une mythologie personnelle mêlant innocence, expérience et critique sociale radicale."},
  {id:'anne-bronte', name:'Anne Brontë', lang:'en', born:1820, died:1849,
   bio:"La plus discrète des sœurs Brontë, romancière et poétesse au regard moral aigu sur la condition des femmes."},
  {id:'charlotte-bronte', name:'Charlotte Brontë', lang:'en', born:1816, died:1855,
   bio:"Autrice de Jane Eyre, elle prolonge dans le roman la sensibilité intérieure et passionnée héritée du romantisme."},
  {id:'emily-bronte', name:'Emily Brontë', lang:'en', born:1818, died:1848,
   bio:"Autrice des Hauts de Hurlevent et d'une poésie intense marquée par la solitude des landes du Yorkshire."},
  {id:'burns', name:'Robert Burns', lang:'en', born:1759, died:1796,
   bio:"Poète national écossais, il transforme la tradition orale et le dialecte scots en une poésie populaire et universelle."},
  {id:'carlyle', name:'Thomas Carlyle', lang:'en', born:1795, died:1881,
   bio:"Essayiste et historien, sa pensée sur le héros et l'individu influence profondément la sensibilité romantique tardive."},
  {id:'clare', name:'John Clare', lang:'en', born:1793, died:1864,
   bio:"Poète paysan, il célèbre la campagne anglaise avec une précision d'observation rare, avant de sombrer dans la maladie mentale."},
  {id:'coleridge-st', name:'Samuel Taylor Coleridge', lang:'en', born:1772, died:1834,
   bio:"Théoricien majeur du romantisme anglais, coauteur des Lyrical Ballads, poète du surnaturel et de l'imagination."},
  {id:'coleridge-hartley', name:'Hartley Coleridge', lang:'en', born:1796, died:1849,
   bio:"Fils du précédent, poète et essayiste au destin marqué par l'ombre encombrante de son père."},
  {id:'de-quincey', name:'Thomas De Quincey', lang:'en', born:1785, died:1859,
   bio:"Essayiste connu pour ses Confessions d'un mangeur d'opium anglais, à la croisée de l'autobiographie et du rêve."},
  {id:'edgeworth', name:'Maria Edgeworth', lang:'en', born:1768, died:1849,
   bio:"Romancière irlandaise, pionnière du roman régionaliste et de la littérature pour enfants à visée éducative."},
  {id:'keats', name:'John Keats', lang:'en', born:1795, died:1821,
   bio:"Mort à 25 ans, il laisse une œuvre d'une intensité rare sur la beauté, la mortalité et l'art, dont ses grandes odes.",
   works: [
  {
    "id": "keats-chapman",
    "title": "On First Looking into Chapman’s Homer",
    "year": 1816,
    "source": "Poetry Foundation",
    "text": "Much have I travell'd in the realms of gold,\nAnd many goodly states and kingdoms seen;\nRound many western islands have I been\nWhich bards in fealty to Apollo hold.\nOft of one wide expanse had I been told\nThat deep-brow'd Homer ruled as his demesne;\nYet did I never breathe its pure serene\nTill I heard Chapman speak out loud and bold:\nThen felt I like some watcher of the skies\nWhen a new planet swims into his ken;\nOr like stout Cortez when with eagle eyes\nHe star'd at the Pacific—and all his men\nLook'd at each other with a wild surmise—\nSilent, upon a peak in Darien.",
    "commentary": "Keats écrivit ce sonnet, sa première œuvre majeure, en octobre 1816, après avoir passé toute la nuit avec son ami Charles Cowden Clarke à lire les traductions de l’Iliade et de l’Odyssée réalisées par George Chapman. Keats a, comme on le sait, écrit ce poème en quelques heures seulement ; il y compare la découverte littéraire que procure la lecture à la crainte mêlée d’admiration que devaient ressentir les explorateurs du Nouveau Monde. Ce faisant, fit remarquer Tennyson plus tard, Keats a peut-être confondu les faits : c’est Balboa, et non Cortés, qui fut le premier Européen à apercevoir le Pacifique. D’autres critiques ont avancé que Keats n’avait peut-être pas l’intention de nommer le premier, mais plutôt ses disciples — tout comme Chapman suit Homère. Quoi qu’il en soit, ce qui a attiré Keats chez Chapman, ce n’était pas la sophistication ou la précision des traductions, mais leur immédiateté, ce que Keats saisit si bien dans le cadre rigoureux de ce sonnet pétrarquien. Dans son sestet final, il passe des livres dorés et des « beaux royaumes » au silence sublime."
  },
  {
    "id": "keats-elgin",
    "title": "On Seeing the Elgin Marbles",
    "year": 1817,
    "source": "Poetry Foundation",
    "text": "My spirit is too weak—mortality\n   Weighs heavily on me like unwilling sleep,\n   And each imagined pinnacle and steep\nOf godlike hardship tells me I must die\nLike a sick eagle looking at the sky.\n   Yet 'tis a gentle luxury to weep\n   That I have not the cloudy winds to keep\nFresh for the opening of the morning's eye.\nSuch dim-conceived glories of the brain\n   Bring round the heart an undescribable feud;\nSo do these wonders a most dizzy pain,\n   That mingles Grecian grandeur with the rude\nWasting of old time—with a billowy main—\n   A sun—a shadow of a magnitude.",
    "commentary": "Autre sonnet ekphrastique, ce poème de 1817 est, à bien des égards, le reflet de « Chapman's Homer », son « ombre » plus sombre. Loin de susciter l'émerveillement, la rencontre avec la « grandeur grecque » produit ici quelque chose d'effrayant : un sentiment de sa propre « mortalité », un mot qui « pèse lourdement » sur le premier vers du poème, marqué par un enjambement marqué. Le vertige, ou cette « douleur étourdissante », qui naît de l'aperçu de l'immensité de l'histoire, était l'un des thèmes majeurs de Keats, un sujet auquel il se confrontait poème après poème. Ici, il décrit la « querelle » comme opposant « le cerveau » (qui anticipe la mort) et « le cœur » (qui recule devant son horreur). Dans cet affrontement, c'est le cœur qui l'emporte : Keats n'avance ici aucune théorie, ne trouve aucun rempart contre la confusion, et ses derniers vers s'effondrent dans le désespoir, leur syntaxe se décomposant."
  },
  {
    "id": "keats-endymion",
    "title": "Endymion",
    "subtitle": "extrait — Livre I, « A Poetic Romance »",
    "year": 1818,
    "source": "Poetry Foundation",
    "text": "A thing of beauty is a joy for ever:\nIts loveliness increases; it will never\nPass into nothingness; but still will keep\nA bower quiet for us, and a sleep\nFull of sweet dreams, and health, and quiet breathing.\nTherefore, on every morrow, are we wreathing\nA flowery band to bind us to the earth,\nSpite of despondence, of the inhuman dearth\nOf noble natures, of the gloomy days,\nOf all the unhealthy and o'er-darkened ways\nMade for our searching: yes, in spite of all,\nSome shape of beauty moves away the pall\nFrom our dark spirits. Such the sun, the moon,\nTrees old and young, sprouting a shady boon\nFor simple sheep; and such are daffodils\nWith the green world they live in; and clear rills\nThat for themselves a cooling covert make\n'Gainst the hot season; the mid forest brake,\nRich with a sprinkling of fair musk-rose blooms:\nAnd such too is the grandeur of the dooms\nWe have imagined for the mighty dead;\nAll lovely tales that we have heard or read:\nAn endless fountain of immortal drink,\nPouring unto us from the heaven's brink.\n       Nor do we merely feel these essences\nFor one short hour; no, even as the trees\nThat whisper round a temple become soon\nDear as the temple's self, so does the moon,\nThe passion poesy, glories infinite,\nHaunt us till they become a cheering light\nUnto our souls, and bound to us so fast,\nThat, whether there be shine, or gloom o'ercast;\nThey always must be with us, or we die.\n       Therefore, 'tis with full happiness that I\nWill trace the story of Endymion.\nThe very music of the name has gone\nInto my being, and each pleasant scene\nIs growing fresh before me as the green\nOf our own valleys: so I will begin\nNow while I cannot hear the city's din;\nNow while the early budders are just new,\nAnd run in mazes of the youngest hue\nAbout old forests; while the willow trails\nIts delicate amber; and the dairy pails\nBring home increase of milk. And, as the year\nGrows lush in juicy stalks, I'll smoothly steer\nMy little boat, for many quiet hours,\nWith streams that deepen freshly into bowers.\nMany and many a verse I hope to write,\nBefore the daisies, vermeil rimm'd and white,\nHide in deep herbage; and ere yet the bees\nHum about globes of clover and sweet peas,\nI must be near the middle of my story.\nO may no wintry season, bare and hoary,\nSee it half finish'd: but let Autumn bold,\nWith universal tinge of sober gold,\nBe all about me when I make an end.\nAnd now, at once adventuresome, I send\nMy herald thought into a wilderness:\nThere let its trumpet blow, and quickly dress\nMy uncertain path with green, that I may speed\nEasily onward, thorough flowers and weed.",
    "commentary": "Bien qu'on se souvienne surtout de lui pour ses textes courts, Keats était fasciné par le genre épique. Pendant ses années d'études, il s'est formé à l'art poétique en traduisant l'Énéide, et il a continué à écrire des œuvres plus longues tout au long de sa brève carrière, des poèmes aussi variés que « Hyperion », « Lamia » et « La Veille de la Sainte-Agnès ». Avec ses 4 000 vers, Endymion était son œuvre la plus longue et l'un des trois seuls livres publiés de son vivant. Il fut, comme on le sait, violemment descendu par la critique, à tel point que les amis de Keats et ses confrères poètes romantiques, tels que Byron et Shelley, affirmèrent que Keats avait été tué par des critiques malveillantes. Dans ce bref extrait du début du poème de 1818, vous comprendrez peut-être pourquoi : par moments, sa « beauté s'intensifie » au point de distraire le lecteur. Mais dans l'ouverture épigrammatique et dans les enjambements radicaux de ses couplets héroïques, on voit également Keats affiner les outils qu'il utilisera dans ses poèmes les plus magistraux. Lorsqu'il annonce ici son projet « J'envoie / Ma pensée héraut dans le désert », écrit-il : on perçoit non seulement son ambition et son appréhension, mais aussi la grandeur qui l'attend."
  },
  {
    "id": "keats-grecian-urn",
    "title": "Ode on a Grecian Urn",
    "year": 1819,
    "source": "Poetry Foundation",
    "text": "Thou still unravish'd bride of quietness,\n       Thou foster-child of silence and slow time,\nSylvan historian, who canst thus express\n       A flowery tale more sweetly than our rhyme:\nWhat leaf-fring'd legend haunts about thy shape\n       Of deities or mortals, or of both,\n               In Tempe or the dales of Arcady?\n       What men or gods are these? What maidens loth?\nWhat mad pursuit? What struggle to escape?\n               What pipes and timbrels? What wild ecstasy?\nHeard melodies are sweet, but those unheard\n       Are sweeter; therefore, ye soft pipes, play on;\nNot to the sensual ear, but, more endear'd,\n       Pipe to the spirit ditties of no tone:\nFair youth, beneath the trees, thou canst not leave\n       Thy song, nor ever can those trees be bare;\n               Bold Lover, never, never canst thou kiss,\nThough winning near the goal yet, do not grieve;\n       She cannot fade, though thou hast not thy bliss,\n               For ever wilt thou love, and she be fair!\nAh, happy, happy boughs! that cannot shed\n         Your leaves, nor ever bid the Spring adieu;\nAnd, happy melodist, unwearied,\n         For ever piping songs for ever new;\nMore happy love! more happy, happy love!\n         For ever warm and still to be enjoy'd,\n                For ever panting, and for ever young;\nAll breathing human passion far above,\n         That leaves a heart high-sorrowful and cloy'd,\n                A burning forehead, and a parching tongue.\nWho are these coming to the sacrifice?\n         To what green altar, O mysterious priest,\nLead'st thou that heifer lowing at the skies,\n         And all her silken flanks with garlands drest?\nWhat little town by river or sea shore,\n         Or mountain-built with peaceful citadel,\n                Is emptied of this folk, this pious morn?\nAnd, little town, thy streets for evermore\n         Will silent be; and not a soul to tell\n                Why thou art desolate, can e'er return.\nO Attic shape! Fair attitude! with brede\n         Of marble men and maidens overwrought,\nWith forest branches and the trodden weed;\n         Thou, silent form, dost tease us out of thought\nAs doth eternity: Cold Pastoral!\n         When old age shall this generation waste,\n                Thou shalt remain, in midst of other woe\nThan ours, a friend to man, to whom thou say'st,\n         \"Beauty is truth, truth beauty,—that is all\n                Ye know on earth, and all ye need to know.\"",
    "commentary": "Les six célèbres odes de Keats, écrites en mai 1819, sont des merveilles d'écriture, qui empruntent au sonnet des figures de style et des schémas pour revisiter et enrichir cette forme traditionnelle d'éloge. On y trouve, par exemple, de nombreuses apostrophes, Keats prenant un plaisir évident à explorer les multiples facettes — « épouse du calme », « prêtre mystérieux », « froide pastorale » — qu'il peut donner à l'ancien vase au cœur du poème. Mais cet enthousiasme n'est pas une simple mise en scène : il est révélateur et ajoute de la complexité à son argumentation. Plus il pose de questions et plus son attention s'intensifie, plus l'objet lui-même semble devenir « mystérieux » et « désolé ». Le fait de faire prononcer au vase les célèbres derniers vers du poème atténue quelque peu la tension de celui-ci, mais ses aspects troublants demeurent : même si Keats considère l'art comme un réceptacle intemporel de la vérité, c'est aussi un réceptacle « froid », qui nous rappelle que le « malheur » est peut-être la seule constante de l'histoire."
  },
  {
    "id": "keats-autumn",
    "title": "To Autumn",
    "year": 1819,
    "source": "Poetry Foundation",
    "text": "Season of mists and mellow fruitfulness,\n   Close bosom-friend of the maturing sun;\nConspiring with him how to load and bless\n   With fruit the vines that round the thatch-eves run;\nTo bend with apples the moss'd cottage-trees,\n   And fill all fruit with ripeness to the core;\n      To swell the gourd, and plump the hazel shells\n   With a sweet kernel; to set budding more,\nAnd still more, later flowers for the bees,\nUntil they think warm days will never cease,\n      For summer has o'er-brimm'd their clammy cells.\nWho hath not seen thee oft amid thy store?\n   Sometimes whoever seeks abroad may find\nThee sitting careless on a granary floor,\n   Thy hair soft-lifted by the winnowing wind;\nOr on a half-reap'd furrow sound asleep,\n   Drows'd with the fume of poppies, while thy hook\n      Spares the next swath and all its twined flowers:\nAnd sometimes like a gleaner thou dost keep\n   Steady thy laden head across a brook;\n   Or by a cyder-press, with patient look,\n      Thou watchest the last oozings hours by hours.\nWhere are the songs of spring? Ay, Where are they?\n   Think not of them, thou hast thy music too,—\nWhile barred clouds bloom the soft-dying day,\n   And touch the stubble-plains with rosy hue;\nThen in a wailful choir the small gnats mourn\n   Among the river sallows, borne aloft\n      Or sinking as the light wind lives or dies;\nAnd full-grown lambs loud bleat from hilly bourn;\n   Hedge-crickets sing; and now with treble soft\n   The red-breast whistles from a garden-croft;\n      And gathering swallows twitter in the skies.",
    "commentary": "Écrite en septembre 1819, « À l'automne » est la dernière des célèbres odes de Keats. Elle a également marqué, d'une certaine manière, la fin de sa carrière poétique : quelques mois plus tard, il tomba gravement malade, ayant contracté la maladie qui allait l'emporter en un peu plus d'un an. S'il s'agit là d'une sorte de dernier regard, celui-ci n'est pas dénué de mélancolie : dans la dernière strophe, riche en métaphores, le narrateur déplore le temps qui passe et exprime le souhait d'entendre à nouveau les chants du printemps. Mais on perçoit également des signes de satisfaction et la possibilité d'un achèvement proche — « fruit with ripeness to the core » — partout dans ce paysage. Keats se retire peut-être de la vocation qu'il s'était choisie — faisant preuve d'une véritable « capacité négative », le poète lui-même est presque totalement absent de la scène —, mais il peut encore s'attarder dans son départ, trouvant la plénitude dans le peu qu'il reste à faire et une musique propre à cet instant."
  },
  {
    "id": "keats-nightingale",
    "title": "Ode to a Nightingale",
    "year": 1820,
    "source": "Poetry Foundation",
    "text": "My heart aches, and a drowsy numbness pains\n         My sense, as though of hemlock I had drunk,\nOr emptied some dull opiate to the drains\n         One minute past, and Lethe-wards had sunk:\n'Tis not through envy of thy happy lot,\n         But being too happy in thine happiness,—\n                That thou, light-winged Dryad of the trees\n                        In some melodious plot\n         Of beechen green, and shadows numberless,\n                Singest of summer in full-throated ease.\nO, for a draught of vintage! that hath been\n         Cool'd a long age in the deep-delved earth,\nTasting of Flora and the country green,\n         Dance, and Provençal song, and sunburnt mirth!\nO for a beaker full of the warm South,\n         Full of the true, the blushful Hippocrene,\n                With beaded bubbles winking at the brim,\n                        And purple-stained mouth;\n         That I might drink, and leave the world unseen,\n                And with thee fade away into the forest dim:\nFade far away, dissolve, and quite forget\n         What thou among the leaves hast never known,\nThe weariness, the fever, and the fret\n         Here, where men sit and hear each other groan;\nWhere palsy shakes a few, sad, last gray hairs,\n         Where youth grows pale, and spectre-thin, and dies;\n                Where but to think is to be full of sorrow\n                        And leaden-eyed despairs,\n         Where Beauty cannot keep her lustrous eyes,\n                Or new Love pine at them beyond to-morrow.\nAway! away! for I will fly to thee,\n         Not charioted by Bacchus and his pards,\nBut on the viewless wings of Poesy,\n         Though the dull brain perplexes and retards:\nAlready with thee! tender is the night,\n         And haply the Queen-Moon is on her throne,\n                Cluster'd around by all her starry Fays;\n                        But here there is no light,\n         Save what from heaven is with the breezes blown\n                Through verdurous glooms and winding mossy ways.\nI cannot see what flowers are at my feet,\n         Nor what soft incense hangs upon the boughs,\nBut, in embalmed darkness, guess each sweet\n         Wherewith the seasonable month endows\nThe grass, the thicket, and the fruit-tree wild;\n         White hawthorn, and the pastoral eglantine;\n                Fast fading violets cover'd up in leaves;\n                        And mid-May's eldest child,\n         The coming musk-rose, full of dewy wine,\n                The murmurous haunt of flies on summer eves.\nDarkling I listen; and, for many a time\n         I have been half in love with easeful Death,\nCall'd him soft names in many a mused rhyme,\n         To take into the air my quiet breath;\n                Now more than ever seems it rich to die,\n         To cease upon the midnight with no pain,\n                While thou art pouring forth thy soul abroad\n                        In such an ecstasy!\n         Still wouldst thou sing, and I have ears in vain—\n                   To thy high requiem become a sod.\nThou wast not born for death, immortal Bird!\n         No hungry generations tread thee down;\nThe voice I hear this passing night was heard\n         In ancient days by emperor and clown:\nPerhaps the self-same song that found a path\n         Through the sad heart of Ruth, when, sick for home,\n                She stood in tears amid the alien corn;\n                        The same that oft-times hath\n         Charm'd magic casements, opening on the foam\n                Of perilous seas, in faery lands forlorn.\nForlorn! the very word is like a bell\n         To toll me back from thee to my sole self!\nAdieu! the fancy cannot cheat so well\n         As she is fam'd to do, deceiving elf.\nAdieu! adieu! thy plaintive anthem fades\n         Past the near meadows, over the still stream,\n                Up the hill-side; and now 'tis buried deep\n                        In the next valley-glades:\n         Was it a vision, or a waking dream?\n                Fled is that music:—Do I wake or sleep?",
    "commentary": "Dans une lettre adressée à ses frères en 1817, Keats décrivait la qualité essentielle du poète comme la « capacité négative », c'est-à-dire une réceptivité face à l'incertitude, au mystère, au doute et à la mutabilité des choses. Ce poème, le plus long de ses odes de 1819, peut être lu comme une exploration de cette capacité, le poète se retrouvant, à un moment donné, « embaumé » dans l'obscurité de la forêt, littéralement incapable de « voir quelles fleurs se trouvent à [ses] pieds ». C'est le rossignol qui le conduit dans cette obscurité, dont le chant semble promettre à la fois l'éternité et l'oubli. Le poème ne se termine ni par l'un ni par l'autre : au contraire, le poète retrouve son « moi seul » et l'oiseau est « enfoui au plus profond / des clairières de la vallée voisine ». Si la musique du rossignol s'est « envolée » à la fin du poème, le chant extatique de Keats lui-même en est le résidu, ses strophes riches en rimes et en assonances, en accents surprenants et en césures dramatiques."
  },
  {
    "id": "keats-bright-star",
    "title": "Bright star, would I were stedfast as thou art",
    "year": 1838,
    "source": "Poetry Foundation",
    "text": "Bright star, would I were stedfast as thou art—\nNot in lone splendour hung aloft the night\nAnd watching, with eternal lids apart,\nLike nature's patient, sleepless Eremite,\nThe moving waters at their priestlike task\nOf pure ablution round earth's human shores,\nOr gazing on the new soft-fallen mask\nOf snow upon the mountains and the moors—\nNo—yet still stedfast, still unchangeable,\nPillow'd upon my fair love's ripening breast,\nTo feel for ever its soft fall and swell,\nAwake for ever in a sweet unrest,\nStill, still to hear her tender-taken breath,\nAnd so live ever—or else swoon to death.",
    "commentary": "Joseph Severn, un ami de Keats, considérait ce poème comme le dernier que Keats ait jamais écrit, bien que les spécialistes s'interrogent encore sur la date de sa composition et sur le fait de savoir s'il était destiné à Fanny Brawne, la fiancée de Keats, comme on le suppose souvent. Ce qui est certain, en revanche, c'est sa virtuosité : à travers des images limpides et une seule phrase sinueuse, ce sonnet shakespearien fait le lien entre le cosmique et le domestique, l'amour et la mort, tout en incarnant avec brio la réflexion de Keats sur la relation entre le désir et le temps. En effet, la fougue dont il fait preuve ici laisse une impression durable. Ce poème a la particularité rare d'avoir inspiré un film — le biopic de Jane Campion, *Bright Star* (2009) — et on peut en entendre les échos dans d'autres poèmes aussi variés que le sonnet d'amour XVII de Neruda et la dernière œuvre de James Merrill lui-même, « Christmas Tree »."
  }
]},
  {id:'lamb-charles', name:'Charles Lamb', lang:'en', born:1775, died:1834,
   bio:"Essayiste et critique, connu pour ses Essays of Elia et son adaptation de Shakespeare écrite avec sa sœur Mary."},
  {id:'lamb-mary', name:'Mary Lamb', lang:'en', born:1764, died:1847,
   bio:"Coautrice avec son frère Charles des Tales from Shakespeare, destinés à faire découvrir le dramaturge aux jeunes lecteurs."},
  {id:'maturin', name:'Charles Robert Maturin', lang:'en', born:1780, died:1824,
   bio:"Romancier gothique irlandais, auteur de Melmoth ou l'Homme errant, figure clé du roman noir romantique."},
  {id:'polidori', name:'John William Polidori', lang:'en', born:1795, died:1821,
   bio:"Médecin et écrivain, auteur de The Vampyre, texte fondateur de la figure moderne du vampire."},
  {id:'radcliffe', name:'Ann Radcliffe', lang:'en', born:1764, died:1823,
   bio:"Pionnière du roman gothique anglais, maîtresse du suspense atmosphérique et des paysages inquiétants."},
  {id:'mary-robinson', name:'Mary Robinson', lang:'en', born:1757, died:1800,
   bio:"Actrice, poétesse et romancière, figure culturelle majeure de son temps et précurseure d'une poésie sentimentale audacieuse."},
  {id:'scott', name:'Sir Walter Scott', lang:'en', born:1771, died:1832,
   bio:"Inventeur du roman historique moderne avec Waverley et Ivanhoe, il façonne durablement l'imaginaire médiéval britannique."},
  {id:'seward', name:'Anna Seward', lang:'en', born:1742, died:1809,
   bio:"Poétesse surnommée « le Cygne de Lichfield », figure de transition vers la sensibilité romantique."},
  {id:'mary-shelley', name:'Mary Shelley', lang:'en', born:1797, died:1851,
   bio:"Autrice de Frankenstein, roman fondateur qui interroge la création, la science et la responsabilité morale."},
  {id:'southey', name:'Robert Southey', lang:'en', born:1774, died:1843,
   bio:"Poète lauréat et essayiste, l'un des trois grands poètes lakistes aux côtés de Wordsworth et Coleridge."},
  {id:'wordsworth-w', name:'William Wordsworth', lang:'en', born:1770, died:1850,
   bio:"Cofondateur du romantisme anglais avec les Lyrical Ballads, chantre de la nature et de la mémoire poétique."},
  {id:'wordsworth-d', name:'Dorothy Wordsworth', lang:'en', born:1771, died:1855,
   bio:"Sœur du précédent, ses journaux intimes ont nourri et éclairé l'œuvre poétique de son frère."},
  {id:'byron', name:'Lord Byron (George Gordon)', lang:'en', born:1788, died:1824,
   bio:"Figure du poète maudit et engagé, mort en soutenant l'indépendance grecque, il incarne le « héros byronien »."},
  {id:'pb-shelley', name:'Percy Bysshe Shelley', lang:'en', born:1792, died:1822,
   bio:"Poète radical et visionnaire, défenseur d'un idéal de liberté politique et poétique absolu."},
  {id:'leigh-hunt', name:'Leigh Hunt', lang:'en', born:1784, died:1859,
   bio:"Poète et essayiste, ami et soutien de Keats et Shelley, figure centrale des cercles littéraires londoniens."},
  {id:'landor', name:'Walter Savage Landor', lang:'en', born:1775, died:1864,
   bio:"Poète et prosateur au style classique exigeant, admiré pour ses Imaginary Conversations."},
  {id:'chatterton', name:'Thomas Chatterton', lang:'en', born:1752, died:1770,
   bio:"Poète prodige mort à 17 ans ; ses faux poèmes médiévaux en font une icône du génie romantique précoce et tragique."},
  {id:'charlotte-smith', name:'Charlotte Smith', lang:'en', born:1749, died:1806,
   bio:"Poétesse et romancière, ses Elegiac Sonnets relancent la pratique du sonnet et influencent Wordsworth lui-même."},
  {id:'hemans', name:'Felicia Dorothea Hemans', lang:'en', born:1793, died:1835,
   bio:"Poétesse extrêmement populaire en son temps, connue pour ses poèmes sur l'héroïsme domestique et le sentiment patriotique."},
  {id:'landon', name:'Letitia Elizabeth Landon', lang:'en', born:1802, died:1838,
   bio:"Poétesse prolifique, connue sous les initiales « L.E.L. », figure de la poésie sentimentale victorienne naissante."},
  {id:'richardson', name:'Charlotte Richardson', lang:'en', born:null, died:null,
   bio:"Poétesse mineure du romantisme anglais ; ses dates et sa biographie restent peu documentées à ce jour."},
  {id:'crabbe', name:'George Crabbe', lang:'en', born:1754, died:1832,
   bio:"Poète du réalisme rural, il dépeint sans complaisance la vie des petites gens de la campagne anglaise."},
  {id:'hannah-more', name:'Hannah More', lang:'en', born:1745, died:1833,
   bio:"Écrivaine et réformatrice, figure de la littérature morale et éducative à la charnière du XVIIIe et du XIXe siècle."}
];

const poetById = Object.fromEntries(poets.map(p => [p.id, p]));

/* ===================== DONNÉES : THÈMES ===================== */
const themes = [
  {id:'sublime', name:'Le Sublime', x:15, y:22,
   gloss:"L'expérience esthétique de ce qui dépasse et menace, montagnes, tempêtes, immensités, où la [[sublime]] terreur se retourne en émerveillement. Théorisée par Burke puis reprise par les poètes du [[pathetic-fallacy]], elle irrigue les paysages de Wordsworth comme le grotesque hugolien.",
   poetIds:['wordsworth-w','coleridge-st','hugo','byron','mary-shelley','radcliffe']},
  {id:'imagination', name:"L'Imagination", x:38, y:14,
   gloss:"Faculté créatrice placée au sommet de la hiérarchie romantique, capable de recomposer le réel plutôt que de simplement le refléter, jusqu'à la [[reverie]] la plus libre.",
   poetIds:['coleridge-st','blake','nerval','pb-shelley','coleridge-hartley']},
  {id:'nature', name:'La Poésie de la nature', x:63, y:19,
   gloss:"Un rapport au paysage qui dépasse le simple décor [[pastoral]] : la nature devient refuge, miroir intérieur et espace de retrait face à une société en pleine industrialisation.",
   poetIds:['wordsworth-w','clare','lamartine','wordsworth-d','burns']},
  {id:'melancolie', name:'La Mélancolie', x:83, y:27,
   gloss:"Le « [[spleen]] », ce « mal du siècle » : une tristesse diffuse, parfois recherchée pour elle-même dans l'[[elegie]], qui hante aussi bien la France que l'Angleterre.",
   poetIds:['musset','keats','desbordes-valmore','charlotte-smith','landon']},
  {id:'medievalisme', name:'Le Médiévalisme', x:24, y:56,
   gloss:"Une fascination pour le Moyen Âge revisité comme âge d'or perdu ou comme décor [[gothique]], entre roman historique, cathédrales et légendes.",
   poetIds:['scott','hugo','chatterton','maturin','radcliffe']},
  {id:'hellenisme', name:"L'Hellénisme", x:50, y:64,
   gloss:"Le rêve d'une Grèce antique idéalisée porté par le [[philhellenisme]], entre beauté formelle et nostalgie d'un monde disparu.",
   poetIds:['keats','byron','gautier','leigh-hunt','landor']},
  {id:'surnaturalisme', name:'Le Surnaturalisme', x:73, y:48,
   gloss:"L'irruption du [[gothique]] et de l'occulte dans le réel : spectres et créatures deviennent les vecteurs d'une angoisse proprement moderne.",
   poetIds:['coleridge-st','mary-shelley','bertrand','polidori','maturin']},
  {id:'subjectivite', name:'La Subjectivité', x:90, y:60,
   gloss:"Le sujet [[lyrisme|lyrique]] placé au centre de l'œuvre : la confession et le [[fragment]] deviennent les lieux d'une exploration radicale du moi, jusqu'au « [[byronien|héros byronien]] ».",
   poetIds:['byron','musset','wordsworth-w','de-quincey','vigny']}
];

/* Association thème -> poète -> œuvre précise (id de `works`), pour afficher
   un poème représentatif plutôt qu'un simple nom de poète sur la page thème.
   À compléter au fur et à mesure que `works` se remplit pour chaque poète. */
const themeWorks = {
  'hellenisme': { 'keats': 'keats-grecian-urn' },
  'melancolie': { 'keats': 'keats-nightingale' }
};

/* ===================== DONNÉES : GLOSSAIRE ===================== */
const glossary = {
  'sublime':{term:'Sublime', def:"Sentiment esthétique mêlant crainte et fascination face à une immensité qui dépasse l'entendement (montagne, tempête, abîme)."},
  'elegie':{term:'Élégie', def:"Poème méditatif et mélancolique, souvent consacré au deuil, à la perte ou au temps qui passe."},
  'ode':{term:'Ode', def:"Poème lyrique élevé, généralement adressé à une personne, une idée ou une chose célébrée."},
  'ballade':{term:'Ballade', def:"Poème narratif à forme répétitive, d'origine populaire, souvent teinté de mystère ou de tragédie."},
  'pastoral':{term:'Pastoral(e)', def:"Qui évoque la vie simple des bergers et de la campagne, souvent de façon idéalisée."},
  'gothique':{term:'Gothique', def:"Esthétique fascinée par le macabre, le surnaturel et les ruines médiévales."},
  'byronien':{term:'Héros byronien', def:"Figure de rebelle mélancolique, orgueilleux et marginal, inspirée de la vie et de l'œuvre de Lord Byron."},
  'philhellenisme':{term:'Philhellénisme', def:"Mouvement de soutien et d'admiration envers la Grèce antique et sa cause d'indépendance au XIXe siècle."},
  'pathetic-fallacy':{term:'Illusion pathétique', def:"Procédé qui attribue des émotions humaines aux éléments naturels (« le ciel pleure », par exemple)."},
  'reverie':{term:'Rêverie', def:"État de vagabondage mental propice à la création, cher aux poètes romantiques des deux traditions."},
  'spleen':{term:'Spleen', def:"Mélancolie profonde et sans cause précise, proche de l'ennui existentiel."},
  'sonnet':{term:'Sonnet', def:"Poème à forme fixe de quatorze vers, très prisé par les poètes romantiques anglais."},
  'lyrisme':{term:'Lyrisme', def:"Expression poétique de l'émotion et de la subjectivité du « je »."},
  'fragment':{term:'Fragment poétique', def:"Œuvre volontairement inachevée, dont l'incomplétude devient une esthétique en soi."}
};

/* ===================== ÉTAT : AVIS (session, non persistant sans PHP) ===================== */
const reviewsStore = {}; // { poetId: [ {name, rating, comment} ] }
let phpAvailable = null; // détecté au premier essai d'envoi

/* ===================== UTILITAIRES ===================== */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function lerp(a,b,t){ return a + (b-a)*t; }

/** Transforme les [[glossaire]] et [[id|libellé]] d'un texte en marqueurs de note cliquables,
 *  et renvoie {html, notes} où notes est la liste ordonnée des définitions utilisées. */
function linkifyGlossary(text){
  const notes = [];
  const html = text.replace(/\[\[([a-z-]+)(\|([^\]]+))?\]\]/g, (match, key, _p, label) => {
    const entry = glossary[key];
    if(!entry) return label || key;
    notes.push(entry);
    const n = notes.length;
    const shown = label || entry.term;
    return `${shown}<sup class="fn-marker" data-note="${n}" tabindex="0">${n}</sup>`;
  });
  return {html, notes};
}

/* ===================== CURSEUR LUMINEUX ===================== */
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);
if(!reduceMotion){
  let gx=window.innerWidth/2, gy=window.innerHeight/2, cx=gx, cy=gy;
  window.addEventListener('mousemove', e=>{ gx=e.clientX; gy=e.clientY; });
  (function loop(){
    cx = lerp(cx, gx, 0.12); cy = lerp(cy, gy, 0.12);
    cursorGlow.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  })();
} else {
  cursorGlow.style.display = 'none';
}

/* ===================== GÉNÉRATION DES ÉTOILES ===================== */
const hero = $('#hero');
themes.forEach((theme, i)=>{
  const star = document.createElement('button');
  star.className = 'theme-star';
  star.style.left = theme.x + '%';
  star.style.top = theme.y + '%';
  star.style.animationDelay = (0.6 + i*0.08) + 's';
  star.setAttribute('aria-label', theme.name);
  star.innerHTML = `<span class="theme-label">${theme.name}</span>`;
  star.addEventListener('click', ()=>openThemePanel(theme));
  hero.appendChild(star);
});

/* ===================== ÉTOILES FILANTES ===================== */
const shootingLayer = document.createElement('div');
shootingLayer.className = 'shooting-stars';
shootingLayer.setAttribute('aria-hidden', 'true');
hero.appendChild(shootingLayer);

function spawnShootingStar(direction){
  if(reduceMotion) return;
  const star = document.createElement('span');
  star.className = 'shooting-star';

  let x, y, angle;
  if(direction === 'up-right'){
    x = 4 + Math.random()*30;        // départ en bas à gauche
    y = 58 + Math.random()*32;
    angle = -55 + Math.random()*20;  // trajectoire vers le haut-droit
  } else {
    x = 66 + Math.random()*30;       // départ en haut à droite
    y = 6 + Math.random()*32;
    angle = 125 + Math.random()*20;  // trajectoire vers le bas-gauche
  }
  const dist = 420 + Math.random()*380;
  const dur = 0.9 + Math.random()*0.5;

  star.style.setProperty('--x', x + '%');
  star.style.setProperty('--y', y + '%');
  star.style.setProperty('--angle', angle + 'deg');
  star.style.setProperty('--dist', dist + 'px');
  star.style.setProperty('--dur', dur + 's');

  shootingLayer.appendChild(star);
  const cleanup = () => star.remove();
  star.addEventListener('animationend', cleanup);
  setTimeout(cleanup, dur*1000 + 400); // filet de sécurité
}

// Survol du ciel : étoiles filantes tant que le curseur reste dessus
let shootingHoverTimer = null;
hero.addEventListener('mouseenter', ()=>{
  if(reduceMotion) return;
  spawnShootingStar(Math.random() < 0.5 ? 'up-right' : 'down-left');
  shootingHoverTimer = setInterval(()=>{
    spawnShootingStar(Math.random() < 0.5 ? 'up-right' : 'down-left');
  }, 1300 + Math.random()*900);
});
hero.addEventListener('mouseleave', ()=>{
  clearInterval(shootingHoverTimer);
  shootingHoverTimer = null;
});

// Défilement vers le bas : une étoile part en haut à droite, une autre en bas à gauche
let lastScrollY = window.scrollY;
let shootingScrollCooldown = false;
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  const goingDown = y > lastScrollY;
  lastScrollY = y;
  if(!goingDown || shootingScrollCooldown || reduceMotion) return;
  if(y > window.innerHeight * 1.15) return; // trop loin du ciel pour que ce soit lisible
  shootingScrollCooldown = true;
  spawnShootingStar('up-right');
  spawnShootingStar('down-left');
  setTimeout(()=>{ shootingScrollCooldown = false; }, 550);
}, { passive:true });

/* ===================== PARALLAXE PHOTO ===================== */
const skyPhoto = $('#skyPhoto');
if(!reduceMotion){
  let targetX=0, targetY=0, curX=0, curY=0;
  const RANGE = 26;
  window.addEventListener('mousemove', e=>{
    const nx = (e.clientX / window.innerWidth) - 0.5;
    const ny = (e.clientY / window.innerHeight) - 0.5;
    targetX = -nx * RANGE * 2;
    targetY = -ny * RANGE * 2;
  });
  (function animateParallax(){
    curX = lerp(curX, targetX, 0.06);
    curY = lerp(curY, targetY, 0.06);
    skyPhoto.style.transform = `translate(${curX}px, ${curY}px)`;
    requestAnimationFrame(animateParallax);
  })();
}

/* ===================== TILT 3D SUR LES CARTES ===================== */
function attachTilt(el){
  if(reduceMotion) return;
  el.addEventListener('mousemove', e=>{
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${py*-6}deg) rotateY(${px*6}deg) translateY(-2px)`;
  });
  el.addEventListener('mouseleave', ()=>{ el.style.transform = ''; });
}

/* ===================== RÉVÉLATION AU DÉFILEMENT ===================== */
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.15});

function staggerReveal(container, selector, baseDelay=60){
  Array.from(container.querySelectorAll(selector)).forEach((el, i)=>{
    el.style.transitionDelay = reduceMotion ? '0ms' : (i*baseDelay)+'ms';
    revealObserver.observe(el);
  });
}

/* ===================== PANNEAU : conteneur générique ===================== */
const overlay = $('#overlay');
const panel = $('#panel');
const panelBody = $('#panelBody');

function showPanel(){
  overlay.classList.add('open');
  panel.classList.add('open');
}
function closePanel(){
  overlay.classList.remove('open');
  panel.classList.remove('open');
}
$('#panelClose').addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
window.addEventListener('keydown', e=>{ if(e.key==='Escape') closePanel(); });

function crossfadeInto(renderFn){
  panelBody.classList.remove('visible');
  setTimeout(()=>{
    renderFn();
    attachNoteHandlers();
    requestAnimationFrame(()=> panelBody.classList.add('visible'));
  }, reduceMotion ? 0 : 180);
}

/* ---------- notes de bas de page : interactions ---------- */
function attachNoteHandlers(){
  $$('.fn-marker').forEach(marker=>{
    marker.addEventListener('click', ()=>{
      const n = marker.dataset.note;
      const noteEl = $(`.note-item[data-num="${n}"]`);
      if(!noteEl) return;
      noteEl.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block:'center'});
      noteEl.classList.add('highlight');
      setTimeout(()=> noteEl.classList.remove('highlight'), 1400);
    });
  });
}

function renderNotesBlock(notes){
  if(!notes.length) return '';
  const items = notes.map((n,i)=>`
    <div class="note-item" data-num="${i+1}">
      <span class="num">${i+1}.</span><strong>${n.term}</strong> — ${n.def}
    </div>`).join('');
  return `<div class="notes-block"><h4>Notes</h4>${items}</div>`;
}

/* ===================== VUE : PANNEAU THÈME ===================== */
function openThemePanel(theme){
  crossfadeInto(()=>{
    const {html, notes} = linkifyGlossary(theme.gloss);
    const poemCards = theme.poetIds.map(pid=>{
      const poet = poetById[pid];
      if(!poet) return '';

      const workId = themeWorks[theme.id]?.[pid];
      const work = workId ? (poet.works || []).find(w => w.id === workId) : null;

      if(work){
        return `
          <div class="poem-card" data-poet="${poet.id}">
            <div class="poem-head">
              <div class="who">${escapeHtml(work.title)}<small>${escapeHtml(poet.name)} · ${escapeHtml(String(work.year))}</small></div>
              <div class="status">lire ↴</div>
            </div>
            <div class="bio-drawer">
              <div class="bio-drawer-inner">
                <div class="poem-verse">${escapeHtml(work.text)}</div>
                <div class="poem-commentary">
                  <span class="poem-commentary-label">Commentaire</span>
                  <p>${escapeHtml(work.commentary)}</p>
                </div>
                <p class="gloss" style="margin-top:1.2rem;">${poet.bio}</p>
                ${renderReviewsHTML(poet.id)}
              </div>
            </div>
          </div>`;
      }

      return `
        <div class="poem-card" data-poet="${poet.id}">
          <div class="poem-head">
            <div class="who">${poet.name}<small>${poet.born ?? '?'}–${poet.died ?? '?'} · poème à associer à ce thème</small></div>
            <div class="status">texte à intégrer ↴</div>
          </div>
          <div class="bio-drawer">
            <div class="bio-drawer-inner">
              <p>${poet.bio}</p>
              ${renderReviewsHTML(poet.id)}
            </div>
          </div>
        </div>`;
    }).join('');

    panelBody.innerHTML = `
      <div class="panel-eyebrow">Thème</div>
      <h2>${theme.name}</h2>
      <p class="gloss">${html}</p>
      ${poemCards}
      ${renderNotesBlock(notes)}
    `;

    $$('.poem-head').forEach(head=>{
      head.addEventListener('click', ()=>{
        const drawer = head.nextElementSibling;
        drawer.classList.toggle('open');
      });
    });
    wireReviewForms();
    staggerReveal(panelBody, '.poem-card', 70);
  });
  showPanel();
}

/* ===================== VUE : GRILLE AUTEURS (section inline) ===================== */
function renderAuthorsSection(filter='all'){
  const section = $('#authorsSection');
  if(!section) return;
  const list = poets.filter(p => filter==='all' || p.lang===filter);
  const cards = list.map(p => `
    <div class="author-card" data-poet="${p.id}">
      <span class="tag ${p.lang}">${p.lang==='fr' ? 'France' : 'Grande-Bretagne'}</span>
      <h3>${p.name}</h3>
      <div class="dates">${p.born ?? '?'} – ${p.died ?? '?'}</div>
      <p>${p.bio}</p>
    </div>`).join('');

  section.innerHTML = `
    <div class="inner">
      <div class="panel-eyebrow">Constellation complète</div>
      <h2>Tous les auteurs</h2>
      <p class="gloss">Le corpus DREAM rassemble ${poets.length} auteurs et autrices romantiques, ${poets.filter(p=>p.lang==='fr').length} côté français et ${poets.filter(p=>p.lang==='en').length} côté britannique. Clique une carte pour lire sa biographie complète et consulter ou laisser un avis.</p>
      <div class="authors-filters">
        <button class="filter-chip ${filter==='all'?'active':''}" data-filter="all">Tous</button>
        <button class="filter-chip ${filter==='fr'?'active':''}" data-filter="fr">France</button>
        <button class="filter-chip ${filter==='en'?'active':''}" data-filter="en">Grande-Bretagne</button>
      </div>
      <div class="authors-grid">${cards}</div>
    </div>
  `;

  $$('#authorsSection .filter-chip').forEach(chip=>{
    chip.addEventListener('click', ()=> renderAuthorsSection(chip.dataset.filter));
  });
  $$('#authorsSection .author-card').forEach(card=>{
    attachTilt(card);
    card.addEventListener('click', ()=> openAuthorPanel(card.dataset.poet));
  });
  staggerReveal(section, '.author-card', 40);
}
renderAuthorsSection('all');

/* ===================== SON : swoosh de clic (synthétisé) ===================== */
let audioCtx = null;
function getAudioCtx(){
  if(!audioCtx){
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if(!Ctx) return null;
    audioCtx = new Ctx();
  }
  if(audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}
function playSwoosh(){
  const ctx = getAudioCtx();
  if(!ctx) return;
  try{
    const dur = 0.26;
    const bufferSize = Math.floor(ctx.sampleRate * dur);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for(let i=0; i<bufferSize; i++){ data[i] = Math.random()*2 - 1; }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.value = 0.85;
    filter.frequency.setValueAtTime(2000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + dur);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + dur);
  }catch(err){ /* pas grave si l'audio échoue, on continue sans son */ }
}
document.addEventListener('click', (e)=>{
  const target = e.target.closest(
    '.pill-btn, .filter-chip, .theme-star, .author-card, .panel-close, .poem-head, .fn-marker, .star-picker button'
  );
  if(target) playSwoosh();
});

/* ===================== SON D'AMBIANCE : chants d'oiseaux ===================== */
const ambientAudio = $('#ambientAudio');
const soundToggle = $('#soundToggle');
if(ambientAudio && soundToggle){
  ambientAudio.volume = 0.32;
  soundToggle.addEventListener('click', ()=>{
    if(ambientAudio.paused){
      ambientAudio.play().catch(()=>{});
      soundToggle.classList.add('playing');
      soundToggle.setAttribute('aria-pressed', 'true');
    } else {
      ambientAudio.pause();
      soundToggle.classList.remove('playing');
      soundToggle.setAttribute('aria-pressed', 'false');
    }
  });
}

const dividerSpark = $('#dividerSpark');
if(dividerSpark) revealObserver.observe(dividerSpark);

/* ===================== ŒUVRES : poème + commentaire dans .who ===================== */
function renderWorksHTML(poet){
  const works = poet.works || [];
  if(!works.length){
    return `
      <div class="poem-card">
        <div class="poem-head">
          <div class="who">Œuvres<small>Poèmes à associer à cet auteur</small></div>
          <div class="status">texte à intégrer</div>
        </div>
      </div>`;
  }
  return works.map(w => `
    <div class="poem-card work-card">
      <div class="poem-head">
        <div class="who poem-full">
          <div class="poem-title-row">
            <span class="poem-title">${escapeHtml(w.title)}</span>
            ${w.year ? `<small class="poem-year">${escapeHtml(String(w.year))}</small>` : ''}
          </div>
          ${w.subtitle ? `<div class="poem-subtitle">${escapeHtml(w.subtitle)}</div>` : ''}
          <div class="poem-verse">${escapeHtml(w.text)}</div>
          <div class="poem-commentary">
            <span class="poem-commentary-label">Commentaire</span>
            <p>${escapeHtml(w.commentary)}</p>
          </div>
          ${w.source ? `<p class="poem-source">Texte : ${escapeHtml(w.source)}</p>` : ''}
        </div>
      </div>
    </div>`).join('');
}

/* ===================== VUE : FICHE AUTEUR DÉTAILLÉE ===================== */
function openAuthorPanel(poetId){
  const poet = poetById[poetId];
  if(!poet) return;
  crossfadeInto(()=>{
    panelBody.innerHTML = `
      <div class="panel-eyebrow">${poet.lang==='fr' ? 'Romantisme français' : 'Romantisme britannique'}</div>
      <h2>${poet.name}</h2>
      <p class="gloss">${poet.bio} (${poet.born ?? '?'}–${poet.died ?? '?'})</p>
      ${renderWorksHTML(poet)}
      ${renderReviewsHTML(poet.id)}
    `;
    wireReviewForms();
    staggerReveal(panelBody, '.poem-card', 70);
  });
  showPanel();
}

/* ===================== AVIS LECTEURS ===================== */
function renderReviewsHTML(poetId){
  const list = reviewsStore[poetId] || [];
  const items = list.length
    ? list.map(r => `
        <div class="review-item">
          <div class="row">
            <span class="name">${escapeHtml(r.name)}</span>
            <span class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
          </div>
          <div class="comment">${escapeHtml(r.comment)}</div>
        </div>`).join('')
    : `<div class="review-empty">Aucun avis pour l'instant — sois le premier à en laisser un.</div>`;

  return `
    <div class="reviews-block" data-reviews-for="${poetId}">
      <h4>Avis des lecteurs</h4>
      <div class="review-list">${items}</div>
      <form class="review-form" data-poet="${poetId}">
        <div class="field">
          <label>Nom</label>
          <input type="text" name="name" placeholder="Ton prénom" required maxlength="40">
        </div>
        <div class="field">
          <label>Note</label>
          <div class="star-picker" data-value="0">
            ${[1,2,3,4,5].map(n=>`<button type="button" data-star="${n}">★</button>`).join('')}
          </div>
        </div>
        <div class="field">
          <label>Commentaire</label>
          <textarea name="comment" placeholder="Ton ressenti sur cet auteur..." required maxlength="400"></textarea>
        </div>
        <button type="submit" class="submit-btn">Publier l'avis</button>
        <div class="review-notice"></div>
      </form>
    </div>`;
}

function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function wireReviewForms(){
  $$('.star-picker').forEach(picker=>{
    const buttons = Array.from(picker.querySelectorAll('button'));
    buttons.forEach(btn=>{
      btn.addEventListener('mouseenter', ()=> paintStars(buttons, +btn.dataset.star));
      btn.addEventListener('click', ()=>{
        picker.dataset.value = btn.dataset.star;
        paintStars(buttons, +btn.dataset.star);
      });
    });
    picker.addEventListener('mouseleave', ()=> paintStars(buttons, +picker.dataset.value));
  });

  $$('.review-form').forEach(form=>{
    form.addEventListener('submit', async e=>{
      e.preventDefault();
      const poetId = form.dataset.poet;
      const name = form.querySelector('[name=name]').value.trim();
      const comment = form.querySelector('[name=comment]').value.trim();
      const rating = +form.closest('.reviews-block').querySelector('.star-picker').dataset.value || 5;
      if(!name || !comment) return;

      const notice = form.querySelector('.review-notice');
      const submitBtn = form.querySelector('.submit-btn');
      submitBtn.disabled = true;

      const review = {name, rating, comment};
      const persisted = await submitReviewToServer(poetId, review);

      if(!reviewsStore[poetId]) reviewsStore[poetId] = [];
      reviewsStore[poetId].push(review);

      const block = document.querySelector(`.reviews-block[data-reviews-for="${poetId}"]`);
      if(block) block.outerHTML = renderReviewsHTML(poetId);
      wireReviewForms();

      const freshNotice = document.querySelector(`.reviews-block[data-reviews-for="${poetId}"] .review-notice`);
      if(freshNotice){
        freshNotice.textContent = persisted
          ? 'Avis enregistré.'
          : 'Avis ajouté en local (mode démo) — branche functions.php pour le rendre permanent.';
      }
    });
  });
}

function paintStars(buttons, value){
  buttons.forEach(b=> b.classList.toggle('filled', +b.dataset.star <= value));
}

/** Tente d'envoyer l'avis à functions.php (style AJAX WordPress).
 *  Retourne true si le serveur a confirmé l'enregistrement, false sinon
 *  (site ouvert en local sans backend PHP, ou route non branchée). */
async function submitReviewToServer(poetId, review){
  if(phpAvailable === false) return false;
  try{
    const body = new URLSearchParams({
      action:'dream_submit_review',
      poet_id: poetId,
      name: review.name,
      rating: review.rating,
      comment: review.comment
    });
    const res = await fetch('/wp-admin/admin-ajax.php', {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body
    });
    if(!res.ok) throw new Error('bad status');
    const data = await res.json();
    phpAvailable = !!data.success;
    return phpAvailable;
  } catch(err){
    phpAvailable = false;
    return false;
  }
}

/* ===================== NAVIGATION ===================== */
$('#navAuthors').addEventListener('click', ()=>{
  $('#authorsSection').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block:'start' });
});
