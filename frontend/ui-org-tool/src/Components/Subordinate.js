function Subordinate({ subs }) {
    const nestedComments = (subs.subordinates || []).map(sub => {
      return <Subordinate key={sub.id} subs={sub} type="child" />
    })
  
    return (
      <div style={{"marginLeft": "60px", "marginTop": "10px"}}>
        <div>{subs.name}  ({subs.title})</div>
        {nestedComments}
      </div>
    )
  }
  
  
  
  export default Subordinate