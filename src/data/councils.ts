import type { Council } from './types';
/** The 21 councils counted as ecumenical by the Catholic Church, with who receives each. */
export const councils: Council[] = [
  {
    n: 1, name: 'Nicaea I', year: '325', place: 'Nicaea (İznik, Turkey)',
    summary: 'Condemned Arius; the Son is “of one substance” with the Father.',
    decisions: ['First Nicene Creed (homoousios)', 'Set a common date for Easter', '20 canons on discipline'],
  },
  {
    n: 2, name: 'Constantinople I', year: '381', place: 'Constantinople (Istanbul)',
    summary: 'Affirmed the full divinity of the Holy Spirit; completed the Nicene Creed.',
    decisions: ['Niceno-Constantinopolitan Creed', 'Condemned Macedonians and Apollinarians', 'Constantinople ranked second after Rome (canon 3)'],
  },
  {
    n: 3, name: 'Ephesus', year: '431', place: 'Ephesus (Turkey)',
    summary: 'Christ is one Person; Mary is Theotokos, “God-bearer”. Condemned Nestorius.',
    decisions: ['Mary proclaimed Theotokos', 'Condemned Nestorius and Pelagianism', 'Forbade composing a new creed (canon 7)'],
  },
  {
    n: 4, name: 'Chalcedon', year: '451', place: 'Chalcedon (Kadıköy, Turkey)',
    summary: 'Christ is one Person “in two natures, without confusion, change, division or separation.”',
    decisions: ['Chalcedonian Definition', 'Tome of Leo received', 'Canon 28 raised Constantinople (rejected by Rome)'],
  },
  {
    n: 5, name: 'Constantinople II', year: '553', place: 'Constantinople',
    summary: 'Read Chalcedon in a Cyrilline sense; condemned the “Three Chapters”.',
    decisions: ['Condemned Theodore of Mopsuestia & writings of Theodoret and Ibas', 'Anathemas against Origenist teachings'],
  },
  {
    n: 6, name: 'Constantinople III', year: '680–681', place: 'Constantinople',
    summary: 'Christ has two wills, divine and human. Condemned Monothelitism.',
    decisions: ['Dyothelitism defined', 'Condemned Pope Honorius I posthumously'],
  },
  {
    n: 7, name: 'Nicaea II', year: '787', place: 'Nicaea',
    summary: 'Restored the veneration of icons, distinguishing honour (proskynesis) from worship (latreia).',
    decisions: ['Icons may be venerated', 'Ended first Iconoclasm'],
  },
  {
    n: 8, name: 'Constantinople IV', year: '869–870', place: 'Constantinople',
    summary: 'Deposed Patriarch Photius. Annulled in the East by the Council of 879–880.',
    decisions: ['Deposed Photius', 'Affirmed icon veneration'],
  },
  { n: 9, name: 'Lateran I', year: '1123', place: 'Rome', summary: 'Confirmed the Concordat of Worms, ending the Investiture Controversy.', decisions: ['Concordat of Worms', 'Clerical celibacy canons']  },
  { n: 10, name: 'Lateran II', year: '1139', place: 'Rome', summary: 'Ended the schism of Antipope Anacletus II; disciplinary reforms.', decisions: ['Clerical marriages declared invalid']  },
  { n: 11, name: 'Lateran III', year: '1179', place: 'Rome', summary: 'Required a two-thirds majority of cardinals to elect a pope.', decisions: ['Papal election rules', 'Condemned Cathars']  },
  {
    n: 12, name: 'Lateran IV', year: '1215', place: 'Rome',
    summary: 'Defined transubstantiation; required annual confession and Easter communion.',
    decisions: ['“Transubstantiation” used dogmatically', 'Annual confession', 'Fifth Crusade called'],
  },
  { n: 13, name: 'Lyon I', year: '1245', place: 'Lyon', summary: 'Deposed Emperor Frederick II.', decisions: ['Deposition of Frederick II']  },
  { n: 14, name: 'Lyon II', year: '1274', place: 'Lyon', summary: 'Brief, failed reunion with the Greeks; affirmed the Filioque.', decisions: ['Filioque affirmed', 'Conclave rules']  },
  { n: 15, name: 'Vienne', year: '1311–1312', place: 'Vienne, France', summary: 'Suppressed the Knights Templar.', decisions: ['Templars dissolved', 'The soul is the form of the body']  },
  { n: 16, name: 'Constance', year: '1414–1418', place: 'Konstanz', summary: 'Ended the Western Schism of three rival popes; condemned Hus and Wycliffe.', decisions: ['Elected Martin V', 'Jan Hus burned']  },
  {
    n: 17, name: 'Basel–Ferrara–Florence', year: '1431–1445', place: 'Basel, Ferrara, Florence',
    summary: 'Short-lived reunion with the Orthodox; defined purgatory and the seven sacraments.',
    decisions: ['Purgatory defined', 'Seven sacraments listed', 'Union with Armenians and Copts (short-lived)'],
  },
  { n: 18, name: 'Lateran V', year: '1512–1517', place: 'Rome', summary: 'Affirmed the immortality of the soul; ended months before Luther’s theses.', decisions: ['Soul’s immortality', 'Reform decrees (little enforced)']  },
  {
    n: 19, name: 'Trent', year: '1545–1563', place: 'Trento, Italy',
    summary: 'The Catholic answer to the Reformation: canon of Scripture, justification, sacraments.',
    decisions: ['Scripture & Tradition', 'Decree on Justification', 'Seven sacraments, Mass as sacrifice', 'Seminaries founded'],
  },
  {
    n: 20, name: 'Vatican I', year: '1869–1870', place: 'Vatican City',
    summary: 'Defined papal infallibility and universal jurisdiction.',
    decisions: ['Pastor Aeternus', 'Dei Filius on faith and reason'],
  },
  {
    n: 21, name: 'Vatican II', year: '1962–1965', place: 'Vatican City',
    summary: 'Renewed liturgy and opened dialogue with other Christians and the world.',
    decisions: ['Mass in vernacular languages', 'Lumen Gentium on the Church', 'Ecumenism & religious liberty'],
  },
];
export const schisms = [
  { year: '431', title: 'Church of the East separates', text: 'After Ephesus, the Persian church keeps the Antiochene language of Christ’s two natures and the title “Christotokos”.', ids: ['assyrian']  },
  { year: '451', title: 'Chalcedonian split', text: 'Egyptian, Syrian and Armenian churches reject Chalcedon’s “in two natures”, confessing one united nature (miaphysitism).', ids: ['oriental']  },
  { year: '1054', title: 'The Great Schism', text: 'Rome and Constantinople exchange excommunications over papal authority and the Filioque.', ids: ['catholic', 'orthodox']  },
  { year: '1517', title: 'The Reformation', text: 'Luther’s 95 Theses spark a movement for Scripture alone, grace alone and faith alone.', ids: ['lutheran']  },
  { year: '1525', title: 'Radical Reformation', text: 'Swiss Brethren baptise adults in Zürich; Anabaptists stress a believers’ church and nonresistance.', ids: ['anabaptist']  },
  { year: '1534', title: 'Church of England', text: 'The Act of Supremacy breaks with Rome; the Elizabethan Settlement (1559) shapes a via media.', ids: ['anglican']  },
  { year: '1536–1560', title: 'Reformed churches', text: 'Calvin’s Geneva, Knox’s Scotland and the Heidelberg Catechism (1563) form the Reformed tradition.', ids: ['reformed']  },
  { year: '1609', title: 'First Baptists', text: 'English Separatists under John Smyth baptise believers in Amsterdam.', ids: ['baptist']  },
  { year: '1652', title: 'Quakers', text: 'George Fox gathers the “Children of the Light” in northern England.', ids: ['quaker']  },
  { year: '1738–1784', title: 'Methodism', text: 'John Wesley’s heart is “strangely warmed”; American Methodists organise in 1784.', ids: ['methodist']  },
  { year: '1830', title: 'Restoration movements', text: 'Stone–Campbell churches seek New Testament Christianity; Joseph Smith founds the Latter-day Saint church.', ids: ['restorationist', 'lds']  },
  { year: '1863', title: 'Seventh-day Adventists', text: 'Millerite believers organise around the Sabbath and Christ’s soon return.', ids: ['adventist']  },
  { year: '1879', title: 'Bible Students', text: 'Charles Taze Russell’s movement; named Jehovah’s Witnesses in 1931.', ids: ['jw']  },
  { year: '1906', title: 'Pentecostal revival', text: 'Azusa Street sparks worldwide Pentecostalism; Oneness Pentecostals separate in 1916.', ids: ['pentecostal', 'oneness']  },
  { year: '20th c.', title: 'Non-denominational churches', text: 'Independent evangelical and charismatic churches multiply, especially after the 1970s.', ids: ['nondenom']  },
];
