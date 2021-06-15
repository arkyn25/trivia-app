const fetchToken = async () => {
  const endpoint = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(endpoint);
  const results = await response.json();
  return results;
};

export default fetchToken;
