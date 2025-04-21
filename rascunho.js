/* const axios = require("axios");

const API_URL = "http://localhost:3001";
const NUMEROS = [
  "5511960273969",
  "5585997978789",
  "5538991167317",
  "558498647972",
  "5542988122661",
  "5521967146122",
  "5531983944184",
  "5511989837864",
  "5542988685901",
  "553171818142",
  "5534992281266",
  "5511987350102",
  "5531992390034",
  "5521967525035",
  "553196918763",
  "5511986967800",
  "5511947508018", 
  "5514991615904",
  "5521981421325",
  "556492862443",
  "5513988382815",
  "5511951511122",
  "5531998660478",
  "5585985126123",
  "5548996184707",
  "5564992862443",
  "5531981103970",
  "5521986923597",
  "553191033214",
  "5584996983892",
  "553597032724",
  "5518996586650",
  "5537999060380",
  "5584991450334",
  "555196916701",
  "5527995769428",
  "558399564648",
  "5515988227971",
  "5541996312005",
  "351965076230",
  "5521995460202",
  "5511985434845",
  "556191680013",
  "5543996364537",
  "5562995324224",
  "555192416177",
  "5533991081545",
  "5564992916559",
  "5573998030959",
  "557391984357",
  "5518991651831",
  "5521966615473",
  "5511942409348",
  "48999893767",
  "554899214713",
  "5564992415622",
  "5521984737782",
  "5548988451064",
  "557598209568",
  "554896449632",
  "554891522005",
  "558191615969",
  "5521985400335",
  "5581995287343",
  "5562998034454",
  "5584998558940",
  "61984087090",
  "556195951989",
  "5511943636330",
  "5563991106266",
  "559891160585",
  "5541988144456",
  "556294192500",
  "5577981407070",
  "5527996887377",
  "559282646206",
  "5518981503089",
  "5563984593419",
  "5521979628821",
  "554198233697",
  "11918495560",
  "5561994188050",
  "557588006896",
  "5512996367538",
  "558197552944",
  "5562994192500",
  "557998830323",
  "558388948851",
  "556292462219",
  "559674006315",
  "554588243977",
  "553888165292",
  "554299235650",
  "5519974223498",
  "554797155397",
  "554497469260",
  "5537920006185",
  "5517996182354",
  "554791112577",
  "5533999788054",
  "5531986880270",
  "5541992559550",
  "5543976022045",
  "555183329679",
  "5511980542185",
  "5511942096338",
  "5521982675714",
  "5562982717207",
  "553584214582",
  "5521973792121",
  "5531991291623",
  "5511945171990",
  "55119913748602",
  "558496472129",
  "556295150055",
  "556298740478",
  "554999427045",
  "556796874690",
  "5584999361222",
  "5531996355035",
  "5517981440155",
  "5541992128623",
  "556681290588",
  "558599138897",
  "5562992888259",
  "5515996959457",
  "5511931502923",
  "5534998882283",
  "5521975485127",
  "556496952951",
  "5521993698340",
  "5549999957692",
  "5527997049566",
  "5511987069809",
  "554791788122",
  "5561998108490",
  "5522981293874",
  "5564999359504",
  "5566996584266",
  "557799078657",
  "55229998988466",
  "5515619759396",
  "558192304450",
  "5585997978789",
  "5551994186536"
]; 

const MENSAGEM =
  "Olá! 👋 Informamos que migramos do Mega Sender para o novo sistema Robozinho 🚀Acesse o novo sistema em: https://meu.robozim.com/ Assista ao vídeo explicativo: https://www.youtube.com/watch?v=kyrC2l-V_Zk Em caso de dúvidas falar com nossa equipe de vendas, entre em contato: https://w.app/sawnia";
const INTERVALO_ENTRE_NUMEROS = 50 * 1000; // 50 segundos
const SEU_NUMERO = "5511960273969"; // substitua pelo seu número no formato 55DDDNÚMERO, ex: "5511999998888"

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

    for (const numero of NUMEROS) {
      try {
        const payload = {
          telefone: numero,
          message: MENSAGEM,
        };

        const { data } = await axios.post(
          `${API_URL}/send-whatsapp/encomenda`,
          payload
        );
        console.log(`✅ Mensagem enviada para ${numero}:`, data);
      } catch (err) {
        console.error(`⚠️ Erro ao enviar para ${numero}:`, err.message);
      }

      console.log(`⏳ Esperando ${INTERVALO_ENTRE_NUMEROS / 1000}s...`);
      await esperar(INTERVALO_ENTRE_NUMEROS);
    }

    // Envia mensagem para você avisando que terminou
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
 */
/* const axios = require("axios");

const API_URL = "http://localhost:3001";
const NUMEROS = [
  "5527995769428",
  "558399564648",
  "5515988227971",
  "5541996312005",
  "351965076230",
  "5521995460202",
  "5511985434845",
  "556191680013",
  "5543996364537",
  "5562995324224",
  "555192416177",
  "5533991081545",
  "5564992916559",
  "5573998030959",
  "557391984357",
  "5518991651831",
  "5521966615473",
  "5511942409348",
  "48999893767",
  "554899214713",
  "5564992415622",
  "5521984737782",
  "5548988451064",
  "557598209568",
  "554896449632",
  "554891522005",
  "558191615969",
  "5521985400335",
  "5581995287343",
  "5562998034454",
  "5584998558940",
  "61984087090",
  "556195951989",
  "5511943636330",
  "5563991106266",
  "559891160585",
  "5541988144456",
  "556294192500",
  "5577981407070",
  "5527996887377",
  "559282646206",
  "5518981503089",
  "5563984593419",
  "5521979628821",
  "554198233697",
  "11918495560",
  "5561994188050",
  "557588006896",
  "5512996367538",
  "558197552944",
  "5562994192500",
  "557998830323",
  "558388948851",
  "556292462219",
  "559674006315",
  "554588243977",
  "553888165292",
  "554299235650",
  "5519974223498",
  "554797155397",
  "554497469260",
  "5537920006185",
  "5517996182354",
  "554791112577",
  "5533999788054",
  "5531986880270",
  "5541992559550",
  "5543976022045",
  "555183329679",
  "5511980542185",
  "5511942096338",
  "5521982675714",
  "5562982717207",
  "553584214582",
  "5521973792121",
  "5531991291623",
  "5511945171990",
  "55119913748602",
  "558496472129",
  "556295150055",
  "556298740478",
  "554999427045",
  "556796874690",
  "5584999361222",
  "5531996355035",
  "5517981440155",
  "5541992128623",
  "556681290588",
  "558599138897",
  "5562992888259",
  "5515996959457",
  "5511931502923",
  "5534998882283",
  "5521975485127",
  "556496952951",
  "5521993698340",
  "5549999957692",
  "5527997049566",
  "5511987069809",
  "554791788122",
  "5561998108490",
  "5522981293874",
  "5564999359504",
  "5566996584266",
  "557799078657",
  "55229998988466",
  "5515619759396",
  "558192304450",
  "5585997978789",
  "5551994186536" // ... (demais números)
];

const MENSAGENS = [
  "Olá! 👋 Informamos que migramos do Mega Sender para o novo sistema Robozim! 🚀\n\nAcesse o novo sistema em:\nhttps://meu.robozim.com/\n\nAssista ao vídeo explicativo:\nhttps://www.youtube.com/watch?v=kyrC2l-V_Zk\n\nEm caso de dúvidas, fale com nossa equipe de vendas:\nhttps://w.app/sawnia",

  "🚀 Chegamos com novidades!\nAgora usamos o sistema Robozim! 😄\n\nAcesse:\nhttps://meu.robozim.com/\n\nVeja o tutorial:\nhttps://www.youtube.com/watch?v=kyrC2l-V_Zk\n\nFale com nosso time:\nhttps://w.app/sawnia",

  "📣 Mudamos para o Robozim!\nTenha mais controle e agilidade nas mensagens!\n\nAcesse:\nhttps://meu.robozim.com/\n\nVídeo explicativo:\nhttps://www.youtube.com/watch?v=kyrC2l-V_Zk\n\nSuporte:\nhttps://w.app/sawnia"
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

    for (let i = 0; i < NUMEROS.length; i++) {
      const numero = NUMEROS[i];

      // Alterna a cada 2 envios, indo para a próxima mensagem no array
      const mensagemIndex = Math.floor(i / 1) % MENSAGENS.length;
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
        console.log(`✅ Mensagem enviada para ${numero}:`, data);
      } catch (err) {
        console.error(`⚠️ Erro ao enviar para ${numero}:`, err.message);
      }

      if (i < NUMEROS.length - 1) {
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
 */