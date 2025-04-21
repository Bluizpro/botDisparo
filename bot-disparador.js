
// Descrição: Este script envia mensagens via WhatsApp usando a API do Robozim. Ele lê números de telefone de um array, envia mensagens em intervalos definidos e notifica o usuário quando todos os envios são concluídos.
const axios = require("axios");

const API_URL = "http://localhost:3001";

// ✅ Usando apenas o primeiro grupo para disparo
//const NUMEROS_GRUPO_1 = [
/*   "5521968530024",
  "556384593419",
  "558499378641",
  "5511965104420",
  "5541998374899",
  "5583991053232",
  "5511937511278",
  "5511956555058",
  "5564992301232",
  "11953687056",
  "5531991173324",
  "558198770354",
  "5542984127578",
  "5562991191354",
  "5511917071551",
  "554197947008",
  "19993014395",
  "554197825482",
  "5565981382578",
  "5531986924196",
  "556692144590",
  "5531985277337",
  "554899060242",
  "5562993204098",
  "554888595036",
  "5531996667397",
  "5563984940622",
  "554396504548",
  "5511990081460",
  "553192383720",
  "5531991889754",
  "554888582856",
  "5555999741258",
  "5548984527212",
  "5538991766767",
  "558599010673",
  "556294893466",
  "5584992270317",
  "5562984253764",
  "5516997564535",
  "5584996658764",
  "5521979009967",
  "556185825679",
  "5531984900981",
  "5527999664434",
  "5547997366941",
  "5549998175327",
  "5585998621555",
  "5521998215198"
]; */
/*  "5516981567595",
  "5514996929040",
  "5531975027898",
  "5563992112420",
  "5519996282798",
  "5511989002458",
  "554792398047",
  "5511951693198",
  "5519996605908",
  "557187968768",
  "5577981310255",
  "5521994678345",
  "5511963546299",
  "553196052868",
  "553193889254",
  "5511988208226",
  "5524999360772",
  "554384750613",
  "556298286347",
  "557788692851",
  "559981980346",
  "555198896989",
  "5511975584380",
  "553183480074",
  "554888537678",
  "554197697575",
  "556282395051",
  "5513981474234",
  "5514982225599",
  "5511953832119",
  "5511931940447",
  "5589988111849",
  "558581444812",
  "558387747473",
  "5511946985485",
  "5541999546886",
  "5518996070771",
  "5542998202239",
  "5511963664635",
  "5562995528649",
  "5562981539631",
  "5562999091739",
  "5532991955389",
  "5511995843278",
  "5519994493401",
  "5583999663158",
  "559885239243",
  "5534997129912",
  "553398508016",
  "5527997996748",
]; */

/* const NUMEROS_GRUPO_2 = [
  [
    "5516981567595",
    "5514996929040",
    "5531975027898",
    "5563992112420",
    "5519996282798",
    "5511989002458",
    "554792398047",
    "5511951693198",
    "5519996605908",
    "557187968768",
    "5577981310255",
    "5521994678345",
    "5511963546299",
    "553196052868",
    "553193889254",
    "5511988208226",
    "5524999360772",
    "554384750613",
    "556298286347",
    "557788692851",
    "559981980346",
    "555198896989",
    "5511975584380",
    "553183480074",
    "554888537678",
    "554197697575",
    "556282395051",
    "5513981474234",
    "5514982225599",
    "5511953832119",
    "5511931940447",
    "5589988111849",
    "558581444812",
    "558387747473",
    "5511946985485",
    "5541999546886",
    "5518996070771",
    "5542998202239",
    "5511963664635",
    "5562995528649",
    "5562981539631",
    "5562999091739",
    "5532991955389",
    "5511995843278",
    "5519994493401",
    "5583999663158",
    "559885239243",
    "5534997129912",
    "553398508016",
    "5527997996748"
  ]
  
]; */ // Adicione os números do grupo 2 aqui, se necessário

const NUMEROS_GRUPO_3 = [
  "5521989928111",
  "5581986409496",
  "5581985404733",
  "5541987357829",
  "5571993014132",
  "5588992607276",
  "5541995952078",
  "5547991555859",
  "5515981747083",
  "5511943587131",
  "554199214713",
  "554896510443",       // corrigido de "5548 9651-0443"
  "554699314163",       // corrigido de "55469931-4163"
  "5511942409348",
  "351965076230",
  "48999893767",
  "61984087090",
  "556195951989",
  "5563991106266",
  "554891522005",
  "554896449632",
  "558191615969",
  "557598209568",
  "5521984737782",
];
 // Adicione os números do grupo 3 aqui, se necessário
const NUMEROS = NUMEROS_GRUPO_3; // ✅ ativa o grupo 1

const MENSAGENS = [
  "Olá! 👋 Informamos que migramos do Mega Sender para o novo sistema Robozim! 🚀\n\nAcesse o novo sistema em:\nhttps://meu.robozim.com/\n\nAssista ao vídeo explicativo:\nhttps://www.youtube.com/watch?v=kyrC2l-V_Zk\n\nEm caso de dúvidas, fale com nossa equipe de vendas:\nhttps://w.app/sawnia",
  "🚀 Chegamos com novidades!\nAgora usamos o sistema Robozim! 😄\n\nAcesse:\nhttps://meu.robozim.com/\n\nVeja o tutorial:\nhttps://www.youtube.com/watch?v=kyrC2l-V_Zk\n\nFale com nosso time:\nhttps://w.app/sawnia",
  "📣 Mudamos para o Robozim!\nTenha mais controle e agilidade nas mensagens!\n\nAcesse:\nhttps://meu.robozim.com/\n\nVídeo explicativo:\nhttps://www.youtube.com/watch?v=kyrC2l-V_Zk\n\nSuporte:\nhttps://w.app/sawnia",
];

const INTERVALO_ENTRE_NUMEROS = 50 * 1000; // 50 segundos
const SEU_NUMERO = "5511960273969";
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function iniciarEnvios() {
  try {
    const { data: instancias } = await axios.get(`${API_URL}/api/instancias`);
    const instanciaConectada = instancias.find(
      (inst) => inst.status === "conectado"
    );

    if (!instanciaConectada) {
      console.log("❌ Nenhuma instância conectada.");
      return;
    }

    let contadorDisparos = 0;
    const total = NUMEROS.length;

    for (let i = 0; i < total; i++) {
      const numero = NUMEROS[i];

      const mensagemIndex = i % MENSAGENS.length;
      const mensagemParaEnviar = MENSAGENS[mensagemIndex];

      try {
        const payload = {
          telefone: numero,
          message: mensagemParaEnviar,
        };

        const { data } = await axios.post(
          `${API_URL}/send-whatsapp/encomenda`,
          payload
        );

        contadorDisparos++;
        console.log(
          `✅ [${contadorDisparos}/${total}] Mensagem enviada para ${numero}:`,
          data
        );
      } catch (err) {
        console.error(`⚠️ Erro ao enviar para ${numero}:`, err.message);
      }

      if (i < total - 1) {
        console.log(`⏳ Esperando ${INTERVALO_ENTRE_NUMEROS / 1000}s...`);
        await esperar(INTERVALO_ENTRE_NUMEROS);
      }
    }

    const payloadFinal = {
      telefone: SEU_NUMERO,
      message: "✅ Todos os envios foram concluídos com sucesso!",
    };

    await axios.post(`${API_URL}/send-whatsapp/encomenda`, payloadFinal);
    console.log("📩 Mensagem de conclusão enviada para você.");
  } catch (err) {
    console.error("❌ Erro durante execução:", err.message);
  }
}

iniciarEnvios();

