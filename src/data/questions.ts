import type { Question, QuestionOption } from './types';

type Axes = { x?: number; y?: number };
const yesno = (
  labels: [string, string] = ['Yes', 'No'],
  yesAxes?: Axes,
  noAxes?: Axes,
  details: [string?, string?] = [],
): QuestionOption[] => [
  { id: 'yes', label: labels[0], short: 'Yes', axes: yesAxes, detail: details[0] },
  { id: 'no', label: labels[1], short: 'No', axes: noAxes, detail: details[1] },
];

/**
 * 24 questions, ordered from the deepest dividing lines (God, authority)
 * to the finer distinctives (worship, practice).
 * Wording rule: ask what is TRUE or PERMITTED, not what "should" happen;
 * offer a middle answer wherever churches genuinely hold one.
 */
export const questions: Question[] = [
  {
    id: 'trinity',
    topic: 'trinity',
    kind: 'choice',
    text: 'Who is God?',
    hint: 'The doctrine of the Trinity, defined at Nicaea (325) and Constantinople (381).',
    explain:
      'The Trinity teaches one God existing eternally as three distinct Persons who share one divine nature - not three gods, and not one Person in three successive modes. Almost every church confesses it; a few movements read the Bible differently.',
    weight: 3,
    options: [
      { id: 'yes', label: 'One God in three co-equal Persons: Father, Son and Holy Spirit', short: 'Trinity', detail: 'Classic Nicene teaching: three Persons, one divine essence.' },
      { id: 'separate', label: 'Father, Son and Spirit are separate beings, or the Son is created or subordinate', short: 'Separate beings', detail: 'E.g. Jesus as God’s first creation, or Father and Son as separate beings.' },
      { id: 'modal', label: 'One divine Person revealing Himself as Father, Son and Spirit', short: 'Oneness', detail: 'Father, Son and Spirit as manifestations of one Person.' },
    ],
  },
  {
    id: 'authority',
    topic: 'authority',
    kind: 'choice',
    text: 'What has the final word on doctrine?',
    explain:
      'When Christians disagree, what settles it? Some say the Bible alone is the final judge; others say the Bible must be read within the Church’s living Tradition; a few believe God still adds revelation through prophets.',
    weight: 3,
    options: [
      { id: 'scripture', label: 'Scripture alone', short: 'Sola Scriptura', detail: 'Creeds and teachers help, but only the Bible is infallible.' },
      { id: 'tradition', label: 'Scripture and Holy Tradition, as taught by the Church', short: 'Scripture + Tradition', detail: 'The Bible is read within the Church’s apostolic Tradition and its bishops’ teaching.' },
      { id: 'prophet', label: 'Scripture plus ongoing revelation through living prophets or leaders', short: 'Continuing revelation', detail: 'New scripture or authoritative guidance can still be given today.' },
      { id: 'spirit', label: 'The inner light of the Spirit in each person', short: 'Inner Light', detail: 'Christ speaks directly to each heart; written texts are secondary.' },
    ],
  },
  {
    id: 'pope',
    topic: 'papacy',
    kind: 'yesno',
    text: 'Does the Pope hold supreme authority over the whole Church?',
    hint: 'Universal jurisdiction of the Bishop of Rome (Vatican I, 1870).',
    explain:
      'Catholics believe Christ made Peter head of the apostles, and that the Bishop of Rome inherits that role with full authority over every Christian. Others may honour the Pope as a historic leader, or not at all, without accepting his jurisdiction.',
    weight: 3,
    options: yesno(['Yes, by Christ’s design', 'No'], undefined, undefined, [
      'Full, supreme and universal authority (and, in defined cases, infallibility).',
      'At most a primacy of honour, or no special role.',
    ]),
  },
  {
    id: 'councils',
    topic: 'councils',
    kind: 'choice',
    text: 'Which church councils carry binding authority?',
    hint: 'See the Councils page for what each one decided.',
    explain:
      'Ecumenical councils gathered bishops to settle disputes, especially about who Christ is. Different churches accept different numbers of them, which makes this one of the clearest markers between traditions.',
    weight: 2,
    options: [
      { id: 'all21', label: 'All 21, including Trent and Vatican II', short: 'All 21', detail: 'Catholic count, through Vatican II (1962–65).' },
      { id: 'seven', label: 'The first seven (325–787)', short: 'Seven', detail: 'Through Nicaea II, which approved icons.' },
      { id: 'three', label: 'Only the first three (325–431)', short: 'Three', detail: 'Stops before Chalcedon’s “two natures” definition (451).' },
      { id: 'two', label: 'Only the first two (325 & 381)', short: 'Two', detail: 'Nicaea and Constantinople - the Nicene Creed.' },
      { id: 'subordinate', label: 'Early councils are trustworthy, but only Scripture binds', short: 'Under Scripture', detail: 'Respected as faithful summaries, not infallible.' },
      { id: 'none', label: 'No council has binding authority', short: 'None' },
    ],
  },
  {
    id: 'eucharist',
    topic: 'eucharist',
    kind: 'choice',
    text: 'What happens in Communion?',
    explain:
      'At the Last Supper Jesus said “This is my body.” Churches differ on what that means: a real change, a real presence without change, a spiritual feeding, or a memorial meal.',
    weight: 2,
    options: [
      { id: 'transub', label: 'The bread and wine become Christ’s body and blood (transubstantiation)', short: 'Transubstantiation', detail: 'The substance changes; only the appearance of bread and wine remains.', axes: { x: 1 } },
      { id: 'mystery', label: 'They truly become His body and blood - a mystery we don’t define', short: 'Real change (mystery)', detail: 'A real change, but without a philosophical explanation of how.', axes: { x: 1 } },
      { id: 'union', label: 'Christ’s body and blood are present in, with and under the bread and wine', short: 'Sacramental union', detail: 'Bread remains bread, and Christ’s body is truly there too.', axes: { x: 0.8 } },
      { id: 'spiritual', label: 'Christ is truly but spiritually present to those who believe', short: 'Spiritual presence', detail: 'Believers feed on Christ by faith through the Spirit.', axes: { x: 0.1 } },
      { id: 'memorial', label: 'It is a symbolic memorial of His sacrifice', short: 'Memorial', detail: 'An act of remembrance and obedience.', axes: { x: -1 } },
      { id: 'none', label: 'No outward ritual is needed - communion is inward', short: 'Inward only', axes: { x: -1 } },
    ],
  },
  {
    id: 'infant',
    topic: 'baptism',
    kind: 'yesno',
    text: 'Is it right to baptize infants?',
    explain:
      'Most historic churches baptize babies, seeing baptism as God’s gift that does not depend on the child’s understanding. Baptists and others baptize only those old enough to profess faith themselves.',
    weight: 2,
    options: yesno(['Yes, infants may be baptized', 'No, only believers'], { x: 0.6 }, { x: -0.6 }, [
      'Children of believers are baptized and raised in the faith.',
      'Baptism follows a personal profession of faith.',
    ]),
  },
  {
    id: 'regeneration',
    topic: 'baptism',
    kind: 'yesno',
    text: 'Does baptism itself wash away sin and give new birth?',
    hint: 'Baptismal regeneration.',
    explain:
      'Is baptism a means by which God actually forgives and regenerates - or an outward sign of something that has already happened inwardly through faith?',
    weight: 1.5,
    options: yesno(['Yes, God acts through it', 'No, it’s a sign'], { x: 1 }, { x: -1 }, [
      'Baptism is a real means of grace that saves (1 Peter 3:21).',
      'Baptism signifies or seals a salvation received by faith.',
    ]),
  },
  {
    id: 'faithalone',
    topic: 'justification',
    kind: 'yesno',
    text: 'Are we justified by faith alone, apart from works?',
    hint: 'Sola fide - the central question of the Reformation.',
    explain:
      '“Justified” means declared or made right with God. The Reformers taught this happens through faith alone, with good works following as fruit. Catholics and Orthodox teach faith working through love, with grace transforming the believer.',
    weight: 2,
    options: yesno(['Yes, faith alone', 'No, by grace through faith working in love'], { y: -0.6 }, { y: 1 }, [
      'Good works follow salvation but do not contribute to it.',
      'Grace-enabled faith, love and obedience together.',
    ]),
  },
  {
    id: 'election',
    topic: 'predestination',
    kind: 'yesno',
    text: 'Does God choose who will be saved before, and apart from, anything they do?',
    hint: 'Unconditional election.',
    explain:
      'Calvinists teach that God chose the saved purely by His grace, not because He foresaw their faith. Arminians and most others teach God’s choice responds to, or makes room for, a person’s free response.',
    weight: 1.5,
    options: yesno(['Yes, election is unconditional', 'No, our response matters'], { y: -1 }, { y: 1 }),
  },
  {
    id: 'losable',
    topic: 'predestination',
    kind: 'yesno',
    text: 'Can a truly saved person lose their salvation?',
    explain:
      'Some teach “once saved, always saved” or that true believers will certainly persevere. Others teach that a believer can turn away and fall from grace.',
    weight: 1.5,
    options: yesno(['Yes, one can fall away', 'No, it’s secure'], { y: 1 }, { y: -1 }),
  },
  {
    id: 'origsin',
    topic: 'original-sin',
    kind: 'yesno',
    text: 'Do we inherit Adam’s guilt, not just a fallen nature?',
    explain:
      'Everyone agrees Adam’s fall affected humanity. The question is whether we are born guilty of his sin (Augustine and the West) or inherit mortality and a pull toward sin without personal guilt (the East and others).',
    weight: 1,
    options: yesno(['Yes, guilt too', 'No, only a fallen nature'], { y: -0.5 }, { y: 0.6 }),
  },
  {
    id: 'perfection',
    topic: 'sanctification',
    kind: 'yesno',
    text: 'Can a Christian reach perfect love - freedom from willful sin - in this life?',
    hint: 'Entire sanctification / Christian perfection.',
    explain:
      'John Wesley taught that God can so fill a believer with love that they no longer knowingly sin - not sinless perfection, but a heart wholly given to God. Most traditions see holiness as lifelong growth, never complete before death.',
    weight: 1,
    options: yesno(['Yes, it’s possible', 'No, not before death'], { y: 0.5 }, { y: -0.1 }),
  },
  {
    id: 'succession',
    topic: 'ministry',
    kind: 'yesno',
    text: 'Do valid priests and bishops need ordination in an unbroken line from the Apostles?',
    hint: 'Apostolic succession.',
    explain:
      'Catholic, Orthodox and other ancient Eastern churches hold that bishops are ordained by bishops in a chain reaching back to the Apostles, and that this is needed for valid sacraments. Anglicans and some Lutherans keep the historic episcopate, with differing views on whether it is essential. Most Protestants locate apostolic continuity in faithful teaching.',
    weight: 1.5,
    options: yesno(['Yes, it’s essential', 'No, it isn’t required'], { x: 1 }, { x: -0.8 }),
  },
  {
    id: 'women',
    topic: 'ministry',
    kind: 'yesno',
    text: 'Can women be ordained as pastors or priests?',
    explain:
      'This is about ordained leadership - senior pastor, priest or bishop - not whether women can teach, lead ministries or serve in other ways, which nearly all churches affirm.',
    weight: 1,
    options: yesno(['Yes', 'No']),
  },
  {
    id: 'governance',
    topic: 'ministry',
    kind: 'choice',
    text: 'How is the church rightly governed?',
    explain:
      'Church government ranges from bishops overseeing regions, to elders in connected councils, to each congregation deciding for itself, to a central prophet or governing body.',
    weight: 1.5,
    options: [
      { id: 'bishops', label: 'Bishops', short: 'Episcopal', detail: 'Bishops oversee dioceses; priests serve under them.' },
      { id: 'elders', label: 'Elders in connected councils', short: 'Presbyterian', detail: 'Local elders, regional presbyteries, general assemblies.' },
      { id: 'congregation', label: 'Each local congregation', short: 'Congregational', detail: 'Members govern their own church; no outside authority.' },
      { id: 'prophet', label: 'A living prophet or central governing body', short: 'Prophetic / central' },
    ],
  },
  {
    id: 'theotokos',
    topic: 'mary',
    kind: 'choice',
    text: 'Is it right to call Mary “Mother of God”?',
    hint: 'Theotokos - affirmed at Ephesus (431).',
    explain:
      'The title affirms that the child Mary bore is truly God the Son. The Church of the East prefers “Mother of Christ” to keep the natures distinct, while confessing Christ as God; some Protestants avoid the phrase because it can sound as if Mary were the source of God.',
    weight: 1,
    options: [
      { id: 'yes', label: 'Yes - she bore God the Son in the flesh', short: 'Yes' },
      { id: 'technical', label: 'It’s technically true, but I’d avoid the title', short: 'True, but avoid', detail: 'Affirms Jesus is God from conception, prefers “mother of Jesus/Christ”.' },
      { id: 'no', label: 'No', short: 'No' },
    ],
  },
  {
    id: 'evervirgin',
    topic: 'mary',
    kind: 'yesno',
    text: 'Did Mary remain a virgin her whole life?',
    explain:
      'All churches affirm the virgin birth of Jesus. This asks something further: whether Mary had other children afterward. The “brothers of Jesus” are read as cousins or Joseph’s children by some, as Mary’s later children by others.',
    weight: 1,
    options: yesno(['Yes, ever-virgin', 'No, she had other children']),
  },
  {
    id: 'saints',
    topic: 'saints',
    kind: 'yesno',
    text: 'Is it right to ask saints in heaven to pray for you?',
    explain:
      'Many Christians ask the departed saints to intercede, as one asks a friend to pray, believing they are alive in Christ. Others hold that Scripture gives no warrant for this and that prayer goes to God alone through Christ, the one mediator.',
    weight: 1.5,
    options: yesno(['Yes', 'No, pray to God alone'], { x: 0.6 }, { x: -0.4 }),
  },
  {
    id: 'icons',
    topic: 'saints',
    kind: 'yesno',
    text: 'Is it right to venerate icons and holy images?',
    hint: 'Defended at Nicaea II (787).',
    explain:
      'Supporters distinguish veneration (bowing, kissing an icon) from worship, which belongs to God alone, and say honour passes to the person depicted. Critics see it as at odds with the commandment against images.',
    weight: 1,
    options: yesno(['Yes', 'No'], { x: 0.8 }, { x: -0.5 }),
  },
  {
    id: 'afterlife',
    topic: 'afterlife',
    kind: 'choice',
    text: 'What happens to believers when they die?',
    explain:
      'Between death and the final resurrection, where are the faithful? Views range from purification (purgatory), to a conscious waiting state, to being immediately with Christ, to an unconscious “sleep”.',
    weight: 1.5,
    options: [
      { id: 'purgatory', label: 'Many are purified first (purgatory), then enter heaven', short: 'Purgatory' },
      { id: 'intermediate', label: 'They await the resurrection, and we pray for them - without defining purgatory', short: 'Intermediate state' },
      { id: 'heaven', label: 'They go straight to be with Christ', short: 'With Christ' },
      { id: 'sleep', label: 'They are unconscious until the resurrection', short: 'Sleep until resurrection' },
    ],
  },
  {
    id: 'gifts',
    topic: 'spirit',
    kind: 'choice',
    text: 'Are tongues, prophecy and healing part of the Christian life today?',
    hint: 'Continuationism vs. cessationism.',
    explain:
      'Pentecostals expect every gift of the Spirit to be active and normal. Many churches believe miracles still happen but are not the norm. Cessationists hold the sign-gifts ended with the apostles.',
    weight: 1.5,
    options: [
      { id: 'yes', label: 'Yes - every gift is active and normal today', short: 'Normal today' },
      { id: 'rare', label: 'They can still happen, but aren’t the norm', short: 'Possible, not normal' },
      { id: 'no', label: 'No - they ended with the apostles', short: 'Ceased' },
    ],
  },
  {
    id: 'sabbath',
    topic: 'practice',
    kind: 'choice',
    text: 'Which day must Christians keep holy?',
    explain:
      'The fourth commandment names the seventh day. Seventh-day Adventists hold it is still binding. Most churches gather on Sunday, the day of the resurrection; some see no single required day.',
    weight: 2,
    options: [
      { id: 'yes', label: 'Saturday - the seventh-day Sabbath is still binding', short: 'Saturday' },
      { id: 'sunday', label: 'Sunday - the Lord’s Day has taken its place', short: 'Sunday' },
      { id: 'free', label: 'No particular day is required', short: 'No set day' },
    ],
  },
  {
    id: 'pacifism',
    topic: 'practice',
    kind: 'choice',
    text: 'May a Christian fight in war?',
    explain:
      'Most churches follow just-war teaching: force can be justified to defend the innocent. Peace churches hold Jesus forbids all violence. Others leave it to individual conscience.',
    weight: 1,
    options: [
      { id: 'just', label: 'Yes, in a just war or self-defence', short: 'Just war' },
      { id: 'conscience', label: 'It’s a matter of personal conscience', short: 'Conscience' },
      { id: 'never', label: 'No - Christians must refuse all violence', short: 'Never' },
    ],
  },
  {
    id: 'instruments',
    topic: 'practice',
    kind: 'yesno',
    text: 'May churches use musical instruments in worship?',
    explain:
      'Churches of Christ sing a cappella because the New Testament mentions only singing. Orthodox chant is traditionally unaccompanied too, by custom rather than rule. Most churches welcome instruments.',
    weight: 1,
    options: yesno(['Yes, they’re fine', 'No, voices only']),
  },
];

export const questionById = Object.fromEntries(questions.map((q) => [q.id, q]));
