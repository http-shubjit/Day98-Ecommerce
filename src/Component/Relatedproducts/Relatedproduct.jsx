import './Relatedproduct.css'
import dataproduct from '../Assets/data'
import Item from '../Items/Item'
const Relatedproduct = () => {
  // console.log(dataproduct)
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>

      <hr />
      <div className="relatedproductitem">
        {dataproduct.map((item, i) => {

          return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />
        })}
      </div>

    </div>
  )
}

export default Relatedproduct