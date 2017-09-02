// React Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Component
class Main extends Component {
  getDiscount = () => {
    const {discount} = this.props.invoice;
    let discountTxt = '';
    if (discount.type === 'percentage') {
      discountTxt = `${discount.amount}%`;
    } else {
      discountTxt = `${this.props.invoice.currency} ${discount.amount}`;
    }
    return (
      <tr>
        <td colSpan="3">DISCOUNT</td>
        <td className="total">
          {discountTxt}
        </td>
      </tr>
    );
  };

  render = () => {
    const {invoice} = this.props;
    const rowsComponent = invoice.rows.map((row, index) => {
      return (
        <tr key={index}>
          <td className="desc">
            {row.description}
          </td>
          <td className="unit">
            {row.price}
          </td>
          <td className="qty">
            {row.quantity}
          </td>
          <td className="total">
            {row.subtotal}
          </td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th className="desc">DESCRIPTION</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {rowsComponent}
          <tr>
            <td colSpan="3" className="sub">
              SUBTOTAL
            </td>
            <td className="sub total">
              {invoice.currency} {invoice.subtotal}
            </td>
          </tr>
          {invoice.discount && this.getDiscount()}
          <tr>
            <td colSpan="3" className="grand total">
              GRAND TOTAL
            </td>
            <td className="grand total">
              {invoice.currency} {invoice.grandTotal}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
}

Main.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default Main;