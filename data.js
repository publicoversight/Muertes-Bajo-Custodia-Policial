
const TIPOS = {
  disparo: "Shooting or direct violence",
  violencia: "Police restraint or beating",
  calabozo: "Death in detention or confinement",
  medico: "Lack of medical care",
  deportacion: "Asphyxiation during deportation",
  persecucion: "Death following police pursuit",
  abandono: "Institutional abandonment",
  desconocido: "Insufficient information"
};

const CASOS = [

  {
    id: "lucrecia-perez",
    nombre: "Lucrecia Pérez",
    fecha: "1992-11-13",
    lugar: "Madrid",
    tipo: "disparo",
    causa: "Racist murder; convictions",
    texto: "Shot dead by Luis Merino, a Civil Guard officer, accompanied by three neo-Nazi minors. Her killing is considered the first officially recognized racist crime in Spain.",
    fuentes: [
      "https://english.elpais.com/elpais/2017/06/23/trans_iberian/1498204402_391675.html"
    ]
  },

  {
    id: "francis-vadillo",
    nombre: "Francis Vadillo Santamaría",
    fecha: "1979-06-10",
    lugar: "Apolo nightclub, Iztieta (Basque Country)",
    tipo: "disparo",
    causa: "Involuntary manslaughter; 9-month sentence",
    texto: "Shot dead by Antonio Caba Laguna, an off-duty National Police officer. Prosecutors sought a six-year sentence; he was sentenced to nine months and never served time in prison.",
    fuentes: [
      "https://www.lavozdelarepublica.es/2019/06/40-anos-del-asesinato-de-francis-el.html"
    ]
  },

  {
    id: "erika-perez",
    nombre: "Erika Sigfrido Pérez",
    fecha: "1985-04-14",
    lugar: "Barcelona",
    tipo: "disparo",
    causa: "Intentional homicide",
    texto: "A Venezuelan trans woman, shot dead by José Antonio Sánchez García, a Civil Guard officer who had contacted her for sexual services and attempted to conceal her body.",
    fuentes: [
      "https://coflhee.blogspot.com/1986/01/documentacion-violencia-condena-de-11.html"
    ]
  },

  {
    id: "juan-martinez-galdeano",
    nombre: "Juan Martínez Galdeano",
    fecha: "2005-07-24",
    lugar: "Roquetas de Mar barracks (Almería)",
    tipo: "violencia",
    causa: "Excited delirium",
    texto: "Asked for help after a car accident. Witnesses described a beating by Civil Guard officers, including the use of electric batons, before he was taken to the barracks. One of the earliest cases in Spain in which death in custody was attributed to 'excited delirium'.",
    fuentes: [
      "https://www.thetimes.com/travel/destinations/europe-travel/spain/civil-guards-beat-man-to-death-9gnlq0b7qm0"
    ]
  },

  {
    id: "osamuyi-akpitaye",
    nombre: "Osamuyi Akpitaye",
    fecha: "2007-06-09",
    lugar: "Madrid–Lagos deportation flight",
    tipo: "deportacion",
    causa: "Asphyxiation",
    texto: "Died from asphyxiation during deportation while in police custody.",
    fuentes: [
      "https://www.elperiodicoextremadura.com/sociedad/2007/06/11/nigeriano-murio-iba-deportado-presentaba-45365931.html"
    ]
  },

  {
    id: "jonathan-sizalima",
    nombre: "Jonathan Sizalima",
    fecha: "2009-06-18",
    lugar: "Immigration detention cell, Barcelona",
    tipo: "calabozo",
    causa: "Suicide",
    texto: "A 20-year-old Ecuadorian man found hanging in his cell one day after being arrested to begin deportation proceedings. His family did not recognize the shirt as his and was not allowed to see the body. His mother had been told that he would be released hours before his death.",
    fuentes: [
      "https://www.eluniverso.com/2009/07/07/1/1360/llega-cuerpo-un-joven-ahorcado.html"
    ]
  },

  {
    id: "mohamed-abagui",
    nombre: "Mohamed Abagui",
    fecha: "2010-05-13",
    lugar: "Barcelona detention centre",
    tipo: "calabozo",
    causa: "Suicide",
    texto: "A 22-year-old Moroccan man found dead, reportedly hanged with a bedsheet while awaiting deportation at a detention centre in Barcelona. Witnesses said he had been held in isolation; his family had requested medical treatment because of his physical and psychological condition.",
    fuentes: [
      "https://pdf.elcorreo.com/documentos/2019/fallecidos-refugiados-durango.pdf"
    ]
  },

  {
    id: "samba-martine",
    nombre: "Samba Martine",
    fecha: "2011-12-19",
    lugar: "Doce de Octubre Hospital, after detention at Aluche detention centre (Madrid)",
    tipo: "medico",
    causa: "Lack of medical care",
    texto: "Died after failing to receive adequate medical treatment for HIV. Hours before her death, medical staff reportedly recommended 'breathing exercises'.",
    fuentes: [
      "https://www.eldiario.es/desalambre/grito-ahogado-samba-martine-intentos_1_1514274.html"
    ]
  },

  {
    id: "idrissa-diallo",
    nombre: "Idrissa Diallo",
    fecha: "2012-01-06",
    lugar: "Barcelona detention centre",
    tipo: "medico",
    causa: "Cardiac arrest",
    texto: "Died from cardiac arrest after repeatedly requesting medical assistance without receiving it.",
    fuentes: [
      "https://www.elnacional.cat/es/cultura/idrissa-diallo-documental-cie-extrangeria_441663_102.html"
    ]
  },

  {
    id: "aramis-manukyan",
    nombre: "Aramis Manukyan",
    fecha: "2013-12-03",
    lugar: "Barcelona detention centre",
    tipo: "calabozo",
    causa: "Suicide",
    texto: "A 42-year-old Armenian man and father of a seven-year-old girl. Found dead in an isolation cell; officially classified as suicide. Witnesses who reported a prior police assault were deported before they could testify.",
    fuentes: [
      "https://ccar.cat/wp-content/uploads/2013/12/comunicado_CIE_Barcelona0912_cast.pdf"
    ]
  },

  {
    id: "miguel-angel-fernandez",
    nombre: "Miguel Ángel Fernández",
    fecha: "2016-04-06",
    lugar: "National Police cells, Zaragoza",
    tipo: "violencia",
    causa: "",
    texto: "Arrested two days earlier for two robberies. The medical report did not record a head injury or the sedatives that had been injected. Fifteen minutes of footage showing his arrival remain 'missing'.",
    fuentes: [
      "https://www.poderjudicial.es/portal/site/cgpj/menuitem.65d2c4456b6ddb628e635fc1dc432ea0/?vgnextoid=765989df32a1b510VgnVCM1000006f48ac0aRCRD&vgnextchannel=45b9fdcc164f0310VgnVCM1000006f48ac0aRCRD&vgnextfmt=default&vgnextlocale=eu&perfil=3"
    ]
  },

  {
    id: "elhadji-ndiaye",
    nombre: "Elhadji Ndiaye",
    fecha: "2016-10-25",
    lugar: "Police station, Arrotxapea (Pamplona)",
    tipo: "violencia",
    causa: "",
    texto: "Died inside a police station after being violently arrested.",
    fuentes: [
      "https://sosracismo.eu/sos-racismo-navarra-concentracion-en-memoria-de-elhadji-ndiaye/"
    ]
  },

  {
    id: "mohamed-bouderbala",
    nombre: "Mohamed Bouderbala",
    fecha: "2017-12-29",
    lugar: "Improvised detention centre, Archidona",
    tipo: "calabozo",
    causa: "",
    texto: "A 37-year-old Algerian man who died under unclear circumstances after 18 hours in isolation.",
    fuentes: [
      "https://medios.mugak.eu/noticias/noticia/545233"
    ]
  },

  {
    id: "stefan-lache",
    nombre: "Stefan Lache",
    fecha: "2018-04-15",
    lugar: "Padre Amigo police station, Carabanchel (Madrid)",
    tipo: "violencia",
    causa: "Natural death",
    texto: "Arrested for not carrying his identification documents. The case was classified as a 'natural death' despite footage showing a violent restraint. His family spent up to €15,000 pursuing the case before the European Court of Human Rights.",
    fuentes: [
      "https://info.nodo50.org/Mas-de-tres-anos-en-busca-de-respuestas-y-justicia-por-la-muerte-de-un-joven-en.html"
    ]
  },

  {
    id: "marouane-abouobaida",
    nombre: "Marouane Abouobaida",
    fecha: "2019-07-15",
    lugar: "Valencia detention centre",
    tipo: "calabozo",
    causa: "Suicide",
    texto: "Placed in isolation after a fight. One hour before his death, he notified the director in writing about severe pain. His death was officially classified as suicide, five days before his 24th birthday.",
    fuentes: [
      "https://www.lavanguardia.com/local/valencia/20211204/7906650/monolito-fallecido-cie-valencia-marouane-abouobaida.html"
    ]
  },

  {
    id: "eleazar-garcia-hernandez",
    nombre: "Eleazar García Hernández",
    fecha: "2019-09-08",
    lugar: "El Molinón Stadium, Gijón",
    tipo: "violencia",
    causa: "Cardiac arrest",
    texto: "Violently restrained by eight private security guards and four local police officers. He was taken to hospital instead of being treated by the stadium's emergency medical unit, where he was restrained again. He died from cardiac arrest.",
    fuentes: [
      "https://elcierredigital.com/sucesos/muerte-molinon-discapacitado-eleazar-informe-forense-demoledor"
    ]
  },

  {
    id: "imad-eraffali",
    nombre: "Imad Eraffali",
    fecha: "2020-01-23",
    lugar: "Algeciras police station",
    tipo: "calabozo",
    causa: "Suicide",
    texto: "Aged 23. His death was classified as suicide.",
    fuentes: [
      "https://www.lavanguardia.com/vida/20200228/473822698246/piden-investigar-el-suicidio-de-un-joven-marroqui-en-un-calabozo-en-algeciras.html"
    ]
  },

  {
    id: "daniel-jimenez",
    nombre: "Daniel Jimenez",
    fecha: "2020-06-01",
    lugar: "Algeciras police station",
    tipo: "calabozo",
    causa: "Suicide",
    texto: "His death was classified as suicide one hour after he called his father to say that he would be released the following morning. A latex glove was found in his stomach.",
    fuentes: [
      "https://www.diarioarea.com/algeciras/se-suicidio-en-los-calabozos-de-algeciras-la-familia-de-daniel-consigue-que-se-reabra-el-caso/"
    ]
  },

  {
    id: "moussa-sylla",
    nombre: "Moussa Sylla",
    fecha: "2023",
    lugar: "Ceuta, outside the CETI",
    tipo: "abandono",
    causa: "Suicide",
    texto: "A 20-year-old man who died by suicide after being expelled from the CETI following a fight, without alternative accommodation.",
    fuentes: [
      "https://elfarodeceuta.es/moussa-sylla-muerte-ceti/"
    ]
  },

  {
    id: "mahmoud-bakhum",
    nombre: "Mahmoud Bakhum",
    fecha: "2024-12-29",
    lugar: "Guadalquivir River, Seville",
    tipo: "persecucion",
    causa: "Drowning",
    texto: "A 43-year-old Senegalese street vendor who drowned while attempting to escape the Local Police during an operation targeting street vending.",
    fuentes: [
      "https://www.briega.org/noticias/mahmoud-bakhum-vecino-sevilla-muere-ahogado-guadalquivir-mientras-era-perseguido-por/"
    ]
  },

  {
    id: "juan-antonio-hans",
    nombre: "Juan Antonio Hans",
    fecha: "2025-01-23",
    lugar: "Hotel in Estepona (Málaga)",
    tipo: "violencia",
    causa: "",
    texto: "Experienced a psychotic episode. Instead of an ambulance, eight police officers arrived to restrain him. Witnesses said he had not been violent and was saying 'I can't breathe'. His family was not allowed to see the body.",
    fuentes: [
      "https://asest.es/story/muere-empresario-estepona/"
    ]
  },

  {
    id: "brian-rios",
    nombre: "Brian Rios",
    fecha: "2022-08-20",
    lugar: "Rubí (Barcelona)",
    tipo: "violencia",
    causa: "",
    texto: "Died following an allegedly arbitrary arrest, sedation and police beating. His wife was only allowed to see his face. He was administered a dose of sedatives exceeding the permitted amount for his weight.",
    fuentes: [
      "https://www.elsaltodiario.com/cataluna/tres-mossos-esquadra-investigados-muerte-custodia-policial-colombiano-brian-rios"
    ]
  }

];
