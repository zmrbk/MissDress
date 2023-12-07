import { useState } from "react";

import { Modal } from "../../components";
import { Loader } from "../../utils/Loader/Loader";
import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";
import { CART_PAGE, CATEGORIES_PAGE, MAIN_PAGE } from "../../utils/path";

import SuccessOrder from "../../components/Modal/SuccessOrder/SuccessOrder";

import { useGetProductFromCardQuery } from "../../store/features/Cart/cartQuery";

import OrderForm from "./OrderForm/OrderForm";
import CartSummary from "./CartSummary/CartSummary";
import CartList from "./CartList/CartList";

import classes from "./CartPage.module.scss";

const CartPage = () => {
  const [isModalOpen, setOpenModal] = useState<boolean>(false);
  const { data: productsCart = {}, isLoading } = useGetProductFromCardQuery();
  const thisCart = productsCart?.result || null;
  const allProductsCart = productsCart?.result?.products || [];
  const totalPrice = productsCart?.result?.price || 0;
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  if (isLoading) {
    return <Loader center="center" />;
  }

  const links = [
    { title: "Главная", path: MAIN_PAGE },
    { title: "Товары", path: CATEGORIES_PAGE },
    { title: "Корзина", path: CART_PAGE },
    { title: "Оформление заказа" },
  ];
  return (
    <>
      <div
        className={classes.cartPage}
        style={totalPrice === 0 ? { paddingBottom: "120px" } : {}}
      >
        <BreadCrumbs links={links} />
        <div className={`${classes.cartPageWrapper} ${classes.container}`}>
          <div className={classes.cartPageMain}>
            <div className={classes.cartPageOrder}>
              <OrderForm />
            </div>
            <h3 className={classes.cartPageListTitle}>Состав заказа</h3>
            <CartList cartList={allProductsCart} />
          </div>
          <div className={classes.cartPageSum}>
            <CartSummary
              thisCart={thisCart}
              totalPrice={totalPrice}
              openModal={openModal}
            />
          </div>
        </div>
      </div>

      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <SuccessOrder closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default CartPage;
