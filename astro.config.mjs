// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],


  site: 'https://test2-5ws.pages.dev',
  adapter: cloudflare(),

  // TypeScript設定を追加
  typescript: {
    // TypeScriptの厳密なチェックを緩和
    strict: false,
    checkJs: false
  },
  // Vite設定でesbuildのターゲットを指定
  vite: {
    esbuild: {
      target: 'es2020'
    }
  },
  markdown: {
    // remarkプラグインはimportしたものを配列で指定
    remarkPlugins: [remarkGfm],
    // rehypeプラグインも必要ならここに追加
    rehypePlugins: [],
    // シンタックスハイライトの設定（shiki or prism）
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    // ドラフト機能
    drafts: false,
    // remark-rehypeの追加設定（必要な場合のみ）
    remarkRehype: {
      footnoteLabel: "脚注"
    }
  }
});