import{_ as e,c as i,o,a as l}from"./app.3971371d.js";const g=JSON.parse('{"title":"\uBE4C\uB4DC \uC635\uC158","description":"","frontmatter":{"title":"\uBE4C\uB4DC \uC635\uC158"},"headers":[{"level":2,"title":"build.target","slug":"build-target"},{"level":2,"title":"build.polyfillModulePreload","slug":"build-polyfillmodulepreload"},{"level":2,"title":"build.outDir","slug":"build-outdir"},{"level":2,"title":"build.assetsDir","slug":"build-assetsdir"},{"level":2,"title":"build.assetsInlineLimit","slug":"build-assetsinlinelimit"},{"level":2,"title":"build.cssCodeSplit","slug":"build-csscodesplit"},{"level":2,"title":"build.cssTarget","slug":"build-csstarget"},{"level":2,"title":"build.sourcemap","slug":"build-sourcemap"},{"level":2,"title":"build.rollupOptions","slug":"build-rollupoptions"},{"level":2,"title":"build.commonjsOptions","slug":"build-commonjsoptions"},{"level":2,"title":"build.dynamicImportVarsOptions","slug":"build-dynamicimportvarsoptions"},{"level":2,"title":"build.lib","slug":"build-lib"},{"level":2,"title":"build.manifest","slug":"build-manifest"},{"level":2,"title":"build.ssrManifest","slug":"build-ssrmanifest"},{"level":2,"title":"build.ssr","slug":"build-ssr"},{"level":2,"title":"build.minify","slug":"build-minify"},{"level":2,"title":"build.terserOptions","slug":"build-terseroptions"},{"level":2,"title":"build.write","slug":"build-write"},{"level":2,"title":"build.emptyOutDir","slug":"build-emptyoutdir"},{"level":2,"title":"build.reportCompressedSize","slug":"build-reportcompressedsize"},{"level":2,"title":"build.chunkSizeWarningLimit","slug":"build-chunksizewarninglimit"},{"level":2,"title":"build.watch","slug":"build-watch"}],"relativePath":"config/build-options.md"}'),r={name:"config/build-options.md"},d=l(`<h1 id="build-options" tabindex="-1">\uBE4C\uB4DC \uC635\uC158 <a class="header-anchor" href="#build-options" aria-hidden="true">#</a></h1><h2 id="build-target" tabindex="-1">build.target <a class="header-anchor" href="#build-target" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>string | string[]</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>&#39;modules&#39;</code></li><li><strong>\uCC38\uACE0:</strong> <a href="/guide/build.html#browser-compatibility">\uBE0C\uB77C\uC6B0\uC800 \uC9C0\uC6D0 \uD604\uD669</a></li></ul><p>\uCD5C\uC885 \uBC88\uB4E4\uC744 \uC704\uD55C \uBE0C\uB77C\uC6B0\uC800 \uD638\uD658\uC131 \uD0C0\uAE43\uC785\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 Vite \uD2B9\uC218 \uAC12\uC73C\uB85C, <a href="https://caniuse.com/es6-module" target="_blank" rel="noopener noreferrer">\uB124\uC774\uD2F0\uBE0C ES \uBAA8\uB4C8</a> \uBC0F <a href="https://caniuse.com/es6-module-dynamic-import" target="_blank" rel="noopener noreferrer">\uB124\uC774\uD2F0\uBE0C ESM\uC758 \uB3D9\uC801 Import</a>\uB97C \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800 \uD0C0\uAE43\uC73C\uB85C \uD558\uB294 <code>&#39;module&#39;</code> \uC785\uB2C8\uB2E4.</p><p>\uB610 \uB2E4\uB978 \uD2B9\uC218 \uAC12\uC740 <code>&#39;esnext&#39;</code>\uC785\uB2C8\uB2E4. \uC774\uB294 \uB124\uC774\uD2F0\uBE0C \uB3D9\uC801 \uAC00\uC838\uC624\uAE30\uAC00 \uC9C0\uC6D0\uB418\uB294 \uAC83\uC73C\uB85C \uAC00\uC815\uD558\uACE0 \uAC00\uB2A5\uD55C \uD55C \uC801\uAC8C \uD2B8\uB79C\uC2A4\uD30C\uC77C \uB429\uB2C8\uB2E4:</p><ul><li><a href="#build-minify"><code>build.minify</code></a> \uC635\uC158\uC774 <code>&#39;terser&#39;</code> \uC774\uB77C\uBA74, <code>&#39;esnext&#39;</code>\uB294 <code>&#39;es2021&#39;</code>\uB85C \uB2E4\uC6B4 \uC124\uC815\uB429\uB2C8\uB2E4.</li><li>\uB2E4\uB978 \uACBD\uC6B0\uC5D0\uB294, \uC804\uD600 \uD2B8\uB79C\uC2A4\uD30C\uC77C\uC774 \uC218\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</li></ul><p>\uBCC0\uD658\uC740 esbuild\uB85C \uC218\uD589\uB418\uBA70, \uAC12\uC740 \uC720\uD6A8\uD55C <a href="https://esbuild.github.io/api/#target" target="_blank" rel="noopener noreferrer">esbuild \uD0C0\uAE43 \uC635\uC158</a>\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uD0C0\uAE43\uC740 ES \uBC84\uC804 (\uC608: <code>es2015</code>)\uC774\uB098 \uBC84\uC804\uC774 \uC788\uB294 \uBE0C\uB77C\uC6B0\uC800 (\uC608: <code>chrome58</code>) \uB610\uB294 \uB2E4\uC911 \uD0C0\uAE43 \uBB38\uC790\uC5F4\uC758 \uBC30\uC5F4\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uCF54\uB4DC\uC548\uC5D0 esbuild\uB85C \uC548\uC804\uD558\uAC8C \uD2B8\uB79C\uC2A4\uD30C\uC77C \uD560 \uC218 \uC5C6\uB294 \uAE30\uB2A5\uC774 \uD3EC\uD568\uB41C \uACBD\uC6B0 \uBE4C\uB4DC\uB294 \uC2E4\uD328\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC790\uC138\uD55C \uC810\uC740 <a href="https://esbuild.github.io/content-types/#javascript" target="_blank" rel="noopener noreferrer">esbuild \uBB38\uC11C</a>\uB97C \uD655\uC778\uD558\uC138\uC694.</p><h2 id="build-polyfillmodulepreload" tabindex="-1">build.polyfillModulePreload <a class="header-anchor" href="#build-polyfillmodulepreload" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>true</code></li></ul><p><a href="https://guybedford.com/es-module-preloading-integrity#modulepreload-polyfill" target="_blank" rel="noopener noreferrer">\uBAA8\uB4C8 \uBBF8\uB9AC\uB85C\uB4DC \uD3F4\uB9AC\uD544</a>\uC744 \uC790\uB3D9\uC73C\uB85C \uC8FC\uC785\uD560\uC9C0 \uC5EC\uBD80\uC785\uB2C8\uB2E4.</p><p>true\uB85C \uC124\uC815\uD558\uBA74 \uD3F4\uB9AC\uD544\uC774 \uAC01 <code>index.html</code> \uD56D\uBAA9\uC758 \uD504\uB85D\uC2DC \uBAA8\uB4C8\uC5D0 \uC790\uB3D9\uC73C\uB85C \uC8FC\uC785\uB429\uB2C8\uB2E4. \uBE4C\uB4DC\uAC00 <code>build.rollupOptions.input</code>\uC744 \uD1B5\uD574 \uBE44 html \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC9C4\uC785\uC810\uC744 \uC0AC\uC6A9\uD558\uB3C4\uB85D \uAD6C\uC131\uB41C \uACBD\uC6B0, \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC9C4\uC785\uC810\uC5D0 \uD3F4\uB9AC\uD544\uC744 \uC218\uB3D9\uC73C\uB85C \uAC00\uC838\uC640\uC57C \uD569\uB2C8\uB2E4:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite/modulepreload-polyfill</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>\uCC38\uACE0: \uD3F4\uB9AC\uD544\uC740 <a href="/guide/build.html#library-mode">\uB77C\uC774\uBE0C\uB7EC\uB9AC \uBAA8\uB4DC</a>\uC5D0 \uC801\uC6A9\uB418\uC9C0 <strong>\uC54A\uC2B5\uB2C8\uB2E4</strong>. \uB124\uC774\uD2F0\uBE0C \uB3D9\uC801 \uAC00\uC838\uC624\uAE30 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC9C0\uC6D0\uD574\uC57C \uD55C\uB2E4\uBA74, \uC544\uB9C8\uB3C4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uC11C \uC774\uAC83\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.</p><h2 id="build-outdir" tabindex="-1">build.outDir <a class="header-anchor" href="#build-outdir" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>string</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>dist</code></li></ul><p>(<a href="/guide/#index-html-and-project-root">\uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8</a>\uC5D0 \uC0C1\uB300\uC801\uC778) \uCD9C\uB825 \uB514\uB809\uD130\uB9AC\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.</p><h2 id="build-assetsdir" tabindex="-1">build.assetsDir <a class="header-anchor" href="#build-assetsdir" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>string</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>assets</code></li></ul><p>\uC0DD\uC131\uB41C \uC5D0\uC14B\uC744 (<code>build.outDir</code>\uC5D0 \uC0C1\uB300\uC801\uC73C\uB85C) \uC800\uC7A5\uD560 \uB514\uB809\uD130\uB9AC\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.</p><h2 id="build-assetsinlinelimit" tabindex="-1">build.assetsInlineLimit <a class="header-anchor" href="#build-assetsinlinelimit" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>number</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>4096</code> (4kb)</li></ul><p>\uC774 \uAC12\uBCF4\uB2E4 \uC791\uC740 \uD06C\uAE30\uB85C import \uB418\uAC70\uB098 \uCC38\uC870\uB41C \uC5D0\uC14B\uC740 \uBD80\uAC00\uC801\uC778 http \uC694\uCCAD\uC744 \uD53C\uD558\uACE0\uC790 base64 URL\uB85C \uC778\uB77C\uC778 \uCC98\uB9AC\uB429\uB2C8\uB2E4. \uB9CC\uC77C \uC778\uB77C\uC778 \uBCC0\uD658\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uB824\uBA74 <code>0</code>\uC73C\uB85C \uC124\uC815\uD558\uC138\uC694.</p><div class="tip custom-block"><p class="custom-block-title">\uCC38\uACE0</p><p><code>build.lib</code>\uB97C \uC9C0\uC815\uD558\uBA74, <code>build.assetsInlineLimit</code>\uB294 \uBB34\uC2DC\uB418\uBA70 \uD30C\uC77C \uD06C\uAE30\uC640 \uAD00\uACC4\uC5C6\uC774 \uC5D0\uC14B\uC774 \uD56D\uC0C1 \uC778\uB77C\uC778 \uCC98\uB9AC\uB429\uB2C8\uB2E4.</p></div><h2 id="build-csscodesplit" tabindex="-1">build.cssCodeSplit <a class="header-anchor" href="#build-csscodesplit" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>true</code></li></ul><p>CSS \uCF54\uB4DC \uBD84\uD560\uC744 \uD65C\uC131\uD654/\uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uD65C\uC131\uD654\uB41C \uACBD\uC6B0 \uBE44\uB3D9\uAE30 \uCCAD\uD06C\uB85C \uAC00\uC838\uC628 CSS\uAC00 \uBE44\uB3D9\uAE30 \uCCAD\uD06C \uC548\uC73C\uB85C \uC778\uB77C\uC778 \uCC98\uB9AC\uB418\uACE0 \uCCAD\uD06C\uAC00 \uB85C\uB4DC\uB420 \uB54C \uC0BD\uC785\uB429\uB2C8\uB2E4.</p><p>\uBE44\uD65C\uC131\uD654\uB41C \uACBD\uC6B0, \uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8\uC758 \uBAA8\uB4E0 CSS\uAC00 \uB2E8\uC77C CSS \uD30C\uC77C\uB85C \uCD94\uCD9C\uB429\uB2C8\uB2E4.</p><div class="tip custom-block"><p class="custom-block-title">\uCC38\uACE0</p><p>\uB9CC\uC57D <code>build.lib</code>\uC73C\uB85C \uC9C0\uC815\uD558\uAC8C \uB418\uBA74, <code>build.cssCodeSplit</code>\uC774 \uAE30\uBCF8\uC801\uC73C\uB85C <code>false</code>\uAC00 \uB429\uB2C8\uB2E4.</p></div><h2 id="build-csstarget" tabindex="-1">build.cssTarget <a class="header-anchor" href="#build-csstarget" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>string | string[]</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <a href="#build-target"><code>build.target</code></a>\uACFC \uB3D9\uC77C\uD569\uB2C8\uB2E4.</li></ul><p>\uC774 \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uBA74 CSS \uC555\uCD95(Minification) \uC2DC \uD0C0\uAE43\uC774 \uB418\uB294 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC77C\uBC18\uC801\uC73C\uB85C \uBE44\uC8FC\uB958 \uBE0C\uB77C\uC6B0\uC800\uB97C \uB300\uC0C1\uC73C\uB85C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uB418\uBA70, Android WeChat WebView\uB97C \uC608\uB85C \uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBE0C\uB77C\uC6B0\uC800\uB294 \uB300\uBD80\uBD84\uC758 \uCD5C\uC2E0 JavaScript \uBB38\uBC95\uC744 \uC9C0\uC6D0\uD558\uC9C0\uB9CC <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors" target="_blank" rel="noopener noreferrer">16\uC9C4\uC218 CSS \uC0C9\uC0C1 \uD45C\uAE30\uBC95\uC778 <code>#RGBA</code></a>\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0, Vite\uAC00 <code>rgba()</code> \uC0C9\uC0C1\uC744 <code>#RGBA</code> 16\uC9C4\uC218 \uD45C\uAE30\uBC95\uC73C\uB85C \uBCC0\uD658\uD558\uB294 \uAC83\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 <code>build.cssTarget</code>\uC744 <code>chrome61</code>\uB85C \uC124\uC815\uD574\uC918\uC57C \uD569\uB2C8\uB2E4.</p><h2 id="build-sourcemap" tabindex="-1">build.sourcemap <a class="header-anchor" href="#build-sourcemap" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean | &#39;inline&#39; | &#39;hidden&#39;</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>false</code></li></ul><p>\uD504\uB85C\uB355\uC158\uC5D0\uC11C \uC18C\uC2A4 \uB9F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. <code>true</code>\uC778 \uACBD\uC6B0 \uBCC4\uB3C4\uC758 \uC18C\uC2A4 \uB9F5 \uD30C\uC77C\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4. <code>&#39;inline&#39;</code>\uC778 \uACBD\uC6B0 \uC18C\uC2A4 \uB9F5\uC774 \uACB0\uACFC \uCD9C\uB825 \uD30C\uC77C\uC5D0 \uB370\uC774\uD130 URI\uB85C \uCD94\uAC00\uB429\uB2C8\uB2E4. <code>&#39;hidden&#39;</code>\uC740 \uBC88\uB4E4 \uD30C\uC77C\uC758 \uD574\uB2F9 \uC18C\uC2A4 \uB9F5 \uC124\uBA85\uC774 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0 <code>true</code>\uC640 \uAC19\uC774 \uC791\uB3D9\uD569\uB2C8\uB2E4.</p><h2 id="build-rollupoptions" tabindex="-1">build.rollupOptions <a class="header-anchor" href="#build-rollupoptions" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <a href="https://rollupjs.org/guide/en/#big-list-of-options" target="_blank" rel="noopener noreferrer"><code>RollupOptions</code></a></li></ul><p>\uAE30\uC874 Rollup \uBC88\uB4E4\uC744 \uCEE4\uC2A4\uD140\uD569\uB2C8\uB2E4. \uC774\uB294 Rollup \uC124\uC815 \uD30C\uC77C\uC5D0\uC11C \uB0B4\uBCF4\uB0BC \uC218 \uC788\uB294 \uC635\uC158\uACFC \uAC19\uC73C\uBA70 Vite\uC758 \uB0B4\uBD80 Rollup \uC635\uC158\uACFC \uBCD1\uD569\uB429\uB2C8\uB2E4. \uB354 \uC790\uC138\uD55C \uC810\uC740 <a href="https://rollupjs.org/guide/en/#big-list-of-options" target="_blank" rel="noopener noreferrer">Rollup \uC635\uC158 \uBB38\uC11C</a>\uB97C \uCC38\uACE0\uD558\uC138\uC694.</p><h2 id="build-commonjsoptions" tabindex="-1">build.commonjsOptions <a class="header-anchor" href="#build-commonjsoptions" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <a href="https://github.com/rollup/plugins/tree/master/packages/commonjs#options" target="_blank" rel="noopener noreferrer"><code>RollupCommonJSOptions</code></a></li></ul><p><a href="https://github.com/rollup/plugins/tree/master/packages/commonjs" target="_blank" rel="noopener noreferrer">@rollup/plugin-commonjs</a>\uC5D0 \uC804\uB2EC\uD560 \uC635\uC158\uC785\uB2C8\uB2E4.</p><h2 id="build-dynamicimportvarsoptions" tabindex="-1">build.dynamicImportVarsOptions <a class="header-anchor" href="#build-dynamicimportvarsoptions" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <a href="https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#options" target="_blank" rel="noopener noreferrer"><code>RollupDynamicImportVarsOptions</code></a></li><li><strong>\uCC38\uACE0:</strong> <a href="/guide/features.html#dynamic-import">\uB3D9\uC801 Import</a></li></ul><p><a href="https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars" target="_blank" rel="noopener noreferrer">@rollup/plugin-dynamic-import-vars</a>\uC5D0 \uC804\uB2EC\uD560 \uC635\uC158\uC785\uB2C8\uB2E4.</p><h2 id="build-lib" tabindex="-1">build.lib <a class="header-anchor" href="#build-lib" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>{ entry: string, name?: string, formats?: (&#39;es&#39; | &#39;cjs&#39; | &#39;umd&#39; | &#39;iife&#39;)[], fileName?: string | ((format: ModuleFormat) =&gt; string) }</code></li><li><strong>\uCC38\uACE0:</strong> <a href="/guide/build.html#library-mode">\uB77C\uC774\uBE0C\uB7EC\uB9AC \uBAA8\uB4DC</a></li></ul><p>\uB77C\uC774\uBE0C\uB7EC\uB9AC\uB85C \uBE4C\uB4DC\uD569\uB2C8\uB2E4. \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uC11C HTML\uC744 \uC9C4\uC785\uC810\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC73C\uBBC0\uB85C, <code>entry</code>\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. <code>name</code>\uC740 \uB178\uCD9C\uB41C \uC804\uC5ED \uBCC0\uC218\uC774\uBA70 <code>formats</code>\uC774 <code>&#39;umd&#39;</code> \uB610\uB294 <code>&#39;iife&#39;</code>\uB97C \uD3EC\uD568\uD560 \uB54C \uD544\uC694\uD569\uB2C8\uB2E4. \uAE30\uBCF8 <code>formats</code>\uC740 <code>[&#39;es&#39;, &#39;umd&#39;]</code> \uC785\uB2C8\uB2E4. <code>fileName</code>\uC740 \uD328\uD0A4\uC9C0 \uD30C\uC77C \uCD9C\uB825\uC758 \uC774\uB984\uC774\uBA70, \uAE30\uBCF8\uAC12\uC740 package.json \uD30C\uC77C\uC758 name \uC635\uC158\uC785\uB2C8\uB2E4. \uB610\uD55C <code>format</code>\uC744 \uC778\uC218\uB85C \uCDE8\uD558\uB294 \uD568\uC218\uB85C\uB3C4 \uC815\uC758\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="build-manifest" tabindex="-1">build.manifest <a class="header-anchor" href="#build-manifest" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean | string</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>false</code></li><li><strong>\uCC38\uACE0:</strong> <a href="/guide/backend-integration.html">\uBC31\uC5D4\uB4DC \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30</a></li></ul><p><code>true</code>\uB85C \uC124\uC815\uD558\uBA74, \uBE4C\uB4DC\uB294 \uD574\uC2DC\uB418\uC9C0 \uC54A\uC740 \uC5D0\uC14B \uD30C\uC77C \uC774\uB984\uC744 \uD574\uC2DC\uB41C \uBC84\uC804\uC73C\uB85C\uC758 \uB9E4\uD551\uC774 \uD3EC\uD568\uB41C <code>manifest.json</code> \uD30C\uC77C\uB3C4 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC740 \uC11C\uBC84 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC62C\uBC14\uB978 \uC5D0\uC14B \uB9C1\uD06C\uB97C \uB80C\uB354\uB9C1\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBB38\uC790\uC5F4 \uD0C0\uC785\uC758 \uAC12\uC740 \uB9E4\uB2C8\uD398\uC2A4\uD2B8 \uD30C\uC77C\uC758 \uC774\uB984\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><h2 id="build-ssrmanifest" tabindex="-1">build.ssrManifest <a class="header-anchor" href="#build-ssrmanifest" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean | string</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>false</code></li><li><strong>\uCC38\uACE0:</strong> <a href="/guide/ssr.html">\uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1</a></li></ul><p><code>true</code>\uB85C \uC124\uC815\uD558\uBA74, \uBE4C\uB4DC\uB294 \uC2A4\uD0C0\uC77C \uB9C1\uD06C\uC640 \uC0AC\uC804 \uB85C\uB4DC\uB41C \uC5D0\uC14B \uB514\uB809\uD2F0\uBE0C\uB97C \uACB0\uC815\uD558\uAE30 \uC704\uD55C SSR \uB9E4\uB2C8\uD398\uC2A4\uD2B8 \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uBB38\uC790\uC5F4 \uD0C0\uC785\uC758 \uAC12\uC740 \uB9E4\uB2C8\uD398\uC2A4\uD2B8 \uD30C\uC77C\uC758 \uC774\uB984\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><h2 id="build-ssr" tabindex="-1">build.ssr <a class="header-anchor" href="#build-ssr" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean | string</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>undefined</code></li><li><strong>\uCC38\uACE0:</strong> <a href="/guide/ssr.html">\uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1</a></li></ul><p>\uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1\uC73C\uB85C \uBE4C\uB4DC\uD569\uB2C8\uB2E4. \uC124\uC815 \uAC12\uC740 SSR \uD56D\uBAA9\uC744 \uC9C1\uC811 \uC9C0\uC815\uD558\uB294 \uBB38\uC790\uC5F4\uC774\uAC70\uB098, <code>rollupOptions.input</code>\uC744 \uD1B5\uD574 SSR \uD56D\uBAA9\uC744 \uC9C0\uC815\uD574\uC57C \uD558\uB294 <code>true</code>\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="build-minify" tabindex="-1">build.minify <a class="header-anchor" href="#build-minify" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean | &#39;terser&#39; | &#39;esbuild&#39;</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>&#39;esbuild&#39;</code></li></ul><p>\uCF54\uB4DC \uACBD\uB7C9\uD654\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uB824\uBA74 <code>false</code>\uB85C \uC124\uC815\uD558\uAC70\uB098, \uC0AC\uC6A9\uD560 \uCF54\uB4DC \uACBD\uB7C9\uD654 \uB3C4\uAD6C\uB97C \uC9C0\uC815\uD558\uC138\uC694. \uAE30\uBCF8\uAC12\uC740 <a href="https://github.com/evanw/esbuild" target="_blank" rel="noopener noreferrer">Esbuild</a>\uB85C, Terser\uBCF4\uB2E4 20\uC5D0\uC11C 40\uBC30\uAC00\uB7C9 \uBE60\uB974\uBA70 \uC555\uCD95\uB960 \uB610\uD55C 1 ~ 2%\uBC16\uC5D0 \uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><p>\uCC38\uACE0\uB85C <code>build.minify</code> \uC635\uC158\uC740 <code>&#39;es&#39;</code>\uB97C \uC0AC\uC6A9\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBAA8\uB4DC\uC5D0\uC11C \uACF5\uBC31\uC744 \uCD5C\uC18C\uD654\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uB294 Pure \uC560\uB178\uD14C\uC774\uC158(<code>@__PURE__</code>)\uC744 \uC81C\uAC70\uD558\uACE0, \uB610 \uD2B8\uB9AC \uC170\uC774\uD0B9\uC744 \uC81C\uB300\uB85C \uB3D9\uC791\uD558\uC9C0 \uBABB\uD558\uAC8C \uB9CC\uB4E4\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.</p><p><code>&#39;terser&#39;</code>\uB85C \uC124\uC815\uD560 \uACBD\uC6B0, Terser\uB97C \uC124\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm add -D terser</span></span>
<span class="line"></span></code></pre></div><h2 id="build-terseroptions" tabindex="-1">build.terserOptions <a class="header-anchor" href="#build-terseroptions" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>TerserOptions</code></li></ul><p>Terser\uB85C \uC804\uB2EC\uD560 \uCD94\uAC00\uC801\uC778 <a href="https://terser.org/docs/api-reference#minify-options" target="_blank" rel="noopener noreferrer">\uACBD\uB7C9\uD654 \uC635\uC158</a>\uC785\uB2C8\uB2E4.</p><h2 id="build-write" tabindex="-1">build.write <a class="header-anchor" href="#build-write" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>true</code></li></ul><p>\uBC88\uB4E4\uC744 \uC0DD\uC131\uD560 \uB54C \uB514\uC2A4\uD06C\uC5D0 \uAE30\uB85D\uD558\uC9C0 \uC54A\uC73C\uB824\uBA74 <code>false</code>\uB85C \uC124\uC815\uD558\uC138\uC694. \uC774\uAC83\uC740 \uB514\uC2A4\uD06C\uC5D0 \uC4F0\uAE30 \uC804\uC5D0 \uBC88\uB4E4\uC758 \uCD94\uAC00 \uD6C4\uCC98\uB9AC\uAC00 \uD544\uC694\uD55C <a href="/guide/api-javascript.html#build">\uD504\uB85C\uADF8\uB798\uBC0D \uBC29\uC2DD <code>build()</code> \uD638\uCD9C</a>\uC5D0\uC11C \uC8FC\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><h2 id="build-emptyoutdir" tabindex="-1">build.emptyOutDir <a class="header-anchor" href="#build-emptyoutdir" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>outDir</code>\uC774 <code>root</code> \uC548\uC5D0 \uC788\uB2E4\uBA74 <code>true</code></li></ul><p>\uAE30\uBCF8\uC801\uC73C\uB85C Vite\uB294 <code>outDir</code>\uC774 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8 \uB0B4\uBD80\uC5D0 \uC788\uB294 \uACBD\uC6B0 \uBE4C\uB4DC\uD560 \uB54C \uC774 \uACF3\uC744 \uBE44\uC6C1\uB2C8\uB2E4. <code>outDir</code>\uAC00 \uB8E8\uD2B8 \uC678\uBD80\uC5D0 \uC788\uC73C\uBA74 \uC2E4\uC218\uB85C \uC911\uC694\uD55C \uD30C\uC77C\uC744 \uC81C\uAC70\uD558\uC9C0 \uC54A\uB3C4\uB85D \uACBD\uACE0 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uACBD\uACE0\uB97C \uD45C\uC2DC\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC774 \uC635\uC158\uC744 \uBA85\uC2DC\uC801\uC73C\uB85C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBA85\uB839 \uC904\uC5D0\uC11C\uB294 <code>--emptyOutDir</code>\uB85C \uC774\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="build-reportcompressedsize" tabindex="-1">build.reportCompressedSize <a class="header-anchor" href="#build-reportcompressedsize" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>boolean</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>true</code></li></ul><p>gzip \uC555\uCD95 \uD06C\uAE30 \uBCF4\uACE0\uB97C \uD65C\uC131\uD654/\uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uD070 \uCD9C\uB825 \uD30C\uC77C\uC744 \uC555\uCD95\uD558\uB294 \uACBD\uC6B0 \uC18D\uB3C4\uAC00 \uB290\uB9B4 \uC218 \uC788\uC73C\uBBC0\uB85C, \uC774\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC124\uC815\uD558\uBA74 \uB300\uADDC\uBAA8 \uD504\uB85C\uC81D\uD2B8\uC758 \uBE4C\uB4DC \uC131\uB2A5\uC774 \uD5A5\uC0C1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="build-chunksizewarninglimit" tabindex="-1">build.chunkSizeWarningLimit <a class="header-anchor" href="#build-chunksizewarninglimit" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <code>number</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>500</code></li></ul><p>\uCCAD\uD06C \uD06C\uAE30 \uACBD\uACE0\uB97C \uC704\uD55C \uC81C\uD55C\uAC12 \uC785\uB2C8\uB2E4. (\uB2E8\uC704: KB)</p><h2 id="build-watch" tabindex="-1">build.watch <a class="header-anchor" href="#build-watch" aria-hidden="true">#</a></h2><ul><li><strong>\uD0C0\uC785:</strong> <a href="https://rollupjs.org/guide/en/#watch-options" target="_blank" rel="noopener noreferrer"><code>WatcherOptions</code></a><code>| null</code></li><li><strong>\uAE30\uBCF8\uAC12:</strong> <code>null</code></li></ul><p>Rollup \uAC10\uC2DC\uC790\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 <code>{}</code>\uB85C \uC124\uC815\uD558\uC138\uC694. \uC774\uB294 \uB300\uBD80\uBD84 \uBE4C\uB4DC \uC804\uC6A9 \uD50C\uB7EC\uADF8\uC778 \uB610\uB294 \uD1B5\uD569 \uD504\uB85C\uC138\uC2A4\uB97C \uD3EC\uD568\uD558\uB294 \uACBD\uC6B0\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p>`,81),t=[d];function s(a,n,c,u,p,b){return o(),i("div",null,t)}var m=e(r,[["render",s]]);export{g as __pageData,m as default};