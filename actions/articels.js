export const UPDATE_ARTICLES = 'UPDATE_USERNAME';
export const UPDATE_LAST_ARTICLES = 'UPDATE_LAST_ATRICLES';
export const UPDATE_LAST_BREAKING_NEWS = 'UPDATE_LAST_BREAKING_NEWS';
export const UPDATE_BREAKING_NEWS = [];

export const updateArticles= (articleData) => ({ type: UPDATE_ARTICLES, articleData });
export const updateLastArticles= (LastArticleData) => ({ type: UPDATE_LAST_ARTICLES, LastArticleData });
export const updateLastBreakingNews= (lastBreakingData) => ({ type: UPDATE_LAST_BREAKING_NEWS, lastBreakingData });
export const updateBreakingNews= (BreakingData) => ({ type: UPDATE_BREAKING_NEWS, BreakingData });