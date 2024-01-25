import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://i.ibb.co/2jbHv10/pic2cropped.jpg',
    name: 'Srilaxmi Rampelli',
    role: 'Beginner Fullstack Developer',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://i.ibb.co/KL3yQq7/1704896263576-e-1706796000-v-beta-t-N2-XPPt-GZop-Xqgzd-Hyluw-XJWYdxajwo-QG8x8-Jf-FSFac-U.jpg',
    name: 'Shiva Mothukuri',
    role: 'Wordpress Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://i.ibb.co/PwjgBMv/image.png',
    name: 'Manisha Pallikonda',
    role: 'Java Developer',
  },

  {
    uniqueNo: 4,
    imageUrl: 'https://i.ibb.co/LnfFP59/image.png',
    name: 'Rakshitha Thum',
    role: 'Python Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: initialUserDetailsList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUserData = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredUserData})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          placeHolder="Search user"
          className="search-input"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <div className="list-main-container">
          <ul className="list-container">
            {searchResults.map(eachUser => (
              <UserProfile
                userDetails={eachUser}
                deleteUser={this.deleteUser}
                key={eachUser.uniqueNo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
