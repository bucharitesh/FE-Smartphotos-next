import { getSettings } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';

const Page = async () => {
  const settings: any = await getSettings();

  return (
    <div className=" h-[80vh] w-full bg-red-100">
      <PortableText value={settings[0].terms} />
    </div>
  );
};

export default Page;
