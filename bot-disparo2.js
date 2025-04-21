/* Bot disparo canais 
const axios = require("axios");

const API_URL = "http://localhost:3001";

// ✅ Usando apenas o primeiro grupo para disparo
const NUMEROS_GRUPO_1 = [
  "5511960273969",
  
];

const NUMEROS = NUMEROS_GRUPO_1; // ✅ ativa o grupo 1

const MENSAGENS = [
  `💥 MEGA CANAIS – qualidade, estabilidade e + de 25.000 conteúdos!

📺 Canais ao vivo em HD e Full HD  
🎬 Filmes e séries atualizadas  
⚽ Premiere, Combate, TNT, SporTV, BBB, Champions  
🎯 Funciona no celular, Smart TV, TV Box, notebook e +  
🚀 Instalação rápida + Suporte VIP

🤑 Apenas R$24,99 por mês!

🧪 TESTE GRÁTIS de 4 horas pra você ver que é top!

👉 Me chama aqui pra ativar o seu teste: https://wa.me/5511999999999

📌 Confiança, qualidade e mais de 300 clientes ativos.

⚠️ Promoção válida até HOJE! Aproveita!`
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
      const mensagemParaEnviar = MENSAGENS[0]; // Só 1 mensagem neste caso

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
        console.log(`✅ [${contadorDisparos}/${total}] Mensagem enviada para ${numero}:`, data);
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
 */

/* const axios = require("axios");


const verificarServidor = async () => {
  try {
    const resposta = await axios.get("http://localhost:3001/health"); // Verifica se o servidor está funcionando (supondo que tenha um endpoint /health)
    return resposta.status === 200;
  } catch (error) {
    console.error("❌ O servidor não está disponível:", error.message);
    return false;
  }
};

const iniciarBotDisparo = async (instancia, socket) => {
  const servidorDisponivel = await verificarServidor();

  if (!servidorDisponivel) {
    console.log("❌ Servidor indisponível, bot não será iniciado.");
    return;
  }

  console.log("✅ Servidor disponível, iniciando o bot de disparo...");

  const NUMEROS = [
    "5511960273969", // Pode adicionar mais números conforme o caso
  ];

  const MENSAGENS = [
    `💥 MEGA CANAIS – qualidade, estabilidade e + de 25.000 conteúdos!  
    📺 Canais ao vivo em HD e Full HD...`, // A mensagem do bot
  ];

  const INTERVALO_ENTRE_NUMEROS = 50 * 1000; // 50 segundos
  const SEU_NUMERO = "5511960273969";

  const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let contadorDisparos = 0;
  const total = NUMEROS.length;

  for (let i = 0; i < total; i++) {
    const numero = NUMEROS[i];
    const mensagemParaEnviar = MENSAGENS[0];

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
};

const startSession = async (sessionId, instancia) => {
  // Verifica o status de conexão e inicializa o bot
  try {
    const socket = makeWASocket({
      auth: state,
      printQRInTerminal: false,
      browser: ["Ubuntu", "Chrome", "80"],
      syncFullHistory: false,
      markOnlineOnConnect: false,
      connectTimeoutMs: 90_000,
    });

    socket.ev.on("connection.update", async (update) => {
      const { connection, qr } = update;

      if (connection === "open") {
        // Conexão estabelecida, agora verifica se há bot a ser executado
        if (instancia.botName === "disparoBot") {
          await iniciarBotDisparo(instancia, socket);
        }
      }
    });
  } catch (error) {
    console.error("Erro ao iniciar a instância:", error.message);
  }
};
 */
 /* const axios = require("axios");
const { makeWASocket } = require("@adiwajshing/baileys"); // Verifique se a biblioteca está instalada

// URL do servidor onde as instâncias de WhatsApp estão rodando
const API_URL = "http://localhost:3001";

// Função para verificar a saúde do servidor
const verificarServidor = async () => {
  try {
    const resposta = await axios.get(`${API_URL}/health`); // Endpoint para verificar a saúde do servidor
    return resposta.status === 200;
  } catch (error) {
    console.error("❌ O servidor não está disponível:", error.message);
    return false;
  }
};

// Função para pegar as instâncias ativas do servidor
const obterInstanciaAtiva = async () => {
  try {
    const { data: instancias } = await axios.get(`${API_URL}/api/instancias`);
    const instanciaAtiva = instancias.find((inst) => inst.status === "conectado");
    if (instanciaAtiva) {
      return instanciaAtiva;
    }
    throw new Error("Nenhuma instância conectada encontrada.");
  } catch (error) {
    console.error("❌ Erro ao obter instâncias:", error.message);
    return null;
  }
};
// Função para iniciar o bot de disparo
const iniciarBotDisparo = async (instancia, socket) => {
  console.log("✅ Iniciando o bot de disparo...");

  const NUMEROS = ["5511960273969"]; // Pode adicionar mais números conforme o caso
  const MENSAGENS = [
    `💥 MEGA CANAIS – qualidade, estabilidade e + de 25.000 conteúdos!  
    📺 Canais ao vivo em HD e Full HD...`, // A mensagem do bot
  ];

  const INTERVALO_ENTRE_NUMEROS = 50 * 1000; // 50 segundos
  const SEU_NUMERO = "5511960273969";

  const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let contadorDisparos = 0;
  const total = NUMEROS.length;

  for (let i = 0; i < total; i++) {
    const numero = NUMEROS[i];
    const mensagemParaEnviar = MENSAGENS[0];

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
};

// Função para iniciar a sessão com o WhatsApp
const startSession = async (instanciaAtiva) => {
  try {
    const socket = makeWASocket({
      auth: instanciaAtiva.auth, // A autenticação da instância
      printQRInTerminal: false,
      browser: ["Ubuntu", "Chrome", "80"],
      syncFullHistory: false,
      markOnlineOnConnect: false,
      connectTimeoutMs: 90_000, // Timeout de 90 segundos
    });

    socket.ev.on("connection.update", async (update) => {
      const { connection, qr } = update;

      if (connection === "open") {
        console.log("✅ Conexão com o WhatsApp estabelecida!");
        // Quando a conexão for estabelecida, começa o disparo
        await iniciarBotDisparo(instanciaAtiva, socket);
      } else if (connection === "qr") {
        console.log("📸 QR Code gerado para escanear:");
        console.log(qr);
      }
    });
  } catch (error) {
    console.error("❌ Erro ao iniciar a instância:", error.message);
  }
};
// Função principal para iniciar o bot
const iniciarBot = async () => {
  const servidorDisponivel = await verificarServidor();
  if (!servidorDisponivel) {
    console.log("❌ Servidor indisponível, bot não será iniciado.");
    return;
  }

  console.log("✅ Servidor disponível, verificando instâncias...");
  const instanciaAtiva = await obterInstanciaAtiva();
  
  if (!instanciaAtiva) {
    console.log("❌ Nenhuma instância ativa encontrada.");
    return;
  }

  console.log("✅ Instância ativa encontrada, conectando ao WhatsApp...");
  await startSession(instanciaAtiva);
};

// Iniciar o bot
iniciarBot();
 */
