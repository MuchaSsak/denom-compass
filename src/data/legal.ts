/**
 * Privacy policy and terms of use. The Polish text is the original and prevails.
 * Block = paragraph string or list of strings. Inline links: [text](url).
 * Bump LEGAL_VERSION (and the date) on every material change; the AI consent
 * stored in the browser records the version it was given for.
 */
export const LEGAL_VERSION = '1.0';
export const LEGAL_DATE = { en: 'November 17, 2026', pl: '17 listopada 2026 r.' };
export const CONTACT = 'hi@muszarski.com';

type Block = string | string[];
export interface LegalDoc { title: string; intro: string; sections: { h: string; body: Block[] }[] }

export const privacy: Record<'en' | 'pl', LegalDoc> = {
  pl: {
    title: 'Polityka prywatności',
    intro: 'Ta polityka wyjaśnia, jakie dane przetwarza serwis Kompas wyznań, w jakim celu i na jakiej podstawie oraz jakie prawa Ci przysługują. Serwis działa bez kont, bez plików cookie i bez analityki: Twoje odpowiedzi zostają w Twojej przeglądarce, chyba że sam(a) zlecisz interpretację AI.',
    sections: [
      { h: '1. Postanowienia ogólne', body: [
        'Polityka dotyczy serwisu internetowego „Kompas wyznań” („Denomination Compass”, dalej: Serwis) we wszystkich wersjach językowych. Realizuje obowiązki informacyjne z art. 13 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz z art. 399 ust. 1 ustawy z dnia 12 lipca 2024 r. Prawo komunikacji elektronicznej (PKE).',
        'Serwis ma charakter informacyjno-edukacyjny i nie jest skierowany do dzieci. Z funkcji interpretacji AI mogą korzystać wyłącznie osoby, które ukończyły 16 lat.',
        'Połączenie z Serwisem jest szyfrowane (HTTPS). Administrator stosuje środki techniczne i organizacyjne odpowiednie do ryzyka (art. 32 RODO), w szczególności minimalizację danych: Serwis nie prowadzi bazy danych użytkowników.',
      ] },
      { h: '2. Administrator', body: [
        `Administratorem danych jest Mateusz Muszarski, osoba fizyczna (Polska), e-mail: [${CONTACT}](mailto:${CONTACT}). We wszystkich sprawach dotyczących danych osobowych można pisać na ten adres.`,
        'Administrator nie wyznaczył inspektora ochrony danych, ponieważ nie ma takiego obowiązku (art. 37 ust. 1 RODO).',
      ] },
      { h: '3. Jakie dane, w jakim celu i na jakiej podstawie', body: [
        [
          'Udostępnianie i zabezpieczenie Serwisu: adres IP, data i godzina, adres podstrony, odnośnik źródłowy, typ przeglądarki (logi serwera). Podstawa: prawnie uzasadniony interes administratora, czyli bezpieczne i stabilne działanie Serwisu (art. 6 ust. 1 lit. f RODO). Okres: zgodnie z retencją logów dostawcy hostingu, zwykle nie dłużej niż kilka dni.',
          'Działanie quizu: odpowiedzi, notatki, historia wyników, wybrany motyw i język. Te dane zapisywane są wyłącznie w pamięci Twojej przeglądarki (localStorage) i nie są wysyłane do administratora. Podstawa zapisu w urządzeniu: art. 399 ust. 3 pkt 2 PKE (przechowywanie niezbędne do świadczenia usługi, której zażądałeś/aś). Okres: do czasu ich usunięcia przez Ciebie (patrz pkt 8).',
          'Interpretacja AI (funkcja dobrowolna, uruchamiana przyciskiem): Twoje odpowiedzi w quizie, notatki, opis własnej wiary i język strony, a także adres IP (na potrzeby ograniczenia liczby zapytań). Treści te mogą ujawniać przekonania religijne, czyli szczególną kategorię danych (art. 9 ust. 1 RODO). Podstawa: Twoja wyraźna zgoda (art. 6 ust. 1 lit. a oraz art. 9 ust. 2 lit. a RODO). Administrator nie zapisuje tych treści na serwerze; są one przekazywane jednorazowo do dostawcy modelu AI (pkt 5), a wynik wraca do Twojej przeglądarki. Licznik zapytań przechowywany jest w pamięci operacyjnej funkcji serwerowej przez około minutę.',
          'Korespondencja e-mail: dane z wiadomości. Podstawa: prawnie uzasadniony interes w udzieleniu odpowiedzi (art. 6 ust. 1 lit. f RODO). Okres: do załatwienia sprawy, nie dłużej niż 12 miesięcy od ostatniej wiadomości.',
          'Ustalenie, dochodzenie lub obrona roszczeń: dane niezbędne w danej sprawie (art. 6 ust. 1 lit. f RODO), do upływu terminów przedawnienia.',
        ],
      ] },
      { h: '4. Hosting', body: [
        'Serwis jest hostowany przez Vercel Inc. (USA) w ramach globalnej sieci CDN; funkcja serwerowa interpretacji AI działa w regionie Unii Europejskiej (Frankfurt). Vercel przetwarza dane jako podmiot przetwarzający na zlecenie administratora (art. 28 RODO), a w zakresie danych o korzystaniu z własnej usługi także jako odrębny administrator.',
      ] },
      { h: '5. Interpretacja AI: odbiorcy i ryzyka', body: [
        'Po kliknięciu przycisku i wyrażeniu zgody treści opisane w pkt 3 są wysyłane do OpenRouter, Inc. (USA), który przekazuje je do wybranego dostawcy modelu językowego (np. NVIDIA albo innego dostawcy darmowego modelu dostępnego w OpenRouter). Dostawcy ci mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym.',
        'Serwis korzysta z darmowych modeli. Ich dostawcy mogą rejestrować zapytania i wykorzystywać je do ulepszania modeli, zgodnie z własnymi regulaminami. Dlatego prosimy: nie wpisuj imion, nazwisk, danych kontaktowych ani innych informacji, które pozwalają Cię zidentyfikować lub dotyczą innych osób.',
        'Wynik interpretacji generowany jest automatycznie, może zawierać błędy i nie wywołuje wobec Ciebie skutków prawnych ani podobnie istotnych (art. 22 RODO nie ma zastosowania).',
        'Zgodę możesz w każdej chwili wycofać przyciskiem w pkt 8 albo pisząc na adres administratora. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania przed jej wycofaniem (art. 7 ust. 3 RODO). Bez zgody możesz korzystać z quizu i wszystkich pozostałych funkcji.',
      ] },
      { h: '6. Przekazywanie danych poza EOG', body: [
        'Przekazanie danych do Vercel Inc. opiera się na decyzji Komisji Europejskiej stwierdzającej odpowiedni stopień ochrony w ramach EU-US Data Privacy Framework (decyzja wykonawcza (UE) 2023/1795, art. 45 RODO).',
        'Przekazanie treści interpretacji AI do OpenRouter i dostawców modeli może nastąpić do państw, wobec których nie wydano decyzji stwierdzającej odpowiedni stopień ochrony, i bez gwarancji z art. 46 RODO. Odbywa się ono na podstawie Twojej wyraźnej zgody po poinformowaniu o możliwym ryzyku (art. 49 ust. 1 lit. a RODO). Ryzyko to obejmuje m.in. dostęp organów publicznych tych państw do danych i ograniczone możliwości dochodzenia praw.',
      ] },
      { h: '7. Pliki cookie i pamięć przeglądarki', body: [
        'Serwis nie używa plików cookie, narzędzi analitycznych, pikseli śledzących ani zewnętrznych czcionek (czcionki są serwowane z naszego serwera). Korzysta wyłącznie z pamięci localStorage Twojej przeglądarki, której zawartość nie jest automatycznie wysyłana do serwera:',
        [
          'dc:progress:v1 - postęp w trwającym quizie',
          'dc:history:v1 - ostatnie wyniki (do 10)',
          'dc:notes:v1 - Twoje notatki i opis wiary',
          'dc:ai:v1 - ostatnia interpretacja AI',
          'dc:ai-consent:v1 - informacja o udzieleniu zgody na interpretację AI (data i wersja polityki)',
          'dc:theme, dc:lang - motyw i język',
        ],
        'Link „Udostępnij wynik” zawiera Twoje odpowiedzi w zakodowanej części adresu po znaku #. Ta część nie jest wysyłana do serwera, ale każdy, komu przekażesz link, zobaczy Twoje odpowiedzi.',
      ] },
      { h: '8. Usunięcie danych z urządzenia', body: [
        '[[controls]]',
        'Możesz też usunąć dane strony w ustawieniach przeglądarki.',
      ] },
      { h: '9. Twoje prawa', body: [
        'Przysługuje Ci prawo dostępu do danych (art. 15 RODO), ich sprostowania (art. 16), usunięcia (art. 17), ograniczenia przetwarzania (art. 18), przenoszenia (art. 20), sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie (art. 21) oraz cofnięcia zgody w dowolnym momencie (art. 7 ust. 3).',
        'Odpowiadamy bez zbędnej zwłoki, nie później niż w ciągu miesiąca (z możliwością przedłużenia o dwa miesiące, art. 12 ust. 3 RODO). Ponieważ administrator nie przechowuje treści quizu ani interpretacji AI, w wielu przypadkach nie jest w stanie Cię zidentyfikować (art. 11 ust. 2 RODO); dane w Twojej przeglądarce kontrolujesz bezpośrednio (pkt 8).',
      ] },
      { h: '10. Skarga do organu nadzorczego', body: [
        'Masz prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stanisława Moniuszki 1A, 00-014 Warszawa ([uodo.gov.pl](https://uodo.gov.pl)), albo do organu nadzorczego w państwie Twojego zwykłego pobytu, miejsca pracy lub miejsca domniemanego naruszenia (art. 77 RODO).',
      ] },
      { h: '11. Dobrowolność', body: [
        'Korzystanie z Serwisu i podanie jakichkolwiek treści jest dobrowolne. Bez zgody nie skorzystasz jedynie z interpretacji AI.',
      ] },
      { h: '12. Zmiany polityki i wersje językowe', body: [
        'Każda zmiana otrzymuje nowy numer wersji i datę widoczne na górze strony. Jeśli zmiana dotyczy interpretacji AI, Serwis poprosi o zgodę ponownie. Wersja polska jest wersją oryginalną i ma pierwszeństwo przed tłumaczeniem.',
      ] },
    ],
  },
  en: {
    title: 'Privacy Policy',
    intro: 'This policy explains what data Denomination Compass processes, why, on what legal basis, and what your rights are. The site has no accounts, no cookies and no analytics: your answers stay in your browser unless you ask for an AI reading.',
    sections: [
      { h: '1. General provisions', body: [
        'This policy covers the website "Denomination Compass" ("Kompas wyznań", the Website) in all language versions. It fulfils the information duties under Art. 13 of Regulation (EU) 2016/679 (GDPR) and Art. 399(1) of the Polish Electronic Communications Law of 12 July 2024 (PKE).',
        'The Website is informational and educational and is not directed at children. The AI reading may only be used by people aged 16 or over.',
        'Connections are encrypted (HTTPS). The controller applies technical and organisational measures appropriate to the risk (Art. 32 GDPR), in particular data minimisation: the Website keeps no user database.',
      ] },
      { h: '2. Controller', body: [
        `The controller is Mateusz Muszarski, a natural person (Poland), e-mail: [${CONTACT}](mailto:${CONTACT}). Write to this address about anything concerning your personal data.`,
        'No data protection officer has been appointed, as none is required (Art. 37(1) GDPR).',
      ] },
      { h: '3. What data, for what purpose, on what basis', body: [
        [
          'Delivering and securing the Website: IP address, date and time, requested page, referrer, browser type (server logs). Basis: the controller’s legitimate interest in a secure and stable service (Art. 6(1)(f) GDPR). Retention: per the hosting provider’s log retention, usually no more than a few days.',
          'Running the quiz: answers, notes, result history, chosen theme and language. These are stored only in your browser’s storage (localStorage) and are not sent to the controller. Basis for storing on your device: Art. 399(3)(2) PKE (storage strictly necessary for a service you requested). Retention: until you delete them (see section 8).',
          'AI reading (optional, started by a button): your quiz answers, notes, description of your faith and the page language, plus your IP address (to limit request rates). This content may reveal religious beliefs, a special category of data (Art. 9(1) GDPR). Basis: your explicit consent (Art. 6(1)(a) and Art. 9(2)(a) GDPR). The controller does not store this content on the server; it is passed once to the AI model provider (section 5) and the result returns to your browser. The request counter is kept in the server function’s memory for about a minute.',
          'E-mail correspondence: data in your message. Basis: legitimate interest in replying (Art. 6(1)(f) GDPR). Retention: until the matter is handled, no longer than 12 months after the last message.',
          'Establishing, exercising or defending legal claims: data needed in the specific case (Art. 6(1)(f) GDPR), until limitation periods expire.',
        ],
      ] },
      { h: '4. Hosting', body: [
        'The Website is hosted by Vercel Inc. (USA) on its global CDN; the AI reading server function runs in the European Union (Frankfurt). Vercel processes data as a processor on the controller’s behalf (Art. 28 GDPR) and, for data about the use of its own service, as an independent controller.',
      ] },
      { h: '5. AI reading: recipients and risks', body: [
        'When you click the button and give consent, the content described in section 3 is sent to OpenRouter, Inc. (USA), which passes it to a language-model provider (e.g. NVIDIA or another provider of a free model available on OpenRouter). These providers may process data outside the European Economic Area.',
        'The Website uses free models. Their providers may log prompts and use them to improve their models under their own terms. Please do not enter names, contact details or other information that identifies you or concerns other people.',
        'The reading is generated automatically, may contain errors, and has no legal or similarly significant effect on you (Art. 22 GDPR does not apply).',
        'You can withdraw consent at any time with the button in section 8 or by e-mail. Withdrawal does not affect the lawfulness of processing before it (Art. 7(3) GDPR). Without consent you can still use the quiz and every other feature.',
      ] },
      { h: '6. Transfers outside the EEA', body: [
        'Transfers to Vercel Inc. rely on the European Commission’s adequacy decision for the EU-US Data Privacy Framework (Implementing Decision (EU) 2023/1795, Art. 45 GDPR).',
        'AI reading content sent to OpenRouter and model providers may go to countries without an adequacy decision and without Art. 46 GDPR safeguards. This transfer is based on your explicit consent after being informed of the possible risks (Art. 49(1)(a) GDPR), including access by public authorities in those countries and limited means of redress.',
      ] },
      { h: '7. Cookies and browser storage', body: [
        'The Website uses no cookies, analytics, tracking pixels or third-party fonts (fonts are served from our own server). It only uses your browser’s localStorage, whose content is not sent to the server automatically:',
        [
          'dc:progress:v1 - progress in a quiz you are taking',
          'dc:history:v1 - recent results (up to 10)',
          'dc:notes:v1 - your notes and description of your faith',
          'dc:ai:v1 - the last AI reading',
          'dc:ai-consent:v1 - record that you consented to the AI reading (date and policy version)',
          'dc:theme, dc:lang - theme and language',
        ],
        'The "Share result" link contains your answers in the encoded part of the address after #. That part is never sent to the server, but anyone you give the link to can see your answers.',
      ] },
      { h: '8. Deleting data from your device', body: [
        '[[controls]]',
        'You can also clear this site’s data in your browser settings.',
      ] },
      { h: '9. Your rights', body: [
        'You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), portability (Art. 20), to object to processing based on legitimate interest (Art. 21), and to withdraw consent at any time (Art. 7(3)).',
        'We reply without undue delay and within one month (extendable by two months, Art. 12(3) GDPR). Because the controller stores no quiz or AI content, in many cases it cannot identify you (Art. 11(2) GDPR); you control the data in your browser directly (section 8).',
      ] },
      { h: '10. Complaint to a supervisory authority', body: [
        'You may lodge a complaint with the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych), ul. Stanisława Moniuszki 1A, 00-014 Warsaw, Poland ([uodo.gov.pl](https://uodo.gov.pl)), or with the authority of your habitual residence, place of work or place of the alleged infringement (Art. 77 GDPR).',
      ] },
      { h: '11. Voluntary use', body: [
        'Using the Website and entering any content is voluntary. Without consent, only the AI reading is unavailable.',
      ] },
      { h: '12. Changes and language versions', body: [
        'Every change gets a new version number and date shown at the top of this page. If a change concerns the AI reading, the Website will ask for consent again. The Polish version is the original and prevails over this translation.',
      ] },
    ],
  },
};

export const terms: Record<'en' | 'pl', LegalDoc> = {
  pl: {
    title: 'Regulamin',
    intro: 'Zasady korzystania z serwisu Kompas wyznań. Korzystając z Serwisu, akceptujesz ten regulamin.',
    sections: [
      { h: '1. Usługodawca', body: [
        `Serwis „Kompas wyznań” („Denomination Compass”) prowadzi Mateusz Muszarski, osoba fizyczna (Polska), e-mail: [${CONTACT}](mailto:${CONTACT}). Regulamin jest regulaminem świadczenia usług drogą elektroniczną w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.`,
      ] },
      { h: '2. Usługi i wymagania techniczne', body: [
        'Serwis udostępnia bezpłatnie: quiz porównujący poglądy z nauczaniem tradycji chrześcijańskich, opisy tradycji, doktryn, soborów i wyznań wiary oraz opcjonalną interpretację AI. Do korzystania potrzebna jest aktualna przeglądarka z włączonym JavaScriptem i pamięcią localStorage. Nie trzeba zakładać konta.',
        'Zabronione jest dostarczanie treści o charakterze bezprawnym, automatyczne masowe wysyłanie zapytań, obchodzenie limitów oraz działania zakłócające pracę Serwisu.',
      ] },
      { h: '3. Charakter treści', body: [
        'Treści mają charakter informacyjny i edukacyjny. Opisy tradycji są uproszczonymi streszczeniami ich oficjalnego nauczania, opracowanymi na podstawie publicznie dostępnych źródeł, z zamiarem rzetelności i szacunku wobec każdej z nich. Wynik quizu jest przybliżeniem, a nie oceną wiary ani przynależności.',
        'Serwis nie stanowi porady duszpasterskiej, teologicznej, prawnej ani psychologicznej i nie jest powiązany z żadnym Kościołem ani związkiem wyznaniowym. W sprawach wiary warto rozmawiać z duchownymi lub nauczycielami danej tradycji.',
      ] },
      { h: '4. Interpretacja AI', body: [
        'Interpretacja AI jest generowana automatycznie przez zewnętrzne modele językowe, bez weryfikacji przez człowieka. Może być niepełna, nieścisła lub błędna i nie wyraża stanowiska usługodawcy. Korzystanie z niej wymaga ukończenia 16 lat i wyraźnej zgody opisanej w [Polityce prywatności](/pl/privacy). Funkcja zależy od dostępności zewnętrznych usług i dziennych limitów, więc może być czasowo niedostępna.',
      ] },
      { h: '5. Odpowiedzialność', body: [
        'Usługodawca dokłada starań, aby treści były poprawne i aktualne, ale nie gwarantuje ich kompletności ani nieprzerwanej dostępności Serwisu. W najszerszym zakresie dozwolonym przez prawo usługodawca nie odpowiada za decyzje podjęte na podstawie treści Serwisu ani wyników AI. Nie wyłącza to odpowiedzialności za szkodę wyrządzoną umyślnie (art. 473 § 2 Kodeksu cywilnego) ani uprawnień przysługujących konsumentom na mocy bezwzględnie obowiązujących przepisów.',
      ] },
      { h: '6. Prawa autorskie', body: [
        'Teksty, układ i grafiki Serwisu (w tym ikony tradycji) są chronione prawem autorskim i należą do usługodawcy, o ile nie wskazano inaczej. Tradycyjne teksty wyznań wiary należą do domeny publicznej. Krótkie cytaty z podaniem źródła są dozwolone w granicach prawa cytatu.',
      ] },
      { h: '7. Reklamacje', body: [
        `Reklamacje i zgłoszenia błędów (także merytorycznych) można kierować na adres [${CONTACT}](mailto:${CONTACT}). Odpowiadamy w ciągu 14 dni.`,
      ] },
      { h: '8. Prawo właściwe i zmiany', body: [
        'Regulamin podlega prawu polskiemu. Konsument zachowuje ochronę przyznaną mu przez bezwzględnie obowiązujące przepisy państwa swojego zwykłego pobytu. Spory rozstrzygają sądy właściwe według przepisów ogólnych; konsument może też skorzystać z pozasądowych sposobów rozwiązywania sporów.',
        'Usługodawca może zmienić regulamin z ważnych przyczyn (np. zmiana przepisów lub funkcji Serwisu); nowa wersja obowiązuje od daty podanej na górze strony. Wersja polska ma pierwszeństwo przed tłumaczeniem.',
      ] },
    ],
  },
  en: {
    title: 'Terms of Use',
    intro: 'The rules for using Denomination Compass. By using the Website you accept these terms.',
    sections: [
      { h: '1. Provider', body: [
        `"Denomination Compass" ("Kompas wyznań") is run by Mateusz Muszarski, a natural person (Poland), e-mail: [${CONTACT}](mailto:${CONTACT}). These terms are the terms of electronic services under the Polish Act of 18 July 2002 on providing services by electronic means.`,
      ] },
      { h: '2. Services and technical requirements', body: [
        'The Website offers, free of charge: a quiz comparing your views with the teaching of Christian traditions, descriptions of traditions, doctrines, councils and creeds, and an optional AI reading. You need an up-to-date browser with JavaScript and localStorage enabled. No account is needed.',
        'You may not submit unlawful content, send automated bulk requests, circumvent limits or disrupt the Website.',
      ] },
      { h: '3. Nature of the content', body: [
        'The content is informational and educational. Descriptions of traditions are simplified summaries of their official teaching, based on publicly available sources and written to be fair and respectful to each. The quiz result is an approximation, not a judgement of anyone’s faith or membership.',
        'The Website is not pastoral, theological, legal or psychological advice and is not affiliated with any church or religious body. For questions of faith, talk to clergy or teachers of the tradition concerned.',
      ] },
      { h: '4. AI reading', body: [
        'The AI reading is generated automatically by third-party language models, without human review. It may be incomplete, inaccurate or wrong and does not represent the provider’s views. Using it requires being 16 or older and the explicit consent described in the [Privacy Policy](/en/privacy). It depends on external services and daily quotas and may be temporarily unavailable.',
      ] },
      { h: '5. Liability', body: [
        'The provider strives to keep the content accurate and current but does not guarantee its completeness or uninterrupted availability. To the fullest extent permitted by law, the provider is not liable for decisions made on the basis of the Website’s content or AI output. This does not exclude liability for intentional damage (Art. 473 §2 of the Polish Civil Code) or any mandatory consumer rights.',
      ] },
      { h: '6. Copyright', body: [
        'The texts, layout and graphics of the Website (including the tradition icons) are protected by copyright and belong to the provider unless stated otherwise. Traditional creed texts are in the public domain. Short quotations with attribution are permitted within the limits of quotation rights.',
      ] },
      { h: '7. Complaints', body: [
        `Complaints and error reports (including factual corrections) can be sent to [${CONTACT}](mailto:${CONTACT}). We reply within 14 days.`,
      ] },
      { h: '8. Governing law and changes', body: [
        'These terms are governed by Polish law. Consumers keep the protection of the mandatory laws of their country of habitual residence. Disputes are resolved by the courts competent under general rules; consumers may also use out-of-court dispute resolution.',
        'The provider may change these terms for valid reasons (e.g. changes in law or in the Website’s features); the new version applies from the date shown at the top. The Polish version prevails over this translation.',
      ] },
    ],
  },
};
