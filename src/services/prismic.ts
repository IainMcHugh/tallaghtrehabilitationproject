import Prismic from '@prismicio/client';

function usePrismic() {
  const apiEndpoint = 'https://tallaghtrehabproject.cdn.prismic.io/api/v2';
  return Prismic.client(apiEndpoint);
}

export { usePrismic };
