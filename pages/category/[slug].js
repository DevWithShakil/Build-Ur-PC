/* eslint-disable react-hooks/rules-of-hooks */
import Products from "@/models/Products";
import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ItemContext } from "../_app";
import { toast } from "react-toastify";

const Category = ({ products }) => {
  const router = useRouter();
  const { slug } = router.query;

  const { PcComponent, setPcComponent } = useContext(ItemContext);


  const calculateItem = (item) => {
    const existItem = PcComponent.find(i => i.category === item.category)
    const existId = PcComponent.find(i => i._id === item._id)
    if (!existId || !existItem) {
      setPcComponent((prevData) => [...prevData, item])
    } else if (existItem) {
      const existData = PcComponent.filter(i => i._id !== item._id)
      setPcComponent(...existData, item)
    }
    toast.success("Item added Successfully", {
      position: "top-left",
    })

  }

  return (
    <div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {products.length === 0 && (
              <div className="flex flex-col items-center justify-center h-[50vh]">
                <h2 className="font-medium text-gray-900">
                  Sorry, currently we don&apos;t have Stocks available for this
                  category.
                </h2>
              </div>
            )}
            <div className="flex flex-wrap -m-4">
              {products.map((item) => {
                return (
                  <Link
                    key={item._id}
                    href={`/product/${item.slug}`}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  >
                    <div className="block relative rounded overflow-hidden">
                      <Image
                        height={200}
                        width={200}
                        alt="ecommerce"
                        className=""
                        src={item.image}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">Available: {item.availableQty} Items</p>
                      <p className="mt-1">${item.price}</p>
                      <Link
                        href={`/pcBuilder`}
                        className="lg:w-1/4 md:w-1/2 p-4 w-full"
                      >
                        <button onClick={() => calculateItem(item)}
                          class="bg-blue-500 hover:bg-blue-700 mt-5 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                          Add To Build
                        </button>
                      </Link>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  const products = await Products.find({
    category: context.query.slug,
  });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Category;
