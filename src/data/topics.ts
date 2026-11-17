export interface Topic {
  id: string;
  title: string;
  /** one-paragraph neutral explainer */
  summary: string;
  /** key scripture passages people argue from */
  scripture: string[];
  /** a key moment in church history */
  milestone: string;
}

export const topics: Topic[] = [
  {
    id: 'trinity',
    title: 'The Trinity',
    summary:
      'Nearly all churches confess one God in three co-equal, co-eternal Persons. Arians (4th c.) denied the Son’s full divinity; modern Jehovah’s Witnesses hold a similar view, Latter-day Saints teach three separate beings, and Oneness Pentecostals see one Person in three manifestations.',
    scripture: ['Matthew 28:19', 'John 1:1–14', '2 Corinthians 13:14'],
    milestone: 'Nicaea (325) declared the Son “of one substance” (homoousios) with the Father; Constantinople (381) affirmed the Spirit’s divinity.',
  },
  {
    id: 'authority',
    title: 'Scripture & Authority',
    summary:
      'Catholics and Orthodox receive Scripture within Holy Tradition, guarded by bishops. The Reformers taught sola Scriptura: Scripture as the only infallible rule, with creeds and confessions subordinate. Anglicans and Methodists speak of Scripture as primary but read with tradition and reason. Some groups add modern prophets or new scripture; Quakers stress the Inner Light.',
    scripture: ['2 Timothy 3:16–17', '2 Thessalonians 2:15', '1 Timothy 3:15'],
    milestone: 'Luther at Worms (1521): “Unless I am convinced by Scripture and plain reason… I cannot and will not recant.”',
  },
  {
    id: 'papacy',
    title: 'The Papacy',
    summary:
      'Catholics hold that Christ made Peter head of the apostles and that the Bishop of Rome inherits that office with full, supreme and universal jurisdiction, and can speak infallibly ex cathedra. Orthodox grant Rome a historic “primacy of honour” among equals; Protestants reject the papal claim altogether.',
    scripture: ['Matthew 16:18–19', 'Luke 22:32', 'John 21:15–17'],
    milestone: 'The mutual excommunications of 1054 crystallised the East–West split; Vatican I (1870) defined papal infallibility.',
  },
  {
    id: 'councils',
    title: 'Ecumenical Councils',
    summary:
      'Councils of bishops settled the great disputes about Christ and the Trinity. The number a church accepts is one of the clearest dividing lines: 2 (Church of the East), 3 (Oriental Orthodox), 7 (Eastern Orthodox), 21 (Catholic). Classical Protestants accept the early councils insofar as they agree with Scripture.',
    scripture: ['Acts 15:1–29'],
    milestone: 'Chalcedon (451) defined Christ as one Person “in two natures” - the definition that divided Chalcedonian and Oriental churches.',
  },
  {
    id: 'eucharist',
    title: 'The Eucharist',
    summary:
      'Catholics teach transubstantiation: the substance of bread and wine becomes Christ’s body and blood. Orthodox affirm a real change but decline to define how. Lutherans confess Christ’s body “in, with and under” the elements. Calvin taught a real but spiritual presence; Zwingli and most Baptists see a memorial. Quakers practise no outward rite.',
    scripture: ['John 6:51–58', 'Matthew 26:26–28', '1 Corinthians 10:16; 11:23–29'],
    milestone: 'The Marburg Colloquy (1529) - Luther and Zwingli agreed on 14 of 15 articles, but not on the Supper.',
  },
  {
    id: 'baptism',
    title: 'Baptism',
    summary:
      'Most historic churches baptise infants and teach that baptism brings new birth (baptismal regeneration). Reformed churches baptise infants as a covenant sign. Baptists, Pentecostals and Anabaptists baptise believers only, usually by immersion; Churches of Christ baptise believers “for the forgiveness of sins”.',
    scripture: ['Acts 2:38–39', 'Romans 6:3–4', 'Titus 3:5', '1 Peter 3:21'],
    milestone: 'In Zürich, 1525, Conrad Grebel baptised George Blaurock on confession of faith - the birth of the Anabaptist movement.',
  },
  {
    id: 'justification',
    title: 'Justification',
    summary:
      'How is a sinner made right with God? Protestants teach justification by grace through faith alone, with Christ’s righteousness imputed. Catholics teach justification by grace through faith working in love, with righteousness infused and growing. Orthodox frame salvation as theosis - union with God - rather than in legal terms.',
    scripture: ['Romans 3:28', 'Ephesians 2:8–10', 'James 2:24', 'Galatians 5:6'],
    milestone: 'Trent’s Decree on Justification (1547) answered the Reformers; the 1999 Joint Declaration found substantial Lutheran–Catholic agreement.',
  },
  {
    id: 'predestination',
    title: 'Predestination & Assurance',
    summary:
      'Calvinists teach unconditional election and the perseverance of the saints: those God chooses will certainly be saved. Arminians (Methodists, most Pentecostals) teach election based on foreseen faith and that believers can fall away. Lutherans affirm election to salvation but reject double predestination; Catholics and Orthodox affirm grace and free cooperation.',
    scripture: ['Romans 8:29–30; 9:10–24', 'Ephesians 1:4–5', 'Hebrews 6:4–6', '1 Timothy 2:4'],
    milestone: 'The Synod of Dort (1618–19) answered the Remonstrants with the five points later summed up as “TULIP”.',
  },
  {
    id: 'original-sin',
    title: 'Original Sin',
    summary:
      'Western churches (following Augustine) teach that humanity inherits Adam’s guilt as well as a corrupted nature. Eastern churches speak of “ancestral sin”: we inherit mortality and a tendency to sin, not personal guilt. Some traditions (Latter-day Saints, Churches of Christ) teach that people are accountable only for their own sins.',
    scripture: ['Romans 5:12–19', 'Psalm 51:5', 'Ezekiel 18:20'],
    milestone: 'Council of Carthage (418) condemned Pelagius, who denied that Adam’s sin affects his descendants.',
  },
  {
    id: 'sanctification',
    title: 'Holiness & Perfection',
    summary:
      'John Wesley taught “Christian perfection” or entire sanctification - a work of grace in which love so fills the heart that it no longer wilfully sins. The Holiness movement and early Pentecostals built on this. Most other traditions see sanctification as lifelong growth never complete before death.',
    scripture: ['Matthew 5:48', '1 Thessalonians 5:23', '1 John 3:6–9'],
    milestone: 'Wesley’s “A Plain Account of Christian Perfection” (1766).',
  },
  {
    id: 'ministry',
    title: 'Ministry & Church Order',
    summary:
      'Episcopal churches are led by bishops, and Catholics, Orthodox and Anglicans hold that valid orders come through apostolic succession. Presbyterian churches are governed by elders in graded councils; Baptists and other free churches by the local congregation. Women’s ordination is one of today’s sharpest divides, even within denominations.',
    scripture: ['Acts 14:23', '1 Timothy 3:1–13', 'Titus 1:5–9', 'Galatians 3:28'],
    milestone: 'Anglican provinces began ordaining women priests in the 1970s–90s; Catholic and Orthodox teaching reserve priesthood to men.',
  },
  {
    id: 'mary',
    title: 'Mary',
    summary:
      'Ephesus (431) called Mary “Theotokos” - God-bearer - to protect the unity of Christ’s person. Catholics and Orthodox also hold her perpetual virginity; Catholics dogmatically define the Immaculate Conception (1854) and Assumption (1950). Most Protestants honour Mary as mother of Jesus but reject later Marian doctrines.',
    scripture: ['Luke 1:28–48', 'Mark 6:3', 'John 19:26–27'],
    milestone: 'The Church of the East preferred “Christotokos” (Christ-bearer) and parted from the imperial church after 431.',
  },
  {
    id: 'saints',
    title: 'Saints & Icons',
    summary:
      'Catholic, Orthodox and Oriental churches ask the saints to intercede and venerate icons - honour passing to the person depicted, worship reserved to God alone. Lutherans keep images but do not invoke saints; Reformed and Anabaptist traditions removed images from worship.',
    scripture: ['Hebrews 12:1', 'Revelation 5:8', 'Exodus 20:4–5'],
    milestone: 'Nicaea II (787) ended the first wave of Iconoclasm; the “Triumph of Orthodoxy” (843) is still celebrated each Lent.',
  },
  {
    id: 'afterlife',
    title: 'Death & the Afterlife',
    summary:
      'Catholics teach purgatory, a final purification for the saved. Orthodox pray for the departed and speak of an intermediate state without defining purgatory. Most Protestants believe believers go directly to be with Christ. Adventists and Jehovah’s Witnesses teach that the dead are unconscious until the resurrection.',
    scripture: ['2 Maccabees 12:44–46', '1 Corinthians 3:12–15', 'Philippians 1:23', 'Ecclesiastes 9:5'],
    milestone: 'Council of Florence (1439) defined purgatory; Luther’s 95 Theses (1517) began over indulgences.',
  },
  {
    id: 'spirit',
    title: 'Gifts of the Spirit',
    summary:
      'Pentecostals and charismatics hold that every spiritual gift - tongues, prophecy, healing - continues today, and many teach a distinct baptism in the Spirit. Cessationists (many Reformed, Baptists and Churches of Christ) believe the sign-gifts ended with the apostles. Many traditions take a middle position.',
    scripture: ['Acts 2:1–4', '1 Corinthians 12–14', 'Joel 2:28'],
    milestone: 'The Azusa Street Revival in Los Angeles (1906) launched global Pentecostalism.',
  },
  {
    id: 'practice',
    title: 'Worship & Practice',
    summary:
      'Some distinctives are about how Christians live and worship: Seventh-day Adventists keep the Saturday Sabbath; Anabaptists and Quakers keep a historic peace witness and traditionally refuse military service; Churches of Christ sing a cappella, as do Orthodox (by tradition rather than rule). These questions often pinpoint a tradition quickly.',
    scripture: ['Exodus 20:8–11', 'Matthew 5:38–44', 'Ephesians 5:19', 'Psalm 150'],
    milestone: 'The Schleitheim Confession (1527) set out Anabaptist nonresistance; Adventists formally organised in 1863.',
  },
  {
    id: 'ethics',
    title: 'Marriage & Life',
    summary:
      'Every tradition holds human life and marriage to be gifts of God, but they disagree on same-sex marriage and on exceptions in abortion. The fault line often runs through a tradition rather than between traditions: Anglican, Lutheran, Reformed and Methodist churches include both bodies that changed their teaching and bodies that kept the traditional one.',
    scripture: ['Genesis 1:27', 'Matthew 19:4–6', 'Psalm 139:13–16', 'Galatians 3:28'],
    milestone: 'The Didache (1st–2nd c.) already forbids abortion; the Episcopal Church authorised same-sex marriage in 2015 and the United Methodist Church removed its prohibitions in 2024.',
  },
];

export const topicTitles: Record<string, string> = Object.fromEntries(topics.map((t) => [t.id, t.title]));
