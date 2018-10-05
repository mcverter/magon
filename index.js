'use strict';
const e = React.createElement;

const Panel = ({text}) => (
  <div style={{display: 'flex', flexGrow: 1}}>
    <pre>
      {text}
    </pre>
  </div>
);

const EditablePanel = ({text, changeText}) => (
  <div style={{display: 'flex', flexGrow: 1}}>
    <textarea value={text} onChange={changeText} />
  </div>
)

class MagonTranslation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      english : englishTranslation(),
      spanish: spanishOriginal(),
      editingTranslation: false
    }
  }
  toggleEditing = () => {
    const nextEditing = !this.state.editingTranslation;
    console.log ('next edit', nextEditing)
    /* Will start editing */
    if (nextEditing) {
      this.setState({
        editingTranslation: true
      })
    }
    /* Will finish editing -- save text */
    else {
      // const currEnglish = this.state.english;
      this.setState({
        editingTranslation: false,
        //   english: currEnglish
      })
    }
  };

  _storeEdited = (e) => {
    this.setState({
      english: e.target.value
    })
  };
  render() {
    const {spanish, english, editingTranslation} = this.state;

    return (
      <div>
        <button onClick={this.toggleEditing}>
          Edit English
        </button>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Panel text={spanish}/>
          {
            editingTranslation ?
              <EditablePanel text={english} changeText={this._storeEdited}/> :
              <Panel text={english}/>
          }
        </div>
      </div>
    );
  }
};

const domContainer = document.querySelector('#magon_translation');
ReactDOM.render(e(MagonTranslation), domContainer);



function englishTranslation () {
  return `
  The Mexican People Are Ready for Communism

The inhabitants of the state of Morelos (1), as well as those
of Southern Puebla, of Michoacán, Durango, Jalisco, Yucatán
and other states, 
/** AWKWARD  
in which vast territorial expanses have
been invaded by proletarian multitudes  
who have dedicated themselves there (luegteo) to cultivate them, **/ 
will demonstrate to the entire world, 
with through deeds, that society does not need experts(2) society to resolve the problem of hunger.

To achieve the practical result to taking possesion 
of the land and the instruments of work in Mexico, 
there was no need for "leaders" or "friends" of the working class,
nor did they lack "paternal decrees",
"wise 
laws" nor anything like that. Action has done it and 
that is doing everything.  Mexico marches towards communism, 
more readily /** aprisas */ that even we, the most inspired revolutionaries, had hoped
and that the Government an the Bourgeoisie now find themselves
without knowing that to do in the presence
of the facts which cry very far away still than they have realized.

It has been only three months since Juan Sarabia (3), in a
extensive and fastidious open letter opened directed at me
and which was published in fact by all the bourgeois press in Mexico,
said to me that the working class did not understand that which we predicted
and the people would be satisfied with the conquest of the
revolt of Madero:  the electoral ballot.  The facts have
demonstrated that we are not some dupes that the liberals and that
we fight convecide that our action and our propaganda
responds to the necessities and the mode of thinking of
the poor class of Mexico.

The Mexican people hate, by instinct, Authority
and the Bourgeoisie.  All that hey have lived in Mexico
have been ceriorado that they did not have an individual
more cordially hated that the soldier,
that he word "Governor"
filled with nervousness of the sensible persons, tat the soldier,
in all parts admired and applauded, is seen with antipathy
and depreciation; that all persons who did not gain the sustenance
with work of their hands are hated.

This is already more than sufficient for a revolution social
in character economic and anti-authoritarian; but there is more.
In Mexico live some four hundred thousand Indians [indios],
who have had some twenty or twenty-five years living in communities,
possessing in common the lands, the waters, and the forests.
Mutual aid was the rule in these communities, in which
the authority was only known when the agent of
recuadacion of rents made his periodic apparition or when or
when the rural police arrived in the search of adult males
to make them enlist in the federal army.  In these communities
there were no judged, nor mayors, nor jailers, nor
any polilla of this class.  All had the right to the earth,
the water for los regadios, the forest for the wood and the lumber madera
for the construction of their hundes.  The arados traveled from hand to hand,
just like the yuntas that bueyes.  Each family worked
in extension fhte earth witch they calculated would be sufficient
to produce what they needed, and the work of escarda and raising
the harvests they did in common, reuniting all of the community,
today to reap the harvest of Pedro;
tomorrow to reap that of Juan, and so forth.  To build a hut,
they put their hands to work all the members of the
community.  These sensible (sencillas) customs lasted until,
strong to the authority for the pacification complete of thcountry,
could guarantee to the bourgeoisie the prosperity of their
businesses.  The generals of the political revolts would
receive great
extensions of terrain; the landowners would ensanceraon the
limits of their fiefdoms; the most vile politicastros they would obtain
as bribes immense terrains, and the foreign adventurers
would obtain concessions of lands, forests, waters, of
all, in the end, remaining for our native brothers without a
palm of earth, without the right to take neither from the forest
not ore than a tiny branch of a tree, in the most abject misery,
despojando of all that which is theirs 

As far as the mixed-race population, which is the form
of the majority of the Mexican inhabitants,
with the exception those who live in the great cities and
the important villagers, count also with
communal lands, forests, and free waters, the same as
the indigenous population.  Mutual aid is equally the rule;
houses are created in common, the money is
almost always never in necessity,
because they have been and exchange of products, but it has make
the peace, the authority se robustecio, and the bandits of
the police and the money they rob descaraamente the lands,
the forests, everything.  There are not but four years, still could see it
in the periodicals of the oppoisiotnthat the norhtamerican X,
o the German or Spanish Z has been encircleied
a population entire of the limits of "their" property
with the help of authority.

If you see, then, that the people Mexican are ready to come
to communism, because they have practiced it, at least in part,
for centuries, and that explains which,  eve when
their majority is illiterate, understand that the best thing
is to take part in these electoral farces to elevate oppressors,
it is preferable to take possession of the land, and that is
taking with a great scandal of the bourgeois thieves.

Now it only remains that he worker takes possession of the
workshop, the factory, the main, the fundicion, of the railways,
of the something, of all in a word, that they do not recognize
bosses of any class that hat will be the final of the present
movement.  Forward, comrades

RICARDO FLORES MAGON ("Regeneration", 2 September 1911)

(1) Emiliano Zapata arose in Morelos ...
(2) cientificos were the positivism best way to manage society
(3) Juan Sarabia was one of the founders of the JOPLM with Ricardo Flores Magon.  They had a split.  He published an open letter accusing Flores Magon for being too radical for pushing on towards revolution.
(4) 
  `;
}

function spanishOriginal() {
  return `
EL PUEBLO MEXICANO ES APTO PARA EL COMUNISMO

LOS HABITANTES del estado de Morelos, así como los del
Sur de Puebla, de Michoacán, Durango, Jalisco, Yucatán
y otros Estados, en que vastas extensiones territoriales han
sido invadidas por multitudes proletarias que se han dedi.
cado desde luego a cultivarlas, demuestran al mundo entc3-
ro, con hechos, que no se necesita una sociedad de sabio<
para resolver el problema del hambre.

Para llegar al resultado práctico de la toma de posesitn
de la tierra y de los instrumentos de trabajo en México, no
se ha necesitado de "líderes", de "amigos" de la clase traba-
jadora, ni han hecho falta "decretos paternales", "leyes
sabias" ni nada de eso. La acción lo ha hecho y lo está
haciendo todo. México marcha hacia el comunismo más apri-
s a de lo que esperábamos los más exaltados revoluciona-
rios y el Gobierno y la Burguesía se encuentran ahora sin
saber qué hacer en presencia de hechos que creía muy le-
janos todavía de que se realizasen.

No hace aún tres meses que Juan Sarabia, en una ex-
tensa y fastidiosa carta abierta dirigida a mí y que fue
publicada por casi toda la Prensa burguesa de México, me
decía que la clase trabajadora no entendía lo que predica-
mos y que el pueblo estaba satisfecho con la conquista de
la revuelta de Madero: la boleta electoral. Los hechos van
demostrando que no somos unos ilusos los liberales y que
luchamos convencidos de que nuestra acción y nuestra 
propaganda responden a las necesidades y al modo de pensar
de la clase pobre de México.

El pueblo mexicano odia, por instinto, a la Autoridad
y a la Burguesía. Todo aquel que haya vivido en México se
habrá cerciorado de que no hay individuo
más cordialmente odiado que el gendarme; q
ue la palabra "Gobierno" llena
de inquietud a las personas sencillas: que el soldado, en
todas partes admirado y aplaudido, es visto con antipatía
y desprecio; que toda persona que no se gana el sustento
con el trabajo de sus manos es odiada.

Esto es ya más que suficiente para una revolución social
de carácter económico y antiautoritario; pero hay más. En
México viven unos cuatro millones de indios, que hasta
hace veinte o veinticinco años vivian en comunidades, po-
seyendo en común las tierras, las aguas y los bosques. El
apoyo mutuo era la regla en esas comunidades, en las que
la Autoridad sólo era sentida cuando el agente de la re-
caudación de rentas hacía su aparición periódica o cuando
los rurales llegaban en busca de varones para hacerlos in-
gresar por la fuerza al Ejército. En estas comunidades no
había jueces, ni alcaldes, ni carceleros, ni ninguna polilla
de esa clase. Todos tenían derecho a la tierra, al agua para
los regadíos, al bosque para la leña y a la madera para
construir los jacales. Los arados andaban de mano en mano,
así como las yuntas de bueyes. Cada familia labraba la ex-
tensión de terreno que calculaba ser suficiente para produ-
cir lo necesario, y el trabajo de escarda y de levantar las
cosechas se hacia en común, reuniéndose toda la comuni-
dad, hoy, para levantar la cosecha de Pedro; mañana para
levantar la de Juan y así sucesivamente. Para fabricar un
jacal, ponían manos a la obra todos los miembros de la
comunidad. Estas sencillas costumbres duraron hasta que,
fuerte la Autoridad por la pacificación completa del país,
pudo garantizar a la burguesía la prosperidad de sus nego-
cios. Los generales de las revueltas políticas recibieron gran-
des extensiones de terreno; los hacendados ensancharon los
limites de sus feudos; los más viles politicastros obtenian
como baldios terrenos inmensos, y los aventureros extran-
jeros obtuvieron concesiones de tierras, bosques, aguas, de
todo, en fin, quedando nuestros hermanos indios sin un
palmo de tierra, sin derecho a tomar del bosque ni la más
pequeña rama de un árbol, en la miseria más abyecta, des-
pojados de todo lo que era de ellos.

En cuanto a la población mestiza, que es la que forma la
mayoria de los habitantes de la República Mexicana, con
excepción de la que habitaba las 'grandes ciudades y los
pueblos de alguna importancia, contaba igualmente con tie-
rras comunales, bosques y agua libres, lo mismo que la
población indígena. El mutuo apoyo era igualmente la regla;
las casas se fabricaban en común; la moneda casi no era ne-
cesaria, porque habia intercambio de productos; pero se hizo
la paz, la Autoridad se robusteció, y los bandidos de la po-
lítica y del dinero robaron descaradamente las tierras, los
bosques, todo. No hace aún cuatro años, todavía podia verse
en los periódicos de oposición que el norteamericano X, o
el alemán Y o el español Z habian encerrado a una pobla-
ción entera en los limites de "su" propiedad con la ayuda
de la autoridad.

Se ve, pues, que el pueblo mexicano es apto para llegar
al comunismo, porque lo ha practicado, al menos en parte,
desde hace siglos, y eso explica por qué, aun cuando en su
mayoría es analfabeto, comprende que mejor que tomar
parte en farsas electorales para elevar verdugos, es preferi-
ble tomar posesión de la tierra, y la está tomando con gran-
de escándalo de la ladrona Burguesia.

Ahora sólo resta que el obrero tome posesión de la fá-
brica, del taller, de la mina, de la fundición. del ferrocarril,
del barco, de todo en una palabra; que no se reconozcan
amos de ninguna clase y ese será el final del presente mo-
vimiento. ;Adelante, camaradas!

RICARDO FLORES MAGÓN
(De "Regeneración", 2 de septiembre de 1911).

`;
}


