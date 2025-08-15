import { href, Link } from 'react-router';
import type { Route } from './+types/posts.route';

export default function PostsLayoutRoute({}: Route.ComponentProps) {
  return (
    <nav>
      <ul>
        <li>
          <Link to={href('/posts/:postId', { postId: 'one' })}>Post One</Link>
        </li>
      </ul>
    </nav>
  );
}
