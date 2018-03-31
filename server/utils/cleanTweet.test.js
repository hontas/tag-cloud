const { expect } = require('chai');
const cleanTweet = require('./cleanTweet');

const tweets = [
  'RT @Per_Laber: Dagens dilemma för socialister och alla andra självgoda människor. #SVPOL https://t.co/DJaFoHdAXI',
  'RT @JuliaCaesar08: Kompetensregnet - lysande utsikter för Sverige:\nHälften av nyanlända invandrare saknar grundskolekompetens.\nEfter etable…',
  'RT @LenaHansson130: Måste erkänna att så roligt som jag har med att hjälpa annonsörena strypa reklamintäkterna för @kentekeroth egen hatblo…',
  'RT @garimelda: @TESLAKATTEN Vänstern: whataboutism är OK när vi gör det! #svpol',
  'RT @MarkusWiechel: Det där med att hemliga försvarshemligheter röjs börjar bli rätt tröttsamt nu. https://t.co/qAC5iQPwt0 #föpol #svpol #sv…',
  'RT @HelenVonPost: #svpol\nMarodörerna skall bara inte få komma undan.\nInte i ”Mitt Sverige”.\nI många andra länder skulle processen gjorts ko…',
  'RT @chrwallg: Samtidigt som Sydafrikas regering beslutat att vita människors ägor ska approprieras och ett folkmord på desamma står för dör…',
  '#svpol\n"Lex Löfven", kan det bli namnet på en rättsnorm?\nEn kontroll, vars resultat måste visa att den aktuella ämb… https://t.co/IBIhbU9UJm',
  'RT @HelenVonPost: #svpol\nBara de ensamkommande ”barn”, som anlände 2014-2016 kostar 68 miljarder per år att försörja.\nAtt rikets penningar…',
  'RT @HelenVonPost: #svpol\nAntalet vittnesmål om den dårskap, som uppträder i planetens "godaste" land accelererar mot oändligheten.\nDe etnis…',
  'RT @hansoalfredsson: Statsvetaren och f d vice moderatledaren Lars F Tobisson, numera utan F, skriver intressant om spärren till riksdagen.…',
  'RT @staffand: En viktig förändring av grundlagen vad gäller tryckfrihet mm, "Lexbase", stoppades i ett sent sked i riksdagen av alliansen,…',
];

describe('cleanTweet', () => {
  it('should clean tweet from hashtags, mentions and links', () => {
    expect(cleanTweet('@hillary #marriage')).to.equal('');
    expect(cleanTweet(tweets[0])).to.equal('RT Dagens dilemma för socialister och alla andra självgoda människor. ');
  });
});
