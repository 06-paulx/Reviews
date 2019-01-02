const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reviews',
});



var users = [
  'Blythe',
  'Franklyn',
  'Rick',
  'Jerrold',
  'Tonda',
  'Johnna',
  'Lizzie',
  'Burma',
  'Erwin',
  'Lala',
  'Nila',
  'Carolee',
  'Dusty',
  'Ligia',
  'Keena',
  'Pauletta',
  'Deon',
  'Lindsay',
  'Sona',
  'Eva',
  'Phylicia',
  'Luna',
  'Emogene',
  'Lezlie',
  'Jaime',
  'Myriam',
  'Carletta',
  'Quintin',
  'Asha',
  'Tara',
  'Fae',
  'Oda',
  'Phil',
  'Gretchen',
  'Loriann',
  'Rosemarie',
  'Gustavo',
  'Jeannette',
  'Roger',
  'Aleshia',
  'Marleen',
  'Lani',
  'Jordan',
  'Mauricio',
  'Jerry',
  'Waylon',
  'Annabell',
  'Milagro',
  'Kenya',
  'Joselyn',
  'Serafina',
  'Darrick',
  'Dianne',
  'Modesta',
  'Kandi',
  'Marni',
  'Britt',
  'Gaylene',
  'Katlyn',
  'Etha',
  'Lakiesha',
  'Lizbeth',
  'Elliott',
  'Katina',
  'Chu',
  'Estelle',
  'Reginia',
  'Jerrod',
  'Bryant',
  'Chang',
  'Tambra',
  'Arica',
  'Cristopher',
  'Michelina',
  'Sima',
  'Shae',
  'Darren',
  'Brigitte',
  'Dionna',
  'Tod',
  'Elbert',
  'Courtney',
  'Vivan',
  'Beatriz',
  'Boris',
  'Kenisha',
  'Sharilyn',
  'Vergie',
  'Lashawnda',
  'Jeanett',
  'Dreama',
  'Lessie',
  'Jefferson',
  'Marivel',
  'Lawerence',
  'Porter',
  'Joelle',
  'Carmon',
  'Evelia',
  'Rhoda'
]

var reviews = [
  "Lorem ipsum dolor sit amet, te pro assum definitionem, no iudico eripuit vel, brute nemore epicuri vis in? Per in option expetendis. Nusquam accusata te eum, sed et fierent inimicus efficiantur, tota adhuc ocurreret te qui? Has congue tamquam ei. Eu pri sint omnesque, an audiam docendi quaerendum sed, mea feugiat antiopam consetetur ne!",

  "Doctus prompta similique ei mea? In dicta indoctum vim, te sit commodo temporibus. Mazim consulatu has ei! Probo mundi conceptam at sit! Facilisi accusata id usu, mel eu veritus insolens dissentiet? Odio partem commune ad sed, nullam ocurreret in qui.",

  "Quo ut viderer minimum, ubique postea ne nec, ea vim ignota blandit vituperatoribus. At sed nihil forensibus voluptatibus, nobis eripuit ea sea. Case copiosae ad per, eum id solet scripserit, nam labores definiebas cotidieque id. Offendit voluptua perfecto has te, nibh nonumes civibus eum eu.",

  "Discere postulant eos ei, commodo torquatos sed eu. Sea ad regione scripserit, ei cum stet invidunt imperdiet? Pro ne soluta facilisis, eu nec fastidii erroribus! Ea mel saperet epicuri, ad soluta libris vocent mea. Ei cum nibh veri.",

  "In docendi partiendo erroribus duo, idque omittam efficiantur vel cu, te suas vitae ornatus nec? In illud repudiare vis, ex quo ludus liberavisse. Eos dolore deleniti adipiscing in, ei cum nulla quodsi ponderum, cu usu minim labore eruditi. Eos impetus forensibus ex, ex movet scribentur cum, vix odio mutat munere ea. Ad accusamus philosophia duo, nam minim vituperata te, congue feugiat repudiandae duo ex? Quo ne vidit eripuit. Pri graeco accusamus ei!",

  "Fugit erant latine no mel? Quem elit pro cu, at cum modo deseruisse, eam id ferri errem suscipiantur? Eu eum blandit necessitatibus? An his brute noster accommodare, saepe graece ceteros his ne. Ex timeam veritus fierent eum, ut reque minimum vel.",

  "Mundi labores nec et! Id vix erat tritani appellantur, cum ea harum elitr, vix at tation detracto antiopam. Qui ea esse lucilius nominati. Qui eu ludus semper salutatus. No pro tibique scaevola legendos, pro cu perfecto intellegam. Deleniti suscipit detraxit vis et, ex quas adipisci sit.",

  "Eos ut nonumy putant mediocrem, sit cu melius meliore vulputate, stet scripta id ius. Sea option splendide ea, ubique numquam vim at? Et nec saperet vulputate, no omittantur dissentiet sit. Te has omnis decore, no vis vulputate conclusionemque! Eam ei erat quaerendum? Munere adolescens pro no, cum in vero choro adversarium, est falli decore populo eu.",

  "Expetenda tincidunt ei nec, vis cu eripuit scaevola voluptatum? Cibo similique sea at! Officiis accommodare consectetuer eu his, mea nullam tritani definiebas ad! Ne suas inani nec.",

  "Quo nemore detraxit suscipiantur ut, duo mollis singulis ne, vel case principes iracundia ei? Pri illud viderer invenire id? Nam cibo gloriatur tincidunt ne? Mel fugit tempor theophrastus eu, pro diam atomorum ea! Consulatu concludaturque ius in, choro scaevola persecuti ei mei, in albucius delectus his!",

  "Nam ne putant utroque, ut adipisci dissentiunt voluptatibus eam? Eam in platonem reformidans. Sint veri veniam ex has. Eu usu docendi mnesarchum, simul persius labitur in mel! Minim oblique nam at.",

  "Velit iisque menandri eos an, per numquam deterruisset ut, ne sea illum homero? Inani errem viris an per, duis movet choro eam at. Ut option phaedrum deserunt quo, quot eligendi ius an, ne erant viris aeterno eam. Id mel nihil insolens scribentur, eos te detracto senserit, duo etiam graeci ut. Cu vitae disputationi his, mei et sale laudem honestatis, in habeo fierent consequat quo. Stet veri vivendum ex mei!",

  "Graeco mollis ne cum! Sed no inani minimum! Ius cetero nostrud labores ex. Cu utroque scriptorem his, ne has cibo omnium praesent?",

  "Has solum integre efficiendi cu, mei ea habeo consequuntur! Mel invenire quaestio ei, te modo consul maluisset mei! Ex fuisset sensibus philosophia eum, magna necessitatibus ad vix. Dictas alienum te ius, cu tation delectus neglegentur duo. In case mucius delectus vim! Has nobis assentior et, omnis altera voluptatibus mea te. Ex duo exerci feugait lucilius, primis consequat sea id.",

  "Elit nostrud scaevola ei vel? Meis posidonium interpretaris an usu, et quidam imperdiet eum! Tota animal legimus no mea! Quot munere audiam vel cu, dolores qualisque qui an? Ei scripta verterem his, eos te nemore euismod periculis, qui legere torquatos cu. Animal nonumes te vis, in eum everti consequuntur!",

  "Probatus necessitatibus eum eu. Id eleifend definitiones mea? Ut legimus vivendo pertinacia vel. Te pri sapientem prodesset!",

  "Vide bonorum vix et, id phaedrum prodesset sed! Eam ad doming vituperata, sit laoreet cotidieque te, possim tincidunt eu sit! Cum ridens option eu! Eam cu consulatu aliquando, audire nominavi gubergren ex ius? Vero magna aliquid vel et.",

  "Salutandi explicari id sea, id augue ceteros deseruisse mei? Ne molestie intellegat vix, has nisl numquam hendrerit et. Usu ne brute evertitur. Pericula facilisis no pro. Nec cu probo quodsi, vero nominavi apeirian est eu, usu ei sale ocurreret! Possim antiopam cotidieque in est, no mei utamur euripidis, legere necessitatibus no sit?",

  "Falli nemore discere at sed, illud lorem ne nec. Vel partem percipitur ex, at assum imperdiet referrentur pri. Et wisi invenire senserit vis? Mel ad solet dolorum consequat, et maluisset necessitatibus nec, te iudico commune est. Fabellas adipisci disputando at duo, in sea accumsan noluisse cotidieque. Nam eu harum scripserit, ea sea choro eleifend torquatos?",

  "Vix te causae scaevola, sea no quando detracto? Pro te justo commodo sapientem, te mei idque quodsi aperiam, in per nibh veritus blandit? Assum ponderum sed at. Vocent consulatu cotidieque cu mel!"
]

var getRandomDate = Date.now() - (Math.floor(Math.random() * 31557065322))

var userImage = [
  'https://pbs.twimg.com/profile_images/2679269368/1f76752ff6e720b3a81d2d432394f989.jpeg',
  'https://pbs.twimg.com/profile_images/378800000820194552/9438cd4f46d75e87f411be74815e57c8.jpeg',
  'https://pbs.twimg.com/profile_images/378800000172139970/8278188842d52ba72fa4b1b010c631e8.png',
  'https://pbs.twimg.com/profile_images/414881536752615424/0UGCpOwQ.png',
  'https://avatarfiles.alphacoders.com/155/155717.jpg',
  'https://pbs.twimg.com/profile_images/3340170889/2bd39c10aacc5257ea35e899cd3b38b7.png',
  'https://pbs.twimg.com/profile_images/681986321716383745/AXiUHnBh.png',
  'https://c-sf.smule.com/sf/s24/arr/9b/62/909824aa-14f9-4ad2-8468-16cb155e3e43.jpg',
  'https://pbs.twimg.com/profile_images/2727518587/ebb135a8a90675ac1359864c77389338.png',
  'https://pbs.twimg.com/profile_images/734265861926588416/ra5Ekezw_400x400.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Statler_and_Waldorf.jpg/220px-Statler_and_Waldorf.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Dr._Bunsen_Honeydew.jpg/220px-Dr._Bunsen_Honeydew.jpg',
  'https: //upload.wikimedia.org/wikipedia/en/thumb/b/b5/Rowlf_the_Dog.jpg/200px-Rowlf_the_Dog.jpg',
  'https://vignette.wikia.nocookie.net/muppet/images/a/ac/Scooter.png/revision/latest?cb=20111020174312',
]

var getRandomUserImage = () => {
  var index = Math.floor(Math.random() * userImage.length)
  return userImage[index]; 
}

var getRandomName = () => {
  var index = Math.floor(Math.random() * 50);
  return users[index];
}

var getRandomReview = () => {
  var index = Math.floor(Math.random() * 20);
  return reviews[index]
}
  
let dbSeeding = function (query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

let currentQuery = Promise.resolve();

for (var i = 0; i < 3000; i++) {
  let query = 'INSERT INTO reviews (user, review, listing, review_date, userphoto) VALUES (?, ?, ?, ?, ?)'
  let params = [
    getRandomName(), 
    getRandomReview(),
    Math.floor(Math.random() * 100) + 1,
    Date.now() - (Math.floor(Math.random() * 31557065322)),
    getRandomUserImage()
  ];

  currentQuery = currentQuery.then(
    () => dbSeeding(query, params),
    err => console.log(err, 'Query failed'),
  );
}

  currentQuery.then(
    result => {
      console.log(result, 'Success');
      connection.end();
    },
    err => {
      console.log(err);
      connection.end();
    },
  );
