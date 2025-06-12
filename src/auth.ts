// Retorna o token armazenado no localStorage, se existir
export const getToken = () => localStorage.getItem("token");

// Salva o token no localStorage para manter o usuário autenticado
export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

// Remove o token do localStorage, efetivamente deslogando o usuário
export const removeToken = () => {
  localStorage.removeItem("token");
};

// Verifica se há um token válido, indicando se o usuário está autenticado
export const isAuthenticated = () => !!getToken();
