import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Product from './Product.jsx';

const MainContainer = styled.div`
  text-align: center;
`;

const AlignContainer = styled.div`
  display: inline-block;
`;

const ProductsContainer = styled.div`
  height: 689px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: 100 550;
  grid-gap: 40px 40px;
  background-color: rgb("250, 250, 250");
  padding: 0 50px 0 50px;
`;

const Header = styled.span`
  grid-row: 1 / span 1;
  grid-column: 1 / span 4;
  justify-self: center;
  align-self: end;
  font-size: 48px;
  font-weight: 600;
`;

export default class RelatedProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const pid = window.location.pathname.substring(1);
    console.log(pid);
    for (let i = 0; i < 4; i += 1) {
      const currentPid = parseInt(pid, 10) + (i * 4);
      this.getProduct(currentPid);
    }
  }

  getProduct(pid) {
    console.log('pid: ', pid);
    fetch(`/api/product/${pid}`)
      .then(response => response.json())
      .then((product) => {
        const { products } = this.state;
        products.push(product);
        this.setState({ products });
      });
  }

  render() {
    const { products } = this.state || [];
    return (
      <MainContainer>
        <AlignContainer>
          <ProductsContainer>
            <Header>You may also like</Header>
            {
              products.map(product => <Product key={`rp${product.id}`} product={product} />)
            }
          </ProductsContainer>
        </AlignContainer>
      </MainContainer>
    );
  }
}

ReactDOM.render(<RelatedProducts />, document.getElementById('related-products'));
