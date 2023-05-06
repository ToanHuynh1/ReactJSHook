const Todo = (props) => {
    const todo = props.todo
    const {deleteData} = props
    const handleDetele = (id) => {
        deleteData(id)
    }
    return(

        <div className='todo-container'> 
        <ul>
          {todo && todo.length && todo.map((item, index) => 
          {
            return (
              <div key={index}>
              <li >{item.title}  <span style={{cursor: 'pointer'}} onClick={() => handleDetele(item.id)}>x</span></li>
              </div>
   
            )
          })}
         
        </ul>
   
        <hr/>
    </div>
    )
}

export default Todo