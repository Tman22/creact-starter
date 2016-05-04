var NewSkills = React.createClass({

  handleClick() {
    var name = this.refs.name.value;
    var details = this.refs.details.value;

    $.ajax({
      url: "/api/v1/skills",
      type: "POST",
      data: { skill: {name: name, details: details } },
      success: (skill) => {
        this.props.handleSubmit(skill)
        this.refs.name.value = ''
        this.refs.details.value = ''
      },
      error: (response) => {
        console.log('nope');
      }
    });
  },

  render() {
    return(
      <div>
        <input ref="name" placeholder="Enter Name" />
        <input ref="details" placeholder="Details of skill" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
})
