export default function Task(props) {
  return (
    <>
      <div className="col-12 col-sm-9 col-md-10 mb-2 tasks">
        <li><span className="count">{props.id+1}.</span>{props.value}</li>
      </div>
      <div className="col-2 col-sm-3 col-md-2 buttons">
        <button name="editButton" className="btn btn-primary m-1" type="button" onClick={() => { props.update(props.id) }} value="" ><i className='fa fa-edit' aria-hidden='true'></i></button>
        <button name="deleteButton" className="btn btn-danger m-1" type="button" value="X" onClick={() => { props.delete(props.id) }} ><i className="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </>
  )
}