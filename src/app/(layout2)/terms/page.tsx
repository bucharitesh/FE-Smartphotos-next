import { getSettings } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';

const Page = async () => {
  const settings: any = await getSettings();

  return (
    <div className="custom w-full px-12 pt-12 sm:py-24 sm:px-36">
      <h1 className="mb-12 font-manrope text-5xl font-black">Terms</h1>
      <PortableText value={settings[0].terms} />
    </div>
  );
};

export default Page;
