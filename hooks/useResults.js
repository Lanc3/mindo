var WPAPI = require('wpapi/superagent')

let wp = new WPAPI({ endpoint: 'https://medicalindependent.ie/wp-json/' })

export const fetchWithTimeout = async (resource, options = {}) => {
  const { timeout = 8000 } = options
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  })
  clearTimeout(id)
  return response
}

export const fetchWithCancel = (url, options = {}) => {
  const controller = new AbortController()
  const call = fetch(url, { ...options, signal: controller.signal })
  const cancel = () => controller.abort()
  return [call, cancel]
}

export const getMediaAPI = async (id) => {
  try {
    const response = await wp.media().id(id)
    return response.guid.rendered.toString()
  } catch (error) {}
}
export const searchArticles = async (search_term, amount, paged) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/mindo/v1/search/?search_term=${search_term}&amount=${amount}&paged=${paged}`,
    )
    const json = await response.json()
    return json
  } catch (error) {
  } finally {
  }
}

export const getAuthorName = async (id) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/search/v1/getauthor/?author_id=${id}`,
    )
    const json = await response.json()
    return json
  } catch (error) {}
}

export const getLastPost = async () => {
  try {
    const response = await wp.posts().perPage(1)
    return response[0].date.toString()
  } catch (error) {}
}
export const getAllArticles = async () => {
  const response = await getCategoyIdBySlug('latest-news')
}

export const postToken = async (token) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/mindo/v1/register_device/?expo_push_id=${token}`,
    )
  } catch (error) {
    console.log(error)
  } finally {
    return true
  }
}

export const removeToken = async (token) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/mindo/v1/deregister_device/?expo_push_id=${token}`,
    )
  } catch (error) {}
}

export const newGetPostsByCatSlug = async (slug, amount, paged) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/mindo/v1/category-posts/?slug=${slug}&amount=${amount}&paged=${paged}`,
    )
    const json = await response.json()
    return json
  } catch (error) {}
}

export const newGetPostsByAuthor = async (id, amount, paged) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/mindo/v1/author-posts/?author_id=${id}&amount=${amount}&paged=${paged}`,
    )
    const json = await response.json()
    return json
  } catch (error) {}
}

export const newGetMostReadPosts = async (amount, paged) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/mindo/v1/most-read-posts/?amount=${amount}&paged=${paged}`,
    )
    const json = await response.json()
    return json
  } catch (error) {}
}

export const getPostsByCategory = async (categoryID, pageNumber) => {
  try {
    const response = await wp
      .posts()
      .categories(categoryID)
      .perPage(10)
      .page(pageNumber)
    const posts = await JSON.stringify(response)
    return posts
  } catch (error) {}
}

export const getLatestPostsByCategory = async (categoryID) => {
  try {
    const response = await wp.posts().categories(categoryID).perPage(1)
    return response[0].date.toString()
  } catch (error) {}
}

export const getDescriptionByCategory = async (categoryID, pageNumber) => {
  try {
    const discription = await wp.categories().id(categoryID)
    return discription['description']
  } catch (error) {}
}

export const getCategoyIdBySlug = async (categorySlug) => {
  try {
    const response = await wp.categories().slug(categorySlug)
    const json = await response[0].id
    return json
  } catch (error) {}
}

export const getTotalPostByAuthor = async (id) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/wp/v2/posts?filter[author]=${id}`,
    )
    const total = await response.headers.map['x-wp-totalpages']
    return total
  } catch (error) {
    console.error(error)
  }
}
export const getPostByAuthorId = async (id) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/wp/v2/posts?filter[author]=${id}`,
    )
    const json = await response.json()
    return json
  } catch (error) {
    console.error(error)
  }
  //https://medicalindependent.ie/wp-json/wp/v2/posts?filter[author]=3248
}

export const fetchApiData = async (slug) => {
  try {
    const response = await fetch(
      `https://medicalindependent.ie/wp-json/wp/v2/posts?category_slug=${slug}`,
    )
    const json = await response.json()
    const total = await response.headers.map['x-wp-totalpages']
    return total
  } catch (error) {
    console.error(error)
  }
}
