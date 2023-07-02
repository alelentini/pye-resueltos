aDocs = [
	{"name": "gei_1-4_e2", "contents": `= Ejercicio 2
:author: Alejandro Lentini 
:email: alentini@frh.utn.edu.ar
:revdate: 2023-06-24
:imagesdir: ./images
:showtitle: true
:stem: latexmath
:toc:
:toc-title: Contenidos

+++<div id='info-ejercicio'></div>+++


== Enunciado

Dos máquinas rectificadoras A y B trabajan de tal manera que cuando se ajusta el diámetro requerido para la pieza rectifican según una distribución normal de valor medio 5mm y desviaciones estándar de 0.01mm y 0.02mm, respectivamente. La máquina A hace el 80% del trabajo y la B el resto. Se mezclan las piezas rectificadas y se supone que una pieza es buena si el diámetro D de una pieza está comprendido entre 5.00 y 5.02mm.

. ¿Cuál es la probabilidad de que una pieza extraída el azar resulte fuera de especificación?
. Si una pieza extraída al azar resulta fuera de especificación, ¿cuál es la probabilidad de que haya sido rectificada por la máquina B?
. Si se toma una muestra de 10 artículos de la mezcla de los fabricados por ambas máquinas, ¿cuál es la probabilidad de encontrar:
.. una pieza buena?
.. por lo menos una pieza buena?


== Planteo

image::gei_1-4_e2_1.PNG[align="center"]

+++<br>+++

Proceso de producción:

- Proceso de manufactura de una pieza (no especificada) cuyo _atributo de interés_ es el diámetro stem:[D] expresado en mm.

- El diámetro se rectifica con dos máquinas rectificadoras A y B.

- Rectificadora A:

** stem:[Q_A]: producción (cantidad de piezas producidas), [unidades].

** stem:[D_A]: v.a.c que representa el diámetro rectificado por la rectificadora A, [mm].

*** stem:[R_{D_A} = \\left\\lbrace d_A: d_A \\in \\mathbb{R} \\right\\rbrace] que constituye un recorrido _matemáticamente idealizado_ ya que en la realidad estaría sujeto a un intervalo cerrado de stem:[\\mathbb{R} > 0].

*** stem:[D_A \\sim N(μ_A=5;𝜎_A=0.01)]

- Rectificadora B:

** stem:[Q_B]: producción (cantidad de piezas producidas), [unidades].

** stem:[D_B]: v.a.c que representa el diámetro rectificado por la rectificadora B, [mm].

*** stem:[R_{D_B} = \\left\\lbrace d_B: d_B \\in \\mathbb{R} \\right\\rbrace] que constituye un recorrido _matemáticamente idealizado_ ya que en la realidad estaría sujeto a un intervalo cerrado de stem:[\\mathbb{R} > 0].

*** stem:[D_B \\sim N(μ_B=5;𝜎_B=0.02)]

- stem:[Q_T]: producción conjunta de ambas rectificadoras: stem:[Q_T = Q_A + Q_B], [unidades].

** stem:[\\frac{Q_A}{Q_T} = 0.8]

** stem:[\\frac{Q_B}{Q_T} = 0.2]

+++<br>+++

Selección al azar de una pieza:

- stem:[C]: evento que se produce cuando una pieza, seleccionada al azar de la producción conjunta de ambas rectificadoras, se encuentra dentro de especificación (_cumple o conforme_).

- stem:[\\overline{C}]: evento que se produce cuando una pieza, seleccionada al azar de la producción conjunta de ambas rectificadoras, se encuentra fuera de especificación (_no cumple o no conforme_).

- stem:[C] y stem:[\\overline{C}] son _sucesos disjuntos_ stem:[\\rightarrow C \\cap \\overline{C} = \\emptyset]

- stem:[A]: evento que se produce cuando una pieza, seleccionada al azar de la producción conjunta de ambas rectificadoras, fue rectificada por la rectificadora A.

- stem:[B]: evento que se produce cuando una pieza, seleccionada al azar de la producción conjunta de ambas rectificadoras, fue rectificada por la rectificadora B.

- stem:[A] y stem:[B] constituyen una _partición_ del _espacio muestral_ stem:[E \\rightarrow A \\cap B = \\emptyset \\land A \\cup B = E]

- El siguiente _diagrama de venn_ representa los eventos definidos:

image::gei_1-4_e2_2.PNG[align="center"]


== Resolución

+++<p class='pregunta'>1. ¿Cuál es la probabilidad de que una pieza extraída el azar resulte fuera de especificación?<p>+++

. Según los datos del problema, una pieza estará fuera de especificación, cuando el diámetro D no se halle comprendido entre 5.00 y 5.02mm.

. En términos del planteo y modelado realizado, una pieza estará fuera de especificación, cuando ocurra el evento stem:[\\overline{C}], por lo que la probabilidad solicitada es la probabilidad de ocurrencia de este evento, esto es, stem:[P(\\overline{C})].

. El evento stem:[\\overline{C}] ocurre cuando la pieza está fuera de especificación y fue rectificada por la máquina A, o bien cuando la pieza está fuera de especificación y fue rectificada por la máquina B, esto es, stem:[\\overline{C} = (\\overline{C} \\cap A) \\cup (\\overline{C} \\cap B)], donde se observa que ambos eventos son _disjuntos_.

. stem:[P(\\overline{C}) = P[(\\overline{C} \\cap A) \\cup (\\overline{C} \\cap B)\\] = P(\\overline{C} \\cap A)) + P(\\overline{C} \\cap B) = P(\\overline{C} | A)P(A) + P(\\overline{C} | B)P(B)]

.. stem:[P(A) = \\frac{Q_A}{Q_T} = 0.8]

.. stem:[P(B) = \\frac{Q_B}{Q_T} = 0.2]

.. stem:[P(\\overline{C} | A) = P(D_A < 5 \\cap D_A > 5.02) = F_{D_A}(5) + 1 - F_{D_A}(5.02) \\approx 0.5000 + 1 - 0.9772 \\approx 0.5228]

.. stem:[P(\\overline{C} | B) = P(D_B < 5 \\cap D_B > 5.02) = F_{D_B}(5) + 1 - F_{D_B}(5.02) \\approx 0.5000 + 1 - 0.8413 \\approx 0.6587]

.. stem:[P(\\overline{C}) = P(\\overline{C} | A)P(A) + P(\\overline{C} | B)P(B) \\approx 0.5228 * 0.8 + 0.6587 * 0.2 \\approx 0.4182 + 0.1317 \\approx 0.5499]

.. stem:[\\boxed{P(\\overline{C}) \\approx 0.5499}]

image::gei_1-4_e2_3.PNG[align="center"]

image::gei_1-4_e2_4.PNG[align="center"]

+++<hr>+++
+++<br>+++

+++<p class='pregunta'>2. Si una pieza extraída al azar resulta fuera de especificación, ¿cuál es la probabilidad de que haya sido rectificada por la máquina B?<p>+++

. Si una pieza extraída al azar resulta fuera de especificación, ya ocurrió el evento stem:[\\overline{C}], por lo que la probabilidad pedida es la siguiente _probabilidad condicional_ stem:[P(B | \\overline{C})], que se obtiene empleando el _teorema de Bayes_.

. stem:[P(B | \\overline{C}) = \\frac{P(B \\cap \\overline{C})}{P(\\overline{C})} = \\frac{P(\\overline{C} | B)P(B)}{P(\\overline{C})} \\approx \\frac{0.6587 * 0.2}{0.5499} \\approx 0.2395]

. stem:[\\boxed{P(B | \\overline{C}) \\approx 0.2395}]

+++<hr>+++
+++<br>+++

+++<p class='pregunta'>3.a Si se toma una muestra de 10 artículos de la mezcla de los fabricados por ambas máquinas, ¿cuál es la probabilidad de encontrar una pieza buena?<p>+++

. La extracción de la muestra puede ser modelizada mediante un _proceso de Bernoulli_, de forma tal que:

.. Cantidad de _ensayos Bernoulli_: stem:[n = 10].

.. _Probabilidad de éxito_ (la pieza cumple con la especificación): stem:[p=1-P(\\overline{C})=0.4501]

.. stem:[X]: v.a.c que representa la cantidad de piezas buenas obtenidas en la muestra stem:[\\rightarrow X \\sim Bi(n=10;p=0.4501)]

. Con la modelización anterior, la probabilidad de encontrar una pieza buena en la muestra seleccionada queda definida por stem:[P(X=1)].

. stem:[P(X=1) = bi(x=1;n=10;p=0.4501) \\approx 0.0207]

. stem:[\\boxed{P(X=1) \\approx 0.0207}]

image::gei_1-4_e2_5.PNG[align="center"]

+++<hr>+++
+++<br>+++

+++<p class='pregunta'>3.b Si se toma una muestra de 10 artículos de la mezcla de los fabricados por ambas máquinas, ¿cuál es la probabilidad de encontrar por lo menos una pieza buena?<p>+++

. Considerando la modelización indicada en la pregunta 3.a, la probabilidad solicitada viene dada por stem:[P(X \\geq 1)].

. stem:[P(X \\geq 1) = 1 - F_X(0) = 1 - bi(x=0;n=10;p=0.4501) \\approx 1 - 0.0025 \\approx 0.9975]

. stem:[\\boxed{P(X \\geq 1) \\approx 0.9975}]`},
	{"name": "gei_1-4_e3", "contents": `= Ejercicio 3
:author: Alejandro Lentini 
:email: alentini@frh.utn.edu.ar
:revdate: 2023-06-27
:imagesdir: ./images
:showtitle: true
:stem: latexmath
:toc:
:toc-title: Contenidos

+++<div id='info-ejercicio'></div>+++


== Enunciado

La duración de una llamada telefónica es una variable aleatoria con distribución exponencial de media 8 minutos. Si se factura un pulso cada dos minutos o fracción, hallar la función de probabilidad de la cantidad de pulsos facturados por llamada.


== Planteo

- stem:[T]: v.a.c que representa la duración de una llamada telefónica [min]:

** stem:[R_T = \\{ t : t \\in \\mathbb{R} > 0 \\}]

** stem:[T \\sim Ex(\\lambda = \\frac{1}{8} = 0.125)]

** stem:[fdp: f_T(t) = ex(t;\\lambda) = \\begin{cases}
\\lambda e^{-\\lambda t} & \\mbox{si $t>0; \\  \\lambda > 0$}\\\\
0 & \\mbox{para otro caso}
\\end{cases}]

** stem:[fda: F_T(T=t) = P(T ≤ t) = \\begin{cases}
  1 - e^{-λt}, & \\mbox{$t ≥ 0$}\\\\
  0, & \\mbox{$t < 0$}\\\\
\\end{cases}]

- X: v.a.d que representa la cantidad de pulsos facturados por llamada [unidades]:

** stem:[R_X = \\{ 1, 2, 3, ... \\} = \\mathbb{N}]

** stem:[X \\sim \\, ? \\, \\rightarrow \\, p_X(x) = \\, ?]

image::gei_1-4_e3_1.PNG[align="center"]


== Resolución

+++<p class='pregunta'>Hallar la función de probabilidad de la cantidad de pulsos facturados por llamada.<p>+++

. Según las definiciones del planteo, la _función de probabilidad de la cantidad de pulsos facturados por llamada_ no es otra cosa que la _función masa de probabilidad o función de probabilidad puntual (fmp) de_ stem:[X], que estará expresada en términos de las probabilidades de stem:[T], esto es, stem:[p_X(x) = f[F_T(t)\\]].

.. stem:[p_X(1) = P(X = 1) = P(0 \\leq T \\leq 2) = F_T(2) - F_T(0) = 1 - e^{-2λ} - 1 + e^0 = 1 - e^{-2λ}]

.. stem:[p_X(2) = P(X = 2) = P(2 \\leq T \\leq 4) = F_T(4) - F_T(2) = 1 - e^{-4λ} - 1 + e^{-2λ} = e^{-2λ} - e^{-4λ}]

.. stem:[p_X(3) = P(X = 3) = P(4 \\leq T \\leq 6) = F_T(6) - F_T(4) = 1 - e^{-6λ} - 1 + e^{-4λ} = e^{-4λ} - e^{-6λ}]

.. stem:[p_X(4) = P(X = 4) = P(6 \\leq T \\leq 8) = F_T(8) - F_T(6) = 1 - e^{-8λ} - 1 + e^{-6λ} = e^{-6λ} - e^{-8λ}]

. En función de lo anterior, y generalizando para stem:[T] se llega a:

.. stem:[P(t-2 \\leq T \\leq t) = F_T(t) - F_T(t-2) = e^{-λ(t-2)} - e^{-λt}]

. Para hallar stem:[p_X(x) = f[F_T(t)\\]] empleando la expresión anterior, es necesario expresar los valores de stem:[t] como una función de los valores de stem:[x], esto es, stem:[t = g(x)]:

[frame=none, width=40%, role=center]
|===
|stem:[x] |stem:[t-2] |stem:[t]

|stem:[1]
|stem:[0]
|stem:[2]

|stem:[2]
|stem:[2]
|stem:[4]

|stem:[3]
|stem:[4]
|stem:[6]

|stem:[4]
|stem:[6]
|stem:[8]

|...
|...
|...

|stem:[x]
|stem:[2(x-1)]
|stem:[2x]
|===

[start=4]
. De esta forma, stem:[p_X(x)] viene dada por:

.. stem:[\\boxed{p_X(x) = P(X = x) = P[2(x-1) \\leq T \\leq 2x\\] = F_T(2x) - F_T[2(x-1)\\] = e^{-2(x-1)λ} - e^{-2xλ} = e^{-2(x-1)λ}(1 - e^{-2λ})}]`},
	{"name": "gei_1-4_e4", "contents": `= Ejercicio 4
:author: Alejandro Lentini 
:email: alentini@frh.utn.edu.ar
:revdate: 2023-06-30
:imagesdir: ./images
:showtitle: true
:stem: latexmath
:toc:
:toc-title: Contenidos

+++<div id='info-ejercicio'></div>+++


== Enunciado

La víctima de un accidente morirá, a menos que reciba en los próximos 10.05 minutos una cantidad de sangre tipo https://es.wikipedia.org/wiki/Grupo_sangu%C3%ADneo["A Rh(\\+)", window="_blank"] que puede ser suministrada por un solo tipo de donante. Toma 2 minutos tipificar la sangre de un donante y 2 minutos realizar la transfusión. Hay un gran número de donantes disponibles cuya sangre no ha sido tipificada y 40% de ellos tienen sangre tipo A Rh(+).

. ¿Cuál es la probabilidad que se salve la víctima del accidente (evento stem:[S]) si solo se dispone de un equipo para tipificar la sangre?

. Sea stem:[T] la variable aleatoria que indica los minutos hasta que se completó la transfusión que salvó a la víctima. Definir el recorrido de stem:[T] y la distribución de probabilidad puntual. Nota: es importante usar el dato de que stem:[S] ocurrió.


== Planteo

- stem:[S]: _evento_ que ocurre cuando la víctima salva su vida, para lo que se necesita:

.. Identificación de un donante compatible con el tipo de sangre A Rh(+).

.. Transfusión de sangre.

.. stem:[P(S) = \\, ?]

- La necesidad de identificar un donante compatible de entre una población de donantes implica que las acciones anteriores corresponden a una _experiencia aleatoria_ que puede _modelarse_ como sigue:

.. Seleccionar un donante al azar de entre los donantes disponibles.

.. Tipificar la sangre del donante (duración 2 minutos).

.. Si el tipo de sangre del donante es A Rh(+), realizar la transfusión a la víctima del accidente (duración 2 minutos).

... stem:[A_i]: _evento_ que se produce cuando, en la i-ésima selección y tipificación, el donante tiene sangre tipo A Rh(+).

... stem:[P(A_i) = 0.4 \\, \\forall \\, i \\in \\mathbb{N} ]

.. Si el tipo de sangre del donante no es A Rh(+), repetir pasos de _selección al azar y tipificación de un donante_.

... stem:[\\overline{A_i}]: _evento_ que se produce cuando, en la i-ésima selección y tipificación, el donante no tiene sangre tipo A Rh(+).

... stem:[P(\\overline{A_i}) = 0.6 \\, \\forall \\, i \\in \\mathbb{N}]

- De esta forma, el _espacio muestral_ de la _experiencia aleatoria_ puede expresarse en función de los _eventos_ stem:[A_i] y stem:[\\overline{A_i}] según:

.. stem:[E = \\{ A_1, \\, \\overline{A_1} \\cap A_2, \\, \\overline{A_1} \\cap \\overline{A_2} \\cap A_3, \\, \\overline{A_1} \\cap \\overline{A_2} \\cap \\overline{A_3} \\cap ... \\cap \\overline{A_{i-1}} \\cap A_i, \\, ...\\}]

- Los _eventos_ stem:[A_i] y stem:[\\overline{A_i}] son _estadísticamente independientes_ entre sí, esto es:

.. stem:[P(\\overline{A_1} \\cap \\overline{A_2} \\cap \\overline{A_3} \\cap ... \\cap \\overline{A_{i-1}} \\cap A_i) = P(\\overline{A_1})P(\\overline{A_2})P(\\overline{A_3})...P(\\overline{A_{i-1}})P(A_i)]

+++<br>+++

image::gei_1-4_e4_1.PNG[align="center"]


== Resolución

+++<p class='pregunta'>1. ¿Cuál es la probabilidad que se salve la víctima del accidente (evento \\(S\\)]) si solo se dispone de un equipo para tipificar la sangre?<p>+++

. Del planteo, se observa que el _evento_ stem:[S] se compone de los siguientes _eventos fundamentales_ de stem:[E]:

.. stem:[S = A_1 \\cup (\\overline{A_1} \\cap A_2) \\cup (\\overline{A_1} \\cap \\overline{A_2} \\cap A_3) \\cup (\\overline{A_1} \\cap \\overline{A_2} \\cap \\overline{A_3} \\cap A_4)]


. Como los _eventos fundamentales_ de stem:[E] son _disjuntos_ entre sí, y considerando la _independencia estadística_ planteada para los _sucesos_ stem:[A_i] y stem:[\\overline{A_i}], la probabilidad pedida queda entonces determinada por:

.. stem:[\\begin{equation} \\begin{split}
P(S) &= P(A_1) + P(\\overline{A_1} \\cap A_2) + P(\\overline{A_1} \\cap \\overline{A_2} \\cap A_3) + P(\\overline{A_1} \\cap \\overline{A_2} \\cap \\overline{A_3} \\cap A_4) \\\\
  &= P(A_1) + P(\\overline{A_1})P(A_2) + P(\\overline{A_1})P(\\overline{A_2})P(A_3) + P(\\overline{A_1})P(\\overline{A_2})P(\\overline{A_3})P(A_4) \\\\
  &= 0.4 + 0.6*0.4 + 0.6^2*0.4 + 0.6^3*0.4 = 0.8704
\\end{split} \\end{equation}]

.. stem:[\\boxed{P(S) = 0.8704}]

. Otra manera de resolver stem:[P(S)] es identificando que la _experiencia aleatoria_ planteada puede _modelarse con una distribución geométrica_:

.. stem:[Y]: v.a.d que representa la cantidad de selecciones y tipificaciones (_ensayos_) requeridos hasta obtener el primer tipo A Rh(+) (_éxito_) [unidades].

... stem:[R_Y = \\{ 1, 2, 3, ... \\} = \\mathbb{N}]

... stem:[Y \\sim Ge(p) \\rightarrow \\, p = P(A_i) = 0.4]

... stem:[fmp: p_Y(y) = P(Y=y) = g(y;p) = \\begin{cases}
p(1-p)^{y-1} & \\mbox{si $y=1,2,3,...$}\\\\
0 & \\mbox{para otro caso}
\\end{cases}]

... stem:[fda: F_Y(y) = P(Y \\leq y) = G(y;p) = \\sum_{z=1}^{y}{g(z;p)}]

.. Considerando el _modelo geométrico_ planteado, y teniendo en cuenta que el evento stem:[S] puede ocurrir hasta la cuarta selección del donante y tipificación de sangre, la probabilidad buscada queda especificada como sigue:

... stem:[P(S) = F_Y(4) = P(Y \\leq 4) = G(y;0.4) = \\sum_{z=1}^{4}{g(z;0.4)} = 0.8704]

... stem:[\\boxed{P(S) = 0.8704}]

image::gei_1-4_e4_2.PNG[align="center"]


+++<p class='pregunta'>2. Sea \\(T\\) la variable aleatoria que indica los minutos hasta que se completó la transfusión que salvó a la víctima. Definir el recorrido de \\(T\\) y la distribución de probabilidad puntual. Nota: es importante usar el dato de que \\(T\\) ocurrió.<p>+++

. stem:[T]: v.a.d que representa la cantidad de minutos hasta qye se completó la transfusión que salvó a la víctima stem:[\\, \\rightarrow \\, S] ocurrió.

.. stem:[R_T = \\{ 4, 6, 8, 10 \\}]

.. stem:[fmp: f_T(t) = p_T(t) = P(T=t) = \\, ?]

. Para halla la _función massa de probabilidad_ stem:[p_T(t)] es necesario determinar las probabilidades de stem:[T] en cada uno de los valores de su _recorrido_:

.. stem:[p_T(4) = P(T=4) = P(A_1 \\, | \\, S ) = \\frac{P(A_1 \\cap S )}{P(S)} = \\frac{P(A_1)}{P(S)} = \\frac{0.4}{0.8704} \\approx 0.4596]

.. stem:[p_T(6) = P(T=6) = P(\\overline{A_1} \\cap A_2 \\, | \\, S ) = \\frac{P(\\overline{A_1} \\cap A_2 \\cap S )}{P(S)} = \\frac{P(\\overline{A_1} \\cap A_2)}{P(S)} = \\frac{0.6*0.4}{0.8704} \\approx 0.2757]

.. stem:[p_T(8) = P(T=8) = P(\\overline{A_1} \\cap \\overline{A_2} \\cap A_3 \\, | \\, S ) = \\frac{P(\\overline{A_1} \\cap \\overline{A_2} \\cap A_3 \\cap S )}{P(S)} = \\frac{P(\\overline{A_1} \\cap \\overline{A_2} \\cap A_3)}{P(S)} = \\frac{0.6^2*0.4}{0.8704} \\approx 0.1654]

.. stem:[p_T(10) = P(T=10) = P(\\overline{A_1} \\cap \\overline{A_2} \\cap \\overline{A_3} \\cap A_4 \\, | \\, S ) = \\frac{P(\\overline{A_1} \\cap \\overline{A_2} \\cap \\overline{A_3} \\cap A_4 \\cap S )}{P(S)} = \\frac{P(\\overline{A_1} \\cap \\overline{A_2} \\cap \\overline{A_3} \\cap A_4)}{P(S)} = \\frac{0.6^3*0.4}{0.8704} \\approx 0.0933]

+++<br>+++

[frame=none, width=40%, role=center]
|===
|stem:[t] |stem:[p_T(t) = P(T=t)]

|stem:[4]
|stem:[0.4596]

|stem:[6]
|stem:[0.2757]

|stem:[8]
|stem:[0.1654]

|stem:[10]
|stem:[0.0933]
|===`},
	{"name": "indice", "contents": `= Índice
:author: Alejandro Lentini 
:email: alentini@frh.utn.edu.ar
:revdate: 2023-06-24
:imagesdir: ./images
:showtitle: true
:stem: latexmath
:toc:
:toc-title: Contenidos


== Documentos Relacionados

. +++<a href='#' onclick='goToDocSec("introduccion", "")' title='Ir a documento'>Introducción</a>+++

. +++<a href='#' onclick='goToDocSec("planteo-resolucion", "")' title='Ir a documento'>Planteo y Resolución de Ejercicios</a>+++


== Problemas y Ejercicios


++++
<div id='tabla-ejercicios-div' class='table-responsive'>
    <table class='table table-hover table-sm align-middle table-borderless'>
        <thead id='tabla-ejercicios-header' class='align-middle'>
            <tr>
                <th class='text-center'>Fuente</th>
                <th class='text-center'>Ejercicio</th>
                <th class='text-center'>Unidades</th>
                <th class='text-center'>Temas</th>
            </tr>
        </thead>
        <tbody id='tabla-ejercicios-body'></tbody>
    </table>
</div>
++++
`},
	{"name": "introduccion", "contents": `= Resueltos Probabilidad y Estadística
:author: Alejandro Lentini 
:email: alentini@frh.utn.edu.ar
:revdate: 2023-06-28
:imagesdir: ./images
:showtitle: true
:stem: latexmath
:toc:
:toc-title: Contenidos


== Introducción

El presente trabajo contiene la resolución de una selección de ejercicios de la asignatura _Probabilidad y Estadística_ tomados de:

- Guías de ejercitación y trabajos prácticos.

- Exámenes parciales y finales.

- Libros de texto de la asignatura.

- Otras fuentes.

+++<br>+++

****
[IMPORTANT]
====
Se recomienda al alumno que complemente el presente texto con otros trabajos similares, como por ejemplo los ejercicios resueltos de los libros de texto tradicionales de la asignatura, así como libros enfocados específicamente en el _planteo y la resolución de problemas y ejercicios_:

- Probabilidad. LIPSCHUTZ, S. Serie Schaum.
- Estadística. SPIEGEL, M., STEPHENS L. Serie Schaum.
- Teoría y Problemas de Probabilidad y Estadística. SPIEGEL, M. Serie Schaum.
====
****


== Nota Aclaratoria

****
WARNING: Este material no debe tomarse como una prescripción de la única forma de resolver los problemas y ejercicios, dado que muchos de ellos pueden abordarse y resolverse por otros caminos, obviamente arribando al mismo resultado.
****

+++<br>+++

****
IMPORTANT: Para un uso eficaz de este trabajo, así como para maximizar los resultados del proceso de aprendizaje, se recomienda al alumno que emplee este material teniendo en cuenta las recomendaciones indicadas en la sección *Consejos para el uso de los resueltos*.
****


== Instrucciones de Uso

Se recomienda tener en cuenta las siguientes instrucciones para una navegación eficaz de los contenidos de este documento:

. Emplear el *Índice* para explorar el listado de los contenidos disponibles.

. Explorar el listado de los contenidos disponibles, los cuales se encuentran agrupados en dos categorías, a saber:

.. *Documentos relacionados*: introducción a los _resueltos de probabilidad y estadística_ (este documento), notas y consejos sobre el _planteo y resolución de problemas_, etc.

.. *Problemas y Ejercicios*: listado de los problemas y ejercicios resueltos, indicando fuente, número y título de problema/ejercicio, y las unidades temáticas y temas abordados.

. Seleccionar el problema/ejercicio de interés, y _hacer click_ sobre su número y título para visualizar su resolución.

. Desde cualquier documento, al _hacer click_ sobre el título *Resueltos Probabilidad y Estadística* (ubicado en la parte superior izquierda de la pantalla) se cargará el *Índice*.


== Consejos para el Proceso de Aprendizaje

. *Comprender la actividad de plantear y resolver problemas* conociendo los diferentes pasos necesarios, así como las principales heurísticas de resolución, tanto las generales como las específicas a la probabilidad y estadística.

. *Comprender la teoría subyacente a cada problema*. No es posible aplicar aquello que se desconoce, o que no se comprende del todo.

. *Intentar resolver el problema por uno mismo*. Identificar cuáles son las dificultades para llegar a la resolución esperada:

.. ¿No se comprende el enunciado y/o las consignas?

.. ¿No es posible plantear el problema en términos matemáticos? ¿No se tiene una estrategia de solución?

.. ¿El resultado obtenido no es el correcto? ¿Se verificó que los pasos sean correctos?

. *Consultar la resolución*, no con una lectura pasiva para memorizar, sino _con una actitud activa y crítica preguntando continuamente los porqués de cada paso_:

.. ¿Cómo se planteó el problema? ¿Por qué está planteado de esa forma y no de otra?

.. ¿El lenguaje matemático empleado para modelizar el problema es correcto y preciso?

.. ¿Se emplearon todos los datos? ¿La derivación de datos o resultados indirectos es correcta?

.. ¿Cuál es la teoría subyacente que se está aplicando: principios, teoremas, etc.?

.. ¿Cuál es la estrategia de solución empleada?

.. ¿La resolución es correcta en cada uno de sus pasos?

.. ¿Es posible llegar al mismo resultado empleando otro camino?`},
];