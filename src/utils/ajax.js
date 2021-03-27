export const ajaxPostJson = (URL, dados) => {
  return fetch(URL, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => response)
    .catch((error) => error);
};

export const ajaxGetJson = (URL, dados) => {
  return fetch(URL, {
    mode: "cors",
    method: "GET",
    credentials: "include",
    headers: {
      ...dados,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response)
    .catch((error) => error);
};
