import { hashPassword } from "@/lib/login/manege-login";

(async () => {
  const minhaSenha = ''; // LEMBRAR DE APAGAR A SENHA DAQUI
  const hashDaSuaSenhaEmBase64 = await hashPassword(minhaSenha);

  console.log({ hashDaSuaSenhaEmBase64 });
 })();
