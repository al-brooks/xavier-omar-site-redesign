import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';

const Merch = (props) => {
  useEffect(() => {
    props.onMerchLoaded();
  }, []);

  const merchItems = props.merch.map((merchItem) => {
    return (
      <section key={merchItem.merch_id} className="merchSection">
        <div className="merchItem">
          <img src={merchItem.front_pic} alt="merch front pic" />
          <div className="description">
            <span>Add increment and decrement quantity button</span>
            <h3>{merchItem.merch_name}</h3>
            <h5>{merchItem.price}</h5>
          </div>
        </div>
        <form action="http://localhost:8080/payment" method="POST">
          <input
            type="hidden"
            name="product_name"
            value={merchItem.merch_name}
          />
          <input
            type="hidden"
            name="product_price"
            value={merchItem.price * 100}
          />
          <input
            type="hidden"
            name="product_image"
            value={merchItem.front_pic}
          />
          <button type="submit">Checkout</button>
        </form>
      </section>
    );
  });

  return <div>{merchItems}</div>;
};

const mapStateToProps = (state) => {
  return {
    merch: state.merch
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMerchLoaded: () => dispatch(actionCreators.fetchMerch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Merch);
