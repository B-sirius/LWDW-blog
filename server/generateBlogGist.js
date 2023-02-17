const dayjs = require('dayjs');
const fs = require('fs');
const postMap = require('../postMap.json');

function generateBlogGist() {
    const gistPosts = Object
        .values(postMap)
        .sort((post1, post2) => {
            const date1 = dayjs(post1.date);
            const date2 = dayjs(post2.date);
            if (date1.isBefore(date2)) {
                return 1;
            }
            return -1;
        })
        .slice(0, 5);

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