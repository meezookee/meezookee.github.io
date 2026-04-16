import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("txt");
  eleventyConfig.addExtension("txt", {
    compile: async (content) => async () => content,
  });

  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.addFilter("toLocaleString", (v) =>
    v.toLocaleString("ja-JP", {
      dateStyle: "full",
      timeStyle: "full",
      timeZone: "Asia/Tokyo",
    }),
  );

  eleventyConfig.addFilter("toShortLocaleString", (v) =>
    v.toLocaleString("ja-JP", {
      dateStyle: "short",
      timeZone: "Asia/Tokyo",
    }),
  );

  eleventyConfig.addFilter("toISOString", (v) => v.toISOString());

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
