import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("txt");
  eleventyConfig.addExtension("txt", {
    compile: async (content) => async () => content,
  });

  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.addPlugin(feedPlugin, {
    collection: {
      name: "post",
    },
    metadata: {
      language: "ja",
      title: "閉塞圏",
      subtitle: "閉塞圏",
      base: "https://meezookee.github.io",
      author: {
        name: "meezookee",
        email: "meezookee@example.invalid",
      },
    },
  });
}
