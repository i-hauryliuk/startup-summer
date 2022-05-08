const USERS_ENDPOINT = 'https://api.github.com/users/';
const REPOS_PER_PAGE = 100;
const HEADERS = {
  Accept: 'application/vnd.github.v3+json',
};

export const getUserData = async (nickname) => {
  const response = await fetch(`${USERS_ENDPOINT}${nickname}`, {
    headers: HEADERS,
  });

  if (!response.ok && response.status !== 404) {
    throw new Error(`Data loading error (Response status ${response.status})`);
  }

  if (response.status === 404) {
    return null;
  }

  let responseData = await response.json();

  return {
    id: responseData.id,
    avatarUrl: responseData.avatar_url,
    name: responseData.name,
    nickName: responseData.login,
    profileUrl: responseData.html_url,
    followers: responseData.followers,
    following: responseData.following,
    reposNumber: responseData.public_repos,
    reposUrl: responseData.repos_url,
  };
};

export const getUserRepos = async (reposUrl, reposQty) => {
  const repos = [];
  const pageCount = Math.ceil(reposQty / REPOS_PER_PAGE);

  for (let page = 1; page <= pageCount; page++) {
    const response = await fetch(
      `${reposUrl}?page=${page}&per_page=${REPOS_PER_PAGE}`,
      { headers: HEADERS }
    );
    if (!response.ok) {
      throw new Error(
        `Data loading error (Response status ${response.status})`
      );
    }
    repos.push(
      ...(await response.json()).map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        url: item.html_url,
      }))
    );
  }

  return repos;
};
