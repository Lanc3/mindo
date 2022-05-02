import { UPDATE_ARTICLES,UPDATE_LAST_ARTICLES,UPDATE_LAST_BREAKING_NEWS,UPDATE_BREAKING_NEWS } from "../actions/articels";
import {combineReducers} from 'redux';
const article  = (article = { articleData: ''}, action) => {
    switch (action.type) {
        case UPDATE_ARTICLES:
            return { articleData: action.articleData }
        default:
            return article;
    }
}
const lastArticle  = (lastArticle = { LastArticleData: ''}, action) => {
    switch (action.type) {
        case UPDATE_LAST_ARTICLES:
            return { LastArticleData: action.LastArticleData }
        default:
            return lastArticle;
    }
}

const lastBreakingArticle  = (lastBreakingArticle = { lastBreakingData: '',BreakingData:[]}, action) => {
    switch (action.type) {
        case UPDATE_LAST_BREAKING_NEWS:
            return { lastBreakingData: action.lastBreakingData }
        case UPDATE_BREAKING_NEWS:
            return { BreakingData: action.BreakingData }
        default:
            return lastBreakingArticle;
    }
}
export default combineReducers({ article,lastArticle,lastBreakingArticle });