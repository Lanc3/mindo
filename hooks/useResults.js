var WPAPI = require( 'wpapi/superagent' );

let wp = new WPAPI({endpoint:'https://medicalindependent.ie/wp-json/'});

export const getMediaAPI = async(id) => {
    try{
        const response = await wp.media().id(id);
        return response.guid.rendered.toString();
    }catch(error){

    }
}

export const getLastPost = async() => {
    try{
        const response = await wp.posts().perPage(1);
        return response[0].date.toString();
    }catch(error){

    }
}
export const getAllArticles = async() => {
  const response = await getCategoyIdBySlug("latest-news");
}

export const postToken = async(token) => {
    try{
      const response = await fetch(`https://dev.medicalindependent.ie?lceps_key=6266d56cd816a&add_token=${token}`, {
	          method: 'post',
	          body: JSON.stringify(token),
	          headers: {'Content-Type': 'application/json'}
        });
        return response;
    }catch(error){

    }
}

export const getPostsByCategory = async(categoryID,pageNumber) => {
    try{
        const response = await wp.posts().categories(categoryID).perPage(10).page(pageNumber);
        const posts = await JSON.stringify(response);
        return posts;
    }catch(error){
        console.log("getPostsByCategory : "+error)
    };
};

export const getLatestPostsByCategory = async(categoryID) => {
  try{
      const response = await wp.posts().categories(categoryID).perPage(1);
      return response[0].date.toString();
  }catch(error){
      console.log("getLatestPostsByCategory : "+error)
  };
};

export const getDescriptionByCategory = async(categoryID,pageNumber) => {
    try{
        const discription = await wp.categories().id(categoryID)
        return discription["description"];
    }catch(error){
        console.log("getPostsByCategory : "+error)
    };
};

export const getCategoyIdBySlug = async(categorySlug) =>{
    try{
        const response = await wp.categories().slug(categorySlug);
        const json = await response[0].id;
        return json;
    }catch (error){
        console.log(error);
    }

};


export const getTotalPostByAuthor = async (id) => {
    try {
        const response = await fetch(`https://medicalindependent.ie/wp-json/wp/v2/posts?filter[author]=${id}`);
        const total = await response.headers.map["x-wp-totalpages"];
        return total;
    } catch (error) {
      console.error(error);
    }
  };
  export const getPostByAuthorId = async (id) => {
    try {
        const response = await fetch(`https://medicalindependent.ie/wp-json/wp/v2/posts?filter[author]=${id}`);
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error);
      }
        //https://medicalindependent.ie/wp-json/wp/v2/posts?filter[author]=3248
  };

  export const fetchApiData = async (slug) => {
    try {
      const response = await fetch(`https://medicalindependent.ie/wp-json/wp/v2/posts?category_slug=${slug}`);
      const json = await response.json();
      const total = await response.headers.map["x-wp-totalpages"];
      return total;
    } catch (error) {
      console.error(error);
    }
  };