import fs from "fs";
import QRCode from "qrcode";

export async function createQRCode(url: string, channelName: string) {
  await QRCode.toFile(`./outputImages/qrcode_${channelName}.png`, url);
}

export function getChannelName(url: string) {
  return url.split("@")[1];
}

export function writeToMarkdown(data: string) {
  fs.writeFileSync("./qrcodes.md", data);
}

export function createMarkdownData(url: string, channelName: string): string {
  return `${channelName} - ${url}\n\n![${channelName} qrcode](./outputImages/qrcode_${channelName}.png)\n\n---\n\n`;
}
