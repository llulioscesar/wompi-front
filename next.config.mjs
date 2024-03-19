/** @type {import('next').NextConfig} */
import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {glob} from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sassDirectories = glob.sync(join(__dirname, 'src/**/'))

const nextConfig = {
    output: 'export',
    images:{
        unoptimized: true,
    },
    distDir: 'build',
    sassOptions: {
        includePaths: sassDirectories,
    },
};

export default nextConfig;
