var NewSkills = React.createClass({

  handleClick() {
    var title = this.refs.title.value;
    var details = this.refs.details.value;

    $.ajax({
      url: "/api/v1/skills",
      type: "POST",
      data: { skill: {name: title, details: details } },
      success: (skill) => {
        this.props.handleSubmit(skill)
        this.refs.title.value = ''
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
        <input ref="title" placeholder="Enter Title" />
        <input ref="details" placeholder="Details of skill" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
})
