import React from 'react'

const Sidebar = () => {
  return (

    <div>
    
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          
          <link class="list-group-item list-group-item-action py-2 ripple">
            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Expanded menu</span>
          </link>
          
          <ul id="collapseExample1" class="collapse show list-group list-group-flush">
            <li class="list-group-item py-1">
              <link to="" class="text-reset">link</link>
            </li>
            <li class="list-group-item py-1">
              <link to="" class="text-reset">link</link>
            </li>
           
          </ul>
        
          <link class="list-group-item list-group-item-action py-2 ripple" >
            <i class="fas fa-chart-area fa-fw me-3"></i><span>Collapsed menu</span>
          </link>
        
          <ul id="collapseExample2" class="collapse list-group list-group-flush">
            <li class="list-group-item py-1">
              <link to="" class="text-reset">link</link>
            </li>
            <li class="list-group-item py-1">
              <link to="" class="text-reset">link</link>
            </li>
            <li class="list-group-item py-1">
              <link to="" class="text-reset">link</link>
            </li>
            <li class="list-group-item py-1">
              <link to="" class="text-reset">link</link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    
      <div class="container-fluid">
      
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>

        
        <link class="navbar-brand" to="#">
          <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="25" alt="MDB Logo"
            loading="lazy" />
        </link>
        
        <form class="d-none d-md-flex input-group w-auto my-auto">
          <input autocomplete="off" type="search" class="form-control rounded"
            placeholder='Search (ctrl + "/" to focus)'  />
          <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
        </form>

        
        <ul class="navbar-nav ms-auto d-flex flex-row">
  
          <li class="nav-item dropdown">
            <link class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" to="#" >
              <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </link>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenulink">
              <li><link class="dropdown-item" to="#">Some news</link></li>
              <li><link class="dropdown-item" to="#">Another news</link></li>
             
            </ul>
          </li>

    
          <li class="nav-item">
            <link class="nav-link me-3 me-lg-0" to="#">
              <i class="fas fa-fill-drip"></i>
            </link>
          </li>
      
          <li class="nav-item me-3 me-lg-0">
            <link class="nav-link" to="#">
              <i class="fab fa-github"></i>
            </link>
          </li>

    
          <li class="nav-item dropdown">

            <link class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" to="#" >
              <i class="united kingdom flag m-0"></i>
            </link>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <link class="dropdown-item" to="#"><i class="united kingdom flag"></i>English
                  <i class="fa fa-check text-success ms-2"></i></link>
              </li>
              <li>
                <hr class="dropdown-divider" />
            <link
              class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
              to="#">
            
              <i class="flag-united-kingdom flag m-0"></i>
            </link>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <link class="dropdown-item" to="#"
                  ><i class="flag-united-kingdom flag"></i>English
                  <i class="fa fa-check text-success ms-2"></i
                ></link>

              </li>
              <li>
                <link class="dropdown-item" to="#"><i class="flag-poland flag"></i>Polski</link>
              </li>
              <li>
                <link class="dropdown-item" to="#"><i class="flag-china flag"></i>中文</link>
              </li>
              <li>
                <link class="dropdown-item" to="#"><i class="flag-japan flag"></i>日本語</link>
              </li>
              <li>
                <link class="dropdown-item" to="#"><i class="flag-germany flag"></i>Deutsch</link>
              </li>
            
            </ul>
          </li>

      
          <li class="nav-item dropdown">
            <link class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" to="#">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded-circle"
                height="22" alt="Avatar" loading="lazy" />
            </link>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenulink">
              <li><link class="dropdown-item" to="#">My profile</link></li>
              <li><link class="dropdown-item" to="#">Settings</link></li>
              <li><link class="dropdown-item" to="#">Logout</link></li>
            </ul>
          </li>
        </ul>
      
    
</li></ul></div></nav></div>
  )
}

export default Sidebar;