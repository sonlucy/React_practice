import request from "./request";
// url =https://pixabay.com/api/?key={개인키}&q=yellow+flowers&image_type=photo

const BASE_URL = "https://pixabay.com/api";

const defaultParam = {
  key: process.env.REACT_APP_API_KEY,  // 개인키 변경
  safesearch: true,
}

const getWallPapers = async (paramObj) => {
  const params = new URLSearchParams({
    ...defaultParam,
    ...paramObj,
  }).toString();

  const result = await request(`${BASE_URL}/?${params}`)
  return result;
};

export default getWallPapers;