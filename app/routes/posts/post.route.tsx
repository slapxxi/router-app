import { useSuspenseQuery } from '@tanstack/react-query';
import { href, Link } from 'react-router';
import { wait } from '~/shared/utils';
import type { Route } from './+types/post.route';

export default function PostRoute({ params }: Route.ComponentProps) {
  const { data: _data } = useSuspenseQuery({
    queryKey: ['post', params.postId],
    queryFn: async () => {
      await wait(2000);
      return { id: 'one' };
    },
  });

  return (
    <div className="my-4 flex flex-col gap-4">
      <nav className="text-neutral-500">
        <ol className="flex gap-2 [&>*]:after:content-['_>'] [&>*]:last-of-type:after:content-['_']">
          <li>
            <Link to={href('/posts')}>Posts</Link>
          </li>
          <li className="font-semibold text-neutral-900">
            <Link to={href('/posts/:postId', { postId: params.postId })}>{params.postId}</Link>
          </li>
        </ol>
      </nav>

      <div className="rounded border p-2 shadow">
        <h2>Post "{params.postId}"</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi enim dicta repellendus neque porro vero
          nostrum laudantium cumque illo rerum sapiente distinctio, ea iste doloribus tempore error atque debitis ab!
        </p>
      </div>
    </div>
  );
}

export async function loader({}: Route.LoaderArgs) {
  console.log('post loader');
}
