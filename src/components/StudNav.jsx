import React from 'react'
import { Link } from 'react-router-dom'

const StudNav = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand text-white" to="#">Resume App</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link text-white" to="/">Register</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/buildresume">create Resume</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/viewresume">View Resume</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default StudNav