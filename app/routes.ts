import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.route.tsx'),
  route('/about', 'routes/about.route.tsx'),
] satisfies RouteConfig;
