import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainFooter from "./Components/MainFooter";
import MainHeader from "./Components/MainHeader";
import MainAbout from "./Pages/MainAbout";
import MainBlog from "./Pages/MainBlog";
import BlogDetailPage from "./Pages/BlogDetailPage";
import MainCart from "./Pages/MainCart";
import CheckoutPage from "./Pages/CheckoutPage";
import MainContact from "./Pages/MainContact";
import MainPage from "./Pages/MainPage";
import OrderDetailsPages from "./Pages/OrderDetailsPage";
import OrderTracking from "./Pages/OrderTracking";
import ProductDetailPage from "./Pages/ProductDetailPage";

function App() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);
  useEffect(() => {
    GetProducts();
    GetBlogs();
  }, []);
  const GetProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProductList(data));
  };
  const GetBlogs = () => {
    let url = "http://localhost:3000/blogs";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  };
  const getComments = (blogId) => {
    let url = "http://localhost:3000/comments?blogId=" + blogId;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };
  const addToCart = (item, quantity = 1) => {
    const getIndexOfExistItem = cartList.findIndex(
      (cartItem) => cartItem.product === item
    );

    const itemPrice = parseFloat(item.price);
    const itemQuantity = parseInt(quantity, 10);

    if (getIndexOfExistItem !== -1) {
      setCartList((prevCartList) => {
        const updatedCartList = [...prevCartList];
        updatedCartList[getIndexOfExistItem].quantity += itemQuantity;
        updatedCartList[getIndexOfExistItem].totalPrice +=
          itemQuantity * itemPrice;
        return updatedCartList;
      });
    } else {
      setCartList((prevCartList) => [
        ...prevCartList,
        {
          product: item,
          quantity: itemQuantity,
          Id: prevCartList.length + 1,
          totalPrice: itemQuantity * itemPrice,
        },
      ]);
    }
  };
  const removeFromCart = (item) => {
    const updatedCartList = cartList.filter(
      (cartItem) => cartItem.Id !== item.Id
    );
    setCartList(updatedCartList);
  };
  const changeToWish = async (item) => {
    const updatedItem = {
      id: item.id,
      name: item.name,
      description: item.description,
      categoryId: item.categoryId,
      images: item.images,
      thumbnail: item.thumbnail,
      iswish: !item.iswish,
      rate: item.rate,
      price: item.price,
      oldPrice: item.oldPrice,
    };

    try {
      await fetch(`http://localhost:3000/products/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });

      await GetProducts();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };
  const getProductBySlugs = (slug) => {
    return productList.filter((item) => item.slug === slug);
  };
  const getBlogsBySlugs = (slug) => {
    return blogs.filter((item) => item.slug === slug);
  };
  const generateRandomId = () => {
    const randomString = Math.random().toString(36).substr(2, 9);
    const timestamp = new Date().getTime().toString(36);
    const randomId = randomString + timestamp;
    return randomId;
  };
  const getOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:3000/orders/${orderId}`);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch order data (Status: ${response.status})`
        );
      }

      const data = await response.json();

      if (!data) {
        throw new Error("Order data not found");
      }
      setSelectedOrder(data);
      return data;
    } catch (error) {
      console.error("Error fetching order data:", error.message);
      throw error;
    }
  };
  return (
    <>
      <MainHeader cartList={cartList} removeFromCart={removeFromCart} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              productList={productList}
              GetProducts={GetProducts}
              addToCart={addToCart}
              changeToWish={changeToWish}
            />
          }
        />
        <Route path="/about" element={<MainAbout />} />
        <Route
          path="/blog"
          element={<MainBlog blogs={blogs} getComments={getComments} />}
        />
        <Route
          path="/cart"
          element={<MainCart cartList={cartList} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/blog-detail/:slug"
          element={
            <BlogDetailPage
              getBlogsBySlugs={getBlogsBySlugs}
              getComments={getComments}
              comments={comments}
            />
          }
        />
        <Route path="/contact" element={<MainContact />} />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartList={cartList}
              generateRandomId={generateRandomId}
              setCartList={setCartList}
            />
          }
        />
        <Route
          path="/productDetail/:slug"
          element={
            <ProductDetailPage
              addToCart={addToCart}
              getProductBySlugs={getProductBySlugs}
            />
          }
        />
        <Route
          path="/orderTrack"
          element={<OrderTracking getOrder={getOrder} />}
        />
        <Route
          path="/orderDetails"
          element={<OrderDetailsPages selectedOrder={selectedOrder} />}
        />
        <Route
          path="*"
          element={
            <MainPage
              productList={productList}
              GetProducts={GetProducts}
              addToCart={addToCart}
              changeToWish={changeToWish}
            />
          }
        />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
