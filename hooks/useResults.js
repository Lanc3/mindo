import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import { webUrl } from '../constants/Const';


export default () => {
const [categories,setCategories] = useState([]);

var WPAPI = require( 'wpapi' );
var _ = require( 'lodash' );
let wp = new WPAPI({endpoint:'https://medicalindependent.ie/wp-json/'});

const getCategoryAPI = async() => {
//posts?filter[cat]=1
    wp.posts().categories(26).perPage(100).then(function( data ) {
        // do something with the returned posts

    }).catch(function( err ) {
        // handle error
    });
};
const getAuthor = async(id:number) =>{
    try{
        const s = await wp.users().id(id);
        console.log(s)
        return s;
    }catch(error){

    }
}
const getMediaAPI = async(id:number) => {
    try{
        const response = await wp.media().id(id);
        return response.guid.rendered.toString();
    }catch(error){

    }
}

const getPostsByCategory = async(categoryID:number,pageNumber:number) => {
    // wp.posts().categories(categoryID).perPage(20).page(pageNumber)
    // .then(function(posts) {
    //     return posts;
    // }).catch(function(error){
    //     console.log("error getPostsByCategory " + error);
    // });
    try{
        const response = await wp.posts().categories(categoryID).perPage(10).page(pageNumber);
        const posts = await JSON.stringify(response);
        return posts;
    }catch(error){
        console.log("getPostsByCategory : "+error)
    };
};
//todo wp.media().id( n ) get media link for rendeing images
const getAllPosts = async() => {
    getAll( wp.posts().categories(26)).then(function( allPosts ) {
        console.log(allPosts.length);
    });
};

const getCategoyIdBySlug = async(categorySlug :number) =>{
    try{
        const response = await wp.categories().slug(categorySlug);
        const json = await response[0].id;
        return json;
    }catch (error){
        console.log(error);
    }

};

const getFirstPostSet = async(categoryID) => {
    wp.posts().categories(categoryID).perPage(100)
    .then(function(posts) {
        console.log(posts[0]);
        return posts;
    }).catch(function(error) {
        console.log(error);
    });
};

function getAll( request ) {
    console.log("start")
    return request.then(function( response ) {
        if ( ! response._paging || ! response._paging.next ) {
            console.log("end")
            return response;
        }
        // Request the next page and return both responses as one collection
        return Promise.all([
            response,
            getAll( response._paging.next ),
            console.log("next")
        ]).then(function( responses ) {
            console.log("flaten")
            return _.flatten( responses );
        });
    });
}

const fetchApiData = async route => {
    try {
      const response = await fetch(route);
      const json = await response.json();
      return json
    } catch (error) {
      console.error(error);
      return null;
    }
  };

    return[getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData];
}