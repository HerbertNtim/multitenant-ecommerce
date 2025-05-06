import { Category } from "@/payload-types";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchFilters from "./search-filters";

import configPromise from '@payload-config'
import { getPayload } from 'payload'

interface Props {
  children: React.ReactNode;
}

const HomeLayout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'categories',
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: true,
      }
    }
  })

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((subdoc) => ({
      // Because of 'depth: 1' we are confident that 'subdoc' will be a type of "Category"
      ...(subdoc as Category),
      subcategories: undefined
    }))
  }))

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
