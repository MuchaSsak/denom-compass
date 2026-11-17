/**
 * Technical name for a quiz answer, appended to its tooltip as "(soul sleep)".
 * Only where an established term exists. Keyed question id → option id.
 */
export const optionTerms: Record<string, Record<string, { en: string; pl: string }>> = {
  trinity: {
    yes: { en: 'Trinitarianism', pl: 'trynitaryzm' },
    separate: { en: 'subordinationism', pl: 'subordynacjonizm' },
    modal: { en: 'Oneness theology; critics call it modalism', pl: 'teologia jedności; krytycy nazywają ją modalizmem' },
  },
  authority: {
    scripture: { en: 'sola Scriptura', pl: 'sola Scriptura' },
    tradition: { en: 'Scripture and Tradition', pl: 'Pismo i Tradycja' },
    prophet: { en: 'continuing revelation', pl: 'objawienie ciągłe' },
    spirit: { en: 'Inner Light', pl: 'Wewnętrzne Światło' },
  },
  pope: {
    yes: { en: 'papal supremacy', pl: 'prymat jurysdykcji papieża' },
    no: { en: 'primacy of honour at most', pl: 'najwyżej prymat honorowy' },
  },
  eucharist: {
    mystery: { en: 'metousiosis', pl: 'metousiosis' },
    union: { en: 'sacramental union', pl: 'unia sakramentalna' },
    spiritual: { en: 'spiritual real presence', pl: 'duchowa rzeczywista obecność' },
    memorial: { en: 'memorialism', pl: 'memorializm' },
  },
  infant: {
    yes: { en: 'paedobaptism', pl: 'pedobaptyzm' },
    no: { en: 'credobaptism', pl: 'kredobaptyzm' },
  },
  regeneration: {
    yes: { en: 'baptismal regeneration', pl: 'odrodzenie przez chrzest' },
    no: { en: 'ordinance view', pl: 'chrzest jako obrzęd-znak' },
  },
  faithalone: {
    yes: { en: 'sola fide', pl: 'sola fide' },
    no: { en: 'faith working through love', pl: 'wiara działająca przez miłość' },
  },
  election: {
    yes: { en: 'unconditional election, Calvinism', pl: 'bezwarunkowe wybranie, kalwinizm' },
    no: { en: 'conditional election, Arminianism', pl: 'wybranie warunkowe, arminianizm' },
  },
  losable: {
    yes: { en: 'conditional security', pl: 'możliwość odpadnięcia od łaski' },
    no: { en: 'perseverance of the saints, eternal security', pl: 'wytrwanie świętych' },
  },
  origsin: {
    yes: { en: 'inherited guilt, Augustinian view', pl: 'dziedziczna wina, ujęcie augustyńskie' },
    no: { en: 'ancestral sin', pl: 'grzech prarodzicielski' },
  },
  perfection: {
    yes: { en: 'entire sanctification, Christian perfection', pl: 'całkowite uświęcenie, chrześcijańska doskonałość' },
  },
  succession: {
    yes: { en: 'apostolic succession', pl: 'sukcesja apostolska' },
  },
  governance: {
    bishops: { en: 'episcopal polity', pl: 'ustrój episkopalny' },
    elders: { en: 'presbyterian polity', pl: 'ustrój prezbiteriański' },
    congregation: { en: 'congregationalism', pl: 'kongregacjonalizm' },
    prophet: { en: 'hierarchical, centralised leadership', pl: 'centralne przywództwo hierarchiczne' },
  },
  theotokos: {
    yes: { en: 'Theotokos', pl: 'Theotokos, Bogurodzica' },
  },
  evervirgin: {
    yes: { en: 'perpetual virginity', pl: 'wieczyste dziewictwo' },
    no: { en: 'Helvidian view', pl: 'pogląd helwidiański' },
  },
  saints: {
    yes: { en: 'intercession of the saints', pl: 'wstawiennictwo świętych' },
  },
  icons: {
    yes: { en: 'veneration of icons', pl: 'cześć ikon' },
    no: { en: 'aniconism', pl: 'anikonizm' },
  },
  afterlife: {
    purgatory: { en: 'purgatory', pl: 'czyściec' },
    intermediate: { en: 'intermediate state', pl: 'stan pośredni' },
    sleep: { en: 'soul sleep', pl: 'sen duszy' },
  },
  gifts: {
    yes: { en: 'continuationism', pl: 'kontynuacjonizm' },
    rare: { en: 'open but cautious', pl: 'otwartość z ostrożnością' },
    no: { en: 'cessationism', pl: 'cesacjonizm' },
  },
  sabbath: {
    yes: { en: 'Sabbatarianism', pl: 'sabatarianizm' },
    sunday: { en: 'the Lord’s Day', pl: 'dzień Pański' },
  },
  pacifism: {
    just: { en: 'just war theory', pl: 'teoria wojny sprawiedliwej' },
    never: { en: 'nonresistance, pacifism', pl: 'niestawianie oporu, pacyfizm' },
  },
  instruments: {
    no: { en: 'a cappella worship', pl: 'nabożeństwo a cappella' },
  },
};
