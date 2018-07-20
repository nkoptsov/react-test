import React from 'react';

class Main extends React.Component {
  constructor() {
    super();
    this.props = {
      firstName: 'nik',
      lastName: 'nik',
    };
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>
            Login:
            <input
              type="text"
              id="login"
              name="login"
              placeholder="login"
              value={this.props.firstName}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            FirstName:
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="firstName"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            LastName:
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="lastName"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input type="email" id="email" name="email" placeholder="email" />
          </label>
        </div>
        <label>
          PhoneNumber:
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="phoneNumber"
          />
        </label>
        <label for="city">City</label>
        <input type="text" id="city" name="city" placeholder="city" />

        <label for="country">Country</label>
        <input type="text" id="country" name="country" placeholder="country" />

        <label for="gender">Gender</label>
        <input type="text" id="gender" name="gender" placeholder="gender" />

        <label for="birthday">Birthday</label>
        <input
          type="text"
          id="birthday"
          name="birthday"
          placeholder="birthday"
        />

        <label for="photo">Photo</label>
        <input type="text" id="photo" name="photo" placeholder="photo" />

        <label for="about">About</label>
        <input type="text" id="about" name="about" placeholder="about" />

        <input type="submit" name="submit" value="submit" />
      </form>
    );
  }
}

export default Main;
