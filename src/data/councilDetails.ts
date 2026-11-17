import type { CouncilDetail } from "./types";
/** Per-council detail facts, keyed by council number. Source: .claude/project-info/raw/council-details.md (Tanner / Papal Encyclicals Online, New Advent, Britannica). */
export const councilDetails: Record<number, CouncilDetail> =  {
  "1": {
    "convokedBy": "Emperor Constantine I",
    "presided": "Uncertain; probably Ossius of Córdoba, with Constantine opening it",
    "attendance": "about 250–300 bishops (tradition: 318)",
    "context": "Arius, a priest of Alexandria, taught that the Son was created, splitting the Eastern churches. Constantine wanted one faith in the newly tolerated Church.",
    "issue": {
      "name": "Arianism",
      "view": "The Son is a created being; 'there was when he was not.'"
    },
    "figures": [
      "Constantine I - emperor who called the council",
      "Arius - Alexandrian priest, condemned and exiled",
      "Alexander of Alexandria - Arius's bishop, led opposition",
      "Athanasius - Alexander's deacon, later Nicene champion"
    ],
    "term": {
      "word": "homoousios",
      "gloss": "of one substance (with the Father)"
    },
    "outcome": "Issued the Nicene Creed and set a common Easter date. The Arian dispute raged for decades and was settled only in 381.",
    "dissent": [
      {
        "who": "Nontrinitarian groups (e.g. Unitarians, Jehovah's Witnesses)",
        "why": "Reject the Trinitarian creed it defined."
      }
    ],
    "topics": [
      "trinity"
    ],
    "creeds": [
      "nicene"
    ]
  },
  "2": {
    "convokedBy": "Emperor Theodosius I",
    "presided": "Meletius of Antioch, then Gregory of Nazianzus, then Nectarius",
    "attendance": "about 150 bishops, all Eastern (36 Pneumatomachi walked out)",
    "context": "Arianism still divided the East, and a new group denied that the Holy Spirit is God. Theodosius wanted Nicene faith restored.",
    "issue": {
      "name": "Macedonianism (Pneumatomachi)",
      "view": "The Holy Spirit is a creature, not fully God like the Father."
    },
    "figures": [
      "Theodosius I - emperor who called the council",
      "Gregory of Nazianzus - theologian, presided briefly, resigned",
      "Meletius of Antioch - first president, died mid-council",
      "Nectarius - new archbishop, closed the council"
    ],
    "term": {
      "word": "ekporeuomenon",
      "gloss": "the Spirit ‘proceeds from the Father’"
    },
    "outcome": "Expanded the Nicene Creed into the form still used today and ended Arianism in the empire. Canon 3 ranked Constantinople second after Rome, which Rome resisted for centuries.",
    "dissent": [
      {
        "who": "Nontrinitarian groups",
        "why": "Reject the full divinity of the Spirit."
      }
    ],
    "topics": [
      "trinity",
      "spirit"
    ],
    "creeds": [
      "nicene"
    ]
  },
  "3": {
    "convokedBy": "Emperor Theodosius II (with Valentinian III; Pope Celestine I agreed)",
    "presided": "Cyril of Alexandria, also acting for Pope Celestine I",
    "attendance": "about 200 bishops (197 signed Nestorius's deposition); rival synod of about 43",
    "context": "Nestorius, archbishop of Constantinople, objected to calling Mary 'Theotokos'. Cyril of Alexandria accused him of splitting Christ in two.",
    "issue": {
      "name": "Nestorianism",
      "view": "Mary bore Christ, not God; the divine Word and the man stay distinct."
    },
    "figures": [
      "Cyril of Alexandria - led the council against Nestorius",
      "Nestorius - archbishop of Constantinople, deposed",
      "John of Antioch - led a rival eastern synod",
      "Celestine I - pope, sent legates in support"
    ],
    "term": {
      "word": "Theotokos",
      "gloss": "God-bearer (Mother of God)"
    },
    "outcome": "Rival councils excommunicated each other until the Formula of Reunion (433) between Cyril and John. Nestorius was exiled, and the Persian church drifted apart.",
    "dissent": [
      {
        "who": "Church of the East (Assyrian)",
        "why": "Rejects Nestorius's condemnation; venerates him and prefers 'Christotokos'."
      }
    ],
    "topics": [
      "mary",
      "trinity"
    ]
  },
  "4": {
    "convokedBy": "Emperor Marcian (Pope Leo I reluctantly agreed)",
    "presided": "Papal legates (Paschasinus), with imperial officials keeping order",
    "attendance": "about 350–500 bishops (Leo: 600; tradition: 630)",
    "context": "The 'Robber Synod' of Ephesus (449) had cleared the monk Eutyches. The new emperor Marcian called a fresh council to settle how Christ is God and man.",
    "issue": {
      "name": "Eutychianism",
      "view": "After the union Christ has one nature; the human is absorbed into the divine. (The Oriental Orthodox also condemn Eutyches.)"
    },
    "figures": [
      "Leo I - pope whose Tome set the doctrine",
      "Marcian - emperor who called the council",
      "Dioscorus of Alexandria - patriarch, deposed",
      "Eutyches - monk whose teaching was condemned"
    ],
    "term": {
      "word": "in two natures",
      "gloss": "one person, truly God and truly man: ‘without confusion, change, division or separation’"
    },
    "outcome": "Much of Egypt, Syria and Armenia did not receive it - with the Church of the East (431), one of the first lasting splits of the Church. Rome accepted the doctrine but rejected canon 28, which raised Constantinople's rank.",
    "dissent": [
      {
        "who": "Oriental Orthodox (Coptic, Armenian, Syriac, Ethiopian…)",
        "why": "See 'in two natures' as Nestorian; hold 'one incarnate nature of the Word'."
      },
      {
        "who": "Church of the East",
        "why": "Does not receive councils after 381."
      }
    ],
    "topics": [
      "trinity"
    ],
    "creeds": [
      "chalcedon"
    ]
  },
  "5": {
    "convokedBy": "Emperor Justinian I",
    "presided": "Eutychius, patriarch of Constantinople (the pope refused to attend)",
    "attendance": "about 150–165 bishops (160 signed; few Westerners)",
    "context": "Justinian hoped to win back Chalcedon's opponents by condemning three teachers they saw as Nestorian. Pope Vigilius resisted and was held in Constantinople.",
    "issue": {
      "name": "Three Chapters",
      "view": "Defenders: condemning dead teachers Chalcedon had cleared would betray Chalcedon."
    },
    "figures": [
      "Justinian I - emperor who drove the condemnation",
      "Vigilius - pope, resisted, later gave in",
      "Eutychius - patriarch who presided",
      "Theodore of Mopsuestia - teacher condemned after death"
    ],
    "term": {
      "word": "Theopaschite formula",
      "gloss": "‘One of the Trinity suffered in the flesh’"
    },
    "outcome": "It failed to reconcile the Miaphysites, and it caused a schism in northern Italy (Aquileia) that lasted until about 700. Origenist ideas were condemned around the same time.",
    "dissent": [
      {
        "who": "Church of the East",
        "why": "Condemned Theodore of Mopsuestia, its chief theological teacher."
      },
      {
        "who": "Oriental Orthodox",
        "why": "Do not receive councils after Ephesus (431)."
      }
    ],
    "topics": [
      "trinity"
    ]
  },
  "6": {
    "convokedBy": "Emperor Constantine IV",
    "presided": "Emperor Constantine IV (first 11 sessions), with papal legates",
    "attendance": "about 40 at first, rising to 174 who signed the acts",
    "context": "An imperial compromise said Christ had one will, aiming to reunite Chalcedon's critics. Rome and Maximus the Confessor had resisted it for decades.",
    "issue": {
      "name": "Monothelitism",
      "view": "Christ has only one will, the divine, not a human will too."
    },
    "figures": [
      "Constantine IV - emperor, called and chaired it",
      "Agatho - pope whose letter set the doctrine",
      "Macarius of Antioch - Monothelite patriarch, deposed",
      "Honorius I - earlier pope, condemned posthumously"
    ],
    "term": {
      "word": "dyothelitism",
      "gloss": "two wills in Christ, human and divine, in harmony"
    },
    "outcome": "Ended Monothelitism in the empire. The condemnation of Pope Honorius was later cited against papal infallibility at Vatican I.",
    "dissent": [
      {
        "who": "Oriental Orthodox and Church of the East",
        "why": "Do not receive councils after their own break."
      }
    ],
    "topics": [
      "trinity"
    ]
  },
  "7": {
    "convokedBy": "Empress Irene (regent for Constantine VI)",
    "presided": "Patriarch Tarasius (papal legates signed first)",
    "attendance": "about 300–350 members; at least 308 bishops or proxies signed",
    "context": "The emperors had banned icons since the 730s, and the iconoclast council of Hieria (754) had condemned them. Irene moved to restore them.",
    "issue": {
      "name": "Iconoclasm",
      "view": "Images of Christ and the saints are idols; venerating them breaks the commandment."
    },
    "figures": [
      "Irene - empress-regent who called the council",
      "Tarasius - patriarch who presided",
      "Hadrian I - pope, sent legates",
      "John of Damascus - earlier defender of icons, honoured"
    ],
    "term": {
      "word": "proskynesis vs latreia",
      "gloss": "honour given to icons vs worship due to God alone"
    },
    "outcome": "Iconoclasm came back in 815 and ended for good in 843 (the 'Triumph of Orthodoxy'). The Franks rejected the council at Frankfurt (794), working from a bad translation.",
    "dissent": [
      {
        "who": "Most Protestants (especially Reformed)",
        "why": "See venerating images as idolatry; Lutherans and Anglicans are mixed."
      },
      {
        "who": "Oriental Orthodox and Church of the East",
        "why": "Not party to it; Oriental Orthodox use icons, while the Church of the East traditionally displays the Cross rather than icons."
      }
    ],
    "topics": [
      "saints"
    ]
  },
  "8": {
    "convokedBy": "Emperor Basil I with Pope Hadrian II",
    "presided": "Legates of Pope Hadrian II",
    "attendance": "about 12–25 bishops at the opening, about 100 (102–103) by the end",
    "context": "Patriarch Ignatius had been deposed, and the scholar Photius put in his place. A new emperor restored Ignatius and, with Rome, moved to condemn Photius.",
    "issue": {
      "name": "Photian schism",
      "view": "Photius was the lawful patriarch; Rome had no right to judge it."
    },
    "figures": [
      "Photius - scholar-patriarch, deposed and condemned",
      "Ignatius - patriarch restored to his see",
      "Basil I - emperor who backed the council",
      "Hadrian II - pope whose legates presided"
    ],
    "outcome": "A larger council in 879–880 under Pope John VIII's legates restored Photius and annulled 869–870. The West listed 869–870 as ecumenical only from the 11th–12th century, partly for its canon against lay control of bishops.",
    "dissent": [
      {
        "who": "Eastern Orthodox",
        "why": "Reject it; many count the 879–880 council, which restored Photius, as the eighth."
      }
    ],
    "topics": [
      "papacy"
    ]
  },
  "9": {
    "convokedBy": "Pope Callistus II",
    "presided": "Pope Callistus II",
    "attendance": "at least 300 bishops and abbots (older claims: about 900)",
    "context": "Pope and emperor had fought for 50 years over who appoints bishops. The Concordat of Worms (1122) settled it, and a council was called to confirm it.",
    "issue": {
      "name": "Investiture Controversy",
      "view": "Lay rulers may invest bishops with ring and staff, the symbols of spiritual office."
    },
    "figures": [
      "Callistus II - pope who called and led it",
      "Henry V - emperor, party to the Concordat of Worms",
      "Gregory VII - earlier reform pope who began the fight"
    ],
    "term": {
      "word": "investiture",
      "gloss": "formally handing a bishop his office and its symbols"
    },
    "outcome": "Confirmed the Concordat of Worms and issued reform canons on simony and clerical marriage. It was the first general council held in the West.",
    "dissent": [],
    "topics": [
      "ministry"
    ]
  },
  "10": {
    "convokedBy": "Pope Innocent II",
    "presided": "Pope Innocent II",
    "attendance": "about 500 bishops and abbots (older claims: about 1,000)",
    "context": "A split papal election in 1130 had produced two popes. After the rival Anacletus II died in 1138, Innocent called a council to clear up the damage.",
    "issue": {
      "name": "Schism of Anacletus II",
      "view": "Anacletus II, not Innocent II, was the rightful pope."
    },
    "figures": [
      "Innocent II - pope who called and led it",
      "Anacletus II - rival pope, died 1138",
      "Bernard of Clairvaux - abbot who rallied support for Innocent",
      "Roger II of Sicily - Anacletus's ally, excommunicated"
    ],
    "outcome": "Annulled Anacletus's ordinations and declared that marriages of priests were invalid, not merely unlawful. Arnold of Brescia was condemned around this time.",
    "dissent": [],
    "topics": [
      "ministry"
    ]
  },
  "11": {
    "convokedBy": "Pope Alexander III",
    "presided": "Pope Alexander III",
    "attendance": "about 300 bishops (302 named)",
    "context": "Emperor Frederick Barbarossa had backed a line of antipopes for about 18 years. After peace at Venice (1177), the pope called a council to repair the Church.",
    "issue": {
      "name": "Imperial antipope schism",
      "view": "The emperor's antipopes (Victor IV and successors) were the true popes."
    },
    "figures": [
      "Alexander III - pope who called and led it",
      "Frederick I Barbarossa - emperor, reconciled in 1177",
      "Rufinus of Assisi - canonist, gave the opening sermon"
    ],
    "term": {
      "word": "two-thirds rule",
      "gloss": "a pope needs two-thirds of the cardinals' votes"
    },
    "outcome": "The two-thirds rule for electing popes still applies today. Cathars were condemned, and the Waldensians were refused permission to preach.",
    "dissent": [],
    "topics": [
      "papacy"
    ]
  },
  "12": {
    "convokedBy": "Pope Innocent III",
    "presided": "Pope Innocent III",
    "attendance": "about 404–412 bishops, plus 800+ abbots and priors",
    "context": "Innocent III wanted to reform the Church, fight heresy and launch a new crusade. It was the largest and most important medieval council.",
    "issue": {
      "name": "Catharism (Albigensians)",
      "view": "Matter is evil, made by an evil principle; sacraments and Church are worthless."
    },
    "figures": [
      "Innocent III - pope, drafted the decrees himself",
      "Joachim of Fiore - abbot whose Trinity theory was condemned",
      "Frederick II - confirmed as emperor over Otto IV",
      "Peter Lombard - theologian upheld against Joachim"
    ],
    "term": {
      "word": "transubstantiation",
      "gloss": "bread and wine become Christ's body and blood in substance"
    },
    "outcome": "Required yearly confession and Easter communion, and planned the Fifth Crusade for 1217. Innocent died in 1216 before most of it took effect.",
    "dissent": [
      {
        "who": "Most Protestants",
        "why": "Reject transubstantiation and compulsory confession to a priest."
      }
    ],
    "topics": [
      "eucharist"
    ]
  },
  "13": {
    "convokedBy": "Pope Innocent IV",
    "presided": "Pope Innocent IV",
    "attendance": "about 140–150 bishops, plus 3 patriarchs",
    "context": "Emperor Frederick II was at war with the papacy and had blocked an earlier council. Innocent IV fled to Lyon and called the council there.",
    "issue": {
      "name": "Conflict with Emperor Frederick II",
      "view": "The emperor holds power over Italy and is not subject to papal judgment."
    },
    "figures": [
      "Innocent IV - pope who called and led it",
      "Frederick II - emperor, deposed by the council",
      "Thaddeus of Suessa - Frederick's lawyer and defender",
      "Baldwin II - Latin emperor of Constantinople, attended"
    ],
    "outcome": "Declared Frederick deposed, though he fought on until he died in 1250. It also issued decrees on usury, the Mongols and aid for the Latin East.",
    "dissent": [],
    "topics": [
      "papacy"
    ]
  },
  "14": {
    "convokedBy": "Pope Gregory X",
    "presided": "Pope Gregory X",
    "attendance": "about 300 bishops and 60 abbots (older claims: 500 bishops)",
    "context": "Emperor Michael VIII wanted papal help against Western rivals and offered church union. Gregory X also wanted a crusade and Church reform.",
    "issue": {
      "name": "East–West schism (Filioque)",
      "view": "Greeks: the Spirit proceeds from the Father alone, not 'and the Son'."
    },
    "figures": [
      "Gregory X - pope who called and led it",
      "Michael VIII Palaiologos - Byzantine emperor who sought union",
      "Bonaventure - Franciscan theologian, died during council",
      "Thomas Aquinas - summoned, died on the way"
    ],
    "term": {
      "word": "Filioque",
      "gloss": "‘and the Son’ (the Spirit proceeds from Father and Son)"
    },
    "outcome": "Union was proclaimed but rejected by Greek clergy and people, and it was repudiated after Michael died in 1282. Its conclave rules for papal elections lasted.",
    "dissent": [
      {
        "who": "Eastern Orthodox",
        "why": "Union forced by the emperor; repudiated in 1282–1285, Filioque rejected."
      }
    ],
    "topics": [
      "trinity",
      "papacy"
    ],
    "creeds": [
      "nicene"
    ]
  },
  "15": {
    "convokedBy": "Pope Clement V",
    "presided": "Pope Clement V",
    "attendance": "about 100 bishops, plus 20 cardinals and 4 patriarchs",
    "context": "King Philip IV of France had arrested the Knights Templar on charges of heresy and pressed the pope to destroy the order. Crusade and reform were also on the agenda.",
    "issue": {
      "name": "Knights Templar",
      "view": "Templars: innocent; their confessions were extracted by torture."
    },
    "figures": [
      "Clement V - pope who called and led it",
      "Philip IV of France - king pushing suppression",
      "Jacques de Molay - Templar Grand Master, burned 1314",
      "Peter John Olivi - Franciscan whose ideas were examined"
    ],
    "outcome": "The Templars were suppressed by papal decree (not condemned) and their property given to the Hospitallers. Beguines were condemned, and universities were told to teach Eastern languages.",
    "dissent": [],
    "topics": [
      "original-sin"
    ]
  },
  "16": {
    "convokedBy": "Antipope John XXIII under pressure from Emperor Sigismund; reconvoked by Gregory XII (1415)",
    "presided": "Cardinals and Sigismund in turn; Pope Martin V from 1417",
    "attendance": "about 600 voting members: ~29 cardinals, ~180 bishops, 100+ abbots, ~100 doctors",
    "context": "Three men claimed to be pope (Rome, Avignon, Pisa). Sigismund pressed for a council to end the Western Schism and deal with Wyclif and Hus.",
    "issue": {
      "name": "Western Schism",
      "view": "Three rival lines (Rome, Avignon, Pisa) each claimed to be the true pope."
    },
    "figures": [
      "Sigismund - king/emperor who forced the council",
      "Jan Hus - Czech reformer, burned in 1415",
      "Gregory XII - Roman pope who resigned",
      "Martin V - pope elected 1417, ending schism"
    ],
    "term": {
      "word": "Haec sancta",
      "gloss": "decree claiming a council's power comes directly from Christ"
    },
    "outcome": "Ended the schism with Martin V's election. Hus's execution sparked the Hussite wars, and later popes rejected its claim that councils outrank popes. Rome counts only the sessions after Gregory XII's reconvocation; Haec sancta not binding.",
    "dissent": [
      {
        "who": "Hussite heirs (Moravian Church, Czech Brethren)",
        "why": "Reject the burning of Hus despite his safe-conduct."
      }
    ],
    "topics": [
      "papacy"
    ]
  },
  "17": {
    "convokedBy": "Pope Martin V (Basel); moved to Ferrara by Pope Eugene IV in 1437–38",
    "presided": "Cardinal Cesarini at Basel; Pope Eugene IV at Ferrara–Florence",
    "attendance": "union decree signed by about 117 Latins and 31–33 Greeks; Greek party about 700",
    "context": "Basel turned into a fight over whether councils outrank popes. Eugene IV moved it to Ferrara and Florence to meet the Greeks, who wanted help against the Turks.",
    "issue": {
      "name": "East–West schism (Filioque, papal primacy)",
      "view": "Greeks: the Spirit proceeds from the Father alone; the pope lacks universal jurisdiction."
    },
    "figures": [
      "Eugene IV - pope who moved and led it",
      "John VIII Palaiologos - Byzantine emperor seeking union",
      "Mark of Ephesus - Greek bishop who refused to sign",
      "Bessarion - Greek bishop who backed union"
    ],
    "term": {
      "word": "Laetentur caeli",
      "gloss": "‘Let the heavens rejoice’: the 1439 bull of union"
    },
    "outcome": "The union was rejected in the East, Constantinople fell in 1453, and a synod formally repudiated it in 1484. The Basel rump deposed Eugene and elected antipope Felix V (1439). Rome does not count the Basel sessions after the 1437 transfer.",
    "dissent": [
      {
        "who": "Eastern Orthodox",
        "why": "Union rejected by clergy and people; Mark of Ephesus honoured as a saint."
      }
    ],
    "topics": [
      "afterlife",
      "eucharist"
    ],
    "creeds": [
      "nicene"
    ]
  },
  "18": {
    "convokedBy": "Pope Julius II",
    "presided": "Pope Julius II, then Pope Leo X",
    "attendance": "about 80–100 bishops, almost all Italian (plus ~15 cardinals)",
    "context": "Rebel cardinals backed by King Louis XII of France held a council at Pisa (1511) to depose Julius II. He answered with his own council in Rome.",
    "issue": {
      "name": "Conciliabulum of Pisa (conciliarism)",
      "view": "A council can judge and depose the pope."
    },
    "figures": [
      "Julius II - pope who called it",
      "Leo X - pope who finished it",
      "Louis XII - French king backing Pisa",
      "Francis I - French king, Concordat of Bologna"
    ],
    "outcome": "Ended the Pisan schism, defined the soul as immortal and individual, and confirmed the Concordat of Bologna (1516). Its reforms came to little, and it closed seven months before Luther's 95 Theses.",
    "dissent": [],
    "topics": [
      "afterlife"
    ]
  },
  "19": {
    "convokedBy": "Pope Paul III",
    "presided": "Papal legates (Del Monte, Cervini, Pole; later Morone)",
    "attendance": "about 30 bishops at the opening; 255 fathers (about 200 bishops) signed the final decrees",
    "context": "The Protestant Reformation had split Western Christendom. After years of delay, Paul III called a council to answer the reformers and reform the Church.",
    "issue": {
      "name": "Protestant Reformation",
      "view": "Justification by faith alone; Scripture alone is authority; only two sacraments."
    },
    "figures": [
      "Paul III - pope who called it",
      "Charles V - emperor who pushed for a council",
      "Giovanni Morone - legate who steered the final period",
      "Pius IV - pope who confirmed its decrees"
    ],
    "term": {
      "word": "ex opere operato",
      "gloss": "sacraments work by the rite itself, not the minister's merit"
    },
    "outcome": "It met in three periods, defined Catholic teaching on Scripture, tradition, justification and the seven sacraments, and created seminaries. The Roman Catechism (1566) and Missal (1570) followed.",
    "dissent": [
      {
        "who": "Protestants (Lutheran, Reformed, Anglican and others)",
        "why": "Its anathemas condemn justification by faith alone and Scripture alone."
      }
    ],
    "topics": [
      "justification",
      "authority",
      "eucharist"
    ]
  },
  "20": {
    "convokedBy": "Pope Pius IX",
    "presided": "Pope Pius IX",
    "attendance": "about 700–750 bishops (about 800 fathers in all); final vote 533–2",
    "context": "Pius IX wanted to answer rationalism and liberalism and to define the pope's authority. It was the first council in 300 years.",
    "issue": {
      "name": "Papal infallibility (vs Gallicanism)",
      "view": "The pope's solemn rulings need the Church's consent; councils limit the pope."
    },
    "figures": [
      "Pius IX - pope who called and led it",
      "Henry Edward Manning - leading infallibilist archbishop",
      "Félix Dupanloup - leader of the opposing minority",
      "Ignaz von Döllinger - historian, excommunicated 1871"
    ],
    "term": {
      "word": "ex cathedra",
      "gloss": "‘from the chair’ of Peter: a pope's solemn, infallible definition"
    },
    "outcome": "Defined papal primacy and infallibility (Pastor aeternus, 18 July 1870), after about 60 opponents left Rome. Italian troops took Rome, and the council was suspended and never formally resumed.",
    "dissent": [
      {
        "who": "Old Catholics",
        "why": "Broke away rejecting papal infallibility and universal jurisdiction (Union of Utrecht 1889)."
      },
      {
        "who": "Eastern Orthodox and Protestants",
        "why": "Reject papal infallibility and supremacy."
      }
    ],
    "topics": [
      "papacy",
      "authority"
    ]
  },
  "21": {
    "convokedBy": "Pope John XXIII",
    "presided": "Board of cardinal presidents; Pope Paul VI after 1963 (four cardinal moderators)",
    "attendance": "about 2,100–2,500 bishops per session; about 2,860 over four sessions",
    "context": "John XXIII wanted to renew the Church and open it to the modern world ('aggiornamento'). It also sought better ties with other Christians.",
    "issue": {
      "name": "Church renewal (aggiornamento)",
      "view": "Traditionalists: changes to liturgy, religious liberty and ecumenism break with tradition."
    },
    "figures": [
      "John XXIII - pope who called it",
      "Paul VI - pope who completed it",
      "Augustin Bea - cardinal behind ecumenism decree",
      "Marcel Lefebvre - archbishop leading traditionalist opposition"
    ],
    "term": {
      "word": "aggiornamento",
      "gloss": "bringing up to date (Italian)"
    },
    "outcome": "Issued 16 documents leading to the vernacular Mass, ecumenism and religious liberty. In 1965 Rome and Constantinople lifted their 1054 excommunications; disputes over how to read the council continue.",
    "dissent": [
      {
        "who": "Traditionalist Catholics (SSPX; sedevacantists)",
        "why": "Contest religious liberty, ecumenism and the new Mass; sedevacantists reject it outright."
      }
    ],
    "topics": [
      "authority",
      "practice"
    ]
  }
};
