// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
import ItemList from "../Components/ItemList";
import MainSlider from "../Components/MainSlider";

function MainPage({ productList, GetProducts, addToCart, changeToWish }) {
  return (
    <>
      <MainSlider />
      <ItemList
        productList={productList}
        GetProducts={GetProducts}
        addToCart={addToCart}
        changeToWish={changeToWish}
      />
    </>
  );
}

export default MainPage;
