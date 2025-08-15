import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.route.tsx'),
  route('about', 'routes/about.route.tsx'),

  route('posts', 'routes/posts/posts.route.tsx', [
    index('routes/posts/index.route.tsx'),
    route('new', 'routes/posts/new-post.route.tsx'),
    route(':postId', 'routes/posts/post.route.tsx'),
  ]),

  route('sse', 'routes/sse.route.tsx'),
] satisfies RouteConfig;
