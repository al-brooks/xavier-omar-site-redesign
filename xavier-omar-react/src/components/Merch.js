import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import { NavLink } from 'react-router-dom';

const Merch = (props) => {
  useEffect(() => {
    props.onMerchLoaded();
  }, []);

  const merchItems = props.merch.map((merchItem) => {
    return (
      <div key={merchItem.merch_id} className="merchListing">
        <div className="merchItem">
          <h3>{merchItem.merch_name}</h3>
          <img src={merchItem.front_pic} alt="merch front pic" />
          <div className="description">
            <span>Add increment and decrement quantity button</span>
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
          <button type="submit">Buy</button>
        </form>
      </div>
    );
  });

  return (
    <section id="merchSection">
      <NavLink id="exitBtn" to="/">
        X
      </NavLink>
      {merchItems}
    </section>
  );
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
