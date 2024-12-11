
const UserCard = () => {
  return (
    <div className="user-card">
        <div className="search-section">
            <label >Enter User Name</label>
            <input type="text" className="userName" 
            placeholder="Enter user name..."/>
            <button>Search</button>
        </div>
        <div className="results-section">
            
        </div>
    </div>
  )
}

export default UserCard