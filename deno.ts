import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';

const server = serve({ port: 4000 });

for await (const req of server) {
  console.log('Incoming request');

  req.respond({
    body: 'Message from deno!',
  });
}
