export function ShopItemFunc(props) {

    const { brand, title, description, descriptionFull, price, currency } = props.item;

    return (
       
      <div class="main-content">
        <h2>{brand}</h2>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <div class="description">
            {descriptionFull}
          </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
      <div class="price">{currency}{price}.00</div>
    <button>добавить в корзину</button>
  </div>
</div>
      
    );
  }