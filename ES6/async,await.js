const requestLogin = (params) => {
  return new Promise((resolve) => {
    resolve(`${params.userName}你很帅`);
  });
};

const requestInfo = (params) => {
  return new Promise((resolve) => {
    resolve(`${params}，但很菜`);
  });
};

const handleLogin = async () => {
  const res = await requestLogin({
    userName: "Orange",
    sex: "male",
  });
  const info = await requestInfo(res);
  return info;
};
handleLogin().then((info) => console.log(info));
