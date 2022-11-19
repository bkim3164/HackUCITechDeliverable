function FormItem(props) {
    return <div className="item-form">
        <label for={props.name}> {props.placeholder} </label>
        <input
            onChange={props.onChange} value={props.value} className="form-field" id={props.name} type={props.type}
            placeholder={props.placeholder} name={props.name} required />
    </div>
}

function FormText(props) {
    return <div className="item-form">
        <label for={props.name}> {props.placeholder} </label>
        <textarea
            onChange={props.onChange} value={props.value} className="form-field" id={props.name} type={props.type}
            placeholder={props.placeholder} name={props.name} rows="3" required></textarea>
    </div>
}

export { FormItem, FormText }