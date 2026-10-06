const TIPOS = {
  disparo: "Disparo o violencia directa",
  violencia: "Retención o paliza policial",
  calabozo: "Muerte en aislamiento o calabozo",
  medico: "Falta de atención médica",
  deportacion: "Asfixia durante deportación",
  persecucion: "Persecución policial",
  abandono: "Abandono institucional",
  desconocido: "Sin información"
};

const CASOS = [
  {
    id: "lucrecia-perez",
    nombre: "Lucrecia Pérez",
    fecha: "1992-11-13",
    lugar: "Madrid",
    tipo: "disparo",
    causa: "Asesinato racista; condenados",
    texto: "Asesinada a balazos, por Luis Merino guardia civil, acompañado de tres menores neonazis. Considerado el primer crimen racista reconocido en España.",
    fuentes: ["https://english.elpais.com/elpais/2017/06/23/trans_iberian/1498204402_391675.html"]
  },

  {
    id: "francis-vadillo",
    nombre: "Francis Vadillo Santamaría",
    fecha: "1979-06-10",
    lugar: "Discoteca Apolo, Iztieta (País Vasco)",
    tipo: "disparo",
    causa: "Homicidio imprudente; 9 meses",
    texto: "Muerta de un disparo de Antonio Caba Laguna, agente de la Policía Nacional fuera de servicio. Se pedían 6 años; la sentencia fue de 9 meses y el agente no pisó prisión.",
    fuentes: ["https://www.lavozdelarepublica.es/2019/06/40-anos-del-asesinato-de-francis-el.html"]
  },

  {
    id: "erika-perez",
    nombre: "Erika Sigfrido Pérez",
    fecha: "1985-04-14",
    lugar: "Barcelona",
    tipo: "disparo",
    causa: "Homicidio doloso",
    texto: "Mujer trans venezolana, muerta de un balazo de José Antonio Sánchez García, guardia civil que la contactó para servicios sexuales y trató de esconder el cuerpo.",
    fuentes: ["https://coflhee.blogspot.com/1986/01/documentacion-violencia-condena-de-11.html"]
  },

  {
    id: "juan-martinez-galdeano",
    nombre: "Juan Martínez Galdeano",
    fecha: "2005-07-24",
    lugar: "Cuartel de Roquetas de Mar (Almería)",
    tipo: "violencia",
    causa: "Delirio agitado",
    texto: "Pidió ayuda tras un accidente de coche. Testigos describen una paliza de guardias civiles, incluso con porras eléctricas, antes de ser llevado al cuartel. Uno de los primeros casos de muerte bajo custodia por «delirio agitado» en España.",
    fuentes: ["https://www.thetimes.com/travel/destinations/europe-travel/spain/civil-guards-beat-man-to-death-9gnlq0b7qm0"]
  },

  {
    id: "osamuyi-akpitaye",
    nombre: "Osamuyi Akpitaye",
    fecha: "2007-06-09",
    lugar: "Vuelo de deportación Madrid–Lagos",
    tipo: "deportacion",
    causa: "Asfixia",
    texto: "Murió por asfixia durante su deportación, bajo custodia policial.",
    fuentes: ["https://www.elperiodicoextremadura.com/sociedad/2007/06/11/nigeriano-murio-iba-deportado-presentaba-45365931.html"]
  },

  {
    id: "jonathan-sizalima",
    nombre: "Jonathan Sizalima",
    fecha: "2009-06-18",
    lugar: "Calabozo de extranjería, Barcelona",
    tipo: "calabozo",
    causa: "Suicidio",
    texto: "Joven ecuatoriano de 20 años, apareció ahorcado en su celda un día después de ser arrestado para iniciar un preceso de expulsión. La familia no reconoció como suya la camiseta, ni pudo ver el cuerpo. Su madre había sido informada de que saldría en libertad horas antes de su muerte.",
    fuentes: ["https://www.eluniverso.com/2009/07/07/1/1360/llega-cuerpo-un-joven-ahorcado.html"]
  },

  {
    id: "mohamed-abagui",
    nombre: "Mohamed Abagui",
    fecha: "2010-05-13",
    lugar: "CIE de Barcelona",
    tipo: "calabozo",
    causa: "Sucidio",
    texto: "Joven marroquí de 22 años, hallado muerto, presuntamente ahorcado con una sábana mientras esperaba su expulsión en un centro de Barcelona (ES). Testigos decían que estaba en aislamiento; sus familiares habían reclamado tratamiento por su estado físico y psicológico.",
    fuentes: ["https://pdf.elcorreo.com/documentos/2019/fallecidos-refugiados-durango.pdf"]
  },

  {
    id: "samba-martine",
    nombre: "Samba Martine",
    fecha: "2011-12-19",
    lugar: "Hospital Doce de Octubre (desde el CIE de Aluche, Madrid)",
    tipo: "medico",
    causa: "Falta de atención Médica",
    texto: "Murió por falta de atención médica de VIH. Horas antes, los sanitarios le recomendaron «ejercicios de respiración».",
    fuentes: ["https://www.eldiario.es/desalambre/grito-ahogado-samba-martine-intentos_1_1514274.html"]
  },

  {
    id: "idrissa-diallo",
    nombre: "Idrissa Diallo",
    fecha: "2012-01-06",
    lugar: "CIE de Barcelona",
    tipo: "medico",
    causa: "Paro cardíaco",
    texto: "Murió de un paro cardíaco tras solicitar asistencia médica sin éxito.",
    fuentes: ["https://www.elnacional.cat/es/cultura/idrissa-diallo-documental-cie-extrangeria_441663_102.html"]
  },

  {
    id: "aramis-manukyan",
    nombre: "Aramis Manukyan",
    fecha: "2013-12-03",
    lugar: "CIE de Barcelona",
    tipo: "calabozo",
    causa: "Suicidio",
    texto: "Armenio de 42 aós, padre de una niña de 7. Hallado muerto en una celda de aislamiento, oficialmente suicidio. Los testigos que denunciaban una agresión policial previa fueron deportados antes de declarar.",
    fuentes: ["https://ccar.cat/wp-content/uploads/2013/12/comunicado_CIE_Barcelona0912_cast.pdf"]
  },

  {
    id: "miguel-angel-fernandez",
    nombre: "Miguel Ángel Fernández",
    fecha: "2016-04-06",
    lugar: "Calabozos de la Policía Nacional, Zaragoza",
    tipo: "violencia",
    causa: "",
    texto: "Detenido dos días antes por dos robos. El parte médico no recogió un hematoma en la cabeza ni los sedantes inyectados. Quince minutos de grabación de su ingreso continúan «extraviados».",
    fuentes: ["https://www.poderjudicial.es/portal/site/cgpj/menuitem.65d2c4456b6ddb628e635fc1dc432ea0/?vgnextoid=765989df32a1b510VgnVCM1000006f48ac0aRCRD&vgnextchannel=45b9fdcc164f0310VgnVCM1000006f48ac0aRCRD&vgnextfmt=default&vgnextlocale=eu&perfil=3"]
  },

  {
    id: "elhadji-ndiaye",
    nombre: "Elhadji Ndiaye",
    fecha: "2016-10-25",
    lugar: "Comisaría, Arrotxapea (Pamplona)",
    tipo: "violencia",
    causa: "",
    texto: "Murió en comisaría tras ser arrestado violentamente.",
    fuentes: ["https://sosracismo.eu/sos-racismo-navarra-concentracion-en-memoria-de-elhadji-ndiaye/"]
  },

  {
    id: "mohamed-bouderbala",
    nombre: "Mohamed Bouderbala",
    fecha: "2017-12-29",
    lugar: "CIE improvisado de Archidona",
    tipo: "calabozo",
    causa: "",
    texto: "Argelino, 37 años. Murió en extrañas circunstancias tras 18 horas en aislamiento.",
    fuentes: ["https://medios.mugak.eu/noticias/noticia/545233"]
  },

  {
    id: "stefan-lache",
    nombre: "Stefan Lache",
    fecha: "2018-04-15",
    lugar: "Comisaría de Padre Amigo, Carabanchel (Madrid)",
    tipo: "violencia",
    causa: "Muerte natural",
    texto: "Detenido por no llevar los papeles encima. Caso archivado como «muerte natural» pese a imágenes de una retención violenta. La familia pagó hasta 15.000 € para llegar al Tribunal Europeo de Derechos Humanos.",
    fuentes: ["https://info.nodo50.org/Mas-de-tres-anos-en-busca-de-respuestas-y-justicia-por-la-muerte-de-un-joven-en.html"]
  },

  {
    id: "marouane-abouobaida",
    nombre: "Marouane Abouobaida",
    fecha: "2019-07-15",
    lugar: "CIE de Valencia",
    tipo: "calabozo",
    causa: "Suicidio",
    texto: "Encerrado en aislamiento tras una pelea. Una hora antes de morir avisó por escrito al director de sus dolores intensos. Oficialmente suicidio, cinco días antes de cumplir 24 años.",
    fuentes: ["https://www.lavanguardia.com/local/valencia/20211204/7906650/monolito-fallecido-cie-valencia-marouane-abouobaida.html"]
  },

  {
    id: "eleazar-garcia-hernandez",
    nombre: "Eleazar García Hernández",
    fecha: "2019-09-08",
    lugar: "Estadio El Molinón, Gijón",
    tipo: "violencia",
    causa: "Paro cardíaco",
    texto: "Retenido violentamente por 8 guardias de seguridad privada y 4 policías locales; trasladado al hospital en lugar de usar la UVI del estadio, donde volvió a ser retenido. Murió de un paro cardíaco.",
    fuentes: ["https://elcierredigital.com/sucesos/muerte-molinon-discapacitado-eleazar-informe-forense-demoledor"]
  },

  {
    id: "imad-eraffali",
    nombre: "Imad Eraffali",
    fecha: "2020-01-23",
    lugar: "Comisaría de Algeciras",
    tipo: "calabozo",
    causa: "Suicidio",
    texto: "23 años. Su muerte fue catalogada como suicidio.",
    fuentes: ["https://www.lavanguardia.com/vida/20200228/473822698246/piden-investigar-el-suicidio-de-un-joven-marroqui-en-un-calabozo-en-algeciras.html"]
  },

  {
    id: "daniel-jimenez",
    nombre: "Daniel Jimenez",
    fecha: "2020-06-01",
    lugar: "Comisaría de Algeciras",
    tipo: "calabozo",
    causa: "Suicidio",
    texto: "Su muerte se catalogó como suicidio una hora después de llamar a su padre para decirle que saldría a la mañana siguiente. Se encontró un guante de látex en su estómago.",
    fuentes: ["https://www.diarioarea.com/algeciras/se-suicido-en-los-calabozos-de-algeciras-la-familia-de-daniel-consigue-que-se-reabra-el-caso/"]
  },

  {
    id: "moussa-sylla",
    nombre: "Moussa Sylla",
    fecha: "2023",
    lugar: "Ceuta, frente al CETI",
    tipo: "abandono",
    causa: "Suicidio",
    texto: "Joven de 20 años. Se suicidó tras ser expulsado del CETI por una pelea, en 2023, sin alternativa habitacional.",
    fuentes: ["https://elfarodeceuta.es/moussa-sylla-muerte-ceti/"]
  },

  {
    id: "mahmoud-bakhum",
    nombre: "Mahmoud Bakhum",
    fecha: "2024-12-29",
    lugar: "Río Guadalquivir, Sevilla",
    tipo: "persecucion",
    causa: "Ahogamiento",
    texto: "Vendedor ambulante senegalés de 43 años. Murió ahogado intentando escapar de la Policía Local en un operativo contra la venta ambulante.",
    fuentes: ["https://www.briega.org/noticias/mahmoud-bakhum-vecino-sevilla-muere-ahogado-guadalquivir-mientras-era-perseguido-por/"]
  },

  {
    id: "juan-antonio-hans",
    nombre: "Juan Antonio Hans",
    fecha: "2025-01-23",
    lugar: "Hotel en Estepona (Málaga)",
    tipo: "violencia",
    causa: "",
    texto: "Sufrió un brote psicótico; en lugar de una ambulancia acudieron 8 policías a retenerle. Testigos afirman que no había sido violento y decía «me ahogo». No dejaron ver el cuerpo a los familiares.",
    fuentes: ["https://asest.es/story/muere-empresario-estepona/"]
  },

  {
    id: "brian-rios",
    nombre: "Brian Rios",
    fecha: "2022-08-20",
    lugar: "Rubí (Barcelona)",
    tipo: "violencia",
    causa: "",
    texto: "Muerto tras una detención arbitraria, sedación y paliza policial. A su esposa solo le dejaron ver el rostro. Le administraron una dosis de sedantes superior a la permitida para su peso.",
    fuentes: ["https://www.elsaltodiario.com/cataluna/tres-mossos-esquadra-investigados-muerte-custodia-policial-colombiano-brian-rios"]
  },

];
