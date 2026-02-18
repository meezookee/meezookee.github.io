export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addFilter("toLocaleString", (v) =>
    v.toLocaleString("ja-JP", {
      dateStyle: "full",
      timeStyle: "full",
      timeZone: "Asia/Tokyo",
    }),
  );
  eleventyConfig.addFilter("toISOString", (v) => v.toISOString());
}

export const config = {
  dir: {
    input: "content",
  },
};
