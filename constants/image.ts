const PREFIX = 'https://cdn.jsdelivr.net/gh/B-sirius/blog-images@chore-upload/gallery/';

export const IMAGES = [
    {
        title: '雕塑展',
        path: '1.jpeg',
    }
].map(item => ({
    url: `${PREFIX}${item.path}`,
    ...item
}));
