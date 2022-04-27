import { StatusCode } from '@constant/http-response-codes';
import { BlogPost, BlogPosts, UpdateBlogPost } from '@service/blog-posts';

describe('Add update blog posts', function () {
  const blogPosts = new BlogPosts();

  let blogPost: BlogPost;

  beforeAll(async () => {
    await blogPosts.getAllPosts().then((response) => {
      expect(response.status).toEqual(StatusCode.Ok);
      blogPost = response.data[0];
    });
  });

  describe('Create blog post', () => {
    it('should add a new blog post', async () => {
      const newPost = {
        title: 'New Title',
        body: 'New blog details',
        userId: 1,
      };

      await blogPosts.addPost(newPost).then((response) => {
        expect(response.status).toEqual(StatusCode.Created);
        expect(response.data).toHaveProperty('id');
      });
    });
  });

  describe('Update blog posts', () => {
    it('Should update an existing blog post', async () => {
      const postUpdate: UpdateBlogPost = {
        id: blogPost.id,
        title: 'this is the updated title',
      };

      await blogPosts.updatePost(postUpdate).then((response) => {
        expect(response.status).toEqual(StatusCode.Ok);
        expect(response.data).toMatchObject(postUpdate);
      });
    });

    it('Should return an internal server error when updating a post that does not exist', async () => {
      const postUpdate: UpdateBlogPost = {
        // @ts-expect-error - Ignore type number requirement
        id: 'error',
        title: 'this should not update',
      };

      await blogPosts.updatePost(postUpdate).then((response) => {
        expect(response.status).toEqual(StatusCode.InternalServerError);
      });
    });
  });
});
