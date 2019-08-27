import client from '../plugins/contentful'

let items = [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "l85ab0at1rks"
          }
        },
        "id": "79x0E2PlumfRPN5AnnvJBX",
        "type": "Entry",
        "createdAt": "2019-08-09T20:28:48.982Z",
        "updatedAt": "2019-08-13T17:09:30.636Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 4,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blogPost"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "This is the first Blog Post",
        "slug": "about",
        "description": "Eric is here",
        "content": "This is the dummy data for the content"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "l85ab0at1rks"
          }
        },
        "id": "1d7RV7h6h9MnfOmGACHBUy",
        "type": "Entry",
        "createdAt": "2019-08-16T23:07:44.752Z",
        "updatedAt": "2019-08-16T23:07:44.752Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blogPost"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Fourth",
        "slug": "fourth",
        "description": "fourth",
        "content": "fourth"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "l85ab0at1rks"
          }
        },
        "id": "4BEff8xTSsJHqyCE2swIEt",
        "type": "Entry",
        "createdAt": "2019-08-16T22:56:17.337Z",
        "updatedAt": "2019-08-16T22:56:17.337Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blogPost"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Third entry",
        "slug": "third",
        "description": "This is the third entry",
        "content": "Hello world"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "l85ab0at1rks"
          }
        },
        "id": "7uYMlQsGy2rbIYwIcqaTFA",
        "type": "Entry",
        "createdAt": "2019-08-16T15:22:09.898Z",
        "updatedAt": "2019-08-16T15:22:09.898Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blogPost"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "The second Blog post",
        "slug": "second",
        "description": "testing second entry",
        "content": "We have been doing great for contentful"
      }
    }
  ];

let aem = {
    "contentfragment": {
        "columnClassNames": "aem-GridColumn aem-GridColumn--default--12",
        "description": "",
        "title": "First Blog",
        "model": "we-retail/models/blog-post",
        "elements": {
            "title": {
                "value": "My first blog title",
                "title": "Title",
                "dataType": "string",
                ":type": "string"
            },
            "slug": {
                "value": "firstBlogSlug",
                "title": "Slug",
                "dataType": "string",
                ":type": "string"
            },
            "description": {
                "value": "First Blog Description",
                "title": "Description",
                "dataType": "string",
                ":type": "string"
            },
            "content": {
                "value": "\u003Cp\u003EThis is my first blog post\u003C/p\u003E\n",
                "title": "Content",
                "dataType": "string",
                "paragraphs": [""],
                ":type": "text/html"
            }
        },
        "elementsOrder": ["title", "slug", "description", "content"],
        ":items": {},
        ":itemsOrder": [],
        ":type": "weretail/components/content/contentfragment"
    },
    "contentfragment_846805422": {
        "columnClassNames": "aem-GridColumn aem-GridColumn--default--12",
        "description": "",
        "title": "Second Post",
        "model": "we-retail/models/blog-post",
        "elements": {
            "title": {
                "value": "My Second Post Title",
                "title": "Title",
                "dataType": "string",
                ":type": "string"
            },
            "slug": {
                "value": "secondPostSlug",
                "title": "Slug",
                "dataType": "string",
                ":type": "string"
            },
            "description": {
                "value": "Second Post Description",
                "title": "Description",
                "dataType": "string",
                ":type": "string"
            },
            "content": {
                "value": "\u003Cp\u003EThis is my second post\u003C/p\u003E\n",
                "title": "Content",
                "dataType": "string",
                "paragraphs": [""],
                ":type": "text/html"
            }
        },
        "elementsOrder": ["title", "slug", "description", "content"],
        ":items": {},
        ":itemsOrder": [],
        ":type": "weretail/components/content/contentfragment"
    }
};


export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, payload) {
        console.log('In setPosts, payload=', payload);
        state.posts = payload
    },
}

export const actions = {
    async getPosts({commit}) {
        /*
        const response = await client.getEntries({
            content_type: 'blogPost'
        })
        console.log('response:', response);
        if (response.items.length > 0) {
            commit('setPosts', response.items)
        }
        */
       
       //commit('setPosts', items);
       const response = await this.$axios.$get('http://localhost:4502/content/we-retail/api/blog.model.json');
       //console.log('response:', response);

       let vArray = Object.values(response[':items']['root'][':items']);
       //console.log('vArray:', vArray);
       commit('setPosts', vArray);
    }
}