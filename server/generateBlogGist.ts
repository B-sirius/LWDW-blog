import fs from 'fs';
import getSortedPosts from './getSortedPosts';

const sortedPosts = getSortedPosts();

function generateBlogGist() {
    const gistPosts = sortedPosts.slice(0, 5);

    let text = ``;

    for (let i = 0; i < gistPosts.length; i++) {
        const { title } = gistPosts[i];
        text += `${title}`;
        if (i !== gistPosts.length - 1) {
            text += `\n`;
        }
    }

    if (!fs.existsSync('./docs')) {
        fs.mkdirSync('./docs');
    }
    fs.writeFileSync('./docs/gist.txt', text);
}

generateBlogGist();
