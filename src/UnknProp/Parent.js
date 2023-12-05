import Child from './Child'
function Parent(props) {
  return (
    <div>
      <Child {...props} />
    </div>
  )
}
export default Parent