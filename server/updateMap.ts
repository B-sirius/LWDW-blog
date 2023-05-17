// 根据_posts目录生成postMap.json
import matter from "gray-matter";
import fse from 'fs-extra';
import path from 'path';
import dayjs from 'dayjs';
import { PostMap } from './type'

// md是markdown的原始内容，为了能够正确相对正确的展示，我希望获得第一段纯文本内容作为描述，不要标题、列表之类的
// https://stackoverflow.com/a/69656654
function getDescription(md: string) {
    const regex = {
        title: /^#\s+.+/,
        heading: /^#+\s+.+/,
        custom: /\$\$\s*\w+/,
        ol: /\d+\.\s+.*/,
        ul: /\*\s+.*/,
        task: /\*\s+\[.]\s+.*/,
        blockQuote: />.*/,
        table: /\|.*/,
        image: /!\[.+\]\(.+\).*/,
        url: /\[.+\]\(.+\).*/,
        codeBlock: /`{3}\w+.*/,
    };

    const isTitle = (str: string) => regex.title.test(str);
    const isHeading = (str: string) => regex.heading.test(str);
    const isCustom = (str: string) => regex.custom.test(str);
    const isOl = (str: string) => regex.ol.test(str);
    const isUl = (str: string) => regex.ul.test(str);
    const isTask = (str: string) => regex.task.test(str);
    const isBlockQuote = (str: string) => regex.blockQuote.test(str);
    const isImage = (str: string) => regex.image.test(str);
    const isUrl = (str: string) => regex.url.test(str);
    const isCodeBlock = (str: string) => regex.codeBlock.test(str);

    if (!md) return "";
    const tokens = md.split("\n").filter(item => !!item);
    for (let i = 0; i < tokens.length; i++) {
        if (
            isTitle(tokens[i]) ||
            isHeading(tokens[i]) ||
            isCustom(tokens[i]) ||
            isOl(tokens[i]) ||
            isUl(tokens[i]) ||
            isTask(tokens[i]) ||
            isBlockQuote(tokens[i]) ||
            isImage(tokens[i]) ||
            isUrl(tokens[i]) ||
            isCodeBlock(tokens[i])
        )
            continue;

        return `${tokens[i].slice(0, 100)}......`;
    }
    return ""
}

// 映射id于post信息
async function update() {
    // 遍历_posts目录中的md，获取相关的信息
    const newPostMap: PostMap = {};
    const postFileNames = (await fse.readdir('./_posts')).filter(name => !!name && name[0] !== '.');
    const mdPathList = postFileNames.map((name) => ({
        name,
        path: path.join(process.cwd(), '_posts', name)
    }))

    for (const { name, path } of mdPathList) {
        const mdData = await fse.readFile(path);
        const { data: mdInfo, content } = matter(mdData);
        const { title, date, draft = false, slug } = mdInfo;

        if (!draft) {
            newPostMap[slug] = {
                id: slug,
                name,
                title,
                date: dayjs(date).format('YYYY-MM-DD'),
                draft,
                description: getDescription(content),
            }
        }
    }

    await fse.writeFile('postMap.json', JSON.stringify(newPostMap));
}

update();