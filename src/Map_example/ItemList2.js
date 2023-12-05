import PropTypes from 'prop-types'
const ItemList = ({list}) =>{
  return(
    <ul>

    {list.map((iname,index) => {
        return <li key={index}>{iname}</li> 
    })}
    </ul>
    );
}

ItemList.propTypes = {
    list:PropTypes.arrayOf(PropTypes.string).isRequired
};
export default ItemList;