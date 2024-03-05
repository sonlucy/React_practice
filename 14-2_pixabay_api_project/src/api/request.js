const request = async (url) => {
  console.log(url);
  try {
    const responset = await fetch(url);
    if (responset.ok) {
      const data = await responset.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export default request;