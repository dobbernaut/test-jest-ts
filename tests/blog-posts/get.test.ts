import { StatusCode } from '@constant/http-response-codes';
import { BlogPost, BlogPosts } from '@service/blog-posts';

describe('Get blog posts', function () {
  const blogPosts = new BlogPosts();

  let blogPost: BlogPost;

  beforeAll(async () => {
    await blogPosts.getAllPosts().then((response) => {
      expect(response.status).toEqual(StatusCode.Ok);
      blogPost = response.data[0];
    });
  });

  it('Should return all blog posts', async () => {
    await blogPosts.getAllPosts().then((response) => {
      const posts = response.data;
      expect(posts).toBeInstanceOf(Array);
      posts.forEach((post) => {
        expect(Object.keys(post)).toEqual(expect.arrayContaining(['id', 'title', 'body', 'userId']));
      });
    });
  });

  it('Should return blog post details', async () => {
    await blogPosts.getPost(blogPost.id).then((response) => {
      const post = response.data;
      expect(post).toBeInstanceOf(Object);
      expect(Object.keys(post)).toEqual(expect.arrayContaining(['id', 'title', 'body', 'userId']));
    });
  });

  it('Should return page not found error when getting a post with an invalid post id', async () => {
    // @ts-expect-error - Ignore type number requirement
    await blogPosts.getPost('error').then((response) => {
      expect(response.status).toEqual(StatusCode.NotFound);
    });
  });

  it('Should return blog posts of a user given a user id', async () => {
    await blogPosts.getPostsByUser(blogPost.userId).then((response) => {
      const posts = response.data;
      expect(posts).toBeInstanceOf(Array);
      posts.forEach((post) => {
        expect(post.userId).toEqual(blogPost.userId);
      });
    });
  });

  it('Should return an empty list if user does not exist', async () => {
    // @ts-expect-error - Ignore type number requirement
    await blogPosts.getPostsByUser('error').then((response) => {
      const posts = response.data;
      expect(posts).toBeInstanceOf(Array);
      expect(posts).toHaveLength(0);
    });
  });
});
