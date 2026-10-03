import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // 古いプレーンテキスト形式をHTMLに変換。
  eleventyConfig.addTemplateFormats("txt");
  eleventyConfig.addExtension("txt", {
    compile: async (content) => async () =>
      content
        .trimEnd()
        .replaceAll(/^/gm, "<p>")
        .replaceAll(/$/gm, "</p>")
        .replaceAll("<p></p>", "<br />"),
  });

  eleventyConfig.setLibrary("md", markdownIt({ html: true, breaks: true }));
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.renderer.rules.hr = () => "<br />";
  });

  eleventyConfig.addPassthroughCopy("style.css");
}
