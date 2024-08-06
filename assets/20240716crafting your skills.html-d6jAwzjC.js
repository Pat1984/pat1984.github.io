import{_ as e,c as t,o as i,b as a}from"./app-BVJSr4oU.js";const n={},o=a('<h2 id="crafting-effective-prompts" tabindex="-1"><a class="header-anchor" href="#crafting-effective-prompts"><span>Crafting Effective Prompts</span></a></h2><p>When using AI for image generation, such as with Stable Diffusion, it&#39;s important to write prompts that are clear and concise. Here&#39;s a guide to creating effective prompts:</p><ol><li><p><strong>Ensure Clarity and Brevity</strong>: AI parses and executes long, complex sentences, but shorter and simpler prompts are more likely to yield the desired results.</p></li><li><p><strong>Use Descriptive Language</strong>: Be as specific as possible when describing objects. For example, &quot;a golden apple&quot; is more precise than &quot;an apple.&quot;</p></li><li><p><strong>Avoid Vagueness</strong>: Ambiguous statements can lead to images that don&#39;t meet expectations. &quot;A medieval oil painting&quot; is more specific than &quot;an oil painting.&quot;</p></li><li><p><strong>Control Layout and Proportions</strong>: Manage the layout of the image and the scale and scope of the objects within it. For example, &quot;a giant Pikachu on the streets of Tokyo at dawn&quot; clearly indicates the subject and the setting.</p></li></ol><h2 id="enhancing-the-precision-of-prompts" tabindex="-1"><a class="header-anchor" href="#enhancing-the-precision-of-prompts"><span>Enhancing the Precision of Prompts</span></a></h2><p>The format for writing prompts can often be通用 (universally applicable) between Stable Diffusion and other AI image generation software like Midjourney. Prompts can be divided into two main parts: positive prompts, which describe the main content of the image, and negative prompts, which help avoid unwanted and low-quality content.</p><p>For example, a positive prompt formula might include: image quality + art style + characters + background + lighting.</p><p>A negative prompt formula can be thought of as a &quot;removal feature&quot; to eliminate unwanted content, such as low resolution, errors, extra fingers, etc.</p><h2 id="syntax-rules-for-prompts" tabindex="-1"><a class="header-anchor" href="#syntax-rules-for-prompts"><span>Syntax Rules for Prompts</span></a></h2><ul><li><strong>Weight</strong>: Prompts earlier in the sequence carry more weight. You can adjust the weight by using parentheses &quot;()&quot; to increase the weight to 1.1 times. Nesting multiple layers can further increase the weight, such as 1.21, and so on. To decrease the weight, use square brackets &quot;[]&quot; to reduce the weight to 0.9 times, with nesting possible for further reduction, such as 0.81 for one layer and 0.73 for two layers. You can also specify the weight of a prompt using the format (prompt: xxx), for example, (red hair:1.35), indicating that the weight for red hair in the image is 1.35.</li></ul><h2 id="setting-parameters" tabindex="-1"><a class="header-anchor" href="#setting-parameters"><span>Setting Parameters</span></a></h2><ol><li><p><strong>Sampling Steps</strong>: The number of iterations the image undergoes through the diffusion algorithm. Increasing sampling steps improves the quality of the generated image but also increases computational cost and time. A recommended range for sampling steps is 20-60.</p></li><li><p><strong>Sampling Method</strong>: This affects the internal iteration process of image generation. There are various methods available. After innovations in Stable Diffusion&#39;s algorithms, some commonly used methods include:</p><ul><li>Euler a: Often used for illustrations and anime-style images, creative with higher randomness and faster speed, with fewer sampling steps.</li><li>Euler: Yields softer image results.</li><li>LMS: Suitable for landscapes with low saturation.</li><li>Heun: Best for landscape paintings but very slow.</li><li>DPM2 and DPM2 a: Highest utilization rate of prompts. DPM2 a is more suitable for character close-ups.</li><li>DDIM: Good for widescreen, adept at handling environmental lighting, not suitable for realism, requires more sampling steps.</li><li>DPM++2M: Balances speed and quality, automatically refines image details, recommended for beginners.</li></ul></li><li><p><strong>Aspect Ratio (W,H)</strong>: Adjusts the resolution of the image. The default resolution is usually around 520:520. Higher resolutions can lead to image degradation. For high-resolution images, consider enabling a high-definition repair feature.</p></li><li><p><strong>Seed</strong>: In Stable Diffusion, seeds are divided into difference seeds. The difference strength in difference seeds refers to the variation from the original seed. If set to 0, the image is generated according to the original seed; if set to 1, a new seed is used for generation.</p></li><li><p><strong>Batch Size</strong>: When the batch size is 10, it generates 10 images.</p></li><li><p><strong>Batch Count</strong>: Refers to the number of batches that can be run simultaneously. If the batch size is 10 and the batch count is 3, a single click will generate 10 x 3, or 30 images.</p></li></ol><p>Please note that the term &quot;通用&quot; was left untranslated in the text as it seems to imply that the format can be universally applied between different AI software. If a direct translation was intended, please let me know, and I will adjust the translation accordingly.</p>',12),s=[o];function r(l,p){return i(),t("div",null,s)}const h=e(n,[["render",r],["__file","20240716crafting your skills.html.vue"]]),g=JSON.parse(`{"path":"/posts/stable%20diffusion%20overview/20240716crafting%20your%20skills.html","title":"","lang":"en-US","frontmatter":{"description":"Crafting Effective Prompts When using AI for image generation, such as with Stable Diffusion, it's important to write prompts that are clear and concise. Here's a guide to creat...","head":[["meta",{"property":"og:url","content":"https://pat1984.github.io/posts/stable%20diffusion%20overview/20240716crafting%20your%20skills.html"}],["meta",{"property":"og:site_name","content":"Patience Hong"}],["meta",{"property":"og:description","content":"Crafting Effective Prompts When using AI for image generation, such as with Stable Diffusion, it's important to write prompts that are clear and concise. Here's a guide to creat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Patience Hong"}],["meta",{"property":"og:updated_time","content":"2024-08-06T02:53:11.898Z"}],["meta",{"property":"og:modified_time","content":"2024-08-06T02:53:11.898Z"}],["meta",{"name":"twitter:description","content":"Crafting Effective Prompts When using AI for image generation, such as with Stable Diffusion, it's important to write prompts that are clear and concise. Here's a guide to creat..."}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:site","content":"Patience in Sirus"}],["meta",{"name":"twitter:creator","content":"Patience in Sirus"}],["meta",{"name":"share_config","content":"twitter,weibo,facebook,email"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Patience Hong\\"}]}"]]},"headers":[{"level":2,"title":"Crafting Effective Prompts","slug":"crafting-effective-prompts","link":"#crafting-effective-prompts","children":[]},{"level":2,"title":"Enhancing the Precision of Prompts","slug":"enhancing-the-precision-of-prompts","link":"#enhancing-the-precision-of-prompts","children":[]},{"level":2,"title":"Syntax Rules for Prompts","slug":"syntax-rules-for-prompts","link":"#syntax-rules-for-prompts","children":[]},{"level":2,"title":"Setting Parameters","slug":"setting-parameters","link":"#setting-parameters","children":[]}],"git":{},"filePathRelative":"posts/stable diffusion overview/20240716crafting your skills.md","autoDesc":true,"excerpt":"<h2>Crafting Effective Prompts</h2>\\n<p>When using AI for image generation, such as with Stable Diffusion, it's important to write prompts that are clear and concise. Here's a guide to creating effective prompts:</p>\\n<ol>\\n<li>\\n<p><strong>Ensure Clarity and Brevity</strong>: AI parses and executes long, complex sentences, but shorter and simpler prompts are more likely to yield the desired results.</p>\\n</li>\\n<li>\\n<p><strong>Use Descriptive Language</strong>: Be as specific as possible when describing objects. For example, \\"a golden apple\\" is more precise than \\"an apple.\\"</p>\\n</li>\\n<li>\\n<p><strong>Avoid Vagueness</strong>: Ambiguous statements can lead to images that don't meet expectations. \\"A medieval oil painting\\" is more specific than \\"an oil painting.\\"</p>\\n</li>\\n<li>\\n<p><strong>Control Layout and Proportions</strong>: Manage the layout of the image and the scale and scope of the objects within it. For example, \\"a giant Pikachu on the streets of Tokyo at dawn\\" clearly indicates the subject and the setting.</p>\\n</li>\\n</ol>"}`);export{h as comp,g as data};
