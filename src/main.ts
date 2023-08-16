import {
  getChannelName,
  createQRCode,
  writeToMarkdown,
  createMarkdownData,
} from "./generateCode";

const urls = [
  "https://www.youtube.com/@codeorg",
  "https://www.youtube.com/@CoderbyteDevelopers",
  "https://www.youtube.com/@Codesmith",
  "https://www.youtube.com/@craigndave",
  "https://www.youtube.com/@decomplexify",
  "https://www.youtube.com/@Fireship",
  "https://www.youtube.com/@freecodecamp",
  "https://www.youtube.com/@funfunfunction",
  "https://www.youtube.com/@KevinPowell",
  "https://www.youtube.com/@NetNinja",
  "https://www.youtube.com/@TraversyMedia",
  "https://www.youtube.com/@WesBos",
];

async function main(urls: string[]) {
  let markdownString = ``;
  for (const url of urls) {
    const channelName = getChannelName(url);
    await createQRCode(url, channelName);
    markdownString += createMarkdownData(url, channelName);
  }
  writeToMarkdown(markdownString);
}

void main(urls);
