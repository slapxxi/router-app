import type { Route } from './+types/sse.route';

export async function loader({ request }: Route.LoaderArgs) {
  const stream = new ReadableStream({
    start(controller) {
      let count = 0;

      const send = () => {
        count++;
        controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ count })}\n\n`));
      };

      send();

      const interval = setInterval(send, 2000);

      request.signal.addEventListener('abort', () => {
        clearInterval(interval);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/event-stream',
    },
  });
}
