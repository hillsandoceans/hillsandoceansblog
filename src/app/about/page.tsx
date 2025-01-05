import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `
## About Us

![About1](https://raw.githubusercontent.com/hillsandoceans/hillsandoceansblog/main/public/images/emosson1.jpeg)
Hello there!

Welcome to our little space, where we bring you stories from places and people!
We are Vaibhavi and Suyash, PhD students in Physics, based in Switzerland.

The last few months of 2023 marked the beginning of our journey of exploration. Since then, we have ventured on some beautiful hikes in Switzerland, taken weekend trips to several European cities, tried a variety of cuisines, and met some wonderful people along the way.
This is our way of sharing it all with you— the hikes, nature, cities, and stories!

Love,

Suyash and Vaibhavi

## Connect with Us

`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
