/**
 * Creeds & confessions. Creed texts are traditional public-domain English
 * (Book of Common Prayer 1662; Schaff's translation of Chalcedon).
 * Text parts: plain string, or { t, note } = phrase with an explanatory tooltip.
 */
export type Part = string | { t: string; note: string };

export interface Creed {
  id: string;
  name: string;
  date: string;
  tagline: string;
  origin: string;
  /** paragraphs → parts */
  text: Part[][];
  excerpt?: boolean;
  fullTextNote?: string;
  /** traditions that confess / use it, with an optional qualifier */
  usedBy: { id: string; note?: string }[];
  rejectedBy?: { id: string; note?: string }[];
  keyPoints: string[];
}

export const creeds: Creed[] = [
  {
    id: 'apostles',
    name: 'The Apostles’ Creed',
    date: 'c. 390 (final form c. 700)',
    tagline: 'The baptismal creed of the Western Church.',
    origin:
      'Grew out of the Old Roman Creed asked of candidates at baptism. Legend credits each apostle with a line; historians trace it to 2nd-century Rome, reaching its present form in Gaul around the 8th century.',
    text: [
      ['I believe in God the Father Almighty, Maker of heaven and earth:'],
      [
        'And in Jesus Christ his only Son our Lord, Who was conceived by the ',
        { t: 'Holy Ghost', note: '“Ghost” is the older English word for spirit — the Holy Spirit.' },
        ', Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried: ',
        { t: 'He descended into hell', note: 'Read as Christ’s descent to the realm of the dead (Hades) to proclaim victory — the “harrowing of hell” (1 Peter 3:19). Some modern versions say “to the dead”.' },
        '; The third day he rose again from the dead; He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge ',
        { t: 'the quick and the dead', note: '“Quick” means living.' },
        '.',
      ],
      [
        'I believe in the Holy Ghost; ',
        { t: 'The holy Catholick Church', note: '“Catholic” means universal — the whole Church through all times and places, not only the Roman Catholic Church.' },
        '; ',
        { t: 'The Communion of Saints', note: 'The fellowship of all believers, living and departed, united in Christ.' },
        '; The Forgiveness of sins; ',
        { t: 'The Resurrection of the body', note: 'A bodily resurrection at the end of time — not only the soul’s survival.' },
        ', And the Life everlasting. Amen.',
      ],
    ],
    usedBy: [
      { id: 'catholic' }, { id: 'anglican' }, { id: 'lutheran' }, { id: 'reformed' }, { id: 'methodist' },
      { id: 'baptist', note: 'widely affirmed, not binding' }, { id: 'pentecostal', note: 'widely affirmed' }, { id: 'nondenom', note: 'often affirmed' },
    ],
    rejectedBy: [
      { id: 'orthodox', note: 'agrees with its content but never adopted it' },
      { id: 'jw' }, { id: 'lds', note: 'rejects creeds generally' },
    ],
    keyPoints: ['Trinitarian shape: Father, Son, Spirit', 'Virgin birth, crucifixion, resurrection, ascension, return', 'One universal Church and bodily resurrection'],
  },
  {
    id: 'nicene',
    name: 'The Nicene Creed',
    date: '325 · expanded 381',
    tagline: 'The one creed shared by East and West.',
    origin:
      'Drafted at Nicaea (325) against Arius, who taught that the Son was created. Constantinople (381) expanded the article on the Holy Spirit. It is the most widely used creed in the world — said at every Catholic, Orthodox, Anglican and Lutheran Eucharist.',
    text: [
      ['I believe in one God the Father Almighty, Maker of heaven and earth, And of all things visible and invisible:'],
      [
        'And in one Lord Jesus Christ, the only-begotten Son of God, ',
        { t: 'Begotten of his Father before all worlds', note: 'The Son has no beginning: he is eternally “begotten”, not created in time — the heart of the case against Arius.' },
        ', God of God, Light of Light, Very God of very God, ',
        { t: 'Begotten, not made', note: 'Begetting produces the same kind (God from God); making produces something different (a creature).' },
        ', ',
        { t: 'Being of one substance with the Father', note: 'Greek homoousios — the same divine being as the Father, not merely similar (homoiousios). The single most debated word in early church history.' },
        '; By whom all things were made: Who for us men, and for our salvation came down from heaven, And was incarnate by the Holy Ghost of the Virgin Mary, And was made man, And was crucified also for us under Pontius Pilate. He suffered and was buried, And the third day he rose again according to the Scriptures, And ascended into heaven, And sitteth on the right hand of the Father. And he shall come again with glory to judge both the quick and the dead: Whose kingdom shall have no end.',
      ],
      [
        'And I believe in the Holy Ghost, The Lord and giver of life, Who proceedeth from the Father ',
        { t: 'and the Son', note: 'The Filioque. Added in the Latin West (Toledo, 589), adopted in Rome in 1014. Never accepted by the Orthodox, Oriental or Assyrian churches — a major cause of the 1054 schism.' },
        ', Who with the Father and the Son together is worshipped and glorified, Who spake by the Prophets. And I believe ',
        { t: 'one Catholick and Apostolick Church', note: 'The four “marks” of the Church: one, holy, catholic (universal) and apostolic. (The 1662 Prayer Book text omits “holy”.)' },
        '. I acknowledge ',
        { t: 'one Baptism for the remission of sins', note: 'Baptism is not repeated, and is linked to forgiveness — read sacramentally by some, as a sign by others.' },
        '. And I look for the Resurrection of the dead, And the life of the world to come. Amen.',
      ],
    ],
    usedBy: [
      { id: 'catholic' }, { id: 'orthodox', note: 'without “and the Son”' }, { id: 'oriental', note: 'original 381 form' },
      { id: 'assyrian', note: 'its own recension' }, { id: 'anglican' }, { id: 'lutheran' }, { id: 'reformed' }, { id: 'methodist' },
      { id: 'baptist', note: 'affirmed in substance' }, { id: 'pentecostal', note: 'affirmed in substance' }, { id: 'nondenom', note: 'affirmed in substance' },
    ],
    rejectedBy: [{ id: 'jw' }, { id: 'lds' }, { id: 'oneness' }],
    keyPoints: ['The Son is fully God, of one substance with the Father', 'The Holy Spirit is Lord and giver of life', 'The Filioque dispute: from the Father — and the Son?'],
  },
  {
    id: 'athanasian',
    name: 'The Athanasian Creed',
    date: 'c. 500',
    tagline: 'The Trinity and the Incarnation, in precise detail.',
    origin:
      'Named after St Athanasius but written in Latin, probably in southern Gaul around 500. Also called the Quicunque vult from its first words. Longer and more technical than the other creeds, it opens and closes with solemn warnings.',
    excerpt: true,
    fullTextNote: 'Excerpt of 44 verses. Full text: Book of Common Prayer (1662), and the Lutheran Book of Concord.',
    text: [
      [
        'Whosoever will be saved: before all things it is necessary that he hold the Catholick Faith. … And the Catholick Faith is this: That we worship one God in Trinity, and Trinity in Unity; ',
        { t: 'Neither confounding the Persons: nor dividing the Substance', note: 'Rules out both errors at once: modalism (one Person in three modes) and tritheism (three gods).' },
        '.',
      ],
      ['For there is one Person of the Father, another of the Son: and another of the Holy Ghost. But the Godhead of the Father, of the Son, and of the Holy Ghost, is all one: the Glory equal, the Majesty co-eternal. … So the Father is God, the Son is God: and the Holy Ghost is God. And yet they are not three Gods: but one God.'],
      [
        'For the right Faith is, that we believe and confess: that our Lord Jesus Christ, the Son of God, is God and Man; … One; ',
        { t: 'not by conversion of the Godhead into flesh: but by taking of the Manhood into God', note: 'God did not turn into a man; the eternal Son took a full human nature to himself.' },
        '.',
      ],
    ],
    usedBy: [
      { id: 'catholic' }, { id: 'anglican', note: 'in the Prayer Book; rarely said today' }, { id: 'lutheran', note: 'in the Book of Concord; said on Trinity Sunday' },
      { id: 'reformed', note: 'affirmed in the Belgic Confession' },
    ],
    rejectedBy: [{ id: 'orthodox', note: 'respects its doctrine but not its Filioque line' }],
    keyPoints: ['Three Persons, one God — co-equal and co-eternal', 'Christ: fully God and fully man, one Person', 'Includes the Filioque'],
  },
  {
    id: 'chalcedon',
    name: 'The Chalcedonian Definition',
    date: '451',
    tagline: 'One Person, two natures — the line that split the East.',
    origin:
      'Issued by the Council of Chalcedon to steer between Nestorius (Christ as two persons) and Eutyches (Christ’s humanity absorbed into his divinity). Its phrase “in two natures” was rejected by the churches of Egypt, Syria and Armenia — today’s Oriental Orthodox.',
    excerpt: true,
    fullTextNote: 'Central passage, in Philip Schaff’s translation.',
    text: [
      [
        '… one and the same Christ, Son, Lord, Only-begotten, to be acknowledged ',
        { t: 'in two natures', note: 'The disputed phrase. Oriental Orthodox prefer Cyril’s “one incarnate nature of God the Word” — meaning a united divine-human nature, not a merged one.' },
        ', ',
        { t: 'inconfusedly, unchangeably, indivisibly, inseparably', note: 'The four famous adverbs: the natures are not mixed or altered (against Eutyches), nor split apart (against Nestorius).' },
        '; the distinction of natures being by no means taken away by the union, but rather the property of each nature being preserved, and concurring in one Person and one Subsistence …',
      ],
    ],
    usedBy: [{ id: 'catholic' }, { id: 'orthodox' }, { id: 'anglican' }, { id: 'lutheran' }, { id: 'reformed' }, { id: 'methodist', note: 'implicitly' }],
    rejectedBy: [
      { id: 'oriental', note: 'confesses one united nature (miaphysite)' },
      { id: 'assyrian', note: 'never received the council' },
    ],
    keyPoints: ['Christ is one Person', 'Truly God and truly human, two natures', 'Natures united without mixture or separation'],
  },
];

/** Later confessions & statements of faith, one line each. */
export const confessions: { name: string; year: string; ids: string[]; text: string }[] = [
  { name: 'Augsburg Confession', year: '1530', ids: ['lutheran'], text: 'Melanchthon’s summary of Lutheran faith presented to Charles V; justification by faith (Art. IV).' },
  { name: 'Schleitheim Confession', year: '1527', ids: ['anabaptist'], text: 'Seven articles: believer’s baptism, the ban, separation, nonresistance, no oaths.' },
  { name: 'Council of Trent', year: '1545–63', ids: ['catholic'], text: 'Catholic definitions on Scripture & Tradition, justification and the seven sacraments.' },
  { name: 'Heidelberg Catechism', year: '1563', ids: ['reformed'], text: '129 questions opening with “What is your only comfort in life and in death?”' },
  { name: 'Thirty-Nine Articles', year: '1571', ids: ['anglican'], text: 'The Church of England’s doctrinal standard: Reformed on salvation, catholic on order.' },
  { name: 'Book of Concord', year: '1580', ids: ['lutheran'], text: 'The collected Lutheran confessions, including the Small Catechism and Formula of Concord.' },
  { name: 'Canons of Dort', year: '1619', ids: ['reformed'], text: 'Answer to the Remonstrants — the source of the “five points of Calvinism”.' },
  { name: 'Westminster Confession', year: '1646', ids: ['reformed'], text: 'The Presbyterian standard: covenant theology, God’s sovereignty, the regulative principle.' },
  { name: 'Confession of Dositheus', year: '1672', ids: ['orthodox'], text: 'Synod of Jerusalem’s Orthodox reply to Calvinism; affirms a real Eucharistic change.' },
  { name: 'Second London Baptist Confession', year: '1689', ids: ['baptist'], text: 'Westminster adapted for Baptists: believer’s baptism, congregational order.' },
  { name: 'Methodist Articles of Religion', year: '1784', ids: ['methodist'], text: 'Wesley’s abridgment of the Thirty-Nine Articles to 25 for American Methodists.' },
  { name: 'AG Statement of Fundamental Truths', year: '1916', ids: ['pentecostal'], text: '16 truths incl. baptism in the Spirit with the initial evidence of tongues.' },
  { name: 'Catechism of the Catholic Church', year: '1992', ids: ['catholic'], text: 'The modern compendium of Catholic doctrine, in four parts.' },
  { name: 'Baptist Faith & Message', year: '2000', ids: ['baptist'], text: 'Southern Baptist statement: inerrancy, believer’s baptism, complementarian pastorate.' },
  { name: '28 Fundamental Beliefs', year: '1980 / 2015', ids: ['adventist'], text: 'Adventist beliefs incl. the Trinity, the Sabbath and the sanctuary doctrine.' },
];
