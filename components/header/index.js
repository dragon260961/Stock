import Head from "next/head";
function index() {
  return (
    <>
      <div class="header">
        <div class="container">
          <div class="nav-top">
            <nav class="navbar navbar-default">
              <div class="navbar-header nav_2">
                <button
                  type="button"
                  class="navbar-toggle collapsed navbar-toggle1"
                  data-toggle="collapse"
                  data-target="#bs-dangerdropdown-tabs"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="/" class="hyper">
                      <span>Stock</span>
                    </a>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#"
                      class="dropdown-toggle hyper"
                      data-toggle="dropdown"
                    >
                      <span>
                        Promotion<b class="caret"></b>
                      </span>
                    </a>
                    <ul class="dropdown-menu multi">
                      <div class="row">
                        <div class="col-sm-3">
                          <ul class="multi-column-dropdown">
                            <li>
                              <a href="/create">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                                Create Products
                              </a>
                            </li>
                            <li>
                              <a href="/adminproduct">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                                All Products
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#"
                      class="dropdown-toggle hyper"
                      data-toggle="dropdown"
                    >
                      <span>
                        Contact<b class="caret"></b>
                      </span>
                    </a>
                    <ul class="dropdown-menu multi">
                      <div class="row">
                        <div class="col-sm-3">
                          <ul class="multi-column-dropdown">
                            <li>
                              <a href="/">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                                All Products
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
