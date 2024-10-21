import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { assets, products } from '../assets/frontend_assets/assets';
import Card from '../components/Card';
import { ShopContext } from '../context/shoppContext';

function Collection() {
  const {search, showSearch} = useContext(ShopContext)
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((el) => el !== value) : [...prev, value]
    );
  };

  const handleSubCategoryChange = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((el) => el !== value) : [...prev, value]
    );
  };

  const filterProducts = () => {
    let filteredProducts = products.slice();
    if(search && showSearch){
      filteredProducts = filteredProducts.filter((el)=>el.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((el) => category.includes(el.category));
    }
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter((el) => subCategory.includes(el.subCategory));
    }
    return filteredProducts;
  };

  const sortProducts = (productsToSort) => {
    switch (sortType) {
      case 'Low-High':
        return productsToSort.sort((a, b) => a.price - b.price);
      case 'High-Low':
        return productsToSort.sort((a, b) => b.price - a.price);
      default:
        return productsToSort;
    }
  };

  useEffect(() => {
    let updatedProducts = filterProducts();
    setData(sortProducts(updatedProducts));
  }, [category, subCategory, sortType, search, showSearch]);

  return (
    <>
      <div className="sm:flex mt-9">
        <div className="sm:flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl text-black mb-4 font-semibold">FILTERS</h1>
            <img
              src={assets.dropdown_icon}
              className={`sm:hidden ${show ? 'rotate-90' : ''} h-8 w-5`}
              onClick={() => setShow(!show)}
              alt="Toggle Filters"
            />
          </div>

          <div className={`sm:flex flex-col border p-5 ${show ? 'w-full' : 'hidden'} sm:block`}>
            <h1 className="text-2xl font-semibold text-black">CATEGORIES</h1>
            <p>
              <input type="checkbox" value="Men" onChange={handleCategoryChange} /> MEN
            </p>
            <p>
              <input type="checkbox" value="Women" onChange={handleCategoryChange} /> WOMEN
            </p>
            <p>
              <input type="checkbox" value="Kids" onChange={handleCategoryChange} /> KIDS
            </p>
          </div>

          <div className={`sm:flex flex-col border p-5 ${show ? 'w-full' : 'hidden'}`}>
            <h1 className="text-2xl font-semibold text-black">TYPE</h1>
            <p>
              <input type="checkbox" value="Topwear" onChange={handleSubCategoryChange} /> TOPWEAR
            </p>
            <p>
              <input type="checkbox" value="Bottomwear" onChange={handleSubCategoryChange} /> BOTTOMWEAR
            </p>
            <p>
              <input type="checkbox" value="Winterwear" onChange={handleSubCategoryChange} /> WINTERWEAR
            </p>
          </div>
        </div>

        <div className="block sm:flex-1">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center ml-12">
              <Title text1="All" text2="Collections" />
              <p className="h-0.5 w-12 bg-slate-900"></p>
            </div>

            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 sm:border-gray-500 text-xl h-10 rounded-md"
            >
              <option value="relevant">sort by: relevant</option>
              <option value="Low-High">sort by: Low to High</option>
              <option value="High-Low">sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-9">
            {data.map((el) => {
              return <Card key={el._id} obj={el} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
