import Head from "next/head";
import BodyData from '@/components/BodyData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo App</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <BodyData />
    </div>
  );
}
