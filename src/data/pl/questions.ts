import type { QuestionsOverlay } from '../localized';

const data: QuestionsOverlay = {
  "trinity": {
    "text": "Kim jest Bóg?",
    "hint": "Nauka o Trójcy Świętej, określona w Nicei (325) i Konstantynopolu (381).",
    "explain": "Nauka o Trójcy Świętej głosi, że jeden Bóg istnieje odwiecznie w trzech odrębnych Osobach, które mają jedną boską naturę – to nie trzech bogów ani jedna Osoba w trzech maskach. Wyznaje ją niemal każdy Kościół; nieliczne ruchy inaczej odczytują Biblię.",
    "options": {
      "yes": {
        "label": "Jeden Bóg w trzech równych sobie Osobach: Ojciec, Syn i Duch Święty",
        "short": "Trójca Święta",
        "detail": "Klasyczna nauka nicejska: trzy Osoby, jedna boska istota."
      },
      "separate": {
        "label": "Ojciec jest najwyższy; Syn i Duch są od Niego odrębni lub Mu podporządkowani",
        "short": "Odrębne istoty",
        "detail": "Np. Jezus jako pierwsze stworzenie Boga albo Ojciec i Syn jako odrębne istoty."
      },
      "modal": {
        "label": "Jedna boska Osoba objawiająca się jako Ojciec, Syn i Duch",
        "short": "Jedna Osoba",
        "detail": "Ojciec, Syn i Duch jako role lub przejawy jednej Osoby (modalizm)."
      }
    }
  },
  "authority": {
    "text": "Co ma ostatnie słowo w sprawach doktryny?",
    "explain": "Gdy chrześcijanie się spierają, co rozstrzyga spór? Jedni mówią, że ostatecznym sędzią jest sama Biblia; inni – że Biblię trzeba czytać w żywej Tradycji Kościoła; nieliczni wierzą, że Bóg wciąż dodaje objawienie przez proroków.",
    "options": {
      "scripture": {
        "label": "Samo Pismo Święte",
        "short": "Sola Scriptura",
        "detail": "Wyznania wiary i nauczyciele pomagają, ale tylko Biblia jest nieomylna."
      },
      "tradition": {
        "label": "Pismo i Święta Tradycja, tak jak naucza Kościół",
        "short": "Pismo + Tradycja",
        "detail": "Biblię czyta się w apostolskiej Tradycji Kościoła, w świetle nauczania biskupów."
      },
      "prophet": {
        "label": "Pismo oraz ciągłe objawienie przez żyjących proroków lub przywódców",
        "short": "Ciągłe objawienie",
        "detail": "Także dziś mogą zostać dane nowe pisma lub wiążące wskazania."
      },
      "spirit": {
        "label": "Wewnętrzne Światło Ducha w każdym człowieku",
        "short": "Wewnętrzne Światło",
        "detail": "Chrystus przemawia bezpośrednio do każdego serca; teksty pisane są wtórne."
      }
    }
  },
  "pope": {
    "text": "Czy papież ma najwyższą władzę nad całym Kościołem?",
    "hint": "Powszechna jurysdykcja biskupa Rzymu (Sobór watykański I, 1870).",
    "explain": "Katolicy wierzą, że Chrystus ustanowił Piotra głową apostołów, a biskup Rzymu dziedziczy tę funkcję wraz z pełną władzą nad każdym chrześcijaninem. Inni mogą szanować papieża jako historycznego zwierzchnika lub wcale, ale nie uznają jego jurysdykcji.",
    "options": {
      "yes": {
        "label": "Tak, z ustanowienia Chrystusa",
        "short": "Tak",
        "detail": "Pełna, najwyższa i powszechna władza (a w określonych przypadkach nieomylność)."
      },
      "no": {
        "label": "Nie",
        "short": "Nie",
        "detail": "Najwyżej prymat honorowy albo żadna szczególna rola."
      }
    }
  },
  "councils": {
    "text": "Które sobory mają wiążący autorytet?",
    "hint": "Co postanowił każdy z nich, sprawdzisz na stronie o soborach.",
    "explain": "Sobory powszechne gromadziły biskupów, by rozstrzygać spory, zwłaszcza o to, kim jest Chrystus. Różne Kościoły uznają różną ich liczbę, dlatego to jeden z najwyraźniejszych wyróżników tradycji.",
    "options": {
      "all21": {
        "label": "Wszystkie 21, w tym trydencki i watykański II",
        "short": "Wszystkie 21",
        "detail": "Rachuba katolicka, aż po Sobór watykański II (1962–1965)."
      },
      "seven": {
        "label": "Pierwsze siedem (325–787)",
        "short": "Siedem",
        "detail": "Do Soboru nicejskiego II, który zatwierdził cześć ikon."
      },
      "three": {
        "label": "Tylko pierwsze trzy (325–431)",
        "short": "Trzy",
        "detail": "Bez chalcedońskiej definicji „dwóch natur” (451)."
      },
      "two": {
        "label": "Tylko pierwsze dwa (325 i 381)",
        "short": "Dwa",
        "detail": "Nicea i Konstantynopol – Symbol nicejsko-konstantynopolitański."
      },
      "subordinate": {
        "label": "Dawne sobory są wiarygodne, ale wiąże tylko Pismo",
        "short": "Podległe Pismu",
        "detail": "Szanowane jako wierne streszczenia wiary, ale nie nieomylne."
      },
      "none": {
        "label": "Żaden nie ma rzeczywistego autorytetu",
        "short": "Żaden"
      }
    }
  },
  "eucharist": {
    "text": "Co dzieje się podczas Komunii?",
    "explain": "Podczas Ostatniej Wieczerzy Jezus powiedział: „To jest Ciało moje”. Kościoły różnie rozumieją te słowa: rzeczywista przemiana, rzeczywista obecność bez przemiany, duchowe karmienie się albo pamiątkowa uczta.",
    "options": {
      "transub": {
        "label": "Chleb i wino stają się Ciałem i Krwią Chrystusa (przeistoczenie – transsubstancjacja)",
        "short": "Transsubstancjacja",
        "detail": "Zmienia się substancja; pozostają jedynie postacie chleba i wina."
      },
      "mystery": {
        "label": "Prawdziwie stają się Jego Ciałem i Krwią – to tajemnica, której nie definiujemy",
        "short": "Przemiana (tajemnica)",
        "detail": "Rzeczywista przemiana, ale bez filozoficznego wyjaśnienia, jak zachodzi."
      },
      "union": {
        "label": "Ciało i Krew Chrystusa są obecne w chlebie i winie, z nimi i pod nimi",
        "short": "Unia sakramentalna",
        "detail": "Chleb pozostaje chlebem, a zarazem prawdziwie obecne jest Ciało Chrystusa."
      },
      "spiritual": {
        "label": "Chrystus jest prawdziwie, lecz duchowo obecny dla wierzących",
        "short": "Obecność duchowa",
        "detail": "Wierzący karmią się Chrystusem przez wiarę, mocą Ducha Świętego."
      },
      "memorial": {
        "label": "To symboliczna pamiątka Jego ofiary",
        "short": "Pamiątka",
        "detail": "Akt wspominania i posłuszeństwa."
      },
      "none": {
        "label": "Zewnętrzny obrzęd nie jest potrzebny – komunia jest wewnętrzna",
        "short": "Tylko wewnętrzna"
      }
    }
  },
  "infant": {
    "text": "Czy to właściwe, by chrzcić niemowlęta?",
    "explain": "Większość historycznych Kościołów chrzci niemowlęta, widząc w chrzcie dar Boga, który nie zależy od tego, co dziecko rozumie. Baptyści i inni chrzczą tylko tych, którzy są dość dojrzali, by samodzielnie wyznać wiarę.",
    "options": {
      "yes": {
        "label": "Tak, niemowlęta mogą przyjąć chrzest",
        "short": "Tak",
        "detail": "Dzieci wierzących przyjmują chrzest i są wychowywane w wierze."
      },
      "no": {
        "label": "Nie, tylko wierzący",
        "short": "Nie",
        "detail": "Chrzest następuje po osobistym wyznaniu wiary."
      }
    }
  },
  "regeneration": {
    "text": "Czy chrzest sam w sobie obmywa z grzechu i daje nowe narodzenie?",
    "hint": "Odrodzenie przez chrzest.",
    "explain": "Czy chrzest jest środkiem, przez który Bóg rzeczywiście przebacza i odradza – czy zewnętrznym znakiem czegoś, co już dokonało się wewnętrznie przez wiarę?",
    "options": {
      "yes": {
        "label": "Tak, Bóg działa przez chrzest",
        "short": "Tak",
        "detail": "Chrzest to rzeczywisty środek łaski, który zbawia (1 P 3,21)."
      },
      "no": {
        "label": "Nie, to znak",
        "short": "Nie",
        "detail": "Chrzest oznacza lub pieczętuje zbawienie przyjęte przez wiarę."
      }
    }
  },
  "faithalone": {
    "text": "Czy jesteśmy usprawiedliwieni z samej wiary, bez uczynków?",
    "hint": "Sola fide – centralne pytanie reformacji.",
    "explain": "„Usprawiedliwiony” znaczy uznany za sprawiedliwego przed Bogiem lub uczyniony sprawiedliwym. Reformatorzy nauczali, że dzieje się to przez samą wiarę, a dobre uczynki są jej owocem. Katolicy i prawosławni nauczają o wierze działającej przez miłość i o łasce, która przemienia wierzącego.",
    "options": {
      "yes": {
        "label": "Tak, z samej wiary",
        "short": "Tak",
        "detail": "Dobre uczynki wynikają ze zbawienia, ale się do niego nie przyczyniają."
      },
      "no": {
        "label": "Nie, wiara i uczynki razem",
        "short": "Nie",
        "detail": "Wiara, miłość i posłuszeństwo razem, uzdolnione przez łaskę."
      }
    }
  },
  "election": {
    "text": "Czy Bóg wybiera zbawionych przed jakimkolwiek ich czynem i niezależnie od niego?",
    "hint": "Bezwarunkowe wybranie.",
    "explain": "Kalwiniści nauczają, że Bóg wybrał zbawionych wyłącznie ze swojej łaski, a nie dlatego, że przewidział ich wiarę. Arminianie i większość innych nauczają, że Boży wybór odpowiada na wolną odpowiedź człowieka lub zostawia na nią miejsce.",
    "options": {
      "yes": {
        "label": "Tak, wybranie jest bezwarunkowe",
        "short": "Tak"
      },
      "no": {
        "label": "Nie, nasza odpowiedź ma znaczenie",
        "short": "Nie"
      }
    }
  },
  "losable": {
    "text": "Czy człowiek prawdziwie zbawiony może utracić zbawienie?",
    "explain": "Jedni nauczają: „raz zbawiony, zawsze zbawiony” albo że prawdziwie wierzący na pewno wytrwają. Inni – że wierzący może się odwrócić i odpaść od łaski.",
    "options": {
      "yes": {
        "label": "Tak, można odpaść",
        "short": "Tak"
      },
      "no": {
        "label": "Nie, zbawienie jest pewne",
        "short": "Nie"
      }
    }
  },
  "origsin": {
    "text": "Czy dziedziczymy winę Adama, a nie tylko upadłą naturę?",
    "explain": "Wszyscy zgadzają się, że upadek Adama dotknął ludzkość. Pytanie brzmi, czy rodzimy się obciążeni winą jego grzechu (Augustyn i Zachód), czy dziedziczymy śmiertelność i skłonność do grzechu bez osobistej winy (Wschód i inni).",
    "options": {
      "yes": {
        "label": "Tak, także winę",
        "short": "Tak"
      },
      "no": {
        "label": "Nie, tylko upadłą naturę",
        "short": "Nie"
      }
    }
  },
  "perfection": {
    "text": "Czy chrześcijanin może w tym życiu osiągnąć doskonałą miłość – wolność od świadomego grzechu?",
    "hint": "Całkowite uświęcenie / chrześcijańska doskonałość.",
    "explain": "John Wesley nauczał, że Bóg może tak napełnić wierzącego miłością, że ten przestaje świadomie grzeszyć – nie chodzi o bezgrzeszną doskonałość, lecz o serce w pełni oddane Bogu. Większość tradycji widzi świętość jako wzrost przez całe życie, nieukończony przed śmiercią.",
    "options": {
      "yes": {
        "label": "Tak, to możliwe",
        "short": "Tak"
      },
      "no": {
        "label": "Nie, nie przed śmiercią",
        "short": "Nie"
      }
    }
  },
  "succession": {
    "text": "Czy ważne święcenia kapłanów i biskupów wymagają nieprzerwanej ciągłości od apostołów?",
    "hint": "Sukcesja apostolska.",
    "explain": "Kościół katolicki, prawosławie i anglikanie uważają, że biskupów wyświęcają biskupi w łańcuchu sięgającym apostołów i że jest to potrzebne do ważności sakramentów. Większość protestantów widzi ciągłość apostolską raczej w wiernym nauczaniu.",
    "options": {
      "yes": {
        "label": "Tak, to konieczne",
        "short": "Tak"
      },
      "no": {
        "label": "Nie, nie jest wymagana",
        "short": "Nie"
      }
    }
  },
  "women": {
    "text": "Czy kobiety mogą być ordynowane na pastorki lub kapłanki?",
    "explain": "Chodzi o urząd duchowny – pastora prowadzącego zbór, kapłana lub biskupa – a nie o to, czy kobiety mogą nauczać, prowadzić posługi czy służyć w inny sposób, co uznają niemal wszystkie Kościoły.",
    "options": {
      "yes": {
        "label": "Tak",
        "short": "Tak"
      },
      "no": {
        "label": "Nie",
        "short": "Nie"
      }
    }
  },
  "governance": {
    "text": "Kto ma kierować Kościołem?",
    "explain": "Ustroje kościelne są różne: biskupi nadzorujący regiony, starsi w powiązanych ze sobą gremiach, zbór decydujący sam o sobie albo centralny prorok czy ciało kierownicze.",
    "options": {
      "bishops": {
        "label": "Biskupi",
        "short": "Episkopalny",
        "detail": "Biskupi nadzorują diecezje; kapłani służą pod ich zwierzchnictwem."
      },
      "elders": {
        "label": "Starsi (prezbiterzy) w powiązanych gremiach",
        "short": "Prezbiteriański",
        "detail": "Starsi zborów, regionalne prezbiteria, zgromadzenia generalne."
      },
      "congregation": {
        "label": "Każdy lokalny zbór",
        "short": "Kongregacjonalny",
        "detail": "Członkowie sami kierują swoim zborem, bez zewnętrznej władzy."
      },
      "prophet": {
        "label": "Żyjący prorok lub centralne ciało kierownicze",
        "short": "Proroczy / centralny"
      }
    }
  },
  "theotokos": {
    "text": "Czy to właściwe, by nazywać Maryję „Matką Bożą”?",
    "hint": "Bogurodzica (Theotokos) – tytuł potwierdzony w Efezie (431).",
    "explain": "Ten tytuł chroni prawdę o Jezusie: dziecko urodzone przez Maryję jest prawdziwie Bogiem, a nie człowiekiem później złączonym z Bogiem. Niektórzy przyjmują tę logikę, ale unikają tego określenia, bo może sugerować, że Maryja jest źródłem Boga.",
    "options": {
      "yes": {
        "label": "Tak – urodziła Boga Syna w ciele",
        "short": "Tak"
      },
      "technical": {
        "label": "Formalnie to prawda, ale wolę unikać tego tytułu",
        "short": "Prawda, ale unikam",
        "detail": "Jezus jest Bogiem od poczęcia, ale lepiej mówić „Matka Jezusa” lub „Matka Chrystusa”."
      },
      "no": {
        "label": "Nie",
        "short": "Nie"
      }
    }
  },
  "evervirgin": {
    "text": "Czy Maryja pozostała dziewicą przez całe życie?",
    "explain": "Wszystkie Kościoły uznają, że Jezus narodził się z Dziewicy. To pytanie idzie dalej: czy Maryja miała potem inne dzieci. „Braci Jezusa” jedni rozumieją jako kuzynów lub dzieci Józefa, inni jako późniejsze dzieci Maryi.",
    "options": {
      "yes": {
        "label": "Tak, zawsze Dziewica",
        "short": "Tak"
      },
      "no": {
        "label": "Nie, miała inne dzieci",
        "short": "Nie"
      }
    }
  },
  "saints": {
    "text": "Czy to właściwe, by prosić świętych w niebie o modlitwę za siebie?",
    "explain": "Tak jak możesz poprosić przyjaciela o modlitwę, wielu chrześcijan prosi o wstawiennictwo zmarłych świętych, którzy żyją w Chrystusie. Inni uważają, że modlitwę kieruje się wyłącznie do Boga.",
    "options": {
      "yes": {
        "label": "Tak",
        "short": "Tak"
      },
      "no": {
        "label": "Nie, modlitwa tylko do Boga",
        "short": "Nie"
      }
    }
  },
  "icons": {
    "text": "Czy to właściwe, by oddawać cześć ikonom i świętym obrazom?",
    "hint": "Cześć ikon obronił Sobór nicejski II (787).",
    "explain": "Cześć (pokłon, ucałowanie ikony) odróżnia się od uwielbienia, które należy się tylko Bogu; oddawana cześć przechodzi na osobę przedstawioną. Krytycy uważają to za sprzeczne z przykazaniem zakazującym wizerunków.",
    "options": {
      "yes": {
        "label": "Tak",
        "short": "Tak"
      },
      "no": {
        "label": "Nie",
        "short": "Nie"
      }
    }
  },
  "afterlife": {
    "text": "Co dzieje się z wierzącymi po śmierci?",
    "explain": "Gdzie są wierni między śmiercią a ostatecznym zmartwychwstaniem? Poglądy obejmują oczyszczenie (czyściec), świadome oczekiwanie, natychmiastowe przebywanie z Chrystusem i nieświadomy „sen”.",
    "options": {
      "purgatory": {
        "label": "Wielu najpierw przechodzi oczyszczenie (czyściec), potem wchodzi do nieba",
        "short": "Czyściec"
      },
      "intermediate": {
        "label": "Oczekują zmartwychwstania, a my modlimy się za nich – bez definiowania czyśćca",
        "short": "Stan pośredni"
      },
      "heaven": {
        "label": "Od razu są z Chrystusem",
        "short": "Z Chrystusem"
      },
      "sleep": {
        "label": "Pozostają nieświadomi aż do zmartwychwstania",
        "short": "Sen duszy"
      }
    }
  },
  "gifts": {
    "text": "Czy mówienie językami, proroctwo i uzdrawianie należą dziś do życia chrześcijanina?",
    "hint": "Kontynuacjonizm a cesacjonizm.",
    "explain": "Zielonoświątkowcy oczekują, że każdy dar Ducha działa i jest czymś zwyczajnym. Wiele Kościołów wierzy, że cuda wciąż się zdarzają, ale nie są normą. Cesacjoniści uważają, że nadzwyczajne dary-znaki ustały wraz z apostołami.",
    "options": {
      "yes": {
        "label": "Tak – każdy dar działa dziś i jest czymś zwyczajnym",
        "short": "Normalne dziś"
      },
      "rare": {
        "label": "Mogą się zdarzać, ale nie są normą",
        "short": "Możliwe, nie norma"
      },
      "no": {
        "label": "Nie – ustały wraz z apostołami",
        "short": "Ustały"
      }
    }
  },
  "sabbath": {
    "text": "Który dzień chrześcijanie mają obowiązek święcić?",
    "explain": "Przykazanie o szabacie wskazuje dzień siódmy. Adwentyści Dnia Siódmego uważają, że nadal ono obowiązuje. Większość Kościołów gromadzi się w niedzielę, dzień zmartwychwstania; niektórzy nie uznają jednego wymaganego dnia.",
    "options": {
      "yes": {
        "label": "Sobota – szabat siódmego dnia nadal obowiązuje",
        "short": "Sobota"
      },
      "sunday": {
        "label": "Niedziela – jego miejsce zajął dzień Pański",
        "short": "Niedziela"
      },
      "free": {
        "label": "Żaden konkretny dzień nie jest wymagany",
        "short": "Bez stałego dnia"
      }
    }
  },
  "pacifism": {
    "text": "Czy chrześcijanin może walczyć na wojnie?",
    "explain": "Większość Kościołów przyjmuje naukę o wojnie sprawiedliwej: użycie siły bywa usprawiedliwione w obronie niewinnych. Kościoły pokoju uważają, że Jezus zakazuje wszelkiej przemocy. Inni zostawiają to sumieniu każdego.",
    "options": {
      "just": {
        "label": "Tak, w wojnie sprawiedliwej lub w samoobronie",
        "short": "Wojna sprawiedliwa"
      },
      "conscience": {
        "label": "To sprawa osobistego sumienia",
        "short": "Sumienie"
      },
      "never": {
        "label": "Nie – chrześcijanie muszą odrzucać wszelką przemoc",
        "short": "Nigdy"
      }
    }
  },
  "instruments": {
    "text": "Czy w nabożeństwie można używać instrumentów muzycznych?",
    "explain": "Kościoły Chrystusowe śpiewają a cappella, bo Nowy Testament wspomina tylko o śpiewie. Śpiew prawosławny również tradycyjnie jest bez akompaniamentu – ze zwyczaju, a nie z przepisu. Większość Kościołów chętnie korzysta z instrumentów.",
    "options": {
      "yes": {
        "label": "Tak, można",
        "short": "Tak"
      },
      "no": {
        "label": "Nie, tylko śpiew",
        "short": "Nie"
      }
    }
  }
};

export default data;
