var Body = React.createClass({

  getInitialState() {
    return { skills: [] };
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  handleSubmit(skill) {
    var newState = this.state.skills.concat(skill);
    this.setState({ skills: newState });
  },

  removeSkillFromDOM(id) {
    var newSkills = this.state.skills.filter((skill) => {
      return skill.id != id;
    });
    this.setState({ skills: newSkills })
  },

  updateSkillFromDOM(skill) {
    var skills = this.state.skills.filter((s) => {
      return s.id != skill.id;
    })
    skills.push(skill);
    this.setState({skills: skills});
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/skills/${id}`,
      type: 'DELETE',
      success: (response) => {
        this.removeSkillFromDOM(id)
        console.log('Success', response);
      }
    });
  },

  handleUpdate(skill) {
    $.ajax({
      url: `/api/v1/skills/${skill.id}`,
      type: 'PUT',
      data: { skill: skill },
      success: (response) => {
        console.log('success')
        this.updateSkillFromDOM(skill)
      }
    })
  },


  render() {
    return (
      <div>
        <NewSkills handleSubmit={this.handleSubmit} />
        <AllSkills skills={this.state.skills}
                   handleDelete={this.handleDelete}
                   handleUpdate={this.handleUpdate} />
      </div>
    )
  }
});
