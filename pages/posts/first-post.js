import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import Counter from "../../components/counter";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Counter></Counter>
      <h2>
        <Image
          src="/images/profile-pic.jpg" // Route of the image file
          height={450} // Desired size with correct aspect ratio
          width={450} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </h2>
    </Layout>
  );
}
