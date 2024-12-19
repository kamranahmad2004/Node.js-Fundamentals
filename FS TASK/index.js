import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unorganizedFilesDir = path.join(__dirname, "UnorganizedFiles");
const destinationDir = path.join(__dirname, "organizedFiles");

// Ensure a directory exists (create if not)
const ensureDir = async (dir) => {
  try {
    await fs.access(dir, fs.constants.F_OK);    // Check if folder exists
  } catch (error) {
    await fs.mkdir(dir, { recursive: true });   // Create folder if it doesn't exist, including nested ones..
    console.log(`Created directory: ${dir}`);
  }
};

async function main() {
    await ensureDir(destinationDir)
    
    const files = await fs.readdir(unorganizedFilesDir);
    for (const file of files){
        const extName = path.extname(file);
        let subFolder = "";
        if(extName === '.txt') subFolder = "TextFiles";
        else if(['.png', '.jpg', '.jpeg'].includes(extName)) subFolder = "ImageFiles";
        else if(['.mp4', '.mkv'].includes(extName)) subFolder = "VideoFiles";
        else if(['.html', '.css', '.js', '.json'].includes(extName)) subFolder = "CodeFiles";
        else subFolder = "OtherFiles";

        await ensureDir(path.join(destinationDir, subFolder));

        await fs.rename(path.join(unorganizedFilesDir, file), path.join(destinationDir, subFolder, file));
        console.log(`Moved ${file} to ${subFolder}`);
    }
}

main().catch((err) => console.error(err));