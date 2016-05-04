var Skill = React.createClass({

  getInitialState() {
    return { editable: false }
  },

  handleEdit(id) {
    if (this.state.editable) {
      var id = this.props.skill.id
      var name = this.refs.name.value;
      var details = this.refs.details.value;
      var level = this.props.skill.level
      var skill = {id: id, name: name, details: details, level: level};

      this.props.handleUpdate(skill);
    }
    this.setState({ editable: !this.state.editable })
  },

  handleLevel(arrowType) {
    var levels = ['bad', 'halfbad', 'fantastic'];
    var name = this.props.skill.name
    var details = this.props.skill.details
    var id = this.props.skill.id
    var level = this.props.skill.level
    var index = levels.indexOf(level)


    if (arrowType === 'up' && index < 2 ) {
      var newLevel = levels[index + 1]
      this.props.handleUpdate({id: id, name: name, details: details, level: newLevel})
    } else if (arrowType === 'down' && index > 0 ) {
      var newLevel = levels[index - 1]
      this.props.handleUpdate({id: id, name: name, details: details, level: newLevel})
    }
  },

  render() {
    var name = this.state.editable ? <input type='text' ref='name'
                                      defaultValue={this.props.skill.name} />
                                   : <h3>{this.props.skill.name}</h3>

    var details = this.state.editable ? <textarea type='text' ref='details'
                                        defaultValue={this.props.skill.details} />
                                      : <p>{this.props.skill.details}</p>


    return(
      <div>
        {name}

        <div className='skill-level'>

          <button onClick={this.handleLevel.bind(this, 'down')}
                  type="button"
                  className="btn btn-default btn-sm">
            <span className="glyphicon glyphicon-triangle-bottom"></span>
          </button>

          <p><strong>Level:</strong> {this.props.skill.level}</p>

          <button onClick={this.handleLevel.bind(this, 'up')}
                  type="button"
                  className="btn btn-default btn-sm">
            <span className="glyphicon glyphicon-triangle-top"></span>
          </button>

        </div>

        {details}
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
})
