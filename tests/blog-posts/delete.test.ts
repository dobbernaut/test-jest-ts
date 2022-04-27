import { StatusCode } from '@constant/http-response-codes';
import { BlogPost, BlogPosts } from '@service/blog-posts';

describe('Delete blog posts', function () {
  const blogPosts = new BlogPosts();

  let blogPost: BlogPost;

  beforeAll(async () => {
    await blogPosts.getAllPosts().then((response) => {
      expect(response.status).toEqual(StatusCode.Ok);
      blogPost = response.data[0];
    });
  });

  it('Should remove an existing blog post', async () => {
    await blogPosts.deletePost(blogPost.id).then((response) => {
      expect(response.status).toEqual(StatusCode.Ok);
    });
  });
});
